import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import ConceptList from '../components/ConceptList'
import Callout from '../components/Callout'
import SlideLinks from '../components/SlideLinks'

export default function Slide08PlanMode({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="08" />
        <SlideTitle>Plan mode</SlideTitle>
        <SlideBody>You can ask Claude Code to <strong>think before it acts</strong>.</SlideBody>
        <SlideBody>
          Plan mode is like asking a developer to write a technical spec before they start coding. Claude Code will outline what it's going to do, what files it'll touch, and what approach it'll take &mdash; before writing a single line of code.
        </SlideBody>
        <SlideBody style={{ marginTop: '1.5rem' }}><strong>When to use it:</strong></SlideBody>
        <ConceptList items={[
          { num: '•', content: <>Anything non-trivial &mdash; new features, refactoring, or uncertain approaches</> },
          { num: '•', content: <>When you want to <strong>make sure it does a good job</strong> &mdash; thinking first leads to better results</> },
          { num: '•', content: <>When you want to review the approach before committing to it</> },
        ]} />
        <Callout>
          You wouldn't jump straight into high-fidelity mocks without exploring the problem first. Same idea. <strong>Think before you act</strong> applies to AI just as much as it applies to design.
        </Callout>
        <SlideLinks links={[
          { href: 'https://docs.anthropic.com/en/docs/claude-code/interactive-usage', label: 'Claude Code: interactive usage' },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
