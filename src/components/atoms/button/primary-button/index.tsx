import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props extends ButtonProps {
  children: React.ReactNode;
}

const PrimaryButton = ({ children, ...props }: Props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Button
        {...props}
        size="lg"
        className={cn(
          "rounded-full px-6 py-6 text-lg hover:bg-primary ",
          props.className
        )}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default PrimaryButton;
