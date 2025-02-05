// useWindowSize.ts
import { useState, useEffect } from "react";
import _ from "lodash";

// Define the shape of our window size state
export interface WindowSize {
  width: number;
  height: number;
}

// Define the hook return type
export type UseWindowSizeReturn = WindowSize;

export const useWindowSize = (): UseWindowSizeReturn => {
  // Initialize with strongly typed state
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  } as WindowSize);

  useEffect(() => {
    // Type guard for SSR
    if (typeof window === "undefined") {
      return undefined;
    }

    // Define the resize handler with proper types
    const handleResize = _.debounce((): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 250);

    // Type the event listener
    window.addEventListener("resize", handleResize as EventListener);

    // Call handler right away to set initial size
    handleResize();

    // Cleanup function with proper types
    return (): void => {
      handleResize.cancel();
      window.removeEventListener("resize", handleResize as EventListener);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
