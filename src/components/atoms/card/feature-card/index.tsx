import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const FeatureCard = ({ children, className, ...props }: Props) => {
  return (
    <Card
      className={cn(
        "rounded-2xl overflow-hidden border border-muted-foreground/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/5",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
};

export default FeatureCard;
