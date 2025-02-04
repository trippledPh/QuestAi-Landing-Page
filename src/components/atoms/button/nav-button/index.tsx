import { Button, ButtonProps } from "@/components/ui/button";

interface Props extends ButtonProps {
  children: React.ReactNode;
}

const NavButton = ({ children, ...props }: Props) => {
  return <Button {...props}>{children}</Button>;
};

export default NavButton;
