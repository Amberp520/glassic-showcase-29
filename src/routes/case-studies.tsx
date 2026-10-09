import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { projects, filters, projectMatches, owner, pageHead } from "@/data/projects";
import { PageIntro, CaseStudyCard, DesignProcess, ContactCTA } from "@/components/portfolio/shared";
export const Route = createFileRoute("/case-studies")({
  component: CaseStudies,
  head: () =>
    pageHead(
      `Case Studies — ${owner.name}`,
      `Explore detailed product design, UX/UI, branding and visual design case studies by ${owner.name}.`,
      "/case-studies",
    ),
});
function CaseStudies() {
  const [filter, setFilter] = useState("All");
  return (
    <main className="page-enter">
      <PageIntro eyebrow="BEHIND THE SCREENS" title="The thinking makes the difference.">
        Go behind the screens to see the thinking, process and decisions that shaped each project.
        These concept studies share design rationale, not unverified client results.
      </PageIntro>
      <section className="container pb-16">
        <div className="filters glass" role="group" aria-label="Filter case studies">
          {filters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? "portfolio" : "ghost"}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>
        <div className="project-grid">
          {projects
            .filter((p) => projectMatches(p, filter))
            .map((p) => (
              <CaseStudyCard project={p} key={p.id} />
            ))}
        </div>
      </section>
      <DesignProcess />
      <ContactCTA />
    </main>
  );
}
