/** One shared vector logo; currentColor keeps it theme-aware. */
export function DesignerLogo() {
  return (
    <svg className="designer-logo" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M10 54 31 10l14 31c3 7 6 10 10 13" stroke="currentColor" strokeWidth="5" strokeLinecap="square" strokeLinejoin="round" />
      <path d="M19 37h25" stroke="currentColor" strokeWidth="4" />
      <path d="M29 33h8v8h-8z" fill="currentColor" />
    </svg>
  );
}