import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import ConceptList from '../components/ConceptList'
import Callout from '../components/Callout'
import SlideLinks from '../components/SlideLinks'

export default function Slide13Skills({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="13" />
        <SlideTitle>Skills</SlideTitle>
        <SlideBody>
          Skills are <strong>reusable instructions</strong> that teach Claude Code how to do specific tasks. Think of them like recipes &mdash; instead of explaining how to make a dish every time, you write down the recipe once.
        </SlideBody>
        <SlideBody>
          A skill might tell Claude Code how to create a component in your design system, how to write tests the way your team likes them, or how to deploy to your staging environment.
        </SlideBody>
        <ConceptList items={[
          { num: '•', content: <><strong>Built-in skills</strong> come pre-installed &mdash; things like creating commits, generating docs, and reviewing code</> },
          { num: '•', content: <><strong>Community skills</strong> are shared by other users and can be installed with one command</> },
          { num: '•', content: <><strong>Custom skills</strong> are ones you write yourself for your specific workflows</> },
        ]} />
        <SlideBody style={{ marginTop: '1.5rem' }}>
          You invoke a skill by typing a <strong>slash command</strong> like <code>/commit</code> or <code>/review-pr</code>. Claude Code knows when to use certain skills automatically based on what you're asking it to do.
        </SlideBody>
        <SlideBody style={{ marginTop: '1.5rem' }}>
          Skills can be <strong>global</strong> (available in all Claude Code sessions) or <strong>local</strong> to a specific project. They're text files &mdash; similar to docs in your <code>/docs</code> folder &mdash; but the key difference is skills are <strong>triggered by commands</strong> and designed as reusable actions, not just reference material.
        </SlideBody>
        <Callout>
          Skills are what make Claude Code feel like it truly understands your project &mdash; not just the code, but <strong>how your team works</strong>.
        </Callout>
        <SlideLinks links={[
          { href: 'https://skills.sh/', label: 'Browse and install community skills' },
          { href: 'https://docs.anthropic.com/en/docs/claude-code/skills', label: 'Claude Code: skills documentation' },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
