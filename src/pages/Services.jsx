import { usePageHead } from "@/lib/seo";
import { Link } from "react-router-dom";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { Cta, Section, SectionHeading } from "@/components/site/primitives";
const SERVICES = [
  {
    number: "01",
    title: "GoHighLevel CRM & Business Management",
    description:
      "We help businesses configure, organize, and optimize their CRM environments so leads, conversations, appointments, and customer relationships stay connected.",
    bullets: [
      "GoHighLevel account setup",
      "CRM configuration",
      "Pipeline creation and management",
      "Opportunity management",
      "Contact organization",
      "Custom fields and tags",
      "Calendar configuration",
      "Appointment management",
      "Lead routing",
      "CRM cleanup and optimization",
      "Third-party integrations",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "CRM dashboard and pipeline organization",
  },
  {
    number: "02",
    title: "Workflow Auditing, Debugging & Repair",
    description:
      "Automation should make business operations easier, not create more problems. We inspect existing workflows, identify errors, troubleshoot broken actions, and improve automation reliability.",
    bullets: [
      "Existing workflow inspection",
      "Trigger verification",
      "Action verification",
      "Conditional logic review",
      "Wait-step inspection",
      "Duplicate automation detection",
      "Failed workflow troubleshooting",
      "Integration error investigation",
      "Workflow repair",
      "Automation optimization",
      "Testing and validation",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Workflow debugging and automation diagram",
  },
  {
    number: "03",
    title: "Eliminate Repetitive Work With Smart Automation",
    description:
      "We design connected automation systems that reduce repetitive manual tasks and help businesses manage their processes more efficiently.",
    bullets: [
      "Lead capture automation",
      "Lead assignment",
      "Follow-up sequences",
      "Email automation",
      "SMS automation",
      "Appointment reminders",
      "Internal notifications",
      "Customer onboarding",
      "CRM synchronization",
      "Third-party integrations",
      "Business process automation",
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    alt: "Business workflow automation system",
  },
  {
    number: "04",
    title: "Intelligent AI Agents That Do More Than Respond",
    description:
      "We design AI-powered agents that can understand instructions, interact with connected systems, and assist with business tasks.",
    bullets: [
      "AI agent design",
      "Conversational AI",
      "Business process assistance",
      "CRM-connected agents",
      "Lead qualification",
      "Appointment assistance",
      "Information collection",
      "Customer support automation",
      "Tool and API integrations",
      "Agent workflow design",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    alt: "AI network and intelligent automation",
  },
  {
    number: "05",
    title: "Your AI-Powered Virtual Assistant",
    description:
      "AI virtual assistants can help businesses handle repetitive conversations, organize information, support customers, and manage routine operational tasks.",
    bullets: [
      "Customer inquiry handling",
      "Frequently asked questions",
      "Lead information collection",
      "Appointment scheduling",
      "Customer support",
      "CRM record updates",
      "Conversation management",
      "Business information assistance",
      "Connected workflow execution",
    ],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    alt: "AI assistant interface",
  },
  {
    number: "06",
    title: "Never Miss an Important Incoming Conversation",
    description:
      "Build AI-powered inbound calling systems that can answer incoming calls, understand customer requests, collect information, and assist with business operations.",
    bullets: [
      "Incoming call answering",
      "Natural voice conversations",
      "Customer inquiry handling",
      "Lead information collection",
      "Appointment booking",
      "Call routing",
      "CRM integration",
      "Call summaries",
      "Business-specific conversation flows",
    ],
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
    alt: "AI voice assistant and waveform interface",
  },
  {
    number: "07",
    title: "Automated Outbound Conversations at Scale",
    description:
      "AI-powered outbound calling systems can support business communication, lead follow-up, appointment reminders, and customer engagement.",
    bullets: [
      "Lead follow-up calls",
      "Appointment reminders",
      "Lead qualification",
      "Customer reactivation",
      "Information collection",
      "Call outcome tracking",
      "CRM updates",
      "Automated call workflows",
    ],
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
    alt: "Outbound AI calling interface",
  },
  {
    number: "08",
    title: "Websites That Represent Your Business",
    description:
      "We design and develop modern websites that communicate your brand, present your services, and create professional digital experiences.",
    bullets: [
      "Business websites",
      "Agency websites",
      "Landing pages",
      "WordPress development",
      "React development",
      "Responsive interfaces",
      "UI/UX implementation",
      "Website optimization",
      "Contact form integration",
      "CRM integrations",
      "SEO-friendly structure",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern website and digital development mockup",
  },
  {
    number: "09",
    title: "Build Your Next Mobile Experience",
    description:
      "We develop modern mobile applications designed around business requirements, usability, and reliable functionality.",
    bullets: [
      "Flutter development",
      "Cross-platform applications",
      "Android applications",
      "iOS applications",
      "Mobile UI/UX",
      "API integration",
      "Backend connectivity",
      "Business applications",
      "Application optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    alt: "Mobile application interface and device mockup",
  },
  {
    number: "10",
    title: "Connect the Tools Your Business Depends On",
    description:
      "We connect platforms, applications, and business systems to create more unified digital operations.",
    bullets: [
      "API integrations",
      "CRM integrations",
      "Webhook automation",
      "Zapier integrations",
      "Make integrations",
      "n8n integrations",
      "GoHighLevel integrations",
      "Data synchronization",
      "Cross-platform workflows",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    alt: "Connected digital systems and integrations",
  },
];
const FAQ_ITEMS = [
  {
    question: "What types of businesses can you work with?",
    answer:
      "We work with businesses that want to improve operations, automate repetitive work, organize customer data, and build better digital experiences. The right solution depends on your current setup and business goals.",
  },
  {
    question: "Can you repair existing GoHighLevel workflows?",
    answer:
      "Yes. We inspect existing workflows, identify triggers and action failures, fix broken logic, and optimize the system so it works reliably with your business process.",
  },
  {
    question: "Can you integrate different business platforms?",
    answer:
      "Yes. We connect CRM tools, communication systems, forms, apps, and internal workflows using APIs, webhooks, and automation platforms such as Zapier, Make, n8n, and GoHighLevel.",
  },
  {
    question: "Can AI agents connect with CRM systems?",
    answer:
      "Yes. AI agents can be connected to CRM data, customer records, workflows, and service tools when the correct permissions and integrations are in place.",
  },
  {
    question: "Can you build inbound and outbound AI calling agents?",
    answer:
      "Yes. We design both inbound and outbound voice systems that can answer calls, collect information, qualify leads, assist customers, and update systems as needed.",
  },
  {
    question: "Do you develop both websites and mobile applications?",
    answer:
      "Yes. We build responsive business websites, launch pages, and mobile applications for businesses that need a better digital experience and a more connected user journey.",
  },
  {
    question: "Can you work with an existing automation setup?",
    answer:
      "Yes. We often audit, repair, improve, and extend current setups without forcing a complete rebuild when a practical improvement is a better fit.",
  },
  {
    question: "How do we get started?",
    answer:
      "Start by telling us what you want to automate, improve, or build. We review your requirements, the systems involved, and the right approach before proposing the next steps.",
  },
];
const PAGE_HEAD = {
  meta: [
    { title: "AI Automation, GHL CRM & Development Services | Aveniq Technologies" },
    {
      name: "description",
      content:
        "GoHighLevel CRM setup, workflow automation, AI agents, AI calling, website development, mobile apps, and integrations for modern businesses.",
    },
    {
      property: "og:title",
      content: "AI Automation, GHL CRM & Development Services | Aveniq Technologies",
    },
    {
      property: "og:description",
      content:
        "Explore CRM, automation, AI, software, and digital solutions built around business operations.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
};
export default function ServicesPage() {
  usePageHead(PAGE_HEAD);
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-36 md:pt-44">
          <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(91,140,255,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(167,103,255,0.14),transparent_30%)]" />
          <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-10 md:px-10 md:pb-20">
            <div className="max-w-4xl">
              <div className="eyebrow">Services</div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                Technology &amp; Automation Solutions Built Around Your Business
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                We combine CRM expertise, intelligent automation, AI-powered systems, and software
                development to help businesses simplify operations and build better digital
                experiences.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Cta href="/contact">Discuss Your Project</Cta>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary/60"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Section>
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="surface-panel rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="eyebrow mb-4">Service {service.number}</div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {SERVICES.map((service, index) => (
          <Section key={service.title} className={index % 2 === 0 ? "pt-0" : "pt-0"}>
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="eyebrow">Service {service.number}</div>
                <h2 className="mt-5 text-3xl font-extrabold md:text-5xl">{service.title}</h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {service.description}
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-border bg-secondary p-3 shadow-[var(--shadow-elevated)]">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-[420px] w-full rounded-[20px] object-cover"
                />
              </div>
            </div>
          </Section>
        ))}

        <Section>
          <SectionHeading
            eyebrow="Technology stack"
            title={
              <>
                Tools and platforms we use to build{" "}
                <span className="text-gradient">connected systems</span>
              </>
            }
            lead="We select tools based on what best fits the business process, existing operations, and the complexity of the solution."
          />
          <div className="mt-12 flex flex-wrap gap-3">
            {[
              "GoHighLevel",
              "WordPress",
              "React",
              "Flutter",
              "Zapier",
              "Make",
              "n8n",
              "Vapi",
              "HubSpot",
              "API Integrations",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="How we approach projects"
            title={
              <>
                Clear thinking, disciplined execution, and{" "}
                <span className="text-gradient">measurable improvement</span>
              </>
            }
            lead="We focus on practical systems that support the way your business already works, then improve the process where a smarter solution adds value."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-7">
            {[
              "Understand requirements",
              "Identify the right solution",
              "Plan architecture",
              "Implement",
              "Test",
              "Deliver",
              "Optimize",
            ].map((step, index) => (
              <div key={step} className="surface-panel rounded-2xl p-5">
                <span className="eyebrow text-[0.55rem]">0{index + 1}</span>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">{step}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Questions we hear most often{" "}
                <span className="text-gradient">before a project begins</span>
              </>
            }
          />
          <div className="mt-12 grid gap-4">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-border bg-secondary/40 p-5 open:border-primary/40"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-foreground md:text-lg">
                  {item.question}
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Section>

        <Section>
          <div className="surface-panel rounded-[32px] p-8 md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="eyebrow">Next step</div>
                <h2 className="mt-5 text-3xl font-extrabold md:text-5xl">
                  Have a project in mind?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Tell us what you want to build, automate, or improve. We&apos;ll help you explore
                  the right solution.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <Cta href="/contact">Discuss Your Project</Cta>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
