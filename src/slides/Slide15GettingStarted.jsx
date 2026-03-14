import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import Checklist from '../components/Checklist'
import Note from '../components/Note'
import SlideLinks from '../components/SlideLinks'

export default function Slide15GettingStarted({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="15" />
        <SlideTitle>Getting started</SlideTitle>
        <SlideBody>Do this today:</SlideBody>
        <Checklist items={[
          { text: 'Download the Claude desktop app', done: true },
          { text: 'Open Claude Code from the app', done: true },
          { text: 'Point it at an empty folder', done: true },
          { text: 'Say: \u201CCreate a simple webpage with a centered heading that says Hello World, using a dark background and white text\u201D', done: true },
          { text: 'Use the built-in preview to see it live', done: true },
          { text: <><strong>You just shipped code.</strong></>, done: true },
        ]} />
        <Note style={{ marginTop: '1.5rem' }}>
          You can also run Claude Code directly from your terminal for a more hands-on experience.
        </Note>
        <SlideLinks
          style={{ marginTop: '2rem' }}
          links={[
            { href: 'https://claude.ai/download', label: 'Download the Claude desktop app' },
            { href: 'https://docs.anthropic.com/en/docs/claude-code', label: 'Claude Code documentation' },
            { href: 'https://docs.anthropic.com/en/docs/claude-code/getting-started', label: 'Getting started guide' },
          ]}
        />
      </SlideInner>
    </SlideShell>
  )
}
