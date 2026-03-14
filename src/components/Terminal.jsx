export default function Terminal({ title = 'Terminal', lines }) {
  return (
    <div className="bg-bg-surface rounded-[10px] overflow-hidden mt-6 border border-code-border">
      {/* Chrome */}
      <div className="flex items-center gap-[7px] px-4 py-3 bg-white/[0.02] border-b border-code-border">
        <div className="w-[11px] h-[11px] rounded-full bg-red" />
        <div className="w-[11px] h-[11px] rounded-full bg-yellow" />
        <div className="w-[11px] h-[11px] rounded-full bg-green" />
        <div className="flex-1 text-center font-mono text-[0.7rem] text-text-dim mr-[50px]">
          {title}
        </div>
      </div>
      {/* Body */}
      <div className="p-6 font-mono text-[0.8rem] max-[480px]:text-[0.72rem] leading-[2] text-text-muted">
        {lines.map((line, i) => (
          <div key={i}>
            <span className="text-accent">$ </span>
            {line.command}
            {line.comment && <span className="text-text-dim ml-4">&rarr; {line.comment}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
