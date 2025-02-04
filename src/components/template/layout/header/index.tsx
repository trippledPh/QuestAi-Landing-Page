import { useEffect, useState } from "react";
import PrimarySingleLogo from "@/components/atoms/logo/primary-single-logo";
import { MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SpecialButton from "@/components/atoms/button/special-button";
import useIsMobile from "@/hooks/use-is-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    initial: { opacity: 0, height: 0 },
    animate: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        opacity: { duration: 0.4 },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const listVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const navItems = [
    { label: "Features", id: "feature" },
    { label: "Roadmap", id: "roadmap" },
    { label: "Tokenomics", id: "tokenomics" },
    { label: "FAQs", id: "faq" },
    { label: "Support", id: "support" },
  ];

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <div className="border-b border-muted-foreground/52 max-w-screen-2xl mx-auto">
      <header className="p-4">
        <nav className="flex justify-between items-center">
          <PrimarySingleLogo />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-12 text-xl">
            {navItems.map(({ label, id }) => (
              <li key={label}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button / Desktop CTA */}
          <div className="block lg:hidden">
            <motion.button onClick={toggleMenu} whileTap={{ scale: 0.95 }}>
              {isMenuOpen ? (
                <X color="white" size={28} />
              ) : (
                <MenuIcon color="white" size={28} />
              )}
            </motion.button>
          </div>

          <div className="hidden lg:block">
            <SpecialButton>Get Started</SpecialButton>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="lg:hidden fixed top-[73px] left-0 right-0 bg-background z-50 overflow-hidden"
          >
            <motion.ul
              variants={listVariants}
              initial="initial"
              animate="animate"
              className="flex flex-col items-start px-4 pt-4"
            >
              {navItems.map(({ label, id }) => (
                <motion.li
                  key={label}
                  variants={itemVariants}
                  className="w-full py-2"
                >
                  <a href={`#${id}`} className="text-lg">
                    {label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
