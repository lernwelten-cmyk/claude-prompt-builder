/**
 * Workflow Snippets
 *
 * Task management and code review snippets for efficient development workflow.
 * Includes quick tasks, multi-step tasks, and code review templates.
 */

import { Snippet } from '@/types/snippet.types';

export const WORKFLOW_SNIPPETS: Snippet[] = [
  // Quick Task
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

  // Multi-Step Task
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

  // Code Review
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
];
