import Link from "next/link";
import { Fragment, type ReactNode } from "react";

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const regex = /(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)]+\))|(ole@peerlo\.no)|(\+47 988 11 908)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<Fragment key={`${keyPrefix}-t${i++}`}>{text.slice(lastIndex, match.index)}</Fragment>);
    }

    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(
        <strong key={`${keyPrefix}-b${i++}`} className="font-semibold text-charcoal">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("[")) {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      const label = linkMatch?.[1] ?? token;
      const href = linkMatch?.[2] ?? "#";
      parts.push(
        <Link
          key={`${keyPrefix}-l${i++}`}
          href={href}
          className="text-forest hover:text-evening-forest underline underline-offset-2"
        >
          {label}
        </Link>
      );
    } else if (token === "ole@peerlo.no") {
      parts.push(
        <a
          key={`${keyPrefix}-e${i++}`}
          href="mailto:ole@peerlo.no"
          className="text-forest hover:text-evening-forest underline underline-offset-2"
        >
          ole@peerlo.no
        </a>
      );
    } else {
      parts.push(
        <a
          key={`${keyPrefix}-p${i++}`}
          href="tel:+4798811908"
          className="text-forest hover:text-evening-forest underline underline-offset-2"
        >
          +47 988 11 908
        </a>
      );
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(<Fragment key={`${keyPrefix}-t${i++}`}>{text.slice(lastIndex)}</Fragment>);
  }

  return parts;
}

function renderParagraphLines(lines: string[], keyPrefix: string): ReactNode {
  return lines.map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {renderInline(line, `${keyPrefix}-${i}`)}
    </Fragment>
  ));
}

export interface LegalDocument {
  title: string;
  updated: string;
  preamble: ReactNode[];
  sections: { heading: string; body: ReactNode[] }[];
}

export function parseLegalMarkdown(raw: string): LegalDocument {
  const lines = raw.trim().split("\n");
  let i = 0;
  let key = 0;

  const titleLine = lines[i].startsWith("# ") ? lines[i++].slice(2) : "";
  while (lines[i]?.trim() === "") i++;

  const updatedMatch = lines[i]?.match(/^\*\*(Sist oppdatert:.*)\*\*$/);
  const updated = updatedMatch ? updatedMatch[1] : "";
  if (updatedMatch) i++;

  function consumeBlankLines() {
    while (i < lines.length && lines[i].trim() === "") i++;
  }

  function parseBlock(): ReactNode | null {
    consumeBlankLines();
    if (i >= lines.length) return null;

    const line = lines[i];

    if (line.startsWith("### ")) {
      const heading = line.slice(4);
      i++;
      return (
        <h3 key={key++} className="text-lg font-semibold text-charcoal mt-6 mb-2">
          {heading}
        </h3>
      );
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      return (
        <ul key={key++} className="space-y-2 my-4 pl-1">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-charcoal/70 text-lg leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-forest/60 mt-3 shrink-0" />
              <span>{renderInline(item, `li-${key}-${j}`)}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      return (
        <ol key={key++} className="space-y-2 my-4 pl-1 list-decimal list-inside">
          {items.map((item, j) => (
            <li key={j} className="text-charcoal/70 text-lg leading-relaxed">
              {renderInline(item, `ol-${key}-${j}`)}
            </li>
          ))}
        </ol>
      );
    }

    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("### ") &&
      !lines[i].startsWith("- ") &&
      !/^\d+\.\s/.test(lines[i])
    ) {
      paraLines.push(lines[i].replace(/ {2}$/, ""));
      i++;
    }
    return (
      <p key={key++} className="text-charcoal/70 text-lg leading-relaxed">
        {renderParagraphLines(paraLines, `p-${key}`)}
      </p>
    );
  }

  const preamble: ReactNode[] = [];
  consumeBlankLines();
  while (i < lines.length && !lines[i].startsWith("## ")) {
    const block = parseBlock();
    if (block) preamble.push(block);
  }

  const sections: { heading: string; body: ReactNode[] }[] = [];
  while (i < lines.length) {
    consumeBlankLines();
    if (i >= lines.length) break;
    if (!lines[i].startsWith("## ")) {
      i++;
      continue;
    }
    const heading = lines[i].slice(3);
    i++;
    const body: ReactNode[] = [];
    while (i < lines.length && !lines[i].startsWith("## ")) {
      const block = parseBlock();
      if (block) body.push(block);
    }
    sections.push({ heading, body });
  }

  return { title: titleLine, updated, preamble, sections };
}
