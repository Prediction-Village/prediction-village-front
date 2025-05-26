import { PredictionCard } from "@/components/market/PredictionCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FilterIcon, SearchIcon } from "lucide-react";
import { mockPredictions } from "@/lib/mock-predictions";

function getBadgeProps(category: string) {
  switch (category) {
    case "Humans":
      return {
        className:
          "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700",
      };
    case "Orks":
      return {
        className: "bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700",
      };
    case "Battles":
      return {
        className:
          "bg-purple-50 text-purple-700 hover:bg-purple-50 hover:text-purple-700",
      };
    case "Both":
      return {
        className:
          "bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700",
      };
    default:
      return { className: "" };
  }
}

export function MarketDashboard() {
  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Prediction Market
          </h1>
          <p className="text-muted-foreground">
            Place your bets on upcoming events in the battle between Humans and
            Orks
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:items-center md:justify-between">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search predictions..."
                  className="w-full rounded-md pl-8"
                />
              </div>
            </div>
            <div className="flex items-center justify-end w-full md:w-1/2">
              <Button variant="outline" size="icon" className="mr-2">
                <FilterIcon className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="humans">Humans</TabsTrigger>
                <TabsTrigger value="orks">Orks</TabsTrigger>
                <TabsTrigger value="battles">Battles</TabsTrigger>
              </TabsList>
            </div>
          </div>

          <TabsContent value="all" className="mt-6 px-0">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {mockPredictions.map((prediction) => (
                <PredictionCard
                  key={prediction.id}
                  id={prediction.id}
                  title={prediction.title}
                  badge={
                    <Badge
                      variant="outline"
                      {...getBadgeProps(prediction.category)}
                    >
                      {prediction.category}
                    </Badge>
                  }
                  description={prediction.description}
                  {...(prediction.type === "YES_NO"
                    ? {
                        probability: `${prediction.probability}%`,
                        change: {
                          value:
                            (prediction.change24h.positive ? "+" : "") +
                            prediction.change24h.value.toFixed(1) +
                            "%",
                          positive: prediction.change24h.positive,
                        },
                        onNo: () => {},
                        onYes: () => {},
                      }
                    : {
                        options: prediction.options.map((opt) => ({
                          label: opt.label,
                          chance: `${opt.chance}%`,
                        })),
                        onSelect: () => {},
                      })}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="humans" className="mt-6 px-0">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {mockPredictions
                .filter((p) => p.category === "Humans")
                .map((prediction) => (
                  <PredictionCard
                    key={prediction.id}
                    id={prediction.id}
                    title={prediction.title}
                    badge={
                      <Badge
                        variant="outline"
                        {...getBadgeProps(prediction.category)}
                      >
                        {prediction.category}
                      </Badge>
                    }
                    description={prediction.description}
                    {...(prediction.type === "YES_NO"
                      ? {
                          probability: `${prediction.probability}%`,
                          change: {
                            value:
                              (prediction.change24h.positive ? "+" : "") +
                              prediction.change24h.value.toFixed(1) +
                              "%",
                            positive: prediction.change24h.positive,
                          },
                          onNo: () => {},
                          onYes: () => {},
                        }
                      : {
                          options: prediction.options.map((opt) => ({
                            label: opt.label,
                            chance: `${opt.chance}%`,
                          })),
                          onSelect: () => {},
                        })}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="orks" className="mt-6 px-0">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {mockPredictions
                .filter((p) => p.category === "Orks")
                .map((prediction) => (
                  <PredictionCard
                    key={prediction.id}
                    id={prediction.id}
                    title={prediction.title}
                    badge={
                      <Badge
                        variant="outline"
                        {...getBadgeProps(prediction.category)}
                      >
                        {prediction.category}
                      </Badge>
                    }
                    description={prediction.description}
                    {...(prediction.type === "YES_NO"
                      ? {
                          probability: `${prediction.probability}%`,
                          change: {
                            value:
                              (prediction.change24h.positive ? "+" : "") +
                              prediction.change24h.value.toFixed(1) +
                              "%",
                            positive: prediction.change24h.positive,
                          },
                          onNo: () => {},
                          onYes: () => {},
                        }
                      : {
                          options: prediction.options.map((opt) => ({
                            label: opt.label,
                            chance: `${opt.chance}%`,
                          })),
                          onSelect: () => {},
                        })}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="battles" className="mt-6 px-0">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {mockPredictions
                .filter(
                  (p) => p.category === "Battles" || p.category === "Both",
                )
                .map((prediction) => (
                  <PredictionCard
                    key={prediction.id}
                    id={prediction.id}
                    title={prediction.title}
                    badge={
                      <Badge
                        variant="outline"
                        {...getBadgeProps(prediction.category)}
                      >
                        {prediction.category}
                      </Badge>
                    }
                    description={prediction.description}
                    {...(prediction.type === "YES_NO"
                      ? {
                          probability: `${prediction.probability}%`,
                          change: {
                            value:
                              (prediction.change24h.positive ? "+" : "") +
                              prediction.change24h.value.toFixed(1) +
                              "%",
                            positive: prediction.change24h.positive,
                          },
                          onNo: () => {},
                          onYes: () => {},
                        }
                      : {
                          options: prediction.options.map((opt) => ({
                            label: opt.label,
                            chance: `${opt.chance}%`,
                          })),
                          onSelect: () => {},
                        })}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
