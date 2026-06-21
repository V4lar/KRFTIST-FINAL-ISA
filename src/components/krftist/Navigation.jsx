import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "Contact", to: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="site-nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0A1418]/80 backdrop-blur-xl border-b border-[#EED5B7]/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <Link
          to="/"
          data-testid="nav-logo"
          className="flex items-center gap-3"
        >
          <img
            src="/logo1.png"
            alt="KRFTIST logomark"
            data-testid="nav-logomark"
            className="w-40 h-40 md:w-60 md:h-60 ml-4 md:ml-9 object-contain shrink-0"
          />
          
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `link-underline text-xs tracking-[0.25em] uppercase transition-colors ${
                  isActive ? "text-[#B89261]" : "text-[#EED5B7]/85 hover:text-[#B89261]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          data-testid="nav-cta"
          className="hidden md:inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-[#B89261] max-w-[260px] text-right leading-tight"
        >
          <span className="w-2 h-2 rounded-full bg-[#B89261] animate-pulse shrink-0" />
          Booking Projects for 2026
        </Link>

        <button
          onClick={() => setOpen(!open)}
          data-testid="nav-mobile-toggle"
          className="md:hidden text-[#EED5B7] text-xs tracking-[0.25em] uppercase"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0A1418]/95 border-t border-[#EED5B7]/10 px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
              className="font-display text-3xl tracking-tight uppercase text-[#EED5B7]"
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/work"
            onClick={() => setOpen(false)}
            className="font-script text-3xl text-[#B89261]"
          >
            View Our Work →
          </Link>
        </div>
      )}
    </motion.header>
  );
}
