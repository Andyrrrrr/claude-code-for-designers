import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import ConceptList from '../components/ConceptList'
import Callout from '../components/Callout'
import Note from '../components/Note'

export default function Slide16Alternatives({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="16" />
        <SlideTitle>Claude Code vs alternatives</SlideTitle>
        <SlideBody>
          You'll hear about other AI coding tools. Here's how they compare:
        </SlideBody>
        <ConceptList items={[
          { num: '•', content: <><strong>Replit, v0, Lovable</strong> &mdash; all-in-one tools that bake in deployment and design systems. v0 deploys to Vercel; Lovable gives you a full app scaffold. Great for getting something live fast.</> },
          { num: '•', content: <><strong>Claude Code</strong> &mdash; choose your own adventure. You pick the framework, hosting, and design system. More flexible, more control, steeper initial setup.</> },
        ]} />
        <Callout>
          All-in-one tools are great for quick experiments. Claude Code shines when you want to <strong>own the stack</strong>, work within an existing codebase, or learn how things actually work.
        </Callout>
        <Note style={{ marginTop: '1.5rem' }}>
          These concepts apply to <strong>all agentic coding systems</strong>, not just Claude. The mental models in this deck &mdash; harness engineering, iterative feedback, good specs &mdash; transfer everywhere.
        </Note>
      </SlideInner>
    </SlideShell>
  )
}
