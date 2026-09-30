import type { Metadata } from "next";
import { DownloadCard } from "@/components/download-card";
import { cheatsheets } from "@/lib/cheatsheets";

export const metadata: Metadata = {
  title: "下载",
  description: "下载三国杀身份场、国战和武将技能小抄。",
  alternates: { canonical: "/downloads" },
};

export default function DownloadsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="font-serif text-4xl">三国杀小抄文件</h1>
        <p className="mt-4 text-ink/70">
          和首页是同一批文件。点下载即可保存。换内容时覆盖 public/downloads 里的文件；要加新模式，再改 src/lib/cheatsheets.ts。
        </p>
      </header>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cheatsheets.map((item) => (
          <DownloadCard key={item.slug} item={item} />
        ))}
      </div>
    </main>
  );
}
