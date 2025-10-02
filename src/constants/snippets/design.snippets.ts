/**
 * Design Snippets
 *
 * UI/UX design analysis and improvement snippets.
 * Includes UI design analysis, color schemes, layout optimization, and feature brainstorming.
 */

import { Snippet } from '@/types/snippet.types';

export const DESIGN_SNIPPETS: Snippet[] = [
  // UI/GUI Design Analyse
  {
    id: 'cuidesign',
    name: 'UI/GUI Design Analyse',
    description:
      'Lass Claude deine UI analysieren und kreative Verbesserungsvorschläge machen',
    category: 'other',
    icon: '🎨',
    template: `[Kontext: DEVELOPMENT.md]

🎨 UI/GUI Design Analyse & Vorschläge

Analysiere bitte die Benutzeroberfläche in folgendem Ordner/Komponente:
{{targetPath}}

WICHTIG: Sei kreativ und denke out-of-the-box!

Analysiere und gib mir Vorschläge zu:

1. **Erste Eindrücke:**
   - Was fällt dir sofort auf (positiv & negativ)?
   - Wie intuitiv ist die Bedienung?
   - Gibt es verwirrende Elemente?

2. **Moderne UI-Trends:**
   - Welche aktuellen Design-Trends könnten hier passen?
   - Glassmorphism, Neumorphism, Brutal Design?
   - Micro-Animations oder Transitions fehlen?

3. **User Experience:**
   - Wo könnten User stolpern?
   - Welche Interaktionen fehlen (Hover, Focus, Loading States)?
   - Feedback für User-Aktionen ausreichend?

4. **Innovative Ideen:**
   - {{innovationFocus}}
   - Welche ungewöhnlichen UI-Patterns könnten hier funktionieren?
   - Inspirationen aus anderen erfolgreichen Apps?

5. **Konkrete Verbesserungen:**
   - Priorisiere 3-5 Quick Wins (einfach umsetzbar, großer Impact)
   - 2-3 größere Verbesserungen (mehr Aufwand, aber lohnenswert)

Bitte sei spezifisch mit Code-Beispielen oder konkreten Design-Beschreibungen!`,
    placeholders: [
      {
        id: 'targetPath',
        label: 'Ziel-Ordner oder Komponente',
        type: 'text',
        required: true,
        placeholder: 'z.B. src/components/Dashboard/ oder src/pages/Home.tsx',
      },
      {
        id: 'innovationFocus',
        label: 'Innovations-Fokus (optional)',
        type: 'text',
        required: false,
        placeholder:
          'z.B. "Gamification-Elemente" oder "Accessibility-First"',
        defaultValue: 'Überrasche mich mit kreativen Ideen',
      },
    ],

    longDescription:
      'Dieser Snippet lässt Claude als Design-Consultant deine Benutzeroberfläche analysieren. Er schaut auf UX, moderne Design-Trends, Usability und gibt kreative Verbesserungsvorschläge. Perfekt um frischen Wind in dein UI zu bringen oder blinde Flecken zu entdecken.',

    whenToUse:
      'Verwende diesen Snippet wenn dein UI funktioniert aber noch nicht "wow" ist. Ideal nach dem MVP wenn du Verbesserungen suchst. Auch gut für zweite Meinungen zu Design-Entscheidungen. Nicht sinnvoll für rein funktionale Bugs.',

    useCase:
      'Dein Dashboard funktioniert technisch einwandfrei, sieht aber langweilig aus. Claude analysiert die UI und schlägt vor: (1) Glassmorphism-Effekte für Cards, (2) Hover-Animationen für interaktive Elemente, (3) Loading-Skeletons statt Spinner, (4) Micro-Interactions beim Datenladen. Plus konkrete Tailwind-Code-Beispiele.',

    fieldGuide: [
      {
        fieldId: 'targetPath',
        explanation:
          'Welche Komponente oder welcher Ordner soll analysiert werden?',
        example: 'src/pages/Dashboard/',
        tips:
          'Kann eine einzelne Komponente oder ein kompletter Ordner sein',
      },
      {
        fieldId: 'innovationFocus',
        explanation:
          'In welche Richtung soll Claude denken? Gamification? Accessibility? Minimalism?',
        example: 'Gamification-Elemente einbauen',
        tips:
          'Optional. Lass es leer für allgemeine Vorschläge. Oder gib eine Richtung vor: "Mobile-First", "Dark Mode", "Playful Design"',
      },
    ],
  },

  // Farbdesign & Theme Vorschläge
  {
    id: 'ccolor',
    name: 'Farbdesign & Theme Vorschläge',
    description:
      'Lass Claude Farbpaletten und Theme-Konzepte für deine App vorschlagen',
    category: 'other',
    icon: '🌈',
    template: `[Kontext: DEVELOPMENT.md]

🌈 Farbdesign & Theme-Analyse

Analysiere das aktuelle Farbschema in:
{{targetPath}}

Projekt-Kontext:
- Zielgruppe: {{targetAudience}}
- Stimmung/Gefühl: {{mood}}
- Branding: {{branding}}

Aufgaben:

1. **Analyse des aktuellen Farbschemas:**
   - Welche Farben werden verwendet?
   - Ist das Farbschema konsistent?
   - Funktioniert der Kontrast (Accessibility)?
   - Dark Mode vorhanden und gut umgesetzt?

2. **Farbpsychologie:**
   - Passen die aktuellen Farben zur Zielgruppe?
   - Welche Emotionen vermitteln sie?
   - Gibt es kulturelle Aspekte zu beachten?

3. **Neue Farbpaletten-Vorschläge:**
   - Schlage 3 unterschiedliche Farbpaletten vor
   - Für jede Palette: Primary, Secondary, Accent, Neutrals
   - Gib konkrete Hex-Codes und Tailwind-Classes
   - Erkläre die Rationale hinter jeder Palette

4. **Gradient & Effekte:**
   - Moderne Gradient-Kombinationen
   - Glassmorphism oder Neumorphism Effekte
   - Farbige Shadows oder Glows

5. **Theme-Varianten:**
   - Light/Dark Mode Optimierungen
   - Zusätzliche Themes (z.B. High Contrast, Sepia)?
   - Seasonal Themes (Weihnachten, etc.)?

6. **Implementierungs-Vorschläge:**
   - Tailwind Config anpassen
   - CSS Custom Properties
   - Theme-Switching Strategie

Sei kreativ und wage auch unkonventionelle Vorschläge!`,
    placeholders: [
      {
        id: 'targetPath',
        label: 'Zu analysierende Komponente/Datei',
        type: 'text',
        required: true,
        placeholder: 'z.B. src/App.tsx oder src/styles/',
      },
      {
        id: 'targetAudience',
        label: 'Zielgruppe',
        type: 'text',
        required: false,
        placeholder: 'z.B. Entwickler, Designer, Kinder, Business-User',
        defaultValue: 'Allgemein',
      },
      {
        id: 'mood',
        label: 'Gewünschte Stimmung',
        type: 'text',
        required: false,
        placeholder: 'z.B. Professional, Playful, Minimalist, Bold',
        defaultValue: 'Modern und professionell',
      },
      {
        id: 'branding',
        label: 'Branding-Vorgaben (falls vorhanden)',
        type: 'text',
        required: false,
        placeholder: 'z.B. Firmenfarben, Logo-Farben',
        defaultValue: 'Keine speziellen Vorgaben',
      },
    ],

    longDescription:
      'Dieser Snippet ist dein persönlicher Color-Designer. Claude analysiert dein aktuelles Farbschema, berücksichtigt Farbpsychologie und Zielgruppe, und schlägt neue Paletten vor. Du bekommst konkrete Hex-Codes, Tailwind-Config und Implementierungs-Tipps. Perfekt für Rebranding oder wenn du mit deinen Farben unzufrieden bist.',

    whenToUse:
      'Verwende diesen Snippet wenn du mit deinem Farbschema unzufrieden bist oder einen kompletten Redesign planst. Auch gut für A/B-Testing verschiedener Paletten. Nicht nötig für kleine Farb-Tweaks.',

    useCase:
      'Deine Produktivitäts-App nutzt aktuell Standard-Blau-Töne, fühlt sich aber generisch an. Du gibst als Zielgruppe "Kreative & Designer", Stimmung "Playful & Inspirierend" an. Claude schlägt 3 Paletten vor: (1) Warme Sonnenuntergangs-Töne, (2) Lebendige Neon-Akzente, (3) Erdige Naturfarben - jeweils mit Hex-Codes und Erklärung.',

    fieldGuide: [
      {
        fieldId: 'targetPath',
        explanation:
          'Wo befinden sich die Haupt-Styles deiner App?',
        example: 'src/App.tsx',
        tips:
          'Oft die Haupt-App-Datei oder ein styles/ Ordner',
      },
      {
        fieldId: 'targetAudience',
        explanation: 'Für wen ist die App gedacht? Wer sind die Hauptnutzer?',
        example: 'Entwickler und Tech-affine User',
        tips:
          'Die Zielgruppe beeinflusst die Farbwahl stark. Kinder = bunt, Business = professionell',
      },
      {
        fieldId: 'mood',
        explanation:
          'Welches Gefühl soll die App vermitteln?',
        example: 'Professional aber zugänglich',
        tips:
          'Wörter wie: Playful, Serious, Minimalist, Bold, Calm, Energetic, Luxurious, Friendly',
      },
      {
        fieldId: 'branding',
        explanation:
          'Gibt es Branding-Vorgaben? Firmenfarben? Logo-Farben?',
        example: 'Hauptfarbe ist #3B82F6 (Blau)',
        tips:
          'Wenn du Vorgaben hast, erwähne sie. Claude wird sie in die Paletten integrieren',
      },
    ],
  },

  // Layout & Struktur Optimierung
  {
    id: 'clayout',
    name: 'Layout & Struktur Optimierung',
    description:
      'Kreative Layout-Ideen und Struktur-Verbesserungen für deine App',
    category: 'other',
    icon: '📐',
    template: `[Kontext: DEVELOPMENT.md]

📐 Layout & Struktur Analyse

Analysiere die Layout-Struktur in:
{{targetPath}}

Geräte-Fokus: {{deviceFocus}}
Besondere Anforderungen: {{specialRequirements}}

Analysiere und gib kreative Vorschläge zu:

1. **Aktuelle Layout-Analyse:**
   - Wie ist das Layout strukturiert? (Grid, Flex, etc.)
   - Responsive Breakpoints sinnvoll gesetzt?
   - Hierarchie und visuelle Gewichtung klar?
   - Whitespace/Spacing konsistent?

2. **Layout-Pattern Vorschläge:**
   - Welche modernen Layout-Patterns passen hier?
     * Bento Grid
     * Masonry Layout
     * Asymmetrische Layouts
     * Split-Screen
     * Card-Based
     * Dashboard-Style
   - Konkrete Umsetzungsideen mit Beispiel-Code

3. **Responsive Design:**
   - Mobile-First Optimierungen
   - Tablet-spezifische Layouts
   - Desktop: Wie nutzen wir den großen Screen optimal?
   - Progressive Enhancement Ideen

4. **Navigation & Information Architecture:**
   - Ist die Navigation intuitiv?
   - Breadcrumbs sinnvoll?
   - Tabs vs. Accordion vs. Sidebar?
   - Wie finden User was sie suchen?

5. **Content-Organisation:**
   - Above the Fold: Was ist am wichtigsten?
   - Visual Hierarchy verbessern
   - F-Pattern oder Z-Pattern Optimierung
   - Scroll-Verhalten optimieren

6. **Innovative Layout-Ideen:**
   - Scroll-Triggered Animations
   - Parallax-Effekte
   - Sticky Elements strategisch einsetzen
   - Split-Scrolling
   - Horizontal Scrolling Sections

7. **Performance & UX:**
   - Loading States & Skeletons
   - Lazy Loading für große Layouts
   - Infinite Scroll vs. Pagination

Priorisiere Vorschläge nach Impact und Umsetzungsaufwand!`,
    placeholders: [
      {
        id: 'targetPath',
        label: 'Zu analysierende Komponente/Seite',
        type: 'text',
        required: true,
        placeholder: 'z.B. src/pages/Dashboard.tsx oder src/App.tsx',
      },
      {
        id: 'deviceFocus',
        label: 'Geräte-Fokus',
        type: 'select',
        required: false,
        options: [
          'Alle Geräte',
          'Primär Mobile',
          'Primär Desktop',
          'Tablet-optimiert',
        ],
        defaultValue: 'Alle Geräte',
      },
      {
        id: 'specialRequirements',
        label: 'Besondere Anforderungen',
        type: 'textarea',
        required: false,
        placeholder:
          'z.B. "Muss viele Daten darstellen" oder "Gaming-Interface"',
      },
    ],

    longDescription:
      'Dieser Snippet ist dein Layout-Architekt. Claude analysiert deine aktuelle Layout-Struktur, schlägt moderne Layout-Patterns vor (Bento Grid, Masonry, etc.) und gibt Tipps zu Responsive Design und Content-Organisation. Du bekommst konkrete Code-Beispiele und Priorisierung nach Aufwand vs. Impact.',

    whenToUse:
      'Verwende diesen Snippet wenn dein Layout funktional ist aber nicht optimal. Ideal für Redesigns, Responsive-Probleme oder wenn du moderne Layout-Trends nutzen möchtest. Auch gut wenn User sich in deiner App nicht zurechtfinden.',

    useCase:
      'Deine E-Commerce-Produktseite nutzt ein simples Grid. Claude schlägt vor: (1) Bento-Grid für dynamischere Layouts, (2) Sticky Add-to-Cart-Button auf Mobile, (3) Split-Screen mit Produktbild links (scrollbar) und Details rechts (sticky), (4) Masonry-Layout für Related Products. Plus Responsive-Strategie und Code-Beispiele.',

    fieldGuide: [
      {
        fieldId: 'targetPath',
        explanation: 'Welche Seite oder Komponente soll analysiert werden?',
        example: 'src/pages/ProductDetail.tsx',
        tips:
          'Am besten ganze Seiten oder große Komponenten (Dashboard, Landing Page)',
      },
      {
        fieldId: 'deviceFocus',
        explanation: 'Auf welche Geräte soll der Fokus liegen?',
        example: 'Alle Geräte',
        tips:
          '"Alle Geräte" für Mobile-First Approach. Wähle spezifisch wenn du ein Gerät priorisierst',
      },
      {
        fieldId: 'specialRequirements',
        explanation:
          'Besondere Herausforderungen oder Anforderungen?',
        example: 'Muss viele Daten übersichtlich darstellen ohne zu überladen',
        tips:
          'Erwähne: Datenmengen, Performance-Anforderungen, Besonderheiten (Gaming, E-Commerce, Admin-Panel)',
      },
    ],
  },

  // Neue Features & Komponenten Brainstorming
  {
    id: 'cfeatureideas',
    name: 'Neue Features & Komponenten Brainstorming',
    description:
      'Lass Claude innovative Feature-Ideen und neue Komponenten vorschlagen',
    category: 'other',
    icon: '💡',
    template: `[Kontext: DEVELOPMENT.md]

💡 Feature & Komponenten Brainstorming

Projekt-Kontext:
- Aktuelle App/Seite: {{currentContext}}
- User Pain Points: {{painPoints}}
- Inspiration: {{inspiration}}

Aufgabe: Sei kreativ und schlage innovative Features und Komponenten vor!

1. **Analyse der aktuellen App:**
   - Was macht die App gut?
   - Was fehlt noch?
   - Wo könnten User frustriert sein?

2. **Feature-Kategorien:**

   **A) Quick Wins (schnell umsetzbar):**
   - {{quickWinFocus}}
   - Welche kleinen Features würden große Freude bereiten?
   - Toast Notifications, Shortcuts, Easter Eggs?

   **B) Game Changers (größerer Aufwand, großer Impact):**
   - Welche Features würden die App auf das nächste Level heben?
   - Innovative Interaktionen
   - Neue Haupt-Features

   **C) Delightful Details:**
   - Micro-Interactions
   - Animationen
   - Sound-Effekte
   - Haptic Feedback (Mobile)

3. **Neue Komponenten-Ideen:**
   - Welche wiederverwendbaren Komponenten fehlen?
   - Moderne UI-Komponenten Trends
   - Interaktive Widgets
   - Datenvisualisierung

4. **Inspiration aus anderen Apps:**
   - Was machen führende Apps in diesem Bereich?
   - Welche Features könnte man adaptieren?
   - Wie kann man es noch besser machen?

5. **Futuristisch denken:**
   - AI-Integration (z.B. Autocomplete, Suggestions)
   - Voice Commands
   - Gestures
   - Collaborative Features
   - Real-time Updates

6. **Priorisierung:**
   Sortiere alle Vorschläge nach:
   - 🟢 Quick Wins (niedrig hängend Früchte)
   - 🟡 Medium Impact (mittlerer Aufwand, guter Return)
   - 🔴 Big Bets (hoher Aufwand, potenziell transformativ)

Für jede Feature-Idee:
- Beschreibung & User-Benefit
- Technische Umsetzungs-Skizze
- Geschätzter Aufwand
- Wow-Faktor (1-10)

Denk groß und sei mutig mit Ideen! 🚀`,
    placeholders: [
      {
        id: 'currentContext',
        label: 'Aktueller App-Kontext',
        type: 'textarea',
        required: true,
        placeholder: 'Beschreibe kurz was die App aktuell macht',
      },
      {
        id: 'painPoints',
        label: 'Bekannte User Pain Points',
        type: 'textarea',
        required: false,
        placeholder: 'Was frustriert User aktuell? Was fehlt?',
        defaultValue: 'Noch keine Pain Points bekannt',
      },
      {
        id: 'inspiration',
        label: 'Inspiration / Referenz-Apps',
        type: 'text',
        required: false,
        placeholder: 'z.B. "Notion, Figma, Linear"',
        defaultValue: 'Keine speziellen Vorbilder',
      },
      {
        id: 'quickWinFocus',
        label: 'Quick Win Fokus',
        type: 'text',
        required: false,
        placeholder: 'z.B. "Keyboard Shortcuts" oder "Better Feedback"',
        defaultValue: 'Allgemeine Verbesserungen',
      },
    ],

    longDescription:
      'Dieser Snippet ist dein Innovations-Workshop. Claude brainstormt kreative Feature-Ideen für deine App - von Quick Wins bis Game Changers. Er analysiert was fehlt, schaut was führende Apps machen, und schlägt innovative Features vor. Jede Idee kommt mit User-Benefit, technischer Skizze, Aufwand und Wow-Faktor.',

    whenToUse:
      'Verwende diesen Snippet wenn du nicht weißt was als nächstes kommt. Perfekt nach MVP-Launch wenn du die Roadmap planst. Auch gut wenn du in einer Sackgasse steckst und frische Ideen brauchst. Nicht nötig wenn du bereits konkrete Feature-Pläne hast.',

    useCase:
      'Deine To-Do-App funktioniert gut, aber du willst sie abheben lassen. Claude schlägt vor: Quick Wins (Keyboard Shortcuts, Drag & Drop), Game Changers (AI-Priorisierung, Collaborative Lists, Time-Tracking), Delightful Details (Completion-Animations, Motivational Quotes). Jede Idee priorisiert und mit Notion/Todoist verglichen.',

    fieldGuide: [
      {
        fieldId: 'currentContext',
        explanation:
          'Was macht deine App aktuell? Was ist die Hauptfunktion?',
        example:
          'Eine To-Do-List-App wo User Aufgaben erstellen, kategorisieren und abhaken können. Basic Features sind implementiert.',
        tips:
          'Beschreibe den Status Quo. Was funktioniert bereits? Was ist das Alleinstellungsmerkmal?',
      },
      {
        fieldId: 'painPoints',
        explanation:
          'Was frustriert User? Was fehlt? Feedback aus User-Tests?',
        example:
          'User wünschen sich: Collaboration, Priorisierung ist umständlich, keine Reminder-Funktion',
        tips:
          'Ehrlich sein! Nutze echtes User-Feedback wenn verfügbar. "Keine Pain Points" gibt es nicht 😉',
      },
      {
        fieldId: 'inspiration',
        explanation:
          'Welche Apps bewunderst du? Wer macht es gut in deiner Nische?',
        example: 'Notion (Flexibilität), Todoist (Simplicity), Linear (UX)',
        tips:
          'Erwähne 2-3 Apps die du cool findest. Claude wird analysieren was sie gut machen',
      },
      {
        fieldId: 'quickWinFocus',
        explanation:
          'Gibt es einen Bereich wo du schnelle Verbesserungen willst?',
        example: 'Keyboard Shortcuts für Power-User',
        tips:
          'Optional. Richtung vorgeben: "Mobile Experience", "Onboarding", "Performance", "Accessibility"',
      },
    ],
  },
];
