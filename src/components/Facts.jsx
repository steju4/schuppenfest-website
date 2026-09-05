import { FACTS } from '../data/festival.js'
import QuickActions from './QuickActions.jsx'
import Reveal from './Reveal.jsx'

const COLORS = {
  coral: 'text-coral-500',
  gold: 'text-gold-500',
  rust: 'text-rust-500',
  forest: 'text-forest-500',
}

/** Gesetzte Liste statt Kartenstapel – ruhiger und lesbarer. */
export default function Facts() {
  return (
    <section
      id="infos"
      className="relative overflow-hidden bg-paper-deep px-6 py-16 sm:py-20"
    >
      <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative mx-auto max-w-xl">
        <Reveal>
          <p className="eyebrow text-ink-faint">Das Wichtigste kurz</p>
          <h2 className="serif mt-3 text-[2.6rem] text-ink sm:text-[3.4rem]">
            Gut zu <span className="italic text-coral-500">wissen</span>
          </h2>
        </Reveal>

        <dl className="mt-8 border-t border-ink/12">
          {FACTS.map((fact, index) => {
            return (
              <Reveal
                as="div"
                key={fact.title}
                delay={index * 70}
                className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-ink/12 py-5"
              >
                <span
                  aria-hidden
                  className={`serif text-2xl leading-none ${COLORS[fact.color]}`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <dt className="text-[1.05rem] font-extrabold tracking-tight text-ink">
                    {fact.title}
                  </dt>
                  <dd className="mt-1 text-[0.9rem] leading-relaxed text-ink-soft">
                    {fact.text}
                  </dd>
                </div>
              </Reveal>
            )
          })}
        </dl>

        <Reveal delay={80} className="mt-8">
          <QuickActions />
        </Reveal>
      </div>
    </section>
  )
}
