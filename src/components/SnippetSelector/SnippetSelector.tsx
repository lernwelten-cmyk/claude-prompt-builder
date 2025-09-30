/**
 * SnippetSelector Component
 *
 * Displays all available Claude prompt snippets as clickable cards
 * with category filtering and search functionality.
 */

import { useState, useMemo } from 'react';
import type { Snippet, SnippetCategory } from '@/types/snippet.types';
import type { SnippetSelectorProps } from './SnippetSelector.types';

const CATEGORIES: { value: SnippetCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'Alle' },
  { value: 'start', label: 'Start' },
  { value: 'component', label: 'Komponenten' },
  { value: 'fix', label: 'Bug Fixes' },
  { value: 'refactor', label: 'Refactoring' },
  { value: 'api', label: 'API' },
  { value: 'test', label: 'Tests' },
  { value: 'docs', label: 'Docs' },
  { value: 'other', label: 'Andere' },
];

export const SnippetSelector: React.FC<SnippetSelectorProps> = ({
  snippets,
  selectedSnippetId,
  onSnippetSelect,
  onInfoClick,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<
    SnippetCategory | 'all'
  >('all');

  // Filter snippets based on search and category
  const filteredSnippets = useMemo(() => {
    return snippets.filter((snippet) => {
      const matchesSearch =
        searchQuery === '' ||
        snippet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        snippet.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || snippet.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [snippets, searchQuery, selectedCategory]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    snippetId: string
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSnippetSelect(snippetId);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Search Input */}
      <div className="w-full">
        <input
          type="text"
          placeholder="Snippet suchen..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          aria-label="Snippet durchsuchen"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${
              selectedCategory === category.value
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
            aria-pressed={selectedCategory === category.value}
            aria-label={`Filter nach ${category.label}`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Snippets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSnippets.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">
            Keine Snippets gefunden.
          </div>
        ) : (
          filteredSnippets.map((snippet) => (
            <SnippetCard
              key={snippet.id}
              snippet={snippet}
              isSelected={selectedSnippetId === snippet.id}
              onSelect={() => onSnippetSelect(snippet.id)}
              onKeyDown={(e) => handleKeyDown(e, snippet.id)}
              onInfoClick={() => onInfoClick(snippet)}
            />
          ))
        )}
      </div>
    </div>
  );
};

/**
 * SnippetCard Component
 * Individual card for displaying a single snippet
 */
interface SnippetCardProps {
  snippet: Snippet;
  isSelected: boolean;
  onSelect: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onInfoClick: () => void;
}

const SnippetCard: React.FC<SnippetCardProps> = ({
  snippet,
  isSelected,
  onSelect,
  onKeyDown,
  onInfoClick,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={onKeyDown}
      className={`
        relative p-6 rounded-lg border-2 cursor-pointer transition-all
        focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
        ${
          isSelected
            ? 'border-blue-600 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/20 shadow-lg'
            : 'border-gray-300 bg-white hover:border-gray-400 hover:shadow-md dark:border-gray-600 dark:bg-gray-800 dark:hover:border-gray-500'
        }
      `}
      aria-label={`Snippet auswählen: ${snippet.name}`}
      aria-pressed={isSelected}
    >
      {/* Info Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onInfoClick();
        }}
        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-700 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-all opacity-60 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        aria-label={`Info zu ${snippet.name}`}
        title={`Info zu ${snippet.name}`}
      >
        ℹ️
      </button>

      {/* Icon */}
      <div className="text-5xl mb-4 text-center">{snippet.icon}</div>

      {/* Name */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">
        {snippet.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        {snippet.description}
      </p>

      {/* Category Badge */}
      <div className="mt-4 flex justify-center">
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
          {CATEGORIES.find((cat) => cat.value === snippet.category)?.label ||
            snippet.category}
        </span>
      </div>
    </div>
  );
};