# 法律研究与思维方法课程网站

这是一个中文为主的 Astro 静态课程网站，定位为学生课程中心。

## 公开网站

正式公开地址：

```text
https://fangfa.eastlaw.wang/
```

## 本地预览

当前会话已经启动本地预览：

```bash
http://127.0.0.1:4321/
```

如果之后需要重新启动，可在本文件夹运行：

```bash
node node_modules/astro/astro.js dev --host 127.0.0.1 --port 4321
```

## 构建

```bash
node node_modules/astro/astro.js build
```

构建结果位于 `dist/`。

## 内容维护

课程专题、文献、范例和练习集中维护在：

```text
src/content/courseData.ts
```

专题详情页由 `src/pages/topics/[slug].astro` 自动生成。新增专题时，在 `topics` 数组中添加一条记录，并为其关联文献、范例和练习 ID。目前课程包含 12 个专题，其中专题11为理论构建，专题12为人工智能与法学研究。
