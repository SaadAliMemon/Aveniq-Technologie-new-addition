import { usePageHead } from "@/lib/seo";
import { Link } from "react-router-dom";
const PAGE_HEAD = {
  meta: [
    { title: "Privacy Policy — Aveniq Technologies" },
    {
      name: "description",
      content:
        "How inquiries and contact information submitted to Aveniq Technologies are handled.",
    },
    { property: "og:title", content: "Privacy Policy — Aveniq Technologies" },
    {
      property: "og:description",
      content:
        "How inquiries and contact information submitted to Aveniq Technologies are handled.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
};
export default function Privacy() {
  usePageHead(PAGE_HEAD);
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 md:px-10">
      <Link to="/" className="eyebrow">
        ← Back home
      </Link>
      <h1 className="mt-8 text-4xl font-extrabold md:text-5xl">Privacy Policy</h1>
      <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
        <p>
          This site collects only the information you choose to send through the contact form or by
          email: your name, email address, phone number, business name, and the details of your
          inquiry.
        </p>
        <p>
          That information is used solely to respond to your inquiry and discuss potential work. It
          is not sold or shared with third parties.
        </p>
        <p>
          To request removal of your information, email{" "}
          <a href="mailto:saad45881@gmail.com" className="link-underline text-foreground">
            saad45881@gmail.com
          </a>
          .
        </p>
        <p className="font-mono text-xs">
          [Placeholder — review and replace with your final legal text before publishing.]
        </p>
      </div>
    </main>
  );
}
