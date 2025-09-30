/**
 * Snippet Definitions for Claude Prompt Builder
 *
 * This file contains all predefined prompt snippets and templates
 * that users can select and combine to build structured prompts.
 */

import type { Snippet } from '@/types/snippet.types';

/**
 * Predefined snippet templates for Claude Code prompts
 * Based on .vscode/claude-prompts.claude-snippets.json
 */
export const SNIPPETS: Snippet[] = [
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

  // 2. Standard Prompt
  {
    id: 'cprompt',
    name: 'Standard Prompt',
    description: 'Standard Claude Prompt mit DEVELOPMENT.md Kontext',
    category: 'other',
    icon: '📝',
    template: `[Kontext: DEVELOPMENT.md - Modulare Architektur]

Aufgabe: {{task}}
Scope: {{scope}}

{{details}}`,
    placeholders: [
      {
        id: 'task',
        label: 'Aufgabe',
        type: 'text',
        required: true,
        placeholder: 'Was soll gemacht werden?',
      },
      {
        id: 'scope',
        label: 'Scope',
        type: 'text',
        required: true,
        placeholder: 'Welche Dateien?',
      },
      {
        id: 'details',
        label: 'Details',
        type: 'multiline',
        required: false,
        placeholder: 'Weitere Details...',
      },
    ],

    longDescription:
      'Der vielseitigste Snippet für alltägliche Entwicklungsaufgaben. Er bietet eine klare Struktur mit Aufgabe, Scope und Details. Perfekt für kleinere Änderungen, wo du nicht alle Details eines spezialisierten Snippets brauchst. Hält den Kontext zu DEVELOPMENT.md.',

    whenToUse:
      'Verwende diesen Snippet für alltägliche, unkomplizierte Aufgaben wie "Button-Farbe ändern", "Loading-State hinzufügen" oder "Typo fixen". Nicht geeignet für große neue Features oder komplexe Refactorings.',

    useCase:
      'Du möchtest dass der Submit-Button in deinem LoginForm während des API-Calls disabled wird. Du gibst als Task "Button während Submit disablen" an, als Scope "src/components/LoginForm.tsx" und als Details kannst du optional noch Styling-Wünsche angeben.',

    fieldGuide: [
      {
        fieldId: 'task',
        explanation: 'Eine prägnante Beschreibung was gemacht werden soll',
        example: 'Füge einen Loading-State zum Button hinzu',
        tips:
          'Sei spezifisch aber knapp. Verwende Verben im Imperativ (Füge hinzu, Ändere, Entferne)',
      },
      {
        fieldId: 'scope',
        explanation:
          'Welche Dateien sollen geändert werden? Nutze relative Pfade',
        example: 'src/components/Button/Button.tsx',
        tips:
          'Je präziser der Scope, desto besser. Mehrere Dateien mit Komma trennen',
      },
      {
        fieldId: 'details',
        explanation: 'Zusätzliche Anforderungen oder Einschränkungen (optional)',
        example:
          '- Nutze einen Spinner aus Lucide Icons\n- Button Text: "Laden..."',
        tips:
          'Nutze Stichpunkte für Übersichtlichkeit. Erwähne wichtige Edge Cases',
      },
    ],
  },

  // 3. New Feature/Component
  {
    id: 'cfeature',
    name: 'Neue Feature/Komponente',
    description: 'Template für neue Features/Komponenten',
    category: 'component',
    icon: '✨',
    template: `📋 Kontext: Siehe DEVELOPMENT.md (modulare Architektur)

Aufgabe: Erstelle eine neue {{featureName}} Komponente/Feature

Anforderungen:
- {{requirement1}}
- {{requirement2}}
- {{requirement3}}

Ordner-Struktur:
src/{{folder}}/
  ├── {{featureName}}.tsx
  ├── {{featureName}}.types.ts
  └── {{featureName}}.test.ts

WICHTIG: Keine anderen Dateien ändern ohne zu fragen!

{{additionalDetails}}`,
    placeholders: [
      {
        id: 'featureName',
        label: 'Feature/Komponenten-Name',
        type: 'text',
        required: true,
        placeholder: 'z.B. UserProfile, Dashboard',
      },
      {
        id: 'requirement1',
        label: 'Anforderung 1',
        type: 'text',
        required: true,
        placeholder: 'Erste Anforderung',
      },
      {
        id: 'requirement2',
        label: 'Anforderung 2',
        type: 'text',
        required: true,
        placeholder: 'Zweite Anforderung',
      },
      {
        id: 'requirement3',
        label: 'Anforderung 3',
        type: 'text',
        required: false,
        placeholder: 'Dritte Anforderung (optional)',
      },
      {
        id: 'folder',
        label: 'Ordner-Pfad',
        type: 'text',
        required: true,
        placeholder: 'z.B. components, features/dashboard',
        defaultValue: 'components',
      },
      {
        id: 'additionalDetails',
        label: 'Weitere Details',
        type: 'multiline',
        required: false,
        placeholder: 'Zusätzliche Informationen...',
      },
    ],

    longDescription:
      'Dieser Snippet ist ideal um neue Features oder Komponenten von Grund auf zu erstellen. Er hilft dir dabei die Anforderungen strukturiert zu definieren und stellt sicher, dass Claude die richtige Ordner-Struktur gemäß DEVELOPMENT.md anlegt. Betont die Wichtigkeit, keine ungewollten Dateien zu ändern.',

    whenToUse:
      'Nutze diesen Snippet wenn du etwas komplett Neues erstellen möchtest. Ideal für neue React-Komponenten, Features oder Module. Nicht geeignet wenn du nur bestehenden Code ändern möchtest.',

    useCase:
      'Du baust eine Social-Media-App und brauchst eine neue CommentSection-Komponente. Du definierst die Anforderungen (Kommentare anzeigen, Replies erlauben, Like-Funktion) und Claude erstellt die komplette Komponente mit Types, Tests und korrekter Ordner-Struktur.',

    fieldGuide: [
      {
        fieldId: 'featureName',
        explanation: 'Name des Features oder der Komponente in PascalCase',
        example: 'CommentSection',
        tips:
          'Verwende beschreibende Namen. Vermeide Abkürzungen. Bei Komponenten: singular (Button, nicht Buttons)',
      },
      {
        fieldId: 'requirement1',
        explanation: 'Die wichtigste Anforderung oder Hauptfunktion',
        example: 'Zeigt Liste aller Kommentare mit Autor und Zeitstempel',
        tips:
          'Priorisiere! Die erste Anforderung sollte die wichtigste sein',
      },
      {
        fieldId: 'requirement2',
        explanation: 'Die zweite Anforderung',
        example: 'Ermöglicht Replies auf Kommentare (verschachtelt)',
        tips:
          'Denke an Interaktionen und Benutzerfreundlichkeit',
      },
      {
        fieldId: 'requirement3',
        explanation: 'Eine dritte Anforderung (optional)',
        example: 'Like-Funktion für Kommentare mit Counter',
        tips:
          'Nutze dieses Feld für Nice-to-have Features',
      },
      {
        fieldId: 'folder',
        explanation: 'In welchem Ordner soll die Komponente angelegt werden?',
        example: 'components/Comment',
        tips:
          'Standardwert ist "components". Für Features nutze "features/[name]"',
      },
      {
        fieldId: 'additionalDetails',
        explanation: 'Weitere Anforderungen, Design-Wünsche oder technische Details',
        example:
          '- Responsive Design\n- Dark Mode Support\n- Nutze Tailwind CSS\n- Lazy Loading für lange Kommentar-Listen',
        tips:
          'Nutze Stichpunkte. Erwähne Styling-Framework, Accessibility, Performance',
      },
    ],
  },

  // 4. Bug Fix
  {
    id: 'cbugfix',
    name: 'Bug Fix',
    description: 'Template für Bug-Fixes',
    category: 'fix',
    icon: '🐛',
    template: `[Kontext: DEVELOPMENT.md]

🐛 Bug-Fix: {{bugTitle}}

Problem:
{{problem}}

Fehlermeldung:
\`\`\`
{{errorMessage}}
\`\`\`

Betroffene Datei(en):
- {{affectedFiles}}

Erwartetes Verhalten:
{{expectedBehavior}}

Scope: NUR die oben genannten Dateien ändern!

{{additionalInfo}}`,
    placeholders: [
      {
        id: 'bugTitle',
        label: 'Bug-Titel',
        type: 'text',
        required: true,
        placeholder: 'Kurze Beschreibung des Bugs',
      },
      {
        id: 'problem',
        label: 'Problem-Beschreibung',
        type: 'textarea',
        required: true,
        placeholder: 'Detaillierte Beschreibung des Problems',
      },
      {
        id: 'errorMessage',
        label: 'Fehlermeldung',
        type: 'textarea',
        required: false,
        placeholder: 'Fehlermeldung aus Console/Log',
      },
      {
        id: 'affectedFiles',
        label: 'Betroffene Dateien',
        type: 'multiline',
        required: true,
        placeholder: 'src/components/Button.tsx\nsrc/utils/helper.ts',
      },
      {
        id: 'expectedBehavior',
        label: 'Erwartetes Verhalten',
        type: 'textarea',
        required: true,
        placeholder: 'Was sollte stattdessen passieren?',
      },
      {
        id: 'additionalInfo',
        label: 'Zusätzliche Infos',
        type: 'multiline',
        required: false,
        placeholder: 'Weitere Informationen...',
      },
    ],

    longDescription:
      'Der Bug-Fix Snippet hilft dir dabei, Fehler präzise zu beschreiben und schnell zu beheben. Er strukturiert alle wichtigen Informationen: Was ist kaputt, wo tritt der Fehler auf, welche Fehlermeldung erscheint, und wie sollte es funktionieren. Claude kann dadurch gezielt debuggen.',

    whenToUse:
      'Verwende diesen Snippet immer wenn etwas nicht wie erwartet funktioniert - egal ob Runtime-Error, falsches Verhalten oder UI-Bug. Besonders hilfreich wenn du Fehlermeldungen aus der Console hast.',

    useCase:
      'Dein Login-Button triggert das onClick-Event zweimal, wodurch User doppelt eingeloggt werden. Du beschreibst das Problem, kopierst die Console-Logs, gibst die betroffene Datei an (LoginButton.tsx) und erklärst dass onClick nur einmal ausgeführt werden soll.',

    fieldGuide: [
      {
        fieldId: 'bugTitle',
        explanation: 'Ein kurzer, prägnanter Titel für den Bug',
        example: 'Button sendet onClick doppelt',
        tips:
          'Halte es kurz (max. 10 Wörter). Beschreibe das Symptom, nicht die Ursache',
      },
      {
        fieldId: 'problem',
        explanation:
          'Eine detaillierte Beschreibung was genau nicht funktioniert',
        example:
          'Wenn ich auf den Login-Button klicke, wird das onClick-Event zweimal getriggert. In der Console erscheinen zwei "Login attempted" Logs.',
        tips:
          'Beschreibe was du getan hast (Steps to reproduce) und was dann passiert ist',
      },
      {
        fieldId: 'errorMessage',
        explanation:
          'Die exakte Fehlermeldung aus Browser Console, Terminal oder Logs',
        example: 'Warning: Cannot update a component while rendering a different component',
        tips:
          'Kopiere die komplette Fehlermeldung inkl. Stack Trace. Auch Warnings können wichtig sein!',
      },
      {
        fieldId: 'affectedFiles',
        explanation: 'Alle Dateien die mit dem Bug zu tun haben könnten',
        example: 'src/components/LoginButton.tsx',
        tips:
          'Jede Datei in eine neue Zeile. Wenn unsicher: Liste alle verdächtigen Dateien auf',
      },
      {
        fieldId: 'expectedBehavior',
        explanation: 'Was sollte stattdessen passieren? Wie sollte es korrekt funktionieren?',
        example:
          'Der onClick-Handler sollte nur einmal pro Klick ausgeführt werden. User sollte nur ein "Login attempted" Log sehen.',
        tips:
          'Sei spezifisch. Wenn möglich: Beschreibe auch Edge Cases',
      },
      {
        fieldId: 'additionalInfo',
        explanation: 'Weitere Hinweise: Browser, Umgebung, Steps to reproduce, etc.',
        example:
          '- Tritt nur in Chrome auf\n- Funktioniert in Development, aber nicht in Production\n- Bug seit gestern',
        tips:
          'Jede Info kann helfen! Browser-Version, wann es aufgetreten ist, ob es reproduzierbar ist',
      },
    ],
  },

  // 5. Refactoring
  {
    id: 'crefactor',
    name: 'Refactoring',
    description: 'Template für Refactoring-Anfragen',
    category: 'refactor',
    icon: '♻️',
    template: `[Kontext: DEVELOPMENT.md - Modulare Architektur]

♻️ Refactoring: {{refactorTarget}}

Aktueller Code:
{{currentCode}}

Ziel:
{{goal}}

Betroffene Dateien:
✅ {{affectedFiles}}
❌ Keine anderen Dateien ändern!

Wichtig:
- Funktionalität muss identisch bleiben
- Tests müssen weiterhin laufen
- Modulare Struktur beibehalten

{{additionalConstraints}}`,
    placeholders: [
      {
        id: 'refactorTarget',
        label: 'Refactoring-Ziel',
        type: 'text',
        required: true,
        placeholder: 'Was wird refactored?',
      },
      {
        id: 'currentCode',
        label: 'Aktueller Code/Zustand',
        type: 'textarea',
        required: true,
        placeholder: 'Beschreibung des aktuellen Codes',
      },
      {
        id: 'goal',
        label: 'Ziel',
        type: 'textarea',
        required: true,
        placeholder: 'Was soll erreicht werden?',
      },
      {
        id: 'affectedFiles',
        label: 'Betroffene Dateien',
        type: 'multiline',
        required: true,
        placeholder: 'src/components/Dashboard.tsx',
      },
      {
        id: 'additionalConstraints',
        label: 'Weitere Einschränkungen',
        type: 'multiline',
        required: false,
        placeholder: '- Keine Breaking Changes\n- API beibehalten',
      },
    ],

    longDescription:
      'Dieser Snippet hilft beim Code-Refactoring ohne die Funktionalität zu ändern. Er stellt sicher, dass Claude den Code verbessert (z.B. Lesbarkeit, Performance, Struktur) während alles weiterhin funktioniert. Betont die Wichtigkeit von Tests und modularer Struktur.',

    whenToUse:
      'Nutze diesen Snippet wenn Code unübersichtlich, dupliziert oder schwer wartbar ist. Perfekt für: Code vereinfachen, Funktionen extrahieren, Performance optimieren. NICHT für Feature-Änderungen oder Bug-Fixes.',

    useCase:
      'Dein Dashboard.tsx ist auf 500 Zeilen angewachsen und enthält mehrere useEffects und komplexe State-Logik. Du möchtest die Komponente vereinfachen, Logik in Custom Hooks extrahieren und die Datei auf unter 200 Zeilen bringen - ohne dass sich das UI-Verhalten ändert.',

    fieldGuide: [
      {
        fieldId: 'refactorTarget',
        explanation: 'Was genau soll refactored werden?',
        example: 'Dashboard Komponente - State Management vereinfachen',
        tips:
          'Sei spezifisch. Beschreibe WELCHEN Aspekt du verbessern möchtest',
      },
      {
        fieldId: 'currentCode',
        explanation:
          'Beschreibe den aktuellen Zustand des Codes oder nenne die Datei',
        example:
          'src/components/Dashboard.tsx hat 500 Zeilen, 8 useStates, 5 useEffects und ist schwer zu lesen',
        tips:
          'Erkläre was aktuell problematisch ist. Warum braucht es Refactoring?',
      },
      {
        fieldId: 'goal',
        explanation: 'Was möchtest du erreichen? Wie soll der Code danach aussehen?',
        example:
          'State-Logik in Custom Hooks extrahieren, useEffects zusammenfassen, Code auf <200 Zeilen reduzieren',
        tips:
          'Konkrete, messbare Ziele. "Besser lesbar" ist vage, "Auf 200 Zeilen reduzieren" ist konkret',
      },
      {
        fieldId: 'affectedFiles',
        explanation: 'Welche Dateien dürfen geändert werden?',
        example: 'src/components/Dashboard.tsx\nsrc/hooks/useDashboardData.ts (neue Datei)',
        tips:
          'Erwähne auch neue Dateien die erstellt werden dürfen (z.B. neue Hooks)',
      },
      {
        fieldId: 'additionalConstraints',
        explanation:
          'Weitere Einschränkungen oder Anforderungen für das Refactoring',
        example:
          '- Keine Breaking Changes für Parent-Components\n- Props-Interface beibehalten\n- Tests dürfen nicht kaputt gehen',
        tips:
          'Wichtig: Erwähne was NICHT geändert werden darf (API, Props, etc.)',
      },
    ],
  },

  // 6. Component Creation
  {
    id: 'ccomponent',
    name: 'Komponenten-Erstellung',
    description: 'Detailliertes Template für neue Komponenten',
    category: 'component',
    icon: '🧩',
    template: `📋 Siehe DEVELOPMENT.md!

Aufgabe: Erstelle {{componentName}} Komponente

Props:
\`\`\`typescript
interface {{componentName}}Props {
  {{propsDefinition}}
}
\`\`\`

Features:
- {{feature1}}
- {{feature2}}

Pfad: src/components/{{componentName}}/
Dateien:
  ├── {{componentName}}.tsx
  ├── {{componentName}}.types.ts
  ├── {{componentName}}.test.ts
  └── index.ts

Style: {{styleFramework}}

{{additionalRequirements}}`,
    placeholders: [
      {
        id: 'componentName',
        label: 'Komponenten-Name',
        type: 'text',
        required: true,
        placeholder: 'z.B. Button, Card, Modal',
      },
      {
        id: 'propsDefinition',
        label: 'Props Definition',
        type: 'multiline',
        required: true,
        placeholder: 'label: string;\nonClick: () => void;',
      },
      {
        id: 'feature1',
        label: 'Feature 1',
        type: 'text',
        required: true,
        placeholder: 'Erste Funktionalität',
      },
      {
        id: 'feature2',
        label: 'Feature 2',
        type: 'text',
        required: false,
        placeholder: 'Zweite Funktionalität (optional)',
      },
      {
        id: 'styleFramework',
        label: 'Style Framework',
        type: 'select',
        required: true,
        options: ['Tailwind', 'CSS Modules', 'Styled Components'],
        defaultValue: 'Tailwind',
      },
      {
        id: 'additionalRequirements',
        label: 'Zusätzliche Anforderungen',
        type: 'multiline',
        required: false,
        placeholder: '- Dark Mode Support\n- Responsive Design',
      },
    ],

    longDescription:
      'Der detaillierteste Snippet für React-Komponenten. Er legt den kompletten Contract fest: Props mit TypeScript, Features, Styling-Framework und Ordner-Struktur. Perfekt wenn du genau weißt wie die Komponente aussehen soll und Claude eine präzise Spec geben möchtest.',

    whenToUse:
      'Verwende diesen Snippet für wiederverwendbare UI-Komponenten (Buttons, Cards, Modals, Forms). Ideal wenn du die Props-Struktur bereits kennst. Nicht geeignet für einfache Utility-Funktionen oder Services.',

    useCase:
      'Du baust eine Design-System-Komponente für dein Team. Du brauchst einen wiederverwendbaren Modal-Dialog mit Props wie isOpen, onClose, title, children. Du definierst Features (Overlay-Click schließt, Escape-Key, animierte Übergänge) und Claude erstellt die komplette Komponente inkl. TypeScript Types und Tests.',

    fieldGuide: [
      {
        fieldId: 'componentName',
        explanation: 'Name der Komponente in PascalCase',
        example: 'Modal',
        tips:
          'Verwende beschreibende, kurze Namen. Singular (Button, nicht Buttons)',
      },
      {
        fieldId: 'propsDefinition',
        explanation:
          'TypeScript Props Definition - eine Prop pro Zeile',
        example:
          'isOpen: boolean;\nonClose: () => void;\ntitle: string;\nchildren: React.ReactNode;',
        tips:
          'Nutze TypeScript Types. Optionale Props mit ?. Funktionen als () => void',
      },
      {
        fieldId: 'feature1',
        explanation: 'Die wichtigste Funktionalität der Komponente',
        example: 'Click außerhalb des Modals schließt es',
        tips:
          'Beschreibe User-Interaktionen und Verhalten',
      },
      {
        fieldId: 'feature2',
        explanation: 'Eine weitere Funktionalität (optional)',
        example: 'Escape-Taste schließt das Modal',
        tips:
          'Denke an Accessibility und Edge Cases',
      },
      {
        fieldId: 'styleFramework',
        explanation: 'Welches Styling-Framework soll verwendet werden?',
        example: 'Tailwind',
        tips:
          'Wähle aus: Tailwind (Utility-First), CSS Modules (Scoped CSS), Styled Components (CSS-in-JS)',
      },
      {
        fieldId: 'additionalRequirements',
        explanation: 'Weitere Anforderungen wie Accessibility, Responsive Design, etc.',
        example:
          '- Dark Mode Support\n- Responsive (Full-Screen auf Mobile)\n- Keyboard Navigation\n- Focus Trap',
        tips:
          'Denke an: Accessibility (ARIA), Responsive Design, Performance, Edge Cases',
      },
    ],
  },

  // 7. API Integration
  {
    id: 'capi',
    name: 'API Integration',
    description: 'Template für API-Integrationen',
    category: 'api',
    icon: '🔌',
    template: `[Kontext: DEVELOPMENT.md]

🔌 API Integration: {{apiName}}

Endpoint: {{endpoint}}
Methode: {{method}}

Request:
\`\`\`typescript
{{requestType}}
\`\`\`

Expected Response:
\`\`\`typescript
{{responseType}}
\`\`\`

Erstelle:
- Service-Funktion in src/services/{{apiName}}/
- TypeScript Types
- Error Handling
- Optional: Custom Hook für Component-Nutzung

Scope: Nur neue Dateien, keine bestehenden ändern!

{{additionalNotes}}`,
    placeholders: [
      {
        id: 'apiName',
        label: 'API Name',
        type: 'text',
        required: true,
        placeholder: 'z.B. userService, productAPI',
      },
      {
        id: 'endpoint',
        label: 'Endpoint URL',
        type: 'text',
        required: true,
        placeholder: 'https://api.example.com/endpoint',
      },
      {
        id: 'method',
        label: 'HTTP Methode',
        type: 'select',
        required: true,
        options: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      },
      {
        id: 'requestType',
        label: 'Request Type',
        type: 'textarea',
        required: false,
        placeholder: 'interface Request { id: string }',
      },
      {
        id: 'responseType',
        label: 'Response Type',
        type: 'textarea',
        required: true,
        placeholder: 'interface Response { data: any }',
      },
      {
        id: 'additionalNotes',
        label: 'Zusätzliche Hinweise',
        type: 'multiline',
        required: false,
        placeholder: '- Caching\n- Retry Logic',
      },
    ],

    longDescription:
      'Dieser Snippet hilft dir dabei, API-Calls sauber zu integrieren. Er erstellt Service-Funktionen mit korrekten TypeScript Types, Error Handling und optional React Hooks. Folgt Best Practices wie Separation of Concerns (API-Logik getrennt von Components).',

    whenToUse:
      'Verwende diesen Snippet immer wenn du einen neuen API-Endpoint anbinden möchtest. Perfekt für REST APIs. Funktioniert für GET, POST, PUT, DELETE, PATCH. Nicht geeignet für WebSockets oder GraphQL.',

    useCase:
      'Deine App soll User-Daten von einem Backend laden. Du hast einen GET-Endpoint /api/users/:id der ein User-Objekt zurückgibt. Du definierst Request (userId) und Response (User Interface) und Claude erstellt einen userService mit getUser()-Funktion plus einen useUser() Hook für React Components.',

    fieldGuide: [
      {
        fieldId: 'apiName',
        explanation: 'Ein beschreibender Name für den Service',
        example: 'userService',
        tips:
          'Verwende camelCase. Suffix "Service" oder "API" ist üblich',
      },
      {
        fieldId: 'endpoint',
        explanation: 'Die vollständige URL des API-Endpoints',
        example: 'https://api.example.com/users/:id',
        tips:
          'Inkl. Platzhalter wie :id. Basis-URL kann in .env definiert werden',
      },
      {
        fieldId: 'method',
        explanation: 'Die HTTP-Methode für diesen Request',
        example: 'GET',
        tips:
          'GET=Lesen, POST=Erstellen, PUT/PATCH=Updaten, DELETE=Löschen',
      },
      {
        fieldId: 'requestType',
        explanation:
          'TypeScript Interface für Request-Daten (Body, Params, Query)',
        example: 'interface GetUserRequest {\n  userId: string;\n}',
        tips:
          'Bei GET: Path/Query Params. Bei POST/PUT: Request Body. Kann leer sein',
      },
      {
        fieldId: 'responseType',
        explanation:
          'TypeScript Interface für die erwartete API-Response',
        example:
          'interface User {\n  id: string;\n  name: string;\n  email: string;\n}',
        tips:
          'Orientiere dich an der API-Dokumentation. Nutze optionale Felder (?) wo nötig',
      },
      {
        fieldId: 'additionalNotes',
        explanation:
          'Besondere Anforderungen: Authentication, Caching, Retry Logic, etc.',
        example:
          '- Bearer Token Authentication\n- Cache für 5 Minuten\n- Retry 3x bei Timeout',
        tips:
          'Erwähne: Auth-Type, Rate Limiting, Caching-Strategie, Error-Handling-Wünsche',
      },
    ],
  },

  // 8. Test Creation
  {
    id: 'ctest',
    name: 'Test-Erstellung',
    description: 'Template für Test-Erstellung',
    category: 'test',
    icon: '🧪',
    template: `[Kontext: DEVELOPMENT.md]

🧪 Test-Erstellung für: {{testTarget}}

Zu testende Datei:
{{targetFile}}

Test-Cases:
1. {{testCase1}}
2. {{testCase2}}
3. {{testCase3}}

Test-Framework: {{framework}}

Erstelle: {{targetFile}}.test.ts

{{additionalTestCases}}`,
    placeholders: [
      {
        id: 'testTarget',
        label: 'Test-Ziel',
        type: 'text',
        required: true,
        placeholder: 'Was wird getestet?',
      },
      {
        id: 'targetFile',
        label: 'Ziel-Datei',
        type: 'text',
        required: true,
        placeholder: 'src/components/Button/Button.tsx',
      },
      {
        id: 'testCase1',
        label: 'Test Case 1',
        type: 'text',
        required: true,
        placeholder: 'Erster Test-Fall',
      },
      {
        id: 'testCase2',
        label: 'Test Case 2',
        type: 'text',
        required: true,
        placeholder: 'Zweiter Test-Fall',
      },
      {
        id: 'testCase3',
        label: 'Test Case 3',
        type: 'text',
        required: false,
        placeholder: 'Dritter Test-Fall (optional)',
      },
      {
        id: 'framework',
        label: 'Test-Framework',
        type: 'select',
        required: true,
        options: ['Jest', 'Vitest', 'React Testing Library'],
        defaultValue: 'Vitest',
      },
      {
        id: 'additionalTestCases',
        label: 'Weitere Test-Cases',
        type: 'multiline',
        required: false,
        placeholder: '4. Edge Cases\n5. Error Handling',
      },
    ],

    longDescription:
      'Dieser Snippet erstellt umfassende Tests für deine Komponenten oder Funktionen. Er hilft dir dabei alle wichtigen Test-Cases zu definieren - von Happy Path bis Edge Cases. Claude generiert dann vollständige Test-Suites mit deinem bevorzugten Framework.',

    whenToUse:
      'Verwende diesen Snippet immer wenn du Tests für bestehenden oder neuen Code schreiben möchtest. Ideal für Unit Tests, Component Tests und Integration Tests. Besonders wichtig nach Refactorings oder Bug-Fixes.',

    useCase:
      'Du hast eine LoginForm-Komponente gebaut und möchtest sicherstellen dass sie robust ist. Du definierst Test-Cases: (1) Form rendert korrekt, (2) Validierung zeigt Fehler bei leeren Feldern, (3) onSubmit wird mit korrekten Daten aufgerufen, (4) Loading-State während Submit. Claude erstellt eine vollständige Test-Suite.',

    fieldGuide: [
      {
        fieldId: 'testTarget',
        explanation: 'Was soll getestet werden? Komponente, Funktion oder Feature',
        example: 'LoginForm Komponente',
        tips:
          'Sei spezifisch. "Button" ist vage, "LoginForm Submit Behavior" ist besser',
      },
      {
        fieldId: 'targetFile',
        explanation: 'Der Pfad zur Datei die getestet werden soll',
        example: 'src/components/LoginForm/LoginForm.tsx',
        tips:
          'Relativer Pfad vom Projekt-Root. Tests werden als .test.ts neben der Datei erstellt',
      },
      {
        fieldId: 'testCase1',
        explanation: 'Der erste und wichtigste Test-Case (meist Happy Path)',
        example: 'Rendert alle Form-Felder (Email, Password, Submit-Button)',
        tips:
          'Happy Path zuerst! Was sollte im Normalfall funktionieren?',
      },
      {
        fieldId: 'testCase2',
        explanation: 'Der zweite Test-Case',
        example: 'Zeigt Validierungs-Fehler bei leerem Email-Feld',
        tips:
          'Teste User-Interaktionen und Validierung',
      },
      {
        fieldId: 'testCase3',
        explanation: 'Ein dritter Test-Case (optional)',
        example: 'onSubmit wird mit korrekten Daten aufgerufen',
        tips:
          'Teste Props, Callbacks und State-Changes',
      },
      {
        fieldId: 'framework',
        explanation: 'Welches Test-Framework wird in deinem Projekt verwendet?',
        example: 'Vitest',
        tips:
          'Vitest ist modern und schnell. Jest ist weit verbreitet. React Testing Library für Component-Tests',
      },
      {
        fieldId: 'additionalTestCases',
        explanation:
          'Weitere Test-Cases: Edge Cases, Error Handling, Accessibility',
        example:
          '4. Disabled State verhindert Submit\n5. Loading State zeigt Spinner\n6. Error von API wird angezeigt',
        tips:
          'Denke an: Edge Cases, Error States, Loading States, Accessibility (ARIA), Keyboard Navigation',
      },
    ],
  },

  // 9. Documentation
  {
    id: 'cdocs',
    name: 'Dokumentation',
    description: 'Template für Dokumentations-Anfragen',
    category: 'docs',
    icon: '📚',
    template: `📚 Dokumentation: {{docTitle}}

Aufgabe: Erstelle/Erweitere Dokumentation für {{docTarget}}

Inhalte:
- Übersicht/Zweck
- Installation/Setup (falls relevant)
- API/Props-Dokumentation
- Verwendungsbeispiele
- {{additionalContent}}

Format: {{format}}

{{additionalNotes}}`,
    placeholders: [
      {
        id: 'docTitle',
        label: 'Dokumentations-Titel',
        type: 'text',
        required: true,
        placeholder: 'z.B. Button Component API',
      },
      {
        id: 'docTarget',
        label: 'Dokumentations-Ziel',
        type: 'text',
        required: true,
        placeholder: 'Was wird dokumentiert?',
      },
      {
        id: 'additionalContent',
        label: 'Zusätzliche Inhalte',
        type: 'text',
        required: false,
        placeholder: 'Weitere Anforderungen',
      },
      {
        id: 'format',
        label: 'Format',
        type: 'select',
        required: true,
        options: ['JSDoc', 'Markdown', 'README'],
        defaultValue: 'Markdown',
      },
      {
        id: 'additionalNotes',
        label: 'Zusätzliche Hinweise',
        type: 'multiline',
        required: false,
        placeholder: 'Weitere Informationen...',
      },
    ],

    longDescription:
      'Dieser Snippet erstellt professionelle Dokumentation für deine Components, APIs oder Features. Er strukturiert die Doku in sinnvolle Abschnitte (Zweck, API, Beispiele) und wählt das passende Format (JSDoc für Inline-Code, Markdown für READMEs).',

    whenToUse:
      'Verwende diesen Snippet wenn du Code für andere (oder dein zukünftiges Ich) dokumentieren möchtest. Besonders wichtig für wiederverwendbare Komponenten, Public APIs und komplexe Features. Am besten direkt nach der Implementierung.',

    useCase:
      'Du hast eine DataTable-Komponente mit vielen Props und Features gebaut. Dein Team soll diese Komponente nutzen können. Du erstellst eine README.md mit: Übersicht (was kann die Komponente), Props-API (alle Props erklärt), Code-Beispiele (Basis-Usage, Advanced Features) und Design-Entscheidungen.',

    fieldGuide: [
      {
        fieldId: 'docTitle',
        explanation: 'Ein beschreibender Titel für die Dokumentation',
        example: 'DataTable Component Documentation',
        tips:
          'Mache klar was dokumentiert wird. "Component API" oder "User Guide" als Suffix',
      },
      {
        fieldId: 'docTarget',
        explanation: 'Was genau wird dokumentiert? Komponente, Service, Feature?',
        example: 'DataTable Komponente',
        tips:
          'Sei spezifisch. Erwähne auch den Pfad falls relevant',
      },
      {
        fieldId: 'additionalContent',
        explanation: 'Weitere Abschnitte die in der Doku erscheinen sollen',
        example: 'Performance-Tipps, Accessibility-Features, Migration Guide',
        tips:
          'Denke an: Best Practices, Troubleshooting, FAQ, Migration, Performance',
      },
      {
        fieldId: 'format',
        explanation: 'In welchem Format soll die Doku geschrieben werden?',
        example: 'Markdown',
        tips:
          'JSDoc für Inline-Code-Kommentare, Markdown für README.md, README für komplette Projekt-Dokumentation',
      },
      {
        fieldId: 'additionalNotes',
        explanation: 'Besondere Anforderungen oder Stil-Vorgaben',
        example:
          '- Nutze Code-Beispiele mit TypeScript\n- Erkläre Props-Defaults\n- Zeige häufige Fehler',
        tips:
          'Zielgruppe erwähnen (Junior vs. Senior Devs), Stil-Vorgaben (formal vs. casual)',
      },
    ],
  },

  // 10. Quick Task
  {
    id: 'ctask',
    name: 'Quick Task',
    description: 'Kurzes Template für schnelle Aufgaben',
    category: 'other',
    icon: '⚡',
    template: `[DEVELOPMENT.md]

{{task}}

Scope: {{scope}}`,
    placeholders: [
      {
        id: 'task',
        label: 'Aufgabe',
        type: 'textarea',
        required: true,
        placeholder: 'Was soll gemacht werden?',
      },
      {
        id: 'scope',
        label: 'Scope',
        type: 'text',
        required: true,
        placeholder: 'Welche Dateien?',
      },
    ],

    longDescription:
      'Der schnellste Weg für simple, klare Aufgaben. Minimalistisch aber effektiv. Perfekt wenn du keine lange Beschreibung brauchst und Claude einfach nur eine kleine Änderung machen soll. Referenziert trotzdem DEVELOPMENT.md für Kontext.',

    whenToUse:
      'Verwende diesen Snippet für triviale Aufgaben die in 1-2 Sätzen erklärt werden können. Ideal für: Farben ändern, Text anpassen, kleine CSS-Fixes. Nicht geeignet für komplexe Features oder wenn du mehrere Anforderungen hast.',

    useCase:
      'Du möchtest die Farbe des Primary-Buttons von Blau zu Grün ändern. Task: "Ändere Button-Farbe von bg-blue-500 zu bg-green-500", Scope: "src/components/Button/Button.tsx". Fertig in 30 Sekunden.',

    fieldGuide: [
      {
        fieldId: 'task',
        explanation:
          'Eine kurze, klare Beschreibung was gemacht werden soll',
        example: 'Ändere die Hintergrundfarbe des Headers von weiß zu grau',
        tips:
          'Maximal 2-3 Sätze. Verwende Imperative (Ändere, Füge hinzu, Entferne)',
      },
      {
        fieldId: 'scope',
        explanation: 'Welche Datei(en) sollen geändert werden?',
        example: 'src/components/Header/Header.tsx',
        tips:
          'Je spezifischer desto besser. Mehrere Dateien mit Komma trennen',
      },
    ],
  },

  // 11. Multi-Step Task
  {
    id: 'cmulti',
    name: 'Multi-Step Task',
    description: 'Template für mehrstufige Aufgaben',
    category: 'other',
    icon: '📋',
    template: `[Kontext: DEVELOPMENT.md - Modulare Architektur]

📋 Mehrstufige Aufgabe: {{taskTitle}}

Schritt 1: {{step1}}
Scope: {{scope1}}

Schritt 2: {{step2}}
Scope: {{scope2}}

Schritt 3: {{step3}}
Scope: {{scope3}}

WICHTIG:
- Arbeite Schritt für Schritt
- Warte auf Bestätigung nach jedem Schritt
- Keine Änderungen außerhalb des definierten Scope

Lass uns mit Schritt 1 beginnen!

{{additionalSteps}}`,
    placeholders: [
      {
        id: 'taskTitle',
        label: 'Task-Titel',
        type: 'text',
        required: true,
        placeholder: 'Gesamtziel der Aufgabe',
      },
      {
        id: 'step1',
        label: 'Schritt 1',
        type: 'text',
        required: true,
        placeholder: 'Erster Schritt',
      },
      {
        id: 'scope1',
        label: 'Scope Schritt 1',
        type: 'text',
        required: true,
        placeholder: 'Betroffene Dateien',
      },
      {
        id: 'step2',
        label: 'Schritt 2',
        type: 'text',
        required: true,
        placeholder: 'Zweiter Schritt',
      },
      {
        id: 'scope2',
        label: 'Scope Schritt 2',
        type: 'text',
        required: true,
        placeholder: 'Betroffene Dateien',
      },
      {
        id: 'step3',
        label: 'Schritt 3',
        type: 'text',
        required: false,
        placeholder: 'Dritter Schritt (optional)',
      },
      {
        id: 'scope3',
        label: 'Scope Schritt 3',
        type: 'text',
        required: false,
        placeholder: 'Betroffene Dateien',
      },
      {
        id: 'additionalSteps',
        label: 'Weitere Schritte',
        type: 'multiline',
        required: false,
        placeholder: 'Schritt 4: ...\nScope: ...',
      },
    ],

    longDescription:
      'Dieser Snippet ist perfekt für komplexe Aufgaben die in mehrere logische Schritte unterteilt werden müssen. Er hilft dabei große Features übersichtlich zu planen und Schritt für Schritt umzusetzen. Claude wartet nach jedem Schritt auf deine Bestätigung bevor es weitergeht.',

    whenToUse:
      'Verwende diesen Snippet für große Features die mehrere Komponenten oder Module betreffen. Ideal wenn du Kontrolle über jeden Schritt haben möchtest. Nicht nötig für simple Aufgaben die in einem Rutsch erledigt werden können.',

    useCase:
      'Du baust ein User-Authentication-System. Schritt 1: Login-Form-Komponente erstellen. Schritt 2: Auth-Service mit API-Calls. Schritt 3: Auth-Context für globalen State. Schritt 4: Protected Routes implementieren. Nach jedem Schritt kannst du testen und Feedback geben bevor es weitergeht.',

    fieldGuide: [
      {
        fieldId: 'taskTitle',
        explanation: 'Das übergeordnete Ziel - was soll am Ende erreicht sein?',
        example: 'User Authentication System implementieren',
        tips:
          'Wähle einen Namen der das Gesamtfeature beschreibt',
      },
      {
        fieldId: 'step1',
        explanation: 'Der erste Schritt der Implementierung',
        example: 'Erstelle LoginForm Komponente',
        tips:
          'Start mit Grundlagen/Dependencies. Baue von unten nach oben auf',
      },
      {
        fieldId: 'scope1',
        explanation: 'Welche Dateien werden in Schritt 1 erstellt/geändert?',
        example: 'src/components/LoginForm/',
        tips:
          'Sei spezifisch. Auch neue Ordner erwähnen',
      },
      {
        fieldId: 'step2',
        explanation: 'Der zweite Schritt',
        example: 'Erstelle Auth-Service für API-Calls',
        tips:
          'Logische Reihenfolge: Components → Services → State → Integration',
      },
      {
        fieldId: 'scope2',
        explanation: 'Scope für Schritt 2',
        example: 'src/services/auth/',
        tips:
          'Jeder Schritt sollte isoliert sein',
      },
      {
        fieldId: 'step3',
        explanation: 'Der dritte Schritt (optional)',
        example: 'Erstelle Auth-Context für globalen State',
        tips:
          'Nicht mehr als 5 Schritte. Sonst Aufgabe weiter splitten',
      },
      {
        fieldId: 'scope3',
        explanation: 'Scope für Schritt 3',
        example: 'src/contexts/AuthContext/',
      },
      {
        fieldId: 'additionalSteps',
        explanation: 'Weitere Schritte falls nötig',
        example:
          'Schritt 4: Protected Routes implementieren\nScope: src/routes/\n\nSchritt 5: Login in App.tsx integrieren\nScope: src/App.tsx',
        tips:
          'Format: "Schritt X: Beschreibung\\nScope: Dateien". Leere Zeile zwischen Schritten',
      },
    ],
  },

  // 12. Code Review
  {
    id: 'creview',
    name: 'Code Review',
    description: 'Template für Code-Review-Anfragen',
    category: 'other',
    icon: '👀',
    template: `👀 Code Review: {{reviewTitle}}

Datei: {{targetFile}}

Prüfe auf:
- ✅ Entspricht DEVELOPMENT.md Richtlinien
- ✅ Modulare Struktur eingehalten
- ✅ Single Responsibility
- ✅ Type Safety
- ✅ Keine ungewollten Abhängigkeiten
- ✅ {{additionalCriteria}}

Gib konstruktives Feedback mit Verbesserungsvorschlägen.

{{additionalNotes}}`,
    placeholders: [
      {
        id: 'reviewTitle',
        label: 'Review-Titel',
        type: 'text',
        required: true,
        placeholder: 'Was wird reviewed?',
      },
      {
        id: 'targetFile',
        label: 'Zu reviewende Datei',
        type: 'text',
        required: true,
        placeholder: 'src/components/Button/Button.tsx',
      },
      {
        id: 'additionalCriteria',
        label: 'Weitere Kriterien',
        type: 'text',
        required: false,
        placeholder: 'Zusätzliche Review-Kriterien',
      },
      {
        id: 'additionalNotes',
        label: 'Zusätzliche Hinweise',
        type: 'multiline',
        required: false,
        placeholder: 'Besondere Schwerpunkte...',
      },
    ],

    longDescription:
      'Dieser Snippet lässt Claude deinen Code professionell reviewen. Er prüft auf Best Practices, Architektur-Konformität, Code-Qualität und potenzielle Probleme. Du erhältst konstruktives Feedback mit konkreten Verbesserungsvorschlägen - wie bei einem Code Review mit einem Senior Developer.',

    whenToUse:
      'Verwende diesen Snippet bevor du größere Changes committst, nach dem Implementieren neuer Features oder wenn du unsicher bist ob dein Code sauber ist. Besonders wertvoll für Learning und Quality Assurance.',

    useCase:
      'Du hast eine komplexe Dashboard-Komponente gebaut und möchtest sicherstellen dass sie den Best Practices entspricht. Claude reviewed den Code und findet: (1) Zu viele useEffects → zusammenfassen, (2) Props nicht optimal typisiert, (3) Komponente zu groß → in Sub-Components aufteilen. Du kriegst konkrete Refactoring-Vorschläge.',

    fieldGuide: [
      {
        fieldId: 'reviewTitle',
        explanation: 'Was soll reviewed werden? Komponente, Feature oder Datei',
        example: 'Dashboard Komponente Code Quality',
        tips:
          'Sei beschreibend. Erwähne worauf du besonderen Wert legst',
      },
      {
        fieldId: 'targetFile',
        explanation: 'Pfad zur Datei die reviewed werden soll',
        example: 'src/pages/Dashboard/Dashboard.tsx',
        tips:
          'Nur eine Datei pro Review für fokussiertes Feedback',
      },
      {
        fieldId: 'additionalCriteria',
        explanation: 'Zusätzliche Prüfpunkte neben den Standard-Kriterien',
        example: 'Performance Optimierungen, Accessibility',
        tips:
          'Erwähne spezielle Schwerpunkte: Performance, Security, Accessibility, Tests',
      },
      {
        fieldId: 'additionalNotes',
        explanation:
          'Kontext oder besondere Bereiche auf die Claude achten soll',
        example:
          '- State Management wirkt kompliziert\n- Sind die useEffects optimal?\n- Kann Komponente kleiner sein?',
        tips:
          'Teile deine Bedenken. Erwähne was du bereits vermutest verbessert werden könnte',
      },
    ],
  },

  // 13. UI/GUI Design Analyse
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

  // 14. Farbdesign & Theme Vorschläge
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

  // 15. Layout & Struktur Optimierung
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

  // 16. Neue Features & Komponenten Brainstorming
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