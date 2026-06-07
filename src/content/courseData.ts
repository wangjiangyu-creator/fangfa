import {
  additionalExamples,
  additionalExercises,
  additionalResources,
  topicAssociations,
  topicDetails,
} from "./enrichment";
import { samplePaperExamples } from "./samplePaperExamples";

export type Resource = {
  id: string;
  title: string;
  author: string;
  type: "专著" | "论文" | "博士论文" | "工具书" | "法规/指南";
  language: "中文" | "英文";
  tags: string[];
  citation: string;
  note: string;
  url?: string;
};

export type Example = {
  id: string;
  title: string;
  author: string;
  method: string;
  question: string;
  contribution: string;
  discussion: string[];
  citation: string;
  url?: string;
};

export type Exercise = {
  id: string;
  title: string;
  goal: string;
  steps: string[];
  output: string;
  tags: string[];
};

export type TopicDetail = {
  overview: string[];
  learningGoals: string[];
  methodSteps: string[];
  pitfalls: string[];
  seminarQuestions: string[];
};

type TopicSeed = {
  number: number;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  keyQuestion: string;
  concepts: string[];
  methods: string[];
  resourceIds: string[];
  exampleIds: string[];
  exerciseIds: string[];
  researchPrompt: string;
};

export type Topic = TopicSeed & TopicDetail;

const mergeUnique = (base: string[], extra: string[] = []) => [...new Set([...base, ...extra])];

const baseResources: Resource[] = [
  {
    id: "booth-craft",
    title: "The Craft of Research",
    author: "Wayne C. Booth, Gregory G. Colomb, Joseph M. Williams, Joseph Bizup, William T. FitzGerald",
    type: "专著",
    language: "英文",
    tags: ["研究问题", "论证", "写作"],
    citation: "Booth et al., The Craft of Research, 4th ed., University of Chicago Press, 2016.",
    note: "适合帮助学生理解从兴趣、问题、论证到写作呈现的完整研究过程。",
    url: "https://press.uchicago.edu/ucp/books/book/chicago/C/bo215874008.html"
  },
  {
    id: "mcconville-chui",
    title: "Research Methods for Law",
    author: "Mike McConville and Wing Hong Chui",
    type: "专著",
    language: "英文",
    tags: ["法学方法", "实证研究", "比较法"],
    citation: "McConville & Chui eds., Research Methods for Law, 2nd ed., Edinburgh University Press, 2017.",
    note: "法学研究方法入门读物，可作为全课程的背景阅读。",
    url: "https://edinburghuniversitypress.com/book-research-methods-for-law-298.html"
  },
  {
    id: "van-hoecke-methodologies",
    title: "Methodologies of Legal Research: Which Kind of Method for What Kind of Discipline?",
    author: "Mark Van Hoecke",
    type: "专著",
    language: "英文",
    tags: ["法学学科", "方法论", "理论"],
    citation: "Van Hoecke ed., Methodologies of Legal Research, Hart Publishing, 2011.",
    note: "围绕法学作为解释性、规范性、经验性学科的多重性质展开。",
    url: "https://www.bloomsbury.com/uk/methodologies-of-legal-research-9781849461702/"
  },
  {
    id: "watkins-burton",
    title: "Research Methods in Law",
    author: "Dawn Watkins and Mandy Burton",
    type: "专著",
    language: "英文",
    tags: ["法学方法", "实证研究", "文献综述"],
    citation: "Watkins & Burton eds., Research Methods in Law, 2nd ed., Routledge, 2017.",
    note: "覆盖教义学、社会法学、比较法、实证与跨学科路径。",
    url: "https://www.routledge.com/Research-Methods-in-Law/Watkins-Burton/p/book/9781138249837"
  },
  {
    id: "tiller-cross-empirical",
    title: "What is Legal Doctrine?",
    author: "Emerson H. Tiller and Frank B. Cross",
    type: "论文",
    language: "英文",
    tags: ["法教义学", "法解释", "法律推理"],
    citation: "Tiller & Cross, What is Legal Doctrine?, Northwestern University Law Review, 100(1), 2006.",
    note: "帮助学生把法教义学理解为法律规则、原则和理由的组织方式。",
    url: "https://law.bepress.com/nwwps-plltp/art41/"
  },
  {
    id: "zweigert-kotz",
    title: "An Introduction to Comparative Law",
    author: "Konrad Zweigert and Hein Kotz",
    type: "专著",
    language: "英文",
    tags: ["比较法", "功能主义", "法律移植"],
    citation: "Zweigert & Kotz, An Introduction to Comparative Law, 3rd ed., Oxford University Press, 1998.",
    note: "比较法经典读物，适合讨论功能主义方法及其限制。",
    url: "https://global.oup.com/academic/product/an-introduction-to-comparative-law-9780198268598"
  },
  {
    id: "siems-comparative",
    title: "Comparative Law",
    author: "Mathias Siems",
    type: "专著",
    language: "英文",
    tags: ["比较法", "方法论"],
    citation: "Siems, Comparative Law, 3rd ed., Cambridge University Press, 2022.",
    note: "较新版本的比较法教材，适合补充当代比较法争议。",
    url: "https://www.cambridge.org/core/books/comparative-law/19B3183922D4E648E485291758B0F10C"
  },
  {
    id: "epstein-king",
    title: "The Rules of Inference",
    author: "Lee Epstein and Gary King",
    type: "论文",
    language: "英文",
    tags: ["实证研究", "因果推论", "研究设计"],
    citation: "Epstein & King, The Rules of Inference, University of Chicago Law Review, 69(1), 2002.",
    note: "实证法学研究设计的核心阅读，特别适合讨论样本、偏差和推论。",
    url: "https://epstein.wustl.edu/rules"
  },
  {
    id: "posner-eal",
    title: "Economic Analysis of Law",
    author: "Richard A. Posner",
    type: "专著",
    language: "英文",
    tags: ["法经济学", "交叉学科", "规范分析"],
    citation: "Posner, Economic Analysis of Law, 9th ed., Wolters Kluwer, 2014.",
    note: "展示经济学如何改变法律问题、制度设计与责任分配的分析方式。",
    url: "https://openlibrary.org/books/OL29673677M/Economic_Analysis_of_Law"
  },
  {
    id: "hart-concept",
    title: "The Concept of Law",
    author: "H. L. A. Hart",
    type: "专著",
    language: "英文",
    tags: ["法理学", "法律实证主义", "理论"],
    citation: "Hart, The Concept of Law, 3rd ed., Oxford University Press, 2012.",
    note: "理解法律实证主义、规则、承认规则与法律体系的经典文本。",
    url: "https://global.oup.com/academic/product/the-concept-of-law-9780199644704"
  },
  {
    id: "dworkin-rights",
    title: "Taking Rights Seriously",
    author: "Ronald Dworkin",
    type: "专著",
    language: "英文",
    tags: ["法哲学", "原则", "法律解释"],
    citation: "Dworkin, Taking Rights Seriously, Harvard University Press, 1977.",
    note: "适合讨论原则、权利、解释与法律论证的关系。",
    url: "https://www.hup.harvard.edu/books/9780674867116"
  },
  {
    id: "sunstein-legal-reasoning",
    title: "Legal Reasoning and Political Conflict",
    author: "Cass R. Sunstein",
    type: "专著",
    language: "英文",
    tags: ["法律思维", "论证", "类比"],
    citation: "Sunstein, Legal Reasoning and Political Conflict, Oxford University Press, 1996.",
    note: "可用于说明法律推理中的类比、低层次原则与制度约束。",
    url: "https://academic.oup.com/book/50462"
  },
  {
    id: "unesco-ai-ethics",
    title: "Recommendation on the Ethics of Artificial Intelligence",
    author: "UNESCO",
    type: "法规/指南",
    language: "英文",
    tags: ["人工智能", "伦理", "治理"],
    citation: "UNESCO, Recommendation on the Ethics of Artificial Intelligence, 2021.",
    note: "为讨论 AI 治理、偏见、透明度、责任和学术诚信提供规范背景。",
    url: "https://unesdoc.unesco.org/ark:/48223/pf0000381137"
  },
  {
    id: "citron-pasquale",
    title: "The Scored Society: Due Process for Automated Predictions",
    author: "Danielle Keats Citron and Frank Pasquale",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "算法偏见", "正当程序"],
    citation: "Citron & Pasquale, The Scored Society, Washington Law Review, 89, 2014.",
    note: "适合专题12讨论算法评分、自动化预测和程序保障。",
    url: "https://digitalcommons.law.uw.edu/wlr/vol89/iss1/2/"
  },
  {
    id: "苏力-送法下乡",
    title: "送法下乡：中国基层司法制度研究",
    author: "苏力",
    type: "专著",
    language: "中文",
    tags: ["法社会学", "交叉学科", "中国法"],
    citation: "苏力：《送法下乡：中国基层司法制度研究》，中国政法大学出版社。",
    note: "展示法律制度如何放在基层社会结构、实践和经验材料中理解。",
    url: "https://ir.pku.edu.cn/handle/20.500.11897/100548"
  },
  {
    id: "梁慧星-民法解释学",
    title: "民法解释学",
    author: "梁慧星",
    type: "专著",
    language: "中文",
    tags: ["法解释学", "法教义学", "民法"],
    citation: "梁慧星：《民法解释学》，法律出版社。",
    note: "中文法解释学的重要参考，可用于专题6。",
    url: "https://books.google.com/books/about/%E6%B0%91%E6%B3%95%E8%A7%A3%E9%87%8A%E5%AD%A6.html?id=O-YfAAAACAAJ"
  },
  {
    id: "bacharach-theory",
    title: "Organizational Theories: Some Criteria for Evaluation",
    author: "Samuel B. Bacharach",
    type: "论文",
    language: "英文",
    tags: ["理论构建", "概念", "假设", "边界条件"],
    citation: "Bacharach, S. B. (1989). Organizational Theories: Some Criteria for Evaluation. Academy of Management Review, 14(4), 496-515.",
    note: "课件引用的理论构建核心文献，强调理论由概念、命题、逻辑关系、假设和边界条件构成。",
    url: "https://journals.aom.org/doi/abs/10.5465/amr.1989.4308374"
  },
  {
    id: "whetten-theory-contribution",
    title: "What Constitutes a Theoretical Contribution?",
    author: "David A. Whetten",
    type: "论文",
    language: "英文",
    tags: ["理论构建", "理论贡献", "研究问题"],
    citation: "Whetten, D. A. (1989). What Constitutes a Theoretical Contribution? Academy of Management Review, 14(4), 490-495.",
    note: "适合训练学生用 what、how、why、who/where/when 检查一个理论框架是否真正有贡献。",
    url: "https://journals.aom.org/doi/10.5465/amr.1989.4308371"
  },
  {
    id: "sutton-staw-theory-not",
    title: "What Theory is Not",
    author: "Robert I. Sutton and Barry M. Staw",
    type: "论文",
    language: "英文",
    tags: ["理论构建", "写作", "理论贡献"],
    citation: "Sutton, R. I., & Staw, B. M. (1995). What Theory is Not. Administrative Science Quarterly, 40(3), 371-384.",
    note: "帮助学生区分理论与文献罗列、变量清单、图表、假设或单纯数据描述。",
    url: "https://www.gsb.stanford.edu/faculty-research/publications/what-theory-not"
  },
  {
    id: "taekema-frameworks",
    title: "Theoretical and Normative Frameworks for Legal Research: Putting Theory into Practice",
    author: "Sanne Taekema",
    type: "论文",
    language: "英文",
    tags: ["理论框架", "规范理论", "法学方法", "研究设计"],
    citation: "Taekema, S. (2018). Theoretical and Normative Frameworks for Legal Research: Putting Theory into Practice. Law and Method.",
    note: "直接讨论法学研究中的理论框架、规范框架及其与经验研究的关系。",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3123667"
  },
  {
    id: "jabareen-conceptual-framework",
    title: "Building a Conceptual Framework: Philosophy, Definitions, and Procedure",
    author: "Yosef Jabareen",
    type: "论文",
    language: "英文",
    tags: ["理论框架", "概念框架", "交叉学科", "方法论"],
    citation: "Jabareen, Y. (2009). Building a Conceptual Framework: Philosophy, Definitions, and Procedure. International Journal of Qualitative Methods, 8(4).",
    note: "适合说明概念框架不是概念堆砌，而是由相互支持的概念网络构成。",
    url: "https://journals.sagepub.com/doi/full/10.1177/160940690900800406"
  },
  {
    id: "sep-legal-positivism",
    title: "Legal Positivism",
    author: "Leslie Green and Thomas Adams",
    type: "工具书",
    language: "英文",
    tags: ["法理学", "法律实证主义", "理论框架"],
    citation: "Green, L., & Adams, T. Legal Positivism. Stanford Encyclopedia of Philosophy.",
    note: "用于展示一种理论框架如何把法律有效性、社会事实和道德评价区分开。",
    url: "https://plato.stanford.edu/archives/sum2020/entries/legal-positivism/"
  },
  {
    id: "sep-legal-interpretivism",
    title: "Legal Interpretivism",
    author: "Nicos Stavropoulos",
    type: "工具书",
    language: "英文",
    tags: ["法理学", "法律解释", "理论框架"],
    citation: "Stavropoulos, N. Legal Interpretivism. Stanford Encyclopedia of Philosophy.",
    note: "用于说明解释主义如何把制度实践、原则、适合性与正当化组织为法律理论。",
    url: "https://plato.stanford.edu/entries/law-interpretivist/"
  },
  {
    id: "cornell-critical-legal-theory",
    title: "Critical Legal Theory",
    author: "Cornell Legal Information Institute",
    type: "工具书",
    language: "英文",
    tags: ["批判法学", "理论框架", "权力"],
    citation: "Cornell Legal Information Institute, Wex: Critical Legal Theory.",
    note: "适合引导学生理解批判法学如何把法律、社会偏见和权力结构连接起来。",
    url: "https://www.law.cornell.edu/wex/critical_legal_theory"
  }
];

export const resources: Resource[] = [...baseResources, ...additionalResources];

const baseExamples: Example[] = [
  {
    id: "peat-comparative-reasoning",
    title: "Legitimate Interpretation: Comparative Reasoning in International Courts and Tribunals",
    author: "Daniel Peat",
    method: "比较法与国际法解释",
    question: "国际法院和仲裁庭为何、如何使用国内法进行国际法解释？",
    contribution: "把国内法与国际法解释之间被忽视的连接系统化，并说明比较推理的合法性条件。",
    discussion: ["研究问题如何从既有文献中的空白产生？", "比较法材料在这里是证据、理由，还是解释资源？"],
    citation: "Peat, D. (2015). Doctoral thesis. https://doi.org/10.17863/CAM.75238",
    url: "https://doi.org/10.17863/CAM.75238"
  },
  {
    id: "fasel-animal-rights",
    title: "More Equal Than Others: Animals in the Age of the Human Rights Aristocracy",
    author: "Raffael N. Fasel",
    method: "法哲学、思想史与规范论证",
    question: "赋予非人动物基本权利是否会削弱人的权利？",
    contribution: "通过思想史重建权利观的两种类型，回应当代动物权利争议。",
    discussion: ["历史材料如何服务于规范论证？", "作者如何避免把价值立场伪装成事实结论？"],
    citation: "Fasel, R. N. (2019). Doctoral thesis. https://doi.org/10.17863/CAM.44968",
    url: "https://doi.org/10.17863/CAM.44968"
  },
  {
    id: "charlotin-authorities",
    title: "\"Authorities\" in International Dispute Settlement: a Data Analysis",
    author: "Damien Charlotin",
    method: "实证研究、数据分析、国际法",
    question: "国际争端解决中裁判机关和当事人如何引用判例与学说？",
    contribution: "以数据分析方式揭示国际争端中的权威引用实践。",
    discussion: ["数据如何改变我们对国际法渊源和先例的理解？", "样本、编码和解释偏差可能在哪里出现？"],
    citation: "Charlotin, D. (2020). Doctoral thesis. https://doi.org/10.17863/CAM.59416",
    url: "https://doi.org/10.17863/CAM.59416"
  },
  {
    id: "willey-short-termism",
    title: "Beyond Short-Termism: Effective Regulatory and Financial Industry Reform for Sustainable Long-Term Investment in Publicly Listed Companies",
    author: "Katrina Willey",
    method: "公司法、监管研究、制度改革",
    question: "资本市场短期主义如何影响上市公司长期投资，监管改革应如何回应？",
    contribution: "系统评估主要资本市场改革方案，并提出面向长期投资的监管设计。",
    discussion: ["问题陈述如何连接市场事实和规范目标？", "制度改革建议需要什么证据支撑？"],
    citation: "Willey, K. (2019). Doctoral thesis. https://doi.org/10.17863/CAM.36956",
    url: "https://doi.org/10.17863/CAM.36956"
  },
  {
    id: "pusztai-causation-state",
    title: "Causation in the Law of State Responsibility",
    author: "Dora M. Pusztai",
    method: "法教义学、国际法、概念分析",
    question: "国家责任法中因果关系是否以及如何构成责任条件和责任范围？",
    contribution: "重构国家责任法中因果关系的功能，回应国际法委员会条款后的争议。",
    discussion: ["概念分析如何从判例和条文中提炼规则？", "教义学研究怎样处理规则中的沉默和例外？"],
    citation: "Pusztai, D. M. (2017). Doctoral thesis. https://doi.org/10.17863/CAM.13857",
    url: "https://doi.org/10.17863/CAM.13857"
  },
  {
    id: "gascoigne-wto-causation",
    title: "Causation in the Law of the World Trade Organization",
    author: "Charlotte E. Gascoigne",
    method: "法教义学、WTO 法、比较条文分析",
    question: "WTO 协定中的因果关系和非归因分析出现在哪些规则中？",
    contribution: "识别六类需要因果与非归因分析的 WTO 法领域，并解释其共同结构。",
    discussion: ["如何把分散规则整理成统一研究问题？", "条文解释与案例分析如何互相校验？"],
    citation: "Gascoigne, C. E. (2018). Doctoral thesis. https://doi.org/10.17863/CAM.32279",
    url: "https://doi.org/10.17863/CAM.32279"
  },
  {
    id: "leow-companies-private-law",
    title: "Companies in Private Law: Attributing Acts and Knowledge",
    author: "Rachel P. S. Leow",
    method: "私法教义学、公司法、概念体系化",
    question: "公司作为法人如何被归属自然人的行为和知识？",
    contribution: "澄清私法义务体系中的归属规则，并区分不同法律语境中的归属功能。",
    discussion: ["何为真正的教义学贡献？", "同一概念在合同、侵权、不当得利中如何保持边界？"],
    citation: "Leow, R. P. S. (2017). Doctoral thesis. https://doi.org/10.17863/CAM.17143",
    url: "https://doi.org/10.17863/CAM.17143"
  },
  {
    id: "bottini-shareholder",
    title: "The Admissibility of Shareholder Claims: Standing, Causes of Action, and Damages",
    author: "Gabriel Bottini",
    method: "投资法、诉权分析、规范批判",
    question: "投资仲裁中股东索赔的可受理性如何影响重复赔偿和第三方利益？",
    contribution: "批判股东条约请求与合同请求被简单区分的做法，提出更完整的适用法分析。",
    discussion: ["作者如何把技术性问题转化为制度风险？", "规范批判如何依赖严密的教义学分析？"],
    citation: "Bottini, G. (2017). Doctoral thesis. https://doi.org/10.17863/CAM.13852",
    url: "https://doi.org/10.17863/CAM.13852"
  }
];

export const examples: Example[] = [...baseExamples, ...additionalExamples, ...samplePaperExamples];

const baseExercises: Exercise[] = [
  {
    id: "bias-workshop",
    title: "偏见识别工作坊",
    goal: "识别观察者偏见、选择偏差、确认偏差、发表偏差和资金偏差。",
    steps: ["选取一个法律争议新闻或论文摘要。", "标出可能影响问题、材料和结论的偏见。", "提出两个降低偏差的研究设计改进。"],
    output: "一页偏见诊断表。",
    tags: ["批判性思维", "研究伦理"]
  },
  {
    id: "question-refinement",
    title: "研究问题细化",
    goal: "把宽泛兴趣变成具体、可回答、有意义的研究问题。",
    steps: ["写下一个宽泛问题，例如“AI 对法律好吗”。", "限定法域、制度、群体、时间和证据类型。", "写出研究意义陈述。"],
    output: "一个精炼问题和 150 字研究意义陈述。",
    tags: ["研究问题", "选题"]
  },
  {
    id: "literature-map",
    title: "文献综述地图",
    goal: "理解文献综述不是堆砌摘要，而是定位争议、空白和自己的贡献。",
    steps: ["围绕一个研究问题找 6 篇文献。", "按观点、方法或材料分组。", "写出一个文献空白和一个可能贡献。"],
    output: "文献矩阵和 300 字综述段落。",
    tags: ["文献综述", "写作"]
  },
  {
    id: "argument-chain",
    title: "论证链条检查",
    goal: "训练从主张、理由、证据到反驳的法律论证结构。",
    steps: ["提出一个规范性主张。", "列出三个支持理由和对应证据。", "写出最强反对意见并回应。"],
    output: "论证链条图和反驳段落。",
    tags: ["论证", "法律思维"]
  },
  {
    id: "doctrinal-brief",
    title: "法教义学案例简报",
    goal: "训练条文、判例、原则和解释方法之间的连接。",
    steps: ["选择一个具体法律概念。", "收集条文、案例或权威解释。", "比较文本、目的、体系和社会变化解释。"],
    output: "一份 800 字教义学简报。",
    tags: ["法教义学", "法解释"]
  },
  {
    id: "comparative-design",
    title: "比较法研究设计",
    goal: "把比较对象、比较功能和移植限制说清楚。",
    steps: ["选择两个或三个法域。", "说明比较对象承担的社会功能。", "列出背景差异和不可移植因素。"],
    output: "比较法研究设计表。",
    tags: ["比较法", "研究设计"]
  },
  {
    id: "empirical-method",
    title: "实证方法选择",
    goal: "根据研究问题选择访谈、问卷、案例、统计或观察方法。",
    steps: ["写出一个关于法律运行现实的问题。", "说明需要的数据和获取方式。", "识别样本、伦理和推论限制。"],
    output: "方法说明段落和风险清单。",
    tags: ["实证研究", "数据"]
  },
  {
    id: "hybrid-method",
    title: "混合方法说明",
    goal: "解释为什么一个问题需要教义学、实证、理论或比较方法的组合。",
    steps: ["以“新加坡法治经验对中国的启示”为题。", "分别列出文本分析、经验材料和理论框架。", "说明各方法回答问题的哪一部分。"],
    output: "一段 500 字方法论说明。",
    tags: ["混合方法", "交叉学科"]
  },
  {
    id: "theory-framework-builder",
    title: "理论框架构建表",
    goal: "把一个法律研究问题转化为可说明、可应用、可检验或可修正的理论框架。",
    steps: ["写出一个未被充分解释的 puzzle。", "定义 3 到 5 个核心概念，并说明每个概念在框架中的功能。", "画出概念之间的关系：因果、解释、规范评价或制度机制。", "写明框架的假设、边界条件和可能反例。", "说明该框架如何指导材料选择、方法选择和结论呈现。"],
    output: "一张理论框架图和 600 字理论说明。",
    tags: ["理论构建", "理论框架", "研究设计"]
  },
  {
    id: "theory-doctrine-distinction",
    title: "Theory 与 Doctrine 区分练习",
    goal: "区分法教义学中的规则体系化与理论研究中的解释框架构建。",
    steps: ["选择一个法律概念，例如公司人格、因果关系、正当程序或合规。", "先用教义学方式说明现行法如何规定和适用。", "再用理论方式说明该制度背后的解释机制、价值选择或社会功能。", "指出两种写法各自能回答和不能回答的问题。"],
    output: "一份双栏比较表。",
    tags: ["理论构建", "法教义学", "法律写作"]
  },
  {
    id: "ai-question-audit",
    title: "AI 研究问题审计",
    goal: "把 AI 生成的研究问题转化为可验证、可引用、符合学术诚信的方案。",
    steps: ["让 AI 生成 5 个法律研究问题。", "逐一检查问题是否真实、重要、可回答。", "用一手资料或权威文献验证其中 1 个问题。", "记录 AI 输出中的幻觉、偏见或过度概括。"],
    output: "AI 问题审计表和修订后的研究问题。",
    tags: ["人工智能", "学术诚信", "批判性思维"]
  }
];

export const exercises: Exercise[] = [...baseExercises, ...additionalExercises];

const baseTopics: TopicSeed[] = [
  {
    number: 1,
    slug: "nature-purpose",
    title: "学术研究的性质、目的和宗旨",
    shortTitle: "研究性质",
    summary: "从求真、原创、问题意识和研究伦理出发，理解法律研究为什么值得做。",
    keyQuestion: "什么使一个法律研究问题具有学术意义，而不只是个人意见或政策口号？",
    concepts: ["求真", "原创性", "研究意义", "偏见识别", "学术贡献"],
    methods: ["问题导向", "多视角分析", "偏差控制"],
    resourceIds: ["booth-craft", "mcconville-chui", "van-hoecke-methodologies"],
    exampleIds: ["willey-short-termism", "fasel-animal-rights"],
    exerciseIds: ["bias-workshop", "question-refinement"],
    researchPrompt: "选择一个你关心的法律问题，说明它的事实基础、理论意义和可能受益者。"
  },
  {
    number: 2,
    slug: "thinking-methods",
    title: "批判性、创造性思维和法律思维之介绍和练习",
    shortTitle: "思维方法",
    summary: "从描述性写作走向批判性写作，训练学生用目的、问题、信息、推论、假设、概念、观点和后果检查法律论证。",
    keyQuestion: "如何把直觉判断转化为经得起概念化、证据、反例、观点转换和谬误识别检验的法律论证？",
    concepts: ["批判性思维", "概念化", "法律推理", "谬误识别", "论证结构", "观点转换"],
    methods: ["八个思维元素", "描述性到批判性改写", "概念区分", "反例测试", "谬误诊断", "类比推理"],
    resourceIds: ["sunstein-legal-reasoning", "booth-craft", "dworkin-rights"],
    exampleIds: ["fasel-animal-rights", "bottini-shareholder"],
    exerciseIds: ["bias-workshop", "argument-chain"],
    researchPrompt: "选择一个看似显然的法律主张，先写成描述性段落，再用目的、问题、信息、推论、假设、概念、观点和后果八项检查改写为批判性论证。"
  },
  {
    number: 3,
    slug: "research-question-hypothesis",
    title: "研究问题的选择和确定，及其与“假设”的关系",
    shortTitle: "问题与假设",
    summary: "把兴趣、主题、问题和假设区分开，理解研究问题如何决定方法和证据。",
    keyQuestion: "一个问题什么时候足够具体、重要、可回答，并能导出可检验的假设？",
    concepts: ["主题", "问题", "假设", "可回答性", "研究陈述"],
    methods: ["问题细化", "假设建构", "意义陈述"],
    resourceIds: ["booth-craft", "epstein-king", "mcconville-chui"],
    exampleIds: ["charlotin-authorities", "peat-comparative-reasoning"],
    exerciseIds: ["question-refinement", "ai-question-audit"],
    researchPrompt: "从“AI 对法律好吗”出发，限定法域、制度、群体和证据，形成一个可研究问题。"
  },
  {
    number: 4,
    slug: "literature-review",
    title: "文献综述的目的和方法",
    shortTitle: "文献综述",
    summary: "学习把文献综述作为寻找空白、建立对话和定位贡献的方法。",
    keyQuestion: "文献综述如何证明你的研究不是重复已知结论？",
    concepts: ["研究空白", "学术对话", "文献矩阵", "争议谱系", "贡献定位"],
    methods: ["主题归类", "方法归类", "争议地图"],
    resourceIds: ["watkins-burton", "booth-craft", "van-hoecke-methodologies"],
    exampleIds: ["peat-comparative-reasoning", "charlotin-authorities"],
    exerciseIds: ["literature-map"],
    researchPrompt: "围绕一个法律问题建立六篇文献的小型矩阵，并写出你的进入点。"
  },
  {
    number: 5,
    slug: "argumentation",
    title: "论证的思路与方法",
    shortTitle: "论证方法",
    summary: "把结论、理由、证据、限定条件和反驳组织成可检验的法律论证。",
    keyQuestion: "一个法律论证为何比另一个更有说服力？",
    concepts: ["主张", "理由", "证据", "反驳", "限定条件"],
    methods: ["论证链", "反对意见回应", "规范与事实分离"],
    resourceIds: ["sunstein-legal-reasoning", "dworkin-rights", "booth-craft"],
    exampleIds: ["bottini-shareholder", "pusztai-causation-state"],
    exerciseIds: ["argument-chain"],
    researchPrompt: "用“gap - mission - impact”的结构写出一个研究陈述。"
  },
  {
    number: 6,
    slug: "doctrinal-method",
    title: "法教义学（法解释学）方法",
    shortTitle: "法教义学",
    summary: "学习通过条文、判例、原则和体系解释说明“法律是什么”以及“法律如何适用”。",
    keyQuestion: "当法律文本存在模糊、冲突或漏洞时，解释者如何形成有说服力的答案？",
    concepts: ["文本解释", "体系解释", "目的解释", "法律漏洞", "概念体系"],
    methods: ["条文分析", "案例整理", "原则权衡"],
    resourceIds: ["梁慧星-民法解释学", "tiller-cross-empirical", "dworkin-rights"],
    exampleIds: ["pusztai-causation-state", "leow-companies-private-law", "gascoigne-wto-causation"],
    exerciseIds: ["doctrinal-brief"],
    researchPrompt: "选择一个法律概念，说明不同解释方法如何改变案件结果。"
  },
  {
    number: 7,
    slug: "comparative-law",
    title: "比较法方法",
    shortTitle: "比较法",
    summary: "理解比较法不只是列举外国法，而是围绕功能、语境和可移植性展开分析。",
    keyQuestion: "不同法域的制度可以比较到什么程度，又在何处不能简单移植？",
    concepts: ["功能主义", "法律移植", "语境", "法系", "制度比较"],
    methods: ["功能比较", "语境比较", "案例比较"],
    resourceIds: ["zweigert-kotz", "siems-comparative", "mcconville-chui"],
    exampleIds: ["peat-comparative-reasoning", "willey-short-termism"],
    exerciseIds: ["comparative-design", "hybrid-method"],
    researchPrompt: "选择一个制度，比较两个法域中它解决的社会问题是否相同。"
  },
  {
    number: 8,
    slug: "empirical-legal-research",
    title: "实证研究方法",
    shortTitle: "实证研究",
    summary: "通过数据、访谈、问卷、案例和观察研究法律在现实中如何运行。",
    keyQuestion: "什么样的数据可以支撑关于法律实践、效果或行为的推论？",
    concepts: ["样本", "变量", "因果推论", "访谈", "统计分析"],
    methods: ["问卷", "访谈", "案例研究", "数据分析"],
    resourceIds: ["epstein-king", "watkins-burton", "mcconville-chui"],
    exampleIds: ["charlotin-authorities"],
    exerciseIds: ["empirical-method", "bias-workshop"],
    researchPrompt: "把一个关于法律运行的问题转化为可收集数据的研究设计。"
  },
  {
    number: 9,
    slug: "interdisciplinary-law",
    title: "基于法学的交叉学科",
    shortTitle: "交叉学科",
    summary: "理解法学如何与社会学、政治学、经济学、历史学、技术研究等学科共同工作。",
    keyQuestion: "跨学科框架何时能真正解释法律，而不是只给法律问题换一个术语？",
    concepts: ["法社会学", "法经济学", "法律与政治", "法律史", "法律与科技"],
    methods: ["理论框架", "经验材料", "制度分析"],
    resourceIds: ["苏力-送法下乡", "posner-eal", "van-hoecke-methodologies"],
    exampleIds: ["willey-short-termism", "fasel-animal-rights"],
    exerciseIds: ["hybrid-method"],
    researchPrompt: "为一个法律问题选择一个外部学科视角，并说明它能解释什么、不能解释什么。"
  },
  {
    number: 10,
    slug: "types-and-presentation",
    title: "法学研究的类型与呈现方式",
    shortTitle: "类型与呈现",
    summary: "区分描述性、教义学、解释性、规范性和工具性研究，并学习研究计划写作。",
    keyQuestion: "你的研究最终要描述法律、解释法律、批判法律，还是设计更好的制度？",
    concepts: ["描述性研究", "规范性研究", "解释性研究", "工具性研究", "研究计划"],
    methods: ["摘要写作", "结构设计", "贡献陈述"],
    resourceIds: ["booth-craft", "mcconville-chui", "van-hoecke-methodologies"],
    exampleIds: ["peat-comparative-reasoning", "charlotin-authorities", "bottini-shareholder"],
    exerciseIds: ["literature-map", "argument-chain"],
    researchPrompt: "模仿一个范例摘要，写出问题、方法、贡献和影响。"
  },
  {
    number: 11,
    slug: "theory-building",
    title: "法学研究与写作中的理论构建",
    shortTitle: "理论构建",
    summary: "学习如何理解、应用和构建理论框架，使法律研究从描述规则走向解释机制、评价标准和理论贡献。",
    keyQuestion: "一个法律研究如何从“我有一个观点”推进到“我有一个可以解释、评价或预测类似现象的理论框架”？",
    concepts: ["puzzle", "概念化", "命题", "假设", "逻辑关系", "边界条件", "理论贡献"],
    methods: ["概念界定", "关系建模", "假设检验", "规范框架说明", "theory/doctrine 区分"],
    resourceIds: ["bacharach-theory", "whetten-theory-contribution", "sutton-staw-theory-not", "taekema-frameworks", "jabareen-conceptual-framework", "sep-legal-positivism", "sep-legal-interpretivism", "cornell-critical-legal-theory"],
    exampleIds: ["fasel-animal-rights", "charlotin-authorities", "pusztai-causation-state", "leow-companies-private-law"],
    exerciseIds: ["theory-framework-builder", "theory-doctrine-distinction", "hybrid-method"],
    researchPrompt: "围绕一个法律现象写出你的 puzzle、核心概念、概念关系、假设、边界条件和理论贡献。"
  },
  {
    number: 12,
    slug: "ai-and-legal-research",
    title: "人工智能与法学研究",
    shortTitle: "AI 与研究",
    summary: "把 AI 放进研究问题、研究意义、设计、方法、论证和贡献表达的全过程，学习在人机协作中保持原创性、可核验性和作者责任。",
    keyQuestion: "AI 会怎样改变法学研究从问题形成到论证完成的全过程，哪些环节可以交给工具辅助，哪些判断必须由研究者负责？",
    concepts: ["AI 辅助检索", "研究问题生成", "研究意义校准", "提示词与语料记录", "幻觉", "算法偏见", "学术诚信", "作者责任"],
    methods: ["问题生成与审计", "研究意义校准", "语料与提示词记录", "零样本标注", "反方论证测试", "AI 使用披露"],
    resourceIds: ["unesco-ai-ethics", "citron-pasquale", "epstein-king"],
    exampleIds: ["charlotin-authorities", "fasel-animal-rights"],
    exerciseIds: ["ai-question-audit", "question-refinement", "bias-workshop"],
    researchPrompt: "选择一个法学题目，记录 AI 在问题、意义、设计、方法、论证和贡献表达六个环节提供了什么帮助，并逐项说明你的核验、修正和取舍理由。"
  }
];

export const topics: Topic[] = baseTopics.map((topic) => {
  const detail = topicDetails[topic.slug];
  const association = topicAssociations[topic.slug] ?? {};

  if (!detail) {
    throw new Error(`Missing topic detail for ${topic.slug}`);
  }

  return {
    ...topic,
    ...detail,
    resourceIds: mergeUnique(topic.resourceIds, association.resourceIds),
    exampleIds: mergeUnique(topic.exampleIds, association.exampleIds),
    exerciseIds: mergeUnique(topic.exerciseIds, association.exerciseIds),
  };
});

export const navItems = [
  { label: "专题", href: "/topics" },
  { label: "文献", href: "/resources" },
  { label: "范例", href: "/examples" },
  { label: "思维", href: "/thinking" },
  { label: "理论", href: "/theory" },
  { label: "交叉", href: "/interdisciplinary" },
  { label: "练习", href: "/exercises" }
];

export const getResourceById = (id: string) => resources.find((item) => item.id === id);
export const getExampleById = (id: string) => examples.find((item) => item.id === id);
export const getExerciseById = (id: string) => exercises.find((item) => item.id === id);
