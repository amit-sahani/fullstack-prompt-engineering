"use client";
import React, { useState } from "react";

export default function HtmlPlayground({ initialHtml: initialHtmlProp }) {
  const initialHtml =
    initialHtmlProp ||
    `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>HTML Playground</title>\n  </head>\n  <body>\n    <h1 title=\"Welcome\">Hello, <span style=\"color: #FFD700\">World</span>!</h1>\n    <p id=\"desc\">This is a <b>live</b> HTML playground.</p>\n  </body>\n</html>`;
  const [html, setHtml] = useState(initialHtml);
  const [editMode, setEditMode] = useState(null); // 'html' | null
  const [tempHtml, setTempHtml] = useState(initialHtml);
  const [device, setDevice] = useState("web");
  const [divider, setDivider] = useState(50); // percent width for left panel

  // Device viewport sizes as percentage of container (mock, not real device)
  const deviceStyles = {
    mobile: { width: "45%", height: "75%" }, // Increased size for mobile
    tab: { width: "55%", height: "75%" },
    web: { width: "90%", height: "90%" },
  };

  // Drag handler for resizing
  function handleDrag(e) {
    e.preventDefault();
    const startX = e.clientX;
    const startDivider = divider;
    function onMove(ev) {
      const dx = ev.clientX - startX;
      const container = document.getElementById("playground-container");
      if (!container) return;
      const width = container.offsetWidth;
      let percent = (((startDivider / 100) * width + dx) / width) * 100;
      percent = Math.max(20, Math.min(80, percent));
      setDivider(percent);
    }
    function onUp() {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }

  // Fix: Always sync tempHtml with editMode
  React.useEffect(() => {
    if (editMode === "html") {
      setTempHtml(html);
    }
  }, [editMode, html]);

  function handleRun() {
    setHtml(tempHtml);
    setEditMode(null);
  }
  function handleReset() {
    setHtml(initialHtml);
    setTempHtml(initialHtml);
    setEditMode(null);
  }

  // Elegant, higher-contrast syntax highlighting for HTML
  function highlightHtml(code) {
    // Use a single whitish gold color for everything, no spans
    return code;
  }

  function renderEditor() {
    if (editMode === "html") {
      return (
        <textarea
          className="w-full h-[400px] bg-[#181C2B] text-[#FFD700] font-mono rounded-lg p-4 border-2 border-[#FFD700]/30 resize-none focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          value={tempHtml}
          onChange={(e) => setTempHtml(e.target.value)}
        />
      );
    } else {
      // Escape HTML for safe rendering, but do not double-escape < and >
      let escaped = html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      // No highlighting, just render all as one color
      return (
        <pre
          className="w-full h-[400px] bg-[#181C2B] text-[#FFE9A7] font-mono rounded-lg p-4 border-2 border-[#FFD700]/30 overflow-x-auto select-text whitespace-pre-wrap break-words"
          style={{ color: "#FFE9A7" }}
          dangerouslySetInnerHTML={{ __html: escaped }}
        />
      );
    }
  }

  return (
    <div className="w-full">
      <div
        id="playground-container"
        className="w-full flex flex-row gap-0 relative rounded-xl overflow-hidden"
        style={{ minHeight: 500, height: "min(70vh, 700px)", maxHeight: 700 }}
      >
        {/* Left: Editor */}
        <div
          className="bg-gradient-to-br from-[#232946] to-[#181C2B] shadow-2xl p-8 border-2 border-[#FFD700]/30 flex flex-col"
          style={{
            width: `${divider}%`,
            minWidth: 200,
            maxWidth: "80%",
            boxSizing: "border-box",
          }}
        >
          <div className="flex gap-2 mb-4 flex-wrap">
            <button
              className={`px-3 py-1 rounded text-xs font-bold border border-[#FFD700]/60 bg-[#181C2B] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#232946] transition-colors ${
                editMode === "html" ? "ring-2 ring-[#FFD700]" : ""
              }`}
              onClick={() => setEditMode(editMode === "html" ? null : "html")}
              title="Edit the full HTML code"
            >
              Edit HTML
            </button>
            <button
              className="px-3 py-1 rounded text-xs font-bold border border-[#FFD700]/60 bg-[#232946] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#232946] transition-colors"
              onClick={handleRun}
              title="Run the code and update the output"
              disabled={editMode === null}
            >
              Run
            </button>
            <button
              className="px-3 py-1 rounded text-xs font-bold border border-[#FFD700]/60 bg-[#232946] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#232946] transition-colors"
              onClick={handleReset}
              title="Reset to original code"
            >
              Reset
            </button>
          </div>
          <div className="flex-1 flex flex-col">{renderEditor()}</div>
        </div>
        {/* Divider for resizing */}
        <div
          className="cursor-col-resize bg-[#FFD700]/40 hover:bg-[#FFD700]/70 transition-colors"
          style={{ width: 8, minWidth: 8, height: "100%", zIndex: 10 }}
          onMouseDown={handleDrag}
          title="Drag to resize panels"
        ></div>
        {/* Right: Browser viewport */}
        <div
          className="flex flex-col bg-gradient-to-br from-[#232946] to-[#181C2B] border-2 border-[#FFD700]/30 p-8"
          style={{
            width: `calc(${100 - divider}% - 8px)`,
            minWidth: 200,
            maxWidth: "80%",
            boxSizing: "border-box",
          }}
        >
          <div className="flex gap-2 mb-4">
            {Object.entries(deviceStyles).map(([key, size]) => (
              <button
                key={key}
                className={`px-3 py-1 rounded text-xs font-bold border border-[#FFD700]/60 bg-[#232946] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#232946] transition-colors ${
                  device === key ? "ring-2 ring-[#FFD700]" : ""
                }`}
                onClick={() => setDevice(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
          <div
            className="bg-white rounded-lg shadow-2xl border-4 border-[#FFD700]/40 flex items-center justify-center overflow-auto w-auto"
            style={{
              width: deviceStyles[device].width,
              height: deviceStyles[device].height,
              minWidth: 100,
              minHeight: 100,
              maxWidth: "100%",
              maxHeight: "60vh",
              transition: "width 0.3s, height 0.3s",
            }}
          >
            <iframe
              title="HTML Output"
              srcDoc={html}
              className="w-full h-full bg-white rounded"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
