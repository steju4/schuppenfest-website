# Menninger Schuppenfest 2026 – Landingpage

Mobile-first Landingpage zum **Menninger Schuppenfest vom 19. bis 21. September
2026**, veranstaltet von der Musikkapelle Menningen e.V. Die Seite ist für den
Aufruf per QR-Code vom Flyer gebaut.

> **Gestaltungsvariante „Mosaik“.** Vollständiger Neuentwurf mit denselben
> Inhalten – anderer Aufbau, andere Schrift, andere Farben. Die andere Fassung
> liegt auf `claude/malle-party-relaunch`.

Die Hierarchie folgt dem Gesamtflyer: **Das Schuppenfest ist das Fest**, die
Malle-Party ist der Samstagabend darin.

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
| `THEMES`  | Farbfläche je Tag – Tageskachel, Footer-Kachel, aktiver Punkt im Dock |
| `PARTY`   | Samstagabend: DJ, Einlass, Eintritt, Specials, Party-Pass     |
| `NAV`     | Sprungmarken des Docks – inkl. eigenem Punkt für die Malle-Party |
| `FACTS`   | Kacheln im Block „Gut zu wissen“                              |
| `TRAVEL`  | Anfahrt-Hinweis Biberbahn                                     |

Bei den Programmpunkten gilt: `ensemble` ist der ausgeschriebene Kapellenname
(wird mit Noten-Icon angezeigt), `note` ein einfacher Zusatzhinweis.
`shortTitle` ist die Kurzform für die engen Tages-Kacheln im Footer.
Lange Wörter dort mit einem weichen Trennzeichen (`\u00AD`) versehen – siehe
„Feierabend\u00ADhock“. Das erzeugt beim Umbruch ein sauberes „Feierabend-“
statt eines Bruchs mitten in der Silbe, unabhängig davon ob der Browser ein
Silbentrenn-Wörterbuch für Deutsch hat.

## DJ-Logo

Das echte Logo liegt unter `public/dj-hasamohr.png` und wird angezeigt.

Es wurde beim Einbau aufbereitet: auf den sichtbaren Inhalt zugeschnitten (die
Vorlage hatte breite leere Ränder), auf 760 px Breite skaliert und auf eine
64-Farben-Palette reduziert – **von 292 kB auf 24 kB**, ohne sichtbaren
Qualitätsverlust.

Das Logo trägt gestalterisch eine **weiße Sticker-Kontur**. Auf farbigem Grund
wirkt die wie ein Halo – deshalb steht es auf einer **weißen Karte**, dort
verschwindet die Kontur und das Logo sieht aus wie gedacht. Die transparente
Vorlage war also in Ordnung; sie braucht nur den passenden Untergrund.

Fehlt die Datei einmal, greift automatisch eine in SVG nachgebaute Sperrmarke
(`src/components/DjLogo.jsx`), damit die Seite nie kaputt aussieht. Anderer
Dateiname? Nur `PARTY.dj.logo` in `src/data/festival.js` anpassen.

## Aufbau: ein einziges Kachelraster

Der wesentliche Unterschied zur anderen Fassung liegt nicht in der Farbe,
sondern in der **Informationsarchitektur**. Es gibt keine gestapelten
Abschnitte mehr. Die ganze Seite ist **ein durchgehendes Raster**
(`grid-cols-2`, ab `sm` vierspaltig), und jede Komponente liefert nur ihre
Kacheln hinein:

```jsx
<div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
  <HeroTiles />
  <Marquee />
  <ProgrammTiles />
  <PartyTiles />
  <FactTiles />
  <LocationTiles />
  <FooterTiles />
</div>
```

Jede Komponente gibt ein Fragment aus Kacheln zurück, keine `<section>` mit
eigenem Hintergrund. Dadurch laufen die Bereiche ineinander und ergeben ein
Mosaik aus unterschiedlich grossen, unterschiedlich farbigen Flächen statt
einer Abfolge von Blöcken. Die Spaltenbreite steht als Klasse an der
jeweiligen Kachel (`col-span-1`, `col-span-2 sm:col-span-4`), damit Tailwind
sie beim Bauen sieht.

## Komponenten

```
src/
├── App.jsx                     das Raster, in das alle Kacheln laufen
├── index.css                   Schriften, Design-Tokens, Utilities
├── data/festival.js            alle Inhalte
├── lib/calendar.js             erzeugt die .ics-Datei zum Termin merken
├── lib/useToday.js             heutiges Datum, minütlich aktualisiert
└── components/
    ├── Tile.jsx                Grundbaustein: Kachel mit Einblend-Effekt
    ├── HeroTiles.jsx           Titel, Countdown, Ort, Aktionen
    ├── FestStatus.jsx          Countdown davor, heutiger Tag währenddessen
    ├── QuickActions.jsx        Termin merken (.ics) und Teilen
    ├── Marquee.jsx             schmales Laufband als Taktgeber
    ├── ProgrammTiles.jsx       drei Tages-Farbkacheln
    ├── PartyTiles.jsx          Samstagabend: Malle-Party, DJ, Specials
    ├── FactTiles.jsx           „Gut zu wissen“ als 2×2-Farbmosaik
    ├── LocationTiles.jsx       Adresse, Karte, Biberbahn
    ├── FooterTiles.jsx         Schlusssatz, Tage, Veranstalter
    ├── Dock.jsx                schwebende Leiste unten
    ├── DjLogo.jsx              DJ-Logo mit SVG-Fallback
    ├── SpecialArt.jsx          farbige Illustrationen der Specials
    ├── Reveal.jsx              Einblenden beim Scrollen
    └── icons.jsx               Linien-Icons als Inline-SVG
```

## Stand der Inhalte

Eingearbeitet ist der **Flyer-Stand vom September 2026** (A4 Gesamtflyer + A6
Party-Flyer). Gegenüber der ersten Fassung geändert:

- Die Party heißt **Malle-Party** (Schreibweise mit Bindestrich wie auf beiden
  Flyern), vorher „Mallorca Party“.
- **Montag beginnt später:** Feierabendhock ab 18:00 Uhr (vorher 17:30),
  Festausklang ab 19:00 Uhr (vorher 18:30).
- Sonntag 17:30 Uhr heißt jetzt **„Blasmusik mit der MK Buchheim“**
  (vorher „Unterhaltung“).
- „Danach 7 € Eintritt“ steht inzwischen auch auf dem Flyer.

## Lebendige Zustände

Die Seite verhält sich abhängig vom Datum – ohne Backend, alles im Browser
gerechnet:

- **Vor dem Fest:** Countdown mit Tagen, Stunden, Minuten.
- **Während des Fests:** Der Countdown weicht einem Panel „Heute · Sonntag“ mit
  den nächsten Programmpunkten, die passende Tageskarte bekommt einen Rahmen
  und ein „Heute“-Abzeichen, und die Kachel im Hero wird hervorgehoben.
- **Nach dem Fest:** Der Block verschwindet still.

Getestet wird das, indem man in `useToday.js` bzw. `FestStatus.jsx` das Datum
vorübergehend fest verdrahtet – oder im Browser die Systemzeit vorstellt.

## Gestaltung

- **Schriften:** Bricolage Grotesque als Display – eine variable Grotesk mit
  eigenem Charakter, sehr eng und fett gesetzt in Versalien. Instrument Sans
  für Fliesstext und Bedienelemente.
- **Farbe als Fläche, nicht als Akzent:** Jede Kachel trägt ihre Farbe voll.
  Samstag Signalrot, Sonntag Gelb, Montag Jade, dazu Schwarz und ein
  Knochenweiss als Grundton. Die Schrift auf den Farbflächen ist **dunkel,
  nicht weiss** – das hält den Kontrast hoch und sieht heutiger aus.
- **Grosse Datumsziffern** liegen als Fläche im Hintergrund jeder Tageskachel.
- **Fluide Displaygrössen** (`clamp`) statt fester Stufen: „Schuppenfest“ und
  „Malle-Party“ füllen ihre Kachel auf jeder Breite aus, ohne zu überlaufen.
- **Laufband** als schmale schwarze Kachel zwischen Kopf und Programm.
- **Navigation unten:** eine schwebende Leiste in Daumenreichweite, die den
  aktuellen Abschnitt in dessen Farbe zeigt.

## Performance- und Datenschutz-Entscheidungen

- **Schriften selbst gehostet** in `public/fonts/` (Bricolage Grotesque 75 kB
  variabel, Instrument Sans 29 kB, beide woff2, SIL Open Font License 1.1).
  Kein Request an Google Fonts.
- **Karte erst auf Klick:** Das Google-Maps-Embed wird erst nach Klick auf
  „Karte laden“ eingebettet. Das spart beim ersten Aufruf einige hundert
  Kilobyte und es geht keine Anfrage an Google, bevor der Gast die Karte sehen
  will. Adresse und die Links „Route starten“ / „In Google Maps öffnen“
  funktionieren unabhängig davon.
- **Keine Icon-Library, keine Animationsbibliothek.** Bewegung gibt es an vier
  Stellen, alles reines CSS bzw. ein IntersectionObserver: Einblenden beim
  Scrollen, langsam wandernde Farbschleier im Hero, das Laufband und der
  hochzählende Countdown.
- **`prefers-reduced-motion`** schaltet alles davon ab. Wichtig dabei: neben
  der Dauer wird auch `animation-iteration-count` auf 1 gesetzt, sonst würden
  Laufband und Schleier mit 0,01 ms Dauer endlos weiterlaufen.

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
- **Eintritt am Sonntag und Montag** ist nirgends angegeben. Die Seite macht
  dazu bewusst keine Aussage – der Eintrittshinweis gilt ausdrücklich nur für
  den Samstag.

## Von mir formulierte Texte – bitte gegenlesen

Die Programmzeiten und Kapellen stammen von den Flyern. Folgende Beschreibungen
habe ich dagegen selbst formuliert; sie sind plausibel, aber nicht durch eine
Quelle belegt:

- Sonntag: „Warme Küche für den großen Hunger“ und „Große Auswahl an
  selbstgebackenen Kuchen“ – der Flyer nennt nur „Reichhaltiger Mittagstisch
  sowie Kaffee und Kuchen“, die Ausschmückung ist von mir.
- **Sonntag „Abendessen“** steht auf keinem Flyer, sondern beruht auf der
  mündlichen Angabe, dass auch abends bewirtet wird.
- **Montag „Wurstsalat“** steht ebenfalls auf keinem Flyer, sondern beruht auf
  der mündlichen Angabe.
- Montag: „Der Klassiker zum Feierabend“ (zu Wurstsalat)
- „Bei jedem Wetter“ im Block *Gut zu wissen*
- Die Uhrzeiten der Bewirtung stehen bewusst als „mittags“, „nachmittags“ und
  „abends“ – konkrete Zeiten lagen nicht vor.

Alles davon steht in `src/data/festival.js` und ist in einer Minute geändert.
