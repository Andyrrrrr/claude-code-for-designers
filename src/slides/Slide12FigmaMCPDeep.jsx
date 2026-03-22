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
        <SlideTitle>Getting more from Figma MCP</SlideTitle>
        <SlideBody>
          MCP stands for <strong>Model Context Protocol</strong> &mdash; a standard way for AI tools to connect to external services. There are many MCPs out there beyond Figma (Slack, GitHub, databases, and more).
        </SlideBody>
        <SlideBody style={{ marginTop: '1.5rem' }}>
          Tips for working with Figma MCP effectively:
        </SlideBody>
        <ConceptList items={[
          { num: '1', content: <><strong>Work iteratively</strong> &mdash; don't throw your entire file at it at once. It uses a lot of tokens. Go one frame or component at a time.</> },
          { num: '2', content: <><strong>Point to existing components</strong> &mdash; if you're working in a larger app, add instructions in CLAUDE.md to look for existing components before creating new ones.</> },
          { num: '3', content: <><strong>Code Connect</strong> &mdash; links your Figma components directly to your codebase, so Claude knows exactly which code component maps to which design.</> },
        ]} />
        <Callout>
          Figma MCP is powerful, but think of it like a conversation &mdash; give it <strong>focused context</strong>, not everything at once.
        </Callout>
        <SlideLinks links={[
          { href: 'https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect', label: 'Figma: Code Connect' },
          { href: 'https://docs.anthropic.com/en/docs/claude-code/mcp', label: 'Claude Code: MCP integrations' },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
