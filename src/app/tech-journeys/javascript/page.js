import React from "react";
import Header from "../../../components/Header";

export default function JavascriptHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181C2B] via-[#232946] to-[#181C2B]">
      <Header />
      <main className="max-w-3xl mx-auto py-14 px-4 flex flex-col items-center justify-center">
        <h1
          className="text-4xl font-extrabold mb-10 text-center text-[#FFD700] drop-shadow-lg tracking-wide"
          style={{ textShadow: "0 2px 16px #232946" }}
        >
          JavaScript Journey
        </h1>
        <div className="w-full h-40 bg-gradient-to-r from-[#FFD700]/10 to-[#F4E2D8]/20 flex items-center justify-center rounded-xl mb-8 border border-[#FFD700]/20">
          <span className="text-[#FFD700]/60">[WIP]</span>
        </div>
        <p className="text-lg text-[#F4E2D8]">
          Work in progress. Content coming soon!
        </p>
      </main>
    </div>
  );
}
