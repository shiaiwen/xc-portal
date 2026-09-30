import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>{site.name}</p>
        <p>身份 · 国战 · 武将技能</p>
      </div>
    </footer>
  );
}
