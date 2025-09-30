/**
 * Type Definitions for Claude Prompt Builder
 *
 * Defines the structure of snippets and their components
 * according to DEVELOPMENT.md guidelines.
 */

/**
 * Placeholder Type - für dynamische Formular-Felder
 */
export interface SnippetPlaceholder {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'multiline';
  required: boolean;
  placeholder?: string;
  options?: string[];
  defaultValue?: string;
}

/**
 * Snippet Category Types
 */
export type SnippetCategory =
  | 'start'
  | 'component'
  | 'fix'
  | 'refactor'
  | 'api'
  | 'test'
  | 'docs'
  | 'other';

/**
 * Field Guide Item - Erklärt ein einzelnes Formular-Feld
 */
export interface FieldGuideItem {
  fieldId: string; // Entspricht placeholder.id
  explanation: string; // Was soll hier eingetragen werden?
  example: string; // Konkretes Beispiel
  tips?: string; // Optionale Tipps
}

/**
 * Snippet Type - Definition eines Prompt-Templates
 */
export interface Snippet {
  id: string;
  name: string;
  description: string; // Kurze Beschreibung
  category: SnippetCategory;
  icon: string;
  template: string;
  placeholders: SnippetPlaceholder[];

  // Erweiterte Dokumentation
  longDescription: string; // Ausführliche Beschreibung (2-3 Sätze)
  whenToUse: string; // Wann sollte dieser Prompt verwendet werden?
  useCase: string; // Konkretes Fallbeispiel / Anwendungsfall
  fieldGuide: FieldGuideItem[]; // Anleitung für jedes Formular-Feld
}