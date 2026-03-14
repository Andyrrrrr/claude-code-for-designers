import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'

export default function Slide00Title({ isActive }) {
  return (
    <SlideShell isActive={isActive} className="text-center items-center">
      <SlideInner isActive={isActive} className="flex flex-col items-center">
        <div className="w-10 h-[3px] bg-accent rounded-sm" />
        <h1 className="font-heading text-[3.2rem] max-md:text-[2rem] max-[480px]:text-[1.6rem] font-bold leading-[1.15] text-text tracking-[-0.02em] mt-16">
          Claude Code<br />for <span className="text-accent">designers</span>
        </h1>
        <p className="font-body text-[1.15rem] text-text-muted mt-6 font-light">
          A practical guide to AI-assisted development
        </p>
        <p className="font-mono text-xs text-text-dim mt-24 tracking-wide">
          Use arrow keys or tap to navigate &rarr;
        </p>
      </SlideInner>
    </SlideShell>
  )
}
