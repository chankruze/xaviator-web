import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CurrentRound } from "./CurrentRound";
import { PreviousRound } from "./PreviousRound";
import { TopBets } from "./TopBets";
import { cn } from "@/lib/utils";

interface StatsViewProps {
  className?: string;
}

export const StatsView = ({ className }: StatsViewProps) => {
  return (
    <div className={cn("", className)}>
      <Tabs defaultValue="current" className="h-full">
        <TabsList className="w-full">
          <TabsTrigger value="current">Current Round</TabsTrigger>
          <TabsTrigger value="previous">Previous Round</TabsTrigger>
          <TabsTrigger value="top">Top Bets</TabsTrigger>
        </TabsList>
        <TabsContent value="current">
          <CurrentRound />
        </TabsContent>
        <TabsContent value="previous">
          <PreviousRound />
        </TabsContent>
        <TabsContent value="top">
          <TopBets />
        </TabsContent>
      </Tabs>
    </div>
  );
};
