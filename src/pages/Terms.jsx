import { usePageHead } from "@/lib/seo";
import { Link } from "react-router-dom";
const PAGE_HEAD = {
  meta: [
    { title: "Terms & Conditions — Aveniq Technologies" },
    {
      name: "description",
      content: "Terms covering use of this site and engagement for project work.",
    },
    { property: "og:title", content: "Terms & Conditions — Aveniq Technologies" },
    {
      property: "og:description",
      content: "Terms covering use of this site and engagement for project work.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
};
export default function Terms() {
  usePageHead(PAGE_HEAD);
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 md:px-10">
      <Link to="/" className="eyebrow">
        ← Back home
      </Link>
      <h1 className="mt-8 text-4xl font-extrabold md:text-5xl">Terms &amp; Conditions</h1>
      <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
        <p>
          The content on this site describes services offered and is provided for general
          information. It does not constitute a contract or a guarantee of any specific result.
        </p>
        <p>
          Project scope, timelines, deliverables, and payment terms are agreed separately in writing
          before work begins.
        </p>
        <p>
          All site content, design, and code remain the property of Aveniq Technologies unless
          otherwise agreed.
        </p>
        <p className="font-mono text-xs">
          [Placeholder — review and replace with your final legal text before publishing.]
        </p>
      </div>
    </main>
  );
}
