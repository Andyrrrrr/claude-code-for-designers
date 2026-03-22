import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import ConceptList from '../components/ConceptList'
import Callout from '../components/Callout'
import SlideLinks from '../components/SlideLinks'

export default function Slide15Harness({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="15" />
        <SlideTitle>When things go wrong</SlideTitle>
        <SlideBody>
          When Claude Code produces bad results, resist the urge to just <strong>&ldquo;prompt harder.&rdquo;</strong> Instead, ask: <strong>how can I improve the harness?</strong>
        </SlideBody>
        <SlideBody style={{ marginTop: '1.5rem' }}>
          The harness is everything surrounding the AI &mdash; your CLAUDE.md, your docs, your project structure. Improving these has compounding returns across every future session.
        </SlideBody>
        <ConceptList items={[
          { num: '1', content: <><strong>Ask Claude to reflect</strong> &mdash; tell it to review what went wrong and update the project docs with what it learned</> },
          { num: '2', content: <><strong>Add a CLAUDE.md rule</strong> &mdash; &ldquo;Always update documentation when you learn something new about this project&rdquo;</> },
          { num: '3', content: <><strong>Keep docs fresh</strong> &mdash; stale docs produce stale results. Treat documentation as a living part of your project.</> },
        ]} />
        <Callout>
          A well-maintained harness means Claude gets <strong>better over time</strong>, not just within a single conversation.
        </Callout>
        <SlideLinks links={[
          { href: 'https://openai.com/index/harness-engineering/', label: 'OpenAI: harness engineering' },
          { href: 'https://docs.anthropic.com/en/docs/claude-code/memory', label: 'Claude Code: memory & CLAUDE.md' },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
