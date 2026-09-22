# Menninger Schuppenfest – Landingpage

Mobile-first Landingpage der Musikkapelle Menningen e.V. Sie ist für den Aufruf
per QR-Code vom Flyer gebaut.

**Aktueller Stand (nach dem Fest 2026):** eine bewusst kurze Seite – ein
**Dankeschön für das Schuppenfest 2026** und ein **Save the Date für 2027
(18. – 20. September)**. Mehr nicht.

Alle konkreten Inhalte von 2026 (Programm, Zeiten, Kapellen, Malle-Party, DJ,
Eintritt, Anfahrt, Karte) sind entfernt – ein abgelaufenes Programm auf einer
Seite, die per QR-Code vom Flyer aufgerufen wird, verwirrt mehr als es nützt.

Für 2027 steht nur der Termin und der Titel je Tag: Samstag Partyabend, Sonntag
Festsonntag, Montag Feierabendhock. Keine Zeiten, keine Kapellen, keine Preise –
sobald das Programm steht, kommt es in `src/data/festival.js` dazu.

## Tech-Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4** (über `@tailwindcss/vite`, Design-Tokens in `src/index.css`)
- rein statisch, kein Backend, deploy-fertig für Vercel

## Lokal starten

```bash
npm install
npm run dev      # Entwicklungsserver
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal ansehen
```

## Deployment auf Vercel

Repo in Vercel importieren – mehr ist nicht nötig, Vercel erkennt Vite
automatisch:

| Einstellung      | Wert            |
| ---------------- | --------------- |
| Framework Preset | Vite            |
| Build Command    | `npm run build` |
| Output Directory | `dist`          |

## Besucherzahlen (Vercel Web Analytics)

`@vercel/analytics` ist eingebunden – die `<Analytics />`-Komponente steht in
`src/App.jsx`.

**Wichtig:** Die Anleitung im Vercel-Dashboard zeigt standardmässig den
Next.js-Pfad `@vercel/analytics/next`. Dieses Projekt läuft mit **Vite**,
deshalb ist der richtige Einstiegspunkt `@vercel/analytics/react`.

Damit Zahlen ankommen, muss Web Analytics im Vercel-Projekt zusätzlich
eingeschaltet sein (Projekt → Analytics → Enable). Erst dann liefert Vercel
das Skript unter `/_vercel/insights/script.js` aus; lokal läuft dieser Aufruf
ins Leere (404 in der Konsole), das ist normal und kein Fehler.

## Inhalte pflegen

**Alle Texte stehen in [`src/data/festival.js`](src/data/festival.js).** Die
Komponenten lesen nur daraus – für Textänderungen muss kein Komponenten-Code
angefasst werden.

| Konstante   | Inhalt                                                           |
| ----------- | ---------------------------------------------------------------- |
| `ORGANIZER` | Verein und Vereinsseite                                           |
| `VENUE`     | Adresse des Schuppens                                             |
| `THANKS`    | der Dank fürs Fest 2026: Jahr, Zeitraum, „Danke“ und zwei Sätze   |
| `NEXT`      | Fest 2027: Zeitraum, Countdown-Start, Kalenderdaten, Schlusssatz  |
| `NEXT_DAYS` | die drei Tage 2027 – Wochentag, Datum, Titel                      |
| `THEMES`    | Farbe je Tag (pink/messing/türkis)                                |

### Wenn das Programm 2027 feststeht

`NEXT_DAYS` um Zeiten und Kapellen erweitern. Sobald mehr als der Termin bekannt
ist, lohnt sich wieder eine eigene Programm-Komponente – die vollständige
Festseite von 2026 steht in der Git-Historie (Commit „Vercel Web Analytics
einbinden“ und früher) und lässt sich von dort holen, statt sie neu zu bauen.

## Kalendereintrag

`src/lib/calendar.js` erzeugt die `.ics`-Datei für „Termin merken“. Sie ist
bewusst **ganztägig über alle drei Tage** angelegt: Es gibt noch kein Programm,
und eine erfundene Uhrzeit im Kalender der Gäste wäre schlechter als keine.
`DTEND` ist bei ganztägigen Terminen exklusiv – deshalb steht dort der 21.09.,
obwohl das Fest am 20.09. endet.

## Komponenten

```
src/
├── App.jsx                     Seitenaufbau
├── index.css                   Schriften, Design-Tokens, Utilities
├── data/festival.js            alle Inhalte
├── lib/calendar.js             erzeugt die .ics-Datei zum Termin merken
└── components/
    ├── Danke.jsx               „Danke“, Zeitraum 2026, Dankestext
    ├── Marquee.jsx             Laufband als Trenner
    ├── SaveTheDate.jsx         2027: Datum, drei Tageskarten, Countdown, Aktionen
    ├── QuickActions.jsx        Termin merken (.ics) und Teilen
    ├── Footer.jsx              Schlusssatz, Adresse, Veranstalter
    ├── Reveal.jsx              sanftes Einblenden beim Scrollen
    └── icons.jsx               Linien-Icons als Inline-SVG
```

## Gestaltung

- **Schriften:** Anton als Poster-Display für Titel und Ziffern, Outfit für
  Fließtext.
- **Drei Abschnitte, mehr nicht:** Danke → Termin → Footer, getrennt durch ein
  Laufband. Die ganze Seite ist rund drei Bildschirme lang.
- **Zwei grosse Schriftzüge tragen sie:** das Wort „Danke“ oben und die „2027“
  unten, beide im Farbverlauf mit langsam wanderndem Glanz (`animate-sheen`).
  Beide sind in `clamp()` gesetzt, damit sie auch auf 320 px nicht überlaufen.
- **Countdown:** eine einzige Zeile (Tage bis zum Fest), bewusst klein.
- **Farbe je Tag:** Samstag pink, Sonntag messing, Montag türkis – siehe
  `THEMES`.
- **Menninger Wappen** im Footer, aus dem Flyer freigestellt.

## Performance- und Datenschutz-Entscheidungen

- **Schriften selbst gehostet** in `public/fonts/` (Anton 19 kB, Outfit 32 kB,
  beide woff2, SIL Open Font License 1.1). Kein Request an Google Fonts.
- **Keine Karte mehr:** Das Google-Maps-Embed ist mit dem Anfahrts-Block
  entfallen. Es geht damit überhaupt keine Anfrage mehr an Google.
- **Keine Icon-Library, keine Animationsbibliothek.** Bewegung gibt es an fünf
  Stellen, alles reines CSS bzw. ein IntersectionObserver: Einblenden beim
  Laden (`animate-rise`), Einblenden beim Scrollen (`Reveal`), wandernde
  Farbschleier, der Glanz in den grossen Schriftzügen und das Laufband.
- **`prefers-reduced-motion`** schaltet alles davon ab. Wichtig dabei: neben
  der Dauer wird auch `animation-iteration-count` auf 1 gesetzt, sonst würden
  Laufband und Schleier mit 0,01 ms Dauer endlos weiterlaufen.

## DJ-Logo

`public/dj-hasamohr.png` liegt weiter im Repo, wird aber von keiner Komponente
mehr eingebunden. Es ist bereits aufbereitet (zugeschnitten, 760 px, 64-Farben-
Palette, 24 kB statt 292 kB) und trägt eine weiße Sticker-Kontur – es braucht
deshalb einen weißen Untergrund, auf farbigem Grund wirkt die Kontur wie ein
Halo. Falls 2027 wieder eine Malle-Party stattfindet, ist es damit sofort
einsatzbereit.

## Offene Punkte

- **Impressum und Datenschutzerklärung** fehlen weiterhin. Für eine öffentliche
  Vereinsseite in Deutschland sind sie in der Regel Pflicht.
- **Die Dankes- und Einleitungstexte sind von mir formuliert** (`THANKS`,
  `NEXT.lead`, `NEXT.closing`) und keine Zitate des Vereins – bitte einmal
  gegenlesen.
- **Der Samstag heißt nur „Partyabend“.** Steht fest, dass es wieder eine
  Malle-Party gibt, gehört das in `NEXT_DAYS[0].title`.
