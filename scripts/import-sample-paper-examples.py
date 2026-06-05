from __future__ import annotations

import json
import html
import re
import shutil
from pathlib import Path

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = Path(
    "/Users/wangjiangyu/Library/CloudStorage/OneDrive-CityUniversityofHongKong/"
    "AC-Teaching/LW6100 Legal Research/Sample Journal Papers and Dissertations"
)
PUBLIC_DIR = ROOT / "public" / "sample-papers"
OUTPUT_FILE = ROOT / "src" / "content" / "samplePaperExamples.ts"


BAD_TITLE_PATTERNS = [
    r"^abstract$",
    r"^alwd\b",
    r"^apa\b",
    r"^chicago\b",
    r"^article$",
    r"^contents?$",
    r"^citations?\b",
    r"^date downloaded",
    r"^downloaded",
    r"^electronic copy",
    r"^heinonline",
    r"^hong kong law journal$",
    r"^jstor",
    r"^law working paper",
    r"^mla\b",
    r"^please note: citations",
    r"^for permissions",
    r"^ssrn",
    r"^table of contents$",
    r"^vol\\.",
    r"^volume ",
    r"^no\\.",
    r"^issue ",
    r"^page ",
    r"all rights reserved",
    r"bluebook",
    r"journals\.permissions",
    r"published by",
    r"source: content downloaded",
    r"^(january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{4}\b",
    r"^\\d+$",
]


def clean_text(value: str) -> str:
    value = html.unescape(value)
    value = value.replace("\u2010", "-").replace("\u2011", "-").replace("\u2012", "-")
    value = value.replace("\u2013", "-").replace("\u2014", "-")
    value = value.replace("\uf0b7", " ").replace("•", " ")
    value = re.sub(r"LW6100E?", "", value, flags=re.I)
    value = re.sub(r"\s+", " ", value)
    return value.strip(" -_#|:;,.")


def title_from_filename(path: Path) -> str:
    name = path.stem
    name = name.replace("_", " ").replace("+", " ").replace("：", ":")
    name = re.sub(r"\[[^\]]*\]", " ", name)
    name = re.sub(r"\([^)]*\)", " ", name)
    name = re.sub(r"SSRN[-_ ]?id\d+", " ", name, flags=re.I)
    name = re.sub(r"^\W+", " ", name)
    name = re.sub(r"\s+", " ", name).strip()
    name = re.sub(r"^\d{4}\s+[A-Z]{2,}\s+", " ", name)
    name = re.sub(r"^\d+\s*[A-Za-z][A-Za-z.]*\d+(?:-\d+)?\s*", " ", name)
    if not re.search(r"^\d+\s+years?\b", name, re.I):
        name = re.sub(r"^\d+\s*", " ", name)
    name = re.sub(r"\b(pre|final proof|article outline|outline|summary|presentation paper|presentation)\b", " ", name, flags=re.I)
    name = clean_text(name)
    return name or path.stem


def is_poor_title(title: str) -> bool:
    compact = re.sub(r"[^A-Za-z0-9]+", "", title)
    if not title:
        return True
    low = title.lower()
    if any(re.search(pattern, low) for pattern in BAD_TITLE_PATTERNS):
        return True
    if re.search(r"^(?:S\d{8,}|cx[auz]\d{3,}|avy\d{3,}|ssrn[- ]?id\d+)", title, re.I):
        return True
    if re.fullmatch(r"\d+", compact):
        return True
    if re.fullmatch(r"[A-Za-z]{2,}J[A-Za-z0-9]*\d+(?:-\d+)?", compact):
        return True
    if re.fullmatch(r"[A-Za-z]{2,}(?:L|Rev|Stud|Sci|Tech|Intl|Transnatl|Comp|Bus)[A-Za-z0-9]*\d+(?:-\d+)?", compact):
        return True
    return False


def normalize_title(title: str) -> str:
    title = clean_text(title)
    title = re.sub(
        r"^[A-Z][A-Z .'\-]{2,}\*?\s+(?=(?:From|The|A|An|When|How|Why|Do|Of|To|Beyond|Between|Understanding|Regulating|Regulatory)\b)",
        "",
        title,
    )
    title = re.sub(r"([a-z])([A-Z])", r"\1 \2", title)
    return clean_text(title)


def looks_like_author_line(line: str) -> bool:
    if ":" in line or "?" in line:
        return False
    if line.count(",") >= 2:
        return True
    return bool(re.fullmatch(r"[A-Z][A-Za-z.'\- ]+(?:\s+(?:and|&)\s+[A-Z][A-Za-z.'\- ]+)+", line))


def looks_like_person_name(title: str) -> bool:
    if re.search(r"\d|[:?.,;-]", title):
        return False
    words = title.split()
    if not 1 < len(words) <= 4:
        return False
    topic_words = {
        "ai",
        "arbitration",
        "author",
        "china",
        "comparative",
        "contract",
        "corporate",
        "data",
        "digital",
        "governance",
        "judicial",
        "law",
        "legal",
        "market",
        "policy",
        "privacy",
        "property",
        "regulation",
        "rights",
        "tort",
    }
    if any(word.lower().strip("'’") in topic_words for word in words):
        return False
    connectors = {"and", "as", "by", "for", "from", "in", "of", "on", "the", "to", "under", "with"}
    if any(word.lower().strip("'’") in connectors for word in words):
        return False
    return all(word[:1].isupper() for word in words)


def usable_filename_title(title: str) -> bool:
    if is_poor_title(title):
        return False
    if looks_like_person_name(title):
        return False
    if re.search(r"\b(article outline|outline|summary|presentation)\b", title, re.I):
        return False
    if re.fullmatch(r"[A-Za-z.]+\d+(?:-\d+)?", re.sub(r"\s+", "", title)):
        return False
    if re.search(r"^[A-Za-z]{2,}\d{3,}$", title):
        return False
    if re.fullmatch(r"[\u4e00-\u9fff]{2,4}", title):
        return False
    return len(title) >= 7


def is_bad_title_line(line: str) -> bool:
    low = line.lower()
    if len(line) < 8 or len(line) > 220:
        return True
    if sum(ch.isalpha() for ch in line) < 5:
        return True
    if re.search(r"^(?:the )?(?:harvard|yale|columbia|cornell|berkeley|oxford|singapore|american|asian|journal|law review)", low):
        return True
    if re.search(r"^(?:vol|volume|issue|number|spring|summer|fall|winter)\b", low):
        return True
    if looks_like_author_line(line):
        return True
    return any(re.search(pattern, low) for pattern in BAD_TITLE_PATTERNS)


def split_author_from_title(title: str, author: str) -> tuple[str, str]:
    if author != "作者见 PDF 附件":
        return title, author
    match = re.match(r"^([A-Z][A-Za-z .'\-&]+),\s+(.+)$", title)
    if not match:
        return title, author
    candidate_author = clean_text(match.group(1))
    candidate_title = clean_text(match.group(2))
    if 3 <= len(candidate_author) <= 80 and len(candidate_author.split()) <= 8 and len(candidate_title) >= 8:
        return candidate_title, candidate_author
    return title, author


def extract_pdf_info(path: Path) -> tuple[str, str, str]:
    title = ""
    author = ""
    text = ""
    filename_title = title_from_filename(path)

    try:
        reader = PdfReader(str(path))
        metadata = reader.metadata or {}
        meta_title = clean_text(str(metadata.get("/Title") or ""))
        meta_author = clean_text(str(metadata.get("/Author") or ""))
        if meta_title and not re.search(r"(microsoft word|untitled|article|ssrn-id)", meta_title, re.I):
            title = meta_title
        if meta_author and not re.search(r"(microsoft|acrobat|anonymous|unknown)", meta_author, re.I):
            author = meta_author

        page_texts = []
        for page in reader.pages[:2]:
            try:
                page_texts.append(page.extract_text() or "")
            except Exception:
                continue
        text = "\n".join(page_texts)
    except Exception:
        return title_from_filename(path), "作者见 PDF 附件", ""

    lines = [clean_text(line) for line in re.split(r"[\n\r]+", text)]
    lines = [line for line in lines if line]

    if is_poor_title(title):
        title = ""

    if not title:
        for index, line in enumerate(lines[:45]):
            if not is_bad_title_line(line):
                next_line = lines[index + 1] if index + 1 < len(lines) else ""
                should_join = len(line.split()) < 8 or re.search(
                    r"\b(?:and|or|the|of|in|as|to|with|for|from|under|over|china's)$",
                    line,
                    re.I,
                )
                if next_line and not is_bad_title_line(next_line) and should_join:
                    line = clean_text(f"{line} {next_line}")
                title = line
                break

    extracted_title = normalize_title(title)
    extracted_good = not is_poor_title(extracted_title) and not looks_like_author_line(extracted_title)

    if usable_filename_title(filename_title):
        if extracted_good and len(filename_title) < 12 and len(extracted_title) > len(filename_title) + 24:
            title = extracted_title
        else:
            title = normalize_title(filename_title)
    elif extracted_good:
        title = extracted_title
    else:
        title = normalize_title(filename_title)

    if not author:
        for line in lines[:80]:
            by_match = re.search(r"^(?:by|author[s]?:)\s+(.+)$", line, re.I)
            if by_match:
                candidate = clean_text(by_match.group(1))
                if 3 <= len(candidate) <= 120:
                    author = candidate
                    break

    if not author:
        author = "作者见 PDF 附件"

    title, author = split_author_from_title(title, clean_text(author))
    return title, author, clean_text(text)[:3000]


def slugify(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    value = value.strip("-")
    return value[:58].strip("-") or "chinese-attachment"


def infer_method(title: str, filename: str) -> str:
    text = f"{title} {filename}".lower()
    if re.search(r"empirical|study|evidence|courts?|shanghai|litigants|haves|attitudes|survey|decisions|sample", text):
        return "课程附件、实证研究、案例或数据分析"
    if re.search(r"\bai\b|artificial intelligence|algorithm|robot|data|privacy|facial|digital|software|metaverse|machine|tracing|online|platform", text):
        return "课程附件、法律与科技、规范分析"
    if re.search(r"comparative|cross-border|hong kong|taiwan|china|russian|portuguese|eu |international|transnational|wto|investment treaty|arbitration", text):
        return "课程附件、比较法或跨法域研究"
    if re.search(r"corporate|governance|bank|securities|investment|insolvency|market|shareholder|remuneration|competition|aviation|securitisation", text):
        return "课程附件、公司金融法、制度分析"
    if re.search(r"constitutional|basic law|judicial review|due process|administrative|discretion|speech|religious freedom|political system", text):
        return "课程附件、公法与制度分析"
    if re.search(r"contract|tort|negligence|registration|liability|mediation|property|copyright|criminal|prison|plea", text):
        return "课程附件、法教义学与规范分析"
    if re.search(r"legal consciousness|culture|pluralism|temple|religious|monk|nun|divorce|filial|social inequality|asylum|fgm", text):
        return "课程附件、法社会学与法律文化研究"
    return "课程附件、综合法学研究范例"


def question_for(title: str, method: str) -> str:
    if "实证研究" in method:
        return f"作者如何把“{title}”转化为可观察的法律经验问题，并选择数据、案例或访谈材料回答？"
    if "比较法" in method:
        return f"不同法域、制度背景或国际规则如何影响“{title}”所涉及的法律问题？"
    if "法律与科技" in method:
        return f"“{title}”中的技术、数据或平台场景如何挑战既有法律概念、责任或规制工具？"
    if "公司金融法" in method:
        return f"“{title}”如何连接市场结构、公司治理、监管工具和制度激励？"
    if "公法" in method:
        return f"“{title}”如何处理权力约束、程序保障、司法审查或宪制结构中的核心争议？"
    if "法社会学" in method:
        return f"“{title}”如何把法律放进社会结构、文化实践或日常经验中分析？"
    if "法教义学" in method:
        return f"现行规则、案例和学说如何处理“{title}”中的规范冲突、概念边界或制度漏洞？"
    return f"“{title}”如何形成一个具体、可回答、可评价的法学研究问题？"


def contribution_for(title: str, method: str) -> str:
    if "实证研究" in method:
        return "展示如何用经验材料校正直觉判断，并把数据或案例发现重新连接到法律意义。"
    if "比较法" in method:
        return "展示如何通过跨法域材料识别制度功能、语境差异和可移植性的限制。"
    if "法律与科技" in method:
        return "展示如何把新技术问题翻译为权利、责任、程序、风险和治理结构问题。"
    if "公司金融法" in method:
        return "展示如何把商业制度、市场激励和监管选择组织成可检验的法律分析。"
    if "公法" in method:
        return "展示如何围绕权力、程序、正当性和制度边界构造公法论证。"
    if "法社会学" in method:
        return "展示如何把正式规则之外的社会实践、身份、文化和制度运行纳入法律研究。"
    if "法教义学" in method:
        return "展示如何用规范文本、案例、原则和概念体系提出可适用的法律答案。"
    return "展示如何把材料、问题和贡献组织成可供课堂拆解的法学论文范例。"


def discussion_for(title: str, method: str) -> list[str]:
    base = [
        f"打开 PDF 附件，先标出作者如何把“{title}”写成研究问题。",
        "这篇文章的方法说明是否足以让读者检查材料选择和论证路径？",
    ]
    if "实证研究" in method:
        base.append("样本、变量、编码或材料来源可能带来哪些推论限制？")
    elif "比较法" in method:
        base.append("作者选择比较对象的理由是否充分，是否存在选择性比较？")
    elif "法律与科技" in method:
        base.append("技术机制在文中是事实背景、法律问题，还是规范评价对象？")
    elif "法教义学" in method:
        base.append("作者如何在文本、目的、体系和后果理由之间排序？")
    else:
        base.append("这篇文章最值得学习的是选题、材料、结构还是贡献表达？")
    return base


def render_ts(examples: list[dict]) -> str:
    lines = [
        'import type { Example } from "./courseData";',
        "",
        "export const samplePaperExamples: Example[] = ",
        json.dumps(examples, ensure_ascii=False, indent=2),
        ";",
        "",
    ]
    return "\n".join(lines)


def main() -> None:
    if not SOURCE_DIR.exists():
        raise SystemExit(f"Source directory not found: {SOURCE_DIR}")

    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    for old_pdf in PUBLIC_DIR.glob("*.pdf"):
        old_pdf.unlink()

    examples = []
    pdfs = sorted(SOURCE_DIR.glob("*.pdf")) + sorted(SOURCE_DIR.glob("*.PDF"))
    for index, source in enumerate(sorted(set(pdfs)), start=1):
        title, author, _text = extract_pdf_info(source)
        method = infer_method(title, source.name)
        slug = slugify(title_from_filename(source) or title)
        target_name = f"sample-paper-{index:03d}-{slug}.pdf"
        shutil.copy2(source, PUBLIC_DIR / target_name)

        examples.append(
            {
                "id": f"sample-paper-{index:03d}",
                "title": title,
                "author": author,
                "method": method,
                "question": question_for(title, method),
                "contribution": contribution_for(title, method),
                "discussion": discussion_for(title, method),
                "citation": f"课程 PDF 附件：《{title}》。",
                "url": f"/sample-papers/{target_name}",
            }
        )

    OUTPUT_FILE.write_text(render_ts(examples), encoding="utf-8")
    print(f"Imported {len(examples)} PDF attachments into {PUBLIC_DIR}")
    print(f"Wrote {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
