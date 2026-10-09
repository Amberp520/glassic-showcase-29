import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/portfolio/shared";
import { pageHead } from "@/data/projects";
export const Route = createFileRoute("/404")({
  component: NotFoundPage,
  head: () => ({
    ...pageHead(
      "Page not found — amberdesigns",
      "This page is off the grid. Explore thoughtful product design instead.",
      "/404",
    ),
    meta: [
      ...pageHead("Page not found — amberdesigns", "This page is off the grid.", "/404").meta,
      { name: "robots", content: "noindex" },
    ],
  }),
});
