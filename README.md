# Menninger Schuppenfest 2026 – Landingpage

Mobile-first Landingpage zum **Menninger Schuppenfest vom 19. bis 21. September
2026**, veranstaltet von der Musikkapelle Menningen e.V. Die Seite ist für den
Aufruf per QR-Code vom Flyer gebaut.

Die Hierarchie folgt dem Gesamtflyer: **Das Schuppenfest ist das Fest**, die
Malle-Party ist der Samstagabend darin. Der Hero zeigt deshalb das Fest mit
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
| `THEMES`  | Farbidentität je Tag – Tageskarten, Hero-/Footer-Kacheln, aktive Sticky-Nav |
| `PARTY`   | Samstagabend: DJ, Einlass, Eintritt, Specials, Party-Pass     |
| `NAV`     | Sprungmarken der Kopfleiste – inkl. eigenem Punkt für die Malle-Party |
| `FACTS`   | Kacheln im Block „Gut zu wissen“                              |
| `TRAVEL`  | Anfahrt-Hinweis Biberbahn                                     |

Bei den Programmpunkten gilt: `ensemble` ist der ausgeschriebene Kapellenname
(wird mit Noten-Icon angezeigt), `note` ein einfacher Zusatzhinweis.
`shortTitle` ist die Kurzform für die engen Tages-Kacheln in Hero und Footer.
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

## Komponenten

```
src/
├── App.jsx                     Seitenaufbau
├── index.css                   Schriften, Design-Tokens, Utilities
├── data/festival.js            alle Inhalte
├── lib/calendar.js             erzeugt die .ics-Datei zum Termin merken
├── lib/useToday.js             heutiges Datum, minütlich aktualisiert
└── components/
    ├── StickyNav.jsx           Kopfleiste: Sa/So/Mo/Malle + Lesefortschritt
    ├── Hero.jsx                Titelbereich: Fest, Datum, Ort, Status
    ├── FestStatus.jsx          Countdown davor, Tagesprogramm währenddessen
    ├── QuickActions.jsx        Termin merken (.ics) und Teilen
    ├── Programm.jsx            Zeitplan: drei Tageskarten mit Farbidentität
    ├── PartyNight.jsx          Samstagabend: Malle-Party, DJ, Specials
    ├── Location.jsx            Adresse, Karte, Anfahrt
    ├── Facts.jsx               „Gut zu wissen“
    ├── Footer.jsx              Schlusssatz und Veranstalter
    ├── SectionEdge.jsx         weiche Kante zwischen hell und dunkel
    ├── DjLogo.jsx              DJ-Logo mit SVG-Fallback
    ├── SpecialArt.jsx          farbige Illustrationen der Specials
    ├── Reveal.jsx              sanftes Einblenden beim Scrollen
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

- **Schriften:** Anton als Poster-Display für Titel und Datums-Ziffern, Outfit
  für Fließtext.
- **Rhythmus:** dunkle und helle Abschnitte wechseln sich ab (Hero dunkel →
  Programm hell → Malle-Party dunkel → Anfahrt hell → Footer dunkel).
- **Farbcodierung pro Tag:** Samstag pink/orange (Malle-Party), Sonntag messing
  (Blasmusik), Montag türkis (Ausklang) – siehe `THEMES`. Sie zieht sich durch
  Tageskarten, die Kacheln in Hero und Footer und den aktiven Punkt der
  Sticky-Nav. Zusätzlich haben die Kacheln in „Gut zu wissen“ und die
  Specials je einen eigenen gedämpften Akzent, damit die Seite nicht
  einfarbig wirkt.
- **Schlicht statt dekoriert:** der Hero trägt die Seite über Typografie,
  Countdown und die drei Tageskarten – ohne große Illustration.
- **Weiche Kanten:** Zwischen hellen und dunklen Abschnitten sitzt eine
  geschwungene Kante (`SectionEdge`), statt einer harten Linie.
- **Menninger Wappen** im Footer, aus dem Flyer freigestellt.
- **Wegweiser zur Malle-Party:** Die Samstagskarte endet in einem farbigen
  Banner, das zum Detailblock weiter unten führt. Es ist bewusst das
  auffälligste Element im Programm, weil dort die meistgesuchten Infos
  stehen (DJ, Specials, Eintritt) und ein reiner Textlink dafür übersehen
  wurde.
- **Grafiken sind Inline-SVG** (Icons, Specials). Einziges Bild ist das
  DJ-Logo, und das lädt `loading="lazy"` weit unterhalb des ersten Bildschirms.

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
