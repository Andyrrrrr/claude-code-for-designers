import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import ConceptList from '../components/ConceptList'
import Callout from '../components/Callout'
import SlideLinks from '../components/SlideLinks'

export default function Slide09Modes({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="09" />
        <SlideTitle>Modes</SlideTitle>
        <SlideBody>
          Claude Code has several modes that change how it behaves. Think of them as <strong>guardrails you can adjust</strong>.
        </SlideBody>
        <ConceptList items={[
          { num: '1', content: <><strong>Plan mode</strong> &mdash; Claude outlines its approach before writing any code. Like asking a developer to write a tech spec first. Use for anything non-trivial.</> },
          { num: '2', content: <><strong>Auto-accept edits</strong> &mdash; Claude applies file changes without asking you to approve each one. Faster, but you give up the chance to review before changes are made.</> },
          { num: '3', content: <><strong>Bypass permissions</strong> &mdash; Claude runs commands (installs, scripts, etc.) without asking permission first. You need to enable this in settings. <strong>Use with caution</strong> &mdash; a mistake here can affect your actual system.</> },
        ]} />
        <Callout>
          Really — don't just get used to using bypass permissions all the time. It really can mess up your system if something goes wrong.
        </Callout>
      </SlideInner>
    </SlideShell>
  )
}
