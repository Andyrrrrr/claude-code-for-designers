import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'

const TOC_ITEMS = [
  [2, 'What is an app, really?'],
  [10, 'Figma MCP'],
  [3, 'The terminal'],
  [11, 'Skills'],
  [4, 'Git: your safety net'],
  [12, 'Reading code'],
  [5, 'The new employee problem'],
  [13, 'The feedback loop'],
  [6, 'CLAUDE.md'],
  [14, 'Where this goes'],
  [7, 'The context window'],
  [15, 'Getting started'],
  [8, 'Plan mode'],
  [9, 'Prompt as design spec'],
]

export default function Slide01TOC({ isActive, goToSlide }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="Overview" />
        <SlideTitle>Table of contents</SlideTitle>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-16 mt-8">
          {TOC_ITEMS.map(([num, title]) => (
            <a
              key={num}
              href={`#slide-${num}`}
              onClick={(e) => { e.preventDefault(); goToSlide(num) }}
              className="flex items-baseline gap-4 py-3 no-underline text-text-muted text-[0.95rem] border-b border-white/[0.04] transition-colors duration-200 hover:text-text"
            >
              <span className="font-mono text-xs text-text-dim min-w-7">
                {String(num).padStart(2, '0')}
              </span>
              {title}
            </a>
          ))}
        </div>
      </SlideInner>
    </SlideShell>
  )
}
