import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
export function Reveal({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
export function Section({ id, children, className }) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-[1280px] px-6 py-24 md:px-10 md:py-32",
        className,
      )}
    >
      {children}
    </section>
  );
}
export function Eyebrow({ children }) {
  return (
    <div className="eyebrow flex items-center gap-3">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
      {children}
    </div>
  );
}
export function Cta({ children, href, variant = "primary", className }) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300";
  // Internal paths use the router (no full page reload); anything else stays a normal link.
  const isInternal = typeof href === "string" && href.startsWith("/") && !href.startsWith("//");
  const Tag = isInternal ? Link : "a";
  const linkProps = isInternal ? { to: href } : { href };
  return (
    <Tag
      {...linkProps}
      className={cn(
        base,
        variant === "primary"
          ? "text-primary-foreground shadow-[var(--glow-accent)] hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-20px_color-mix(in_oklab,var(--primary)_60%,transparent)]"
          : "border border-border text-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary/60",
        className,
      )}
      style={variant === "primary" ? { backgroundImage: "var(--gradient-accent)" } : undefined}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Tag>
  );
}
export function SectionHeading({ eyebrow, title, lead, className }) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-6 text-4xl font-extrabold md:text-6xl">{title}</h2>
      {lead ? (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{lead}</p>
      ) : null}
    </Reveal>
  );
}
export function GlowField({ className }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className="glow-orb left-[-10%] top-[-20%] h-[420px] w-[420px]"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="glow-orb right-[-8%] top-[30%] h-[380px] w-[380px] opacity-25"
        style={{ background: "var(--violet)" }}
      />
    </div>
  );
}
