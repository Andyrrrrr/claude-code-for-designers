import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import Terminal from '../components/Terminal'
import SlideLinks from '../components/SlideLinks'

export default function Slide04Terminal({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="04" />
        <SlideTitle>The terminal</SlideTitle>
        <SlideBody>
          The terminal is just another way to talk to your computer &mdash; by <strong>typing instead of clicking</strong>. You don't need to master it. You just need to recognize what Claude Code is doing when you see terminal commands flash by.
        </SlideBody>
        <Terminal lines={[
          { command: 'ls', comment: 'list files in current folder' },
          { command: 'cd my-app', comment: 'move into a folder' },
          { command: 'open .', comment: 'open current folder in Finder' },
        ]} />
        <SlideBody style={{ marginTop: '1.5rem' }}>
          Claude Code works in both the <strong>desktop app</strong> and the terminal. I recommend starting with the <strong>Claude desktop app</strong> &mdash; it's the easiest way to get going. But it can also run directly in your terminal if you prefer.
        </SlideBody>
        <SlideBody style={{ marginTop: '1.5rem' }}>
          <strong>Warp</strong> is a terminal app with built-in AI assistance, predictive text, and some other nice quality-of-life improvements over the Mac terminal app. It has a free tier.
        </SlideBody>
        <SlideLinks links={[
          { href: 'https://claude.ai/download', label: 'Download the Claude desktop app' },
          { href: 'https://docs.anthropic.com/en/docs/claude-code/getting-started', label: 'Claude Code setup guide' },
          { href: 'https://www.warp.dev/', label: 'Warp terminal' },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
