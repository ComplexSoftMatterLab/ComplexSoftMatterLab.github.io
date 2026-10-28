export interface NewsItem {
  date: string;
  category: string;
  title: string;
  body?: string;
  url?: string;
}

export const news: NewsItem[] = [
  {
    date: "2026-10-07",
    category: "Conference",
    title: "国際会議 the 7th International Conference on Molecular Simulation (ICMS 2026) で招待講演を行いました",
    body: "インド・ベンガルールで開催された国際会議 ICMS2026 において、金教授が招待講演を行いました。",
  },
  {
    date: "2026-10-01",
    category: "Lab",
    title: "複雑ソフトマター研究室が始動します",
    body: "大阪大学大学院基礎工学研究科で、複雑ソフトマター研究室が始動します。",
  },
];
