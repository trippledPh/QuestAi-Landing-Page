import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {}

const Section = ({ children, ...props }: Props) => {
  return (
    <section
      {...props}
      className={cn("px-4 xl:px-16 max-w-[1800px] mx-auto ", props.className)}
    >
      {children}
    </section>
  );
};

export default Section;
