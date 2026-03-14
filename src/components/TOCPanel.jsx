const SLIDE_TITLES = [
  'Title',
  'Table of contents',
  'What is an app, really?',
  'The terminal',
  'Git: your safety net',
  'The new employee problem',
  'CLAUDE.md',
  'The context window',
  'Plan mode',
  'Prompt as design spec',
  'Figma MCP',
  'Skills',
  'Reading code',
  'The feedback loop',
  'Where this goes',
  'Getting started',
]

export default function TOCPanel({ isOpen, current, onClose, onGoTo }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-[900] backdrop-blur-[4px] transition-all duration-400 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <nav
        className={`fixed top-0 left-0 bottom-0 w-[380px] max-w-[85vw] bg-bg-elevated z-[950] transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] pt-24 px-12 pb-12 overflow-y-auto border-r border-code-border ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <h2 className="font-heading text-xs uppercase tracking-[0.15em] text-text-dim mb-8">
          Contents
        </h2>
        <ol className="list-none">
          {SLIDE_TITLES.map((title, i) => (
            <li key={i}>
              <a
                href={`#slide-${i}`}
                onClick={(e) => {
                  e.preventDefault()
                  onGoTo(i)
                }}
                className={`flex items-baseline gap-4 py-2.5 no-underline text-[0.95rem] border-b border-white/[0.04] transition-colors duration-200 hover:text-text ${
                  current === i ? 'text-accent' : 'text-text-muted'
                }`}
              >
                <span className="font-mono text-xs text-text-dim min-w-7">
                  {String(i).padStart(2, '0')}
                </span>
                {title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
