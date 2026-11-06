import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Privacy from "@/pages/Privacy";
import Services from "@/pages/Services";
import Terms from "@/pages/Terms";

// Scroll to the top on page change (or to #section when the URL has a hash).
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <ErrorBoundary key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}
