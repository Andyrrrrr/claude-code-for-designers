const SEGMENTS = [
  { label: 'System', opacity: 0.3, flex: 1 },
  { label: 'CLAUDE.md', opacity: 0.2, flex: 1.5 },
  { label: 'Conversation', opacity: 0.13, flex: 3 },
  { label: 'Code files', opacity: 0.07, flex: 2 },
]

const LEGEND = [
  { label: 'System prompt', bg: 'rgba(224,120,69,0.55)' },
  { label: 'CLAUDE.md', bg: 'rgba(224,120,69,0.4)' },
  { label: 'Conversation', bg: 'rgba(224,120,69,0.25)' },
  { label: 'Code files', bg: 'rgba(224,120,69,0.12)' },
]

export default function ContextBar() {
  return (
    <div>
      <div className="mt-8 bg-bg-surface rounded-lg overflow-hidden border border-code-border">
        <div className="px-6 py-4 font-mono text-[0.7rem] text-text-dim uppercase tracking-[0.1em] border-b border-code-border">
          Context window capacity
        </div>
        <div className="flex h-10">
          {SEGMENTS.map((seg, i) => (
            <div
              key={i}
              className="flex items-center justify-center font-mono text-[0.65rem] tracking-[0.03em] text-white/70 whitespace-nowrap overflow-hidden text-ellipsis px-2"
              style={{ background: `rgba(224,120,69,${seg.opacity})`, flex: seg.flex }}
            >
              {seg.label}
            </div>
          ))}
          <div className="flex-[2.5] flex items-center justify-center font-mono text-[0.65rem] text-text-dim">
            Available
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-4 mt-4 px-2">
        {LEGEND.map((item, i) => (
          <div key={i} className="flex items-center gap-1.5 font-mono text-[0.65rem] text-text-dim">
            <div className="w-2 h-2 rounded-sm" style={{ background: item.bg }} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}
