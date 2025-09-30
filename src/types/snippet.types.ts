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
 * Snippet Type - Definition eines Prompt-Templates
 */
export interface Snippet {
  id: string;
  name: string;
  description: string;
  category: SnippetCategory;
  icon: string;
  template: string;
  placeholders: SnippetPlaceholder[];
}