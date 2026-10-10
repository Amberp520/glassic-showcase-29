# Designer's Canvas

# PRODUCT DESIGNER PORTFOLIO — MASTER BUILD PROMPT

## 1\. PROJECT OVERVIEW

Build a polished, modern, responsive personal portfolio website for a multidisciplinary Product Designer.

Reference website for the overall information architecture and inspiration:
https://amber-studio-sigma.vercel.app/

Use the reference as inspiration for the simplicity, portfolio structure, project presentation, and professional feel, but DO NOT copy its visual design, colors, illustrations, layouts, or branding directly.

The new website should feel like a significant evolution of the reference: cleaner, more premium, more intentional, more interactive, and more representative of a modern Product Designer.

The designer should be positioned as someone who works across:

- Product Design
- UX Design
- UI Design
- Design Systems
- Prototyping
- User Research
- Visual Design
- Branding
- Graphic Design
- Digital Experiences

The website should communicate that "Product Designer" is the main professional identity, while the other design disciplines are capabilities within that broader skill set.

---

# 2\. DESIGN DIRECTION

Create a minimal, editorial, premium portfolio with a refined glassmorphism layer.

The visual language should feel:

- Clean
- Creative
- Intelligent
- Modern
- Confident
- Warm
- Human
- Slightly experimental
- Professional enough for recruiters and international clients
- Tactile and glass-like without becoming overly decorative

Use glassmorphism intentionally and sparingly. Introduce translucent surfaces, soft backdrop blur, subtle borders, and layered depth for selected navigation elements, project metadata panels, floating design artifacts, filter controls, buttons, and supporting cards. The glass effect should feel premium and modern, not like a generic template.

Avoid the generic "AI-generated portfolio" appearance.

Do NOT use:

- Generic SaaS dashboard layouts
- Excessive gradients
- Excessive glassmorphism
- Huge amounts of rounded cards
- Overly complicated animations
- Stock-photo-heavy layouts
- Generic 3D blobs
- Random abstract illustrations that don't relate to design
- Excessive text
- Clutter
- Heavy frosted panels that reduce readability
- Glass effects on every section

Glass surfaces should maintain strong contrast, readable text, restrained corner radii, subtle shadows, and accessible focus states. Keep the main page background mostly solid and editorial, using glass layers to create depth rather than replacing the entire visual system.

---

# 3\. COLOR SYSTEM

Do NOT copy the colors from the reference website.

Create a new sophisticated color palette.

Primary background:
#F4F5F1

Primary text:
#171717

Secondary text:
#686761

Accent:
#6C63FF

Secondary accent:
#D9D3FF

Dark section:
#171717

White:
#FFFFFF

Glass surface:
rgba(255, 255, 255, 0.58)

Glass surface dark:
rgba(23, 23, 23, 0.68)

Glass border:
rgba(255, 255, 255, 0.48)

Soft shadow:
rgba(23, 23, 23, 0.10)

Use the purple accent sparingly for important interactive elements, links, highlights, small graphic details, active navigation states, and selected project elements.

The overall website should remain mostly neutral.

Create the colors as reusable design tokens so they can be changed globally later.

Use backdrop blur only where it improves hierarchy and depth. Ensure glass surfaces remain legible on mobile and do not create excessive visual noise.

---

# 4\. TYPOGRAPHY

Use a modern editorial sans-serif typeface.

Preferred combination:

Headings:
Space Grotesk

Body:
Inter

Use typography with strong hierarchy.

Large headlines should feel expressive but not enormous.

Body copy should remain highly readable.

Avoid excessive font weights.

---

# 5\. NAVIGATION

Create a clean responsive navigation with a subtle glassmorphism treatment.

Desktop navigation:

Logo/name:
"amberdesigns"

Navigation:

Home
Work
Case Studies
About
Services
Contact

Primary CTA:
"Let's work together"

The navbar should be sticky on desktop and mobile, using a translucent glass surface, subtle border, and backdrop blur without obscuring content.

On mobile, use a clean menu drawer with the same restrained glass treatment.

Every navigation item must actually work.

Do NOT create fake navigation links.

---

# 6\. REQUIRED ROUTES / PAGES

Create the following real pages/routes:

/

Home

/work

Work / Projects

/case-studies

Case Studies index

/work/\[project-slug\]

Individual project case study

/about

About

/services

Services

/contact

Contact

Also create:

/404

A custom, visually consistent 404 page.

Every route must work correctly when directly opened in the browser.

Navigation between pages must work.

Browser back/forward navigation must work.

---

# 7\. HOME PAGE

Create a strong but simple hero.

Hero content:

Eyebrow:

"PRODUCT DESIGNER"

Main headline:

"I design digital experiences people actually enjoy using."

Supporting text:

"Product designer focused on turning ideas, problems and opportunities into clear, useful and thoughtful digital experiences."

Primary CTA:

"View my work"

Secondary CTA:

"Let's talk"

Add a small availability/status indicator:

"Available for selected projects"

Use a restrained glassmorphism treatment for the availability indicator and selected floating hero artifacts. Keep the main hero background clean and editorial.

Do not make the hero overly complicated.

---

# 8\. HERO VISUAL / DESIGNER ILLUSTRATION

Instead of using a generic portrait or generic 3D blob, create a distinctive designer-oriented visual composition.

The visual can contain a collection of design artifacts such as:

- Figma-style frames
- UI cards
- typography samples
- color swatches
- wireframe fragments
- cursor icon
- design grid
- sticky-note style research notes
- small interface components
- prototype arrows
- mobile screen fragments
- tiny design annotations

Make it feel like a designer's digital desk/workspace.

The illustration should be abstract and editorial rather than childish.

Use the accent purple subtly.

Use a few layered translucent glass panels with soft borders and backdrop blur to create the feeling of a floating digital workspace. Keep the composition lightweight, readable, and professional rather than turning it into a collection of generic cards.

The illustration should have subtle floating/parallax motion, but remain lightweight and professional.

---

# 9\. INTRO / VALUE SECTION

After the hero, create a short introduction.

Heading:

"Designing beyond the screen."

Copy should explain that product design is not only about making interfaces look good.

Mention:

Understanding users.
Solving problems.
Structuring experiences.
Designing interfaces.
Creating visual systems.
Testing ideas.
Turning concepts into usable products.

Keep the section concise.

Use one subtle translucent glass text panel or supporting visual detail only if it improves the composition. Do not turn the entire section into a card.

---

# 10\. SELECTED WORK

Create a premium project showcase.

Heading:

"Selected work"

Supporting text:

"A few projects where strategy, UX and visual design come together."

Display 4–6 projects.

Each project should have:

- Large visual preview
- Project name
- Short description
- Category
- Year
- Services/design disciplines
- View project link

Use a visually interesting editorial layout rather than identical cards.

Some projects can be large horizontal case-study previews while others can be smaller.

Use glassmorphism selectively for project metadata, category labels, or floating project information overlays. Keep the main project imagery and editorial layout visually dominant.

Add subtle hover interactions:

- Image scale 1.02–1.04
- Project title movement
- Arrow animation
- Slight image transition
- Soft glass overlay transition where appropriate

Keep animations subtle.

---

# 11\. CASE STUDIES SECTION

Create a dedicated case studies section on the homepage and a complete `/case-studies` page.

The homepage section should appear after Selected Work or immediately before the final contact CTA and should clearly communicate that visitors can explore the designer's process, decisions, and outcomes in greater depth.

Heading:

"Explore the case studies"

Supporting text:

"Go behind the screens to see the thinking, process and decisions that shaped each project."

Display 3–6 featured case studies using the same project data as the Work section. Each case study preview should include:

- Project name
- Short summary
- Category
- Year
- Role or discipline
- A strong visual preview
- "Read case study" link

The case study previews should feel distinct from simple project thumbnails. Use editorial layouts, process snippets, annotated UI details, wireframe-to-final comparisons, or outcome highlights to show that these are deeper project stories.

The `/case-studies` page should include:

- A clear page introduction
- Featured case studies
- Optional filtering by discipline
- Short process or outcome highlights
- Links to each full project case study

Potential users, recruiters, and clients should be able to browse projects from the Work page and separately explore detailed case studies from this section.

Do not create duplicate or fake content. Reuse the same project data and ensure every "Read case study" link opens the correct `/work/[project-slug]` route.

---

# 12\. PROJECT CONTENT

Use realistic portfolio content instead of lorem ipsum.

Create the following initial projects:

### PROJECT 01 — LUMORA

Category:
Product Design / UX/UI

Description:
A fictional campus wellbeing platform designed to help students discover quiet spaces, plan restorative breaks and build healthier daily routines.

Showcase:

- Mobile app screens
- Space discovery
- Mood check-in
- Routine planning
- Booking flow
- Personal wellbeing dashboard

---

### PROJECT 02 — ADEL

Category:
Product Design / UX/UI

Description:
A digital experience for a fuel delivery service focused on making fuel access more convenient.

Showcase:

- Landing page
- Ordering flow
- Service selection
- Delivery tracking
- Mobile interface

---

### PROJECT 03 — MOTH

Category:
Product Design / UX/UI

Description:
A laundry service experience designed around simple booking, pickup and delivery.

Showcase:

- Service selection
- Booking flow
- Pickup scheduling
- Order tracking
- Mobile UI

---

### PROJECT 04 — DE LUZ

Category:
Branding / Visual Design / Digital Design

Description:
A furniture brand identity and digital experience combining clean visual design with a premium product presentation.

Showcase:

- Brand identity
- Typography
- Color system
- Product presentation
- Website interface

---

### PROJECT 05 — PICA

Category:
Branding / Visual Design

Description:
A fashion brand visual direction exploring identity, presentation and digital communication.

Showcase:

- Logo/identity
- Typography
- Visual direction
- Social media applications
- Fashion campaign concepts

---

### PROJECT 06 — FLO

Category:
Product Design / UX/UI

Description:
A fitness-focused mobile experience designed to make personal fitness routines easier to understand and follow.

Showcase:

- Onboarding
- Dashboard
- Workout interface
- Progress
- Mobile UI

---

# 13\. CRITICAL PROJECT FUNCTIONALITY

This is extremely important:

The project cards on the homepage, Work page, and Case Studies page MUST NOT be decorative only.

When a visitor clicks:

"View project"

or

"Read case study"

it must open the actual project case-study route.

For example:

/work/lumora

/work/adel

/work/moth

/work/de-luz

/work/pica

/work/flo

Each project must be a complete case-study page.

Do not send users to "#" or create fake links.

---

# 14\. PROJECT CASE STUDY PAGE

Each project page should feel like a real professional design case study.

Structure:

1. Project title
2. Short project description
3. Hero project image
4. Project information
5. Overview
6. Problem
7. Goal
8. Research / discovery
9. User insights
10. Design process
11. Information architecture where appropriate
12. Wireframes
13. Design exploration
14. Final UI
15. Key screens
16. Prototype / interaction section
17. Design decisions
18. Outcome / results
19. What I learned
20. Next project

Project metadata should include:

Role
Timeline
Tools
Discipline
Platform

For example:

Role:
Product Designer

Tools:
Figma, Photoshop

Discipline:
Product Design, UX/UI

Use restrained glassmorphism for selected metadata panels, annotated callouts, prototype controls, or comparison labels. Do not place every section inside a glass card. Maintain a strong editorial rhythm between open layouts, full-width visuals, and occasional translucent surfaces.

---

# 15\. PROJECT VISUAL PRESENTATION

This is one of the most important parts of the website.

Make project pages visually impressive.

Do NOT simply stack screenshots vertically.

Use:

- Large device mockups
- Browser mockups
- Full-width UI sections
- Cropped interface details
- Side-by-side screen comparisons
- Before/after sections when appropriate
- Annotated design decisions
- Flow diagrams
- Wireframe → final UI comparisons
- Interactive prototype previews where appropriate

The screenshots should have proper spacing and hierarchy.

Make the project feel like a real Behance/Dribbble-quality case study, while remaining clean and professional.

Use local placeholder assets/components if actual images are unavailable, but structure the project so real screenshots can easily be replaced later.

Use glass-like overlays only for annotations, labels, floating controls, and selected supporting elements. Keep the actual interface visuals crisp and unobstructed.

---

# 16\. WORK PAGE

Create a dedicated /work page.

Add filtering by:

All
Product Design
UX/UI
Branding
Visual Design

Filters should actually work.

Projects should update without refreshing the page.

Use accessible filter controls with a subtle glass treatment, clear active states, and visible keyboard focus.

Each project should display:

Project image
Project name
Category
Short description
Year

Clicking anywhere on a project should open its case study.

---

# 17\. ABOUT PAGE

Create a personal but professional About page.

Heading:

"Designer, problem solver, constant learner."

Include:

- Short introduction
- Design philosophy
- What I do
- How I approach projects
- Tools
- Skills
- Experience
- Education
- A small visual timeline

Skills can include:

Product Design
UX Design
UI Design
Design Systems
Wireframing
Prototyping
User Research
Visual Design
Brand Identity
Graphic Design
Interaction Design

Tools:

Figma
Adobe Photoshop
Adobe Illustrator
FigJam
WordPress
Notion

Do not make the page feel like a CV pasted onto a website.

Make it feel personal and editorial.

Use glassmorphism sparingly for the visual timeline, toolkit highlights, or selected supporting information while keeping the main content open and readable.

---

# 18\. DESIGN PROCESS SECTION

Create a visual process:

01 — Understand
02 — Research
03 — Define
04 — Explore
05 — Design
06 — Prototype
07 — Refine

Each step should have a short explanation.

Use small visual illustrations or interface artifacts for each step.

A few process artifacts may use translucent glass surfaces and layered depth, but avoid presenting every step as an identical rounded card.

---

# 19\. SERVICES PAGE

Create a /services page.

Heading:

"Design support from idea to interface."

Services:

### Product Design

Turning product ideas into clear, usable experiences.

### UX Design

Research, user flows, information architecture and wireframes.

### UI Design

High-quality interfaces, visual hierarchy and responsive design.

### Design Systems

Reusable components, patterns and visual consistency.

### Branding \& Visual Design

Identity, digital graphics and visual direction.

### Website Design

Modern responsive websites for products, businesses and personal brands.

Each service should have:

Icon/illustration
Short description
Typical deliverables

Use a restrained glass treatment for service details or hover states, while preserving a clean editorial layout and avoiding a wall of identical cards.

---

# 20\. DESIGNER TOOLKIT VISUAL

Create an interactive section showing the designer's toolkit.

Instead of simple text logos, create a visual "designer desk" containing small cards representing:

Figma
Photoshop
Illustrator
FigJam
Notion

Cards should have subtle hover effects.

Use translucent glass surfaces, soft borders, and gentle depth for the toolkit cards. Keep the cards compact and visually varied rather than creating a generic dashboard grid.

---

# 21\. ABOUT / PERSONALITY SECTION

Include a small section that makes the portfolio feel human.

Example:

"Outside the pixels, I'm usually learning something new, exploring visual ideas, studying how people interact with products, or turning random ideas into design concepts."

Keep this warm and authentic.

Avoid sounding overly corporate.

---

# 22\. CONTACT PAGE

Create a beautiful simple contact page.

Heading:

"Have a project in mind?"

Supporting copy:

"Whether you have a product idea, need a fresh interface, or simply want to talk about a design problem, I'd love to hear from you."

Include:

Name
Email
Project type
Message

CTA:

"Send message"

Also include:

Email
LinkedIn
Instagram

The form should have proper validation.

Use a subtle glassmorphism treatment for the form container, with strong contrast, readable labels, clear input states, and accessible focus indicators. Do not sacrifice usability for the visual effect.

If backend/email integration is not configured yet, build the complete frontend form with a clear success state and structure it so an email service can be connected later.

---

# 23\. FOOTER

Create a minimal footer.

Include:

amberdesigns

"Product Designer creating thoughtful digital experiences."

Navigation links.

Social links.

Email.

Copyright.

Add a small line:

"Designed \& built with curiosity."

The footer may use a dark glass-like surface with subtle transparency and border treatment, while maintaining strong contrast and readable links.

---

# 24\. INTERACTION DESIGN

Use motion intentionally.

Add:

- Smooth page transitions
- Scroll reveal animations
- Image hover effects
- Text reveal
- Subtle cursor interactions
- Project card hover states
- Navigation transitions
- Button micro-interactions
- Gentle glass surface transitions on hover and focus

Do NOT animate everything.

Animations should make the website feel polished, not distracting.

Respect prefers-reduced-motion.

Avoid excessive blur animation, rapid parallax, or effects that reduce readability or performance.

---

# 25\. RESPONSIVE DESIGN

The website MUST be mobile-first and fully responsive.

Test:

Mobile:
320px+
375px
390px
430px

Tablet:
768px
1024px

Desktop:
1280px
1440px
1920px

The mobile version should not simply shrink the desktop design.

Recompose layouts where necessary.

Make sure:

- Navigation works
- Project images remain beautiful
- Typography doesn't overflow
- Buttons remain accessible
- Case studies are easy to read
- Horizontal sections don't create accidental scrolling
- Touch targets are comfortable
- Glass panels do not become too opaque, cramped, or difficult to read
- Backdrop blur remains performant on mobile

---

# 26\. ACCESSIBILITY

Follow good accessibility practices.

Include:

- Semantic HTML
- Proper heading hierarchy
- Alt text
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Accessible form labels
- Reduced-motion support

Do not rely on transparency, blur, color, or shadows alone to communicate meaning.

---

# 27\. SEO

Set proper:

Page titles
Meta descriptions
Open Graph metadata
Favicon
Semantic headings

Example homepage title:

"Precious Emenike — Product Designer"

Example description:

"Product designer creating thoughtful digital products, interfaces and visual experiences."

Each project page should have its own title and metadata.

The `/case-studies` page should have dedicated metadata, such as:

Title:
"Case Studies — Precious Emenike"

Description:
"Explore detailed product design, UX/UI, branding and visual design case studies by Precious Emenike."

---

# 28\. TECHNICAL DIRECTION

Use a modern React-based implementation suitable for Lovable.

Use:

React
TypeScript
Tailwind CSS
Reusable components
Lucide icons where icons are needed

Keep the architecture clean and maintainable.

Create reusable components for:

Navbar
Footer
ProjectCard
ProjectGrid
CaseStudyCard
CaseStudySection
ProjectHero
ServiceCard
SkillCard
Button
SectionHeading
ContactForm
GlassPanel

Use reusable data structures for projects rather than hardcoding every project page separately.

Project data should contain:

id
slug
title
category
year
description
heroImage
thumbnail
role
tools
discipline
overview
problem
goal
process
screens
outcome
learnings
caseStudySummary
featuredCaseStudy
caseStudyHighlights

This will make it easy to add future projects and feature them across the Work and Case Studies pages.

Create reusable glassmorphism tokens and utility classes so opacity, blur, borders, shadows, and contrast can be adjusted globally.

---

# 29\. IMPORTANT DESIGN GUARDRAILS

Do not make the website look like a template.

Do not copy the reference website.

Use the reference only to understand the desired simplicity and portfolio structure.

Do not use excessive cards.

Do not use generic stock photography.

Do not fill empty spaces with random decorative objects.

Do not use lorem ipsum.

Do not create fake testimonials.

Do not invent fake client logos.

Do not invent fake statistics.

Do not create fake awards.

Do not use glassmorphism everywhere.

Do not use glass effects that reduce readability, accessibility, or performance.

Use realistic portfolio content and clearly structured project placeholders where information is not available.

The website should look like a real designer's portfolio, not an AI-generated template.

---

# 30\. CONTENT EDITABILITY

Make project content easy to update.

I should be able to replace:

Project images
Project descriptions
Project titles
Tools
Categories
Case-study text
Case-study highlights
Featured case-study status
Social links
Email
About information

without rebuilding the entire website.

---

# 31\. FINAL QUALITY STANDARD

Before considering the project complete, check:

- Every route works.
- Every navigation link works.
- The Case Studies page works.
- Every project opens its own case study.
- Every case study preview links to the correct project.
- No "#" placeholder links remain.
- No lorem ipsum remains.
- No broken images.
- No horizontal overflow.
- Mobile layout works correctly.
- Desktop layout works correctly.
- Typography is consistent.
- Colors are consistent.
- Glassmorphism is subtle, intentional, and accessible.
- Glass surfaces maintain readable contrast.
- Animations are subtle.
- Accessibility basics are implemented.
- SEO metadata exists.
- 404 page works.
- Project filtering works.
- Contact form validation works.
- The website feels like a premium Product Designer portfolio.
- Potential users can easily browse projects and discover detailed case studies.
- Case studies communicate process, decisions, and outcomes rather than displaying screenshots only.

The final result should feel like a designer intentionally designed every part of the website.

Do not stop at a basic functional scaffold.

Prioritize visual quality, spacing, typography, project storytelling, restrained glass depth, case-study discoverability, and usability.

Before making implementation decisions that are unclear, ask me concise clarification questions rather than inventing important personal information.

Build the foundation cleanly so future projects, case studies, and content can be added without restructuring the entire website.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://glassic-showcase-29.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/19151120-4c0e-4966-a963-c204c765ca13).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
