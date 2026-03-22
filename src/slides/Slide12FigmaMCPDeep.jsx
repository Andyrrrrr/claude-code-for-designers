import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import ConceptList from '../components/ConceptList'
import Callout from '../components/Callout'
import SlideLinks from '../components/SlideLinks'

export default function Slide12FigmaMCPDeep({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="12" />
        <SlideTitle>Figma MCP tips</SlideTitle>
        <ConceptList items={[
          { num: '1', content: <><strong>Work iteratively</strong> &mdash; don't throw your entire file at it at once. It uses a lot of tokens. Go one frame or component at a time.</> },
          { num: '2', content: <><strong>Collect states</strong> &mdash; group various states of a component or UI into a single frame and share that frame with Claude and say "here are all the states for this thing".</> },
          { num: '3', content: <><strong>Tell Claude to look for existing components</strong> &mdash; if you're working in a larger app, add instructions in CLAUDE.md to look for existing components before creating new ones.</> },
          { num: '4', content: <><strong>Better yet: use Code Connect</strong> &mdash; links your Figma components directly to your codebase, so Claude knows exactly which code component maps to which design.</> },
        ]} />
        <SlideLinks links={[
          { href: 'https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect', label: 'Figma: Code Connect' },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
