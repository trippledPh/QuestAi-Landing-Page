import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const FadeCard = ({ children, className, ...props }: Props) => {
  return (
    <div className="p-[1px] bg-gradient-to-b from-[#03F6F8]/10  rounded-xl border flex">
      <Card className={cn("border-none bg-background", className)} {...props}>
        {children}
      </Card>
    </div>
  );
};

export default FadeCard;
