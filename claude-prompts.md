# Claude Code Prompt Templates

> **Verwendung:** Kopiere das gewünschte Template, fülle die Platzhalter aus und füge es in Claude Code Chat ein.

---

## 🚀 Session Start (IMMER am Anfang!)

```
Hi Claude! 👋

Projekt-Kontext:
📋 Bitte lies DEVELOPMENT.md für Architektur-Richtlinien
🏗️ Dieses Projekt folgt strikt modularer Architektur
⚠️ Ändere nur explizit genannte Dateien

Bestätige kurz, dass du die Regeln verstanden hast, dann starten wir!
```

---

## 📋 Standard Prompt (Alltägliche Aufgaben)

```
[Kontext: DEVELOPMENT.md - Modulare Architektur]

Aufgabe: [BESCHREIBUNG DER AUFGABE]
Scope: [BETROFFENE DATEIEN]
```

**Beispiel:**
```
[Kontext: DEVELOPMENT.md - Modulare Architektur]

Aufgabe: Füge einen Loading-State zum Button hinzu
Scope: src/components/Button/Button.tsx
```

---

## 🆕 Neue Feature/Komponente

```
📋 Kontext: Siehe DEVELOPMENT.md (modulare Architektur)

Aufgabe: Erstelle eine neue [FEATURE/KOMPONENTEN-NAME] Komponente/Feature

Anforderungen:
- [ANFORDERUNG 1]
- [ANFORDERUNG 2]
- [ANFORDERUNG 3]

Ordner-Struktur:
src/[ORDNER]/
  ├── [Name].tsx
  ├── [Name].types.ts
  └── [Name].test.ts

WICHTIG: Keine anderen Dateien ändern ohne zu fragen!
```

**Beispiel:**
```
📋 Kontext: Siehe DEVELOPMENT.md (modulare Architektur)

Aufgabe: Erstelle eine neue UserCard Komponente

Anforderungen:
- Zeigt Benutzername, Avatar und Email an
- Klickbar mit onClick Handler
- Responsive Design mit Tailwind

Ordner-Struktur:
src/components/UserCard/
  ├── UserCard.tsx
  ├── UserCard.types.ts
  └── UserCard.test.ts

WICHTIG: Keine anderen Dateien ändern ohne zu fragen!
```

---

## 🐛 Bug Fix

```
[Kontext: DEVELOPMENT.md]

🐛 Bug-Fix: [KURZE BESCHREIBUNG]

Problem:
[BESCHREIBUNG DES PROBLEMS]

Fehlermeldung:
```
[FEHLERMELDUNG HIER EINFÜGEN]
```

Betroffene Datei(en):
- [DATEI 1]
- [DATEI 2]

Erwartetes Verhalten:
[WAS SOLLTE PASSIEREN]

Scope: NUR die oben genannten Dateien ändern!
```

**Beispiel:**
```
[Kontext: DEVELOPMENT.md]

🐛 Bug-Fix: Button sendet onClick doppelt

Problem:
Der Button triggert das onClick Event zweimal bei einem Klick

Fehlermeldung:
```
Console: "handleClick called" (appears twice)
```

Betroffene Datei(en):
- src/components/Button/Button.tsx

Erwartetes Verhalten:
onClick sollte nur einmal pro Klick getriggert werden

Scope: NUR die oben genannten Dateien ändern!
```

---

## ♻️ Refactoring

```
[Kontext: DEVELOPMENT.md - Modulare Architektur]

♻️ Refactoring: [WAS SOLL REFACTORED WERDEN]

Aktueller Code:
[DATEI/KOMPONENTE]

Ziel:
[WAS SOLL ERREICHT WERDEN]

Betroffene Dateien:
✅ [DATEI 1]
✅ [DATEI 2]
❌ Keine anderen Dateien ändern!

Wichtig:
- Funktionalität muss identisch bleiben
- Tests müssen weiterhin laufen
- Modulare Struktur beibehalten
```

**Beispiel:**
```
[Kontext: DEVELOPMENT.md - Modulare Architektur]

♻️ Refactoring: Button Komponente vereinfachen

Aktueller Code:
src/components/Button/Button.tsx

Ziel:
Reduziere Komplexität, extrahiere Styling-Logik in separate Funktion

Betroffene Dateien:
✅ src/components/Button/Button.tsx
❌ Keine anderen Dateien ändern!

Wichtig:
- Funktionalität muss identisch bleiben
- Tests müssen weiterhin laufen
- Modulare Struktur beibehalten
```

---

## 🎨 Detaillierte Komponenten-Erstellung

```
📋 Siehe DEVELOPMENT.md!

Aufgabe: Erstelle [KOMPONENTEN-NAME] Komponente

Props:
```typescript
interface [Name]Props {
  [prop1]: [type];
  [prop2]: [type];
  [prop3]?: [type]; // optional
}
```

Features:
- [FEATURE 1]
- [FEATURE 2]
- [FEATURE 3]

Pfad: src/components/[Name]/
Dateien:
  ├── [Name].tsx
  ├── [Name].types.ts
  ├── [Name].test.ts
  └── index.ts

Style: [Tailwind / CSS Modules / Styled Components]
```

**Beispiel:**
```
📋 Siehe DEVELOPMENT.md!

Aufgabe: Erstelle LoginForm Komponente

Props:
```typescript
interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
  isLoading?: boolean;
  error?: string;
}
```

Features:
- Email und Password Felder
- Validierung (Email-Format, Min-Länge)
- Loading State während Submit
- Error Message Anzeige

Pfad: src/components/LoginForm/
Dateien:
  ├── LoginForm.tsx
  ├── LoginForm.types.ts
  ├── LoginForm.test.ts
  └── index.ts

Style: Tailwind
```

---

## 🔌 API Integration

```
[Kontext: DEVELOPMENT.md]

🔌 API Integration: [API-NAME]

Endpoint: [URL]
Methode: [GET / POST / PUT / DELETE / PATCH]

Request:
```typescript
[REQUEST INTERFACE/TYPE]
```

Expected Response:
```typescript
[RESPONSE INTERFACE/TYPE]
```

Erstelle:
- Service-Funktion in src/services/[name]/
- TypeScript Types
- Error Handling
- Optional: Custom Hook für Component-Nutzung

Scope: Nur neue Dateien, keine bestehenden ändern!
```

**Beispiel:**
```
[Kontext: DEVELOPMENT.md]

🔌 API Integration: User Authentication

Endpoint: https://api.example.com/auth/login
Methode: POST

Request:
```typescript
interface LoginRequest {
  email: string;
  password: string;
}
```

Expected Response:
```typescript
interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}
```

Erstelle:
- Service-Funktion in src/services/auth/
- TypeScript Types
- Error Handling
- Optional: useAuth Hook

Scope: Nur neue Dateien, keine bestehenden ändern!
```

---

## 🧪 Test-Erstellung

```
[Kontext: DEVELOPMENT.md]

🧪 Test-Erstellung für: [KOMPONENTE/FUNKTION]

Zu testende Datei:
[DATEIPFAD]

Test-Cases:
1. [TEST CASE 1]
2. [TEST CASE 2]
3. [TEST CASE 3]
4. [TEST CASE 4 - Edge Cases]

Test-Framework: [Jest / Vitest / React Testing Library]

Erstelle: [Name].test.ts
```

**Beispiel:**
```
[Kontext: DEVELOPMENT.md]

🧪 Test-Erstellung für: Button Komponente

Zu testende Datei:
src/components/Button/Button.tsx

Test-Cases:
1. Rendert mit korrektem Label
2. onClick wird bei Klick aufgerufen
3. Disabled State verhindert onClick
4. Verschiedene Variants werden korrekt gerendert

Test-Framework: React Testing Library + Jest

Erstelle: Button.test.ts
```

---

## 📚 Dokumentation

```
📚 Dokumentation: [WAS DOKUMENTIERT WERDEN SOLL]

Aufgabe: Erstelle/Erweitere Dokumentation für [KOMPONENTE/MODUL]

Inhalte:
- Übersicht/Zweck
- Installation/Setup (falls relevant)
- API/Props-Dokumentation
- Verwendungsbeispiele
- [WEITERE ANFORDERUNGEN]

Format: [JSDoc / Markdown / README]
```

**Beispiel:**
```
📚 Dokumentation: Button Komponente

Aufgabe: Erstelle JSDoc-Dokumentation für Button

Inhalte:
- Übersicht/Zweck der Komponente
- Props-Dokumentation mit Beispielen
- Verwendungsbeispiele (Basic, mit Icon, Variants)
- Accessibility Notes

Format: JSDoc in Button.tsx
```

---

## ⚡ Quick Task (Kurze Aufgaben)

```
[DEVELOPMENT.md]

[BESCHREIBUNG DER AUFGABE]

Scope: [DATEIEN]
```

**Beispiel:**
```
[DEVELOPMENT.md]

Ändere Button-Farbe von blau zu grün

Scope: src/components/Button/Button.tsx
```

---

## 📋 Multi-Step Task (Komplexe Aufgaben)

```
[Kontext: DEVELOPMENT.md - Modulare Architektur]

📋 Mehrstufige Aufgabe: [AUFGABEN-NAME]

Schritt 1: [BESCHREIBUNG]
Scope: [DATEIEN]

Schritt 2: [BESCHREIBUNG]
Scope: [DATEIEN]

Schritt 3: [BESCHREIBUNG]
Scope: [DATEIEN]

WICHTIG:
- Arbeite Schritt für Schritt
- Warte auf Bestätigung nach jedem Schritt
- Keine Änderungen außerhalb des definierten Scope

Lass uns mit Schritt 1 beginnen!
```

**Beispiel:**
```
[Kontext: DEVELOPMENT.md - Modulare Architektur]

📋 Mehrstufige Aufgabe: User Dashboard erstellen

Schritt 1: Erstelle DashboardLayout Komponente
Scope: src/components/DashboardLayout/

Schritt 2: Erstelle UserStats Widget
Scope: src/components/UserStats/

Schritt 3: Integriere beide im Dashboard
Scope: src/pages/Dashboard.tsx

WICHTIG:
- Arbeite Schritt für Schritt
- Warte auf Bestätigung nach jedem Schritt
- Keine Änderungen außerhalb des definierten Scope

Lass uns mit Schritt 1 beginnen!
```

---

## 👀 Code Review

```
👀 Code Review: [DATEI/KOMPONENTE]

Datei: [DATEIPFAD]

Prüfe auf:
- ✅ Entspricht DEVELOPMENT.md Richtlinien
- ✅ Modulare Struktur eingehalten
- ✅ Single Responsibility
- ✅ Type Safety
- ✅ Keine ungewollten Abhängigkeiten
- ✅ [WEITERE KRITERIEN]

Gib konstruktives Feedback mit Verbesserungsvorschlägen.
```

**Beispiel:**
```
👀 Code Review: UserProfile Komponente

Datei: src/components/UserProfile/UserProfile.tsx

Prüfe auf:
- ✅ Entspricht DEVELOPMENT.md Richtlinien
- ✅ Modulare Struktur eingehalten
- ✅ Single Responsibility
- ✅ Type Safety
- ✅ Keine ungewollten Abhängigkeiten
- ✅ Performance Optimierungen möglich
- ✅ Accessibility

Gib konstruktives Feedback mit Verbesserungsvorschlägen.
```

---

## 📝 Notizen

### Empfohlener Workflow für neue Projekte:

1. **Start:** `Session Start` Template
2. **Setup:** Erste Komponenten mit `Neue Feature/Komponente`
3. **Development:** Mix aus `Standard Prompt` und `Komponenten-Erstellung`
4. **Testing:** `Test-Erstellung` für jede Komponente
5. **Review:** `Code Review` vor größeren Commits
6. **Docs:** `Dokumentation` am Ende

### Wichtige Regeln:

- ⚠️ IMMER mit "Session Start" beginnen bei neuer Session
- 📋 DEVELOPMENT.md ist die Bibel - immer referenzieren
- 🎯 Scope klar definieren - verhindert ungewollte Änderungen
- 🧪 Tests nicht vergessen!
- 📚 Komplexe Features dokumentieren

---

**Version:** 1.0  
**Letzte Aktualisierung:** 2025-09-30