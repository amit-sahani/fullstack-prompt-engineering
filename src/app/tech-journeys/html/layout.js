import Header from "@/components/Header";
import VerticalNav from "@/components/VerticalNav";

export default function HtmlLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181C2B] via-[#232946] to-[#181C2B]">
      <Header />
      <div className="flex">
        <VerticalNav />
        <main className="flex-1 max-w-5xl mx-auto py-10 px-4">{children}</main>
      </div>
    </div>
  );
}
