"use client";
import React from "react";
import Header from "../../../../components/Header";
import Link from "next/link";

const TAGS = [
  {
    id: "doctype",
    label: "<!DOCTYPE html>",
    color:
      "bg-gradient-to-r from-yellow-200 to-yellow-400 dark:from-yellow-700 dark:to-yellow-900",
    info: [
      "Defines the document type and version of HTML.",
      "Should be the very first line in an HTML document.",
      "Tells the browser to render the page in standards mode.",
    ],
    useCases: ["Every HTML5 document starts with this declaration."],
    example: "<!DOCTYPE html>",
  },
  {
    id: "html",
    label: "<html> ... </html>",
    color:
      "bg-gradient-to-r from-blue-200 to-blue-400 dark:from-blue-700 dark:to-blue-900",
    info: [
      "Root element of an HTML page.",
      "Wraps all content on the page.",
      "Can have a 'lang' attribute to specify language.",
    ],
    useCases: [
      "Used to wrap all HTML content.",
      'Set lang="en" for English pages.',
    ],
    example: '<html lang="en"> ... </html>',
  },
  {
    id: "head",
    label: "<head> ... </head>",
    color:
      "bg-gradient-to-r from-purple-200 to-purple-400 dark:from-purple-700 dark:to-purple-900",
    info: [
      "Contains meta-information about the document.",
      "Includes <title>, <meta>, <link>, <script> tags, etc.",
    ],
    useCases: ["Add SEO, favicon, and CSS/JS links."],
    example: "<head> ... </head>",
  },
  {
    id: "meta",
    label: '<meta charset="UTF-8" />',
    color:
      "bg-gradient-to-r from-pink-200 to-pink-400 dark:from-pink-700 dark:to-pink-900",
    info: [
      "Specifies the character encoding for the document.",
      "Self-closing tag.",
    ],
    useCases: ["Always include for UTF-8 encoding."],
    example: '<meta charset="UTF-8" />',
  },
  {
    id: "title",
    label: "<title> ... </title>",
    color:
      "bg-gradient-to-r from-green-200 to-green-400 dark:from-green-700 dark:to-green-900",
    info: ["Sets the title of the page (shown in browser tab)."],
    useCases: ["Set a unique title for every page for SEO and accessibility."],
    example: "<title>My HTML5 Page</title>",
  },
  {
    id: "link",
    label: '<link rel="stylesheet" href="styles.css" />',
    color:
      "bg-gradient-to-r from-cyan-200 to-cyan-400 dark:from-cyan-700 dark:to-cyan-900",
    info: ["Links external CSS file to the document.", "Self-closing tag."],
    useCases: ["Link to external CSS files for styling."],
    example: '<link rel="stylesheet" href="styles.css" />',
  },
  {
    id: "body",
    label: "<body> ... </body>",
    color:
      "bg-gradient-to-r from-orange-200 to-orange-400 dark:from-orange-700 dark:to-orange-900",
    info: ["Contains the visible content of the page."],
    useCases: ["Wrap all visible content in <body>."],
    example: "<body> ... </body>",
  },
  {
    id: "h1",
    label: "<h1> ... </h1>",
    color:
      "bg-gradient-to-r from-red-200 to-red-400 dark:from-red-700 dark:to-red-900",
    info: [
      "Defines a top-level heading.",
      "There should be only one <h1> per page for accessibility.",
    ],
    useCases: ["Use for main page heading."],
    example: "<h1>Hello, HTML5!</h1>",
  },
  {
    id: "p",
    label: "<p> ... </p>",
    color:
      "bg-gradient-to-r from-lime-200 to-lime-400 dark:from-lime-700 dark:to-lime-900",
    info: ["Defines a paragraph of text."],
    useCases: ["Wrap each paragraph in <p> tags."],
    example: "<p>This is a sample HTML5 boilerplate.</p>",
  },
  {
    id: "script",
    label: '<script src="main.js"></script>',
    color:
      "bg-gradient-to-r from-fuchsia-200 to-fuchsia-400 dark:from-fuchsia-700 dark:to-fuchsia-900",
    info: [
      "Links an external JavaScript file.",
      "Placed at the end of body for best performance.",
    ],
    useCases: ["Add scripts for interactivity or analytics."],
    example: '<script src="main.js"></script>',
  },
];

import { useState } from "react";

export default function HtmlBasics() {
  const [activeTag, setActiveTag] = useState(null);

  // Helper to highlight both opening and closing tag lines for block tags
  const highlightLine = (tag) =>
    activeTag === tag
      ? `${
          TAGS.find((t) => t.id === tag)?.color ||
          "bg-blue-100 dark:bg-blue-900"
        } shadow-lg ring-2 ring-blue-400 dark:ring-blue-300 transition-all`
      : "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181C2B] via-[#232946] to-[#181C2B] transition-colors duration-300">
      <Header />
      <main className="max-w-6xl mx-auto py-14 px-4">
        <h1
          className="text-4xl font-extrabold mb-10 text-center text-[#FFD700] drop-shadow-lg tracking-wide"
          style={{ textShadow: "0 2px 16px #232946" }}
        >
          HTML Basics
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: HTML Boilerplate */}
          <div className="flex-1 bg-gradient-to-br from-[#232946] to-[#181C2B] rounded-xl shadow-2xl p-8 text-lg font-mono text-[#F4F4F6] select-text overflow-x-auto border-2 border-[#FFD700]/30">
            <pre className="whitespace-pre-wrap">
              <code>
                <div
                  className={`cursor-pointer rounded px-2 py-1 mb-1 ${highlightLine(
                    "doctype"
                  )}`}
                  onMouseEnter={() => setActiveTag("doctype")}
                  onMouseLeave={() => setActiveTag(null)}
                >
                  {"<!DOCTYPE html>"}
                </div>
                <div
                  className={`cursor-pointer rounded px-2 py-1 mb-1 ${highlightLine(
                    "html"
                  )}`}
                  onMouseEnter={() => setActiveTag("html")}
                  onMouseLeave={() => setActiveTag(null)}
                >
                  {'<html lang="en">'}
                </div>
                <div
                  className={`cursor-pointer rounded px-2 py-1 mb-1 ${highlightLine(
                    "head"
                  )}`}
                  onMouseEnter={() => setActiveTag("head")}
                  onMouseLeave={() => setActiveTag(null)}
                >
                  {"  <head>"}
                </div>
                <div
                  className={`cursor-pointer rounded px-2 py-1 mb-1 ${highlightLine(
                    "meta"
                  )}`}
                  onMouseEnter={() => setActiveTag("meta")}
                  onMouseLeave={() => setActiveTag(null)}
                >
                  {'    <meta charset="UTF-8" />'}
                </div>
                <div
                  className={`cursor-pointer rounded px-2 py-1 mb-1 ${highlightLine(
                    "title"
                  )}`}
                  onMouseEnter={() => setActiveTag("title")}
                  onMouseLeave={() => setActiveTag(null)}
                >
                  {"    <title>My HTML5 Page</title>"}
                </div>
                <div
                  className={`cursor-pointer rounded px-2 py-1 mb-1 ${highlightLine(
                    "link"
                  )}`}
                  onMouseEnter={() => setActiveTag("link")}
                  onMouseLeave={() => setActiveTag(null)}
                >
                  {'    <link rel="stylesheet" href="styles.css" />'}
                </div>
                <div
                  className={`cursor-pointer rounded px-2 py-1 mb-1 ${highlightLine(
                    "head"
                  )}`}
                  onMouseEnter={() => setActiveTag("head")}
                  onMouseLeave={() => setActiveTag(null)}
                >
                  {"  </head>"}
                </div>
                <div
                  className={`cursor-pointer rounded px-2 py-1 mb-1 ${highlightLine(
                    "body"
                  )}`}
                  onMouseEnter={() => setActiveTag("body")}
                  onMouseLeave={() => setActiveTag(null)}
                >
                  {"  <body>"}
                </div>
                <div
                  className={`cursor-pointer rounded px-2 py-1 mb-1 ${highlightLine(
                    "h1"
                  )}`}
                  onMouseEnter={() => setActiveTag("h1")}
                  onMouseLeave={() => setActiveTag(null)}
                >
                  {"    <h1>Hello, HTML5!</h1>"}
                </div>
                <div
                  className={`cursor-pointer rounded px-2 py-1 mb-1 ${highlightLine(
                    "p"
                  )}`}
                  onMouseEnter={() => setActiveTag("p")}
                  onMouseLeave={() => setActiveTag(null)}
                >
                  {"    <p>This is a sample HTML5 boilerplate.</p>"}
                </div>
                <div
                  className={`cursor-pointer rounded px-2 py-1 mb-1 ${highlightLine(
                    "script"
                  )}`}
                  onMouseEnter={() => setActiveTag("script")}
                  onMouseLeave={() => setActiveTag(null)}
                >
                  {'    <script src="main.js"></script>'}
                </div>
                <div
                  className={`cursor-pointer rounded px-2 py-1 mb-1 ${highlightLine(
                    "body"
                  )}`}
                  onMouseEnter={() => setActiveTag("body")}
                  onMouseLeave={() => setActiveTag(null)}
                >
                  {"  </body>"}
                </div>
                <div
                  className={`cursor-pointer rounded px-2 py-1 mb-1 ${highlightLine(
                    "html"
                  )}`}
                  onMouseEnter={() => setActiveTag("html")}
                  onMouseLeave={() => setActiveTag(null)}
                >
                  {"</html>"}
                </div>
              </code>
            </pre>
          </div>
          {/* Right: Tag Info */}
          <div className="flex-1 bg-gradient-to-br from-[#232946] to-[#181C2B] rounded-xl shadow-2xl p-10 min-h-[400px] border-2 border-[#FFD700]/30 flex flex-col justify-center">
            {activeTag ? (
              (() => {
                const tag = TAGS.find((t) => t.id === activeTag);
                return (
                  <>
                    <h2
                      className={`text-3xl font-extrabold mb-6 px-4 py-2 rounded-lg shadow-lg bg-gradient-to-r from-[#FFD700]/80 to-[#F4E2D8]/80 text-[#232946] border-2 border-[#FFD700]/60`}
                      style={{
                        letterSpacing: "0.02em",
                        filter: "drop-shadow(0 2px 16px #FFD700)",
                      }}
                    >
                      {tag.label}
                    </h2>
                    <ul className="list-disc pl-8 text-[#FFD700] text-lg mb-8 space-y-2">
                      {tag.info.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="mb-8">
                      <span className="font-semibold text-[#FFD700] text-lg">
                        Use Cases:
                      </span>
                      <ul className="list-disc pl-8 text-[#F4E2D8] text-base mt-2 space-y-1">
                        {tag.useCases?.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-[#FFD700] text-lg">
                        Example:
                      </span>
                      <pre className="bg-[#232946]/80 rounded-lg p-4 text-base text-[#FFD700] border border-[#FFD700]/30 mt-2 overflow-x-auto shadow-inner">
                        {tag.example}
                      </pre>
                    </div>
                  </>
                );
              })()
            ) : (
              <div className="text-[#FFD700]/60 text-lg flex flex-col items-center justify-center h-full">
                <span>Hover over a tag to see details here.</span>
              </div>
            )}
          </div>
        </div>
        {/* Navigation Links */}
        <div className="flex justify-between items-center mt-10">
          <a
            href="/tech-journeys/html"
            className="px-4 py-2 rounded bg-gradient-to-r from-[#FFD700] to-[#F4E2D8] text-[#232946] font-bold shadow hover:from-[#F4E2D8] hover:to-[#FFD700] border border-[#FFD700]/60 transition-colors"
          >
            ← Previous
            <Link
              href="/tech-journeys/html/elements"
              className="px-4 py-2 rounded bg-gradient-to-r from-[#FFD700] to-[#F4E2D8] text-[#232946] font-bold shadow hover:from-[#F4E2D8] hover:to-[#FFD700] border border-[#FFD700]/60 transition-colors"
            >
              Next →
            </Link>
          </a>
        </div>
      </main>
    </div>
  );
}
