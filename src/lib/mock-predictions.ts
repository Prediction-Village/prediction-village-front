export interface PredictionHistoryPoint {
  date: string; // Using string for date for simplicity in mock data, e.g., "YYYY-MM-DD"
  value: number; // Represents probability for Yes/No, or chance for a specific option in MultipleChoice
}

export interface BasePrediction {
  id: string;
  title: string;
  description: string;
  category: string; // e.g., "Sports", "Politics", "Technology"
  endDate: string; // e.g., "YYYY-MM-DD"
}

export interface YesNoPrediction extends BasePrediction {
  type: "YES_NO";
  probability: number;
  change24h: {
    value: number;
    positive: boolean;
  };
  history: PredictionHistoryPoint[];
}

export type MultipleChoiceOption = {
  id: string;
  label: string;
  chance: number;
};

export interface MultipleChoiceHistoryPoint {
  date: string;
  optionChances: Record<string, number>;
}

export interface MultipleChoicePrediction extends BasePrediction {
  type: "MULTIPLE_CHOICE";
  options: MultipleChoiceOption[];
  history: MultipleChoiceHistoryPoint[];
}

export type Prediction = YesNoPrediction | MultipleChoicePrediction;

export const mockPredictions: Prediction[] = [
  {
    id: "1",
    type: "YES_NO",
    title: "Humans Townhall Upgrade",
    description:
      "Will the Human townhall upgrade to level 3 before block #12345?",
    category: "Humans",
    endDate: "2025-12-31",
    probability: 68,
    change24h: {
      value: 5.2,
      positive: true,
    },
    history: [
      { date: "2025-05-01", value: 60 },
      { date: "2025-05-15", value: 62 },
      { date: "2025-05-26", value: 68 },
    ],
  },
  {
    id: "2",
    type: "YES_NO",
    title: "Orks Win Current Game",
    description: "Will the Orks win the current battle on the bridge?",
    category: "Orks",
    endDate: "2025-12-31",
    probability: 42,
    change24h: {
      value: -3.8,
      positive: false,
    },
    history: [
      { date: "2025-05-01", value: 45 },
      { date: "2025-05-15", value: 44 },
      { date: "2025-05-26", value: 42 },
    ],
  },
  {
    id: "3",
    type: "MULTIPLE_CHOICE",
    title: "Next Building Upgrade",
    description: "Which building will be upgraded next in either village?",
    category: "Battles",
    endDate: "2025-12-31",
    options: [
      { id: "3-1", label: "Human Barracks", chance: 35 },
      { id: "3-2", label: "Ork Armory", chance: 28 },
      { id: "3-3", label: "Human Watchtower", chance: 22 },
    ],
    history: [
      {
        date: "2025-05-01",
        optionChances: { "3-1": 30, "3-2": 40, "3-3": 30 },
      },
      {
        date: "2025-05-15",
        optionChances: { "3-1": 33, "3-2": 35, "3-3": 32 },
      },
      {
        date: "2025-05-26",
        optionChances: { "3-1": 35, "3-2": 28, "3-3": 22 },
      },
    ],
  },
  {
    id: "4",
    type: "YES_NO",
    title: "Bridge Control",
    description: "Will Humans control the bridge by block #12500?",
    category: "Battles",
    endDate: "2025-12-31",
    probability: 51,
    change24h: {
      value: 1.2,
      positive: true,
    },
    history: [
      { date: "2025-05-01", value: 50 },
      { date: "2025-05-15", value: 50 },
      { date: "2025-05-26", value: 51 },
    ],
  },
  {
    id: "5",
    type: "MULTIPLE_CHOICE",
    title: "First to Level 5",
    description: "Which building will reach level 5 first?",
    category: "Both",
    endDate: "2025-12-31",
    options: [
      { id: "5-1", label: "Human Townhall", chance: 45 },
      { id: "5-2", label: "Ork Stronghold", chance: 40 },
      { id: "5-3", label: "Neither (Tie)", chance: 15 },
    ],
    history: [
      {
        date: "2025-05-01",
        optionChances: { "5-1": 40, "5-2": 45, "5-3": 15 },
      },
      {
        date: "2025-05-15",
        optionChances: { "5-1": 43, "5-2": 42, "5-3": 15 },
      },
      {
        date: "2025-05-26",
        optionChances: { "5-1": 45, "5-2": 40, "5-3": 15 },
      },
    ],
  },
  {
    id: "6",
    type: "YES_NO",
    title: "Ork Defense Upgrade",
    description: "Will Orks upgrade their defensive walls before block #13000?",
    category: "Orks",
    endDate: "2025-12-31",
    probability: 73,
    change24h: {
      value: 8.7,
      positive: true,
    },
    history: [
      { date: "2025-05-01", value: 65 },
      { date: "2025-05-15", value: 70 },
      { date: "2025-05-26", value: 73 },
    ],
  },
];
export function getPredictionById(id: string): Prediction | undefined {
  return mockPredictions.find((p) => p.id === id);
}
