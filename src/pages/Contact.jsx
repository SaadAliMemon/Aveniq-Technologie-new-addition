import { usePageHead } from "@/lib/seo";
import { useState } from "react";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { Cta, Section, SectionHeading } from "@/components/site/primitives";
const SERVICE_OPTIONS = [
  "GoHighLevel & CRM",
  "Workflow Inspection & Repair",
  "Business Automation",
  "Agentic AI",
  "AI Virtual Assistant",
  "Inbound AI Calling",
  "Outbound AI Calling",
  "Website Development",
  "Mobile Application Development",
  "Integrations",
  "Other",
];
const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: SERVICE_OPTIONS[0],
  message: "",
};
const PAGE_HEAD = {
  meta: [
    { title: "Contact Aveniq Technologies | Start Your Technology Project" },
    {
      name: "description",
      content:
        "Contact Aveniq Technologies for GoHighLevel CRM support, automation systems, AI agents, web development, mobile apps, and digital consulting.",
    },
    {
      property: "og:title",
      content: "Contact Aveniq Technologies | Start Your Technology Project",
    },
    {
      property: "og:description",
      content: "Tell us about your next CRM, automation, AI, website, or mobile project.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
};
export default function ContactPage() {
  usePageHead(PAGE_HEAD);
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const validate = () => {
    const nextErrors = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please use a valid email address.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Please share a few details about your project.";
    }
    if (form.phone.trim() && !/^[+()\-0-9\s]{7,}$/.test(form.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      setSubmitted(false);
      return;
    }
    const subject = `Project inquiry — ${form.fullName.trim()}`;
    const body = [
      `Full Name: ${form.fullName.trim()}`,
      `Work Email: ${form.email.trim()}`,
      `Phone Number: ${form.phone.trim() || "Not provided"}`,
      `Company Name: ${form.company.trim() || "Not provided"}`,
      `Service Required: ${form.service}`,
      "",
      `Project Details / Message:\n${form.message.trim()}`,
    ].join("\n");
    const mailto = `mailto:saad45881@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setForm(initialValues);
  };
  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-36 md:pt-44">
          <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(91,140,255,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(167,103,255,0.18),transparent_30%)]" />
          <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-10 md:px-10 md:pb-20">
            <div className="max-w-4xl">
              <div className="eyebrow">Contact</div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                Let&apos;s Talk About Your Next Project
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Whether you need CRM optimization, workflow automation, AI calling, a virtual
                assistant, a website, or a mobile application, we&apos;d love to understand what
                you&apos;re building.
              </p>
            </div>
          </div>
        </section>

        <Section className="pt-0">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="surface-panel rounded-[28px] p-8">
              <SectionHeading
                eyebrow="Contact information"
                title="Saad Ali"
                lead="AI automation, CRM, software, and digital technology solutions."
              />

              <div className="mt-8 space-y-6 text-sm">
                <div>
                  <div className="eyebrow">Phone</div>
                  <a
                    href="tel:03232915684"
                    className="mt-2 inline-block text-lg font-semibold text-foreground hover:text-primary"
                  >
                    03232915684
                  </a>
                </div>
                <div>
                  <div className="eyebrow">Email</div>
                  <a
                    href="mailto:saad45881@gmail.com"
                    className="mt-2 inline-block break-all text-lg font-semibold text-foreground hover:text-primary"
                  >
                    saad45881@gmail.com
                  </a>
                </div>
                <div>
                  <div className="eyebrow">LinkedIn</div>
                  <a
                    href="#"
                    className="mt-2 inline-block text-lg font-semibold text-foreground hover:text-primary"
                  >
                    LinkedIn [EDITABLE LINK PLACEHOLDER]
                  </a>
                </div>
              </div>
            </div>

            <div className="surface-panel rounded-[28px] p-8 md:p-10">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="eyebrow">Full Name</span>
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={(event) => updateField("fullName", event.target.value)}
                      className="rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                    />
                    {errors.fullName ? (
                      <span className="text-xs text-destructive">{errors.fullName}</span>
                    ) : null}
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="eyebrow">Work Email</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      className="rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                    />
                    {errors.email ? (
                      <span className="text-xs text-destructive">{errors.email}</span>
                    ) : null}
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="eyebrow">Phone Number</span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      className="rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                    />
                    {errors.phone ? (
                      <span className="text-xs text-destructive">{errors.phone}</span>
                    ) : null}
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="eyebrow">Company Name</span>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(event) => updateField("company", event.target.value)}
                      className="rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="eyebrow">Service Required</span>
                  <select
                    value={form.service}
                    onChange={(event) => updateField("service", event.target.value)}
                    className="rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="eyebrow">Project Details / Message</span>
                  <textarea
                    rows={6}
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    className="rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                  />
                  {errors.message ? (
                    <span className="text-xs text-destructive">{errors.message}</span>
                  ) : null}
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ backgroundImage: "var(--gradient-accent)" }}
                >
                  Send Project Inquiry
                </button>

                {submitted ? (
                  <p className="rounded-xl border border-border bg-secondary/50 p-3 text-sm text-muted-foreground">
                    Your email app should open with the inquiry ready to send. To enable live
                    delivery, connect this form to a backend endpoint or email service. No private
                    keys are stored in the frontend.
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="What happens next"
            title={
              <>
                A clear process from first inquiry to{" "}
                <span className="text-gradient">next steps</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              "You Share Your Requirements",
              "We Review Your Project",
              "We Discuss the Right Approach",
              "We Plan the Next Steps",
            ].map((item, index) => (
              <div key={item} className="surface-panel rounded-2xl p-6">
                <span className="eyebrow text-[0.55rem]">0{index + 1}</span>
                <p className="mt-4 text-base font-medium text-foreground/90">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="surface-panel rounded-[32px] p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="eyebrow">Questions before you start?</div>
                <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
                  Have a Question Before Getting Started?
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Cta href="mailto:saad45881@gmail.com">Email Us</Cta>
                <Cta href="tel:03232915684" variant="ghost">
                  Call Now
                </Cta>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
