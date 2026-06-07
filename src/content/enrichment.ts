import type { Example, Exercise, Resource, TopicDetail } from "./courseData";

type TopicAssociation = {
  resourceIds?: string[];
  exampleIds?: string[];
  exerciseIds?: string[];
};

export const additionalResources: Resource[] = [
  {
    id: "chynoweth-legal-research",
    title: "Legal Research",
    author: "Paul Chynoweth",
    type: "论文",
    language: "英文",
    tags: ["法学方法", "研究设计", "法教义学"],
    citation: "Chynoweth, P. (2008). Legal Research. In A. Knight & L. Ruddock (eds.), Advanced Research Methods in the Built Environment.",
    note: "把法学研究放在方法论地图中，适合课程开端说明教义学、改革研究和社会法学研究的区别。",
    url: "https://www.sps.ed.ac.uk/sites/default/files/assets/pdf/Legal_Research_Chynoweth_-_Salford_Uni.pdf"
  },
  {
    id: "taekema-rule-of-law-methods",
    title: "Methodologies of Rule of Law Research: Why Legal Philosophy Needs Empirical and Doctrinal Scholarship",
    author: "Sanne Taekema",
    type: "论文",
    language: "英文",
    tags: ["法学方法", "理论框架", "实证研究", "法理学"],
    citation: "Taekema, S. (2020). Law and Philosophy, 39, 33-66.",
    note: "说明法哲学、教义学和经验研究如何在法治研究中互相校正。",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3584216"
  },
  {
    id: "sheehy-paradigms",
    title: "Paradigms of Legal Research Connecting Theories, Methods and Phenomena",
    author: "Benedict Sheehy",
    type: "论文",
    language: "英文",
    tags: ["法学方法", "理论构建", "研究设计"],
    citation: "Sheehy, B. (2022). Paradigms of Legal Research Connecting Theories, Methods and Phenomena.",
    note: "帮助学生理解研究范式如何连接理论、方法和研究对象。",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4309144"
  },
  {
    id: "carefully-tailored-doctrinal",
    title: "Carefully Tailored: Doctrinal Methods and Empirical Contributions",
    author: "Luca Siliquini-Cinelli",
    type: "论文",
    language: "英文",
    tags: ["法教义学", "实证研究", "方法论", "研究设计"],
    citation: "Siliquini-Cinelli, L. (2025). Oxford Journal of Legal Studies, 45(4), 1047-1075.",
    note: "讨论经验材料何时能够对法教义学研究作出有效贡献，适合连接专题6与专题8。",
    url: "https://academic.oup.com/ojls/article/45/4/1047/8240731"
  },
  {
    id: "雷磊-法教义学基本立场",
    title: "法教义学的基本立场",
    author: "雷磊",
    type: "论文",
    language: "中文",
    tags: ["法教义学", "法理学", "规范研究", "中国法"],
    citation: "雷磊：《法教义学的基本立场》，《中外法学》2015年第1期，第198-223页。",
    note: "中文语境中理解法教义学作为规范性实践科学的重要文章。",
    url: "https://ccj.pku.edu.cn/Article/info?aid=107936380"
  },
  {
    id: "雷磊-法教义学与法治",
    title: "法教义学与法治：法教义学的治理意义",
    author: "雷磊",
    type: "论文",
    language: "中文",
    tags: ["法教义学", "法治", "中国法", "理论框架"],
    citation: "雷磊：《法教义学与法治：法教义学的治理意义》，《法学研究》2018年第5期。",
    note: "把法教义学放入法治建设、裁判说理和治理能力的语境中。",
    url: "https://faxueyanjiu.ajcass.com/Admin/UploadFile/publish_article/2018/5/20180504.pdf"
  },
  {
    id: "季卫东-法律程序的意义",
    title: "法律程序的意义：对中国法制建设的另一种思考",
    author: "季卫东",
    type: "论文",
    language: "中文",
    tags: ["法律思维", "程序法", "法理学", "中国法"],
    citation: "季卫东：《法律程序的意义：对中国法制建设的另一种思考》，《中国社会科学》1993年第1期。",
    note: "以程序作为连接规范理性、制度变迁和公共选择的理论入口。",
    url: "https://academicnewsletter.sufe.edu.cn/info/231958"
  },
  {
    id: "苏力-也许正在发生",
    title: "也许正在发生：中国当代法学发展的一个概览",
    author: "苏力",
    type: "论文",
    language: "中文",
    tags: ["社科法学", "法学方法", "中国法", "研究范式"],
    citation: "苏力：《也许正在发生：中国当代法学发展的一个概览》，《比较法研究》2001年第3期。",
    note: "适合讨论中国法学研究中的政法法学、诠释法学和社科法学谱系。",
    url: "https://www.legal-theory.org/?act=view&id=942&mod=info"
  },
  {
    id: "苏力-法治及其本土资源",
    title: "法治及其本土资源",
    author: "苏力",
    type: "专著",
    language: "中文",
    tags: ["社科法学", "中国法", "法社会学", "交叉学科"],
    citation: "苏力：《法治及其本土资源》，中国政法大学出版社，1996年。",
    note: "展示如何从中国社会实践和制度环境中提出法学问题。",
    url: "https://book.douban.com/subject/1029794/"
  },
  {
    id: "梁治平-清代习惯法",
    title: "清代习惯法：社会与国家",
    author: "梁治平",
    type: "专著",
    language: "中文",
    tags: ["法律史", "法社会学", "中国法", "交叉学科"],
    citation: "梁治平：《清代习惯法：社会与国家》，中国政法大学出版社，1996年。",
    note: "以习惯法为对象连接档案、社会理论和国家法秩序，是法律史与社会科学结合的经典范例。",
    url: "https://books.google.com/books/about/%E6%B8%85%E4%BB%A3%E4%B9%A0%E6%83%AF%E6%B3%95.html?id=ERtdAAAAIAAJ"
  },
  {
    id: "watson-legal-transplants",
    title: "Legal Transplants: An Approach to Comparative Law",
    author: "Alan Watson",
    type: "专著",
    language: "英文",
    tags: ["比较法", "法律移植", "法律史", "理论构建"],
    citation: "Watson, A. (1974/1993). Legal Transplants: An Approach to Comparative Law. University of Georgia Press.",
    note: "比较法与法律移植讨论的核心文本，适合与 Legrand 的批判一起阅读。",
    url: "https://www.ugapress.org/9780820315324/legal-transplants/"
  },
  {
    id: "legrand-impossibility-transplants",
    title: "The Impossibility of Legal Transplants",
    author: "Pierre Legrand",
    type: "论文",
    language: "英文",
    tags: ["比较法", "法律移植", "语境", "批判法学"],
    citation: "Legrand, P. (1997). Maastricht Journal of European and Comparative Law, 4(2), 111-124.",
    note: "从语言、文化和意义结构出发质疑法律移植的可能性。",
    url: "https://journals.sagepub.com/doi/10.1177/1023263X9700400202"
  },
  {
    id: "michaels-functional-method",
    title: "The Functional Method of Comparative Law",
    author: "Ralf Michaels",
    type: "论文",
    language: "英文",
    tags: ["比较法", "功能主义", "方法论"],
    citation: "Michaels, R. (2006). In M. Reimann & R. Zimmermann (eds.), The Oxford Handbook of Comparative Law.",
    note: "系统说明比较法中的功能主义假设、优势和局限。",
    url: "https://scholarship.law.duke.edu/faculty_scholarship/1223/"
  },
  {
    id: "graziadei-transplants-receptions",
    title: "Comparative Law as the Study of Transplants and Receptions",
    author: "Michele Graziadei",
    type: "论文",
    language: "英文",
    tags: ["比较法", "法律移植", "法律文化"],
    citation: "Graziadei, M. (2012). In M. Reimann & R. Zimmermann (eds.), The Oxford Handbook of Comparative Law.",
    note: "把移植、接受和法律形式流动作为比较法研究对象。",
    url: "https://www.ius.uzh.ch/dam/jcr:0cf194bc-cc0b-4ab3-a9ba-ffbb607b5a15/Graziadei-oxfordhb-9780199296064-e-014.pdf"
  },
  {
    id: "heise-empirical-legal-scholarship",
    title: "The Past, Present, and Future of Empirical Legal Scholarship",
    author: "Michael Heise",
    type: "论文",
    language: "英文",
    tags: ["实证研究", "法学方法", "研究设计"],
    citation: "Heise, M. (2002). University of Illinois Law Review, 2002, 819-850.",
    note: "梳理美国实证法学研究兴起的知识和制度背景。",
    url: "https://scholarship.law.cornell.edu/facpub/733/"
  },
  {
    id: "galanter-haves",
    title: "Why the Haves Come Out Ahead: Speculations on the Limits of Legal Change",
    author: "Marc Galanter",
    type: "论文",
    language: "英文",
    tags: ["法社会学", "实证研究", "法律与社会", "理论构建"],
    citation: "Galanter, M. (1974). Law & Society Review, 9(1), 95-160.",
    note: "用 repeat players 与 one-shotters 解释诉讼资源不平等，是法社会学理论构建经典。",
    url: "https://repository.law.wisc.edu/s/uwlaw/item/31285"
  },
  {
    id: "felstiner-naming-blaming",
    title: "The Emergence and Transformation of Disputes: Naming, Blaming, Claiming",
    author: "William L. F. Felstiner, Richard L. Abel, and Austin Sarat",
    type: "论文",
    language: "英文",
    tags: ["法社会学", "实证研究", "概念框架", "纠纷研究"],
    citation: "Felstiner, W. L. F., Abel, R. L., & Sarat, A. (1980-1981). Law & Society Review, 15(3-4), 631-654.",
    note: "提供从伤害经验到法律纠纷形成的经典过程框架。",
    url: "https://www.cambridge.org/core/journals/law-and-society-review/article/emergence-and-transformation-of-disputes-naming-blaming-claiming/CC5A29351BCC355B8317FD13CAF29F09"
  },
  {
    id: "ellickson-order-without-law",
    title: "Order Without Law: How Neighbors Settle Disputes",
    author: "Robert C. Ellickson",
    type: "专著",
    language: "英文",
    tags: ["法社会学", "法经济学", "实证研究", "社会规范"],
    citation: "Ellickson, R. C. (1991). Order Without Law: How Neighbors Settle Disputes. Harvard University Press.",
    note: "以邻里和牧场纠纷说明社会规范如何替代正式法律。",
    url: "https://openlibrary.org/books/OL1867499M/Order_without_law"
  },
  {
    id: "mnookin-shadow-law",
    title: "Bargaining in the Shadow of the Law: The Case of Divorce",
    author: "Robert H. Mnookin and Lewis Kornhauser",
    type: "论文",
    language: "英文",
    tags: ["法经济学", "谈判", "法律与社会", "制度分析"],
    citation: "Mnookin, R. H., & Kornhauser, L. (1979). Yale Law Journal, 88, 950-997.",
    note: "说明法律规则如何塑造庭外谈判，是制度分析和法律经济学的经典范例。",
    url: "https://openyls.law.yale.edu/handle/20.500.13051/15889"
  },
  {
    id: "ewick-silbey-common-place",
    title: "The Common Place of Law: Stories from Everyday Life",
    author: "Patricia Ewick and Susan S. Silbey",
    type: "专著",
    language: "英文",
    tags: ["法社会学", "法律意识", "质性研究", "交叉学科"],
    citation: "Ewick, P., & Silbey, S. S. (1998). The Common Place of Law. University of Chicago Press.",
    note: "通过日常叙事研究普通人如何理解和使用法律。",
    url: "https://press.uchicago.edu/ucp/books/book/chicago/C/bo3684436.html"
  },
  {
    id: "holmes-path",
    title: "The Path of the Law",
    author: "Oliver Wendell Holmes Jr.",
    type: "论文",
    language: "英文",
    tags: ["法律思维", "法律现实主义", "法理学", "理论"],
    citation: "Holmes, O. W. Jr. (1897). Harvard Law Review, 10, 457-478.",
    note: "以预测、经验和 bad man 视角改变法律推理的自我理解。",
    url: "https://www.gutenberg.org/files/2373/2373-h/2373-h.htm"
  },
  {
    id: "hart-separation",
    title: "Positivism and the Separation of Law and Morals",
    author: "H. L. A. Hart",
    type: "论文",
    language: "英文",
    tags: ["法理学", "法律实证主义", "理论", "法哲学"],
    citation: "Hart, H. L. A. (1958). Harvard Law Review, 71(4), 593-629.",
    note: "现代法律实证主义的代表性论文，可与 Fuller 的回应组成理论对话。",
    url: "https://www.law.nyu.edu/sites/default/files/Hart%2C%20H.%20L.%20A.%20%281958%29%20%27Positivism%20and%20the%20Separation%20of%20Law%20and%20Morals%27%20Harvard%20Law%20Review%20Vol.%2071%2C%20No.%204%20%281958%29%20pp.%20593-629.pdf"
  },
  {
    id: "fuller-fidelity",
    title: "Positivism and Fidelity to Law: A Reply to Professor Hart",
    author: "Lon L. Fuller",
    type: "论文",
    language: "英文",
    tags: ["法理学", "自然法", "理论", "法哲学"],
    citation: "Fuller, L. L. (1958). Harvard Law Review, 71(4), 630-672.",
    note: "Hart-Fuller 论战中的自然法回应，适合训练理论争议地图。",
    url: "https://www.marcellodibello.com/PHI234/resources/fuller-hart-1958.pdf"
  },
  {
    id: "maccormick-legal-reasoning",
    title: "Legal Reasoning and Legal Theory",
    author: "Neil MacCormick",
    type: "专著",
    language: "英文",
    tags: ["法律思维", "论证", "法理学", "理论"],
    citation: "MacCormick, N. (1978). Legal Reasoning and Legal Theory. Oxford University Press.",
    note: "法律论证理论经典，适合解释演绎、类比、原则和后果理由。",
    url: "https://academic.oup.com/book/10467"
  },
  {
    id: "alexy-legal-argumentation",
    title: "A Theory of Legal Argumentation",
    author: "Robert Alexy",
    type: "专著",
    language: "英文",
    tags: ["法律思维", "论证", "法哲学", "理论"],
    citation: "Alexy, R. (1989). A Theory of Legal Argumentation. Oxford University Press.",
    note: "把法律论证放入实践理性和可普遍化理由的结构中。",
    url: "https://academic.oup.com/book/55448"
  },
  {
    id: "finnis-natural-law",
    title: "Natural Law and Natural Rights",
    author: "John Finnis",
    type: "专著",
    language: "英文",
    tags: ["自然法", "法哲学", "理论框架"],
    citation: "Finnis, J. (1980). Natural Law and Natural Rights. Oxford University Press.",
    note: "当代自然法理论的重要文本，适合理论页讨论基本善和实践理性。",
    url: "https://academic.oup.com/book/46710"
  },
  {
    id: "hart-natural-rights",
    title: "Are There Any Natural Rights?",
    author: "H. L. A. Hart",
    type: "论文",
    language: "英文",
    tags: ["法哲学", "权利理论", "法律实证主义", "理论"],
    citation: "Hart, H. L. A. (1955). Are There Any Natural Rights? The Philosophical Review, 64(2), 175-191.",
    note: "Hart 在权利与自由问题上的经典哲学论文，可用于区分一般权利、特殊权利与法律权利。",
    url: "https://doi.org/10.2307/2182586"
  },
  {
    id: "fuller-speluncean",
    title: "The Case of the Speluncean Explorers",
    author: "Lon L. Fuller",
    type: "论文",
    language: "英文",
    tags: ["法哲学", "法律解释", "自然法", "理论"],
    citation: "Fuller, L. L. (1949). The Case of the Speluncean Explorers. Harvard Law Review, 62(4), 616-645.",
    note: "以虚构疑难案件展示文本主义、目的论、自然法和司法克制等不同理论立场如何导出不同判决。",
    url: "https://www.jstor.org/stable/1336085"
  },
  {
    id: "dworkin-model-rules",
    title: "The Model of Rules",
    author: "Ronald Dworkin",
    type: "论文",
    language: "英文",
    tags: ["法哲学", "法律原则", "解释主义", "理论"],
    citation: "Dworkin, R. (1967). The Model of Rules. University of Chicago Law Review, 35(1), 14-46.",
    note: "Dworkin 对规则中心法律实证主义的经典批评，提出原则在法律义务和疑难案件中的地位。",
    url: "https://chicagounbound.uchicago.edu/uclrev/vol35/iss1/3/"
  },
  {
    id: "dworkin-hard-cases",
    title: "Hard Cases",
    author: "Ronald Dworkin",
    type: "论文",
    language: "英文",
    tags: ["法哲学", "疑难案件", "法律原则", "理论"],
    citation: "Dworkin, R. (1975). Hard Cases. Harvard Law Review, 88(6), 1057-1109.",
    note: "围绕疑难案件、司法裁量、权利和原则展开，是理解法律解释主义的重要论文。",
    url: "https://doi.org/10.2307/1340249"
  },
  {
    id: "dworkin-law-as-interpretation",
    title: "Law as Interpretation",
    author: "Ronald Dworkin",
    type: "论文",
    language: "英文",
    tags: ["法哲学", "法律解释", "解释主义", "理论"],
    citation: "Dworkin, R. (1982). Law as Interpretation. Critical Inquiry, 9(1), 179-200.",
    note: "把法律理解为解释性实践，为学生理解适合性、正当化和建构性解释提供入口。",
    url: "https://doi.org/10.1086/448204"
  },
  {
    id: "rawls-two-concepts-rules",
    title: "Two Concepts of Rules",
    author: "John Rawls",
    type: "论文",
    language: "英文",
    tags: ["政治哲学", "规则", "正义理论", "理论"],
    citation: "Rawls, J. (1955). Two Concepts of Rules. The Philosophical Review, 64(1), 3-32.",
    note: "区分实践的规则与行动摘要，有助于理解制度理由、惩罚理由和法律规则的正当化层次。",
    url: "https://doi.org/10.2307/2182230"
  },
  {
    id: "rawls-justice-fairness",
    title: "Justice as Fairness",
    author: "John Rawls",
    type: "论文",
    language: "英文",
    tags: ["政治哲学", "正义理论", "规范理论", "理论"],
    citation: "Rawls, J. (1958). Justice as Fairness. The Philosophical Review, 67(2), 164-194.",
    note: "Rawls 正义理论早期代表作，适合讨论原初状态、公平、制度正当性和分配正义。",
    url: "https://doi.org/10.2307/2182612"
  },
  {
    id: "rawls-public-reason",
    title: "The Idea of Public Reason Revisited",
    author: "John Rawls",
    type: "论文",
    language: "英文",
    tags: ["政治哲学", "公共理性", "宪法理论", "理论"],
    citation: "Rawls, J. (1997). The Idea of Public Reason Revisited. University of Chicago Law Review, 64(3), 765-807.",
    note: "公共理性理论的成熟表达，可用于连接法哲学、宪法论证和民主合法性。",
    url: "https://chicagounbound.uchicago.edu/uclrev/vol64/iss3/2/"
  },
  {
    id: "raz-legal-principles",
    title: "Legal Principles and the Limits of Law",
    author: "Joseph Raz",
    type: "论文",
    language: "英文",
    tags: ["法哲学", "法律原则", "法律实证主义", "理论"],
    citation: "Raz, J. (1972). Legal Principles and the Limits of Law. Yale Law Journal, 81(5), 823-854.",
    note: "Raz 对原则、规则和法律界限的分析，可与 Dworkin 的原则理论形成对读。",
    url: "https://openyls.law.yale.edu/handle/20.500.13051/15118"
  },
  {
    id: "raz-authority-law-morality",
    title: "Authority, Law, and Morality",
    author: "Joseph Raz",
    type: "论文",
    language: "英文",
    tags: ["法哲学", "权威理论", "法律实证主义", "理论"],
    citation: "Raz, J. (1985). Authority, Law and Morality. The Monist, 68(3), 295-324.",
    note: "Raz 排他性法律实证主义与权威理论的核心论文，适合讨论法律为什么能提供排他性理由。",
    url: "https://doi.org/10.5840/monist198568335"
  },
  {
    id: "raz-rule-law-virtue",
    title: "The Rule of Law and Its Virtue",
    author: "Joseph Raz",
    type: "论文",
    language: "英文",
    tags: ["法哲学", "法治", "法律实证主义", "理论"],
    citation: "Raz, J. (1977). The Rule of Law and Its Virtue. Law Quarterly Review, 93, 195-211.",
    note: "把法治理解为法律制度的一种特殊德性，而不是所有政治美德的集合。",
    url: "https://philpapers.org/rec/RAZTRO-2"
  },
  {
    id: "finnis-natural-law-reasoning",
    title: "Natural Law and Legal Reasoning",
    author: "John Finnis",
    type: "论文",
    language: "英文",
    tags: ["法哲学", "自然法", "实践理性", "理论"],
    citation: "Finnis, J. (1990). Natural Law and Legal Reasoning. Cleveland State Law Review, 38(1), 1-13.",
    note: "以实践理性和基本善为核心说明自然法如何进入法律推理，而不是简单诉诸道德直觉。",
    url: "https://engagedscholarship.csuohio.edu/clevstlrev/vol38/iss1/3/"
  },
  {
    id: "kelsen-pure-theory-analytical",
    title: "The Pure Theory of Law and Analytical Jurisprudence",
    author: "Hans Kelsen",
    type: "论文",
    language: "英文",
    tags: ["法哲学", "纯粹法理论", "法律实证主义", "理论"],
    citation: "Kelsen, H. (1941). The Pure Theory of Law and Analytical Jurisprudence. Harvard Law Review, 55(1), 44-70.",
    note: "纯粹法理论在英语法学界的重要表达，适合讨论规范、效力、科学性与价值中立。",
    url: "https://doi.org/10.2307/1334739"
  },
  {
    id: "kelsen-foundations-democracy",
    title: "Foundations of Democracy",
    author: "Hans Kelsen",
    type: "论文",
    language: "英文",
    tags: ["法哲学", "民主理论", "规范理论", "理论"],
    citation: "Kelsen, H. (1955). Foundations of Democracy. Ethics, 66(1), 1-101.",
    note: "从相对主义、自由和程序角度论证民主基础，可与 Rawls 的政治自由主义形成比较。",
    url: "https://doi.org/10.1086/291036"
  },
  {
    id: "kelsen-natural-law-tribunal",
    title: "The Natural-Law Doctrine Before the Tribunal of Science",
    author: "Hans Kelsen",
    type: "论文",
    language: "英文",
    tags: ["法哲学", "自然法批判", "纯粹法理论", "理论"],
    citation: "Kelsen, H. (1949). The Natural-Law Doctrine Before the Tribunal of Science. Western Political Quarterly, 2(4), 481-513.",
    note: "Kelsen 对自然法学说的哲学批判，可与 Fuller 和 Finnis 的自然法立场组成三角阅读。",
    url: "https://doi.org/10.1177/106591294900200401"
  },
  {
    id: "张文显-部门法哲学引论",
    title: "部门法哲学引论——属性和方法",
    author: "张文显",
    type: "论文",
    language: "中文",
    tags: ["法哲学", "部门法哲学", "法学方法", "理论"],
    citation: "张文显：《部门法哲学引论——属性和方法》。",
    note: "讨论部门法哲学的学科属性和方法边界，适合帮助学生把抽象法哲学与具体部门法问题连接起来。",
    url: "https://www.legal-theory.org/?act=view&id=10841&mod=info"
  },
  {
    id: "张文显-法学范畴意识",
    title: "论法学的范畴意识、范畴体系与基石范畴",
    author: "张文显",
    type: "论文",
    language: "中文",
    tags: ["法哲学", "法学范畴", "理论构建", "理论"],
    citation: "张文显：《论法学的范畴意识、范畴体系与基石范畴》。",
    note: "以范畴意识说明法学理论如何形成概念系统，适合训练理论框架中的概念层次。",
    url: "https://www.legal-theory.org/?act=view&id=1679&mod=info"
  },
  {
    id: "舒国滢-抽象法学理论",
    title: "从方法论看抽象法学理论的发展",
    author: "舒国滢",
    type: "论文",
    language: "中文",
    tags: ["法哲学", "法学方法论", "法律论证", "理论"],
    citation: "舒国滢：《从方法论看抽象法学理论的发展》。",
    note: "从法哲学、法律论证和法学方法论角度说明抽象法学理论如何发展。",
    url: "https://www.legal-theory.org/?act=view&id=8646&mod=info"
  },
  {
    id: "雷磊-规范法学发展",
    title: "主题的拓展与方法意识的觉醒——四十年来规范法学的发展",
    author: "雷磊",
    type: "论文",
    language: "中文",
    tags: ["法理学", "规范法学", "法学方法论", "理论"],
    citation: "雷磊：《主题的拓展与方法意识的觉醒——四十年来规范法学的发展》，《北京航空航天大学学报（社会科学版）》2019年第1期。",
    note: "梳理中国规范法学在法概念、基本范畴和方法意识上的发展，可作为中文理论脉络导读。",
    url: "https://bhxb.buaa.edu.cn/bhsk/cn/article/doi/10.13766/j.bhsk.1008-2204.2018.0358"
  },
  {
    id: "陈景辉-哈特为什么重要",
    title: "哈特为什么重要？——当代法哲学导引",
    author: "陈景辉",
    type: "论文",
    language: "中文",
    tags: ["法哲学", "概念分析", "法律实证主义", "理论"],
    citation: "陈景辉：《哈特为什么重要？——当代法哲学导引》。",
    note: "以 Hart 与《法律的概念》为入口说明当代分析法哲学的概念分析路径，适合作为 Hart、Raz 与 Dworkin 阅读后的中文补充。",
    url: "https://www.aisixiang.com/data/158609.html"
  },
  {
    id: "kennedy-form-substance",
    title: "Form and Substance in Private Law Adjudication",
    author: "Duncan Kennedy",
    type: "论文",
    language: "英文",
    tags: ["批判法学", "私法", "理论构建", "论证"],
    citation: "Kennedy, D. (1976). Harvard Law Review, 89(8), 1685-1778.",
    note: "批判法学经典论文，用私法裁判揭示形式、实体和意识形态的关系。",
    url: "https://openyls.law.yale.edu/handle/20.500.13051/17272"
  },
  {
    id: "unger-cls-movement",
    title: "The Critical Legal Studies Movement",
    author: "Roberto Mangabeira Unger",
    type: "论文",
    language: "英文",
    tags: ["批判法学", "法哲学", "理论"],
    citation: "Unger, R. M. (1983). Harvard Law Review, 96(3), 561-675.",
    note: "批判法学运动的纲领性文本，适合讨论法律形式与社会想象。",
    url: "https://hls.harvard.edu/bibliography/the-critical-legal-studies-movement/"
  },
  {
    id: "kapczynski-lpe-framework",
    title: "Building a Law-and-Political-Economy Framework: Beyond the Twentieth-Century Synthesis",
    author: "Jedediah Britton-Purdy, David Singh Grewal, Amy Kapczynski, and K. Sabeel Rahman",
    type: "论文",
    language: "英文",
    tags: ["法律与政治经济学", "交叉学科", "理论框架", "批判法学"],
    citation: "Britton-Purdy, J., Grewal, D. S., Kapczynski, A., & Rahman, K. S. (2020). Yale Law Journal, 129, 1784-1835.",
    note: "展示如何把政治经济学重建为分析法律制度、权力和不平等的框架。",
    url: "https://yalelawjournal.org/index.php/article/building-a-law-and-political-economy-framework"
  },
  {
    id: "barocas-selbst-disparate-impact",
    title: "Big Data's Disparate Impact",
    author: "Solon Barocas and Andrew D. Selbst",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "算法偏见", "反歧视法", "实证研究"],
    citation: "Barocas, S., & Selbst, A. D. (2016). California Law Review, 104, 671-732.",
    note: "算法歧视法律研究的经典论文，适合 AI 专题讨论数据、模型和法律责任。",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2477899"
  },
  {
    id: "selbst-barocas-explainable",
    title: "The Intuitive Appeal of Explainable Machines",
    author: "Andrew D. Selbst and Solon Barocas",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "可解释性", "技术治理", "法律与科技"],
    citation: "Selbst, A. D., & Barocas, S. (2018). Fordham Law Review, 87, 1085-1139.",
    note: "解释为什么技术可解释性与法律可问责性并不总是同一件事。",
    url: "https://ir.lawnet.fordham.edu/flr/vol87/iss3/11/"
  },
  {
    id: "surden-machine-learning-law",
    title: "Machine Learning and Law",
    author: "Harry Surden",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "法律与科技", "研究问题"],
    citation: "Surden, H. (2014). Washington Law Review, 89, 87-115.",
    note: "较早系统介绍机器学习进入法律领域的可能性与限制。",
    url: "https://digitalcommons.law.uw.edu/wlr/vol89/iss1/3/"
  },
  {
    id: "cail2018",
    title: "CAIL2018: A Large-Scale Legal Dataset for Judgment Prediction",
    author: "Chaojun Xiao et al.",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "中国法", "数据集", "实证研究"],
    citation: "Xiao, C. et al. (2018). arXiv:1807.02478.",
    note: "中国法律人工智能数据集研究的重要起点，可用于讨论数据、预测和法律推理的差距。",
    url: "https://arxiv.org/abs/1807.02478"
  },
  {
    id: "lawgpt-chinese",
    title: "LawGPT: A Chinese Legal Knowledge-Enhanced Large Language Model",
    author: "Zhi Zhou et al.",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "中国法", "大语言模型", "法律与科技"],
    citation: "Zhou, Z. et al. (2024). arXiv:2406.04614.",
    note: "展示中文法律大模型训练和知识增强路径，也适合讨论隐私与实际应用限制。",
    url: "https://arxiv.org/abs/2406.04614"
  },
  {
    id: "laiw-benchmark",
    title: "LAiW: A Chinese Legal Large Language Models Benchmark",
    author: "Yongfu Dai et al.",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "中国法", "评测", "法律思维"],
    citation: "Dai, Y. et al. (2023). arXiv:2310.05620.",
    note: "从法律实践逻辑出发评测中文法律大模型，可用于 AI 研究问题审计。",
    url: "https://arxiv.org/abs/2310.05620"
  },
  {
    id: "nissenbaum-contextual-integrity",
    title: "Privacy in Context: Technology, Policy, and the Integrity of Social Life",
    author: "Helen Nissenbaum",
    type: "专著",
    language: "英文",
    tags: ["隐私", "法律与科技", "理论框架", "交叉学科"],
    citation: "Nissenbaum, H. (2010). Privacy in Context. Stanford University Press.",
    note: "情境完整性理论适合解释数据隐私、平台治理和 AI 决策的规范结构。",
    url: "https://www.sup.org/books/law/privacy-context"
  },
  {
    id: "hutchinson-duncan-doctrinal",
    title: "Defining and Describing What We Do: Doctrinal Legal Research",
    author: "Terry Hutchinson and Nigel Duncan",
    type: "论文",
    language: "英文",
    tags: ["法教义学", "法学方法", "研究设计", "法律写作"],
    citation: "Hutchinson, T., & Duncan, N. (2012). Deakin Law Review, 17(1), 83-119.",
    note: "把传统教义学研究说清楚、说可检查，适合训练学生说明资料选择和解释路径。",
    url: "https://ojs.deakin.edu.au/index.php/dlr/article/view/70"
  },
  {
    id: "vranken-methodology",
    title: "Methodology of Comparative Legal Research",
    author: "Jan M. Smits and Jan B. M. Vranken",
    type: "论文",
    language: "英文",
    tags: ["比较法", "法学方法", "研究设计"],
    citation: "Vranken, J. B. M. (2012). Methodology of Comparative Legal Research.",
    note: "适合说明比较法研究为什么必须先界定问题、比较对象、材料边界和评价标准。",
    url: "https://pdfs.semanticscholar.org/ecf2/3c2bcefee01a4c27a20131e575f407482cdd.pdf"
  },
  {
    id: "gestel-micklitz-methods",
    title: "Why Methods Matter in European Legal Scholarship",
    author: "Rob van Gestel and Hans-W. Micklitz",
    type: "论文",
    language: "英文",
    tags: ["法学方法", "研究设计", "法律写作"],
    citation: "van Gestel, R., & Micklitz, H.-W. (2014). European Law Journal, 20(3), 292-316.",
    note: "强调法学论文需要把方法写出来，而不是假定读者自然知道作者如何获得结论。",
    url: "https://doi.org/10.1111/eulj.12049"
  },
  {
    id: "schauer-thinking-lawyer",
    title: "Thinking Like a Lawyer: A New Introduction to Legal Reasoning",
    author: "Frederick Schauer",
    type: "专著",
    language: "英文",
    tags: ["法律思维", "论证", "类比", "规则"],
    citation: "Schauer, F. (2009). Thinking Like a Lawyer. Harvard University Press.",
    note: "适合专题2和专题5讨论规则、先例、类比、权威和法律理由的职业化结构。",
    url: "https://www.law.virginia.edu/scholarship/publication/frederick-schauer/627661"
  },
  {
    id: "mertz-language-law-school",
    title: "The Language of Law School: Learning to Think Like a Lawyer",
    author: "Elizabeth Mertz",
    type: "专著",
    language: "英文",
    tags: ["法律思维", "法社会学", "法律教育", "质性研究"],
    citation: "Mertz, E. (2007). The Language of Law School. Oxford University Press.",
    note: "用课堂语言研究说明法律思维如何被训练出来，适合把法律教育作为经验研究对象。",
    url: "https://academic.oup.com/book/8852"
  },
  {
    id: "popper-three-worlds",
    title: "Karl Popper: Three Worlds and Objective Knowledge",
    author: "Stephen Thornton",
    type: "论文",
    language: "英文",
    tags: ["批判性思维", "知识论", "理论构建", "法律思维"],
    citation: "Thornton, S. (2023). Karl Popper. Stanford Encyclopedia of Philosophy, section on objective knowledge and the three worlds.",
    note: "补充第2讲关于物理世界、主观心理世界和客观知识世界的框架，帮助学生理解法律、制度和理论如何成为可批判的公共知识对象。",
    url: "https://plato.stanford.edu/archives/fall2023/entries/popper/"
  },
  {
    id: "paul-elder-critical-thinking",
    title: "Paul-Elder Critical Thinking Framework",
    author: "Richard Paul and Linda Elder",
    type: "工具书",
    language: "英文",
    tags: ["批判性思维", "论证", "概念化", "法律思维"],
    citation: "Paul, R., & Elder, L. Critical Thinking Framework, University of Louisville Ideas to Action.",
    note: "与第2讲的目的、问题、信息、推论、假设、概念、观点和后果八个思维元素直接对应，可用作阅读论文和写作论证的检查表。",
    url: "https://louisville.edu/ideastoaction/about/criticalthinking/framework/"
  },
  {
    id: "levi-legal-reasoning",
    title: "An Introduction to Legal Reasoning",
    author: "Edward H. Levi",
    type: "专著",
    language: "英文",
    tags: ["法律思维", "论证", "类比", "法律推理"],
    citation: "Levi, E. H. (1949/2013). An Introduction to Legal Reasoning. University of Chicago Press.",
    note: "法律类比、规则发展、制定法解释和宪法推理的经典短书，适合与 Schauer 对读。",
    url: "https://press.uchicago.edu/ucp/books/book/chicago/I/bo17322927.html"
  },
  {
    id: "james-thinking-skills-law",
    title: "Measuring the Critical Thinking Skills of Law Students Using a Whole-of-Curriculum Approach",
    author: "Nick James and Kelley Burton",
    type: "论文",
    language: "英文",
    tags: ["批判性思维", "法律教育", "法律思维", "论证"],
    citation: "James, N., & Burton, K. (2017). Legal Education Review, 27(1), Article 1.",
    note: "把法律语境中的批判性思维拆成解释、分析、评价和综合，适合把课堂训练转化为可评价的能力指标。",
    url: "https://classic.austlii.edu.au/au/journals/LegEdRev/2017/2.html"
  },
  {
    id: "steel-critical-legal-reading",
    title: "Critical Legal Reading: The Elements, Strategies and Dispositions Needed to Master this Essential Skill",
    author: "Alex Steel, Kate Galloway, Mary Heath, Natalie Skead, Mark Israel, and Anne Hewitt",
    type: "论文",
    language: "英文",
    tags: ["批判性思维", "法律阅读", "法律教育", "法律思维"],
    citation: "Steel, A., Galloway, K., Heath, M., Skead, N., Israel, M., & Hewitt, A. (2016). Legal Education Review, 26(1), 187-213.",
    note: "说明法律阅读本身就是法律推理的基础能力，可用于训练学生从文本中识别规则、结构、前提和问题。",
    url: "https://ler.scholasticahq.com/article/6076"
  },
  {
    id: "陈金钊-法律思维规则",
    title: "法律思维规则的意义探究",
    author: "陈金钊",
    type: "论文",
    language: "中文",
    tags: ["法律思维", "法律逻辑", "法学方法", "论证"],
    citation: "陈金钊：《法律思维规则的意义探究》，《四川大学学报（哲学社会科学版）》2025年第2期，第188-199页。",
    note: "把法律思维规则视为法律方法论的基础问题，适合讨论为什么法律思维不只是按条文办事。",
    url: "https://wkxb.scu.edu.cn/zh/article/88729952/"
  },
  {
    id: "武宏志-法律论辩批判性思维",
    title: "法律论辩与批判性思维",
    author: "武宏志",
    type: "论文",
    language: "中文",
    tags: ["批判性思维", "法律论辩", "法律逻辑", "论证"],
    citation: "武宏志：《法律论辩与批判性思维》，重庆大学法学院，2020年。",
    note: "把法律论辩、苏格拉底方法、图尔敏模型和批判性讨论连接起来，适合专题2与专题5共用。",
    url: "https://law.cqu.edu.cn/info/1494/15296.htm"
  },
  {
    id: "陈学权-批判性思维误用",
    title: "批判性思维教学在我国法律硕士教育中的误用及矫正",
    author: "陈学权",
    type: "论文",
    language: "中文",
    tags: ["批判性思维", "法律教育", "法律思维", "中国法"],
    citation: "陈学权：《批判性思维教学在我国法律硕士教育中的误用及矫正》，《研究生教育研究》2014年第2期，第84-87页。",
    note: "提醒学生批判性思维不是“为批判而批判”，而是先准确理解对象，再分析、评价并提出更好的理由。",
    url: "https://journal.ustc.edu.cn/ch/reader/view_abstract.aspx?file_no=20140217&flag=1"
  },
  {
    id: "kennedy-legal-education-hierarchy",
    title: "Legal Education and the Reproduction of Hierarchy",
    author: "Duncan Kennedy",
    type: "专著",
    language: "英文",
    tags: ["批判法学", "法律教育", "权力", "法律思维"],
    citation: "Kennedy, D. (1983). Legal Education and the Reproduction of Hierarchy.",
    note: "可与 Mertz 对读，展示法律教育如何既训练技术能力，也塑造权力和身份结构。",
    url: "https://www.jstor.org/stable/42893404"
  },
  {
    id: "hirschl-case-selection",
    title: "The Question of Case Selection in Comparative Constitutional Law",
    author: "Ran Hirschl",
    type: "论文",
    language: "英文",
    tags: ["比较法", "比较宪法", "研究设计", "案例选择"],
    citation: "Hirschl, R. (2005). American Journal of Comparative Law, 53(1), 125-155.",
    note: "专门讨论比较研究中的案例选择偏差，适合训练学生说明为什么比较这些法域。",
    url: "https://academic.oup.com/ajcl/article-abstract/53/1/125/2571690"
  },
  {
    id: "tushnet-comparative-constitutional",
    title: "The Possibilities of Comparative Constitutional Law",
    author: "Mark Tushnet",
    type: "论文",
    language: "英文",
    tags: ["比较法", "比较宪法", "制度比较"],
    citation: "Tushnet, M. (1999). Yale Law Journal, 108(6), 1225-1309.",
    note: "展示比较宪法研究如何在功能、表达、制度学习和规范批判之间展开。",
    url: "https://digitalcommons.law.yale.edu/ylj/vol108/iss6/2/"
  },
  {
    id: "frankenberg-critical-comparisons",
    title: "Critical Comparisons: Re-thinking Comparative Law",
    author: "Gunter Frankenberg",
    type: "论文",
    language: "英文",
    tags: ["比较法", "批判法学", "方法论", "语境"],
    citation: "Frankenberg, G. (1985). Harvard International Law Journal, 26, 411-455.",
    note: "批判比较法中的中心主义和自我确认倾向，适合提醒学生比较研究中的观察者位置。",
    url: "https://www.jstor.org/stable/840649"
  },
  {
    id: "mattei-three-patterns",
    title: "Three Patterns of Law: Taxonomy and Change in the World's Legal Systems",
    author: "Ugo Mattei",
    type: "论文",
    language: "英文",
    tags: ["比较法", "法系", "分类", "理论框架"],
    citation: "Mattei, U. (1997). American Journal of Comparative Law, 45(1), 5-44.",
    note: "用法系分类讨论法律秩序的变迁，可用于反思传统大陆法/普通法二分。",
    url: "https://academic.oup.com/ajcl/article-abstract/45/1/5/2581768"
  },
  {
    id: "eisenberg-why-empirical",
    title: "Why Do Empirical Legal Scholarship?",
    author: "Theodore Eisenberg",
    type: "论文",
    language: "英文",
    tags: ["实证研究", "法学方法", "研究设计"],
    citation: "Eisenberg, T. (2004). San Diego Law Review, 41, 1741-1746.",
    note: "简洁说明实证法学研究为什么能校正直觉、个案印象和未经检验的制度想象。",
    url: "https://scholarship.law.cornell.edu/facpub/359/"
  },
  {
    id: "black-behavior-law",
    title: "The Behavior of Law",
    author: "Donald Black",
    type: "专著",
    language: "英文",
    tags: ["法社会学", "实证研究", "理论构建"],
    citation: "Black, D. (1976). The Behavior of Law. Academic Press.",
    note: "把法律作为社会行为来解释，适合讨论法社会学中理论命题与经验材料的关系。",
    url: "https://openlibrary.org/works/OL2776712W/The_behavior_of_law"
  },
  {
    id: "merry-getting-justice",
    title: "Getting Justice and Getting Even: Legal Consciousness among Working-Class Americans",
    author: "Sally Engle Merry",
    type: "专著",
    language: "英文",
    tags: ["法社会学", "法律意识", "质性研究", "纠纷研究"],
    citation: "Merry, S. E. (1990). Getting Justice and Getting Even. University of Chicago Press.",
    note: "以普通人的纠纷经验说明法律意识和制度接近性，适合和 Ewick & Silbey 组成质性研究阅读组。",
    url: "https://press.uchicago.edu/ucp/books/book/chicago/G/bo3774571.html"
  },
  {
    id: "feeley-process-punishment",
    title: "The Process Is the Punishment: Handling Cases in a Lower Criminal Court",
    author: "Malcolm M. Feeley",
    type: "专著",
    language: "英文",
    tags: ["法社会学", "刑事司法", "实证研究", "程序"],
    citation: "Feeley, M. M. (1979). The Process Is the Punishment. Russell Sage Foundation.",
    note: "经典展示程序本身如何成为惩罚，适合训练学生把程序从文本规则转化为制度经验问题。",
    url: "https://www.russellsage.org/publications/process-punishment"
  },
  {
    id: "citron-technological-due-process",
    title: "Technological Due Process",
    author: "Danielle Keats Citron",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "自动化决策", "正当程序", "法律与科技"],
    citation: "Citron, D. K. (2008). Washington University Law Review, 85, 1249-1313.",
    note: "自动化行政决策和程序保障的早期经典，适合连接 AI 治理与传统公法原则。",
    url: "https://openscholarship.wustl.edu/law_lawreview/vol85/iss6/2/"
  },
  {
    id: "kroll-accountable-algorithms",
    title: "Accountable Algorithms",
    author: "Joshua A. Kroll et al.",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "算法问责", "法律与科技", "技术治理"],
    citation: "Kroll, J. A. et al. (2017). University of Pennsylvania Law Review, 165, 633-705.",
    note: "把计算机科学的可审计机制与法律问责问题连接起来，是算法治理的基础阅读。",
    url: "https://scholarship.law.upenn.edu/penn_law_review/vol165/iss3/3/"
  },
  {
    id: "coglianese-lehr-regulating-robot",
    title: "Regulating by Robot: Administrative Decision Making in the Machine-Learning Era",
    author: "Cary Coglianese and David Lehr",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "行政法", "自动化决策", "法律与科技"],
    citation: "Coglianese, C., & Lehr, D. (2017). Georgetown Law Journal, 105, 1147-1223.",
    note: "适合讨论机器学习进入行政决策后，透明、理由说明、裁量和司法审查如何变化。",
    url: "https://scholarship.law.upenn.edu/faculty_scholarship/1734/"
  },
  {
    id: "wexler-trade-secrets",
    title: "Life, Liberty, and Trade Secrets: Intellectual Property in the Criminal Justice System",
    author: "Rebecca Wexler",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "刑事司法", "证据", "算法透明"],
    citation: "Wexler, R. (2018). Stanford Law Review, 70, 1343-1429.",
    note: "说明商业秘密如何阻碍刑事司法中的算法质证，适合讨论可解释性与证据权利。",
    url: "https://www.stanfordlawreview.org/print/article/life-liberty-and-trade-secrets/"
  },
  {
    id: "huq-human-decision",
    title: "A Right to a Human Decision",
    author: "Aziz Z. Huq",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "自动化决策", "权利", "正当程序"],
    citation: "Huq, A. Z. (2020). Virginia Law Review, 106, 611-688.",
    note: "追问自动化治理中是否存在由人作出决定的权利，适合 AI 专题中的规范论证训练。",
    url: "https://www.virginialawreview.org/articles/right-human-decision/"
  },
  {
    id: "garrett-rudin-glass-box",
    title: "The Right to a Glass Box: Rethinking the Use of Artificial Intelligence in Criminal Justice",
    author: "Brandon L. Garrett and Cynthia Rudin",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "刑事司法", "可解释性", "算法问责"],
    citation: "Garrett, B. L., & Rudin, C. (2024). Cornell Law Review.",
    note: "从刑事司法风险评估出发主张可解释模型，适合讨论黑箱模型与法治要求的冲突。",
    url: "https://publications.lawschool.cornell.edu/lawreview/wp-content/uploads/sites/2/2024/04/Garrett-Rudin-final.pdf"
  },
  {
    id: "陈瑞华-论法学研究方法",
    title: "论法学研究方法",
    author: "陈瑞华",
    type: "专著",
    language: "中文",
    tags: ["法学方法", "研究设计", "法律写作", "中国法"],
    citation: "陈瑞华：《论法学研究方法》，法律出版社2017年版。",
    note: "以中国法学写作训练为中心，适合学生理解如何连接理论、实践和论文写作。",
    url: "https://book.douban.com/subject/27015113/"
  },
  {
    id: "舒国滢-法学方法论",
    title: "法学方法论",
    author: "舒国滢、王夏昊、雷磊",
    type: "专著",
    language: "中文",
    tags: ["法学方法", "法律解释", "法律思维", "法教义学"],
    citation: "舒国滢、王夏昊、雷磊：《法学方法论》，中国政法大学出版社2018年版。",
    note: "系统讨论法律判断如何形成，适合专题2、5、6共同使用。",
    url: "https://www.spp.gov.cn/spp/sy/201811/t20181115_399172.shtml"
  },
  {
    id: "郑永流-法律方法阶梯",
    title: "法律方法阶梯",
    author: "郑永流",
    type: "专著",
    language: "中文",
    tags: ["法律方法", "法律思维", "法律解释", "论证"],
    citation: "郑永流：《法律方法阶梯》，北京大学出版社2008年版。",
    note: "适合作为中文法律方法入门读物，帮助学生理解事实、规范和价值如何在判断中相遇。",
    url: "https://book.douban.com/subject/3244300/"
  },
  {
    id: "王泽鉴-法律思维与民法实例",
    title: "法律思维与民法实例：请求权基础理论体系",
    author: "王泽鉴",
    type: "专著",
    language: "中文",
    tags: ["法律思维", "民法", "法教义学", "案例分析"],
    citation: "王泽鉴：《法律思维与民法实例：请求权基础理论体系》，中国政法大学出版社2001年版。",
    note: "请求权基础方法的经典训练材料，适合展示教义学如何落实到案例分析。",
    url: "https://book.chazidian.com/book69625/"
  },
  {
    id: "王利明-陈金钊-法律解释学",
    title: "法律解释学",
    author: "王利明、陈金钊",
    type: "专著",
    language: "中文",
    tags: ["法律解释", "法教义学", "法律思维"],
    citation: "王利明、陈金钊：《法律解释学》，中国人民大学出版社2011年版。",
    note: "适合专题6补充中文法律解释学训练，尤其是解释方法、解释理由和适用边界。",
    url: "https://book.douban.com/subject/6006822/"
  },
  {
    id: "白建军-法律实证研究方法",
    title: "法律实证研究方法",
    author: "白建军",
    type: "专著",
    language: "中文",
    tags: ["实证研究", "研究设计", "数据", "中国法"],
    citation: "白建军：《法律实证研究方法》，北京大学出版社2014年第2版。",
    note: "中文法律实证研究方法的重要教材，适合训练文本、违法行为、法律适用和法制社会的实证分析。",
    url: "https://www.law.pku.edu.cn/gdpx/szll/axk/xfx/119041.htm"
  },
  {
    id: "白建军-论法律实证分析",
    title: "论法律实证分析",
    author: "白建军",
    type: "论文",
    language: "中文",
    tags: ["实证研究", "法学方法", "数据", "中国法"],
    citation: "白建军：《论法律实证分析》。",
    note: "适合课堂讨论中国法学为什么需要经验研究，以及实证分析和规范分析如何互补。",
    url: "https://www.aisixiang.com/data/11713.html"
  },
  {
    id: "侯猛-实证包装法学",
    title: "实证“包装”法学？——法律的实证研究在中国",
    author: "侯猛",
    type: "论文",
    language: "中文",
    tags: ["实证研究", "法社会学", "法学方法", "中国法"],
    citation: "侯猛：《实证“包装”法学？——法律的实证研究在中国》，《中国法律评论》2020年第4期，第61-71页。",
    note: "帮助学生区分真正的经验研究、定量研究、定性研究与只贴标签的“实证”。",
    url: "https://www.aisixiang.com/data/123081.html"
  },
  {
    id: "胡玉鸿-研究方法争议",
    title: "围绕法学研究方法的理论争议及其辨析",
    author: "胡玉鸿",
    type: "论文",
    language: "中文",
    tags: ["法学方法", "方法论", "研究设计", "中国法"],
    citation: "胡玉鸿：《围绕法学研究方法的理论争议及其辨析》，《政法论坛》2023年第3期。",
    note: "系统辨析法学研究方法是否有优劣、是否独立于其他学科、以及主观性与客观性等基础争议。",
    url: "https://www.cssn.cn/fx/xzyc/202310/t20231020_5692056.shtml"
  },
  {
    id: "胡玉鸿-法学方法论体系构造",
    title: "法学方法论的属性定位、发生契机与体系构造",
    author: "胡玉鸿",
    type: "论文",
    language: "中文",
    tags: ["法学方法", "法学方法论", "理论构建", "中国法"],
    citation: "胡玉鸿：《法学方法论的属性定位、发生契机与体系构造》，《学术月刊》2023年第4期，第17-32页。",
    note: "从法学方法论的属性、发生条件和体系结构展开，是理解方法论本身的基础中文文献。",
    url: "https://www.xsyk021.com/article/id/3281846e-bb9f-430a-9447-9b2ef3c8e122"
  },
  {
    id: "陈瑞华-第三条道路",
    title: "第三条道路——连接理论与实践的法学研究方法",
    author: "陈瑞华",
    type: "论文",
    language: "中文",
    tags: ["法学方法", "研究设计", "理论与实践", "中国法"],
    citation: "陈瑞华：《第三条道路——连接理论与实践的法学研究方法》。",
    note: "强调把法律实践问题转化为学术问题，并在规范分析、经验观察与理论提炼之间建立连接。",
    url: "https://ielaw.uibe.edu.cn/zyflrcjy/fxjyyj/10773.htm"
  },
  {
    id: "张永健程金华-法律实证研究方法坐标",
    title: "法律实证研究的方法坐标",
    author: "张永健、程金华",
    type: "论文",
    language: "中文",
    tags: ["实证研究", "法学方法", "社科法学", "研究设计"],
    citation: "张永健、程金华：《法律实证研究的方法坐标》，《中国法律评论》2018年第6期，第73-89页。",
    note: "用研究主题和分析方法两个维度定位法律实证研究，帮助学生区分实证法学、社科法学和教义学。",
    url: "https://static.ilawpress.com/lpdpres/html/302596831303434752.html"
  },
  {
    id: "程金华-迈向科学法律实证研究",
    title: "迈向科学的法律实证研究",
    author: "程金华",
    type: "论文",
    language: "中文",
    tags: ["实证研究", "研究设计", "方法论批评", "中国法"],
    citation: "程金华：《迈向科学的法律实证研究》，《清华法学》2018年第4期。",
    note: "从论题、理论和技术三个层面反思中国法律实证研究质量，适合训练学生做方法审计。",
    url: "http://www.socio-legal.sjtu.edu.cn/Download/Download.aspx?Guid=6fcd74e243a640fb9fb1480499d84f18"
  },
  {
    id: "何挺-裁判文书方法论检讨",
    title: "法学研究中裁判文书运用的方法论检讨——以刑事法文献为例的内容分析",
    author: "何挺",
    type: "论文",
    language: "中文",
    tags: ["实证研究", "裁判文书", "内容分析", "研究设计"],
    citation: "何挺：《法学研究中裁判文书运用的方法论检讨——以刑事法文献为例的内容分析》，《法学研究》2022年第3期。",
    note: "以刑事法文献为样本检讨裁判文书数据的获取、抽样、分析和结论适用问题。",
    url: "https://cacpl.chinalaw.org.cn/portal/article/index/id/6644.html"
  },
  {
    id: "熊丙万王军乐-裁判文书数据法实证",
    title: "基于裁判文书数据的法实证研究方法——以“知假买假”问题为例",
    author: "熊丙万、王军乐",
    type: "论文",
    language: "中文",
    tags: ["实证研究", "裁判文书", "数据分析", "法教义学"],
    citation: "熊丙万、王军乐：《基于裁判文书数据的法实证研究方法——以“知假买假”问题为例》，《经贸法律评论》2023年第6期。",
    note: "以消费者惩罚性赔偿裁判文书为材料，示范如何从规范问题出发设计数据抽取和事实判断。",
    url: "https://law.uibe.edu.cn/xzkw/gk/2023nd6q/2bc9949139dc41b4b4939309f3c8335d.htm"
  },
  {
    id: "屈茂辉-裁判文书实证审视",
    title: "基于裁判文书的法学实证研究之审视",
    author: "屈茂辉",
    type: "论文",
    language: "中文",
    tags: ["实证研究", "裁判文书", "知识图谱", "研究设计"],
    citation: "屈茂辉：《基于裁判文书的法学实证研究之审视》，《现代法学》2020年第3期。",
    note: "用知识图谱梳理裁判文书实证研究的发展状况、学术群体、主题局限和方法风险。",
    url: "https://qks.swupl.edu.cn/docs/2020-06/20200620214716351315.pdf"
  },
  {
    id: "韩宝-社会法律研究方法展开",
    title: "各归其位：“社会—法律研究”方法的展开",
    author: "韩宝",
    type: "论文",
    language: "中文",
    tags: ["社科法学", "法律与社会", "法学方法", "交叉学科"],
    citation: "韩宝：《各归其位：“社会—法律研究”方法的展开》，《厦门大学法律评论》2017年第30期，第21-54页。",
    note: "说明社会—法律研究与法教义学的分工、比较和可能的互补关系。",
    url: "http://www.socio-legal.sjtu.edu.cn/wxzy/info.aspx?itemid=3737&lcid=30"
  },
  {
    id: "陈兴良-法学知识演进分化",
    title: "法学知识的演进与分化——以社科法学与法教义学为视角",
    author: "陈兴良",
    type: "论文",
    language: "中文",
    tags: ["法学方法", "社科法学", "法教义学", "知识论"],
    citation: "陈兴良：《法学知识的演进与分化——以社科法学与法教义学为视角》，《中国法律评论》2021年第4期。",
    note: "从知识论角度解释社科法学与法教义学的分化，适合学生理解方法争论背后的学科定位。",
    url: "https://www.law.pku.edu.cn/xwzx/pl/132024.htm"
  },
  {
    id: "陈柏峰-法律经验研究机制分析",
    title: "法律经验研究的机制分析方法",
    author: "陈柏峰",
    type: "论文",
    language: "中文",
    tags: ["社科法学", "经验研究", "机制分析", "质性研究"],
    citation: "陈柏峰：《法律经验研究的机制分析方法》，《法商研究》2016年第4期。",
    note: "提出以田野工作、经验饱和、因果链条和机制解释展开法律经验研究。",
    url: "https://zgfxqk.chinalaw.org.cn/portal/article/index/id/2047.html"
  },
  {
    id: "陈柏峰-法律经验研究微观过程",
    title: "法律经验研究的微观过程与理论创造",
    author: "陈柏峰",
    type: "论文",
    language: "中文",
    tags: ["社科法学", "质性研究", "理论构建", "中国法"],
    citation: "陈柏峰：《法律经验研究的微观过程与理论创造》，《法制与社会发展》2021年第2期，第171-192页。",
    note: "把经验材料储备、田野发现、理论构思和命题表达拆解为可学习的研究过程。",
    url: "http://www.socio-legal.sjtu.edu.cn/wxzy/info.aspx?itemid=3848"
  },
  {
    id: "侯猛-社科法学研究格局",
    title: "社科法学的研究格局：从分立走向整合",
    author: "侯猛",
    type: "论文",
    language: "中文",
    tags: ["社科法学", "法社会学", "交叉学科", "研究范式"],
    citation: "侯猛：《社科法学的研究格局：从分立走向整合》。",
    note: "从法律社会学、法律经济学和法律认知科学等进路梳理社科法学的整合方向。",
    url: "http://iolaw.cssn.cn/fxyjdt/201704/t20170421_4649751.shtml"
  },
  {
    id: "李晟-实践视角社科法学",
    title: "实践视角下的社科法学：以法教义学为对照",
    author: "李晟",
    type: "论文",
    language: "中文",
    tags: ["社科法学", "法教义学", "实践研究", "中国法"],
    citation: "李晟：《实践视角下的社科法学：以法教义学为对照》，《法商研究》2014年第5期，第81-86页。",
    note: "以实践问题为中心比较社科法学与法教义学的研究立场和问题意识。",
    url: "https://www.legal-theory.org/?mod=info&act=view&id=20426"
  },
  {
    id: "郭栋-法律社会科学研究边界",
    title: "法律的社会科学研究：理论边界与跨域协同",
    author: "郭栋",
    type: "论文",
    language: "中文",
    tags: ["社科法学", "交叉学科", "理论边界", "研究设计"],
    citation: "郭栋：《法律的社会科学研究：理论边界与跨域协同》，《经贸法律评论》2019年第4期，第133-147页。",
    note: "讨论法律社会科学研究的规范边界、事实边界和跨域协同问题。",
    url: "https://law.uibe.edu.cn/docs/2020-07/20200720224023404138.pdf"
  },
  {
    id: "林来梵-宪法学研究方法评辨",
    title: "中国宪法学研究方法评辨：过去、现在与未来",
    author: "林来梵",
    type: "论文",
    language: "中文",
    tags: ["宪法学", "法学方法", "规范研究", "社科法学"],
    citation: "林来梵：《中国宪法学研究方法评辨：过去、现在与未来》，中国社会科学网2024年3月15日。",
    note: "以宪法学为例检视规范宪法学、宪法社会学、宪法政策学等方法路径。",
    url: "https://www.tsinghua.edu.cn/info/1662/110179.htm"
  },
  {
    id: "余凌云-行政法案例分析方法",
    title: "行政法案例分析的基本方法",
    author: "余凌云",
    type: "论文",
    language: "中文",
    tags: ["案例研究", "行政法", "法律方法", "法教义学"],
    citation: "余凌云：《行政法案例分析的基本方法》，《法律适用》2025年第3期。",
    note: "提出行政法案例分析的“三步分析法”：梳理事实、检索规范、分析争议。",
    url: "https://www.law.tsinghua.edu.cn/info/1036/20102.htm"
  },
  {
    id: "胡敏洁-行政法案例研究方法",
    title: "论行政法中的案例研究方法",
    author: "胡敏洁",
    type: "论文",
    language: "中文",
    tags: ["案例研究", "行政法", "研究设计", "中国法"],
    citation: "胡敏洁：《论行政法中的案例研究方法》，《当代法学》2010年第1期，第76-82页。",
    note: "区分个案分析、批量研究和多层次案例研究，适合案例研究方法训练。",
    url: "http://calaw.ruc.edu.cn/gfal/xzfalfx/b867c3d6466a48b6b78556403ced523c.htm"
  },
  {
    id: "赵梦闪-指导案例法律方法",
    title: "法律方法在指导性案例中的运用研究——以178个指导案例为文本的考察",
    author: "赵梦闪",
    type: "论文",
    language: "中文",
    tags: ["案例研究", "法律方法", "指导性案例", "文本分析"],
    citation: "赵梦闪：《法律方法在指导性案例中的运用研究——以178个指导案例为文本的考察》，东方法学微信公众号2023年11月9日，澎湃新闻转载。",
    note: "以最高人民法院178个指导案例为文本，考察法律发现、法律解释、原则适用和漏洞填补等方法。",
    url: "https://www.thepaper.cn/newsDetail_forward_25236025"
  },
  {
    id: "郑永流-法律交叉研究原理",
    title: "法律的“交叉”研究和应用的原理",
    author: "郑永流",
    type: "论文",
    language: "中文",
    tags: ["交叉学科", "法学方法", "法教义学", "理论构建"],
    citation: "郑永流：《法律的“交叉”研究和应用的原理》，《中国法学》2018年第4期，第124-139页。",
    note: "从法律的复数性和制定法的动态性说明教义学与非教义学知识并存的根据。",
    url: "https://clsjp.chinalaw.org.cn/portal/article/index/id/9646.html"
  },
  {
    id: "王利明-法释义学体系",
    title: "从法教义学迈向法释义学——兼谈中国自主法释义学体系之构建",
    author: "王利明",
    type: "论文",
    language: "中文",
    tags: ["法教义学", "法释义学", "法律解释", "中国法"],
    citation: "王利明：《从法教义学迈向法释义学——兼谈中国自主法释义学体系之构建》，《法学家》2025年第4期。",
    note: "从中国法语境反思德国法教义学名称、内容和方法，提出构建自主法释义学体系。",
    url: "https://www.civillaw.com.cn/t/?id=40124"
  },
  {
    id: "邹兵建-法教义学释疑",
    title: "法教义学释疑——以刑法教义学为重点",
    author: "邹兵建",
    type: "论文",
    language: "中文",
    tags: ["法教义学", "刑法", "方法论", "规范研究"],
    citation: "邹兵建：《法教义学释疑——以刑法教义学为重点》，《刑事法评论》第42卷，2018年。",
    note: "澄清法教义学、解释论、立法论和实践理性的关系，适合部门法方法训练。",
    url: "https://ccj.pku.edu.cn/article/info?id=331259780"
  },
  {
    id: "雷磊-法学方法论观察反思",
    title: "法学方法论研究在中国：观察与反思",
    author: "雷磊",
    type: "论文",
    language: "中文",
    tags: ["法学方法论", "法律方法", "学术史", "中国法"],
    citation: "雷磊：《法学方法论研究在中国：观察与反思》，《社会科学》2023年第8期，第7页以下。",
    note: "从两波研究热潮、八个论题和若干反思切入，帮助学生理解中国法学方法论的学术史与现实问题。",
    url: "https://www.aisixiang.com/data/156316.html"
  },
  {
    id: "雷鑫洪-方法论演进中国法律实证研究",
    title: "方法论演进视野下的中国法律实证研究",
    author: "雷鑫洪",
    type: "论文",
    language: "中文",
    tags: ["实证研究", "文献计量", "法学方法论", "研究范式"],
    citation: "雷鑫洪：《方法论演进视野下的中国法律实证研究》，《法学研究》2017年第4期。",
    note: "以知网文献为样本，用可视化计量分析梳理中国法律实证研究的数量、学科分布和方法瓶颈。",
    url: "https://faxueyanjiu.ajcass.com/Admin/UploadFile/publish_article/2017/4/20170406.pdf"
  },
  {
    id: "陈柏峰-法律实证研究兴起分化",
    title: "法律实证研究的兴起与分化",
    author: "陈柏峰",
    type: "论文",
    language: "中文",
    tags: ["实证研究", "社科法学", "学术史", "研究范式"],
    citation: "陈柏峰：《法律实证研究的兴起与分化》，《中国法学》2018年第3期，第132-149页。",
    note: "从调研传统、苏力式经验研究、定性与定量分化等线索，解释中国法律实证研究的历史来源与共同挑战。",
    url: "https://www.aisixiang.com/data/110695.html"
  },
  {
    id: "白建军-刑法教义学实证研究",
    title: "论刑法教义学与实证研究",
    author: "白建军",
    type: "论文",
    language: "中文",
    tags: ["法教义学", "实证研究", "刑法", "方法整合"],
    citation: "白建军：《论刑法教义学与实证研究》，《法学研究》2021年第3期。",
    note: "说明刑法教义学与刑法实证研究并非根本对立，适合展示规范研究和大样本经验材料如何互相校正。",
    url: "https://www.socio-legal.sjtu.edu.cn/wxzy/info.aspx?itemid=3994"
  },
  {
    id: "金可可-民法实证研究方法",
    title: "民法实证研究方法与民法教义学",
    author: "金可可",
    type: "论文",
    language: "中文",
    tags: ["民法", "实证研究", "法教义学", "方法整合"],
    citation: "金可可：《民法实证研究方法与民法教义学》，《法学研究》2012年第1期，第48-50页。",
    note: "以民法为场域讨论实证材料进入教义学论证的方式和限度，适合训练方法边界意识。",
    url: "https://sns.wanfangdata.com.cn/perio/fxyj?issueNum=1&publishYear=2012&tabId=article"
  },
  {
    id: "左卫民-范式革命",
    title: "一场新的范式革命？",
    author: "左卫民",
    type: "论文",
    language: "中文",
    tags: ["实证研究", "社科法学", "中国法", "研究范式"],
    citation: "左卫民：《一场新的范式革命？——解读中国法律实证研究》，《清华法学》2017年第3期。",
    note: "从中国法学语境讨论法律实证研究的兴起及其与社科法学的关系。",
    url: "http://iolaw.cssn.cn/fxyjdt/201707/t20170714_4651521.shtml"
  },
  {
    id: "贺欣-经验地研究法律",
    title: "经验地研究法律：基于社会科学的外部视角",
    author: "贺欣",
    type: "论文",
    language: "中文",
    tags: ["法社会学", "实证研究", "交叉学科", "中国法"],
    citation: "贺欣：《经验地研究法律：基于社会科学的外部视角》，《学术月刊》2021年第3期，第106-113页。",
    note: "说明从法律外部进行经验研究的意义，适合连接法社会学和中国司法研究。",
    url: "https://www.xsyk021.com/article/id/0fb5b63f-da0c-418c-aa97-04847e41dacb"
  },
  {
    id: "贺欣-街头研究者",
    title: "街头的研究者：法律与社会科学笔记",
    author: "贺欣",
    type: "专著",
    language: "中文",
    tags: ["法社会学", "实证研究", "质性研究", "中国法"],
    citation: "贺欣：《街头的研究者：法律与社会科学笔记》，北京大学出版社2021年版。",
    note: "适合启发学生把法律经验研究理解为现场、材料、方法和自我反思的结合。",
    url: "https://www.law.hku.hk/hk/%E6%95%99%E5%AD%B8%E4%BA%BA%E5%93%A1/professor-xin-he/"
  },
  {
    id: "强世功-法律人的城邦",
    title: "法律人的城邦",
    author: "强世功",
    type: "专著",
    language: "中文",
    tags: ["法理学", "法律职业", "法律思维", "中国法"],
    citation: "强世功：《法律人的城邦》，上海三联书店2003年版。",
    note: "从法律人共同体和国家秩序理解法律职业，适合专题2和理论页讨论法律思维的社会条件。",
    url: "https://www.law.pku.edu.cn/gdpx/szll/axk/fxll/118910.htm"
  },
  {
    id: "刘艳红-人工智能法学反智化",
    title: "人工智能法学研究的反智化批判",
    author: "刘艳红",
    type: "论文",
    language: "中文",
    tags: ["人工智能", "法律与科技", "法学方法", "中国法"],
    citation: "刘艳红：《人工智能法学研究的反智化批判》，《东方法学》2019年第5期，第119-126页。",
    note: "提醒学生避免把技术热词替代真正的法学问题和方法训练。",
    url: "https://sls.org.cn/webfile/upload/2019/10-22/14-22-550205-626443287.pdf"
  },
  {
    id: "张凌寒-算法权力",
    title: "算法权力的兴起、异化及法律规制",
    author: "张凌寒",
    type: "论文",
    language: "中文",
    tags: ["人工智能", "算法权力", "法律与科技", "中国法"],
    citation: "张凌寒：《算法权力的兴起、异化及法律规制》，《法商研究》2019年第4期。",
    note: "适合说明算法不只是技术工具，也可能成为影响权利、选择和社会排序的权力机制。",
    url: "https://fsyj.zuel.edu.cn/_upload/article/files/c0/8a/801401b645ca913b7a34cd0c7193/ac7e3ba3-75ab-48b2-9854-7c2e97aea1c5.pdf"
  },
  {
    id: "丁晓东-算法法律规制",
    title: "论算法的法律规制",
    author: "丁晓东",
    type: "论文",
    language: "中文",
    tags: ["人工智能", "算法规制", "法律与科技", "中国法"],
    citation: "丁晓东：《论算法的法律规制》，《中国社会科学》2020年第12期。",
    note: "系统比较算法公开、个人数据赋权、反算法歧视等规制路径及其局限。",
    url: "https://aisg.tongji.edu.cn/info/1013/1107.htm"
  },
  {
    id: "左卫民-法律人工智能再思考",
    title: "热与冷：中国法律人工智能的再思考",
    author: "左卫民",
    type: "论文",
    language: "中文",
    tags: ["人工智能", "中国法", "司法", "实证研究"],
    citation: "左卫民：《热与冷：中国法律人工智能的再思考》，《环球法律评论》。",
    note: "从话语热与实践冷的落差出发，适合讨论法律 AI 的数据、场景和方法限制。",
    url: "https://globallawreview.ajcass.com/Magazine/Show/95824"
  },
  {
    id: "左卫民-计算法学未来",
    title: "中国计算法学的未来：审思与前瞻",
    author: "左卫民",
    type: "论文",
    language: "中文",
    tags: ["计算法学", "人工智能", "法学方法", "中国法"],
    citation: "左卫民：《中国计算法学的未来：审思与前瞻》。",
    note: "适合讨论计算法学是否构成新范式，以及数据、统计和法律问题之间的真实关系。",
    url: "https://www.legal-theory.org/?mod=info&act=view&id=27262"
  },
  {
    id: "王利明-人工智能时代法学新课题",
    title: "人工智能时代提出的法学新课题",
    author: "王利明",
    type: "论文",
    language: "中文",
    tags: ["人工智能", "研究问题", "法律与科技", "中国法"],
    citation: "王利明：《人工智能时代提出的法学新课题》，《中国法律评论》2018年第2期卷首语，第1-4页。",
    note: "以“问题就是时代的口号”为入口，适合训练学生从技术变化中提炼真正的法学研究问题和研究意义。",
    url: "https://zxzx.chinalaw.org.cn/portal/article/index/id/2672.html"
  },
  {
    id: "赵精武周瑞珏-数字法学风险治理",
    title: "论数字法学研究范式的转向：风险体系化治理",
    author: "赵精武、周瑞珏",
    type: "论文",
    language: "中文",
    tags: ["数字法学", "人工智能", "研究范式", "风险治理"],
    citation: "赵精武、周瑞珏：《论数字法学研究范式的转向：风险体系化治理》，爱思想2024年9月28日转载。",
    note: "把数字法学的研究范式放在法律关系、技术风险和体系化治理之间，适合说明 AI 研究不能只做风险罗列。",
    url: "https://www.aisixiang.com/data/155412.html"
  },
  {
    id: "薛刚-生成式AI改变研究方式",
    title: "生成式人工智能将改变学术研究方式",
    author: "薛刚",
    type: "论文",
    language: "中文",
    tags: ["生成式AI", "学术研究", "学术写作", "学术诚信"],
    citation: "薛刚：《生成式人工智能将改变学术研究方式》，《文献与数据学报》2024年第4期，第15-17页。",
    note: "虽非专门法学论文，但可作为讨论 AI 进入研究构思、写作、出版和诚信治理的中文背景材料。",
    url: "https://wxysjxb.ajcass.com/Magazine/Show?id=117570"
  },
  {
    id: "perlman-generative-ai-legal-scholarship",
    title: "Generative AI and the Future of Legal Scholarship",
    author: "Andrew M. Perlman",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "法学研究", "学术写作", "作者责任"],
    citation: "Perlman, A. M. (2024). Generative AI and the Future of Legal Scholarship. Suffolk University Law School Research Paper.",
    note: "以生成式 AI 参与法律学术写作为示范和反思，适合讨论研究意义、原创性和作者责任的边界。",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5072765"
  },
  {
    id: "frazier-rozenshtein-large-language-scholarship",
    title: "Large Language Scholarship",
    author: "Kevin Frazier and Alan Z. Rozenshtein",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "法律学术", "学术伦理", "法学院"],
    citation: "Frazier, K., & Rozenshtein, A. Z. (2025). Large Language Scholarship. 20 FIU Law Review (forthcoming 2026).",
    note: "从学术生产、期刊筛选、学生训练和认知去技能化等层面分析 AI 对法律学术生态的系统影响。",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5200768"
  },
  {
    id: "choi-llm-empirical-legal-research",
    title: "How to Use Large Language Models for Empirical Legal Research",
    author: "Jonathan H. Choi",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "实证研究", "文本分析", "研究设计"],
    citation: "Choi, J. H. (2023). How to Use Large Language Models for Empirical Legal Research. Journal of Institutional and Theoretical Economics (forthcoming).",
    note: "直接说明 LLM 如何用于法律文本分类和经验研究设计，是 AI 作为研究方法工具的核心材料。",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4536852"
  },
  {
    id: "livermore-llm-interpretability-els",
    title: "Language Model Interpretability and Empirical Legal Studies",
    author: "Michael A. Livermore, Felix Herron, and Daniel Rockmore",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "实证研究", "可解释性", "法学方法"],
    citation: "Livermore, M. A., Herron, F., & Rockmore, D. (2024). Language Model Interpretability and Empirical Legal Studies. Journal of Institutional and Theoretical Economics, 180(2), 244.",
    note: "提醒学生在使用 LLM 把法律文本转化为数据时，应权衡准确率、可解释性和方法透明。",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4599212"
  },
  {
    id: "dahl-large-legal-fictions",
    title: "Large Legal Fictions: Profiling Legal Hallucinations in Large Language Models",
    author: "Matthew Dahl, Varun Magesh, Mirac Suzgun, and Daniel E. Ho",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "法律幻觉", "引文核验", "研究诚信"],
    citation: "Dahl, M., Magesh, V., Suzgun, M., & Ho, D. E. (2024). Large Legal Fictions. Journal of Legal Analysis, 16(1), 64-93.",
    note: "以系统证据说明法律大模型幻觉风险，适合训练引文核验、来源审计和 AI 输出的证据边界。",
    url: "https://academic.oup.com/jla/article/16/1/64/7699227"
  },
  {
    id: "legalbench-legal-reasoning-benchmark",
    title: "LegalBench: A Collaboratively Built Benchmark for Measuring Legal Reasoning in Large Language Models",
    author: "Neel Guha et al.",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "法律推理", "评测", "研究设计"],
    citation: "Guha, N., Nyarko, J., Ho, D. E., Ré, C., et al. (2023). LegalBench. Advances in Neural Information Processing Systems 36.",
    note: "把法律推理拆成可评测任务，为讨论 AI 法律能力、评测指标和研究设计提供范例。",
    url: "https://papers.neurips.cc/paper_files/paper/2023/hash/89e44582fd28ddfea1ea4dcb0ebbf4b0-Abstract-Datasets_and_Benchmarks.html"
  },
  {
    id: "savelka-ashley-zero-shot-annotation",
    title: "The Unreasonable Effectiveness of Large Language Models in Zero-Shot Semantic Annotation of Legal Texts",
    author: "Jaromir Savelka and Kevin D. Ashley",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "文本标注", "实证研究", "法律文本分析"],
    citation: "Savelka, J., & Ashley, K. D. (2023). The Unreasonable Effectiveness of Large Language Models in Zero-Shot Semantic Annotation of Legal Texts. Frontiers in Artificial Intelligence, 6.",
    note: "适合展示 AI 如何改变法律文本编码、案例分析和实证研究的前期探索成本。",
    url: "https://www.frontiersin.org/articles/10.3389/frai.2023.1279794/full"
  },
  {
    id: "surden-chatgpt-llm-law",
    title: "ChatGPT, Large Language Models, and Law",
    author: "Harry Surden",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "法律与科技", "大语言模型", "法学方法"],
    citation: "Surden, H. (2024). ChatGPT, Large Language Models, and Law. Fordham Law Review, 92, 1941.",
    note: "概括 LLM 的技术进展、法律应用和限制，适合作为学生进入 AI 与法律研究的英文总论。",
    url: "https://ir.lawnet.fordham.edu/flr/vol92/iss5/9/"
  },
  {
    id: "chau-livermore-computational-legal-studies",
    title: "Computational Legal Studies Comes of Age",
    author: "Bao Chau and Michael A. Livermore",
    type: "论文",
    language: "英文",
    tags: ["计算法学", "人工智能", "实证研究", "法律文本分析"],
    citation: "Chau, B., & Livermore, M. A. (2024). Computational Legal Studies Comes of Age. European Journal of Empirical Legal Studies, 1(1).",
    note: "用 law-as-code 与 law-as-data 概括计算法学发展，适合连接 AI、数据科学和传统法学方法。",
    url: "https://publicera.kb.se/ejels/article/view/19684"
  },
  {
    id: "lindholm-textual-insights",
    title: "Textual Insights: What Can Computers Teach Legal Scholars About Law?",
    author: "Johan Lindholm",
    type: "论文",
    language: "英文",
    tags: ["人工智能", "法教义学", "文本分析", "法学研究"],
    citation: "Lindholm, J. (2024). Textual Insights: What Can Computers Teach Legal Scholars About Law? Stockholm IP Law Review, 2, 25-32.",
    note: "讨论计算工具如何补充教义学文本研究，适合说明 AI 不必替代传统法学方法，而可扩大可观察材料。",
    url: "https://www.lawpub.se/en/artikel/10.53292/33313cc8.3f967df2"
  }
];

export const additionalExamples: Example[] = [
  {
    id: "holmes-path-example",
    title: "The Path of the Law",
    author: "Oliver Wendell Holmes Jr.",
    method: "法律现实主义、理论重构、修辞性论证",
    question: "如果从当事人预测法律后果的角度理解法律，法律思维会发生什么变化？",
    contribution: "把法律从抽象道德命题转向经验、预测和制度行为，开启法律现实主义问题意识。",
    discussion: ["Holmes 的 bad man 视角为何既有解释力也有危险？", "预测理论能否替代规范性法律论证？"],
    citation: "Holmes, O. W. Jr. (1897). Harvard Law Review, 10, 457-478.",
    url: "https://www.gutenberg.org/files/2373/2373-h/2373-h.htm"
  },
  {
    id: "hart-fuller-debate-example",
    title: "Hart-Fuller Debate on Law and Morality",
    author: "H. L. A. Hart and Lon L. Fuller",
    method: "法哲学论战、概念分析、规范论证",
    question: "法律有效性是否必须与道德评价分离？",
    contribution: "通过正反论证展示理论框架如何改变同一法律问题的概念边界。",
    discussion: ["Hart 与 Fuller 的分歧是概念分歧、规范分歧，还是方法分歧？", "如何把一场理论论战转化为研究综述？"],
    citation: "Hart, H. L. A. (1958). Harvard Law Review, 71(4), 593-629; Fuller, L. L. (1958). Harvard Law Review, 71(4), 630-672.",
    url: "https://www.law.nyu.edu/sites/default/files/Hart%2C%20H.%20L.%20A.%20%281958%29%20%27Positivism%20and%20the%20Separation%20of%20Law%20and%20Morals%27%20Harvard%20Law%20Review%20Vol.%2071%2C%20No.%204%20%281958%29%20pp.%20593-629.pdf"
  },
  {
    id: "galanter-haves-example",
    title: "Why the Haves Come Out Ahead",
    author: "Marc Galanter",
    method: "法社会学、类型建构、制度分析",
    question: "为什么资源充足的重复参与者在法律系统中通常更占优势？",
    contribution: "提出 repeat players 与 one-shotters 的分析框架，把诉讼不平等解释为制度结构问题。",
    discussion: ["这一框架如何从观察上升为理论？", "它能否迁移到中国司法、平台治理或行政执法研究中？"],
    citation: "Galanter, M. (1974). Law & Society Review, 9(1), 95-160.",
    url: "https://repository.law.wisc.edu/s/uwlaw/item/31285"
  },
  {
    id: "felstiner-disputes-example",
    title: "Naming, Blaming, Claiming",
    author: "William L. F. Felstiner, Richard L. Abel, and Austin Sarat",
    method: "概念框架、纠纷形成研究、法社会学",
    question: "社会伤害如何被命名、归责，并最终转化为法律纠纷？",
    contribution: "把纠纷视为阶段性社会过程，而不是法院案卷中的既成事实。",
    discussion: ["为什么案件统计不能等同于纠纷研究？", "命名、归责、主张三阶段如何帮助做实证访谈？"],
    citation: "Felstiner, Abel & Sarat, Law & Society Review, 15(3-4), 1980-1981.",
    url: "https://www.cambridge.org/core/journals/law-and-society-review/article/emergence-and-transformation-of-disputes-naming-blaming-claiming/CC5A29351BCC355B8317FD13CAF29F09"
  },
  {
    id: "mnookin-shadow-example",
    title: "Bargaining in the Shadow of the Law",
    author: "Robert H. Mnookin and Lewis Kornhauser",
    method: "法律经济学、谈判理论、制度功能分析",
    question: "正式法律规则如何影响庭外谈判和私人秩序？",
    contribution: "说明法律并不只通过判决发挥作用，也通过背景规则塑造谈判空间。",
    discussion: ["如何把一个部门法问题转化为制度行为研究？", "庭外谈判的证据如何收集？"],
    citation: "Mnookin & Kornhauser, Yale Law Journal, 88, 950-997 (1979).",
    url: "https://openyls.law.yale.edu/handle/20.500.13051/15889"
  },
  {
    id: "ellickson-order-example",
    title: "Order Without Law",
    author: "Robert C. Ellickson",
    method: "田野研究、社会规范、法经济学",
    question: "邻里纠纷为什么常常不依赖正式法律解决？",
    contribution: "用具体社区材料挑战正式法律中心主义，说明社会规范的协调功能。",
    discussion: ["田野材料如何支持理论命题？", "非正式规范何时会补充法律，何时会排斥弱势群体？"],
    citation: "Ellickson, R. C. (1991). Harvard University Press.",
    url: "https://openlibrary.org/books/OL1867499M/Order_without_law"
  },
  {
    id: "barocas-disparate-example",
    title: "Big Data's Disparate Impact",
    author: "Solon Barocas and Andrew D. Selbst",
    method: "AI 法、反歧视法、技术机制分析",
    question: "数据挖掘如何在没有显性歧视意图时产生差别影响？",
    contribution: "把算法偏见嵌入反歧视法框架，说明数据、特征选择和代理变量的法律意义。",
    discussion: ["作者如何把技术过程翻译成法律问题？", "算法公平研究容易在哪些地方误解反歧视法？"],
    citation: "Barocas & Selbst, California Law Review, 104, 671-732 (2016).",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2477899"
  },
  {
    id: "citron-pasquale-example",
    title: "The Scored Society",
    author: "Danielle Keats Citron and Frank Pasquale",
    method: "AI 治理、正当程序、规范制度设计",
    question: "自动化评分如何影响个人机会，法律应如何提供程序保障？",
    contribution: "把信用评分、预测和程序正义连接起来，提出自动化决策的问责路径。",
    discussion: ["正当程序如何适用于私人或混合型算法系统？", "黑箱问题是证据问题、权利问题，还是制度设计问题？"],
    citation: "Citron & Pasquale, Washington Law Review, 89, 1-33 (2014).",
    url: "https://digitalcommons.law.uw.edu/wlr/vol89/iss1/2/"
  },
  {
    id: "lei-dogmatics-example",
    title: "法教义学的基本立场",
    author: "雷磊",
    method: "法教义学、元方法论、规范理论",
    question: "法教义学为何是一种规范性研究立场，而不只是解释技术？",
    contribution: "从裁判理论、法概念论和法学理论三个层面说明法教义学的基本立场。",
    discussion: ["法教义学如何同时接纳经验知识和价值判断？", "法教义学与社科法学的边界在何处？"],
    citation: "雷磊：《法教义学的基本立场》，《中外法学》2015年第1期。",
    url: "https://ccj.pku.edu.cn/Article/info?aid=107936380"
  },
  {
    id: "suli-happening-example",
    title: "也许正在发生：中国当代法学发展的一个概览",
    author: "苏力",
    method: "学术史、范式分析、社科法学",
    question: "中国当代法学研究格局中有哪些不同范式，它们如何竞争与共存？",
    contribution: "把中国法学发展概括为政法法学、诠释法学和社科法学等研究取向的互动。",
    discussion: ["范式分类如何帮助学生定位自己的研究？", "这种宏观判断需要哪些证据支撑？"],
    citation: "苏力：《也许正在发生》，《比较法研究》2001年第3期。",
    url: "https://www.legal-theory.org/?act=view&id=942&mod=info"
  },
  {
    id: "liang-customary-example",
    title: "清代习惯法：社会与国家",
    author: "梁治平",
    method: "法律史、法社会学、档案与契约材料",
    question: "清代习惯法如何在国家法与地方社会之间运行？",
    contribution: "用多种一手材料重构习惯法的形态、功能和国家关系。",
    discussion: ["历史材料如何变成法律理论问题？", "习惯法研究如何避免浪漫化地方社会？"],
    citation: "梁治平：《清代习惯法：社会与国家》，中国政法大学出版社，1996年。",
    url: "https://books.google.com/books/about/%E6%B8%85%E4%BB%A3%E4%B9%A0%E6%83%AF%E6%B3%95.html?id=ERtdAAAAIAAJ"
  },
  {
    id: "ji-procedure-example",
    title: "法律程序的意义",
    author: "季卫东",
    method: "程序理论、规范论证、比较视野",
    question: "程序为何不仅是技术安排，而且是现代法治的正当性机制？",
    contribution: "把程序合理性作为化解价值冲突、生成实体规范和组织公共选择的机制。",
    discussion: ["程序理论如何连接中国法制建设问题？", "程序正义能否替代实体正义？"],
    citation: "季卫东：《法律程序的意义》，《中国社会科学》1993年第1期。",
    url: "https://academicnewsletter.sufe.edu.cn/info/231958"
  },
  {
    id: "legrand-transplants-example",
    title: "The Impossibility of Legal Transplants",
    author: "Pierre Legrand",
    method: "比较法、文化解释、理论批判",
    question: "法律规则能否脱离其语言和文化意义而被移植？",
    contribution: "对法律移植理论提出强批判，迫使比较法研究认真处理语境和意义。",
    discussion: ["Legrand 的批判是否过度？", "如果不能移植，比较法还能为制度改革提供什么？"],
    citation: "Legrand, Maastricht Journal of European and Comparative Law, 4(2), 111-124 (1997).",
    url: "https://journals.sagepub.com/doi/10.1177/1023263X9700400202"
  },
  {
    id: "watson-transplants-example",
    title: "Legal Transplants",
    author: "Alan Watson",
    method: "比较法、法律史、理论命题",
    question: "法律发展是否主要通过规则和制度的跨法域移植发生？",
    contribution: "提出法律移植作为法律发展机制的强命题，引发比较法长期争论。",
    discussion: ["Watson 的理论如何定义“法律变化”？", "移植理论如何处理接受地的制度语境？"],
    citation: "Watson, A. (1974/1993). Legal Transplants. University of Georgia Press.",
    url: "https://www.ugapress.org/9780820315324/legal-transplants/"
  },
  {
    id: "kapczynski-lpe-example",
    title: "Building a Law-and-Political-Economy Framework",
    author: "Jedediah Britton-Purdy, David Singh Grewal, Amy Kapczynski, and K. Sabeel Rahman",
    method: "法律与政治经济学、理论框架、批判法学",
    question: "法律研究为何需要重新连接市场、权力、民主和分配？",
    contribution: "提出法律与政治经济学框架，批判法律与经济分析中去政治化的市场想象。",
    discussion: ["LPE 框架如何提出研究问题？", "它与传统法经济学的分歧在哪里？"],
    citation: "Yale Law Journal, 129, 1784-1835 (2020).",
    url: "https://yalelawjournal.org/index.php/article/building-a-law-and-political-economy-framework"
  },
  {
    id: "cail2018-example",
    title: "CAIL2018",
    author: "Chaojun Xiao et al.",
    method: "法律人工智能、数据集构建、预测模型评测",
    question: "大规模裁判文书数据能否支持罪名、法条和刑期预测？",
    contribution: "构建中国法律 AI 评测数据集，并显示法律预测任务的复杂性。",
    discussion: ["预测准确率能否代表法律理解？", "数据集构建会带来哪些偏见和伦理问题？"],
    citation: "Xiao et al. (2018). arXiv:1807.02478.",
    url: "https://arxiv.org/abs/1807.02478"
  },
  {
    id: "epstein-king-example",
    title: "The Rules of Inference",
    author: "Lee Epstein and Gary King",
    method: "实证研究、推论规则、方法论批评",
    question: "法律学者如何避免从不可靠数据中作出过度推论？",
    contribution: "把社会科学推论规则系统引入法律实证研究，强调可复制和偏差控制。",
    discussion: ["这篇文章批评的不是结论而是什么？", "法学研究何时需要可复制的数据和编码？"],
    citation: "Epstein & King, University of Chicago Law Review, 69(1), 1-133 (2002).",
    url: "https://epstein.wustl.edu/rules"
  },
  {
    id: "carefully-tailored-example",
    title: "Carefully Tailored",
    author: "Luca Siliquini-Cinelli",
    method: "法教义学、经验材料边界、方法论分析",
    question: "经验研究何时能对法教义学作出贡献？",
    contribution: "提出经验材料必须被法律问题本身裁剪，不能直接替代规范解释。",
    discussion: ["法教义学为什么不能完全外包给数据？", "哪些法律测试天然需要经验事实？"],
    citation: "Oxford Journal of Legal Studies, 45(4), 1047-1075 (2025).",
    url: "https://academic.oup.com/ojls/article/45/4/1047/8240731"
  },
  {
    id: "ewick-silbey-example",
    title: "The Common Place of Law",
    author: "Patricia Ewick and Susan S. Silbey",
    method: "法律意识、质性访谈、日常生活研究",
    question: "普通人如何在日常生活中理解、讲述和使用法律？",
    contribution: "把法律意识分解为日常叙事和实践策略，而不是简单的法律知识多少。",
    discussion: ["访谈叙事如何成为法律研究材料？", "法律意识研究如何避免把受访者只当作信息来源？"],
    citation: "Ewick & Silbey (1998). University of Chicago Press.",
    url: "https://press.uchicago.edu/ucp/books/book/chicago/C/bo3684436.html"
  },
  {
    id: "kennedy-form-substance-example",
    title: "Form and Substance in Private Law Adjudication",
    author: "Duncan Kennedy",
    method: "批判法学、私法理论、概念对立分析",
    question: "私法裁判中的形式与实体之争如何承载更深的政治和意识形态选择？",
    contribution: "用私法材料展示法律概念的内在张力和政策选择。",
    discussion: ["批判法学如何使用教义材料？", "概念对立是否必然削弱法律确定性？"],
    citation: "Kennedy, Harvard Law Review, 89(8), 1685-1778 (1976).",
    url: "https://openyls.law.yale.edu/handle/20.500.13051/17272"
  },
  {
    id: "hutchinson-doctrinal-example",
    title: "Defining and Describing What We Do",
    author: "Terry Hutchinson and Nigel Duncan",
    method: "法教义学、方法论自我说明、法律写作",
    question: "传统教义学研究如何把自己的研究对象、资料选择和推理方式说清楚？",
    contribution: "把常被视为“理所当然”的教义学工作拆成可描述、可教学、可评价的方法过程。",
    discussion: ["为什么法教义学也需要方法说明？", "一篇教义学论文如何让读者检查其材料是否充分？"],
    citation: "Hutchinson & Duncan, Deakin Law Review, 17(1), 83-119 (2012).",
    url: "https://ojs.deakin.edu.au/index.php/dlr/article/view/70"
  },
  {
    id: "schauer-thinking-example",
    title: "Thinking Like a Lawyer",
    author: "Frederick Schauer",
    method: "法律推理、规则理论、类比与先例分析",
    question: "法律人思维是否有区别于普通实践推理的结构？",
    contribution: "用规则、权威、先例、类比和形式主义说明法律推理的职业化特征。",
    discussion: ["法律形式主义为何既可能限制任意，也可能遮蔽价值判断？", "类比推理的边界如何被论证出来？"],
    citation: "Schauer, F. (2009). Harvard University Press.",
    url: "https://www.law.virginia.edu/scholarship/publication/frederick-schauer/627661"
  },
  {
    id: "hirschl-case-selection-example",
    title: "The Question of Case Selection in Comparative Constitutional Law",
    author: "Ran Hirschl",
    method: "比较宪法、案例选择、研究设计",
    question: "比较宪法研究为什么不能只选择最熟悉或最方便的法域？",
    contribution: "把案例选择本身提升为比较法方法问题，提醒研究者处理选择偏差和可比性。",
    discussion: ["比较研究中的 most similar 与 most different 设计各适合什么问题？", "法域选择如何影响规范建议的可信度？"],
    citation: "Hirschl, American Journal of Comparative Law, 53(1), 125-155 (2005).",
    url: "https://academic.oup.com/ajcl/article-abstract/53/1/125/2571690"
  },
  {
    id: "tushnet-comparative-example",
    title: "The Possibilities of Comparative Constitutional Law",
    author: "Mark Tushnet",
    method: "比较宪法、制度学习、规范分析",
    question: "比较宪法法如何帮助本国宪法解释和制度改革，又有哪些限度？",
    contribution: "区分比较材料的不同用途，展示比较法不只是外国法列举，而是法律论证资源。",
    discussion: ["外国法材料在本国论证中是证据、理由还是启发？", "比较宪法研究如何避免选择性引用？"],
    citation: "Tushnet, Yale Law Journal, 108(6), 1225-1309 (1999).",
    url: "https://digitalcommons.law.yale.edu/ylj/vol108/iss6/2/"
  },
  {
    id: "feeley-process-example",
    title: "The Process Is the Punishment",
    author: "Malcolm M. Feeley",
    method: "刑事司法、法社会学、制度经验研究",
    question: "在轻罪法院中，程序成本本身为何可能成为惩罚？",
    contribution: "把程序从中性通道转化为研究对象，说明法律运行的实际负担如何改变权利处境。",
    discussion: ["程序研究如何把法院日常运作转化为理论命题？", "这种框架能否用于中国基层司法或行政执法研究？"],
    citation: "Feeley, M. M. (1979). Russell Sage Foundation.",
    url: "https://www.russellsage.org/publications/process-punishment"
  },
  {
    id: "merry-legal-consciousness-example",
    title: "Getting Justice and Getting Even",
    author: "Sally Engle Merry",
    method: "法律意识、民族志、纠纷研究",
    question: "普通人在日常纠纷中如何理解法律、正义和报复？",
    contribution: "用法律意识研究展示法律进入日常生活的复杂方式，而不把法律等同于正式制度。",
    discussion: ["法律意识研究如何处理受访者叙事中的矛盾？", "何时法律帮助弱者，何时法律只是提供新的冲突语言？"],
    citation: "Merry, S. E. (1990). University of Chicago Press.",
    url: "https://press.uchicago.edu/ucp/books/book/chicago/G/bo3774571.html"
  },
  {
    id: "citron-tech-due-process-example",
    title: "Technological Due Process",
    author: "Danielle Keats Citron",
    method: "自动化行政、公法理论、制度设计",
    question: "当政府使用自动化系统决定福利、处罚或资格时，正当程序如何实现？",
    contribution: "把传统正当程序原则带入自动化决策场景，提出透明、纠错和人类监督的制度要求。",
    discussion: ["自动化决策中的错误与传统行政错误有什么不同？", "程序保障应当设计在系统前端、决策中还是救济阶段？"],
    citation: "Citron, Washington University Law Review, 85, 1249-1313 (2008).",
    url: "https://openscholarship.wustl.edu/law_lawreview/vol85/iss6/2/"
  },
  {
    id: "kroll-accountable-example",
    title: "Accountable Algorithms",
    author: "Joshua A. Kroll et al.",
    method: "算法问责、法律与计算机科学、技术治理",
    question: "法律要求算法可问责时，技术系统需要提供什么样的可检查机制？",
    contribution: "把审计、承诺、可验证计算等技术工具引入法律问责讨论，避免停留在抽象透明口号。",
    discussion: ["法律学者如何避免把“公开算法”当成万能答案？", "技术可审计性与法律责任之间还缺哪些制度环节？"],
    citation: "Kroll et al., University of Pennsylvania Law Review, 165, 633-705 (2017).",
    url: "https://scholarship.law.upenn.edu/penn_law_review/vol165/iss3/3/"
  },
  {
    id: "huq-human-decision-example",
    title: "A Right to a Human Decision",
    author: "Aziz Z. Huq",
    method: "AI 公法、权利论证、规范分析",
    question: "人在自动化治理中是否享有由人类作出决定或复核的权利？",
    contribution: "把“人类参与”从政策偏好转化为可争辩的权利命题，并检验其范围和理由。",
    discussion: ["为什么“human in the loop”不一定等于有效权利保障？", "人类决定权应适用于所有自动化场景吗？"],
    citation: "Huq, Virginia Law Review, 106, 611-688 (2020).",
    url: "https://www.virginialawreview.org/articles/right-human-decision/"
  },
  {
    id: "chen-research-method-example",
    title: "论法学研究方法",
    author: "陈瑞华",
    method: "中国法学方法、研究写作、理论与实践连接",
    question: "中国法学论文如何从经验、规范和理论之间找到可写作的研究路径？",
    contribution: "把法学研究方法落实到选题、材料、论证和写作训练，适合研究生入门反复使用。",
    discussion: ["规范法学与社科法学是否必须对立？", "如何把实践问题改写为学术问题？"],
    citation: "陈瑞华：《论法学研究方法》，法律出版社2017年版。",
    url: "https://book.douban.com/subject/27015113/"
  },
  {
    id: "bai-empirical-method-example",
    title: "法律实证研究方法",
    author: "白建军",
    method: "法律实证研究、量化分析、文本与行为研究",
    question: "法条文本、违法行为、法律适用和法制社会能否被转化为可观察、可分析的材料？",
    contribution: "系统展示中文法学语境中的实证研究路径，帮助学生理解“少一点我认为，多一点我发现”。",
    discussion: ["法律文本是否也可以成为实证分析对象？", "量化研究如何避免把数字直接当作规范答案？"],
    citation: "白建军：《法律实证研究方法》，北京大学出版社2014年第2版。",
    url: "https://www.law.pku.edu.cn/gdpx/szll/axk/xfx/119041.htm"
  },
  {
    id: "hou-empirical-packaging-example",
    title: "实证“包装”法学？",
    author: "侯猛",
    method: "中国法学方法论、实证研究反思、范式辨析",
    question: "中国法学中哪些“实证研究”只是标签，哪些才真正符合经验研究要求？",
    contribution: "通过术语清理和研究传统辨析，帮助建立更严肃的中国法律经验研究标准。",
    discussion: ["为什么方法标签会遮蔽真实研究质量？", "一篇中文法学论文怎样证明自己不是实证包装？"],
    citation: "侯猛：《实证“包装”法学？》，《中国法律评论》2020年第4期。",
    url: "https://www.aisixiang.com/data/123081.html"
  },
  {
    id: "hu-yuhong-method-debate-example",
    title: "围绕法学研究方法的理论争议及其辨析",
    author: "胡玉鸿",
    method: "法学方法论、概念辨析、元研究",
    question: "法学研究方法是否存在优劣、是否具有独立性、以及如何处理主观性与客观性？",
    contribution: "把分散的方法争议转化为可讨论的元问题，适合训练学生在写方法部分前先澄清方法立场。",
    discussion: ["一篇论文的方法选择是否可以被评价为好坏？", "法学方法的客观性来自共同规则，还是来自研究者的价值中立？"],
    citation: "胡玉鸿：《围绕法学研究方法的理论争议及其辨析》，《政法论坛》2023年第3期。",
    url: "https://www.cssn.cn/fx/xzyc/202310/t20231020_5692056.shtml"
  },
  {
    id: "zhang-cheng-method-coordinate-example",
    title: "法律实证研究的方法坐标",
    author: "张永健、程金华",
    method: "实证研究、类型学、方法定位",
    question: "法律实证研究与社科法学、实证法学、法教义学之间究竟如何区分？",
    contribution: "用研究主题和研究方法两个维度建立坐标系，帮助读者定位不同法律经验研究的类型。",
    discussion: ["同样使用数据的论文为什么可能属于不同范式？", "方法坐标如何帮助学生避免“实证”概念泛化？"],
    citation: "张永健、程金华：《法律实证研究的方法坐标》，《中国法律评论》2018年第6期。",
    url: "https://static.ilawpress.com/lpdpres/html/302596831303434752.html"
  },
  {
    id: "cheng-scientific-empirical-example",
    title: "迈向科学的法律实证研究",
    author: "程金华",
    method: "实证研究、方法论批评、研究质量审计",
    question: "中国法律实证研究为什么需要在论题、理论和技术上同时改进？",
    contribution: "把实证研究质量问题拆成可检查的维度，帮助学生识别数据堆积和因果叙事的薄弱处。",
    discussion: ["实证研究最常见的技术缺陷是什么？", "理论故事为什么不是实证研究的装饰，而是研究设计的一部分？"],
    citation: "程金华：《迈向科学的法律实证研究》，《清华法学》2018年第4期。",
    url: "http://www.socio-legal.sjtu.edu.cn/Download/Download.aspx?Guid=6fcd74e243a640fb9fb1480499d84f18"
  },
  {
    id: "he-judgment-documents-example",
    title: "法学研究中裁判文书运用的方法论检讨",
    author: "何挺",
    method: "内容分析、裁判文书研究、方法论检讨",
    question: "刑事法学论文使用裁判文书时，在哪些环节容易产生样本、抽样和结论适用问题？",
    contribution: "以既有文献为研究对象，展示如何反向审计一个研究领域的数据使用规范。",
    discussion: ["裁判文书上网是否意味着可以直接代表司法实践？", "内容分析法如何检查一组法学文献的方法质量？"],
    citation: "何挺：《法学研究中裁判文书运用的方法论检讨》，《法学研究》2022年第3期。",
    url: "https://cacpl.chinalaw.org.cn/portal/article/index/id/6644.html"
  },
  {
    id: "xiong-judgment-data-example",
    title: "基于裁判文书数据的法实证研究方法",
    author: "熊丙万、王军乐",
    method: "裁判文书数据、信息抽取、规范问题驱动的实证研究",
    question: "如何以“知假买假”为规范问题，构建能够服务法学判断的裁判文书数据研究？",
    contribution: "示范从规范问题到概念拆解、信息抽取、数据分析、结论限定的完整法实证研究循环。",
    discussion: ["为什么法实证研究不能从数据开始，而要从规范问题开始？", "裁判文书数据质量如何影响结论边界？"],
    citation: "熊丙万、王军乐：《基于裁判文书数据的法实证研究方法》，《经贸法律评论》2023年第6期。",
    url: "https://law.uibe.edu.cn/xzkw/gk/2023nd6q/2bc9949139dc41b4b4939309f3c8335d.htm"
  },
  {
    id: "qu-judgment-review-example",
    title: "基于裁判文书的法学实证研究之审视",
    author: "屈茂辉",
    method: "知识图谱、文献计量、裁判文书研究评估",
    question: "以裁判文书为基础的法学实证研究在中国呈现怎样的发展和局限？",
    contribution: "用知识图谱和文献梳理方法审视一个方法潮流本身，是研究综述与方法批评结合的范例。",
    discussion: ["知识图谱能说明哪些问题，不能说明哪些问题？", "为什么方法热潮可能带来题材集中和数据依赖？"],
    citation: "屈茂辉：《基于裁判文书的法学实证研究之审视》，《现代法学》2020年第3期。",
    url: "https://qks.swupl.edu.cn/docs/2020-06/20200620214716351315.pdf"
  },
  {
    id: "chen-baifeng-mechanism-example",
    title: "法律经验研究的机制分析方法",
    author: "陈柏峰",
    method: "质性研究、机制分析、田野材料",
    question: "法律经验研究如何从田野材料中识别机制，而不是停留在现象描述？",
    contribution: "提出经验饱和、因果链条和机制解释等要求，使质性研究具有更强解释力。",
    discussion: ["经验质感如何转化为学术命题？", "机制分析与一般描述性田野笔记有什么不同？"],
    citation: "陈柏峰：《法律经验研究的机制分析方法》，《法商研究》2016年第4期。",
    url: "https://zgfxqk.chinalaw.org.cn/portal/article/index/id/2047.html"
  },
  {
    id: "han-socio-legal-method-example",
    title: "各归其位：“社会—法律研究”方法的展开",
    author: "韩宝",
    method: "社科法学、范式辨析、比较方法",
    question: "社会—法律研究与法教义学是否必然竞争，还是可以各自承担不同知识任务？",
    contribution: "通过范式辨析和比较，帮助学生理解法律社会科学研究的边界与定位。",
    discussion: ["社科法学何时会越界替代规范判断？", "法教义学何时需要社会科学材料补充？"],
    citation: "韩宝：《各归其位：“社会—法律研究”方法的展开》，《厦门大学法律评论》2017年第30期，第21-54页。",
    url: "http://www.socio-legal.sjtu.edu.cn/wxzy/info.aspx?itemid=3737&lcid=30"
  },
  {
    id: "lin-constitutional-method-example",
    title: "中国宪法学研究方法评辨",
    author: "林来梵",
    method: "部门法方法论、规范宪法学、方法史评述",
    question: "中国宪法学方法为什么在政治法学、规范宪法学和社会科学化之间摇摆？",
    contribution: "以一个部门法为对象展示如何评估学科方法史和未来方法选择。",
    discussion: ["宪法学为什么特别容易受到政治、规范和社会科学三种方法拉扯？", "部门法方法论是否应当服从一般法学方法论？"],
    citation: "林来梵：《中国宪法学研究方法评辨：过去、现在与未来》。",
    url: "https://www.tsinghua.edu.cn/info/1662/110179.htm"
  },
  {
    id: "yu-admin-case-method-example",
    title: "行政法案例分析的基本方法",
    author: "余凌云",
    method: "行政法案例分析、三步分析法、法教义学",
    question: "行政法案例分析应如何组织事实、规范和争点，而不只是讲述案情？",
    contribution: "提出事实梳理、规范检索和争议分析三步结构，适合学生练习部门法案例写作。",
    discussion: ["行政法案例分析能否直接套用民法请求权基础方法？", "案例分析何时可以从解释论走向立法论？"],
    citation: "余凌云：《行政法案例分析的基本方法》。",
    url: "https://www.law.tsinghua.edu.cn/info/1036/20102.htm"
  },
  {
    id: "zhao-guiding-cases-example",
    title: "法律方法在指导性案例中的运用研究",
    author: "赵梦闪",
    method: "指导性案例、文本分析、法律方法应用",
    question: "最高人民法院指导性案例如何实际运用法律发现、解释、原则和漏洞填补等方法？",
    contribution: "以178个指导案例为文本，展示如何把案例群作为法律方法研究对象。",
    discussion: ["指导性案例中的“裁判要点”能否被视为规则？", "案例群研究如何避免只作分类统计？"],
    citation: "赵梦闪：《法律方法在指导性案例中的运用研究——以178个指导案例为文本的考察》，东方法学微信公众号2023年11月9日，澎湃新闻转载。",
    url: "https://www.thepaper.cn/newsDetail_forward_25236025"
  },
  {
    id: "zheng-cross-research-example",
    title: "法律的“交叉”研究和应用的原理",
    author: "郑永流",
    method: "交叉学科、法教义学与非教义学整合、理论构建",
    question: "为什么法学本身具有内在交叉性，且需要教义学与非教义学知识并存？",
    contribution: "从法律正当性和制定法动态性出发，给出交叉研究的法理学基础。",
    discussion: ["交叉研究是外部学科进入法律，还是法学内部知识结构的要求？", "教义学和非教义学知识如何在同一论文中分工？"],
    citation: "郑永流：《法律的“交叉”研究和应用的原理》，《中国法学》2018年第4期，第124-139页。",
    url: "https://clsjp.chinalaw.org.cn/portal/article/index/id/9646.html"
  },
  {
    id: "wang-dogmatics-interpretive-example",
    title: "从法教义学迈向法释义学",
    author: "王利明",
    method: "法教义学、法释义学、概念重构",
    question: "中国法学是否应照搬德国法教义学，还是应构建更适合本土语境的法释义学？",
    contribution: "以概念批评和体系构建方式讨论中国自主法释义学，是部门法方法论重构的范例。",
    discussion: ["方法概念的名称会不会影响研究实践？", "本土化方法论如何避免只是换名不换内容？"],
    citation: "王利明：《从法教义学迈向法释义学》，《法学家》2025年第4期。",
    url: "https://www.civillaw.com.cn/t/?id=40124"
  },
  {
    id: "lei-xinhong-empirical-evolution-example",
    title: "方法论演进视野下的中国法律实证研究",
    author: "雷鑫洪",
    method: "实证研究、文献计量、可视化分析、方法史",
    question: "中国法律实证研究在2000年以来如何增长、分布，并暴露出哪些方法论瓶颈？",
    contribution: "以文献数据库为材料，把方法史问题转化为可计量、可视化的研究对象，适合拆解综述型实证研究。",
    discussion: ["用知网文献计量研究方法史时，样本选择会带来哪些偏差？", "数量增长是否足以说明一个研究范式成熟？"],
    citation: "雷鑫洪：《方法论演进视野下的中国法律实证研究》，《法学研究》2017年第4期。",
    url: "https://faxueyanjiu.ajcass.com/Admin/UploadFile/publish_article/2017/4/20170406.pdf"
  },
  {
    id: "bai-criminal-dogmatics-empirical-example",
    title: "论刑法教义学与实证研究",
    author: "白建军",
    method: "刑法教义学、实证研究、规范与事实整合",
    question: "刑法教义学与刑法实证研究是否必然分属两套不能沟通的方法？",
    contribution: "以死刑适用和刑法有效性等问题为连接点，展示教义分析与大样本经验判断可以在实践理性中相遇。",
    discussion: ["实证材料能否直接修正刑法教义？", "没有教义学约束的刑法实证研究会失去哪些法学意义？"],
    citation: "白建军：《论刑法教义学与实证研究》，《法学研究》2021年第3期。",
    url: "https://www.socio-legal.sjtu.edu.cn/wxzy/info.aspx?itemid=3994"
  },
  {
    id: "jin-civil-empirical-dogmatics-example",
    title: "民法实证研究方法与民法教义学",
    author: "金可可",
    method: "民法教义学、实证研究、方法边界",
    question: "民法研究中，观察、调查和统计等实证方法应当如何服务而不是替代教义学判断？",
    contribution: "用较短篇幅集中说明经验材料进入民法论证的可能性和限制，适合训练方法说明的边界感。",
    discussion: ["民法教义学为什么需要经验事实？", "经验研究结论何时只能作为背景事实，不能直接推出规范结论？"],
    citation: "金可可：《民法实证研究方法与民法教义学》，《法学研究》2012年第1期，第48-50页。",
    url: "https://sns.wanfangdata.com.cn/perio/fxyj?issueNum=1&publishYear=2012&tabId=article"
  },
  {
    id: "zhang-algorithm-power-example",
    title: "算法权力的兴起、异化及法律规制",
    author: "张凌寒",
    method: "算法治理、权力分析、规范制度设计",
    question: "算法如何从工具变成塑造选择、排序和机会分配的权力？",
    contribution: "把算法问题从技术黑箱扩展为权力异化与权利保障问题，提供中国语境中的规制框架。",
    discussion: ["算法权力与传统公权力、私权力有何不同？", "算法解释权能解决哪些问题，不能解决哪些问题？"],
    citation: "张凌寒：《算法权力的兴起、异化及法律规制》，《法商研究》2019年第4期。",
    url: "https://fsyj.zuel.edu.cn/_upload/article/files/c0/8a/801401b645ca913b7a34cd0c7193/ac7e3ba3-75ab-48b2-9854-7c2e97aea1c5.pdf"
  },
  {
    id: "ding-algorithm-regulation-example",
    title: "论算法的法律规制",
    author: "丁晓东",
    method: "算法规制、法理分析、制度比较",
    question: "算法公开、个人数据赋权、反算法歧视等传统规制路径为什么会遇到困难？",
    contribution: "用分层和场景化的思路重构算法规制，避免把透明或赋权当成单一答案。",
    discussion: ["算法公开为什么可能既不可行又不可欲？", "分层规制如何把技术机制和法律价值连接起来？"],
    citation: "丁晓东：《论算法的法律规制》，《中国社会科学》2020年第12期。",
    url: "https://aisg.tongji.edu.cn/info/1013/1107.htm"
  },
  {
    id: "liu-ai-critique-example",
    title: "人工智能法学研究的反智化批判",
    author: "刘艳红",
    method: "AI 法学方法论、概念批判、学术反思",
    question: "人工智能热潮中的法律研究何时会用技术想象替代法学问题？",
    contribution: "提醒研究者回到法律基础理论、部门法教义和真实技术能力，避免概念泡沫。",
    discussion: ["AI 法学研究最容易在哪些地方伪问题化？", "批判技术热潮是否意味着拒绝计算法学？"],
    citation: "刘艳红：《人工智能法学研究的反智化批判》，《东方法学》2019年第5期。",
    url: "https://sls.org.cn/webfile/upload/2019/10-22/14-22-550205-626443287.pdf"
  },
  {
    id: "wang-ai-new-questions-example",
    title: "人工智能时代提出的法学新课题",
    author: "王利明",
    method: "AI 法学问题意识、研究意义、制度挑战识别",
    question: "人工智能时代哪些技术变化真正提出了新的法学问题，而不只是给旧问题换了一个技术名称？",
    contribution: "以人格权、知识产权、数据保护、算法透明和侵权责任等问题为入口，示范如何从时代变化中提炼研究问题和研究意义。",
    discussion: ["“问题就是时代的口号”如何转化为可写作的法学问题？", "哪些 AI 议题需要立法论，哪些可以先通过解释论处理？"],
    citation: "王利明：《人工智能时代提出的法学新课题》，《中国法律评论》2018年第2期卷首语。",
    url: "https://zxzx.chinalaw.org.cn/portal/article/index/id/2672.html"
  },
  {
    id: "zuo-computational-law-future-example",
    title: "中国计算法学的未来：审思与前瞻",
    author: "左卫民",
    method: "计算法学、机器学习、实证研究设计",
    question: "计算法学究竟是新学科、新方法，还是法律实证研究在机器学习条件下的新阶段？",
    contribution: "把计算法学拆成概念、可计算数据和机器学习方法三个问题，帮助学生识别研究设计中的数据边界。",
    discussion: ["为什么并非所有法律问题都可以被计算？", "机器学习发现相关性之后，法学研究还需要完成哪些规范判断？"],
    citation: "左卫民：《中国计算法学的未来：审思与前瞻》。",
    url: "https://www.aisixiang.com/data/134162.html"
  },
  {
    id: "zhao-digital-law-risk-governance-example",
    title: "论数字法学研究范式的转向",
    author: "赵精武、周瑞珏",
    method: "数字法学、风险体系化治理、研究范式辨析",
    question: "数字法学和人工智能法学如何避免沦为“技术风险清单+对策建议”的简单写法？",
    contribution: "把数字法学研究从单点风险治理推进到分级分类、全生命周期和协同治理，展示 AI 法研究如何建立理论框架。",
    discussion: ["风险治理能否成为法学研究范式？", "跨学科知识在论文中是研究对象、论据，还是方法本身？"],
    citation: "赵精武、周瑞珏：《论数字法学研究范式的转向：风险体系化治理》。",
    url: "https://www.aisixiang.com/data/155412.html"
  },
  {
    id: "perlman-ai-scholarship-example",
    title: "Generative AI and the Future of Legal Scholarship",
    author: "Andrew M. Perlman",
    method: "生成式 AI、法律学术生产、作者责任反思",
    question: "当生成式 AI 可以提出理论构想并生成法律学术文本时，法律学者的原创性和作者责任应如何重新说明？",
    contribution: "以 AI 生成法律学术文本本身作为论证实验，迫使读者重新审视研究意义、写作主体和学术评价标准。",
    discussion: ["AI 生成的“新理论”如何被检验是否真正有贡献？", "使用 AI 写作时，披露、核验和作者责任各自解决什么问题？"],
    citation: "Perlman, A. M. (2024). Generative AI and the Future of Legal Scholarship.",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5072765"
  },
  {
    id: "choi-llm-empirical-example",
    title: "How to Use Large Language Models for Empirical Legal Research",
    author: "Jonathan H. Choi",
    method: "LLM 辅助实证研究、法律文本分类、研究设计",
    question: "大语言模型能否替代或补充人工编码，帮助法律学者分析大量判例文本？",
    contribution: "以最高法院意见的分类任务展示 LLM 在经验法学研究中的可能用途和限制，适合拆解 AI 辅助研究设计。",
    discussion: ["LLM 分类结果怎样与人工编码互相校验？", "模型表现良好是否足以证明研究结论可靠？"],
    citation: "Choi, J. H. (2023). How to Use Large Language Models for Empirical Legal Research.",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4536852"
  },
  {
    id: "dahl-legal-hallucination-example",
    title: "Large Legal Fictions",
    author: "Matthew Dahl, Varun Magesh, Mirac Suzgun, and Daniel E. Ho",
    method: "法律幻觉测量、AI 输出审计、证据可靠性",
    question: "公众可用的大语言模型在回答法律问题时会怎样产生幻觉，研究者如何系统测量这种风险？",
    contribution: "建立法律幻觉类型和实证测量路径，让 AI 引文核验从道德提醒变成可操作的研究方法。",
    discussion: ["为什么法律研究比一般写作更不能容忍“看似真实”的错误？", "幻觉研究如何影响学生使用 AI 做文献综述和案例检索？"],
    citation: "Dahl et al., Journal of Legal Analysis, 16(1), 64-93 (2024).",
    url: "https://academic.oup.com/jla/article/16/1/64/7699227"
  },
  {
    id: "legalbench-example",
    title: "LegalBench",
    author: "Neel Guha et al.",
    method: "法律推理评测、任务构建、跨学科研究设计",
    question: "如果要评价 AI 的法律推理能力，应当把法律推理拆成哪些任务，而不是只问模型会不会答题？",
    contribution: "由法律人与技术研究者共同构建评测任务，提供研究设计、指标选择和法律能力分类的范例。",
    discussion: ["评测基准能否代表真实法律推理？", "法律概念如何被转化为机器可评测任务而不被过度简化？"],
    citation: "Guha et al., Advances in Neural Information Processing Systems 36 (2023).",
    url: "https://papers.neurips.cc/paper_files/paper/2023/hash/89e44582fd28ddfea1ea4dcb0ebbf4b0-Abstract-Datasets_and_Benchmarks.html"
  },
  {
    id: "savelka-zero-shot-annotation-example",
    title: "Zero-Shot Semantic Annotation of Legal Texts",
    author: "Jaromir Savelka and Kevin D. Ashley",
    method: "零样本标注、法律文本分析、AI 辅助编码",
    question: "没有大量人工标注训练集时，LLM 能否帮助研究者快速建立法律文本编码方案？",
    contribution: "展示用简短类型定义进行法律文本语义标注的可行性，并提醒研究者记录批量标注、成本和性能取舍。",
    discussion: ["零样本标注适合探索性研究还是最终结论？", "编码定义如何影响 AI 输出和研究可复制性？"],
    citation: "Savelka & Ashley, Frontiers in Artificial Intelligence, 6 (2023).",
    url: "https://www.frontiersin.org/articles/10.3389/frai.2023.1279794/full"
  },
  {
    id: "large-language-scholarship-example",
    title: "Large Language Scholarship",
    author: "Kevin Frazier and Alan Z. Rozenshtein",
    method: "AI 学术生态、法律期刊、认知去技能化",
    question: "当法律学术写作被 AI 大规模加速，法学院、期刊和学者应如何重建质量控制与学术责任？",
    contribution: "把 AI 对法律学术的影响从个体写作扩展到出版压力、审稿机制、学生训练和学术权威的制度层面。",
    discussion: ["AI 提升产量是否会稀释学术贡献？", "法律期刊应更重视 AI 披露还是作者最终责任？"],
    citation: "Frazier & Rozenshtein, Large Language Scholarship (2025).",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5200768"
  }
];

export const additionalExercises: Exercise[] = [
  {
    id: "source-triangulation",
    title: "资料三角校验",
    goal: "训练学生用一手资料、学术文献和制度背景互相校验研究问题。",
    steps: ["选一个争议性法律命题。", "分别寻找一个规范文本、一个案例或数据材料、两篇学术文献。", "标出三类资料之间相互支持和相互冲突的位置。", "写出资料不足对结论的影响。"],
    output: "资料三角校验表和 300 字风险说明。",
    tags: ["研究设计", "批判性思维", "文献综述"]
  },
  {
    id: "article-anatomy",
    title: "经典论文拆解",
    goal: "从一篇经典论文中识别研究问题、概念框架、方法、证据和贡献。",
    steps: ["选择 Galanter、Felstiner、雷磊或 Barocas & Selbst 的一篇文章。", "用不同颜色标出问题、文献空白、核心概念、证据和结论。", "写出作者没有回答但值得继续研究的问题。"],
    output: "一页论文结构标注图。",
    tags: ["范例阅读", "文献综述", "理论构建"]
  },
  {
    id: "comparative-transplant-debate",
    title: "法律移植辩论",
    goal: "训练学生比较 Watson 与 Legrand 的理论分歧，并转化为制度研究问题。",
    steps: ["阅读两位作者关于法律移植的核心命题。", "选择一个移植制度，例如独立董事、公益诉讼或合规制度。", "分别用支持移植和反对移植的框架提出论证。", "写出你自己的中间立场和证据需求。"],
    output: "一份双边辩论提纲。",
    tags: ["比较法", "理论构建", "论证"]
  },
  {
    id: "empirical-coding-protocol",
    title: "实证编码方案",
    goal: "把法律文本或案例材料转化为可检查的编码规则。",
    steps: ["选择 10 份案例、裁判文书或监管处罚决定。", "定义 3 个变量和每个变量的取值规则。", "让另一位同学试编码 2 份材料。", "比较差异并修改编码手册。"],
    output: "编码手册初稿和一致性问题清单。",
    tags: ["实证研究", "数据", "研究设计"]
  },
  {
    id: "chinese-article-reverse-engineering",
    title: "中文法学论文反向工程",
    goal: "训练学生从中文论文中还原研究问题、方法意识和贡献陈述。",
    steps: ["选择一篇中文核心期刊论文。", "不要先看摘要，直接从引言和结论推回作者的问题。", "标出作者依赖的是规范解释、社会事实、理论框架还是政策判断。", "重写一版更清楚的摘要。"],
    output: "论文反向工程表和 200 字改写摘要。",
    tags: ["中文文献", "写作", "研究问题"]
  },
  {
    id: "theory-debate-map",
    title: "理论论战地图",
    goal: "把两篇理论立场相反的文章整理为可教学、可写作的争议谱系。",
    steps: ["选择 Hart-Fuller、Watson-Legrand 或法教义学-社科法学之争。", "列出双方共享的问题和真正分歧。", "标出概念分歧、事实分歧和价值分歧。", "写出一个可以继续推进的研究问题。"],
    output: "争议谱系图和研究问题草案。",
    tags: ["理论构建", "法理学", "论证"]
  },
  {
    id: "ai-citation-verification",
    title: "AI 引文核验实验",
    goal: "训练学生识别 AI 生成文献中的幻觉、张冠李戴和过度概括。",
    steps: ["让 AI 为一个法学研究问题生成 10 条参考文献。", "逐条核验题名、作者、刊物、年份和链接。", "标注无法核验或引用错误的条目。", "用真实文献替换至少 5 条。"],
    output: "AI 引文核验表和修订书目。",
    tags: ["人工智能", "学术诚信", "文献综述"]
  },
  {
    id: "ai-research-cycle-matrix",
    title: "AI 研究流程矩阵",
    goal: "训练学生逐项判断 AI 如何影响研究问题、研究意义、研究设计、研究方法、论证和贡献表达。",
    steps: ["选择一个自己的法学选题。", "分别让 AI 在六个环节提出建议：问题、意义、设计、方法、论证、贡献。", "为每一项标出可采纳、需核验、应删除三类结果。", "用真实文献、规范文本或数据材料改写 AI 给出的建议。"],
    output: "一张六环节 AI 研究流程矩阵和 600 字修订说明。",
    tags: ["人工智能", "研究设计", "研究问题", "学术诚信"]
  },
  {
    id: "ai-argument-stress-test",
    title: "AI 反方论证压力测试",
    goal: "把 AI 用作反对意见生成器，同时训练学生区分有效反驳、虚假权威和空泛质疑。",
    steps: ["写出一个论文核心主张和三条理由。", "让 AI 生成最强反对意见、可能反例和需要补充的证据。", "逐项判断哪些反对意见有真实文献或案例支持。", "修改主张的限定条件，并记录哪些 AI 反驳被舍弃。"],
    output: "反方论证审计表和一版修订后的核心主张。",
    tags: ["人工智能", "论证", "批判性思维"]
  },
  {
    id: "ai-method-disclosure-log",
    title: "AI 使用披露日志",
    goal: "训练学生把 AI 使用写成可核验的方法记录，而不是笼统声明“使用过 AI”。",
    steps: ["记录所用 AI 工具、日期、任务、提示词和输入材料。", "标出 AI 输出进入论文的具体环节。", "说明每一处输出如何被核验、改写或删除。", "写出一段可放入论文方法说明或致谢中的 AI 使用披露。"],
    output: "AI 使用日志和 150 字披露说明。",
    tags: ["人工智能", "学术诚信", "研究方法", "法律写作"]
  },
  {
    id: "abstract-rewrite-lab",
    title: "摘要重写工作坊",
    goal: "训练学生把研究类型、方法、贡献和限制写进摘要。",
    steps: ["选一篇范例论文，写出 100 字结构摘要。", "分别标明问题、方法、材料、结论、贡献。", "再为自己的研究计划写同样结构的摘要。", "检查是否存在空泛价值判断或未证明贡献。"],
    output: "范例摘要拆解和个人摘要初稿。",
    tags: ["写作", "类型与呈现", "研究计划"]
  },
  {
    id: "method-section-audit",
    title: "方法说明段审计",
    goal: "训练学生把论文中的方法意识写成可检查的段落。",
    steps: ["选择自己的一个研究题目。", "写出 200 字方法说明，必须包含材料、方法、范围和限制。", "用 Hutchinson & Duncan 或陈瑞华的思路检查是否只是空泛宣称。", "重写一版更具体的方法段。"],
    output: "两版方法说明和一份修改说明。",
    tags: ["研究设计", "法律写作", "法学方法"]
  },
  {
    id: "comparative-case-selection-lab",
    title: "比较法案例选择实验",
    goal: "训练学生说明为什么选择这些法域或制度进行比较。",
    steps: ["选择一个制度问题，例如数据携带权、公益诉讼或独立董事。", "分别设计 most similar 与 most different 两组比较对象。", "说明每组设计能回答和不能回答的问题。", "写出最终法域选择理由。"],
    output: "比较对象选择表和 300 字选择理由。",
    tags: ["比较法", "研究设计", "案例选择"]
  },
  {
    id: "doctrinal-source-log",
    title: "教义学资料日志",
    goal: "让学生记录条文、案例、学说和政策材料如何进入教义学论证。",
    steps: ["选择一个法律概念或裁判规则。", "建立四栏资料表：规范文本、案例事实、学说观点、政策或经验材料。", "说明每类资料在论证中的功能。", "标出哪些材料不能直接推出结论。"],
    output: "教义学资料日志和 400 字边界说明。",
    tags: ["法教义学", "法律解释", "研究设计"]
  },
  {
    id: "empirical-interview-protocol",
    title: "访谈提纲小试验",
    goal: "训练学生把法社会学问题转化为可访谈的问题，并识别伦理风险。",
    steps: ["写出一个关于法律实践的问题。", "设计 8 个开放式访谈问题，避免诱导性提问。", "标出受访者风险、匿名处理和资料保存方式。", "说明访谈材料如何回到法律研究问题。"],
    output: "访谈提纲、伦理风险清单和方法说明。",
    tags: ["实证研究", "质性研究", "研究伦理"]
  },
  {
    id: "algorithm-governance-brief",
    title: "算法治理备忘录",
    goal: "把算法权力、算法公开、解释权和正当程序转化为可比较的制度方案。",
    steps: ["选择一个算法场景，例如招聘、信贷、刑事风险评估或平台推荐。", "列出受影响主体、潜在损害和现有法律资源。", "比较算法公开、解释权、审计、人工复核四种工具。", "提出一个分层规制方案并说明其限制。"],
    output: "一份 800 字算法治理备忘录。",
    tags: ["人工智能", "法律与科技", "制度设计"]
  },
  {
    id: "chinese-method-debate-map",
    title: "中文方法论争议地图",
    goal: "训练学生梳理社科法学、法教义学、法律实证研究和计算法学之间的关系。",
    steps: ["选择雷磊、苏力、侯猛、左卫民、刘艳红或丁晓东中的两到三篇材料。", "画出它们共享的问题意识和真正分歧。", "区分概念争议、方法争议和制度评价争议。", "写出你自己的方法选择立场。"],
    output: "争议地图和 500 字方法立场说明。",
    tags: ["中文文献", "法学方法", "理论构建"]
  }
];

export const topicAssociations: Record<string, TopicAssociation> = {
  "nature-purpose": {
    resourceIds: ["chynoweth-legal-research", "苏力-也许正在发生", "holmes-path", "galanter-haves", "陈瑞华-论法学研究方法", "陈瑞华-第三条道路", "胡玉鸿-研究方法争议", "雷磊-法学方法论观察反思", "陈兴良-法学知识演进分化", "gestel-micklitz-methods", "强世功-法律人的城邦"],
    exampleIds: ["holmes-path-example", "suli-happening-example", "galanter-haves-example", "chen-research-method-example", "hu-yuhong-method-debate-example"],
    exerciseIds: ["source-triangulation", "article-anatomy", "method-section-audit", "chinese-method-debate-map"]
  },
  "thinking-methods": {
    resourceIds: ["popper-three-worlds", "paul-elder-critical-thinking", "levi-legal-reasoning", "james-thinking-skills-law", "steel-critical-legal-reading", "holmes-path", "maccormick-legal-reasoning", "alexy-legal-argumentation", "季卫东-法律程序的意义", "schauer-thinking-lawyer", "mertz-language-law-school", "郑永流-法律方法阶梯", "王泽鉴-法律思维与民法实例", "强世功-法律人的城邦", "陈金钊-法律思维规则", "武宏志-法律论辩批判性思维", "陈学权-批判性思维误用"],
    exampleIds: ["holmes-path-example", "hart-fuller-debate-example", "ji-procedure-example", "kennedy-form-substance-example", "schauer-thinking-example"],
    exerciseIds: ["theory-debate-map", "abstract-rewrite-lab", "method-section-audit"]
  },
  "research-question-hypothesis": {
    resourceIds: ["felstiner-naming-blaming", "mnookin-shadow-law", "heise-empirical-legal-scholarship", "sheehy-paradigms", "gestel-micklitz-methods", "陈瑞华-论法学研究方法", "陈瑞华-第三条道路", "侯猛-实证包装法学", "张永健程金华-法律实证研究方法坐标", "熊丙万王军乐-裁判文书数据法实证"],
    exampleIds: ["felstiner-disputes-example", "mnookin-shadow-example", "epstein-king-example", "chen-research-method-example", "hou-empirical-packaging-example", "zhang-cheng-method-coordinate-example", "xiong-judgment-data-example"],
    exerciseIds: ["article-anatomy", "chinese-article-reverse-engineering", "method-section-audit"]
  },
  "literature-review": {
    resourceIds: ["chynoweth-legal-research", "sheehy-paradigms", "taekema-rule-of-law-methods", "carefully-tailored-doctrinal", "苏力-也许正在发生", "hutchinson-duncan-doctrinal", "gestel-micklitz-methods", "侯猛-实证包装法学", "左卫民-范式革命", "雷磊-法学方法论观察反思", "雷鑫洪-方法论演进中国法律实证研究", "陈柏峰-法律实证研究兴起分化", "屈茂辉-裁判文书实证审视", "何挺-裁判文书方法论检讨", "林来梵-宪法学研究方法评辨"],
    exampleIds: ["carefully-tailored-example", "suli-happening-example", "barocas-disparate-example", "hutchinson-doctrinal-example", "hou-empirical-packaging-example", "lei-xinhong-empirical-evolution-example", "qu-judgment-review-example", "he-judgment-documents-example", "lin-constitutional-method-example"],
    exerciseIds: ["source-triangulation", "article-anatomy", "ai-citation-verification", "chinese-method-debate-map"]
  },
  argumentation: {
    resourceIds: ["maccormick-legal-reasoning", "alexy-legal-argumentation", "hart-separation", "fuller-fidelity", "kennedy-form-substance", "schauer-thinking-lawyer", "郑永流-法律方法阶梯", "王泽鉴-法律思维与民法实例", "余凌云-行政法案例分析方法", "赵梦闪-指导案例法律方法"],
    exampleIds: ["hart-fuller-debate-example", "holmes-path-example", "kennedy-form-substance-example", "schauer-thinking-example", "yu-admin-case-method-example", "zhao-guiding-cases-example"],
    exerciseIds: ["theory-debate-map", "abstract-rewrite-lab", "method-section-audit"]
  },
  "doctrinal-method": {
    resourceIds: ["carefully-tailored-doctrinal", "雷磊-法教义学基本立场", "雷磊-法教义学与法治", "hart-separation", "fuller-fidelity", "hutchinson-duncan-doctrinal", "舒国滢-法学方法论", "王泽鉴-法律思维与民法实例", "王利明-陈金钊-法律解释学", "王利明-法释义学体系", "邹兵建-法教义学释疑", "白建军-刑法教义学实证研究", "金可可-民法实证研究方法", "余凌云-行政法案例分析方法", "胡敏洁-行政法案例研究方法", "赵梦闪-指导案例法律方法"],
    exampleIds: ["lei-dogmatics-example", "carefully-tailored-example", "hart-fuller-debate-example", "hutchinson-doctrinal-example", "wang-dogmatics-interpretive-example", "bai-criminal-dogmatics-empirical-example", "jin-civil-empirical-dogmatics-example", "yu-admin-case-method-example", "zhao-guiding-cases-example"],
    exerciseIds: ["chinese-article-reverse-engineering", "theory-doctrine-distinction", "doctrinal-source-log"]
  },
  "comparative-law": {
    resourceIds: ["watson-legal-transplants", "legrand-impossibility-transplants", "michaels-functional-method", "graziadei-transplants-receptions", "梁治平-清代习惯法", "vranken-methodology", "hirschl-case-selection", "tushnet-comparative-constitutional", "frankenberg-critical-comparisons", "mattei-three-patterns"],
    exampleIds: ["watson-transplants-example", "legrand-transplants-example", "liang-customary-example", "hirschl-case-selection-example", "tushnet-comparative-example"],
    exerciseIds: ["comparative-transplant-debate", "source-triangulation", "comparative-case-selection-lab"]
  },
  "empirical-legal-research": {
    resourceIds: ["heise-empirical-legal-scholarship", "galanter-haves", "felstiner-naming-blaming", "ellickson-order-without-law", "mnookin-shadow-law", "ewick-silbey-common-place", "cail2018", "eisenberg-why-empirical", "black-behavior-law", "merry-getting-justice", "feeley-process-punishment", "白建军-法律实证研究方法", "侯猛-实证包装法学", "贺欣-经验地研究法律", "张永健程金华-法律实证研究方法坐标", "程金华-迈向科学法律实证研究", "雷鑫洪-方法论演进中国法律实证研究", "陈柏峰-法律实证研究兴起分化", "何挺-裁判文书方法论检讨", "熊丙万王军乐-裁判文书数据法实证", "屈茂辉-裁判文书实证审视", "陈柏峰-法律经验研究机制分析", "白建军-刑法教义学实证研究", "金可可-民法实证研究方法"],
    exampleIds: ["galanter-haves-example", "felstiner-disputes-example", "mnookin-shadow-example", "ellickson-order-example", "ewick-silbey-example", "feeley-process-example", "merry-legal-consciousness-example", "bai-empirical-method-example", "hou-empirical-packaging-example", "zhang-cheng-method-coordinate-example", "cheng-scientific-empirical-example", "lei-xinhong-empirical-evolution-example", "he-judgment-documents-example", "xiong-judgment-data-example", "qu-judgment-review-example", "chen-baifeng-mechanism-example", "bai-criminal-dogmatics-empirical-example", "jin-civil-empirical-dogmatics-example"],
    exerciseIds: ["empirical-coding-protocol", "source-triangulation", "empirical-interview-protocol"]
  },
  "interdisciplinary-law": {
    resourceIds: ["苏力-法治及其本土资源", "梁治平-清代习惯法", "galanter-haves", "kapczynski-lpe-framework", "ewick-silbey-common-place", "ellickson-order-without-law", "nissenbaum-contextual-integrity", "mertz-language-law-school", "kennedy-legal-education-hierarchy", "black-behavior-law", "feeley-process-punishment", "贺欣-街头研究者", "强世功-法律人的城邦", "韩宝-社会法律研究方法展开", "陈柏峰-法律经验研究机制分析", "陈柏峰-法律经验研究微观过程", "陈柏峰-法律实证研究兴起分化", "侯猛-社科法学研究格局", "郭栋-法律社会科学研究边界", "郑永流-法律交叉研究原理"],
    exampleIds: ["suli-happening-example", "liang-customary-example", "kapczynski-lpe-example", "ewick-silbey-example", "feeley-process-example", "merry-legal-consciousness-example", "han-socio-legal-method-example", "chen-baifeng-mechanism-example", "zheng-cross-research-example"],
    exerciseIds: ["comparative-transplant-debate", "empirical-coding-protocol", "empirical-interview-protocol"]
  },
  "types-and-presentation": {
    resourceIds: ["chynoweth-legal-research", "sheehy-paradigms", "carefully-tailored-doctrinal", "galanter-haves", "barocas-selbst-disparate-impact", "hutchinson-duncan-doctrinal", "gestel-micklitz-methods", "陈瑞华-论法学研究方法", "胡玉鸿-研究方法争议", "胡玉鸿-法学方法论体系构造", "雷磊-法学方法论观察反思", "陈瑞华-第三条道路", "雷鑫洪-方法论演进中国法律实证研究", "陈柏峰-法律实证研究兴起分化", "白建军-刑法教义学实证研究", "金可可-民法实证研究方法", "何挺-裁判文书方法论检讨"],
    exampleIds: ["epstein-king-example", "galanter-haves-example", "barocas-disparate-example", "carefully-tailored-example", "hutchinson-doctrinal-example", "chen-research-method-example", "hu-yuhong-method-debate-example", "lei-xinhong-empirical-evolution-example", "bai-criminal-dogmatics-empirical-example", "jin-civil-empirical-dogmatics-example", "he-judgment-documents-example"],
    exerciseIds: ["abstract-rewrite-lab", "article-anatomy", "method-section-audit"]
  },
  "theory-building": {
    resourceIds: ["holmes-path", "hart-separation", "hart-natural-rights", "fuller-fidelity", "fuller-speluncean", "dworkin-model-rules", "dworkin-hard-cases", "dworkin-law-as-interpretation", "rawls-two-concepts-rules", "rawls-justice-fairness", "rawls-public-reason", "raz-legal-principles", "raz-authority-law-morality", "raz-rule-law-virtue", "finnis-natural-law", "finnis-natural-law-reasoning", "kelsen-pure-theory-analytical", "kelsen-foundations-democracy", "kelsen-natural-law-tribunal", "maccormick-legal-reasoning", "alexy-legal-argumentation", "kennedy-form-substance", "unger-cls-movement", "kapczynski-lpe-framework", "galanter-haves", "black-behavior-law", "frankenberg-critical-comparisons", "mattei-three-patterns", "张文显-部门法哲学引论", "张文显-法学范畴意识", "舒国滢-法学方法论", "舒国滢-抽象法学理论", "雷磊-规范法学发展", "陈景辉-哈特为什么重要", "胡玉鸿-法学方法论体系构造", "雷磊-法学方法论观察反思", "陈兴良-法学知识演进分化", "郑永流-法律交叉研究原理", "强世功-法律人的城邦"],
    exampleIds: ["holmes-path-example", "hart-fuller-debate-example", "kennedy-form-substance-example", "kapczynski-lpe-example", "galanter-haves-example", "schauer-thinking-example", "hu-yuhong-method-debate-example", "chen-baifeng-mechanism-example", "zheng-cross-research-example"],
    exerciseIds: ["theory-debate-map", "article-anatomy", "chinese-method-debate-map"]
  },
  "ai-and-legal-research": {
    resourceIds: ["barocas-selbst-disparate-impact", "selbst-barocas-explainable", "surden-machine-learning-law", "surden-chatgpt-llm-law", "cail2018", "lawgpt-chinese", "laiw-benchmark", "legalbench-legal-reasoning-benchmark", "choi-llm-empirical-legal-research", "livermore-llm-interpretability-els", "dahl-large-legal-fictions", "savelka-ashley-zero-shot-annotation", "chau-livermore-computational-legal-studies", "lindholm-textual-insights", "perlman-generative-ai-legal-scholarship", "frazier-rozenshtein-large-language-scholarship", "nissenbaum-contextual-integrity", "citron-technological-due-process", "kroll-accountable-algorithms", "coglianese-lehr-regulating-robot", "wexler-trade-secrets", "huq-human-decision", "garrett-rudin-glass-box", "刘艳红-人工智能法学反智化", "王利明-人工智能时代法学新课题", "张凌寒-算法权力", "丁晓东-算法法律规制", "左卫民-法律人工智能再思考", "左卫民-计算法学未来", "赵精武周瑞珏-数字法学风险治理", "薛刚-生成式AI改变研究方式"],
    exampleIds: ["barocas-disparate-example", "citron-pasquale-example", "cail2018-example", "citron-tech-due-process-example", "kroll-accountable-example", "huq-human-decision-example", "zhang-algorithm-power-example", "ding-algorithm-regulation-example", "liu-ai-critique-example", "wang-ai-new-questions-example", "zuo-computational-law-future-example", "zhao-digital-law-risk-governance-example", "perlman-ai-scholarship-example", "choi-llm-empirical-example", "dahl-legal-hallucination-example", "legalbench-example", "savelka-zero-shot-annotation-example", "large-language-scholarship-example"],
    exerciseIds: ["ai-citation-verification", "ai-research-cycle-matrix", "ai-argument-stress-test", "ai-method-disclosure-log", "empirical-coding-protocol", "algorithm-governance-brief"]
  }
};

export const topicDetails: Record<string, TopicDetail> = {
  "nature-purpose": {
    overview: [
      "本专题回答最基础但最容易被跳过的问题：法学研究为什么不是意见表达、资料汇编或政策倡议的同义词。学生需要理解，学术研究的核心在于提出可回答、可争辩、可被材料检验的问题，并在既有知识之外作出清楚贡献。",
      "法律研究通常同时面对规范文本、制度实践和价值判断。好的研究会说明自己主要在描述、解释、评价还是设计制度，并承认这些目标之间的张力。"
    ],
    learningGoals: ["区分兴趣、主题、问题、主张和贡献。", "理解原创性不等于前人从未谈过，而是提供新的问题、材料、解释或理论连接。", "能用事实基础、学术意义和公共意义三层说明研究价值。"],
    methodSteps: ["从一个社会或制度现象写出初始困惑。", "检索已有讨论并标出尚未解释清楚的位置。", "判断该研究主要是描述性、解释性、规范性、教义学还是工具性。", "写出一段不超过 150 字的研究意义说明。"],
    pitfalls: ["把政治态度或个人判断直接当作研究结论。", "把资料越多误认为研究越深，而没有说明资料如何回答问题。", "只说现实重要，却没有说明学术上尚缺什么。"],
    seminarQuestions: ["一篇论文的“重要性”应由社会影响、理论贡献还是方法创新决定？", "法律研究是否必须追求客观中立，还是可以承认规范立场？"]
  },
  "thinking-methods": {
    overview: [
      "本专题以第2讲 PPT 为基础，把思维训练理解为从“描述性写作”走向“批判性写作”的过程。描述性写作回答 what、where、who、when；批判性写作追问 how、why、理由、证据、不同观点、限制和结论的可辩护性。",
      "Popper 的三个世界提示学生：法律研究不仅处理物理事实和个人感受，也处理规则、制度、概念、理论和论证这些客观知识对象。法律思维的训练，就是把主观直觉转化为可公开检查、可批判、可修正的知识结构。",
      "本专题用八个思维元素组织训练：目的、问题、信息、推论、假设、概念、观点和后果。学生阅读论文或写作论文时，应逐一检查这些元素是否清楚、准确、相关、完整、合乎逻辑，并能面对最强反对意见。",
      "专题最后进入推理和论证：推理是有意识地用理由和逻辑通向结论，论证则要把事实、信息、理论、方法和法律理由组织起来。谬误识别不是修辞游戏，而是帮助学生发现障眼法、稻草人、循环论证、人身攻击、因果倒置和结论推不出等问题。"
    ],
    learningGoals: ["区分描述性写作与批判性写作，并能把摘要式段落改写成有问题意识的论证段落。", "用目的、问题、信息、推论、假设、概念、观点和后果八个元素诊断论文和自己的研究计划。", "通过概念化训练定义、区分、比较并连接核心概念，避免概念偷换。", "识别常见谬误，并能把批评转化为更稳健的法律论证。"],
    methodSteps: ["先说明思考目的：是在作决定、沟通观点、分析制度、提出论证还是设计解决方案。", "把初始主题改写成清楚、精确、相关且重要的问题，并说明谁会从哪个观点看待它。", "收集信息并检查准确性、完整性、相关性和可验证性，区分数据、信息、知识和智慧。", "写出推论路径：哪些事实支持哪些解释，是否还有更好的解释或替代结论。", "列明假设：哪些前提来自理论、经验、常识或制度立场，哪些可能是未经证明的预设。", "进行概念化：定义关键词，区分相邻概念，说明比较标准，建立因果、部分-整体或价值关系。", "推演后果：如果结论成立，会对规则、制度、当事人和研究贡献产生什么影响。", "检查论证结构和谬误：主张、理由、证据和方法是否匹配，是否存在稻草人、循环论证、人身攻击、虚假因果或结论推不出。"],
    pitfalls: ["把批判性思维理解为否定一切，而不是有根据地分析、评价和修正。", "把创造性思维理解为不受材料约束的想象，忽视概念化和证据边界。", "把描述性综述当成论文论证，没有解释 how 和 why。", "把法律思维简化为三段论，忽视观点、假设、制度后果和反对意见。", "只识别别人的谬误，却不检查自己的论证结构是否同样脆弱。"],
    seminarQuestions: ["从描述性写作到批判性写作，最困难的转变是什么？", "法律思维是否天然保守，还是它也可以成为创造性制度想象的工具？", "概念化为什么是法律研究中最容易被忽略、却最能决定论文质量的环节？", "谬误识别应服务于真诚讨论，还是很容易滑向修辞攻击？"]
  },
  "research-question-hypothesis": {
    overview: [
      "研究问题是整篇论文的发动机。宽泛主题只能说明兴趣所在，真正的问题必须限定对象、关系、材料和回答方式。假设则是研究者暂时提出的解释或判断，等待文献、规范和材料检验。",
      "在法学研究中，假设不总是统计意义上的可检验假设。它也可以是教义学解释假设、比较法功能假设、制度效果假设或规范评价假设。关键是说明它如何被支持、修正或反驳。"
    ],
    learningGoals: ["能从宽泛主题中提炼具体研究问题。", "理解不同研究类型中的假设含义。", "能说明问题、方法和证据之间的匹配关系。"],
    methodSteps: ["用主体、制度、法域、时间和材料限定主题。", "把主题改写成为什么、如何、何种条件下的问题。", "写出一个初步假设并说明需要什么材料检验。", "删除不能回答或无从检验的部分。"],
    pitfalls: ["把题目写成口号，例如“完善某某制度”。", "先决定结论，再寻找支持材料。", "问题太大，导致方法和证据都无法承载。"],
    seminarQuestions: ["规范性论文是否需要假设？", "AI 生成的研究问题为什么常常看似漂亮但不可研究？"]
  },
  "literature-review": {
    overview: [
      "文献综述不是按作者逐篇摘要，而是为自己的研究建立进入学术对话的位置。它要说明已有研究解决了什么、分歧在哪里、哪些问题仍未得到充分解释，以及你的研究为什么能推进一步。",
      "法律文献综述尤其要处理多种材料：教义学文本、法理学论证、社会科学研究、比较法资料和政策报告。学生要学会按问题、方法、材料或理论框架组织文献。"
    ],
    learningGoals: ["区分文献摘要、文献分类和文献评价。", "能建立文献矩阵并识别争议谱系。", "能把文献空白转化为研究问题。"],
    methodSteps: ["围绕研究问题收集核心文献，而不是围绕关键词无限扩张。", "按观点、方法、材料或理论分组。", "找出每一组文献的贡献和限制。", "写出自己的进入点和预期贡献。"],
    pitfalls: ["把文献综述写成书单。", "只选支持自己立场的文献。", "把“国内研究较少”当作唯一空白。"],
    seminarQuestions: ["文献空白是被发现的，还是被研究者构造出来的？", "中文法学论文的文献综述与英文法学论文有什么常见差异？"]
  },
  argumentation: {
    overview: [
      "法律论证的任务不是把结论说得有气势，而是让读者看到结论如何由理由、证据、规范和限定条件支撑。法律论证往往是可废止的，新的事实、原则或反例都可能迫使结论收窄。",
      "本专题训练学生把主张、理由、证据、授权规则和反驳拆开。这样写作时可以清楚地看到哪一环薄弱，哪一环需要文献支持，哪一环只是未经证明的价值偏好。"
    ],
    learningGoals: ["掌握主张、理由、证据、限定和反驳的基本结构。", "能区分规范论证和经验论证。", "能为最强反对意见写出回应。"],
    methodSteps: ["写出一个核心主张。", "为主张列出三条不同类型的理由。", "为每条理由寻找规范、案例、数据或理论证据。", "写出最强反对意见并说明是否需要修改主张。"],
    pitfalls: ["用结论重复结论。", "只列支持理由，不处理反例和反对意见。", "把价值判断隐藏在看似中性的技术分析中。"],
    seminarQuestions: ["一个规范性法律论证是否可以被证明？", "好的法律论文是否必须预先回应反对意见？"]
  },
  "doctrinal-method": {
    overview: [
      "法教义学研究以有效法律规范为基本材料，通过解释、体系化和概念构造回答法律是什么、如何适用以及应如何在现行法内部发展。它不是机械查法条，而是一种受权威文本约束的规范性研究。",
      "本专题同时提醒学生：教义学并不排斥经验事实和价值判断，但这些材料必须通过法律规范的相关性进入论证。经验材料不能直接替代解释，政策偏好也不能直接越过规范结构。"
    ],
    learningGoals: ["理解文本解释、体系解释、目的解释和原则衡量的不同功能。", "能从法条、案例和学说中重构一个法律概念。", "能说明教义学论证与政策建议之间的边界。"],
    methodSteps: ["确认有效法源和问题所在的规范结构。", "整理条文、案例、解释和学说的分歧。", "用解释方法提出可适用的规则或概念方案。", "检验该方案是否与体系、目的和案例后果相容。"],
    pitfalls: ["把法教义学等同于摘录法条。", "用社会效果直接推翻规范结构而不说明法律路径。", "忽视案例事实与规则适用之间的细节差异。"],
    seminarQuestions: ["法教义学能否产生原创性学术贡献？", "在疑难案件中，解释方法之间冲突应如何排序？"]
  },
  "comparative-law": {
    overview: [
      "比较法不是外国法展示，也不是把一个法域的制度直接拿来作为答案。它要求研究者说明比较对象承担什么功能、处于何种制度语境、相似性和差异性各自说明什么。",
      "法律移植争论是比较法方法训练的好入口。Watson 强调法律规则的跨法域流动，Legrand 则提醒法律意义深嵌于语言和文化。学生需要在两者之间形成自己的研究设计。"
    ],
    learningGoals: ["能说明为什么选择这些法域和制度进行比较。", "理解功能主义、语境主义和法律移植争论。", "能区分描述外国法、解释差异和提出改革建议。"],
    methodSteps: ["定义比较对象和它要解决的社会问题。", "说明法域选择的理由和可比性。", "分别描述规范结构、制度背景和实践效果。", "评价差异对本法域研究问题的启示及其限制。"],
    pitfalls: ["只列外国法条，不解释制度语境。", "把相似名称误认为相同功能。", "把成功经验简单移植到本法域。"],
    seminarQuestions: ["比较法研究应追求相似性还是差异性？", "法律移植失败时，是规则失败、语境失败，还是研究设计失败？"]
  },
  "empirical-legal-research": {
    overview: [
      "实证法学研究关注法律如何实际运行，包括法院、行政机关、市场主体、平台、社区和普通人的行为。它要求研究者说明数据来源、样本边界、变量定义、推论限制和伦理风险。",
      "实证研究不是反教义学。许多法律问题需要先通过教义学界定相关事实，再用经验材料判断制度运行、行为模式或效果。关键是避免把数据视为自动给出规范答案。"
    ],
    learningGoals: ["理解样本、变量、编码、访谈和因果推论的基本含义。", "能为法律问题选择合适的经验材料。", "能说明实证研究的推论边界和伦理风险。"],
    methodSteps: ["把法律运行问题转化为可观察现象。", "选择数据、访谈、问卷、案例或田野材料。", "制定编码或访谈方案并记录限制。", "将经验发现与规范问题重新连接。"],
    pitfalls: ["用少量案例推出总体结论。", "把相关性当作因果关系。", "只报告数据结果，不解释其法律意义。"],
    seminarQuestions: ["法学中的经验材料能否回答应然问题？", "裁判文书数据为什么既诱人又危险？"]
  },
  "interdisciplinary-law": {
    overview: [
      "交叉学科研究以法律问题为中心，引入经济学、社会学、政治学、历史学、科技研究等工具。它的目标不是把法律问题改名为其他学科问题，而是让外部理论解释法律自身无法解释的现实或机制。",
      "好的交叉研究需要双重纪律：既要尊重外部学科的方法要求，也要回到法律概念、制度和规范评价。否则容易变成术语拼贴，既不够法学，也不够社会科学。"
    ],
    learningGoals: ["能判断一个法律问题为什么需要外部学科工具。", "理解法社会学、法经济学、法律史、法律与政治经济学、法律与科技的不同问题意识。", "能说明外部理论的解释力和边界。"],
    methodSteps: ["从法律制度或法律实践中提出问题。", "选择一个外部学科概念并说明其适用理由。", "收集能够检验或说明该概念的法律材料。", "回到法律规范或制度设计层面提出结论。"],
    pitfalls: ["为了显得新颖而堆叠学科术语。", "忽视外部学科方法本身的证据要求。", "最后没有回到法律问题。"],
    seminarQuestions: ["交叉学科研究的评价标准应来自法学还是外部学科？", "法经济学、法社会学和法律政治经济学如何对同一问题提出不同解释？"]
  },
  "types-and-presentation": {
    overview: [
      "法学研究可以呈现为描述性、教义学、解释性、规范性、批判性、工具性或混合方法研究。不同类型决定论文结构、材料选择、贡献表达和结论形式。",
      "研究呈现不是最后的包装，而是研究设计的一部分。摘要、引言、文献综述、方法说明和贡献陈述应当彼此一致，让读者清楚知道论文要回答什么、如何回答、回答到什么程度。"
    ],
    learningGoals: ["能区分不同研究类型及其适合的问题。", "能把问题、方法、材料、贡献写成结构化摘要。", "能为自己的研究计划设计章节结构。"],
    methodSteps: ["判断研究主要功能：描述、解释、评价、批判或设计。", "根据功能选择材料和方法。", "写出摘要中的问题、方法、材料、结论和贡献。", "检查章节结构是否服务于核心问题。"],
    pitfalls: ["摘要只写背景和重要性，不写方法和贡献。", "研究类型混乱，导致证据和结论不匹配。", "结论提出政策建议但正文没有制度分析支撑。"],
    seminarQuestions: ["论文类型是否可以混合？混合时如何避免失焦？", "好的研究计划是否必须预先知道结论？"]
  },
  "theory-building": {
    overview: [
      "理论构建要求研究者不只说明某个法律问题的答案，还要说明为什么类似现象会以这种方式发生、哪些概念可以解释它、哪些条件下解释有效，以及该框架如何改变既有理解。",
      "本专题把课件中的 theory building 转化为写作训练：从 puzzle 出发，定义概念，提出概念关系和假设，说明边界条件，再把理论框架嵌入文献综述、方法说明和结论贡献。"
    ],
    learningGoals: ["区分理论、观点、意识形态、教义和假设。", "能用概念、关系、命题、边界条件描述理论框架。", "能说明理论框架如何指导材料选择和论证结构。"],
    methodSteps: ["识别一个既有研究解释不足的 puzzle。", "定义核心概念并说明概念之间的关系。", "写出可被材料支持、修正或反驳的命题。", "说明理论适用的法域、制度、主体和时间边界。"],
    pitfalls: ["把理论写成名词堆砌。", "把某位作者的观点直接当作自己的理论框架。", "只画图不说明概念关系和可检验命题。"],
    seminarQuestions: ["法学研究中的理论是否必须能够预测？", "法教义学体系化与理论构建有哪些相同点和不同点？"]
  },
  "ai-and-legal-research": {
    overview: [
      "本专题不再把 AI 只作为“检索工具”或“写作助手”，而是把它放进法学研究的完整流程：研究问题如何生成，研究意义如何被证明，研究设计如何安排材料和边界，研究方法如何选择与记录，论证如何接受反方测试，最终贡献如何由人类作者承担责任。",
      "AI 可以降低法律文本分类、文献搜寻、案例初筛、摘要改写和反对意见生成的成本，也可能带来幻觉引文、伪问题、过度概括、概念偷换、数据偏差和认知去技能化。所有 AI 输出都必须回到可验证文献、一手资料、规范文本和可复查的方法记录。",
      "本专题同时把 AI 作为研究对象。中文材料帮助学生理解人工智能时代的新法学问题、计算法学和数字法学研究范式；英文材料展示生成式 AI 如何改变法律学术生产、实证法学、文本标注、法律推理评测和法律幻觉研究。"
    ],
    learningGoals: ["能区分 AI 辅助研究、AI 法律问题和 AI 生成内容风险。", "能用六环节矩阵检查 AI 对研究问题、意义、设计、方法、论证和贡献表达的影响。", "掌握 AI 引文核验、来源校正、提示词记录和使用披露流程。", "理解算法偏见、可解释性、法律数据集、评测基准和法律幻觉的基本研究问题。"],
    methodSteps: ["问题生成：让 AI 提出多个研究问题，但逐一检查其真实性、法域边界、资料可得性和是否只是技术热词包装。", "意义校准：要求 AI 区分现实重要性、学术空白、规范价值和制度影响，再用真实文献证明这些意义并非空话。", "设计审计：记录语料来源、案例选择、比较对象、模型版本、提示词、排除标准和伦理风险，说明 AI 在哪一步只是辅助。", "方法选择：根据问题决定 AI 用于检索、摘要、翻译、文本标注、变量编码、反方论证还是写作润色，并为每种用途设置人工复核。", "论证压力测试：让 AI 生成反例、反方观点和薄弱环节，再用案例、规范文本和权威文献判断哪些反驳成立。", "贡献与披露：最终贡献必须由作者说明，披露 AI 使用范围，保留核验记录，并写清 AI 未能解决的限制。"],
    pitfalls: ["把 AI 输出当作已经完成的文献综述。", "引用不存在或不可核验的文献。", "把 AI 生成的流畅摘要误认为研究意义已经成立。", "把模型分类、评测分数或文本标注结果直接当作规范结论。", "忽视训练数据、评测任务、提示词和法律推理之间的差距。"],
    seminarQuestions: ["AI 能否提出真正原创的法学研究问题，还是只能重组已有问题？", "法律大模型评测应测试法律知识、法律推理、资料真实性，还是职业伦理？", "当 AI 帮助生成研究意义和论文贡献时，作者如何证明最终贡献属于自己的判断？", "在什么条件下，LLM 文本标注可以成为法律实证研究的方法，而不是未经说明的捷径？"]
  }
};
