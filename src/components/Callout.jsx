export default function Callout({ className = '', style, children }) {
  return (
    <div className={`mt-8 p-6 bg-accent-glow border-l-2 border-accent rounded-r-[6px] text-[0.95rem] text-text-muted leading-[1.65] [&_strong]:text-text [&_code]:font-mono [&_code]:text-[0.9em] [&_code]:bg-code-bg [&_code]:px-[7px] [&_code]:py-[2px] [&_code]:rounded-[3px] [&_code]:border [&_code]:border-code-border [&_code]:text-accent ${className}`} style={style}>
      {children}
    </div>
  )
}
