import { MarketDashboard } from "@/components/market/market-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/market")({
  component: Market,
});

function Market() {
  return <MarketDashboard />;
}
