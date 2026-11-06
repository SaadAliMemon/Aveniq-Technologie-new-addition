import { usePageHead } from "@/lib/seo";
import { Link } from "react-router-dom";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { Cta, Section, SectionHeading } from "@/components/site/primitives";
const expertise = [
  "CRM & GoHighLevel",
  "Workflow Automation",
  "Agentic AI",
  "AI Voice Systems",
  "Virtual Assistance",
  "Web Development",
  "Mobile Development",
  "System Integrations",
];
const PAGE_HEAD = {
  meta: [
    { title: "About Aveniq Technologies | AI Automation & Technology Solutions" },
    {
      name: "description",
      content:
        "Learn more about Aveniq Technologies and the systems-first approach to CRM, automation, AI, websites, and modern digital products.",
    },
    {
      property: "og:title",
      content: "About Aveniq Technologies | AI Automation & Technology Solutions",
    },
    {
      property: "og:description",
      content:
        "A systems-first approach to CRM, automation, AI, websites, and digital product development.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
};
export default function AboutPage() {
  usePageHead(PAGE_HEAD);
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-36 md:pt-44">
          <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-10 md:px-10 md:pb-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="eyebrow">About us</div>
                <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                  Building Smarter Systems for Modern Businesses
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  We bring together CRM technology, automation, AI, and software development to help
                  businesses simplify the way they operate.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Cta href="/contact">Contact Us</Cta>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary/60"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[30px] border border-border bg-secondary p-3 shadow-[var(--shadow-elevated)]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Technology workspace and digital strategy table"
                  loading="lazy"
                  className="h-[520px] w-full rounded-[22px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <Section>
          <SectionHeading
            eyebrow="Our story"
            title={
              <>
                Built around technology and <span className="text-gradient">problem solving</span>
              </>
            }
            lead="Our work focuses on solving practical business challenges through connected digital systems. Whether it is improving an existing CRM, repairing broken workflows, developing an AI assistant, or building a new website or application, we focus on solutions that serve a real purpose."
          />
        </Section>

        <Section className="pt-0">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="surface-panel rounded-3xl p-8">
              <div className="eyebrow">Our mission</div>
              <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
                Make Technology More Useful.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Our mission is to make business technology more connected, accessible, and effective
                by combining intelligent automation with practical digital development.
              </p>
            </div>
            <div className="surface-panel rounded-3xl p-8">
              <div className="eyebrow">Our expertise</div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {expertise.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="Our approach"
            title={
              <>
                Thoughtful process. Practical execution.{" "}
                <span className="text-gradient">Sustainable results.</span>
              </>
            }
            lead="The strongest solutions are built with clarity, not complexity. We focus on understanding requirements, choosing the right tools, and delivering systems that work in real business conditions."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Understand before building",
              "Focus on business requirements",
              "Choose practical solutions",
              "Prioritize functionality",
              "Test before delivery",
              "Improve continuously",
            ].map((item, index) => (
              <div key={item} className="surface-panel rounded-2xl p-5">
                <span className="eyebrow text-[0.55rem]">0{index + 1}</span>
                <p className="mt-4 text-base font-medium text-foreground/90">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="surface-panel rounded-[32px] p-8 md:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr]">
              <div className="overflow-hidden rounded-[24px] border border-border bg-secondary p-3">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
                  alt="Portrait placeholder for Saad Ali"
                  loading="lazy"
                  className="h-[420px] w-full rounded-[20px] object-cover grayscale"
                />
              </div>

              <div>
                <div className="eyebrow">About the founder</div>
                <h2 className="mt-5 text-3xl font-extrabold md:text-5xl">Saad Ali</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  “I work across CRM systems, workflow automation, AI-powered solutions, website
                  development, and mobile applications. My focus is helping businesses turn
                  complicated processes into practical, connected digital systems.”
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-secondary/60"
                  >
                    LinkedIn [EDITABLE LINK PLACEHOLDER]
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="surface-panel rounded-[32px] p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="eyebrow">Ready to connect</div>
                <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
                  Let&apos;s Solve Something Together.
                </h2>
              </div>
              <Cta href="/contact">Contact Us</Cta>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
