import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useWindowDimensions from "./use_window_dimensions";

export default function useScrollToNavigate() {
  const navigate = useNavigate();
  const location = useLocation();
  const { height } = useWindowDimensions();

  const handleScroll = useCallback(() => {
    const position = Math.round(window.pageYOffset / height);
    let redirectTo;
    switch (position) {
      case 1:
        redirectTo = "/about";
        break;
      case 2:
        redirectTo = "/portfolio";
        break;
      case 3:
        redirectTo = "/blog";
        break;
      case 4:
        redirectTo = "/contact";
        break;
      default:
        redirectTo = "/";
        break;
    }
    location.pathname !== redirectTo &&
      navigate(redirectTo, { state: { scrolling: true } });
  }, [height, navigate, location]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return null;
}
