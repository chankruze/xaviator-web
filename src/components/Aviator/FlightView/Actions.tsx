import { Minus, Plus } from "lucide-react";

export const Actions = () => {
  return (
    <div className="bg-neutral-800 p-4 grid grid-cols-2 md:grid-cols-4 gap-4 rounded-lg">
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
      </div>
    </div>
  );
};
