import Header from "../components/Header";

const techSections = [
  {
    name: "HTML",
    description:
      "HTML (HyperText Markup Language) is the standard markup language for creating web pages.",
    path: "/tech-journeys/html",
  },
  {
    name: "CSS",
    description:
      "CSS (Cascading Style Sheets) is used to style and layout web pages.",
    path: "/tech-journeys/css",
  },
  {
    name: "JavaScript",
    description:
      "JavaScript is a versatile programming language for web development.",
    path: "/tech-journeys/javascript",
  },
  {
    name: "React",
    description: "React is a JavaScript library for building user interfaces.",
    path: "/tech-journeys/react",
  },
  {
    name: "NodeJS",
    description: "Node.js is a JavaScript runtime for server-side development.",
    path: "/tech-journeys/nodejs",
  },
  {
    name: "ExpressJS",
    description: "Express.js is a web application framework for Node.js.",
    path: "/tech-journeys/expressjs",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181C2B] via-[#232946] to-[#181C2B]">
      <Header />
      <main className="max-w-4xl mx-auto py-14 px-4">
        <h1
          className="text-4xl font-extrabold mb-10 text-center text-[#FFD700] drop-shadow-lg tracking-wide"
          style={{ textShadow: "0 2px 16px #232946" }}
        >
          Welcome to Fullstack Learning
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techSections.map((tech) => (
            <div
              key={tech.name}
              className="rounded-xl shadow-2xl p-8 bg-gradient-to-br from-[#232946] to-[#181C2B] border-2 border-[#FFD700]/30 flex flex-col gap-4"
            >
              {/* Placeholder for tech image */}
              <div className="w-full h-32 bg-gradient-to-r from-[#FFD700]/10 to-[#F4E2D8]/20 flex items-center justify-center rounded mb-2 border border-[#FFD700]/20">
                <span className="text-[#FFD700]/60">
                  [Image for {tech.name}]
                </span>
              </div>
              <h2 className="text-2xl font-bold text-[#FFD700] drop-shadow">
                {tech.name}
              </h2>
              <p className="text-[#F4E2D8]">{tech.description}</p>
              <a
                href={tech.path}
                className="mt-auto text-blue-600 hover:underline"
              >
                Explore {tech.name} Journey →
              </a>
            </div>
          ))}
        </div>
      </main>
      <footer className="text-center py-6 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-12">
        &copy; {new Date().getFullYear()} Fullstack Learning. All rights
        reserved.
      </footer>
    </div>
  );
}
