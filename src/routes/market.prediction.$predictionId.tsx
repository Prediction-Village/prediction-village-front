import { createFileRoute } from '@tanstack/react-router';
import { PredictionPage } from '@/components/market/PredictionPage'; // Verify path

export const Route = createFileRoute('/market/prediction/$predictionId')({
  component: PredictionRouteComponent,
});

function PredictionRouteComponent() {
  const { predictionId } = Route.useParams();
  return <PredictionPage predictionId={predictionId} />;
}
