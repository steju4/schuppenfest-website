/**
 * Weicher Übergang zwischen hellem und dunklem Abschnitt.
 * Wird oberhalb des dunklen Abschnitts platziert und in dessen Farbe gefüllt,
 * sodass die Kante nicht als harte Linie schneidet.
 */
export default function SectionEdge({ color = 'text-night-soft', flip = false }) {
  return (
    <div
      aria-hidden
      // z-10: der folgende Abschnitt bringt einen eigenen Hintergrund mit
      // und wuerde die Kante sonst ueberdecken.
      className={`pointer-events-none absolute inset-x-0 z-10 ${
        flip ? 'top-full -scale-y-100' : 'bottom-full'
      }`}
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className={`block h-7 w-full sm:h-11 ${color}`}
      >
        <path
          fill="currentColor"
          d="M0 60V30c180-26 420-34 720-14s540 12 720-12v56Z"
        />
      </svg>
    </div>
  )
}
