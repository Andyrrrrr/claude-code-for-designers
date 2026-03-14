import { slides } from './slides'
import useDeck from './hooks/useDeck'
import useHashNavigation from './hooks/useHashNavigation'
import useKeyboardNav from './hooks/useKeyboardNav'
import useTouchNav from './hooks/useTouchNav'
import ProgressBar from './components/ProgressBar'
import SlideCounter from './components/SlideCounter'
import NavArrows from './components/NavArrows'
import MenuToggle from './components/MenuToggle'
import TOCPanel from './components/TOCPanel'

const TOTAL = slides.length

export default function App() {
  const { currentSlide, tocOpen, goToSlide, next, prev, toggleTOC, closeTOC } = useDeck(TOTAL)

  useHashNavigation(currentSlide, goToSlide, TOTAL)
  useKeyboardNav(next, prev, toggleTOC)
  useTouchNav(next, prev, tocOpen)

  return (
    <>
      <ProgressBar current={currentSlide} total={TOTAL} />
      <MenuToggle isOpen={tocOpen} onToggle={toggleTOC} />
      <TOCPanel isOpen={tocOpen} current={currentSlide} onClose={closeTOC} onGoTo={goToSlide} />
      <SlideCounter current={currentSlide} total={TOTAL} />
      <NavArrows onPrev={prev} onNext={next} />

      <main className="relative w-full h-full">
        {slides.map((SlideComponent, i) => (
          <SlideComponent
            key={i}
            isActive={currentSlide === i}
            goToSlide={goToSlide}
          />
        ))}
      </main>
    </>
  )
}
