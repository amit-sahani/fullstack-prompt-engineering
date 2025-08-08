import React from "react";
import Header from "../../../../components/Header";

export default function HtmlStructure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181C2B] via-[#232946] to-[#181C2B]">
      <Header />
      <main className="max-w-3xl mx-auto py-14 px-4">
        <h1
          className="text-4xl font-extrabold mb-10 text-center text-[#FFD700] drop-shadow-lg tracking-wide"
          style={{ textShadow: "0 2px 16px #232946" }}
        >
          HTML Structure
        </h1>
        <p className="text-lg text-[#F4E2D8] text-center">
          Understand the structure of HTML documents, including head, body, and
          common tags.
        </p>
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
      </main>
    </div>
  );
}
