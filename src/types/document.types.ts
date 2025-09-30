/**
 * Type Definitions for Document Management System
 *
 * Defines the structure for documents that users can create
 * to store project guidelines, templates, and standards.
 */

/**
 * Document Category Types
 */
export type DocumentCategory = 'guidelines' | 'templates' | 'standards' | 'other';

/**
 * Document Type
 */
export interface Document {
  id: string;
  title: string;
  content: string;
  category: DocumentCategory;
  createdAt: string;
  updatedAt: string;
}

/**
 * Helper for UI - Category metadata
 */
export const DOCUMENT_CATEGORIES: Record<
  DocumentCategory,
  { label: string; icon: string }
> = {
  guidelines: { label: 'Projekt-Richtlinien', icon: '📋' },
  templates: { label: 'Templates', icon: '📄' },
  standards: { label: 'Code Standards', icon: '⚙️' },
  other: { label: 'Sonstiges', icon: '📁' },
};