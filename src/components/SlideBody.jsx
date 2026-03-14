export default function SlideBody({ className = '', style, children }) {
  return (
    <p className={`text-[1.1rem] max-md:text-[1rem] leading-[1.75] text-text-muted max-w-[640px] [&+&]:mt-4 [&_strong]:text-text [&_strong]:font-medium [&_code]:font-mono [&_code]:text-[0.9em] [&_code]:bg-code-bg [&_code]:px-[7px] [&_code]:py-[2px] [&_code]:rounded-[3px] [&_code]:border [&_code]:border-code-border [&_code]:text-accent [&_em]:italic ${className}`} style={style}>
      {children}
    </p>
  )
}
