import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import Timeline from '../components/Timeline'
import ConceptList from '../components/ConceptList'
import Callout from '../components/Callout'
import Note from '../components/Note'
import SlideLinks from '../components/SlideLinks'

export default function Slide05Git({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="05" />
        <SlideTitle>Git: your safety net</SlideTitle>
        <SlideBody>Git is a <strong>save system</strong> for your project. Like save points in a video game.</SlideBody>
        <Timeline nodes={[
          { label: 'Initial commit' },
          { label: 'Add header' },
          { label: 'Style buttons' },
          { label: 'You are here', current: true },
          { label: 'Next change' },
        ]} />
        <ConceptList items={[
          { num: '1', content: <><strong>Commits</strong> = snapshots of your project at a point in time</> },
          { num: '2', content: <><strong>Branches</strong> = parallel &ldquo;what if&rdquo; explorations that don't affect your main project</> },
          { num: '3', content: <><strong>You can always go back</strong> &mdash; nothing is permanent, nothing is scary</> },
        ]} />
        <Callout>
          Claude Code can handle git for you, but you can also manage it yourself. The basics are simple: <code>git add .</code> then <code>git commit -m "message"</code> then <code>git push</code>. That's the whole workflow.
        </Callout>
        <Note>GitHub is where your project lives online. It's like Google Drive for code.</Note>
        <SlideLinks links={[
          { href: 'https://docs.github.com/en/get-started/start-your-journey/hello-world', label: 'GitHub: Hello World tutorial' },
          { href: 'https://rogerdudler.github.io/git-guide/', label: 'git - the simple guide' },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
