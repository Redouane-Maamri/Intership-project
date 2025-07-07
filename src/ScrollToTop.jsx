import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation(); // detect current route

  useEffect(() => {
    // scroll to top whenever route changes
    window.scrollTo(0, 0);
  }, 
  [pathname]);

  return null; // this component renders nothing
}
