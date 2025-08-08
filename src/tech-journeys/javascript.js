// ...existing code...
import React from "react";
import Header from "../../components/Header";

export default function JavascriptJourney() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">JavaScript Journey</h1>
        <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded mb-6">
          <span className="text-gray-400">[JavaScript Image Placeholder]</span>
        </div>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p>
            JavaScript is a versatile programming language for web development.
            In this journey, you'll learn about syntax, DOM manipulation, and
            ES6+ features.
          </p>
        </section>
        {/* Add more sections/topics as needed */}
      </main>
    </div>
  );
}
// ...existing code...
