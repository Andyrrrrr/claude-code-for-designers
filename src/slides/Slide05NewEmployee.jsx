import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import BigQuote from '../components/BigQuote'

export default function Slide05NewEmployee({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="05" />
        <SlideTitle>The new employee problem</SlideTitle>
        <SlideBody>
          Every Claude Code session is like a brilliant but <strong>amnesiac contractor</strong> showing up to work.
        </SlideBody>
        <BigQuote>
          Imagine hiring the world's best developer, but every morning they wake up with zero memory of your project.
        </BigQuote>
        <SlideBody>What would you do?</SlideBody>
        <SlideBody><strong>You'd write everything down.</strong></SlideBody>
        <SlideBody style={{ marginTop: '1.5rem', color: 'var(--color-accent)' }}>
          That's exactly what CLAUDE.md is for &rarr;
        </SlideBody>
      </SlideInner>
    </SlideShell>
  )
}
