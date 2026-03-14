export default function ProgressBar({ current, total }) {
  const pct = current / (total - 1)

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-[rgba(224,120,69,0.08)] z-[1000]">
      <div
        className="h-full bg-accent origin-left transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
        style={{ transform: `scaleX(${pct})` }}
      />
    </div>
  )
}
