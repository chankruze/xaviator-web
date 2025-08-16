import { Graph } from "./graph";
import { Stats } from "./stats";

export default function AviatorIndexPage() {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-3">
      <Graph />
      <Stats />
    </div>
  );
}
