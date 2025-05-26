import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPredictionById } from "@/lib/mock-predictions";
import type {
  MultipleChoiceOption,
  MultipleChoicePrediction,
  YesNoPrediction,
} from "@/lib/mock-predictions";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface PredictionPageProps {
  predictionId: string;
}

export function PredictionPage({ predictionId }: PredictionPageProps) {
  const prediction = getPredictionById(predictionId);

  if (!prediction) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">Prediction not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-2xl font-bold">
              {prediction.title}
            </CardTitle>
            <Badge variant="outline">{prediction.category}</Badge>
          </div>
          <CardDescription>
            {prediction.description} <br />
            <span className="text-xs text-muted-foreground">
              Ends on: {new Date(prediction.endDate).toLocaleDateString()}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Prediction specific view */}
          {prediction.type === "YES_NO" && (
            <div id="prediction-yes-no-view" className="space-y-3">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">
                    {(prediction as YesNoPrediction).probability}%
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Current "Yes" Probability
                  </span>
                </div>
                <div
                  className={`flex items-center space-x-1 rounded-md px-3 py-1.5 text-sm font-medium ${
                    (prediction as YesNoPrediction).change24h.positive
                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                      : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                  }`}
                >
                  {(prediction as YesNoPrediction).change24h.positive ? (
                    <ArrowUpIcon className="h-4 w-4" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4" />
                  )}
                  <span>
                    {(prediction as YesNoPrediction).change24h.value}%
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">
                    24h
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="lg">
                  Predict No
                </Button>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Predict Yes
                </Button>
              </div>
            </div>
          )}

          {/* Multiple Choice specific view */}
          {prediction.type === "MULTIPLE_CHOICE" && (
            <div id="prediction-multiple-choice-view" className="space-y-3">
              <h3 className="text-md font-semibold text-muted-foreground">
                Choose an option:
              </h3>
              {(prediction as MultipleChoicePrediction).options.map(
                (option: MultipleChoiceOption) => (
                  <div
                    key={option.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{option.label}</span>
                      <span className="text-sm text-muted-foreground">
                        {option.chance}% chance
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        Predict No
                      </Button>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        Predict Yes
                      </Button>
                    </div>
                  </div>
                ),
              )}
            </div>
          )}

          {/* Prediction History Graph */}
          <div id="prediction-history-graph" className="mt-6 pt-4 border-t">
            <h3 className="text-xl font-semibold mb-4">Prediction History</h3>
            {prediction.history && prediction.history.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={
                    prediction.type === "MULTIPLE_CHOICE"
                      ? prediction.history.map((point) => {
                          const options = (
                            prediction as MultipleChoicePrediction
                          ).options;
                          const optionChancesByLabel: Record<string, number> =
                            {};
                          for (const opt of options) {
                            optionChancesByLabel[opt.label] =
                              point.optionChances[opt.id] ?? 0;
                          }
                          return {
                            date: point.date,
                            ...optionChancesByLabel,
                          };
                        })
                      : prediction.history
                  }
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      borderColor: "hsl(var(--border))",
                    }}
                    formatter={(value: number, name: string) => [
                      `${value}%`,
                      name,
                    ]}
                  />
                  <Legend />
                  {prediction.type === "YES_NO" ? (
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                      name="Yes Probability"
                    />
                  ) : (
                    (prediction as MultipleChoicePrediction).options.map(
                      (option, idx) => (
                        <Line
                          key={option.id}
                          type="monotone"
                          dataKey={option.label}
                          stroke={
                            ["#2563eb", "#16a34a", "#f59e42", "#e11d48"][
                              idx % 4
                            ]
                          }
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                          name={option.label}
                        />
                      ),
                    )
                  )}
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-muted-foreground">
                No history data available for this prediction.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
