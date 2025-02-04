import PrimaryLongLogoWhite from "@/components/atoms/logo/primary-long-logo-white";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="px-6 mb-16 xl:px-16 max-w-[1800px] mx-auto mt-24">
      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
        <div className="flex flex-col items-center mb-16">
          <PrimaryLongLogoWhite />
          <p className="text-muted-foreground text-center max-w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-24 justify-items-center">
          <div className="flex flex-col space-y-2">
            <span className="text-lg font-bold">About</span>
            <ul className="text-muted-foreground">
              <li>
                <a href="#feature">Features</a>
              </li>
              <li>
                <a href="#tokenomics">Tokenomics</a>
              </li>
              <li>
                <a href="#roadmap">Roadmap</a>
              </li>
              <li>
                <a href="#whitepaper">Whitepaper</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="text-lg font-bold">Support</span>
            <ul className="text-muted-foreground">
              <li>
                <Link to="">Email</Link>
              </li>
              <li>
                <Link to="/">Telegram</Link>
              </li>
              <li>
                <Link to="/">X</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
