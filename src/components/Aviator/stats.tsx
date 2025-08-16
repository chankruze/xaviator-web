import clsx from "clsx";

interface StatsProps {
  className?: string;
}

export const Stats = ({ className }: StatsProps) => {
  return <div className={clsx("bg-blue-900", className)}></div>;
};
