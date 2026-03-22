import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'
import SlideLinks from '../components/SlideLinks'

export default function Slide07ClaudeMd({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="07" />
        <SlideTitle>CLAUDE.md &mdash; your onboarding doc</SlideTitle>
        <SlideBody>
          This is the document Claude Code reads at the start of every session. It's your project's <strong>institutional memory</strong>.
        </SlideBody>
        <CodeBlock>
          <span className="tk"># Project: My App</span><br />
          <br />
          <span className="tk">## What this is</span><br />
          A mobile app for tracking daily habits.<br />
          <br />
          <span className="tk">## Tech stack</span><br />
          <span className="tp">-</span> React Native + Expo<br />
          <span className="tp">-</span> TypeScript<br />
          <br />
          <span className="tk">## Documentation</span><br />
          <span className="tp">-</span> See /docs/architecture.md<br />
          <span className="tp">-</span> See /docs/design-system.md<br />
          <span className="tp">-</span> See /docs/conventions.md<br />
          <br />
          <span className="tk">## Rules</span><br />
          <span className="tp">-</span> This is a prototype — no backend needed<br />
          <span className="tp">-</span> Proactively maintain docs in /docs<br />
          <span className="tp">-</span> Update docs when making changes
        </CodeBlock>
        <Callout>
          Think of CLAUDE.md as an <strong>index</strong>, not an encyclopedia. Point it to a <code>/docs</code> directory for detailed documentation, and tell Claude to <strong>maintain those docs proactively</strong>. The better your documentation, the better Claude Code performs.
        </Callout>
        <SlideLinks links={[
          { href: 'https://docs.anthropic.com/en/docs/claude-code/memory', label: 'Claude Code: memory & CLAUDE.md' },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
