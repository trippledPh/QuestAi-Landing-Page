import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const RoadMapCard = ({ children, className, ...props }: Props) => {
  return (
    <Card
      className={cn("bg-[#1D1D1D] rounded-md overflow-hidden", className)}
      {...props}
    >
      {children}
    </Card>
  );
};

export default RoadMapCard;
