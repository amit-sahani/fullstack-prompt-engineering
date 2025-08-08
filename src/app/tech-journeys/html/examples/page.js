"use client";
import React from "react";
import Link from "next/link";
import HtmlPlayground from "../../../../components/HtmlPlayground";

export default function HtmlExamples() {
  const initialHtml = `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>HTML Playground</title>\n  </head>\n  <body>\n    <h1 title=\"Welcome\">Hello, <span style=\"color: #FFD700\">World</span>!</h1>\n    <p id=\"desc\">This is a <b>live</b> HTML playground.</p>\n  </body>\n</html>`;
  return (
    <>
      <h1
        className="text-4xl font-extrabold mb-10 text-center text-[#FFD700] drop-shadow-lg tracking-wide"
        style={{ textShadow: "0 2px 16px #232946" }}
      >
        HTML Examples Playground
      </h1>
      <HtmlPlayground initialHtml={initialHtml} />
      {/* Navigation Links */}
      <div className="flex justify-between items-center mt-10">
        <Link
          href="/tech-journeys/html/attributes"
          className="px-4 py-2 rounded bg-gradient-to-r from-[#FFD700] to-[#F4E2D8] text-[#232946] font-bold shadow hover:from-[#F4E2D8] hover:to-[#FFD700] border border-[#FFD700]/60 transition-colors"
        >
          ← Previous
        </Link>
        <Link
          href="/tech-journeys/html/elements/heading"
          className="px-4 py-2 rounded bg-gradient-to-r from-[#FFD700] to-[#F4E2D8] text-[#232946] font-bold shadow hover:from-[#F4E2D8] hover:to-[#FFD700] border border-[#FFD700]/60 transition-colors"
        >
          Heading →
        </Link>
      </div>
    </>
  );
}
