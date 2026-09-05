import { useEffect, useState } from 'react'

/** Feine Fortschrittslinie am oberen Rand. */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = null

    function update() {
      frame = null
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? Math.min(1, window.scrollY / total) : 0)
    }

    function onScroll() {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-coral-500 transition-transform duration-150"
      style={{ transform: `scaleX(${progress})` }}
    />
  )
}
