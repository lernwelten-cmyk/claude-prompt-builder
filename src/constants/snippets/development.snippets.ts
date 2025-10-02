/**
 * Development Snippets
 *
 * Snippets for everyday development tasks: features, components, bug fixes, and refactoring.
 */

import type { Snippet } from '@/types/snippet.types';

export const DEVELOPMENT_SNIPPETS: Snippet[] = [
  // 1. Standard Prompt
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

  // 2. New Feature/Component
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

  // 3. Component Creation (Detailed)
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
        placeholder: 'src/components/Button.tsx',
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
];
