import { useState, useCallback } from 'react'

export default function useDeck(totalSlides) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [tocOpen, setTocOpen] = useState(false)

  const goToSlide = useCallback((n) => {
    if (n < 0 || n >= totalSlides) return
    setCurrentSlide(n)
    setTocOpen(false)
  }, [totalSlides])

  const next = useCallback(() => {
    setCurrentSlide(prev => {
      const n = prev + 1
      return n < totalSlides ? n : prev
    })
    setTocOpen(false)
  }, [totalSlides])

  const prev = useCallback(() => {
    setCurrentSlide(prev => {
      const n = prev - 1
      return n >= 0 ? n : prev
    })
    setTocOpen(false)
  }, [])

  const openTOC = useCallback(() => setTocOpen(true), [])
  const closeTOC = useCallback(() => setTocOpen(false), [])
  const toggleTOC = useCallback(() => setTocOpen(o => !o), [])

  return { currentSlide, tocOpen, goToSlide, next, prev, openTOC, closeTOC, toggleTOC }
}
