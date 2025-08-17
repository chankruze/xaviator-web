import { Wallet } from "lucide-react";

export const WalletBalance = () => {
  return (
    <div className="flex gap-2 py-2 px-3 rounded-md bg-wallet text-wallet-foreground">
      <div className="space-x-1 text-sm font-mono">
        <span>23,645.00</span>
        <span>INR</span>
      </div>
      <div className="bg-wallet flex items-center justify-center">
        <Wallet className="size-5 text-wallet-icon h-[1.2rem] w-[1.2rem]" />
      </div>
    </div>
  );
};
