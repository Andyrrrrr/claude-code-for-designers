import { useEffect, useRef } from 'react'

export default function useHashNavigation(currentSlide, goToSlide, totalSlides) {
  const initialized = useRef(false)

  // On mount, read hash and navigate
  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const hash = window.location.hash
    if (hash && hash.startsWith('#slide-')) {
      const num = parseInt(hash.replace('#slide-', ''))
      if (!isNaN(num) && num >= 0 && num < totalSlides) {
        goToSlide(num)
      }
    }
  }, [goToSlide, totalSlides])

  // Update hash when slide changes
  useEffect(() => {
    history.replaceState(null, '', '#slide-' + currentSlide)
  }, [currentSlide])
}
