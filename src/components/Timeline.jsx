export default function Timeline({ nodes }) {
  return (
    <div className="flex items-start mt-8 py-6 relative overflow-x-auto max-md:flex-wrap max-md:justify-center max-md:gap-4">
      {/* Connector line */}
      <div className="absolute top-[10px] left-4 right-4 h-[2px] bg-code-border max-md:hidden" />

      {nodes.map((node, i) => (
        <div key={i} className="flex-1 flex flex-col items-center relative min-w-[100px]">
          <div
            className={`w-5 h-5 rounded-full relative z-[1] transition-all duration-300 ${
              node.current
                ? 'border-2 border-accent bg-accent shadow-[0_0_16px_var(--color-accent-glow-strong)]'
                : 'border-2 border-text-dim bg-bg-surface'
            }`}
          />
          <div className={`mt-4 font-mono text-[0.7rem] text-center leading-[1.4] max-w-[90px] ${
            node.current ? 'text-accent' : 'text-text-dim'
          }`}>
            {node.label}
          </div>
        </div>
      ))}
    </div>
  )
}
