import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import LoopSteps from '../components/LoopSteps'
import ConceptList from '../components/ConceptList'

export default function Slide14FeedbackLoop({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="14" />
        <SlideTitle>The feedback loop</SlideTitle>
        <SlideBody>
          Working with Claude Code is an <strong>iterative conversation</strong>, just like a design critique.
        </SlideBody>
        <LoopSteps />
        <ConceptList items={[
          { num: '•', content: <>Be specific: <strong>&ldquo;The spacing between the cards is too tight&rdquo;</strong> not &ldquo;it looks off&rdquo;</> },
          { num: '•', content: <>Reference visual properties: <strong>&ldquo;Make the heading 20px instead of 16px&rdquo;</strong></> },
          { num: '•', content: <>If the conversation gets long and CC seems confused, <strong>start a new session</strong>. It's like a fresh page.</> },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
