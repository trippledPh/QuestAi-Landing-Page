import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

interface MenuBarContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
}

const MenuBarContext = createContext<MenuBarContextType | undefined>(undefined);

interface MenuBarProviderProps {
  readonly children: React.ReactNode;
}

export const MenuBarProvider: React.FC<MenuBarProviderProps> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => setIsMenuOpen(false);
  const openMenu = () => setIsMenuOpen(true);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const value = useMemo(
    () => ({
      isMenuOpen,
      toggleMenu,
      closeMenu,
      openMenu,
    }),
    [isMenuOpen]
  );

  return (
    <MenuBarContext.Provider value={value}>{children}</MenuBarContext.Provider>
  );
};

export function useMenuBar() {
  const context = useContext(MenuBarContext);
  if (context === undefined) {
    throw new Error("useMenuBar must be used within a MenuBarProvider");
  }
  return context;
}
