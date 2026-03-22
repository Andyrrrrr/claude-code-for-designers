import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import ContextBar from '../components/ContextBar'
import Callout from '../components/Callout'
import ConceptList from '../components/ConceptList'
import SlideLinks from '../components/SlideLinks'

export default function Slide08ContextWindow({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="08" />
        <SlideTitle>The context window</SlideTitle>
        <SlideBody>
          Claude Code can only hold so much information in its head at once. Think of it like <strong>working memory</strong>.
        </SlideBody>
        <ContextBar />
        <Callout style={{ marginTop: '2rem' }}>
          Keep tasks focused and discrete. Don't say <strong>&ldquo;rebuild my entire app.&rdquo;</strong> Say <strong>&ldquo;update the header component to match this new design.&rdquo;</strong>
        </Callout>
        <SlideBody style={{ marginTop: '2rem' }}>
          Claude comes in three model tiers. You can switch between them depending on the task:
        </SlideBody>
        <ConceptList items={[
          { num: '1', content: <><strong>Opus</strong> &mdash; most capable. Complex tasks, architecture decisions, nuanced work. Slower and more expensive.</> },
          { num: '2', content: <><strong>Sonnet</strong> &mdash; the daily driver. Good balance of speed and capability for most tasks.</> },
          { num: '3', content: <><strong>Haiku</strong> &mdash; fast and cheap. Simple edits, quick questions, boilerplate.</> },
        ]} />
        <SlideLinks links={[
          { href: 'https://docs.anthropic.com/en/docs/claude-code/overview', label: 'Claude Code overview' },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
