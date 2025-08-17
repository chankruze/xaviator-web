import { Actions } from "./Actions";
import { Graph } from "./Graph";
import { CrashPoints } from "./CrashPoints";
import { cn } from "@/lib/utils";

interface FlightViewProps {
  className?: string;
}

export const FlightView = ({ className }: FlightViewProps) => {
  return (
    <div className={cn("md:col-span-2 h-full flex flex-col gap-2", className)}>
      <CrashPoints />
      <Graph />
      <Actions />
    </div>
  );
};
