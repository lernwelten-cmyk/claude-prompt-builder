/**
 * DocumentEditor Component
 *
 * Editor for viewing and editing documents with markdown support.
 * 70% width in desktop layout.
 */

import { useState, useEffect } from 'react';
import type { DocumentCategory } from '@/types/document.types';
import { DOCUMENT_CATEGORIES } from '@/types/document.types';
import type { DocumentEditorProps } from './DocumentManager.types';
import { formatRelativeTime, renderMarkdown } from './helpers';

type EditorTab = 'editor' | 'preview';

export const DocumentEditor: React.FC<DocumentEditorProps> = ({
  document,
  isEditing,
  onSave,
  onCancel,
  onEdit,
  onDownload,
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<DocumentCategory>('other');
  const [activeTab, setActiveTab] = useState<EditorTab>('editor');

  // Initialize form when document changes or editing starts
  useEffect(() => {
    if (document) {
      setTitle(document.title);
      setContent(document.content);
      setCategory(document.category);
    } else {
      // New document
      setTitle('');
      setContent('');
      setCategory('other');
    }
  }, [document, isEditing]);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      alert('Titel und Inhalt dürfen nicht leer sein.');
      return;
    }

    onSave({
      ...(document?.id ? { id: document.id } : {}),
      title: title.trim(),
      content: content.trim(),
      category,
    });
  };

  const isSaveDisabled = !title.trim() || !content.trim();

  // Empty state - no document selected
  if (!document && !isEditing) {
    return (
      <div className="flex items-center justify-center h-full p-8 bg-white dark:bg-gray-900">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <div className="text-4xl mb-4">📝</div>
          <p className="text-lg">← Wähle ein Dokument aus</p>
          <p className="text-sm mt-2">oder erstelle ein neues Dokument</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900">
      {isEditing ? (
        /* EDIT MODE */
        <>
          {/* Header - Edit Mode */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 space-y-3">
            {/* Title Input */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Dokumenten-Titel"
              className="w-full px-4 py-2 text-2xl font-bold rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Category Select */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as DocumentCategory)}
              className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.entries(DOCUMENT_CATEGORIES).map(([key, { label, icon }]) => (
                <option key={key} value={key}>
                  {icon} {label}
                </option>
              ))}
            </select>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab('editor')}
                className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                  activeTab === 'editor'
                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                📝 Editor
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                  activeTab === 'preview'
                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                👁️ Vorschau
              </button>
            </div>
          </div>

          {/* Content Area - Edit Mode */}
          <div className="flex-1 overflow-y-auto p-4">
            {activeTab === 'editor' ? (
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Markdown-Content hier eingeben..."
                className="w-full h-96 p-4 font-mono text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            ) : (
              <div
                className="prose dark:prose-invert max-w-none whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: renderMarkdown(content || '*Keine Vorschau verfügbar*'),
                }}
              />
            )}
          </div>

          {/* Footer - Edit Mode */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-2 justify-end">
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              ❌ Abbrechen
            </button>
            <button
              onClick={handleSave}
              disabled={isSaveDisabled}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isSaveDisabled
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
                  : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
              }`}
            >
              💾 Speichern
            </button>
          </div>
        </>
      ) : (
        /* VIEW MODE */
        <>
          {/* Header - View Mode */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {document?.title}
            </h1>

            <div className="flex items-center gap-4 text-sm">
              {/* Category Badge */}
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                {document &&
                  `${DOCUMENT_CATEGORIES[document.category].icon} ${DOCUMENT_CATEGORIES[document.category].label}`}
              </span>

              {/* Timestamps */}
              {document && (
                <>
                  <span className="text-gray-600 dark:text-gray-400">
                    Erstellt: {formatRelativeTime(document.createdAt)}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    Geändert: {formatRelativeTime(document.updatedAt)}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Content Area - View Mode */}
          <div className="flex-1 overflow-y-auto p-4">
            <div
              className="prose dark:prose-invert max-w-none whitespace-pre-wrap font-mono"
              dangerouslySetInnerHTML={{
                __html: renderMarkdown(document?.content || ''),
              }}
            />
          </div>

          {/* Footer - View Mode */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-2 justify-end">
            {document && (
              <>
                <button
                  onClick={() => onDownload(document)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  ⬇️ Download
                </button>
                <button
                  onClick={onEdit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                >
                  ✏️ Bearbeiten
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};