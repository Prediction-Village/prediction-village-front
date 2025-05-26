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
  history: PredictionHistoryPoint[];
}

export interface YesNoPrediction extends BasePrediction {
  type: "YES_NO";
  probability: number; // Current probability for "Yes", 0-100
  change24h: { // Change in the last 24 hours
    value: number;
    positive: boolean;
  };
}

export interface MultipleChoiceOption {
  id: string;
  label: string;
  chance: number; // Current chance for this option, 0-100
}

export interface MultipleChoicePrediction extends BasePrediction {
  type: "MULTIPLE_CHOICE";
  options: MultipleChoiceOption[];
}

export type Prediction = YesNoPrediction | MultipleChoicePrediction;

export const mockPredictions: Prediction[] = [
  {
    id: "1",
    type: "YES_NO",
    title: "Will AI achieve AGI by 2030?",
    description: "Predict whether Artificial General Intelligence will be successfully demonstrated by the end of 2030.",
    category: "Technology",
    endDate: "2030-12-31",
    probability: 65,
    change24h: {
      value: 2.5,
      positive: true,
    },
    history: [
      { date: "2024-01-01", value: 30 },
      { date: "2024-02-01", value: 35 },
      { date: "2024-03-01", value: 45 },
      { date: "2024-04-01", value: 50 },
      { date: "2024-05-01", value: 60 },
      { date: "2024-06-01", value: 62.5 },
      { date: "2024-07-01", value: 65 },
    ],
  },
  {
    id: "2",
    type: "YES_NO",
    title: "Will the next World Cup winner be from South America?",
    description: "Predict if a South American national team will win the upcoming FIFA World Cup.",
    category: "Sports",
    endDate: "2026-07-19",
    probability: 40,
    change24h: {
      value: 1.0,
      positive: false,
    },
    history: [
      { date: "2024-01-01", value: 45 },
      { date: "2024-02-01", value: 42 },
      { date: "2024-03-01", value: 40 },
      { date: "2024-04-01", value: 38 },
      { date: "2024-05-01", value: 41 },
      { date: "2024-06-01", value: 40 },
    ],
  },
  {
    id: "3",
    type: "MULTIPLE_CHOICE",
    title: "Which company will be the first to land humans on Mars?",
    description: "Predict which entity will be the first to successfully land a crewed mission on Mars.",
    category: "Space Exploration",
    endDate: "2040-01-01",
    options: [
      { id: "3-1", label: "SpaceX", chance: 70 },
      { id: "3-2", label: "Blue Origin", chance: 15 },
      { id: "3-3", label: "NASA (or state agency)", chance: 10 },
      { id: "3-4", label: "Other", chance: 5 },
    ],
    // For MC, history could track the 'leading' option or a specific option.
    // Here, let's track SpaceX's chance.
    history: [
      { date: "2024-01-01", value: 50 }, // SpaceX chance
      { date: "2024-02-01", value: 55 },
      { date: "2024-03-01", value: 60 },
      { date: "2024-04-01", value: 65 },
      { date: "2024-05-01", value: 70 },
    ],
  },
  {
    id: "4",
    type: "MULTIPLE_CHOICE",
    title: "What will be the dominant web browser in 2025?",
    description: "Predict the web browser with the highest global market share at the start of 2025.",
    category: "Technology",
    endDate: "2025-01-01",
    options: [
      { id: "4-1", label: "Google Chrome", chance: 60 },
      { id: "4-2", label: "Mozilla Firefox", chance: 15 },
      { id: "4-3", label: "Microsoft Edge", chance: 20 },
      { id: "4-4", label: "Safari", chance: 5 },
    ],
    // History for Google Chrome's chance
    history: [
      { date: "2023-01-01", value: 65 },
      { date: "2023-04-01", value: 63 },
      { date: "2023-07-01", value: 62 },
      { date: "2023-10-01", value: 60 },
      { date: "2024-01-01", value: 60 },
    ],
  },
];

// Function to get a prediction by ID (optional, but helpful)
export function getPredictionById(id: string): Prediction | undefined {
  return mockPredictions.find(p => p.id === id);
}
