/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

export default function HtmlAttributes() {
  return (
    <>
      <h1
        className="text-4xl font-extrabold mb-10 text-center text-[#FFD700] drop-shadow-lg tracking-wide"
        style={{ textShadow: "0 2px 16px #232946" }}
      >
        HTML Attributes
      </h1>
      <section className="mb-10">
        <p className="text-lg text-[#F4E2D8] text-center mb-6">
          HTML elements can have{" "}
          <span className="text-[#FFD700] font-semibold">attributes</span> that
          provide extra information about the element — like adding labels,
          colors, or settings. They’re written inside the opening tag and
          usually come in a <span className="font-mono">name="value"</span>{" "}
          format.
        </p>
        <div className="bg-gradient-to-br from-[#232946] to-[#181C2B] rounded-xl shadow-lg p-6 border border-[#FFD700]/20 mb-6">
          <p className="text-[#FFD700] font-semibold mb-2">
            🔹 Where Do Attributes Go?
          </p>
          <p className="text-[#F4E2D8] mb-4">
            Attributes live inside the opening tag, right after the element’s
            name.
          </p>
          <pre className="bg-[#232946]/80 rounded p-3 text-base text-[#FFD700] border border-[#FFD700]/30 mb-2 overflow-x-auto shadow-inner">{`<p title="About Amit">I am Amit Sahani</p>`}</pre>
          <ul className="list-disc pl-6 text-[#F4E2D8] space-y-1">
            <li>
              <span className="font-mono">title</span> is the attribute’s name.
            </li>
            <li>
              <span className="font-mono">"About Amit"</span> is the attribute’s
              value.
            </li>
            <li>
              When someone hovers over the paragraph, the text "About Amit" will
              appear as a tooltip.
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-[#232946] to-[#181C2B] rounded-xl shadow-lg p-6 border border-[#FFD700]/20 mb-6">
          <p className="text-[#FFD700] font-semibold mb-2">
            🔹 Why Use Attributes?
          </p>
          <ul className="list-disc pl-6 text-[#F4E2D8] space-y-1">
            <li>
              Add identifiers (<span className="font-mono">id</span> or{" "}
              <span className="font-mono">class</span>) for styling or
              scripting.
            </li>
            <li>
              Define links (<span className="font-mono">href</span> in{" "}
              <span className="font-mono">&lt;a&gt;</span>).
            </li>
            <li>
              Specify images (<span className="font-mono">src</span> in{" "}
              <span className="font-mono">&lt;img&gt;</span>).
            </li>
            <li>
              Set behavior (e.g.,{" "}
              <span className="font-mono">target="_blank"</span> to open links
              in a new tab).
            </li>
            <li>
              Control input fields (
              <span className="font-mono">type="text"</span>,{" "}
              <span className="font-mono">placeholder="Enter your name"</span>
              ).
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-[#232946] to-[#181C2B] rounded-xl shadow-lg p-6 border border-[#FFD700]/20 mb-6 overflow-x-auto">
          <p className="text-[#FFD700] font-semibold mb-2">
            🔹 Common HTML Attributes
          </p>
          <table className="min-w-full text-left text-[#F4E2D8] border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="pr-4 text-[#FFD700]">Attribute</th>
                <th className="pr-4 text-[#FFD700]">Where Used</th>
                <th className="text-[#FFD700]">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-4 font-mono">id</td>
                <td className="pr-4">Any element</td>
                <td>Unique identifier for CSS or JavaScript</td>
              </tr>
              <tr>
                <td className="pr-4 font-mono">class</td>
                <td className="pr-4">Any element</td>
                <td>Groups elements for styling or scripting</td>
              </tr>
              <tr>
                <td className="pr-4 font-mono">href</td>
                <td className="pr-4">&lt;a&gt;</td>
                <td>Link destination</td>
              </tr>
              <tr>
                <td className="pr-4 font-mono">src</td>
                <td className="pr-4">&lt;img&gt;, &lt;script&gt;</td>
                <td>Path to an image or script</td>
              </tr>
              <tr>
                <td className="pr-4 font-mono">alt</td>
                <td className="pr-4">&lt;img&gt;</td>
                <td>Alternative text for accessibility</td>
              </tr>
              <tr>
                <td className="pr-4 font-mono">title</td>
                <td className="pr-4">Most elements</td>
                <td>Tooltip text</td>
              </tr>
              <tr>
                <td className="pr-4 font-mono">style</td>
                <td className="pr-4">Any element</td>
                <td>Inline CSS styling</td>
              </tr>
              <tr>
                <td className="pr-4 font-mono">disabled</td>
                <td className="pr-4">Form elements</td>
                <td>Disables input fields or buttons</td>
              </tr>
              <tr>
                <td className="pr-4 font-mono">target</td>
                <td className="pr-4">&lt;a&gt;</td>
                <td>How the link should open</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-gradient-to-br from-[#232946] to-[#181C2B] rounded-xl shadow-lg p-6 border border-[#FFD700]/20 mb-6">
          <p className="text-[#FFD700] font-semibold mb-2">
            🔹 Examples of Attributes in Action
          </p>
          <p className="text-[#F4E2D8] mb-1 font-semibold">
            1. Image with description
          </p>
          <pre className="bg-[#232946]/80 rounded p-3 text-base text-[#FFD700] border border-[#FFD700]/30 mb-2 overflow-x-auto shadow-inner">{`<img src="photo.jpg" alt="A beautiful sunset" width="400">`}</pre>
          <ul className="list-disc pl-6 text-[#F4E2D8] mb-4 space-y-1">
            <li>
              <span className="font-mono">src</span> → tells browser where to
              find the image.
            </li>
            <li>
              <span className="font-mono">alt</span> → describes the image
              (important for accessibility).
            </li>
            <li>
              <span className="font-mono">width</span> → controls size.
            </li>
          </ul>
          <p className="text-[#F4E2D8] mb-1 font-semibold">
            2. Link that opens in a new tab
          </p>
          <pre className="bg-[#232946]/80 rounded p-3 text-base text-[#FFD700] border border-[#FFD700]/30 mb-2 overflow-x-auto shadow-inner">{`<a href="https://example.com" target="_blank">Visit Example</a>`}</pre>
          <p className="text-[#F4E2D8] mb-4">
            Here, <span className="font-mono">href</span> sets the link
            destination, and <span className="font-mono">target="_blank"</span>{" "}
            opens it in a new tab.
          </p>
          <p className="text-[#F4E2D8] mb-1 font-semibold">
            3. Form input with placeholder
          </p>
          <pre className="bg-[#232946]/80 rounded p-3 text-base text-[#FFD700] border border-[#FFD700]/30 mb-2 overflow-x-auto shadow-inner">{`<input type="text" placeholder="Enter your name">`}</pre>
          <p className="text-[#F4E2D8]">
            Here, <span className="font-mono">type</span> sets the input type,
            and <span className="font-mono">placeholder</span> provides a hint
            for the user.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#232946] to-[#181C2B] rounded-xl shadow-lg p-6 border border-[#FFD700]/20 mb-6">
          <p className="text-[#FFD700] font-semibold mb-2">
            🔹 Types of Attributes
          </p>
          <ul className="list-disc pl-6 text-[#F4E2D8] mb-2">
            <li>
              <span className="text-[#FFD700] font-semibold">
                Global Attributes
              </span>{" "}
              – Can be used on any HTML element
              <br />
              <span className="text-[#F4E2D8]">
                Examples: <span className="font-mono">id</span>,{" "}
                <span className="font-mono">class</span>,{" "}
                <span className="font-mono">style</span>,{" "}
                <span className="font-mono">title</span>,{" "}
                <span className="font-mono">hidden</span>
              </span>
            </li>
            <li className="mt-2">
              <span className="text-[#FFD700] font-semibold">
                Element-specific Attributes
              </span>{" "}
              – Work only with certain elements
              <div className="mt-2 space-y-2">
                <div className="bg-[#232946]/60 rounded p-2">
                  <span className="font-mono text-[#FFD700]">src</span>,{" "}
                  <span className="font-mono text-[#FFD700]">alt</span>
                  <span className="text-[#F4E2D8]"> → only for </span>
                  <span className="font-mono text-[#FFD700]">&lt;img&gt;</span>
                </div>
                <div className="bg-[#232946]/60 rounded p-2">
                  <span className="font-mono text-[#FFD700]">href</span>,{" "}
                  <span className="font-mono text-[#FFD700]">target</span>
                  <span className="text-[#F4E2D8]"> → only for </span>
                  <span className="font-mono text-[#FFD700]">&lt;a&gt;</span>
                </div>
                <div className="bg-[#232946]/60 rounded p-2">
                  <span className="font-mono text-[#FFD700]">type</span>,{" "}
                  <span className="font-mono text-[#FFD700]">placeholder</span>,{" "}
                  <span className="font-mono text-[#FFD700]">value</span>
                  <span className="text-[#F4E2D8]"> → only for </span>
                  <span className="font-mono text-[#FFD700]">
                    &lt;input&gt;
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="text-[#FFD700]/80 text-lg text-center mt-8">
          You'll be working with lots of attributes in later sections of this
          course!
        </div>
      </section>
      {/* Navigation Links */}
      <div className="flex justify-between items-center mt-10">
        <Link
          href="/tech-journeys/html/elements"
          className="px-4 py-2 rounded bg-gradient-to-r from-[#FFD700] to-[#F4E2D8] text-[#232946] font-bold shadow hover:from-[#F4E2D8] hover:to-[#FFD700] border border-[#FFD700]/60 transition-colors"
        >
          ← Previous
        </Link>
        <Link
          href="/tech-journeys/html/examples"
          className="px-4 py-2 rounded bg-gradient-to-r from-[#FFD700] to-[#F4E2D8] text-[#232946] font-bold shadow hover:from-[#F4E2D8] hover:to-[#FFD700] border border-[#FFD700]/60 transition-colors"
        >
          Next →
        </Link>
      </div>
    </>
  );
}
