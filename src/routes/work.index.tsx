import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { projects, filters, projectMatches, pageHead, owner } from "@/data/projects";
import { PageIntro, ProjectGrid, ContactCTA } from "@/components/portfolio/shared";
export const Route = createFileRoute("/work/")({
  component: WorkPage,
  head: () =>
    pageHead(
      `Work — ${owner.name}`,
      "Explore product design, UX/UI, branding and visual design projects.",
      "/work",
    ),
});
function WorkPage() {
  const [filter, setFilter] = useState("All");
  const items = projects.filter((p) => projectMatches(p, filter));
  return (
    <main className="page-enter">
      <PageIntro eyebrow="IDEAS, MADE TANGIBLE" title="Thoughtful work. Real possibilities.">
        A collection of self-initiated design concepts exploring clearer experiences, expressive
        identities and useful everyday products.
      </PageIntro>
      <section className="container pb-16">
        <div className="filters glass" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? "portfolio" : "ghost"}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f}
            </Button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          {items.length} projects
        </p>
        <ProjectGrid items={items} />
      </section>
      <ContactCTA />
    </main>
  );
}
