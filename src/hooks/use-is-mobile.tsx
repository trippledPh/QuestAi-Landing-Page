import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the current device is mobile based on screen width
 * @param {number} breakpoint - The width threshold in pixels to consider a device as mobile (default: 768px)
 * @returns {boolean} Returns true if the device is considered mobile, false otherwise
 */
const useIsMobile = (breakpoint = 900) => {
  // Function to get the current mobile status
  const getMobileStatus = () => {
    // Check if window is defined (for SSR)
    if (typeof window === "undefined") return false;
    return window.innerWidth < breakpoint;
  };

  // Initialize with the current mobile status
  const [isMobile, setIsMobile] = useState(getMobileStatus());

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setIsMobile(getMobileStatus());
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check (in case the initial state was set during SSR)
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
