import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import FlowDiagram from '../components/FlowDiagram'
import Callout from '../components/Callout'
import SlideLinks from '../components/SlideLinks'

export default function Slide11FigmaMCP({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="11" />
        <SlideTitle>Figma MCP</SlideTitle>
        <SlideBody>Claude Code can <strong>look directly at your Figma designs</strong>.</SlideBody>
        <SlideBody>
          MCP (Model Context Protocol) is a plugin system that lets AI models connect to other tools. The Figma MCP lets Claude Code read your Figma files &mdash; not just screenshots, but actual rich context.
        </SlideBody>
        <FlowDiagram />
        <SlideBody>
          You can paste a link and say <strong>&ldquo;look at this Figma frame and build it&rdquo;</strong> and Claude Code will reference the actual design, not just your description of it.
        </SlideBody>
        <Callout>This is where your existing Figma workflow connects directly to code output.</Callout>
        <SlideLinks links={[
          { href: 'https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server', label: 'Figma: MCP server setup' },
          { href: 'https://docs.anthropic.com/en/docs/claude-code/mcp', label: 'Claude Code: MCP integrations' },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
