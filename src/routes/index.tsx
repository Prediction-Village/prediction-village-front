import { GameLayout } from "@/components/game/game-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="text-center h-full">
      <GameLayout />
    </div>
  );
}
