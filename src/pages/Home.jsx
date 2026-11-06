import { usePageHead } from "@/lib/seo";
import { Link } from "react-router-dom";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { NetworkVisual } from "@/components/site/NetworkVisual";
import {
  Cta,
  GlowField,
  Section,
  SectionHeading,
  Reveal,
  fadeUp,
  stagger,
} from "@/components/site/primitives";
import { motion } from "framer-motion";
const capabilities = [
  {
    title: "GHL & CRM Solutions",
    body: "We organize customer data, improve lead flow, and bring pipeline visibility into one connected system.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    alt: "CRM dashboard and sales pipeline workflow",
  },
  {
    title: "AI Agents & Virtual Assistants",
    body: "From lead qualification to day-to-day support, we build AI experiences that assist your business around the clock.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    alt: "AI agents and conversational automation",
  },
  {
    title: "Workflow Automation",
    body: "We connect your tools and remove repetitive work so recurring tasks run without manual intervention.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    alt: "Connected automation and workflow nodes",
  },
  {
    title: "AI Calling Systems",
    body: "We design voice workflows that can answer calls, collect information, and support smooth inbound or outbound conversations.",
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80",
    alt: "Voice AI call workflow and waveform",
  },
  {
    title: "Website Development",
    body: "We build premium digital experiences that present your services clearly and convert interest into action.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    alt: "Modern website design and digital interface",
  },
  {
    title: "Mobile Application Development",
    body: "We create mobile experiences designed around usability, reliability, and the way your business operates.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    alt: "Premium mobile application interface",
  },
];
const businessReasons = [
  {
    title: "Business-First Approach",
    body: "We understand your business processes before recommending or implementing technology.",
  },
  {
    title: "Connected Systems",
    body: "Connect your CRM, communication tools, applications, and workflows into one streamlined ecosystem.",
  },
  {
    title: "Practical AI & Automation",
    body: "Use intelligent automation to reduce repetitive work and improve operational efficiency.",
  },
  {
    title: "Continuous Improvement",
    body: "Build solutions that can evolve as your business grows and its needs change.",
  },
];
const technologyStack = [
  "GoHighLevel",
  "WordPress",
  "React",
  "Flutter",
  "Zapier",
  "Make",
  "n8n",
  "HubSpot",
  "Vapi",
  "AI Integrations",
];
const processSteps = [
  {
    no: "01",
    title: "Understand",
    body: "Understand the business, existing systems, and operational challenges.",
  },
  {
    no: "02",
    title: "Analyze",
    body: "Review workflows, tools, integrations, and opportunities for improvement.",
  },
  {
    no: "03",
    title: "Plan",
    body: "Design a practical solution around business requirements.",
  },
  {
    no: "04",
    title: "Build",
    body: "Develop, integrate, automate, and test the solution.",
  },
  {
    no: "05",
    title: "Optimize",
    body: "Refine the system and improve its performance over time.",
  },
];
const projectCategories = [
  "CRM & Automation Systems",
  "AI Calling Solutions",
  "AI Virtual Assistants",
  "Business Websites",
  "Mobile Applications",
  "Workflow Optimization",
];
const TITLE = "Aveniq Technologies | AI Automation, CRM & Software Development";
const DESCRIPTION =
  "Aveniq Technologies delivers AI automation, GoHighLevel CRM systems, workflow optimization, AI agents, voice systems, websites, and mobile app development.";
const PAGE_HEAD = {
  meta: [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
};
export default function Index() {
  usePageHead(PAGE_HEAD);
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <Navbar />
      <main>
        <section id="home" className="relative overflow-hidden pt-36 md:pt-44">
          <GlowField />
          <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative mx-auto grid max-w-[1280px] items-center gap-16 px-6 pb-24 md:px-10 md:pb-32 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="eyebrow flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Intelligent systems for better business operations
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 text-[2.75rem] font-extrabold leading-[0.98] sm:text-6xl xl:text-7xl"
              >
                Intelligent Technology. <span className="text-gradient">Automated Business.</span>
                <br />
                Better Possibilities.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/85 md:text-xl"
              >
                We help businesses build smarter digital operations through AI-powered automation,
                intelligent CRM systems, custom software, and modern digital experiences.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                From GoHighLevel CRM and workflow optimization to AI agents, voice automation,
                websites, and mobile applications — we turn complex business processes into
                connected solutions.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                <Cta href="/contact">Let&apos;s Build Something</Cta>
                <Cta href="/services" variant="ghost">
                  Explore Our Services
                </Cta>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="surface-panel relative rounded-3xl p-6 shadow-[var(--shadow-elevated)] md:p-8">
                <div className="eyebrow mb-4 flex items-center justify-between">
                  <span>System map</span>
                  <span className="text-primary">live</span>
                </div>
                <NetworkVisual />
              </div>
            </motion.div>
          </div>

          <div className="relative flex justify-center pb-14">
            <div className="flex flex-col items-center gap-3">
              <span className="eyebrow">Scroll</span>
              <span className="h-14 w-px bg-gradient-to-b from-primary to-transparent" />
            </div>
          </div>
        </section>

        <Section>
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Technology That Moves Your <span className="text-gradient">Business Forward</span>
              </>
            }
            lead="We build systems that simplify operations, improve business visibility, and create a better digital experience for teams and customers alike."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 0.05}>
                <article className="surface-panel group overflow-hidden rounded-[28px] p-3 transition-transform duration-300 hover:-translate-y-1">
                  <img
                    src={capability.image}
                    alt={capability.alt}
                    loading="lazy"
                    className="h-56 w-full rounded-[20px] object-cover"
                  />
                  <div className="px-2 pb-2 pt-5">
                    <h3 className="text-2xl font-bold">{capability.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {capability.body}
                    </p>
                    <Link
                      to="/services"
                      className="mt-5 inline-flex items-center text-sm font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      Learn More →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section className="pt-0">
          <div className="surface-panel rounded-[32px] p-8 md:p-10">
            <SectionHeading
              eyebrow="Why businesses choose Aveniq"
              title={
                <>
                  More Than Technology. We Build <span className="text-gradient">Solutions.</span>
                </>
              }
              lead="Every business has different challenges. We combine intelligent automation, connected systems, and thoughtful development to create practical solutions that help businesses operate more efficiently."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {businessReasons.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="group rounded-[24px] border border-border bg-background/40 p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-primary-foreground"
                      style={{ backgroundImage: "var(--gradient-accent)" }}
                    >
                      0{index + 1}
                    </div>
                    <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section className="pt-0">
          <div className="surface-panel rounded-[32px] p-8 md:p-10">
            <SectionHeading
              eyebrow="Technology ecosystem"
              title={
                <>
                  Powerful Technologies. <span className="text-gradient">Connected Solutions.</span>
                </>
              }
              lead="We bring modern platforms and development technologies together to create reliable digital systems for your business."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {technologyStack.map((item, index) => (
                <Reveal key={item} delay={index * 0.04}>
                  <div className="rounded-2xl border border-border bg-secondary/60 px-4 py-4 text-center text-sm font-semibold text-foreground/90">
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Cta href="/contact">Start a Project</Cta>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="Our process"
            title={
              <>
                From Challenge to <span className="text-gradient">Connected Solution</span>
              </>
            }
          />

          <div className="relative mt-20">
            <div className="absolute left-[7px] top-0 h-full w-px bg-border md:left-0 md:top-[7px] md:h-px md:w-full" />
            <div
              className="absolute left-[7px] top-0 h-full w-px origin-top md:left-0 md:top-[7px] md:h-px md:w-full md:origin-left"
              style={{ background: "var(--gradient-accent)", opacity: 0.55 }}
            />
            <div className="grid gap-12 md:grid-cols-5 md:gap-6">
              {processSteps.map((step, index) => (
                <Reveal key={step.no} delay={index * 0.08}>
                  <div className="relative pl-9 md:pl-0 md:pt-10">
                    <span
                      className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-background md:top-0"
                      style={{ background: "var(--gradient-accent)" }}
                    />
                    <span className="font-mono text-3xl font-light text-muted-foreground/40 md:text-4xl">
                      {step.no}
                    </span>
                    <h3 className="mt-3 text-xl font-bold tracking-tight">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="Featured work"
            title={
              <>
                Explore What We Can <span className="text-gradient">Build</span>
              </>
            }
            lead="From CRM systems to intelligent calling and digital products, we design technology that supports real business growth."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {projectCategories.map((category, index) => (
              <Reveal key={category} delay={index * 0.05}>
                <div className="surface-panel rounded-[26px] p-6">
                  <div className="eyebrow mb-4">0{index + 1}</div>
                  <h3 className="text-2xl font-bold">{category}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Built to improve operations, create more efficient systems, and support
                    meaningful business outcomes.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Cta href="/services">Explore All Services</Cta>
          </div>
        </Section>

        <Section>
          <div className="surface-panel rounded-[32px] p-8 md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="eyebrow">Let&apos;s build</div>
                <h2 className="mt-5 text-3xl font-extrabold md:text-5xl">
                  Let&apos;s Build Something That Works Smarter.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Have a business process to automate, a workflow to fix, or a digital product to
                  build? Let&apos;s discuss your next project.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <Cta href="/contact">Start a Conversation</Cta>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
