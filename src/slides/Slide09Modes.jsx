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
          { num: '3', content: <><strong>Bypass permissions</strong> &mdash; Claude runs commands (installs, scripts, etc.) without asking permission first. You need to enable this in settings. <em>Use with caution</em> &mdash; a mistake here can affect your actual system.</> },
        ]} />
        <Callout>
          Start with plan mode on and permissions on. As you build trust, you can loosen the guardrails. <strong>Think before you act</strong> applies to AI just as much as design.
        </Callout>
        <SlideLinks links={[
          { href: 'https://docs.anthropic.com/en/docs/claude-code/interactive-usage', label: 'Claude Code: interactive usage' },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
