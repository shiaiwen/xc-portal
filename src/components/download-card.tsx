import type { Cheatsheet } from "@/lib/cheatsheets";

export function DownloadCard({ item }: { item: Cheatsheet }) {
  return (
    <article className="flex h-full flex-col border border-ink/15 bg-card p-5">
      <div className="mb-3 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="bg-accent/10 px-2 py-0.5 text-xs text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-serif text-xl text-ink">{item.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-ink/70">{item.summary}</p>
      <dl className="mt-4 grid grid-cols-3 gap-2 text-xs text-ink/55">
        <div>
          <dt>版本</dt>
          <dd className="mt-0.5 text-ink">{item.version}</dd>
        </div>
        <div>
          <dt>格式</dt>
          <dd className="mt-0.5 text-ink">{item.format}</dd>
        </div>
        <div>
          <dt>更新</dt>
          <dd className="mt-0.5 text-ink">{item.updated}</dd>
        </div>
      </dl>
      <a
        href={item.file}
        download
        className="mt-5 inline-flex items-center justify-center bg-ink px-4 py-2.5 text-sm text-paper transition hover:bg-accent"
      >
        下载 {item.size}
      </a>
    </article>
  );
}
