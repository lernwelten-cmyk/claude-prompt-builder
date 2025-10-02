/**
 * Start & Analysis Snippets
 *
 * Snippets for session initialization and project analysis.
 */

import type { Snippet } from '@/types/snippet.types';

export const START_SNIPPETS: Snippet[] = [
  // 1. Session Start
  {
    id: 'cstart',
    name: 'Session Start',
    description: 'Initialisierung einer neuen Claude Code Session',
    category: 'start',
    icon: '🚀',
    template: `Hi Claude! 👋

Projekt-Kontext:
📋 Bitte lies DEVELOPMENT.md für Architektur-Richtlinien
🏗️ Dieses Projekt folgt strikt modularer Architektur
⚠️ Ändere nur explizit genannte Dateien

Bestätige kurz, dass du die Regeln verstanden hast, dann starten wir!`,
    placeholders: [],

    longDescription:
      'Dieser Snippet sollte IMMER am Anfang jeder neuen Claude Code Session verwendet werden. Er stellt sicher, dass Claude die Projekt-Architektur und wichtige Regeln aus der DEVELOPMENT.md kennt. Dadurch arbeitet Claude präziser und hält sich an deine Projekt-Standards.',

    whenToUse:
      'Verwende diesen Snippet bei jeder neuen Chat-Session mit Claude Code, bevor du mit der eigentlichen Arbeit beginnst. Nicht nötig wenn du in derselben Session weitermachst.',

    useCase:
      'Du öffnest morgens deinen Editor und startest eine neue Claude Code Session. Bevor du anfängst Features zu bauen oder Bugs zu fixen, sendest du diesen Prompt. Claude liest dann deine DEVELOPMENT.md und kennt deine Architektur-Regeln (z.B. modularer Aufbau, max. 200 Zeilen pro Datei).',

    fieldGuide: [],
  },

  // 2. Project Analysis
  {
    id: 'cprojectanalysis',
    name: 'Projekt-Analyse & Kontext',
    description: 'Claude analysiert das Projekt und lernt Struktur, Konventionen und Kontext kennen',
    category: 'start',
    icon: '🔍',
    template: `[Kontext: DEVELOPMENT.md - Modulare Architektur]

🔍 Projekt-Analyse & Kontext-Aufbau

Bitte analysiere dieses Projekt gründlich, damit ich optimal weiterarbeiten kann.

Analyse-Fokus: {{analysisFocus}}
Spezifische Bereiche: {{specificAreas}}

**Phase 1 - Projekt-Struktur verstehen:**

1. **Ordner-Struktur analysieren:**
   - Welche Haupt-Ordner gibt es? (src/, components/, features/, etc.)
   - Wie ist der Code organisiert? (nach Features, nach Typen, etc.)
   - Gibt es Patterns die durchgängig verwendet werden?
   - Wo liegen wichtige Dateien? (Config, Types, Utils, Constants)

2. **Technologie-Stack identifizieren:**
   - Framework: React, Vue, Angular, etc.?
   - Sprache: TypeScript oder JavaScript?
   - Build-Tool: Vite, Webpack, etc.?
   - Styling: Tailwind, CSS Modules, Styled Components?
   - State Management: Redux, Zustand, Context, etc.?
   - Testing: Jest, Vitest, React Testing Library?
   - Weitere wichtige Libraries?

3. **Architektur-Muster erkennen:**
   - Wie kommunizieren Komponenten? (Props, Context, Events)
   - Gibt es eine klare Trennung von UI und Business Logic?
   - Werden Custom Hooks verwendet?
   - Service Layer vorhanden?
   - Wie wird Routing gehandhabt?

**Phase 2 - Code-Konventionen verstehen:**

4. **Naming Conventions:**
   - Wie werden Komponenten benannt? (PascalCase?)
   - Wie werden Funktionen benannt? (camelCase?)
   - Wie werden Dateien benannt? (Component.tsx, component.tsx?)
   - Gibt es Präfixe/Suffixe? (use-, with-, I-, Type, etc.)

5. **Code-Style analysieren:**
   - Welches Formatting wird verwendet? (Prettier Config?)
   - Single vs. Double Quotes?
   - Semicolons ja/nein?
   - Import-Reihenfolge?
   - Wie werden Types definiert? (Interface vs. Type?)

6. **Komponenten-Patterns:**
   - Functional vs. Class Components?
   - Props-Destructuring im Parameter oder im Body?
   - Wo werden Types definiert? (Inline, separate .types.ts?)
   - Export-Pattern? (Named vs. Default Export)

**Phase 3 - Business Logic verstehen:**

7. **Haupt-Features identifizieren:**
   - Was macht diese App/dieses Projekt?
   - Welche Haupt-Features gibt es?
   - Wie hängen die Features zusammen?
   - Gibt es einen typischen User-Flow?

8. **Daten-Management:**
   - Wo kommen die Daten her? (API, localStorage, etc.)
   - Wie werden Daten strukturiert?
   - Gibt es zentrale Type-Definitionen?
   - Wie wird State verwaltet?

9. **Abhängigkeiten verstehen:**
   - Welche Komponenten sind stark vernetzt?
   - Gibt es zentrale "Core"-Komponenten?
   - Welche Utils/Helpers werden häufig verwendet?
   - Gibt es Shared Constants oder Config?

**Phase 4 - Projekt-Kontext & Besonderheiten:**

10. **Dokumentation prüfen:**
    - Gibt es eine README.md? Was steht drin?
    - Gibt es DEVELOPMENT.md oder ähnliche Docs?
    - Sind Komponenten dokumentiert? (JSDoc)
    - Gibt es TODOs oder FIXMEs im Code?

11. **Besonderheiten & Quirks:**
    - Gibt es ungewöhnliche Patterns oder Lösungen?
    - Warum wurden bestimmte Entscheidungen getroffen?
    - Gibt es Legacy-Code oder Tech-Debt?
    - Welche Teile sind "Work in Progress"?

12. **Pain Points identifizieren:**
    - Was könnte verbessert werden?
    - Gibt es Code-Smells?
    - Wo ist die Komplexität hoch?
    - Welche Bereiche brauchen Refactoring?

**Phase 5 - Zusammenfassung & Empfehlungen:**

13. **Projekt-Snapshot:**
    Erstelle eine prägnante Zusammenfassung:
    - Tech-Stack: [Liste]
    - Architektur: [Beschreibung]
    - Haupt-Features: [Liste]
    - Code-Qualität: [Einschätzung 1-10]
    - Besonderheiten: [Liste]

14. **Mental Model:**
    Erkläre mir wie du das Projekt verstehst:
    - Welche Metapher/Analogie passt zum Projekt?
    - Wie würdest du jemandem das Projekt in 3 Sätzen erklären?
    - Was ist das "Herz" des Projekts?

15. **Nächste Schritte:**
    Basierend auf deiner Analyse:
    - Was sollte als nächstes gebaut werden?
    - Welche Quick Wins gibt es?
    - Wo sollte man vorsichtig sein?
    - Was brauchst du noch zu wissen?

**Spezielle Analyse-Anforderungen:**
{{additionalRequirements}}

**Output-Format:**
- Strukturiert mit klaren Überschriften
- Konkrete Code-Beispiele wo relevant
- Priorisierte Empfehlungen
- Visuelle Diagramme (ASCII) für Architektur falls hilfreich

WICHTIG:
- Sei gründlich aber fokussiert auf {{analysisFocus}}
- Erkenne Patterns, nicht nur Facts
- Stelle Fragen wenn etwas unklar ist
- Deine Analyse ist die Basis für alle weiteren Tasks!`,
    placeholders: [
      {
        id: 'analysisFocus',
        label: 'Analyse-Fokus',
        type: 'select',
        required: false,
        options: [
          'Vollständige Analyse (alles)',
          'Architektur & Struktur',
          'Code-Qualität & Best Practices',
          'Business Logic & Features',
          'Performance & Optimierungen',
          'Testing & Dokumentation'
        ],
        defaultValue: 'Vollständige Analyse (alles)'
      },
      {
        id: 'specificAreas',
        label: 'Spezifische Bereiche (optional)',
        type: 'textarea',
        required: false,
        placeholder: 'z.B. "Fokus auf Authentication-Flow" oder "Besonders State-Management analysieren"',
        defaultValue: 'Alle Bereiche gleich wichtig'
      },
      {
        id: 'additionalRequirements',
        label: 'Zusätzliche Anforderungen',
        type: 'textarea',
        required: false,
        placeholder: 'z.B. "Prüfe ob Code DEVELOPMENT.md entspricht" oder "Finde alle TODOs"',
        defaultValue: ''
      }
    ],
    longDescription: 'Dieser Snippet ist der perfekte zweite Schritt nach "Session Start". Claude analysiert das gesamte Projekt systematisch und baut ein tiefes Verständnis für Struktur, Konventionen, Business Logic und Besonderheiten auf. Dadurch kann er bei allen weiteren Tasks optimal mitarbeiten und die richtigen Entscheidungen treffen.',
    whenToUse: 'Verwende diesen Snippet am Anfang einer neuen Session, direkt nach "Session Start", oder wenn Claude mit einem neuen Projekt arbeiten soll. Auch sinnvoll wenn du in ein bestehendes Projekt einsteigst und Claude dir einen Überblick geben soll. Nicht nötig wenn du nur kleine Änderungen an bekanntem Code machst.',
    useCase: 'Du hast gerade ein neues React-Projekt von einem Kollegen übernommen und möchtest, dass Claude dir hilft es weiterzuentwickeln. Mit diesem Snippet analysiert Claude die komplette Struktur, erkennt verwendete Patterns, identifiziert die Haupt-Features und gibt dir eine Zusammenfassung. Danach kann Claude präzise an dem Projekt weiterarbeiten ohne gegen bestehende Konventionen zu verstoßen.',
    fieldGuide: [
      {
        fieldId: 'analysisFocus',
        explanation: 'Wähle worauf Claude sich hauptsächlich konzentrieren soll. "Vollständige Analyse" macht eine umfassende Prüfung aller Bereiche.',
        example: 'Vollständige Analyse (alles)',
        tips: 'Bei großen Projekten kann ein spezifischer Fokus (z.B. nur Architektur) schneller sein. Bei neuen Projekten: Immer "Vollständige Analyse" wählen.'
      },
      {
        fieldId: 'specificAreas',
        explanation: 'Optional: Nenne spezifische Bereiche, Komponenten oder Features die Claude besonders genau analysieren soll.',
        example: 'Authentication-System, State-Management mit Zustand, API-Integration',
        tips: 'Lass leer für gleichmäßige Analyse. Nutze es wenn du weißt, dass bestimmte Bereiche komplex oder wichtig sind.'
      },
      {
        fieldId: 'additionalRequirements',
        explanation: 'Optional: Zusätzliche Dinge die Claude prüfen oder beachten soll während der Analyse.',
        example: 'Finde alle TODOs und FIXMEs, Prüfe ob TypeScript strict mode verwendet wird',
        tips: 'Gut für spezielle Checks: Performance-Issues, Security-Probleme, Dokumentations-Lücken, etc.'
      }
    ]
  },

  // 3. App-Ideation & Tech-Stack Beratung
  {
    id: 'cideation',
    name: 'App-Ideation & Tech-Stack',
    description: 'Claude hilft dir deine App-Idee zu durchdenken, verfeinern und den optimalen Tech-Stack zu wählen',
    category: 'start',
    icon: '💡',
    template: `[Kontext: DEVELOPMENT.md - falls vorhanden]

💡 App-Ideation & Tech-Stack Beratung

Hilf mir dabei, meine App-Idee zu durchdenken und die richtigen technischen Entscheidungen zu treffen.

**Meine App-Idee:**
{{appIdea}}

**Zielgruppe:**
{{targetAudience}}

**Haupt-Ziele:**
{{mainGoals}}

**Besondere Anforderungen:**
{{specialRequirements}}

---

**Phase 1 - Ideen-Verfeinerung:**

1. **Konzept-Analyse:**
   - Ist die Idee klar und fokussiert?
   - Welches Problem löst die App?
   - Was ist das Alleinstellungsmerkmal (USP)?
   - Gibt es ähnliche Apps? Was macht unsere besser?

2. **Ideen-Erweiterung:**
   - Welche Features sind Must-Have für MVP (Minimum Viable Product)?
   - Welche Features sind Nice-to-Have für später?
   - Welche unerwarteten Features würden die App besonders machen?
   - Gibt es versteckte Komplexität die wir bedenken sollten?

3. **User-Journey durchdenken:**
   - Wie sieht der typische User-Flow aus?
   - Wo könnte der User frustriert sein?
   - Welche Interaktionen sind am wichtigsten?
   - Mobile-First oder Desktop-First?

**Phase 2 - Tech-Stack Empfehlung:**

4. **Framework-Auswahl:**
   Basierend auf der App-Idee, empfehle:

   Frontend:
   - React vs. Vue vs. Angular vs. Svelte
   - Next.js vs. Remix vs. Vite+React
   - Warum diese Wahl für DIESE spezifische App?

   Begründe mit:
   - Lernkurve
   - Performance-Anforderungen
   - Community & Ecosystem
   - Developer Experience
   - Zukunftssicherheit

5. **Styling-Lösung:**
   Empfehle und begründe:
   - Tailwind CSS vs. CSS Modules vs. Styled Components vs. Vanilla CSS
   - UI-Library? (shadcn/ui, MUI, Chakra, Ant Design)
   - Warum passt das zur App?

6. **State-Management:**
   - Wird überhaupt State-Management gebraucht?
   - Redux vs. Zustand vs. Jotai vs. Context API
   - Wann braucht man was?
   - Server-State: React Query, SWR?

7. **Backend & Datenbank (falls nötig):**
   - Brauchen wir ein Backend?
   - BaaS (Firebase, Supabase) vs. Custom Backend?
   - API: REST vs. GraphQL vs. tRPC?
   - Datenbank: PostgreSQL, MongoDB, SQLite?
   - Authentication: Clerk, Auth0, Custom?

8. **Deployment & Hosting:**
   - Vercel vs. Netlify vs. Railway vs. AWS?
   - Kosten-Einschätzung
   - Skalierbarkeit
   - CI/CD Pipeline nötig?

**Phase 3 - Projekt-Setup Empfehlung:**

9. **Ordner-Struktur:**
   Schlage eine ideale Projekt-Struktur vor:
   \`\`\`
   app/
   ├── src/
   │   ├── components/
   │   ├── features/
   │   ├── pages/
   │   ├── services/
   │   ├── hooks/
   │   ├── utils/
   │   ├── types/
   │   └── constants/
   ├── public/
   ├── package.json
   └── ...
   \`\`\`

10. **Wichtige Packages:**
    Liste die essentiellen npm packages:
    - Core dependencies
    - Dev dependencies
    - Warum jedes Package?
    - Alternativen?

11. **VS Code Extensions:**
    Empfehle Extensions für optimale DX:
    - ESLint, Prettier
    - Framework-spezifische Extensions
    - Productivity Tools
    - Debugging Tools

**Phase 4 - Roadmap & Milestones:**

12. **MVP-Definition:**
    Was ist das absolute Minimum für Launch?
    - Core-Features (Priorität 1)
    - Must-Have Features (Priorität 2)
    - Nice-to-Have (Priorität 3)

    Geschätzte Entwicklungszeit pro Priorität?

13. **Phasen-Plan:**
    \`\`\`
    Phase 1 (Woche 1-2): Setup & Core Features
    Phase 2 (Woche 3-4): UI/UX Polish
    Phase 3 (Woche 5): Testing & Bug Fixes
    Phase 4 (Woche 6): Deployment & Launch
    \`\`\`

14. **Potenzielle Herausforderungen:**
    - Was könnte schwierig werden?
    - Wo lauern technische Risiken?
    - Welche Abhängigkeiten sind kritisch?
    - Plan B falls etwas nicht klappt?

**Phase 5 - Finale Empfehlung:**

15. **Zusammenfassung:**
    Fasse alles kompakt zusammen:

    **Empfohlener Tech-Stack:**
    - Frontend: [...]
    - Styling: [...]
    - State: [...]
    - Backend: [...]
    - Deployment: [...]

    **Begründung:** [Warum dieser Stack perfekt für diese App ist]

    **Geschätzte Kosten:**
    - Development: [Stunden/Tage]
    - Hosting: [€/Monat]
    - Tools: [€/Monat]

    **Nächster Schritt:**
    [Was sollte als allererstes passieren?]

16. **Starter-Command:**
    Gib mir den exakten Command zum Projekt-Start:
    \`\`\`bash
    npx create-[framework]@latest my-app --template [...]
    cd my-app
    npm install [zusätzliche packages]
    \`\`\`

**Kritische Fragen an mich:**
{{criticalQuestions}}

WICHTIG:
- Sei ehrlich: Sage wenn die Idee zu komplex oder unklar ist
- Denke an Skalierbarkeit aber starte einfach
- Empfehle moderne, aber stabile Technologien
- Berücksichtige mein Skill-Level (falls angegeben)
- Priorisiere Developer Experience
- Kosten im Auge behalten`,
    placeholders: [
      {
        id: 'appIdea',
        label: 'Deine App-Idee',
        type: 'textarea',
        required: true,
        placeholder: 'z.B. "Eine Todo-App mit KI-Priorisierung" oder "Social Media für Fotografen"',
        defaultValue: ''
      },
      {
        id: 'targetAudience',
        label: 'Zielgruppe',
        type: 'text',
        required: false,
        placeholder: 'z.B. "Studenten", "Small Business Owners", "Entwickler"',
        defaultValue: 'Allgemeine Nutzer'
      },
      {
        id: 'mainGoals',
        label: 'Haupt-Ziele der App',
        type: 'textarea',
        required: false,
        placeholder: 'Was soll die App erreichen? Welche Probleme lösen?',
        defaultValue: 'Ein nützliches Tool für die Zielgruppe sein'
      },
      {
        id: 'specialRequirements',
        label: 'Besondere Anforderungen',
        type: 'textarea',
        required: false,
        placeholder: 'z.B. "Muss offline funktionieren", "Real-time Updates", "Mobile-First"',
        defaultValue: 'Keine besonderen Anforderungen'
      },
      {
        id: 'criticalQuestions',
        label: 'Offene Fragen / Unklarheiten',
        type: 'textarea',
        required: false,
        placeholder: 'Was ist dir noch unklar? Wo brauchst du besonders Hilfe?',
        defaultValue: 'Keine offenen Fragen'
      }
    ],
    longDescription: 'Dieser Snippet ist der allererste Schritt bei einem neuen Projekt. Claude fungiert als erfahrener Tech-Lead und Product-Berater: Er hilft dir deine Idee zu schärfen, denkt an Dinge die du vergessen hast, empfiehlt den perfekten Tech-Stack basierend auf deinen Anforderungen, und gibt dir einen konkreten Startup-Plan mit Commands und Struktur.',
    whenToUse: 'Verwende diesen Snippet ganz am Anfang, wenn du eine neue App-Idee hast aber noch unsicher bist bzgl. Tech-Stack, Struktur oder ob die Idee überhaupt gut durchdacht ist. Perfekt für Projekt-Kickoffs. Nicht nötig wenn du bereits weißt welche Technologien du verwenden willst.',
    useCase: 'Du hast die Idee für eine "Rezept-App mit Meal-Planning und automatischer Einkaufsliste". Du bist unsicher ob React oder Vue besser ist, ob du ein Backend brauchst, und wie komplex das wird. Mit diesem Snippet bekommst du eine komplette Analyse: Claude schlägt vor dass Next.js perfekt wäre (wegen SEO für Rezepte), Supabase als Backend (schnell setup), empfiehlt shadcn/ui fürs Design, gibt dir eine Roadmap und den exakten Command zum Starten.',
    fieldGuide: [
      {
        fieldId: 'appIdea',
        explanation: 'Beschreibe deine App-Idee so konkret wie möglich. Je mehr Details, desto bessere Empfehlungen bekommst du.',
        example: 'Eine Fitness-App wo User ihre Workouts tracken können, mit Video-Übungen, Progress-Charts und Community-Features zum Teilen von Erfolgen',
        tips: 'Beschreibe nicht nur WAS sondern auch WARUM. Was ist das Problem das gelöst wird? Was macht die App besonders?'
      },
      {
        fieldId: 'targetAudience',
        explanation: 'Wer wird diese App hauptsächlich nutzen? Das beeinflusst Design-Entscheidungen und Tech-Stack.',
        example: 'Fitness-Anfänger zwischen 20-40 Jahren, hauptsächlich Mobile-User',
        tips: 'Sei spezifisch! "Jeder" ist keine gute Zielgruppe. Denk an: Alter, Tech-Affinität, Haupt-Device (Mobile/Desktop)'
      },
      {
        fieldId: 'mainGoals',
        explanation: 'Was sind die primären Ziele? Was soll die App erreichen? Wie misst du Erfolg?',
        example: 'User sollen motiviert bleiben (Gamification), einfach Fortschritt tracken, und eine Community haben',
        tips: 'Priorisiere! Was ist am wichtigsten? Das beeinflusst welche Features zuerst gebaut werden.'
      },
      {
        fieldId: 'specialRequirements',
        explanation: 'Gibt es technische oder funktionale Anforderungen die unbedingt erfüllt sein müssen?',
        example: 'Muss offline funktionieren, Push-Notifications für Workout-Reminders, Video-Playback',
        tips: 'Denk an: Performance, Offline-Support, Real-time Features, Accessibility, Datenschutz, Budget-Limits'
      },
      {
        fieldId: 'criticalQuestions',
        explanation: 'Was ist dir noch unklar? Wo bist du unsicher? Welche Entscheidungen fallen dir schwer?',
        example: 'Soll ich User-Accounts haben? Brauche ich wirklich ein Backend oder reicht localStorage?',
        tips: 'Sei ehrlich mit Unsicherheiten! Claude kann dir helfen die richtigen Entscheidungen zu treffen.'
      }
    ]
  },

  // 4. Initial App Setup & MVP Build
  {
    id: 'cappsetup',
    name: 'Initial App Setup & MVP',
    description: 'Erstelle die erste funktionierende Version der App mit Setup und Core-Features',
    category: 'start',
    icon: '🏗️',
    template: `[Kontext: DEVELOPMENT.md - Modulare Architektur]

🏗️ Initial App Setup & MVP Build

Erstelle die erste funktionierende Version dieser App.

**App-Konzept:**
{{appConcept}}

**Tech-Stack (bereits entschieden):**
{{techStack}}

**MVP Core-Features:**
{{mvpFeatures}}

**UI/Design-Präferenzen:**
{{designPreferences}}

---

**Phase 1 - Projekt-Setup:**

1. **Initialisierung:**
   Erstelle das Projekt mit folgendem Setup:

   \`\`\`bash
   # Gib mir die exakten Commands
   npx create-[...]
   cd [project-name]
   npm install [packages]
   \`\`\`

2. **Projekt-Struktur:**
   Erstelle folgende Ordner-Struktur:
   \`\`\`
   src/
   ├── components/     # Wiederverwendbare UI-Komponenten
   ├── features/       # Feature-spezifische Module
   ├── pages/          # Seiten/Routes
   ├── services/       # API, localStorage, etc.
   ├── hooks/          # Custom Hooks
   ├── utils/          # Helper-Funktionen
   ├── types/          # TypeScript Types
   ├── constants/      # Konstanten
   └── App.tsx
   \`\`\`

3. **Essential Config:**
   Erstelle/Konfiguriere:
   - \`tailwind.config.js\` (mit Custom Theme)
   - \`tsconfig.json\` (strict mode)
   - \`.eslintrc\` (mit wichtigen Rules)
   - \`vite.config.ts\` (oder entsprechende Build-Config)
   - \`.env.example\` (für Environment Variables)

4. **DEVELOPMENT.md:**
   Erstelle eine DEVELOPMENT.md mit:
   - Projekt-Beschreibung
   - Architektur-Prinzipien (modular, Lego-Bausteine)
   - Code-Konventionen
   - Naming Conventions
   - Component-Struktur Regeln

**Phase 2 - Core Features implementieren:**

5. **Feature-Priorisierung:**
   Die MVP-Features in Reihenfolge implementieren:
   {{mvpFeatures}}

   Beginne mit dem wichtigsten Feature zuerst!

6. **Für jedes Feature:**
   - Erstelle Feature-Ordner in \`src/features/[feature-name]/\`
   - Komponenten isoliert halten (Lego-Prinzip)
   - Types in separate \`.types.ts\` Dateien
   - Services für Business Logic
   - Alles modular und wiederverwendbar

7. **Basis-Komponenten:**
   Erstelle wiederverwendbare UI-Komponenten:
   - Button (mit variants)
   - Input / Textarea
   - Card
   - Modal / Dialog
   - Loading Spinner
   - [weitere je nach Bedarf]

   Alle in \`src/components/\` mit Props, Types, und Styling

**Phase 3 - Layout & Navigation:**

8. **App-Layout:**
   Erstelle Haupt-Layout:
   - Header/Navbar (mit Logo, Navigation)
   - Main Content Area
   - Footer (optional)
   - Sidebar (falls nötig)

   Responsive Design (Mobile-First!)

9. **Routing:**
   Setup Routing mit:
   - Home/Landing Page
   - Feature-spezifische Routes
   - 404 Page
   - Navigation zwischen Routes

**Phase 4 - State & Data Management:**

10. **State-Management:**
    Setup State-Lösung basierend auf Tech-Stack

11. **Data Persistence:**
    Setup Datenspeicherung (localStorage, Backend, etc.)

**Phase 5 - Styling & Polish:**

12. **Design-System:**
    Implementiere Grundlagen:
    - Farb-Palette (Primary, Secondary, Accent, Neutrals)
    - Typography-Scale
    - Spacing-System
    - Dark Mode (falls gewünscht)
    - Tailwind Custom Classes

13. **UI/UX Details:**
    - Loading States für alle Async-Operationen
    - Error States & Error Messages
    - Empty States (wenn keine Daten)
    - Success Feedback (Toasts/Notifications)
    - Hover/Focus States
    - Transitions & Animations (subtil!)

**Phase 6 - Testing & Quality:**

14. **Funktionalitäts-Check:**
    Teste alle Core-Features:
    - [ ] Feature 1 funktioniert
    - [ ] Feature 2 funktioniert
    - [ ] Navigation funktioniert
    - [ ] State wird korrekt gespeichert
    - [ ] Responsive auf Mobile
    - [ ] Keine Console-Errors

15. **Code-Qualität:**
    - Alle Komponenten haben Types
    - Keine \`any\` Types
    - ESLint Warnings behoben
    - Code ist konsistent formatiert
    - Keine ungenutzten Imports

**Phase 7 - Documentation & Deployment:**

16. **README.md:**
    Erstelle eine gute README mit:
    - App-Beschreibung & Screenshots
    - Features-Liste
    - Tech-Stack
    - Installation & Setup
    - Development Commands
    - Deployment Info

17. **Deployment-Vorbereitung:**
    - Build-Command testen: \`npm run build\`
    - Environment Variables dokumentieren
    - \`.gitignore\` korrekt konfiguriert
    - Deployment-Plattform: {{deploymentTarget}}

**Finale Deliverables:**

Wenn fertig, sollte ich haben:
✅ Funktionierende App mit allen MVP-Features
✅ Saubere, modulare Code-Struktur
✅ Responsive Design (Mobile + Desktop)
✅ State-Management funktioniert
✅ Gute Developer Experience (DX)
✅ README & DEVELOPMENT.md
✅ Ready für Deployment

**Wichtige Prinzipien beachten:**
- 🧱 Modularer Aufbau (Lego-Bausteine)
- 🎯 Single Responsibility pro Komponente
- 📁 Klare Ordner-Struktur
- 🎨 Konsistentes Design
- ⚡ Performance im Blick
- 🔒 Type-Safety (TypeScript strict)

**Arbeitsweise:**
- Erstelle Features Schritt für Schritt
- Teste nach jedem Feature
- Frage nach Feedback bevor du weiter machst
- Halte dich an DEVELOPMENT.md Richtlinien

Los geht's! 🚀`,
    placeholders: [
      {
        id: 'appConcept',
        label: 'App-Konzept (kurz)',
        type: 'textarea',
        required: true,
        placeholder: 'z.B. "Todo-App mit Kategorien, Prioritäten und Dark Mode"',
        defaultValue: ''
      },
      {
        id: 'techStack',
        label: 'Gewählter Tech-Stack',
        type: 'textarea',
        required: true,
        placeholder: 'z.B. "React + TypeScript + Vite, Tailwind CSS, Zustand, localStorage"',
        defaultValue: 'React + TypeScript + Vite, Tailwind CSS'
      },
      {
        id: 'mvpFeatures',
        label: 'MVP Core-Features (priorisiert)',
        type: 'multiline',
        required: true,
        placeholder: 'Ein Feature pro Zeile',
        defaultValue: ''
      },
      {
        id: 'designPreferences',
        label: 'Design-Präferenzen',
        type: 'textarea',
        required: false,
        placeholder: 'z.B. "Modern & Minimalistisch, viel Whitespace, blaue Akzentfarbe"',
        defaultValue: 'Modern und clean'
      },
      {
        id: 'deploymentTarget',
        label: 'Deployment-Ziel',
        type: 'select',
        required: false,
        options: ['Netlify', 'Vercel', 'GitHub Pages', 'Railway', 'Später entscheiden'],
        defaultValue: 'Netlify'
      }
    ],
    longDescription: 'Dieser Snippet ist der Startschuss für die Entwicklung! Nachdem du mit "App-Ideation" deinen Tech-Stack gewählt hast, erstellt Claude mit diesem Snippet die komplette erste Version deiner App. Von Setup über Core-Features bis zu Styling und Deployment-Vorbereitung - alles wird Schritt für Schritt gebaut, modular strukturiert und produktionsreif gemacht.',
    whenToUse: 'Verwende diesen Snippet nachdem du den Tech-Stack entschieden hast (z.B. mit "App-Ideation" Snippet). Er ist der perfekte Start für die tatsächliche Entwicklung. Nicht verwenden wenn du nur einzelne Features zu einer bestehenden App hinzufügen willst - nutze dafür die Feature-spezifischen Snippets.',
    useCase: 'Du hast mit "App-Ideation" entschieden: React + Vite + Tailwind + localStorage für deine Todo-App. Jetzt willst du dass Claude die App baut. Mit diesem Snippet bekommst du: Komplettes Projekt-Setup, Ordner-Struktur, alle Core-Features (Todo erstellen/bearbeiten/löschen, Kategorien, Filter), responsive Design, Dark Mode, und eine fertige App die du sofort auf Netlify deployen kannst.',
    fieldGuide: [
      {
        fieldId: 'appConcept',
        explanation: 'Kurze, prägnante Beschreibung was die App macht. Das hilft Claude den Kontext zu verstehen.',
        example: 'Expense-Tracker mit Kategorien, Monats-Übersicht, Charts und CSV-Export',
        tips: 'Halte es kurz aber spezifisch. Fokus auf die Kern-Funktionalität, nicht auf Details.'
      },
      {
        fieldId: 'techStack',
        explanation: 'Liste alle Technologien die verwendet werden sollen. Idealerweise aus dem "App-Ideation" Snippet.',
        example: 'React 18, TypeScript, Vite, Tailwind CSS, Zustand für State, React Router, localStorage',
        tips: 'Sei komplett! Vergiss nichts (Framework, Styling, State, Routing, Backend/Datenbank). Claude richtet alles entsprechend ein.'
      },
      {
        fieldId: 'mvpFeatures',
        explanation: 'Liste die Core-Features die in der ersten Version enthalten sein müssen. Ein Feature pro Zeile, priorisiert.',
        example: 'Todo erstellen mit Titel und Beschreibung\nTodo als erledigt markieren\nTodos nach Kategorie filtern\nDark Mode Toggle',
        tips: 'Priorisiere! Das wichtigste Feature zuerst. Claude baut sie in dieser Reihenfolge. Halte MVP klein - lieber später erweitern.'
      },
      {
        fieldId: 'designPreferences',
        explanation: 'Beschreibe wie die App aussehen soll. Stil, Farben, Gefühl.',
        example: 'Minimalistisch, viel Whitespace, dunkelblaue Primary-Color, sanfte Animationen, Mobile-First',
        tips: 'Gib Richtung aber nicht jedes Detail. Erwähne: Stil (modern/playful/professional), Haupt-Farbe, ob viele/wenige Animationen.'
      },
      {
        fieldId: 'deploymentTarget',
        explanation: 'Wo soll die App später deployed werden? Beeinflusst Build-Config.',
        example: 'Netlify',
        tips: 'Wenn unsicher: "Später entscheiden". Claude bereitet das Projekt trotzdem deployment-ready vor.'
      }
    ]
  }
];
