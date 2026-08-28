export type PublicationType = "journal" | "review";

export interface Publication {
  year: number;
  type: PublicationType;
  authors: string[];
  title: string;
  journal: string;
  volume: string;
  pages: string;
  doi: string;
}

export const publications: Publication[] = [
  {
    year: 2026,
    type: "journal",
    authors: [
      "Haruki Hayano",
      "Akira Furukawa",
      "Kang Kim",
    ],
    title:
      "Neural-network-assisted Boltzmann approach for dilute microswimmer suspensions",
    journal: "Physical Review Research",
    volume: "8",
    pages: "L032029",
    doi: "10.1103/7565-51x2",
  },

  {
    year: 2026,
    type: "journal",
    authors: [
      "Kohei Yoshikawa",
      "Kokoro Shikata",
      "Kang Kim",
      "Nobuyuki Matubayasi",
    ],
    title:
      "Machine learning evaluation of structural descriptors for supercooled water",
    journal: "Communications Chemistry",
    volume: "9",
    pages: "217",
    doi: "10.1038/s42004-026-02097-1",
  },

  {
    year: 2026,
    type: "journal",
    authors: [
      "Atsuki Hashimoto",
      "Kokoro Shikata",
      "Kang Kim",
      "Nobuyuki Matubayasi",
    ],
    title:
      "Classification of interfacial water governed by water–polymer interactions in hydrated polymers: A molecular dynamics simulation study of ethylene-based and acrylate polymers",
    journal: "The Journal of Chemical Physics",
    volume: "164",
    pages: "204903",
    doi: "10.1063/5.0335731",
  },

  {
    year: 2026,
    type: "journal",
    authors: [
      "Kumpei Shiraishi",
      "Emi Minamitani",
      "Kang Kim",
    ],
    title:
      "Benchmarking thermostat algorithms in molecular dynamics simulations of a binary Lennard-Jones glass-former model",
    journal: "The Journal of Chemical Physics",
    volume: "164",
    pages: "164501",
    doi: "10.1063/5.0327041",
  },

  {
    year: 2026,
    type: "journal",
    authors: [
      "Kenji Okada",
      "Kazushi Okada",
      "Kei-ichi Okazaki",
      "Toshifumi Mori",
      "Kang Kim",
      "Nobuyuki Matubayasi",
    ],
    title:
      "Deep learning of committor for ion dissociation and interpretable analysis of solvent effects using atom-centered symmetry functions",
    journal: "The Journal of Chemical Physics",
    volume: "164",
    pages: "094101",
    doi: "10.1063/5.0315825",
  },

  {
    year: 2026,
    type: "journal",
    authors: [
      "Yuhi Sakamaki",
      "Shota Goto",
      "Kang Kim",
      "Nobuyuki Matubayasi",
    ],
    title:
      "Elucidation of the Correlation between Molecular Conformation and Shear Viscosity of Polymer Melts under Steady-State Shear Flow",
    journal: "Nihon Reoroji Gakkaishi",
    volume: "54",
    pages: "11–17",
    doi: "10.1678/rheology.54.11",
  },

  {
    year: 2026,
    type: "review",
    authors: [
      "Toshifumi Mori",
      "Kei-ichi Okazaki",
      "Kang Kim",
      "Nobuyuki Matubayasi",
    ],
    title:
      "Deep learning of committor and explainable artificial intelligence analysis for identifying reaction coordinates",
    journal: "Chemical Physics Reviews",
    volume: "7",
    pages: "031303",
    doi: "10.1063/5.0335684",
  },
];
