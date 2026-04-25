import { Loader2 } from "lucide-react";
import { cn } from "../../utils/cn";

export const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex justify-center items-center h-full w-full", className)}>
      <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
    </div>
  );
};
