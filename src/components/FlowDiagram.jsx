export default function FlowDiagram() {
  return (
    <div className="flex items-center justify-center gap-6 my-8 flex-wrap max-md:flex-col">
      {/* Figma */}
      <div className="py-4 px-6 bg-bg-surface border border-code-border rounded-lg font-mono text-[0.8rem] text-text text-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 4 }}>
          <path d="M8 2H12V8H8C5.79 8 4 6.21 4 4S5.79 2 8 2Z" fill="#F24E1E"/>
          <path d="M12 2H16C18.21 2 20 3.79 20 6S18.21 8 16 8H12V2Z" fill="#FF7262"/>
          <path d="M8 8H12V14H8C5.79 14 4 12.21 4 10S5.79 8 8 8Z" fill="#A259FF"/>
          <path d="M12 8H16C18.21 8 20 9.79 20 12S18.21 14 16 14H12V8Z" fill="#1ABCFE"/>
          <path d="M8 14H12V20C12 22.21 10.21 22 8 22S4 20.21 4 18V14H8Z" fill="#0ACF83"/>
        </svg>
        Figma
      </div>

      <div className="text-[1.2rem] text-text-dim">&rarr;</div>

      {/* Claude Code */}
      <div className="py-4 px-6 border border-accent/30 bg-accent-glow rounded-lg font-mono text-[0.8rem] text-text text-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 4 }}>
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="var(--color-accent)" strokeWidth="1.5"/>
          <path d="M8 12h8M12 8v8" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        Claude Code
      </div>

      <div className="text-[1.2rem] text-text-dim">&rarr;</div>

      {/* Working code */}
      <div className="py-4 px-6 bg-bg-surface border border-code-border rounded-lg font-mono text-[0.8rem] text-text text-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 4 }}>
          <path d="M4 5L10 5L12 3L20 3V19L14 19L12 21L4 21V5Z" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
          <path d="M12 3V21" stroke="var(--color-text-muted)" strokeWidth="1.5"/>
        </svg>
        Working code
      </div>
    </div>
  )
}
