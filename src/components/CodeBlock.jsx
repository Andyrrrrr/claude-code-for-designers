export default function CodeBlock({ children }) {
  return (
    <div className="bg-code-bg border border-code-border border-l-[3px] border-l-accent rounded-r-[6px] p-6 mt-6 overflow-x-auto font-mono text-[0.8rem] max-[480px]:text-[0.72rem] leading-[1.8] text-text-muted [&_code]:bg-transparent [&_code]:border-none [&_code]:p-0 [&_code]:text-inherit [&_code]:text-[inherit]">
      <code>{children}</code>
    </div>
  )
}
