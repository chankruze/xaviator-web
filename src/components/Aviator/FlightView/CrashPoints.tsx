import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";

export const CrashPoints = () => {
  const multipliers = Array.from({ length: 50 }, () =>
    (Math.random() * (350 - 1) + 1).toFixed(2)
  );

  const getColorClass = (value: string) => {
    const num = parseFloat(value);

    if (num < 2) return "text-white"; // 1.00x – 1.99x
    if (num < 5) return "text-purple-500"; // 2.00x – 4.99x
    if (num < 10) return "text-green-500"; // 5.00x – 9.99x
    if (num < 50) return "text-blue-500"; // 10.00x – 49.99x
    if (num < 100) return "text-yellow-500"; // 50.00x – 99.99x
    if (num < 200) return "text-orange-500"; // 100.00x – 199.99x
    return "text-red-500"; // 200.00x+
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 flex gap-3 items-center overflow-x-hidden">
        {multipliers.map((value, index) => (
          <div
            key={index}
            className={cn("text-xs font-mono", getColorClass(value))}
          >
            {value}x
          </div>
        ))}
      </div>
      <button className="px-2 rounded-full bg-muted text-muted-foreground">
        <MoreHorizontal className="size-4" />
      </button>
    </div>
  );
};
