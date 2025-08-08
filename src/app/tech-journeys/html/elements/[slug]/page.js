import htmlElementsContent from "@/data/htmlElementsContent.json";
import HtmlPlayground from "@/components/HtmlPlayground";
import Link from "next/link";
import Header from "@/components/Header";

export async function generateStaticParams() {
  return Object.keys(htmlElementsContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const data = htmlElementsContent[params.slug];
  return {
    title: data?.title || "HTML Element",
    description: data?.content?.[0] || "Learn about HTML elements.",
  };
}

export default function HtmlElementPage({ params }) {
  const data = htmlElementsContent[params.slug];
  if (!data) return <div className="p-8 text-red-500">Element not found.</div>;
  const keys = Object.keys(htmlElementsContent);
  const idx = keys.indexOf(params.slug);
  const prevSlug = idx > 0 ? keys[idx - 1] : null;
  const nextSlug = idx < keys.length - 1 ? keys[idx + 1] : null;
  const isFirst = idx === 0;
  const isLast = idx === keys.length - 1;
  const isHeadingPage = params.slug === "heading";
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181C2B] via-[#232946] to-[#181C2B]">
      <Header />
      <main className="max-w-5xl mx-auto py-10 px-4">
        <h1
          className="text-4xl font-extrabold mb-8 text-center text-[#FFD700] drop-shadow-lg tracking-wide"
          style={{ textShadow: "0 2px 16px #232946" }}
        >
          {data.heading}
        </h1>
        <h2 className="text-lg text-[#FFE9A7] mb-8 text-center font-medium">
          {data.subheading}
        </h2>
        <div className="bg-[#232946] border border-[#FFD700]/30 rounded-lg shadow-2xl p-8 mb-10">
          {data.content?.map((p, i) => (
            <p key={i} className="mb-4 text-lg text-[#FFE9A7]">
              {p}
            </p>
          ))}
          {data.note && (
            <div className="mt-6 bg-[#FFD700]/10 border-l-4 border-[#FFD700] rounded p-4">
              <span className="text-[#FFD700] font-semibold">{data.note}</span>
            </div>
          )}
        </div>
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-[#FFD700] mb-2">
            Examples
          </h3>
          <ul className="space-y-4">
            {data.examples?.map((ex, i) => (
              <li
                key={i}
                className="bg-[#181C2B] border border-[#FFD700]/20 rounded-lg p-4"
              >
                <div className="font-bold text-[#FFD700] mb-1">{ex.label}</div>
                {isHeadingPage && ex.label === "How Headings Look on Screen" ? (
                  <div className="bg-white rounded p-4 border border-[#FFD700]/10">
                    <div dangerouslySetInnerHTML={{ __html: ex.code }} />
                  </div>
                ) : (
                  <pre className="bg-[#232946] text-[#FFE9A7] rounded p-2 overflow-x-auto">
                    <code>{ex.code}</code>
                  </pre>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-[#FFD700] mb-2">
            Try it Yourself
          </h3>
          <div className={isHeadingPage ? "w-full max-w-5xl" : undefined}>
            <HtmlPlayground initialHtml={data.editor.initialHtml} />
          </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          {isFirst ? (
            <Link
              href="/tech-journeys/html/examples"
              className="px-4 py-2 rounded bg-gradient-to-r from-[#FFD700] to-[#F4E2D8] text-[#232946] font-bold shadow hover:from-[#F4E2D8] hover:to-[#FFD700] border border-[#FFD700]/60 transition-colors"
            >
              ← Previous
            </Link>
          ) : prevSlug ? (
            <Link
              href={`/tech-journeys/html/elements/${prevSlug}`}
              className="px-4 py-2 rounded bg-gradient-to-r from-[#FFD700] to-[#F4E2D8] text-[#232946] font-bold shadow hover:from-[#F4E2D8] hover:to-[#FFD700] border border-[#FFD700]/60 transition-colors"
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}
          {isLast ? (
            <Link
              href="/tech-journeys/html/quiz"
              className="px-4 py-2 rounded bg-gradient-to-r from-[#FFD700] to-[#F4E2D8] text-[#232946] font-bold shadow hover:from-[#F4E2D8] hover:to-[#FFD700] border border-[#FFD700]/60 transition-colors"
            >
              Next →
            </Link>
          ) : nextSlug ? (
            <Link
              href={`/tech-journeys/html/elements/${nextSlug}`}
              className="px-4 py-2 rounded bg-gradient-to-r from-[#FFD700] to-[#F4E2D8] text-[#232946] font-bold shadow hover:from-[#F4E2D8] hover:to-[#FFD700] border border-[#FFD700]/60 transition-colors"
            >
              Next →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>
    </div>
  );
}
