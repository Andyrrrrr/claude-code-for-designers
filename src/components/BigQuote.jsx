export default function BigQuote({ children }) {
  return (
    <div className="font-heading text-[1.6rem] max-md:text-[1.2rem] leading-[1.5] text-text my-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[3px] before:bg-accent before:rounded-sm">
      {children}
    </div>
  )
}
