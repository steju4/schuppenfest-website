# Menninger Schuppenfest – Landingpage

Mobile-first Landingpage der Musikkapelle Menningen e.V. Sie ist für den Aufruf
per QR-Code vom Flyer gebaut.

**Aktueller Stand (nach dem Fest 2026):** Die Seite ist ein **Dankeschön für das
Schuppenfest 2026** und ein **Save the Date für 2027 (18. – 20. September)**.
Das Programm 2026 ist vollständig entfernt – ein abgelaufenes Programm auf einer
Seite, die per QR-Code vom Flyer aufgerufen wird, verwirrt mehr als es nützt.

Für 2027 steht bewusst nur der Termin: Samstag Partyabend (was genau, ist noch
offen), Sonntag Festsonntag, Montag Feierabendhock. Keine Zeiten, keine
Kapellen, keine Preise – sobald das Programm steht, kommt es in
`src/data/festival.js` dazu.

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

| Konstante    | Inhalt                                                          |
| ------------ | --------------------------------------------------------------- |
| `ORGANIZER`  | Verein und Vereinsseite                                          |
| `VENUE`      | Adresse des Schuppens                                            |
| `PAST`       | Fest 2026: Jahr, Zeitraum, Überschrift „Danke“, Einleitungstext  |
| `THANKS`     | die vier Dank-Karten (Gäste, Kapellen, DJ, Helfer)               |
| `RECAP`      | Kurzrückblick: was an den drei Tagen 2026 lief                   |
| `NEXT`       | Fest 2027: Zeitraum, Countdown-Start, Kalenderdaten, Schlusssatz |
| `NEXT_DAYS`  | die drei Tage 2027 – `open: true` zeigt das Abzeichen „noch geheim“ |
| `THEMES`     | Farbidentität je Tag (pink/messing/türkis)                       |

Lange Wörter in schmalen Kacheln bekommen ein weiches Trennzeichen (`­`) –
siehe `Feierabend­hock` in `RECAP`. Das erzeugt beim Umbruch ein sauberes
„Feierabend-“ statt eines Bruchs mitten in der Silbe, unabhängig davon, ob der
Browser ein Silbentrenn-Wörterbuch für Deutsch hat.

### Wenn das Programm 2027 feststeht

`NEXT_DAYS` um Zeiten und Kapellen erweitern und bei `samstag` das `open`-Flag
entfernen. Sobald mehr als der Termin bekannt ist, lohnt sich wieder eine
eigene Programm-Komponente – die Fassung von 2026 steht in der Git-Historie
(Commit „Vercel Web Analytics einbinden“ und früher).

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
    ├── Hero.jsx                „Danke“, Zeitraum 2026, zwei Sprungmarken
    ├── Marquee.jsx             Laufband als Trenner
    ├── Thanks.jsx              Rückblick 2026 und die vier Dank-Karten
    ├── SaveTheDate.jsx         2027: Countdown, drei Tageskarten, Aktionen
    ├── QuickActions.jsx        Termin merken (.ics) und Teilen
    ├── DjLogo.jsx              DJ-Logo im Rückblick
    ├── Footer.jsx              Schlusssatz, Adresse, Veranstalter
    ├── Reveal.jsx              sanftes Einblenden beim Scrollen
    └── icons.jsx               Linien-Icons als Inline-SVG
```

## Gestaltung

- **Schriften:** Anton als Poster-Display für Titel und Ziffern, Outfit für
  Fließtext.
- **Rhythmus:** dunkel → hell → dunkel (Danke-Hero → Rückblick → Save the Date
  und Footer), getrennt durch zwei Laufbänder.
- **Zwei grosse Zahlen tragen die Seite:** das Wort „Danke“ oben und die „2027“
  unten, beide im Farbverlauf mit langsam wanderndem Glanz (`animate-sheen`).
  Beide sind in `clamp()` gesetzt, damit sie auch auf 320 px nicht überlaufen.
- **Countdown:** eine einzige Zahl (Tage bis zum Fest). Mehr braucht ein Save
  the Date nicht, und es hält die Seite ruhig.
- **Farbcodierung pro Tag:** Samstag pink (Party), Sonntag messing (Blasmusik),
  Montag türkis (Ausklang) – siehe `THEMES`. Sie zieht sich durch den
  Rückblick und die Tageskarten 2027.
- **Menninger Wappen** im Footer, aus dem Flyer freigestellt.

## Performance- und Datenschutz-Entscheidungen

- **Schriften selbst gehostet** in `public/fonts/` (Anton 19 kB, Outfit 32 kB,
  beide woff2, SIL Open Font License 1.1). Kein Request an Google Fonts.
- **Keine Karte mehr:** Das Google-Maps-Embed ist mit dem Anfahrts-Block
  entfallen. Es geht damit überhaupt keine Anfrage mehr an Google.
- **Keine Icon-Library, keine Animationsbibliothek.** Bewegung gibt es an fünf
  Stellen, alles reines CSS bzw. ein IntersectionObserver: Einblenden beim
  Laden (`animate-rise`), Einblenden beim Scrollen (`Reveal`), wandernde
  Farbschleier, der Glanz in den grossen Schriftzügen und die beiden Laufbänder.
- **`prefers-reduced-motion`** schaltet alles davon ab. Wichtig dabei: neben
  der Dauer wird auch `animation-iteration-count` auf 1 gesetzt, sonst würden
  Laufband und Schleier mit 0,01 ms Dauer endlos weiterlaufen.

## DJ-Logo

Das Logo liegt unter `public/dj-hasamohr.png` und steht im Rückblick auf den
Samstagabend 2026 – also klar in der Vergangenheit. Für 2027 ist bewusst nichts
angekündigt.

Es wurde beim Einbau aufbereitet: auf den sichtbaren Inhalt zugeschnitten, auf
760 px Breite skaliert und auf eine 64-Farben-Palette reduziert – von 292 kB auf
24 kB. Das Logo trägt eine weiße Sticker-Kontur und steht deshalb auf einer
weißen Karte; auf farbigem Grund wirkte die Kontur wie ein Halo. Fehlt die Datei,
blendet sich das Bild still aus (`src/components/DjLogo.jsx`).

## Offene Punkte

- **Impressum und Datenschutzerklärung** fehlen weiterhin. Für eine öffentliche
  Vereinsseite in Deutschland sind sie in der Regel Pflicht.
- **Alle Dank- und Rückblickstexte sind von mir formuliert** (`PAST`, `THANKS`,
  `RECAP`, `NEXT.lead`). Sie geben wieder, was 2026 laut Flyer stattgefunden
  hat, sind aber keine Zitate des Vereins – bitte einmal gegenlesen, bevor sie
  live gehen.
- **Der Partyabend 2027 ist offen gehalten** („noch geheim“). Steht fest, dass
  es wieder eine Malle-Party gibt, gehört das in `NEXT_DAYS[0]`.
