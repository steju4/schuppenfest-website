# Menninger Schuppenfest 2026 – Landingpage

Mobile-first Landingpage zum Menninger Schuppenfest vom **19. bis 21. September
2026**, veranstaltet von der Musikkapelle Menningen e.V. Die Seite ist für den
Aufruf per QR-Code vom Flyer gebaut: alles Wichtige (Datum, Ort, Eintritt) steht
ohne Scrollen im ersten Bildschirm.

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

## Inhalte pflegen

**Alle Texte, Zeiten und Programmpunkte stehen in
[`src/data/festival.js`](src/data/festival.js).** Die Komponenten lesen nur
daraus – für Programmänderungen muss also kein Komponenten-Code angefasst
werden.

| Konstante   | Inhalt                                              |
| ----------- | --------------------------------------------------- |
| `EVENT`     | Titel, Zeitraum, Veranstalter                       |
| `VENUE`     | Adresse und Koordinaten (Pin auf der Karte)         |
| `HIGHLIGHT` | Kurzinfos für Hero und Sticky-Bar                   |
| `DJ`        | Name, Slogan, Pfad zum Logo                         |
| `SPECIALS`  | Die drei Highlight-Cards                            |
| `NOTICES`   | Hinweis zum Party-Pass                              |
| `DAYS`      | Programm je Festtag (Basis für den Zeitplan)        |
| `TRAVEL`    | Anfahrt-Hinweis Biberbahn                           |

Bei den Programmpunkten gilt: `ensemble` ist der ausgeschriebene Kapellenname
(wird mit Noten-Icon angezeigt), `note` ein einfacher Zusatzhinweis.

## DJ-Logo nachtragen

Der DJ-Block zeigt momentan einen gestalteten **Platzhalter**. Sobald das echte
Logo unter

```
public/dj-hasamohr.png
```

liegt, wird es automatisch angezeigt – **ohne Code-Änderung**. Bei einem anderen
Dateinamen oder Format einfach `DJ.logo` in `src/data/festival.js` anpassen.
Fehlt die Datei, bleibt der Platzhalter stehen; die Seite sieht also in keinem
Fall kaputt aus.

## Komponenten

```
src/
├── App.jsx                     Seitenaufbau
├── index.css                   Design-Tokens, Font, Basis-Styles
├── data/festival.js            alle Inhalte
└── components/
    ├── StickyBar.jsx           Quick-Access-Leiste (Datum + Ort) beim Scrollen
    ├── Hero.jsx                erster Bildschirm: Datum, Ort, Eintritt
    ├── PartyHighlight.jsx      Samstag: Mallorca Party, DJ, Specials
    ├── Programm.jsx            Zeitplan mit Tabs je Festtag
    ├── Location.jsx            Adresse, Karte, Anfahrt
    ├── Footer.jsx              Veranstalter und Abschluss
    ├── DjLogo.jsx              Logo mit Platzhalter-Fallback
    └── icons.jsx               Inline-SVG-Icons
```

## Performance- und Datenschutz-Entscheidungen

- **Schrift selbst gehostet:** Outfit (Variable, SIL OFL 1.1) liegt als 32-kB-
  woff2 in `public/fonts/`. Kein Request an Google Fonts, kein
  render-blockierendes Stylesheet.
- **Karte erst auf Klick:** Das Google-Maps-Embed wird erst nach Klick auf
  „Karte laden“ eingebettet. Das spart beim ersten Aufruf einige hundert
  Kilobyte und es geht keine Anfrage an Google, bevor der Gast die Karte sehen
  will. Adresse und die Links „Route starten“ / „In Google Maps öffnen“
  funktionieren unabhängig davon.
- **Keine Icon-Library:** alle Icons sind Inline-SVG (`src/components/icons.jsx`).
- **Keine Bilder im kritischen Pfad:** Hintergrund und Farbverläufe sind reines
  CSS.

## Offene Punkte

- **Parkmöglichkeiten** sind bewusst nicht erwähnt – dazu lagen keine
  belastbaren Infos vor.
- **Fußweg-Distanz** vom Halt Menningen-Leitishofen ist als „kurzer Fußweg“
  formuliert. Sobald die genaue Angabe bekannt ist, in `TRAVEL.biberbahn.text`
  ergänzen.
- **Biberbahn:** Sie fährt 2026 nur an Sonntagen und einzelnen Feiertagen
  (Quelle: [biberbahn.de](https://www.biberbahn.de/#fahrplan)). Der Hinweis auf
  der Seite ist deshalb als Tipp für den Festsonntag formuliert.
