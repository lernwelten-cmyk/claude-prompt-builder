/**
 * Type definitions for DocumentManager components
 */

import type { Document, DocumentCategory } from '@/types/document.types';

export interface DocumentManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface DocumentListProps {
  documents: Document[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onCreate: () => void;
  onDelete: (id: string) => void;
}

export interface DocumentEditorProps {
  document: Document | null;
  isEditing: boolean;
  onSave: (
    doc: Partial<Document> & {
      title: string;
      content: string;
      category: DocumentCategory;
    }
  ) => void;
  onCancel: () => void;
  onEdit: () => void;
  onDownload: (doc: Document) => void;
}