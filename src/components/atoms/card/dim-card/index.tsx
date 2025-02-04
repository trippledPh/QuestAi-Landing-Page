import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const DimCard = ({ children, className, ...props }: Props) => {
  return (
    <Card
      className={cn(
        "rounded-2xl overflow-hidden border border-muted-foreground/10",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
};

export default DimCard;
