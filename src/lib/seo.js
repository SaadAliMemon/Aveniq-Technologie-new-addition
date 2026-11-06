import { useEffect } from "react";

/**
 * Sets the page <title> and <meta> tags for the current page.
 * Accepts the same shape the pages already use: { meta: [{ title }, { name, content }, { property, content }] }
 */
export function usePageHead(head) {
  useEffect(() => {
    if (!head || !Array.isArray(head.meta)) return;

    for (const tag of head.meta) {
      if (tag.title) {
        document.title = tag.title;
        continue;
      }

      const key = tag.name ? "name" : tag.property ? "property" : null;
      if (!key || tag.content == null) continue;

      const value = tag[key];
      let el = document.head.querySelector(`meta[${key}="${value}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(key, value);
        document.head.appendChild(el);
      }
      el.setAttribute("content", tag.content);
    }
  }, [head]);
}
