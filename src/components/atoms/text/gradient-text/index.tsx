import React, { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly text: string;
}

export const GradientText: React.FC<Props> = ({ text, ...props }) => {
  const colors = [
    "hsl(192, 98%, 49%)",
    "hsl(234 69% 57%)",
    "hsl(192, 98%, 49%)",
    "hsl(192, 98%, 49%)",
    "hsl(192, 98%, 49%)",
  ];
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={count}
      className="inline-flex relative"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
      style={{
        backgroundImage: `linear-gradient(45deg, ${colors[0]} 40%, ${colors[1]} 60%, ${colors[0]})`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      <span className={cn("tracking-wide", props.className)}>{text}</span>
    </motion.div>
  );
};

export default GradientText;
