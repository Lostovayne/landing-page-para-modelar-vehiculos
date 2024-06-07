import { cn } from "../lib/utils";

interface Props {
  className?: string;
}

export const Bubble = ({ className = "" }: Props) => {
  return <div className={cn("absolute bg-bubble  rounded-full blur-3xl opacity-30", className)}></div>;
};
