import { ProgressBar } from "@/components/ProgressBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const CurrentRound = () => {
  return (
    <div>
      <div className="space-y-3 bg-secondary p-3 rounded-2xl">
        <div className="flex justify-between">
          <div className="space-y-1">
            <div className="flex -space-x-2">
              <Avatar className="size-6">
                <AvatarImage src="https://github.com/shadcn.png" alt="user1" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="size-6">
                <AvatarImage src="https://github.com/leerob.png" alt="user2" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar className="size-6">
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="user3"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-xs">
              1178/1200 <span className="text-muted-foreground">Bets</span>
            </div>
          </div>
          <div className="text-end">
            <p className="font-bold text-xl font-mono">1,23,4560.78</p>
            <p className="text-xs text-muted-foreground">Total win INR</p>
          </div>
        </div>
        <ProgressBar value={30} className="h-1" />
      </div>
    </div>
  );
};
