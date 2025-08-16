import { Gamepad } from "lucide-react";

export const Header = () => {
  return (
    <div className="p-3 bg-neutral-900 text-white">
      {/* logo */}
      <div className="flex items-center gap-2">
        <Gamepad />
        <p className="font-mono font-medium">xAviator</p>
      </div>
    </div>
  );
};
