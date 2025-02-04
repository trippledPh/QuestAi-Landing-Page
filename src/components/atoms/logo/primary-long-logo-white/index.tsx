import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const PrimaryLongLogoWhite = ({ className }: Props) => {
  return (
    <div
      className={cn("flex justify-center items-center w-[250px]", className)}
    >
      <img
        src="/images/logo/quest-ai-long-logo-light.png"
        alt="logo"
        className="object-cover"
      />
    </div>
  );
};

export default PrimaryLongLogoWhite;
