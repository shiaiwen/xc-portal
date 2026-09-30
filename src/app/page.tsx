import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "三国杀打小抄下载",
  description: "三国杀打小抄，完全免费，持续更新，代码开源。",
};

const points = [
  { title: "完全免费", text: "小抄下载不收费，也不用注册。" },
  { title: "持续更新", text: "规则和武将有变动时，文件会跟着改。" },
  { title: "代码开源", text: "网站代码公开，页面和文案都能自己改。" },
];

export default function Home() {
  return (
    <main>
      <section className="relative isolate min-h-[32rem] overflow-hidden">
        <img
          src="/bg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/62" />
        <div className="relative mx-auto flex max-w-5xl flex-col justify-end px-4 py-16 text-paper sm:px-6 sm:py-24">
          <p className="text-sm text-[#f0c9a0]">下载说明</p>
          <h1 className="mt-2 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
            三国杀打小抄
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-paper/85">
            身份、国战、武将技能的打小抄，选好模式再下载。
          </p>
          <ul className="mt-8 grid max-w-lg gap-4 sm:grid-cols-3">
            {points.map((point, index) => (
              <li key={point.title}>
                <p className="text-sm text-[#f0c9a0]">
                  {index + 1}. {point.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-paper/90">{point.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/downloads"
              className="inline-flex items-center justify-center bg-[#f0c9a0] px-5 py-3 text-sm text-ink"
            >
              去下载
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-paper/40 px-5 py-3 text-sm"
            >
              关于我
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
