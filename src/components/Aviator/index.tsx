import { FlightView } from "./FlightView";
import { StatsView } from "./StatsView";

export default function AviatorIndexPage() {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-4 p-3">
      <FlightView />
      <StatsView />
    </div>
  );
}
