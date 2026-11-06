import { Link } from "react-router-dom";
import { AveniqLogo } from "@/components/site/AveniqLogo";
const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];
const SERVICES = [
  "GoHighLevel & CRM",
  "Workflow Automation",
  "AI Agents",
  "AI Calling",
  "Website Development",
  "Mobile Development",
];
export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-10">
        <div>
          <div className="flex items-center gap-4">
            <AveniqLogo full={false} className="h-12 w-12" />
            <div>
              <span className="block font-display text-xl font-extrabold tracking-tight text-foreground">
                Aveniq Technologies
              </span>
              <span className="eyebrow mt-2 block">AI • Automation • Development</span>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Building intelligent systems, automations, and digital experiences for modern
            businesses.
          </p>
        </div>

        <div>
          <h3 className="eyebrow">Navigation</h3>
          <ul className="mt-5 space-y-3">
            {NAV.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Services</h3>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((service) => (
              <li key={service} className="text-sm text-muted-foreground">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="tel:03232915684" className="transition-colors hover:text-foreground">
                03232915684
              </a>
            </li>
            <li>
              <a
                href="mailto:saad45881@gmail.com"
                className="break-all transition-colors hover:text-foreground"
              >
                saad45881@gmail.com
              </a>
            </li>
            <li className="pt-2 text-[0.6875rem] font-mono text-muted-foreground">Saad Ali</li>
            <li className="text-[0.6875rem] font-mono text-muted-foreground">
              LinkedIn [EDITABLE PLACEHOLDER]
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>© 2026 Aveniq Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
