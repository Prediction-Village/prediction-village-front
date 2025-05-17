import { FilterIcon, SearchIcon } from "lucide-react";

import { PredictionCard } from "@/components/market/PredictionCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MarketDashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1 p-8">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Prediction Market
            </h1>
            <p className="text-muted-foreground">
              Place your bets on upcoming events in the battle between Humans
              and Orks
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
                <PredictionCard
                  title="Humans Townhall Upgrade"
                  badge={
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                    >
                      Humans
                    </Badge>
                  }
                  description="Will the Human townhall upgrade to level 3 before block #12345?"
                  probability="68%"
                  change={{ value: "+5.2%", positive: true }}
                  onNo={() => {}}
                  onYes={() => {}}
                />

                <PredictionCard
                  title="Orks Win Current Game"
                  badge={
                    <Badge
                      variant="outline"
                      className="bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700"
                    >
                      Orks
                    </Badge>
                  }
                  description="Will the Orks win the current battle on the bridge?"
                  probability="42%"
                  change={{ value: "-3.8%", positive: false }}
                  onNo={() => {}}
                  onYes={() => {}}
                />

                <PredictionCard
                  title="Next Building Upgrade"
                  badge={
                    <Badge
                      variant="outline"
                      className="bg-purple-50 text-purple-700 hover:bg-purple-50 hover:text-purple-700"
                    >
                      Battles
                    </Badge>
                  }
                  description="Which building will be upgraded next in either village?"
                  options={[
                    { label: "Human Barracks", chance: "35%" },
                    { label: "Ork Armory", chance: "28%" },
                    { label: "Human Watchtower", chance: "22%" },
                  ]}
                  onSelect={() => {}}
                />

                <PredictionCard
                  title="Bridge Control"
                  badge={
                    <Badge
                      variant="outline"
                      className="bg-purple-50 text-purple-700 hover:bg-purple-50 hover:text-purple-700"
                    >
                      Battles
                    </Badge>
                  }
                  description="Will Humans control the bridge by block #12500?"
                  probability="51%"
                  change={{ value: "+1.2%", positive: true }}
                  onNo={() => {}}
                  onYes={() => {}}
                />

                <PredictionCard
                  title="First to Level 5"
                  badge={
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Both
                    </Badge>
                  }
                  description="Which building will reach level 5 first?"
                  options={[
                    { label: "Human Townhall", chance: "45%" },
                    { label: "Ork Stronghold", chance: "40%" },
                    { label: "Neither (Tie)", chance: "15%" },
                  ]}
                  onSelect={() => {}}
                />

                <PredictionCard
                  title="Ork Defense Upgrade"
                  badge={
                    <Badge
                      variant="outline"
                      className="bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700"
                    >
                      Orks
                    </Badge>
                  }
                  description="Will Orks upgrade their defensive walls before block #13000?"
                  probability="73%"
                  change={{ value: "+8.7%", positive: true }}
                  onNo={() => {}}
                  onYes={() => {}}
                />
              </div>
            </TabsContent>
            <TabsContent value="humans" className="mt-6 px-0">
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Human-specific cards would go here */}
              </div>
            </TabsContent>
            <TabsContent value="orks" className="mt-6 px-0">
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Ork-specific cards would go here */}
              </div>
            </TabsContent>
            <TabsContent value="battles" className="mt-6 px-0">
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Battle-specific cards would go here */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
