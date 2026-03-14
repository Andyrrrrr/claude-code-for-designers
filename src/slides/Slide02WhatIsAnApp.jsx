import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import FileTree from '../components/FileTree'
import Callout from '../components/Callout'
import SlideLinks from '../components/SlideLinks'

export default function Slide02WhatIsAnApp({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="02" />
        <SlideTitle>What is an app, really?</SlideTitle>
        <SlideBody>
          An app is just <strong>files in a folder</strong>. That's it. When you open a website, your browser reads these text files and turns them into something visual. That's all that's happening.
        </SlideBody>
        <FileTree>
          <div><span className="text-accent font-semibold">my-app/</span></div>
          <div><span className="text-text-dim">├── </span><span className="text-text-muted">index.html</span></div>
          <div><span className="text-text-dim">├── </span><span className="text-text-muted">styles.css</span></div>
          <div><span className="text-text-dim">└── </span><span className="text-text-muted">script.js</span></div>
        </FileTree>
        <Callout>
          This presentation you're looking at right now? It's a <strong>single HTML file</strong>. You can open it in any text editor and read it.
        </Callout>
        <SlideLinks links={[
          { href: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web', label: 'MDN: Getting started with the web' },
        ]} />
      </SlideInner>
    </SlideShell>
  )
}
