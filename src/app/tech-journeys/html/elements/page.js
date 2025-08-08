"use client";
import React from "react";

export default function HtmlElements() {
  return (
    <>
      <h1
        className="text-4xl font-extrabold mb-10 text-center text-[#FFD700] drop-shadow-lg tracking-wide"
        style={{ textShadow: "0 2px 16px #232946" }}
      >
        HTML Elements
      </h1>
      <section className="mb-10">
        <p className="text-lg text-[#F4E2D8] text-center mb-6">
          An <span className="text-[#FFD700] font-semibold">HTML element</span>{" "}
          is a fundamental building block of a webpage. It tells the browser how
          to display or interpret content.
        </p>
        {/* Focused Example Element */}
        <div className="bg-gradient-to-br from-[#232946] to-[#181C2B] rounded-xl shadow-lg p-6 border border-[#FFD700]/20 mb-6">
          <p className="text-[#FFD700] font-semibold mb-2">
            Let&#39;s look at an example element:
          </p>
          <pre className="bg-[#232946]/80 rounded p-3 text-base text-[#FFD700] border border-[#FFD700]/30 mb-4 overflow-x-auto shadow-inner">{`<p>Hello, world!</p>`}</pre>
          <ol className="list-decimal pl-6 text-[#F4E2D8] space-y-3">
            <li>
              <span className="text-[#FFD700] font-semibold">Opening Tag</span>:{" "}
              <span className="font-mono">&lt;p&gt;</span> — This marks the
              start of the element and tells the browser a paragraph is
              beginning.
            </li>
            <li>
              <span className="text-[#FFD700] font-semibold">Content</span>:{" "}
              <span className="font-mono">Hello, world!</span> — The information
              or other elements placed between the opening and closing tags.
              This is what users see on the page.
            </li>
            <li>
              <span className="text-[#FFD700] font-semibold">Closing Tag</span>:{" "}
              <span className="font-mono">&lt;/p&gt;</span> — Marks the end of
              the element.
            </li>
            <li>
              <span className="text-[#FFD700] font-semibold">Element</span>: The
              complete structure, including opening tag, content, and closing
              tag, forms the element.
            </li>
          </ol>
        </div>
        {/* Why HTML elements are used (moved up) */}
        <div className="bg-gradient-to-br from-[#232946] to-[#181C2B] rounded-xl shadow-lg p-6 border border-[#FFD700]/20 mb-6">
          <p className="text-[#FFD700] font-semibold mb-2">
            Why are HTML elements used?
          </p>
          <ul className="list-disc pl-6 text-[#F4E2D8] space-y-2">
            <li>They define the structure and content of a webpage.</li>
            <li>
              They tell the browser how to display or interpret different types
              of content (text, images, links, etc.).
            </li>
            <li>
              They allow developers to organize, style, and add interactivity to
              web pages.
            </li>
          </ul>
        </div>
        {/* Examples of other elements (moved down) */}
        <div className="bg-gradient-to-br from-[#232946] to-[#181C2B] rounded-xl shadow-lg p-6 border border-[#FFD700]/20">
          <p className="text-[#FFD700] font-semibold mb-2">
            Other examples of HTML elements:
          </p>
          <pre className="bg-[#232946]/80 rounded p-3 text-base text-[#FFD700] border border-[#FFD700]/30 mb-2 overflow-x-auto shadow-inner">{`<h1>Welcome!</h1>`}</pre>
          <pre className="bg-[#232946]/80 rounded p-3 text-base text-[#FFD700] border border-[#FFD700]/30 mb-2 overflow-x-auto shadow-inner">{`<img src="logo.png" alt="Logo" />`}</pre>
          <pre className="bg-[#232946]/80 rounded p-3 text-base text-[#FFD700] border border-[#FFD700]/30 mb-2 overflow-x-auto shadow-inner">{`<ul><li>Item 1</li><li>Item 2</li></ul>`}</pre>
        </div>
        {/* Nesting section */}
        <div className="bg-gradient-to-br from-[#232946] to-[#181C2B] rounded-xl shadow-lg p-6 border border-[#FFD700]/20 mb-6">
          <p className="text-[#FFD700] font-semibold mb-2">
            Nesting HTML elements
          </p>
          <p className="text-[#F4E2D8] mb-4">
            HTML elements can often be{" "}
            <span className="text-[#FFD700] font-semibold">nested</span> inside
            one another to create complex structures. However, some elements
            cannot contain other elements.
          </p>
          <p className="text-[#FFD700] font-semibold mb-1">
            Example of nested elements:
          </p>
          <pre className="bg-[#232946]/80 rounded p-3 text-base text-[#FFD700] border border-[#FFD700]/30 mb-3 overflow-x-auto shadow-inner">{`<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>`}</pre>
          <p className="text-[#F4E2D8] mb-2">
            Here, <span className="font-mono">&lt;li&gt;</span> elements are
            nested inside a <span className="font-mono">&lt;ul&gt;</span>{" "}
            (unordered list) element.
          </p>
          <p className="text-[#FFD700] font-semibold mb-1">
            Example of an element that cannot be nested:
          </p>
          <pre className="bg-[#232946]/80 rounded p-3 text-base text-[#FFD700] border border-[#FFD700]/30 mb-3 overflow-x-auto shadow-inner">{`<p>This is a paragraph <p>This is not allowed!</p></p>`}</pre>
          <p className="text-[#F4E2D8]">
            You <span className="text-[#FFD700] font-semibold">cannot</span>{" "}
            nest a <span className="font-mono">&lt;p&gt;</span> element inside
            another <span className="font-mono">&lt;p&gt;</span> element. Some
            elements, like <span className="font-mono">&lt;p&gt;</span> and{" "}
            <span className="font-mono">&lt;h1&gt;</span>, cannot contain
            block-level elements or themselves.
          </p>
        </div>
      </section>
      {/* Navigation Links */}
      <div className="flex justify-between items-center mt-10">
        <a
          href="/tech-journeys/html/basics"
          className="px-4 py-2 rounded bg-gradient-to-r from-[#FFD700] to-[#F4E2D8] text-[#232946] font-bold shadow hover:from-[#F4E2D8] hover:to-[#FFD700] border border-[#FFD700]/60 transition-colors"
        >
          ← Previous
        </a>
        <a
          href="/tech-journeys/html/attributes"
          className="px-4 py-2 rounded bg-gradient-to-r from-[#FFD700] to-[#F4E2D8] text-[#232946] font-bold shadow hover:from-[#F4E2D8] hover:to-[#FFD700] border border-[#FFD700]/60 transition-colors"
        >
          Next →
        </a>
      </div>
    </>
  );
}
