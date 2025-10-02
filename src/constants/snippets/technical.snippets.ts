/**
 * Technical Snippets
 *
 * Snippets for API integration, testing, and documentation.
 */

import type { Snippet } from '@/types/snippet.types';

export const TECHNICAL_SNIPPETS: Snippet[] = [
  // 1. API Integration
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

  // 2. Test Creation
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

  // 3. Documentation
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
];
