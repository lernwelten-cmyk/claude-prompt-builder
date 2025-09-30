/**
 * DocumentList Component
 *
 * Displays a list of documents with search, category filter, and actions.
 * 30% width in desktop layout.
 */

import { useState, useMemo } from 'react';
import type { DocumentCategory } from '@/types/document.types';
import { DOCUMENT_CATEGORIES } from '@/types/document.types';
import { documentStorage } from '@/utils/documentStorage';
import type { DocumentListProps } from './DocumentManager.types';
import { formatRelativeTime } from './helpers';

type FilterCategory = DocumentCategory | 'all';

const CATEGORY_FILTERS: Array<{ value: FilterCategory; label: string; icon: string }> = [
  { value: 'all', label: 'Alle', icon: '📚' },
  { value: 'guidelines', label: 'Richtlinien', icon: '📋' },
  { value: 'templates', label: 'Templates', icon: '📄' },
  { value: 'standards', label: 'Standards', icon: '⚙️' },
  { value: 'other', label: 'Sonstiges', icon: '📁' },
];

export const DocumentList: React.FC<DocumentListProps> = ({
  documents,
  selectedId,
  onSelect,
  onCreate,
  onDelete,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');

  // Filter documents
  const filteredDocuments = useMemo(() => {
    let filtered = documents;

    // Search filter
    if (searchQuery.trim()) {
      filtered = documentStorage.search(searchQuery);
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((doc) => doc.category === selectedCategory);
    }

    return filtered;
  }, [documents, searchQuery, selectedCategory]);

  const handleDeleteClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900">
      {/* Header with Create Button */}
      <div className="p-3 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={onCreate}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors font-medium text-sm flex items-center justify-center gap-2"
        >
          <span>➕</span>
          <span>Neues Dokument</span>
        </button>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-gray-200 dark:border-gray-700">
        <input
          type="text"
          placeholder="Suchen..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category Filters */}
      <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex flex-wrap gap-2">
        {CATEGORY_FILTERS.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setSelectedCategory(filter.value)}
            className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
              selectedCategory === filter.value
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {filter.icon} {filter.label}
          </button>
        ))}
      </div>

      {/* Document List */}
      <div className="flex-1 overflow-y-auto">
        {filteredDocuments.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center text-gray-500 dark:text-gray-400">
            <div className="text-4xl mb-2">📄</div>
            <p className="text-sm">
              {documents.length === 0
                ? 'Noch keine Dokumente'
                : 'Keine Dokumente gefunden'}
            </p>
          </div>
        ) : (
          <div className="p-2 space-y-1">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                onClick={() => onSelect(doc.id)}
                className={`group relative p-3 rounded-lg cursor-pointer transition-all ${
                  selectedId === doc.id
                    ? 'bg-blue-50 border-2 border-blue-500 dark:bg-blue-900/30 dark:border-blue-400'
                    : 'bg-white border border-gray-200 hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600'
                }`}
              >
                <div className="flex items-start gap-2">
                  {/* Category Icon */}
                  <span className="text-lg flex-shrink-0">
                    {DOCUMENT_CATEGORIES[doc.category].icon}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Title and Timestamp */}
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 line-clamp-1">
                        {doc.title}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">
                        {formatRelativeTime(doc.updatedAt)}
                      </span>
                    </div>

                    {/* Content Preview */}
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                      {doc.content.substring(0, 50)}
                      {doc.content.length > 50 && '...'}
                    </p>
                  </div>
                </div>

                {/* Delete Button (visible on hover) */}
                <button
                  onClick={(e) => handleDeleteClick(doc.id, e)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 rounded transition-all"
                  aria-label="Dokument löschen"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};