import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/krftist/Navigation";
import Footer from "@/components/krftist/Footer";

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll restoration on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
