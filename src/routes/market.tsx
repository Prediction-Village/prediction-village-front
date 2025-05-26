import { MarketDashboard } from "@/components/market/market-layout";
import { Outlet, createFileRoute, useLocation } from "@tanstack/react-router";

export const Route = createFileRoute("/market")({
  component: MarketRouteComponent,
});

function MarketRouteComponent() {
  const location = useLocation();

  if (location.pathname === Route.fullPath) {
    return <MarketDashboard />;
  }

  return <Outlet />;
}
