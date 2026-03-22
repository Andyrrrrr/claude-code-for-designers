import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'

const TOC_ITEMS = [
  [2, 'What is an app, really?'],
  [11, 'Figma MCP'],
  [3, 'The terminal'],
  [12, 'Getting more from Figma MCP'],
  [4, 'Reading code'],
  [13, 'Skills'],
  [5, 'Git: your safety net'],
  [14, 'The feedback loop'],
  [6, 'The new employee problem'],
  [15, 'When things go wrong'],
  [7, 'CLAUDE.md'],
  [16, 'What you can build'],
  [8, 'The context window'],
  [17, 'CC vs alternatives'],
  [9, 'Modes'],
  [18, 'Getting started'],
  [10, 'Prompt as design spec'],
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
