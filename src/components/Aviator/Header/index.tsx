import { Gamepad, Wallet } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WalletBalance } from "./WalletBalance";

export const Header = () => {
  return (
    <div className="flex items-center justify-between py-2 px-3 border-b">
      {/* logo */}
      <div className="flex items-center gap-2">
        <Gamepad />
        <p className="font-mono font-medium">xAviator</p>
      </div>
      <div className="flex items-center gap-3">
        <WalletBalance />
        <ThemeToggle />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="username" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
