/**
 * Document Storage Utility
 *
 * Handles CRUD operations for documents in localStorage.
 * Object-based API for managing document data.
 */

import type { Document, DocumentCategory } from '@/types/document.types';

// LocalStorage Key
const STORAGE_KEY = 'claude-prompt-builder-documents';

/**
 * Generate a unique ID for documents (simple UUID)
 */
function generateId(): string {
  return `doc-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Get current ISO timestamp
 */
function getTimestamp(): string {
  return new Date().toISOString();
}

/**
 * Document Storage API
 */
export const documentStorage = {
  /**
   * Get all documents from localStorage (sorted by updatedAt desc)
   */
  getAll: (): Document[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      const documents = data ? JSON.parse(data) : [];

      // Sort by updatedAt (newest first)
      return documents.sort(
        (a: Document, b: Document) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
    } catch (error) {
      console.error('Failed to get documents from localStorage:', error);
      return [];
    }
  },

  /**
   * Get a single document by ID
   */
  getById: (id: string): Document | null => {
    const documents = documentStorage.getAll();
    return documents.find((doc) => doc.id === id) || null;
  },

  /**
   * Get documents filtered by category
   */
  getByCategory: (category: DocumentCategory): Document[] => {
    const documents = documentStorage.getAll();
    return documents.filter((doc) => doc.category === category);
  },

  /**
   * Save document (create if no id, update if id exists)
   */
  save: (
    document: Omit<Document, 'id' | 'createdAt' | 'updatedAt'> | Document
  ): Document => {
    const documents = documentStorage.getAll();
    const now = getTimestamp();

    // Check if document has id (update) or not (create)
    if ('id' in document && document.id) {
      // Update existing document
      const index = documents.findIndex((doc) => doc.id === document.id);

      if (index !== -1) {
        documents[index] = {
          ...documents[index],
          ...document,
          updatedAt: now,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(documents));
        return documents[index];
      }
    }

    // Create new document
    const newDocument: Document = {
      ...(document as Omit<Document, 'id' | 'createdAt' | 'updatedAt'>),
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    };

    documents.push(newDocument);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(documents));
    return newDocument;
  },

  /**
   * Delete a document by ID
   */
  delete: (id: string): void => {
    const documents = documentStorage.getAll();
    const filtered = documents.filter((doc) => doc.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  },

  /**
   * Delete all documents
   */
  deleteAll: (): void => {
    localStorage.removeItem(STORAGE_KEY);
  },

  /**
   * Search documents by title or content
   */
  search: (query: string): Document[] => {
    if (!query.trim()) {
      return documentStorage.getAll();
    }

    const documents = documentStorage.getAll();
    const lowerQuery = query.toLowerCase();

    return documents.filter(
      (doc) =>
        doc.title.toLowerCase().includes(lowerQuery) ||
        doc.content.toLowerCase().includes(lowerQuery)
    );
  },

  /**
   * Export all documents as JSON
   */
  export: (): string => {
    const documents = documentStorage.getAll();
    return JSON.stringify(documents, null, 2);
  },

  /**
   * Import documents from JSON
   */
  import: (jsonString: string, merge: boolean = false): boolean => {
    try {
      const imported = JSON.parse(jsonString) as Document[];

      if (!Array.isArray(imported)) {
        throw new Error('Invalid JSON format');
      }

      // Validate structure
      const isValid = imported.every(
        (doc) =>
          doc.id &&
          doc.title &&
          doc.content !== undefined &&
          doc.category &&
          doc.createdAt &&
          doc.updatedAt
      );

      if (!isValid) {
        throw new Error('Invalid document structure');
      }

      if (merge) {
        const existing = documentStorage.getAll();
        const merged = [...existing, ...imported];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(imported));
      }

      return true;
    } catch (error) {
      console.error('Failed to import documents:', error);
      return false;
    }
  },
};