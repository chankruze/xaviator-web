import clsx from "clsx";
import { Minus, MoreHorizontal, Plus } from "lucide-react";

interface GraphProps {
  className?: string;
}

export const Graph = ({ className }: GraphProps) => {
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
    <div className={clsx("md:col-span-2 h-full flex flex-col", className)}>
      {/* crash points */}
      <div className="p-2 flex items-center bg-neutral-800 gap-2">
        <div className="flex-1 flex gap-3 items-center overflow-x-hidden">
          {multipliers.map((value, index) => (
            <div
              key={index}
              className={clsx("text-xs font-mono", getColorClass(value))}
            >
              {value}x
            </div>
          ))}
        </div>
        <button className="px-2 rounded-full bg-neutral-700">
          <MoreHorizontal className="size-4" />
        </button>
      </div>
      {/* flight view */}
      <div className="flex-1"></div>
      {/* actions */}
      <div className="bg-neutral-800 p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 bg-neutral-900 p-2 rounded-full">
            <button className="p-2 rounded-full bg-neutral-700">
              <Minus className="size-4" />
            </button>
            <input
              type="text"
              className="w-full text-center font-mono text-lg sm:text-xl"
              defaultValue="100.00"
            />
            <button className="p-2 rounded-full bg-neutral-700">
              <Plus className="size-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="p-2 rounded-full bg-neutral-700">100</button>
            <button className="p-2 rounded-full bg-neutral-700">200</button>
            <button className="p-2 rounded-full bg-neutral-700">500</button>
            <button className="p-2 rounded-full bg-neutral-700">1,000</button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button className="flex-1 w-full bg-green-700 rounded-2xl">
            Bet 100.00 INR
          </button>
          <button className="flex-1 w-full bg-red-700 rounded-2xl">
            Cash out 100.00 INR
          </button>
        </div>
      </div>
    </div>
  );
};
