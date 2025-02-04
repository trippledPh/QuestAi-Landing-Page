import { Badge, BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Props extends BadgeProps {}

const HeroBadge = ({ children, ...props }: Props) => {
  return (
    <div className="p-[1px] bg-gradient-to-r from-[#03F6F8]/40 via-secondary/30 to-[#03F6F8]/40 rounded-full inline-block">
      <Badge
        {...props}
        variant="outline"
        className={cn(
          "px-4 py-2 rounded-full border-none bg-background",
          props.className
        )}
      >
        {children}
      </Badge>
    </div>
  );
};

export default HeroBadge;
