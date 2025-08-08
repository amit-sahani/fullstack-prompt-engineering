"use client";
import React from "react";
import Header from "../../../components/Header";

export default function HtmlHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181C2B] via-[#232946] to-[#181C2B] transition-colors duration-300">
      <Header />
      <main className="max-w-3xl mx-auto py-14 px-4">
        <h1
          className="text-4xl font-extrabold mb-10 text-center text-[#FFD700] drop-shadow-lg tracking-wide"
          style={{ textShadow: "0 2px 16px #232946" }}
        >
          HTML: Introduction
        </h1>
        <div className="w-full h-48 bg-gradient-to-r from-[#FFD700]/10 to-[#F4E2D8]/20 flex items-center justify-center rounded-xl mb-8 border border-[#FFD700]/20">
          <span className="text-[#FFD700]/60 text-lg font-semibold">
            [HTML Image Placeholder]
          </span>
        </div>
        <section className="mb-10 bg-gradient-to-br from-[#232946] to-[#181C2B] rounded-xl shadow-2xl p-8 border-2 border-[#FFD700]/30">
          <h2 className="text-2xl font-bold mb-3 text-[#FFD700]">
            What is HTML?
          </h2>
          <p className="text-[#F4E2D8] text-base leading-relaxed">
            HTML (HyperText Markup Language) is the standard markup language for
            creating web pages and web applications. It provides the basic
            structure of sites, which is enhanced and modified by other
            technologies like CSS and JavaScript.
          </p>
        </section>
        <section className="mb-10 bg-gradient-to-br from-[#232946] to-[#181C2B] rounded-xl shadow-2xl p-8 border-2 border-[#FFD700]/30">
          <h2 className="text-2xl font-bold mb-3 text-[#FFD700]">History</h2>
          <p className="text-[#F4E2D8] text-base leading-relaxed">
            HTML was created by Tim Berners-Lee in 1991. It has evolved through
            several versions, with HTML5 being the latest standard, providing
            new features for modern web development.
          </p>
        </section>
        <section className="mb-10 bg-gradient-to-br from-[#232946] to-[#181C2B] rounded-xl shadow-2xl p-8 border-2 border-[#FFD700]/30">
          <h2 className="text-2xl font-bold mb-3 text-[#FFD700]">
            Why and When is HTML Used?
          </h2>
          <p className="text-[#F4E2D8] text-base leading-relaxed">
            HTML is used to structure content on the web. Every website uses
            HTML to define headings, paragraphs, links, images, and other
            elements. It is the foundation of all web pages.
          </p>
        </section>
        {/* Navigation Links */}
        <div className="flex justify-between items-center mt-10">
          <button
            className="px-4 py-2 rounded bg-gradient-to-r from-[#FFD700] to-[#F4E2D8] text-[#232946] font-bold shadow border border-[#FFD700]/60 opacity-60 cursor-not-allowed"
            disabled
          >
            ← Previous
          </button>
          <a
            href="/tech-journeys/html/basics"
            className="px-4 py-2 rounded bg-gradient-to-r from-[#FFD700] to-[#F4E2D8] text-[#232946] font-bold shadow hover:from-[#F4E2D8] hover:to-[#FFD700] border border-[#FFD700]/60 transition-colors"
          >
            Next →
          </a>
        </div>
      </main>
    </div>
  );
}
