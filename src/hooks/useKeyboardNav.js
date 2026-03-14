import { useEffect } from 'react'

export default function useKeyboardNav(next, prev, toggleTOC) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      } else if (e.key === 'Escape') {
        e.preventDefault()
        toggleTOC()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [next, prev, toggleTOC])
}
