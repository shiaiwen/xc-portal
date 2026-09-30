export type Cheatsheet = {
  slug: string;
  title: string;
  summary: string;
  version: string;
  format: string;
  file: string;
  updated: string;
  size: string;
  tags: string[];
};

export const cheatsheets: Cheatsheet[] = [
  {
    slug: "identity",
    title: "身份场",
    summary: "主公、忠臣、反贼、内奸的常见出牌顺序，适合打印后放在手边。",
    version: "新版",
    format: "TXT",
    file: "/downloads/identity.txt",
    updated: "2026-09-30",
    size: "1 KB",
    tags: ["身份"],
  },
  {
    slug: "guozhan",
    title: "国战",
    summary: "势力、珠联璧合和常见回合节奏，按桌面位置整理。",
    version: "新版",
    format: "TXT",
    file: "/downloads/guozhan.txt",
    updated: "2026-09-30",
    size: "1 KB",
    tags: ["国战"],
  },
  {
    slug: "generals",
    title: "武将技能",
    summary: "按势力列出常看的技能名和一句触发时机，方便对局时翻。",
    version: "新版",
    format: "TXT",
    file: "/downloads/generals.txt",
    updated: "2026-09-30",
    size: "1 KB",
    tags: ["武将"],
  },
];

export function getCheatsheet(slug: string) {
  return cheatsheets.find((item) => item.slug === slug);
}
