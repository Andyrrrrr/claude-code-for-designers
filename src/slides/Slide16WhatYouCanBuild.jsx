import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import FutureGrid from '../components/FutureGrid'

export default function Slide16WhatYouCanBuild({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="16" />
        <SlideTitle>What you can build</SlideTitle>
        <FutureGrid cards={[
          { title: 'Design systems', description: 'Turn your design tokens and components into real, working code that developers can use directly.' },
          { title: 'Interactive prototypes', description: 'Build clickable prototypes with mock data and interactions, outside the context of a larger app.' },
          { title: 'Micro tools and apps', description: 'Internal dashboards, calculators, utilities \u2014 things that would otherwise need a developer.' },
          { title: 'Animations and video', description: 'Use the Remotion skill for programmatic animations and video content, all in code.' },
          { title: 'Anything expressible as code', description: 'This presentation was built entirely with Claude Code. If it can be code, you can build it.' },
        ]} />
        <SlideBody style={{ marginTop: '2rem', color: 'var(--color-text)' }}>
          You don't need to become a developer. You need to become a designer who can speak to a very fast, very capable one.
        </SlideBody>
      </SlideInner>
    </SlideShell>
  )
}
