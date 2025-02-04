import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const PrimaryCard = ({ children, className, ...props }: Props) => {
  return (
    <Card
      className={cn(
        "bg-primary-foreground rounded-md overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
};

export default PrimaryCard;
