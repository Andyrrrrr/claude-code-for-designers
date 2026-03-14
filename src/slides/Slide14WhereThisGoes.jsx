import SlideShell from '../components/SlideShell'
import SlideInner from '../components/SlideInner'
import SlideNumber from '../components/SlideNumber'
import SlideTitle from '../components/SlideTitle'
import SlideBody from '../components/SlideBody'
import FutureGrid from '../components/FutureGrid'

export default function Slide14WhereThisGoes({ isActive }) {
  return (
    <SlideShell isActive={isActive}>
      <SlideInner isActive={isActive}>
        <SlideNumber label="14" />
        <SlideTitle>Where this goes</SlideTitle>
        <FutureGrid cards={[
          { title: 'Prototyping', description: 'Build interactive prototypes faster than in Figma \u2014 with real data, real interactions, real behavior.' },
          { title: 'Production code', description: 'Hand real, working code to your development team instead of static mockups.' },
          { title: 'Personal projects', description: "Build and ship your own apps. This presentation's author shipped an iOS app to the App Store using Claude Code, with no prior Swift experience." },
          { title: 'The gap is closing', description: 'The barrier between design intent and implementation is getting thinner every day.' },
        ]} />
        <SlideBody style={{ marginTop: '2rem', color: 'var(--color-text)' }}>
          You don't need to become a developer. You need to become a designer who can speak to a very fast, very capable one.
        </SlideBody>
      </SlideInner>
    </SlideShell>
  )
}
