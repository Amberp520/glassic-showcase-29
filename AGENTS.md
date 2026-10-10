<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep all project stories and owner information in the shared typed data module, with reusable visual and story components; this allows content replacement without restructuring routes.
- Use a Work layout with an index and a dynamic slug leaf; this preserves direct project URLs and shared content.
- The contact form prepares an email draft client-side until a delivery service is configured; never report a message as sent without delivery confirmation.
- Treat self-initiated case-study content as concept rationale, not verified research or results; this prevents unsupported portfolio claims.
- Use a single reusable inline vector logo in header and footer, with matching favicon geometry; this preserves theme-aware color and crisp small-size rendering.
- Keep high-fidelity project-specific screen renderers scoped by slug in the visual layer; this upgrades targeted concepts without changing stories, routes or unrelated previews.
