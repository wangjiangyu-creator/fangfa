import assert from "node:assert/strict";
import { access, mkdir, readdir, readFile, rm } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import * as esbuild from "esbuild";

const root = process.cwd();
const srcDir = path.join(root, "src");
const tempDir = path.join(root, ".tmp");
const requiredNotice =
  "本网站由香港城市大学法律学院王江雨教授利用Codex创建，仅服务于其本人的教学研究目的";
const misplacedFooterLink =
  '<a href="/topics/theory-building">专题11：法学研究与写作中的理论构建</a>';

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? listFiles(fullPath) : fullPath;
    }),
  );
  return files.flat();
}

const sourceFiles = await listFiles(srcDir);
const sourceText = (
  await Promise.all(sourceFiles.map((file) => readFile(file, "utf8")))
).join("\n");

assert.equal(sourceText.includes("LW6100"), false, "源码页面内容不应再出现 LW6100");

const astroConfig = await readFile(path.join(root, "astro.config.mjs"), "utf8");
const layout = await readFile(path.join(srcDir, "layouts", "BaseLayout.astro"), "utf8");
const index = await readFile(path.join(srcDir, "pages", "index.astro"), "utf8");
const theoryPage = await readFile(path.join(srcDir, "pages", "theory.astro"), "utf8");
const interdisciplinaryPage = await readFile(
  path.join(srcDir, "pages", "interdisciplinary.astro"),
  "utf8",
);
const uiFiles = sourceFiles.filter((file) =>
  ["/pages/", "/layouts/", "/components/"].some((segment) => file.includes(segment)),
);
const uiText = (await Promise.all(uiFiles.map((file) => readFile(file, "utf8")))).join("\n");
const deployWorkflow = await readFile(
  path.join(root, ".github", "workflows", "deploy.yml"),
  "utf8",
);

assert.ok(
  astroConfig.includes('site: "https://fangfa.eastlaw.wang"'),
  "GitHub Pages 自定义域名应配置为 fangfa.eastlaw.wang",
);
assert.ok(astroConfig.includes('base: "/"'), "自定义域名发布时站点路径应配置为根目录 /");
assert.equal(uiText.includes('href="/'), false, "页面模板应通过 siteHref 统一生成站内链接");
assert.ok(deployWorkflow.includes("actions/deploy-pages"), "应包含 GitHub Pages 自动部署工作流");
assert.ok(layout.includes(requiredNotice), "全站页尾应包含网站创建和用途说明");
assert.equal(layout.includes(misplacedFooterLink), false, "全站页尾不应放置专题11链接");
assert.ok(index.includes(requiredNotice), "首页标题下方应包含网站创建和用途说明");
assert.ok(theoryPage.includes("resource.url ? <a"), "理论页阅读卡片应渲染文献原文链接");
assert.ok(interdisciplinaryPage.includes("resource.url ? <a"), "交叉页阅读卡片应渲染文献原文链接");

await mkdir(tempDir, { recursive: true });
const bundledDataPath = path.join(tempDir, `courseData-${Date.now()}.mjs`);

await esbuild.build({
  entryPoints: [path.join(srcDir, "content", "courseData.ts")],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: bundledDataPath,
  logLevel: "silent",
});

const { examples, exercises, resources, topics } = await import(pathToFileURL(bundledDataPath));
await rm(bundledDataPath, { force: true });

assert.ok(resources.length >= 88, `文献数量应不少于 88 条，当前为 ${resources.length}`);
assert.ok(
  resources.filter((item) => item.language === "中文").length >= 22,
  "中文文献数量应不少于 22 条",
);
assert.ok(
  resources.filter((item) => item.language === "英文").length >= 64,
  "英文文献数量应不少于 64 条",
);
assert.ok(examples.length >= 40, `范例数量应不少于 40 个，当前为 ${examples.length}`);
assert.ok(exercises.length >= 24, `练习数量应不少于 24 个，当前为 ${exercises.length}`);

const samplePaperExamples = examples.filter((item) => item.method.includes("课程附件"));
assert.ok(
  samplePaperExamples.length >= 130,
  `课程 PDF 附件范例应不少于 130 个，当前为 ${samplePaperExamples.length}`,
);

const samplePaperUrls = samplePaperExamples.map((item) => item.url);
assert.equal(
  new Set(samplePaperUrls).size,
  samplePaperUrls.length,
  "课程 PDF 附件范例不应指向重复附件 URL",
);

for (const example of samplePaperExamples) {
  assert.ok(example.url?.startsWith("/sample-papers/"), `${example.title} 应指向 sample-papers 附件目录`);
  assert.ok(example.url?.endsWith(".pdf"), `${example.title} 应指向 PDF 附件`);
  await access(path.join(root, "public", example.url));
}

const resourcesWithoutUrls = resources.filter((item) => !item.url);
const nonAttachmentExamplesWithoutUrls = examples.filter(
  (item) => !item.method.includes("课程附件") && !item.url,
);

assert.equal(
  resourcesWithoutUrls.length,
  0,
  `非附件文献应尽量提供可信原文链接，缺少链接：${resourcesWithoutUrls
    .map((item) => item.id)
    .join(", ")}`,
);

assert.equal(
  nonAttachmentExamplesWithoutUrls.length,
  0,
  `非附件范例应尽量提供可信原文链接，缺少链接：${nonAttachmentExamplesWithoutUrls
    .map((item) => item.id)
    .join(", ")}`,
);

const assertUniqueIds = (items, label) => {
  const ids = items.map((item) => item.id);
  assert.equal(new Set(ids).size, ids.length, `${label} 不应存在重复 id`);
};

assertUniqueIds(resources, "文献");
assertUniqueIds(examples, "范例");
assertUniqueIds(exercises, "练习");

const resourceIds = new Set(resources.map((item) => item.id));
const exampleIds = new Set(examples.map((item) => item.id));
const exerciseIds = new Set(exercises.map((item) => item.id));
const thinkingTopic = topics.find((topic) => topic.slug === "thinking-methods");

assert.ok(thinkingTopic, "应存在专题2：思维方法");
for (const phrase of ["描述性写作", "批判性写作", "概念化", "谬误识别", "论证结构"]) {
  assert.ok(
    JSON.stringify(thinkingTopic).includes(phrase),
    `专题2应吸收第2讲 PPT 的核心内容：${phrase}`,
  );
}
for (const resourceId of [
  "popper-three-worlds",
  "paul-elder-critical-thinking",
  "levi-legal-reasoning",
  "james-thinking-skills-law",
  "steel-critical-legal-reading",
  "陈金钊-法律思维规则",
  "武宏志-法律论辩批判性思维",
  "陈学权-批判性思维误用",
]) {
  assert.ok(resourceIds.has(resourceId), `应新增思维方法阅读材料：${resourceId}`);
  assert.ok(thinkingTopic.resourceIds.includes(resourceId), `专题2应关联阅读材料：${resourceId}`);
}

const theoryTopic = topics.find((topic) => topic.slug === "theory-building");
assert.ok(theoryTopic, "应存在专题11：理论构建");
for (const resourceId of [
  "hart-natural-rights",
  "fuller-speluncean",
  "dworkin-model-rules",
  "dworkin-hard-cases",
  "dworkin-law-as-interpretation",
  "rawls-two-concepts-rules",
  "rawls-justice-fairness",
  "rawls-public-reason",
  "raz-legal-principles",
  "raz-authority-law-morality",
  "raz-rule-law-virtue",
  "finnis-natural-law-reasoning",
  "kelsen-pure-theory-analytical",
  "kelsen-foundations-democracy",
  "kelsen-natural-law-tribunal",
  "张文显-部门法哲学引论",
  "张文显-法学范畴意识",
  "舒国滢-抽象法学理论",
  "雷磊-规范法学发展",
  "陈景辉-哈特为什么重要",
]) {
  assert.ok(resourceIds.has(resourceId), `应新增理论经典阅读材料：${resourceId}`);
  assert.ok(theoryTopic.resourceIds.includes(resourceId), `专题11应关联理论经典阅读材料：${resourceId}`);
}

for (const topic of topics) {
  assert.ok(topic.overview?.length >= 2, `${topic.title} 应至少有两段导读`);
  assert.ok(topic.learningGoals?.length >= 3, `${topic.title} 应至少有三个学习目标`);
  assert.ok(topic.methodSteps?.length >= 3, `${topic.title} 应至少有三个方法展开步骤`);
  assert.ok(topic.pitfalls?.length >= 2, `${topic.title} 应至少有两个常见误区`);
  assert.ok(topic.seminarQuestions?.length >= 2, `${topic.title} 应至少有两个讨论问题`);
  assert.ok(topic.resourceIds.length >= 7, `${topic.title} 应关联至少 7 条文献`);
  assert.ok(topic.exampleIds.length >= 4, `${topic.title} 应关联至少 4 个范例`);

  for (const id of topic.resourceIds) {
    assert.ok(resourceIds.has(id), `${topic.title} 引用了不存在的文献 id: ${id}`);
  }
  for (const id of topic.exampleIds) {
    assert.ok(exampleIds.has(id), `${topic.title} 引用了不存在的范例 id: ${id}`);
  }
  for (const id of topic.exerciseIds) {
    assert.ok(exerciseIds.has(id), `${topic.title} 引用了不存在的练习 id: ${id}`);
  }
}

console.log("Site content checks passed.");
