"use client";

import { useEffect, useState } from "react";

type RequestFullscreen = typeof document.documentElement.requestFullscreen;
type ExitFullscreen = typeof document.exitFullscreen;
type FullscreenElement = typeof document.fullscreenElement;

declare global {
  interface HTMLElement {
    webkitRequestFullscreen: RequestFullscreen;
    mozRequestFullScreen: RequestFullscreen;
    msRequestFullscreen: RequestFullscreen;
  }

  interface Document {
    webkitExitFullscreen: ExitFullscreen;
    mozCancelFullScreen: ExitFullscreen;
    msExitFullscreen: ExitFullscreen;
    webkitFullscreenElement: FullscreenElement;
    mozFullScreenElement: FullscreenElement;
    msFullscreenElement: FullscreenElement;
  }
}

interface UseFullscreenHook {
  isFullscreen: boolean;
  enterFullscreen: (element: HTMLElement | null) => void;
  exitFullscreen: () => void;
}

/**
 * Custom hook to enable fullscreen mode for an element.
 * @returns {Object} The fullscreen state and functions to enter and exit fullscreen.
 * @example const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen();
 */
const useFullscreen = (): UseFullscreenHook => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  /**
   * Function to enter fullscreen mode for the specified element.
   * @param {HTMLElement} element - The element to be displayed in fullscreen mode.
   */
  const enterFullscreen = (element: HTMLElement | null) => {
    if (element?.requestFullscreen) {
      element.requestFullscreen();
    } else if (element?.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element?.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element?.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
    setIsFullscreen(true);
  };
  /**
   * Function to exit fullscreen mode.
   */
  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullscreen(false);
  };

  useEffect(() => {
    /**
     * Event listener to handle fullscreen change.
     */
    const handleFullscreenChange = () => {
      setIsFullscreen(
        Boolean(
          document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        )
      );
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);
  return { isFullscreen, enterFullscreen, exitFullscreen };
};
export default useFullscreen;
