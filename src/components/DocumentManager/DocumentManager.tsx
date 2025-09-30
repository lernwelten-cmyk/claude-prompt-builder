/**
 * DocumentManager Component
 *
 * Main component for document management with full-screen modal.
 * 30% List / 70% Editor layout.
 */

import { useState, useEffect } from 'react';
import type { Document, DocumentCategory } from '@/types/document.types';
import { documentStorage } from '@/utils/documentStorage';
import { DocumentList } from './DocumentList';
import { DocumentEditor } from './DocumentEditor';
import type { DocumentManagerProps } from './DocumentManager.types';
import { downloadDocument } from './helpers';

export const DocumentManager: React.FC<DocumentManagerProps> = ({
  isOpen,
  onClose,
}) => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedDocumentId, setSelectedDocumentId] = useState<string | null>(
    null
  );
  const [isEditing, setIsEditing] = useState(false);

  // Load documents when modal opens
  useEffect(() => {
    if (isOpen) {
      refreshDocuments();
    }
  }, [isOpen]);

  // Refresh documents from storage
  const refreshDocuments = () => {
    setDocuments(documentStorage.getAll());
  };

  // Handlers
  const handleCreate = () => {
    setSelectedDocumentId(null);
    setIsEditing(true);
  };

  const handleSelect = (id: string) => {
    setSelectedDocumentId(id);
    setIsEditing(false);
  };

  const handleSave = (
    data: Partial<Document> & {
      title: string;
      content: string;
      category: DocumentCategory;
    }
  ) => {
    const saved = documentStorage.save({
      ...data,
      ...(selectedDocumentId ? { id: selectedDocumentId } : {}),
    });
    setSelectedDocumentId(saved.id);
    setIsEditing(false);
    refreshDocuments();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Dokument wirklich löschen?')) {
      documentStorage.delete(id);
      if (selectedDocumentId === id) {
        setSelectedDocumentId(null);
      }
      refreshDocuments();
    }
  };

  const handleDownload = (doc: Document) => {
    downloadDocument(doc);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (!selectedDocumentId) {
      // Was creating new document - reset selection
      setSelectedDocumentId(null);
    }
  };

  const selectedDocument = selectedDocumentId
    ? documents.find((d) => d.id === selectedDocumentId) || null
    : null;

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4 pointer-events-none">
        <div
          className="w-full h-full md:h-[90vh] md:max-w-[95vw] bg-white dark:bg-gray-900 md:rounded-lg shadow-2xl flex flex-col pointer-events-auto transform transition-transform"
          style={{
            animation: 'slideIn 0.3s ease-out',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <span>📚</span>
              <span>Dokumenten-Verwaltung</span>
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Schließen"
            >
              <span className="text-2xl">✕</span>
            </button>
          </div>

          {/* Content: 30/70 Layout */}
          <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
            {/* Left: Document List (30%) */}
            <div className="w-full md:w-[30%] border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 overflow-hidden">
              <DocumentList
                documents={documents}
                selectedId={selectedDocumentId}
                onSelect={handleSelect}
                onCreate={handleCreate}
                onDelete={handleDelete}
              />
            </div>

            {/* Right: Document Editor (70%) */}
            <div className="flex-1 overflow-hidden">
              <DocumentEditor
                document={selectedDocument}
                isEditing={isEditing}
                onSave={handleSave}
                onCancel={handleCancel}
                onEdit={handleEdit}
                onDownload={handleDownload}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};