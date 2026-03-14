export default function SlideCounter({ current, total }) {
  return (
    <div className="fixed bottom-6 right-6 font-mono text-xs text-text-dim z-[100] tracking-wide">
      {current + 1} / {total}
    </div>
  )
}
