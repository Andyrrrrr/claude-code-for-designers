import { useEffect, useRef } from 'react'

export default function useTouchNav(next, prev, tocOpen) {
  const touchStart = useRef({ x: 0, y: 0 })

  useEffect(() => {
    function handleTouchStart(e) {
      touchStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      }
    }

    function handleTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - touchStart.current.x
      const dy = e.changedTouches[0].clientY - touchStart.current.y

      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) next()
        else prev()
      }
    }

    function handleClick(e) {
      if (tocOpen) return
      if (e.target.closest('a, button, nav, .menu-toggle')) return

      const x = e.clientX
      const w = window.innerWidth
      if (x < w * 0.15) prev()
      else if (x > w * 0.85) next()
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('click', handleClick)
    }
  }, [next, prev, tocOpen])
}
