const STEPS = [
  { label: 'Prompt', highlight: true },
  { label: 'Review', highlight: false },
  { label: 'Refine', highlight: false },
  { label: 'Repeat', highlight: false },
]

export default function LoopSteps() {
  return (
    <div className="flex gap-4 my-8 flex-wrap">
      {STEPS.map((step, i) => (
        <div key={i} className="contents">
          <div
            className={`flex-1 min-w-[120px] py-6 px-4 border rounded-lg text-center font-mono text-[0.8rem] relative ${
              step.highlight
                ? 'bg-accent-glow border-accent/25 text-accent'
                : 'bg-bg-surface border-code-border text-text-muted'
            }`}
          >
            {step.label}
          </div>
          {i < STEPS.length - 1 && (
            <div className="flex items-center text-text-dim text-[1.2rem]">&rarr;</div>
          )}
        </div>
      ))}
    </div>
  )
}
