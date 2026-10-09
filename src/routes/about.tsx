import { createFileRoute } from "@tanstack/react-router";
import { pageHead, owner } from "@/data/projects";
import { PageIntro, DesignProcess, Toolkit, ContactCTA } from "@/components/portfolio/shared";
import { DesignerWorkspace } from "@/components/portfolio/visuals";
export const Route = createFileRoute("/about")({
  component: About,
  head: () =>
    pageHead(
      `About — ${owner.name}`,
      "Meet the product designer behind amberdesigns: a biochemistry graduate exploring thoughtful digital experiences.",
      "/about",
    ),
});
const skills = [
  "Product Design",
  "UX Design",
  "UI Design",
  "Design Systems",
  "Wireframing",
  "Prototyping",
  "User Research",
  "Visual Design",
  "Brand Identity",
  "Graphic Design",
  "Interaction Design",
];
function About() {
  return (
    <main className="page-enter">
      <PageIntro
        eyebrow="A PERSON BEHIND THE PIXELS"
        title="Designer, problem solver, constant learner."
      >
        I'm {owner.name}, a product designer based in {owner.location}. My background in
        biochemistry brings a curious, analytical perspective to the way I approach design.
      </PageIntro>
      <section className="section container content-grid">
        <div className="prose">
          <h2>Curiosity is the common thread.</h2>
          <p>
            Studying biochemistry taught me to look beneath the surface, understand systems and ask
            better questions. Design gives that curiosity a different canvas: the products and
            experiences people use every day.
          </p>
          <p>
            My practice spans product design, UX/UI and visual communication. I care about making
            complex things understandable and useful things feel considered.
          </p>
          <h3>Clear thinking. Thoughtful making.</h3>
          <p>
            I start by understanding the problem, explore different directions, then connect
            structure and visual expression. A beautiful interface matters—but so do the decisions
            that make it work.
          </p>
        </div>
        <div className="pt-12">
          <DesignerWorkspace />
          <p className="text-muted-foreground text-xs mt-10">
            An analytical mind. A creative point of view.
          </p>
        </div>
      </section>
      <section className="section container content-grid">
        <div className="prose">
          <h2>A growing design practice.</h2>
          <p>
            My portfolio brings together self-initiated product and brand explorations. Each is a
            space to develop my craft, question assumptions and connect an idea to a usable
            experience.
          </p>
          <h3>What I bring to the table</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {skills.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
        <div className="timeline glass">
          <span className="eyebrow text-muted-foreground block mb-6">LEARNING & FOUNDATIONS</span>
          <div className="timeline-item">
            <h3 className="text-xl">B.Sc. Biochemistry</h3>
            <p className="text-sm text-muted-foreground">
              Alex Ekwueme Federal University Ndufu-Alike, Ikwo (AE-FUNAI)
            </p>
          </div>
          <div className="timeline-item">
            <h3 className="text-xl">UI/UX Design</h3>
            <p className="text-sm text-muted-foreground">Udemy Certificate</p>
          </div>
          <div className="timeline-item">
            <h3 className="text-xl">Figma</h3>
            <p className="text-sm text-muted-foreground">Udemy Certificate</p>
          </div>
        </div>
      </section>
      <DesignProcess />
      <Toolkit />
      <section className="section container prose">
        <span className="eyebrow text-muted-foreground">OUTSIDE THE PIXELS</span>
        <h2 className="mt-5">Always a little curious.</h2>
        <p className="max-w-2xl">
          Outside the pixels, I'm usually learning something new, exploring visual ideas, studying
          how people interact with products, or turning random ideas into design concepts.
        </p>
      </section>
      <ContactCTA />
    </main>
  );
}
