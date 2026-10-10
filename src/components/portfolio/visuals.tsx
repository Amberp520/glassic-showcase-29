import {
  ArrowUpRight,
  MousePointer2,
  Plus,
  Sparkles,
  MapPin,
  Check,
  Circle,
  Layers,
  Heart,
  Dumbbell,
  Truck,
  Shirt,
  Fuel,
  Figma,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { FinishedPhone, FinishedProjectVisual, hasFinishedVisual } from "./finished-visuals";
export function DesignerWorkspace() {
  return (
    <div
      className="workspace"
      role="img"
      aria-label="A designer's digital desk with typography, an interface frame, color swatches and a cursor"
    >
      <div className="desk-frame">
        <div className="desk-toolbar">
          <span className="flex items-center gap-1">
            <Figma size={11} /> A little exploration
          </span>
          <Plus size={10} />
        </div>
        <div className="desk-art">
          <div>
            <div className="desk-type">Aa.</div>
            <span className="text-[8px] text-muted-foreground">TYPE WITH INTENTION</span>
          </div>
          <div className="desk-mini">
            <Sparkles size={16} />
            <div className="desk-mini-line" />
            <div className="desk-mini-line" />
            <div className="mt-3 flex justify-end">
              <ArrowUpRight size={13} />
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-border pt-2 text-[8px] text-muted-foreground">
          Good design starts with a good question.
        </div>
      </div>
      <div className="desk-note">
        Make it useful.
        <br />
        Then make it beautiful.
      </div>
      <div className="desk-swatches glass">
        <div className="swatch bg-primary" />
        <div className="swatch bg-secondary" />
        <div className="swatch bg-ink" />
        <div className="swatch bg-background border border-border" />
      </div>
      <MousePointer2 className="desk-cursor" size={30} fill="currentColor" />
      <span className="desk-label">designer at work</span>
    </div>
  );
}
export function PhoneScreen({ project, step = 0 }: { project: Project; step?: number }) {
  if (hasFinishedVisual(project.slug)) return <FinishedPhone project={project} step={step} />;
  const Icon =
    project.slug === "adel"
      ? Fuel
      : project.slug === "moth"
        ? Shirt
        : project.slug === "flo"
          ? Dumbbell
          : Heart;
  return (
    <div className="phone">
      <div className="phone-brand flex justify-between">
        {project.title.toLowerCase()}
        <Circle size={10} />
      </div>
      <h4>{project.screens[step % project.screens.length]}</h4>
      <div className="phone-feature">
        <Icon size={24} />
        <strong>
          {step === 0 ? "A simpler everyday." : step === 1 ? "Made around you." : "You’re all set."}
        </strong>
        <span>
          {project.slug === "adel"
            ? "Convenience, delivered."
            : project.slug === "moth"
              ? "Care for every detail."
              : "Small steps. A better day."}
        </span>
      </div>
      <div className="phone-row">
        <MapPin size={11} />
        <span>
          {project.slug === "adel"
            ? "Choose delivery location"
            : project.slug === "moth"
              ? "Pickup at your doorstep"
              : "Your next step"}
        </span>
      </div>
      <div className="phone-row">
        <Check size={11} />
        <span>Clear. Simple. Thoughtful.</span>
      </div>
      <div className="phone-button">
        {step === 0 ? "Explore" : step === 1 ? "Continue" : "View details"} →
      </div>
    </div>
  );
}
export function ProjectVisual({
  project,
  priority = false,
  forceUI = false,
}: {
  project: Project;
  priority?: boolean;
  forceUI?: boolean;
}) {
  if (hasFinishedVisual(project.slug)) return <FinishedProjectVisual project={project} />;
  if (project.heroImage && !forceUI)
    return (
      <img
        src={project.heroImage}
        alt={`${project.title} concept: ${project.slug === "lumora" ? "wellbeing mobile screens with mood check-in, space discovery and routine planning" : "furniture brand website with a product-led editorial layout"}`}
        width={1536}
        height={1024}
        loading={priority ? "eager" : "lazy"}
      />
    );
  return (
    <div
      className={`mock-art theme-${project.slug}`}
      role="img"
      aria-label={`${project.title} illustrative interface design`}
    >
      {project.slug === "pica" ? (
        <div className="fashion-layout">
          <div className="fashion-poster">
            <strong>pica.</strong>
            <Layers size={45} />
            <p>
              A NEW
              <br />
              POINT OF VIEW.
              <br />
              COLLECTION / 01
            </p>
          </div>
          <div className="fashion-type">
            Not just
            <br />
            worn.
            <br />
            <span className="text-muted-foreground">Expressed.</span>
            <ArrowUpRight className="mt-4" size={40} />
          </div>
        </div>
      ) : (
        <>
          <PhoneScreen project={project} />
          <PhoneScreen project={project} step={1} />
        </>
      )}
    </div>
  );
}
export function ProcessArtifact({ index }: { index: number }) {
  const icons = [MousePointer2, Heart, Layers, Sparkles, Figma, ArrowUpRight, Check];
  const Icon = icons[index] ?? Check;
  return <Icon className="text-primary" size={22} strokeWidth={1.4} />;
}
