import { cn } from "@/lib/utils";
type ProgressBarProps = {
  value: number;
  className?: string;
};

export const ProgressBar = ({ value, className }: ProgressBarProps) => {
  return (
    <div
      className={cn(
        "w-full h-2 rounded-full bg-white dark:bg-black overflow-hidden",
        className
      )}
    >
      <div
        className="h-full bg-green-500 dark:bg-green-400 transition-all duration-300 ease-out"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
};
