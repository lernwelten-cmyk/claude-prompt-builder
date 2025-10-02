/**
 * Advanced Snippets
 *
 * Advanced workflow and deployment snippets for experienced developers.
 * Includes git workflow, deployment automation, and project analysis tools.
 */

import { Snippet } from '@/types/snippet.types';

export const ADVANCED_SNIPPETS: Snippet[] = [
  // Git Push & Deployment
  {
    id: 'cgitpush',
    name: 'Git Push & Deployment',
    description: 'Strukturierter Git Workflow mit intelligenten Commit-Messages',
    category: 'other',
    icon: '🚀',
    template: `[Kontext: DEVELOPMENT.md]

🚀 Git Push & Deployment Vorbereitung

Projekt-Status analysieren und optimalen Git-Workflow vorschlagen.

Aktuelle Änderungen:
{{changesSummary}}

Deployment-Ziel: {{deploymentTarget}}

Aufgaben:

1. **Änderungs-Analyse:**
   - Prüfe welche Dateien geändert wurden
   - Kategorisiere Änderungen:
     * Features (feat)
     * Bugfixes (fix)
     * Refactoring (refactor)
     * Dokumentation (docs)
     * Styling (style)
     * Tests (test)
     * Chores (chore)
   - Identifiziere Breaking Changes

2. **Commit-Message Vorschlag:**
   Schlage eine strukturierte Commit-Message vor im Format:
   \`\`\`
   <type>(<scope>): <subject>

   <body>

   <footer>
   \`\`\`

   Beispiel:
   \`\`\`
   feat(prompt-builder): add document management system

   - Add DocumentManager component with full CRUD
   - Implement localStorage persistence
   - Add markdown editor with preview
   - Include category filtering and search

   Closes #42
   \`\`\`

3. **Pre-Push Checkliste:**
   Erstelle eine Checkliste mit:
   - [ ] Tests laufen durch (npm test)
   - [ ] Build erfolgreich (npm run build)
   - [ ] Keine console.logs in Production Code
   - [ ] Environment Variables korrekt gesetzt
   - [ ] Dependencies aktualisiert (npm audit)
   - [ ] README.md aktualisiert (falls nötig)
   - [ ] {{customCheckpoint}}

4. **Git Commands:**
   Gib die exakten Git-Commands:
   \`\`\`bash
   # Staging
   git add [spezifische Dateien oder .]

   # Commit
   git commit -m "[generierte Message]"

   # Push
   git push origin {{branch}}

   # Optional: Tag erstellen
   git tag -a v{{version}} -m "Release {{version}}"
   git push origin v{{version}}
   \`\`\`

5. **Deployment-Hinweise:**
   Für {{deploymentTarget}}:
   - Spezifische Hinweise zur Plattform
   - Build-Logs wo zu finden
   - Preview-Links bei PRs
   - Production vs. Preview Branches

6. **Post-Deployment Checks:**
   - [ ] Live-URL testen: {{liveUrl}}
   - [ ] Neue Features funktionieren
   - [ ] Keine Console-Errors
   - [ ] Performance okay (Lighthouse)
   - [ ] Mobile-Ansicht prüfen

7. **Rollback-Plan:**
   Falls etwas schief geht:
   \`\`\`bash
   # Letzten Commit rückgängig (lokal)
   git reset --soft HEAD~1

   # Oder: Force-Push von vorherigem Commit
   git revert HEAD
   git push origin {{branch}}
   \`\`\`

WICHTIG:
- Sei präzise mit der Commit-Message
- Gruppiere zusammengehörige Änderungen
- Erwähne Breaking Changes explizit
- Verlinke relevante Issues/PRs`,
    placeholders: [
      {
        id: 'changesSummary',
        label: 'Zusammenfassung der Änderungen',
        type: 'textarea',
        required: true,
        placeholder: 'z.B. "Dokument-Management hinzugefügt, Dark Mode verbessert, Bugs in FormValidation gefixt"',
        defaultValue: ''
      },
      {
        id: 'deploymentTarget',
        label: 'Deployment-Ziel',
        type: 'select',
        required: false,
        options: ['Netlify', 'Vercel', 'GitHub Pages', 'Heroku', 'AWS', 'Kein Auto-Deploy'],
        defaultValue: 'Netlify'
      },
      {
        id: 'branch',
        label: 'Git Branch',
        type: 'text',
        required: false,
        placeholder: 'z.B. main, master, develop',
        defaultValue: 'main'
      },
      {
        id: 'version',
        label: 'Version (optional, für Tags)',
        type: 'text',
        required: false,
        placeholder: 'z.B. 1.2.0',
        defaultValue: ''
      },
      {
        id: 'liveUrl',
        label: 'Live-URL zum Testen',
        type: 'text',
        required: false,
        placeholder: 'z.B. https://your-app.netlify.app',
        defaultValue: ''
      },
      {
        id: 'customCheckpoint',
        label: 'Zusätzlicher Checkpoint (optional)',
        type: 'text',
        required: false,
        placeholder: 'z.B. "Alle Bilder optimiert" oder "Changelog aktualisiert"',
        defaultValue: 'Alle Änderungen getestet'
      }
    ],
    longDescription: 'Dieser Snippet hilft dir dabei, einen strukturierten Git-Workflow durchzuführen. Claude analysiert deine Änderungen, schlägt eine semantische Commit-Message vor, gibt dir eine Pre-Push Checkliste und die exakten Git-Commands. Perfekt um nichts zu vergessen und professionelle Commits zu erstellen.',
    whenToUse: 'Verwende diesen Snippet vor jedem Git Push, besonders bei größeren Features oder vor Deployments. Ideal wenn du sicherstellen willst, dass nichts vergessen wird und deine Commit-Historie sauber bleibt. Nicht nötig für ganz kleine Typo-Fixes.',
    useCase: 'Du hast gerade das Dokumenten-Management-System fertiggestellt und möchtest es nach GitHub pushen und auf Netlify deployen. Der Snippet hilft dir dabei, alle Änderungen zu kategorisieren, eine aussagekräftige Commit-Message zu erstellen, nichts zu vergessen (Tests, Build, etc.) und gibt dir die exakten Commands.',
    fieldGuide: [
      {
        fieldId: 'changesSummary',
        explanation: 'Beschreibe kurz alle Änderungen die du gemacht hast. Gruppiere nach Features, Fixes, Refactorings.',
        example: 'Dokumenten-Management hinzugefügt (CRUD, Suche, Filter), Dark Mode verbessert, Bug in Copy-Funktion gefixt',
        tips: 'Sei spezifisch! Liste die wichtigsten Änderungen auf. Claude nutzt das um die Commit-Message zu generieren.'
      },
      {
        fieldId: 'deploymentTarget',
        explanation: 'Wähle deine Deployment-Plattform. Claude gibt dir spezifische Hinweise für diese Plattform.',
        example: 'Netlify',
        tips: 'Wenn du "Kein Auto-Deploy" wählst, bekommst du nur Git-Commands ohne Deployment-Hinweise.'
      },
      {
        fieldId: 'branch',
        explanation: 'Der Git-Branch in den du pushen möchtest.',
        example: 'main',
        tips: 'Standard ist meist "main" oder "master". Feature-Branches haben oft Namen wie "feature/document-management".'
      },
      {
        fieldId: 'version',
        explanation: 'Optional: Versionsnummer wenn du einen Release-Tag erstellen möchtest (Semantic Versioning).',
        example: '1.2.0',
        tips: 'Format: Major.Minor.Patch (z.B. 1.2.0). Lass leer wenn kein Tag nötig.'
      },
      {
        fieldId: 'liveUrl',
        explanation: 'Die URL deiner deployed App, um sie nach dem Push zu testen.',
        example: 'https://claude-prompt-builder.netlify.app',
        tips: 'Claude gibt dir eine Post-Deployment Checkliste mit dieser URL.'
      },
      {
        fieldId: 'customCheckpoint',
        explanation: 'Ein zusätzlicher Check den du vor dem Push machen möchtest.',
        example: 'Screenshots für README erstellt',
        tips: 'Optional. Füge projekt-spezifische Checks hinzu die du nicht vergessen willst.'
      }
    ]
  },
];
