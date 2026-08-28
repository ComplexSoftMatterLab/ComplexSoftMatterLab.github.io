export interface NewsItem {
  date: string;
  category: string;
  title: string;
  body?: string;
  url?: string;
}

export const news: NewsItem[] = [
  {
    date: "2026-10-01",
    category: "Lab",
    title: "複雑ソフトマター研究室が始動します",
    body: "大阪大学大学院基礎工学研究科で、複雑ソフトマター研究室が始動します。",
  },
];
