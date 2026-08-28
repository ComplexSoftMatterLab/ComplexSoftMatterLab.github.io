export type MemberCategory =
  | "faculty"
  | "doctoral"
  | "masters"
  | "undergraduate"
  | "former";

export interface Member {
  category: MemberCategory;
  position: string;
  name: string;
  kana: string;
  email?: string;
  researchTopic?: string;
  profileUrl?: string;
  scholarUrl?: string;
  photo?: string;
}

export const people: Member[] = [
  {
    category: "faculty",
    position: "教授 / Professor (2026.10.1-)",
    name: "金 鋼",
    kana: "きん こう",
    email: "kk",
    profileUrl: "https://researchmap.jp/kangkim",
    scholarUrl: "https://scholar.google.com/citations?user=VByf5OsAAAAJ",
    photo: "/images/people/kk.png",
  },

  {
    category: "doctoral",
    position: "D1",
    name: "吉川 航平",
    kana: "よしかわ こうへい",
    email: "yoshikawa-ko",
    researchTopic: "液体とガラスの機械学習による構造特徴量の抽出",
  },

  {
    category: "masters",
    position: "M2",
    name: "山内 一輝",
    kana: "やまうち かずき",
    email: "k.yamauchi",
    researchTopic: "機械学習による絡み合い高分子の運動性予測",
  },

  {
    category: "masters",
    position: "M1",
    name: "辻野 圭信",
    kana: "つじの けいしん",
    email: "tsujino-ke",
    researchTopic: "絡み合い高分子の非線形レオロジー",
  },
];
