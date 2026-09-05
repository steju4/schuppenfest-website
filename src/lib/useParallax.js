import { useEffect, useRef, useState } from 'react'

/**
 * Verschiebt ein Element sanft, während sein Container durchs Bild scrollt.
 * Gibt einen Versatz in Pixeln zurück (positiv = nach unten).
 * Bei „Bewegung reduzieren“ bleibt der Versatz 0.
 */
export default function useParallax(distance = 60) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = null
    let active = false

    function update() {
      frame = null
      const rect = node.getBoundingClientRect()
      // -1 = Element gerade unter dem Viewport, 1 = gerade darüber
      const progress =
        (window.innerHeight / 2 - (rect.top + rect.height / 2)) /
        (window.innerHeight / 2 + rect.height / 2)
      setOffset(Math.max(-1, Math.min(1, progress)) * distance)
    }

    function onScroll() {
      if (!active || frame) return
      frame = requestAnimationFrame(update)
    }

    const observer = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting
      if (active) onScroll()
    })
    observer.observe(node)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [distance])

  return [ref, offset]
}
