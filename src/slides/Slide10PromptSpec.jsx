import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import Comparison from '../components/Comparison'
import Callout from '../components/Callout'
import SlideLinks from '../components/SlideLinks'

export default function Slide10PromptSpec({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="10" />
        <SlideTitle>Prompt as design spec</SlideTitle>
        <SlideBody>
          The quality of Claude Code's output is directly proportional to the quality of your prompt. <strong>Designers are already good at this</strong> &mdash; you just need to apply it differently.
        </SlideBody>
        <Comparison
          bad={{
            label: 'Vague prompt',
            content: '\u201CMake a login page\u201D',
          }}
          good={{
            label: 'Better prompt',
            content: '\u201CCreate a login page with an email and password field, a primary \'Sign In\' button using our brand blue (#2563eb), a \'Forgot password?\' link below, and a \'Create account\' link at the bottom. Use 16px body text, 24px heading. Center everything vertically with max-width 400px.\u201D',
          }}
        />
        <SlideLinks links={[
          { href: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering', label: 'Anthropic: prompt engineering guide' },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
