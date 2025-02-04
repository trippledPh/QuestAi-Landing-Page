import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Link } from "react-router";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const PrimarySingleLogo = ({ className }: Props) => {
  return (
    <Link to="/">
      <div className={cn("w-full h-full", className)}>
        <img
          src="/images/logo/quest-ai-main-logo-gradient.png"
          alt="quest-logo"
          className="object-contain w-[48px] h-[48px]"
        />
      </div>
    </Link>
  );
};

export default PrimarySingleLogo;
