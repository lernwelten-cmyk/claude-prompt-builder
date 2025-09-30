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
  },
];