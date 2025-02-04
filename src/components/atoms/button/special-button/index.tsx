import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props extends ButtonProps {
  children: React.ReactNode;
}

const SpecialButton = ({ children, ...props }: Props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="group relative"
    >
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative rounded-full p-[1px] bg-gradient-to-r from-primary via-secondary to-primary">
        <Button
          {...props}
          size="lg"
          className={cn(
            "relative rounded-full px-6 py-6 text-lg bg-background text-white hover:bg-background/90",
            props.className
          )}
        >
          {children}
        </Button>
      </div>
    </motion.div>
  );
};

export default SpecialButton;
