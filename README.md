# Menninger Schuppenfest 2026 – Landingpage

Mobile-first Landingpage zum **Menninger Schuppenfest vom 19. bis 21. September
2026**, veranstaltet von der Musikkapelle Menningen e.V. Die Seite ist für den
Aufruf per QR-Code vom Flyer gebaut.

Die Hierarchie folgt dem Gesamtflyer: **Das Schuppenfest ist das Fest**, die
Mallorca Party ist der Samstagabend darin. Der Hero zeigt deshalb das Fest mit
allen drei Tagen; der Samstagabend bekommt weiter unten einen eigenen,
gestalterisch abgesetzten Block – so wie er auch einen eigenen Flyer hat.

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

| Konstante | Inhalt                                                        |
| --------- | ------------------------------------------------------------- |
| `EVENT`   | Titel, Zeitraum, Claim, Schlusssatz, Veranstalter             |
| `VENUE`   | Adresse und Koordinaten (Pin auf der Karte)                   |
| `DAYS`    | Programm je Festtag – Basis für Hero-Chips, Zeitplan, Footer  |
| `THEMES`  | Farbidentität je Tag (Samstag pink, Sonntag messing, Montag türkis) |
| `PARTY`   | Samstagabend: DJ, Einlass, Eintritt, Specials, Party-Pass     |
| `TRAVEL`  | Anfahrt-Hinweis Biberbahn                                     |

Bei den Programmpunkten gilt: `ensemble` ist der ausgeschriebene Kapellenname
(wird mit Noten-Icon angezeigt), `note` ein einfacher Zusatzhinweis.
`shortTitle` ist die Kurzform für die engen Tages-Chips in Hero und Footer.

## DJ-Logo austauschen

Der DJ-Block zeigt derzeit eine **in SVG nachgebaute Sperrmarke**
(`src/components/DjLogo.jsx`): Kopfhörerbügel mit orangen Hörmuscheln, „DJ“ im
Bügel, darunter „HASAMOHR“ und der Claim – Farben und Aufbau entsprechen dem
Original, die Schrift ist Anton statt der Original-Poster-Type. Es ist also eine
Annäherung, kein Faksimile.

Sobald die echte Logodatei unter

```
public/dj-hasamohr.png
```

liegt, wird **automatisch sie** angezeigt – ohne Code-Änderung. Bei anderem
Dateinamen oder Format nur `PARTY.dj.logo` in `src/data/festival.js` anpassen.
Fehlt die Datei, bleibt die SVG-Sperrmarke stehen; die Seite sieht also in
keinem Fall unfertig aus.

## Komponenten

```
src/
├── App.jsx                     Seitenaufbau
├── index.css                   Schriften, Design-Tokens, Utilities
├── data/festival.js            alle Inhalte
└── components/
    ├── StickyNav.jsx           Quick-Access-Leiste mit Sprung zu Sa/So/Mo
    ├── Hero.jsx                Titelbereich: Fest, Datum, Ort, drei Tage
    ├── HeroScene.jsx           Titelbild-SVG: Sonnenuntergang, Schuppen, Palmen
    ├── Programm.jsx            Zeitplan: drei Tageskarten mit Farbidentität
    ├── PartyNight.jsx          Samstagabend: Mallorca Party, DJ, Specials
    ├── Location.jsx            Adresse, Karte, Anfahrt
    ├── Footer.jsx              Schlusssatz und Veranstalter
    ├── DjLogo.jsx              DJ-Sperrmarke mit Auto-Swap auf die echte Datei
    ├── SpecialArt.jsx          farbige Illustrationen der Specials
    ├── Reveal.jsx              sanftes Einblenden beim Scrollen
    └── icons.jsx               Linien-Icons als Inline-SVG
```

## Gestaltung

- **Schriften:** Anton als Poster-Display für Titel und Datums-Ziffern, Outfit
  für Fließtext.
- **Rhythmus:** dunkle und helle Abschnitte wechseln sich ab (Hero dunkel →
  Programm hell → Mallorca Party dunkel → Anfahrt hell → Footer dunkel).
- **Farbcodierung pro Tag:** Samstag pink/orange (Mallorca), Sonntag messing
  (Blasmusik), Montag türkis (Ausklang) – siehe `THEMES`.
- **Alle Grafiken sind Inline-SVG**, inklusive Titelbild und Specials. Es gibt
  kein einziges Bild-Asset im kritischen Ladepfad.

## Performance- und Datenschutz-Entscheidungen

- **Schriften selbst gehostet** in `public/fonts/` (Anton 19 kB, Outfit 32 kB,
  beide woff2, SIL Open Font License 1.1). Kein Request an Google Fonts.
- **Karte erst auf Klick:** Das Google-Maps-Embed wird erst nach Klick auf
  „Karte laden“ eingebettet. Das spart beim ersten Aufruf einige hundert
  Kilobyte und es geht keine Anfrage an Google, bevor der Gast die Karte sehen
  will. Adresse und die Links „Route starten“ / „In Google Maps öffnen“
  funktionieren unabhängig davon.
- **Keine Icon-Library, keine Animationsbibliothek** – Scroll-Effekte laufen
  über einen IntersectionObserver und respektieren
  `prefers-reduced-motion`.

## Offene Punkte

- **Parkmöglichkeiten** sind bewusst nicht erwähnt – dazu lagen keine
  belastbaren Infos vor.
- **Fußweg-Distanz** vom Halt Menningen-Leitishofen ist als „kurzer Fußweg“
  formuliert. Sobald die genaue Angabe bekannt ist, in `TRAVEL.biberbahn.text`
  ergänzen.
- **Biberbahn:** Sie fährt 2026 nur an Sonntagen und einzelnen Feiertagen
  (Quelle: [biberbahn.de](https://www.biberbahn.de/#fahrplan)). Der Hinweis auf
  der Seite ist deshalb als Tipp für den Festsonntag formuliert.
- **Impressum und Datenschutzerklärung** fehlen noch. Für eine öffentliche
  Vereinsseite in Deutschland sind sie in der Regel Pflicht.
