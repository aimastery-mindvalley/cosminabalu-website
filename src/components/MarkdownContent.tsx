"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-serif prose-a:text-[#CE1B28] prose-blockquote:border-l-[#CE1B28] prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
