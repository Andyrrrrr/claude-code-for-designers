export default function Comparison({ bad, good }) {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mt-8">
      <div className="p-6 rounded-lg border border-code-border bg-bg-surface opacity-60">
        <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] mb-4 text-text-dim">
          {bad.label}
        </div>
        <p className="text-[0.9rem] leading-[1.65] text-text-muted">{bad.content}</p>
      </div>
      <div className="p-6 rounded-lg border border-accent/25 bg-accent-glow">
        <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] mb-4 text-accent">
          {good.label}
        </div>
        <p className="text-[0.9rem] leading-[1.65] text-text">{good.content}</p>
      </div>
    </div>
  )
}
