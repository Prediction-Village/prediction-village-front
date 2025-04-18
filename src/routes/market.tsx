import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/market")({
  component: Market,
});

function Market() {
  return <div className="min-h-screen p-4"> market layout</div>;
}
