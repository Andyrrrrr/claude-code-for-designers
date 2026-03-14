import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import ContextBar from '../components/ContextBar'
import Callout from '../components/Callout'
import SlideLinks from '../components/SlideLinks'

export default function Slide07ContextWindow({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="07" />
        <SlideTitle>The context window</SlideTitle>
        <SlideBody>
          Claude Code can only hold so much information in its head at once. Think of it like <strong>working memory</strong>.
        </SlideBody>
        <ContextBar />
        <Callout style={{ marginTop: '2rem' }}>
          Keep tasks focused and discrete. Don't say <strong>&ldquo;rebuild my entire app.&rdquo;</strong> Say <strong>&ldquo;update the header component to match this new design.&rdquo;</strong>
        </Callout>
        <SlideLinks links={[
          { href: 'https://docs.anthropic.com/en/docs/claude-code/overview', label: 'Claude Code overview' },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
