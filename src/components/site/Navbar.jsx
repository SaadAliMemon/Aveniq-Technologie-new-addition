import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AveniqLogo } from "@/components/site/AveniqLogo";
const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link
          to="/"
          className="flex items-center leading-none"
          aria-label="Aveniq Technologies home"
        >
          <AveniqLogo className="max-w-[210px]" />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={cn(
                  "link-underline text-sm transition-colors",
                  isActive(item.to)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            style={{ backgroundImage: "var(--gradient-accent)" }}
          >
            Start a Project
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border lg:hidden"
          >
            <span
              className={cn(
                "h-px w-4 bg-foreground transition-transform duration-300",
                open && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-4 bg-foreground transition-transform duration-300",
                open && "-translate-y-[3px] -rotate-45",
              )}
            />
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-5">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-3 text-lg font-semibold tracking-tight transition-colors",
                  isActive(item.to)
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-full px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            >
              Start a Project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
