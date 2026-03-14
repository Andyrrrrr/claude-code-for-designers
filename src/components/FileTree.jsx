export default function FileTree({ children }) {
  return (
    <div className="mt-6 font-mono text-[0.85rem] leading-[2] text-text-muted p-6 bg-bg-surface rounded-lg border border-code-border">
      {children}
    </div>
  )
}
