/**
 * PromptPreview Component
 *
 * Displays the generated prompt with placeholder replacements
 * and provides copy functionality with local edit support.
 */

import { useEffect, useState } from 'react';
import type { PromptPreviewProps } from './PromptPreview.types';

/**
 * Generates the final prompt by replacing placeholders with actual values
 */
const generatePrompt = (
  template: string,
  values: Record<string, string | string[]>
): string => {
  let result = template;

  // Replace each placeholder with its corresponding value
  Object.entries(values).forEach(([key, value]) => {
    const placeholder = `{{${key}}}`;

    if (Array.isArray(value)) {
      // For arrays: join with newlines and add "- " prefix to each non-empty item
      const formattedValue = value
        .filter((item) => item.trim() !== '')
        .map((item) => `- ${item}`)
        .join('\n');
      result = result.replace(placeholder, formattedValue);
    } else {
      // For strings: direct replacement
      result = result.replace(placeholder, value);
    }
  });

  return result;
};

export const PromptPreview: React.FC<PromptPreviewProps> = ({
  template,
  values,
  onCopy,
  isCopied,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState('');

  // Generate prompt whenever template or values change
  const generatedPrompt = generatePrompt(template, values);

  // Update edited text when generated prompt changes
  useEffect(() => {
    setEditedText(generatedPrompt);
  }, [generatedPrompt]);

  // Handle copy - use edited text if in edit mode, otherwise use generated
  const handleCopy = () => {
    const textToCopy = isEditing ? editedText : generatedPrompt;
    navigator.clipboard.writeText(textToCopy);
    onCopy();
  };

  // Handle keyboard shortcut (Ctrl+Enter to copy)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'Enter') {
        event.preventDefault();
        handleCopy();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEditing, editedText, generatedPrompt]);

  // If no template, show placeholder
  if (!template) {
    return (
      <div className="h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Wähle ein Snippet aus, um die Vorschau zu sehen...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col space-y-4">
      {/* Action Buttons - Oben */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <span className="hidden sm:inline">💡</span>
          <span>
            Tastenkombination:{' '}
            <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 font-mono text-xs">
              Strg+Enter
            </kbd>
          </span>
        </div>

        <div className="flex gap-2">
          {/* Edit/Save Button */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-6 py-3 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 bg-gray-600 text-white hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600"
            aria-label={isEditing ? 'Bearbeitung beenden' : 'Prompt bearbeiten'}
          >
            <span className="flex items-center gap-2">
              <span>{isEditing ? '👁️' : '✏️'}</span>
              <span>{isEditing ? 'Vorschau' : 'Bearbeiten'}</span>
            </span>
          </button>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            disabled={isCopied}
            className={`
              px-6 py-3 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
              ${
                isCopied
                  ? 'bg-green-500 text-white cursor-default'
                  : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
              }
            `}
            aria-label={isCopied ? 'Prompt wurde kopiert' : 'Prompt kopieren'}
          >
            {isCopied ? (
              <span className="flex items-center gap-2">
                <span>✓</span>
                <span>Kopiert!</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span>📋</span>
                <span>Kopieren</span>
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Preview/Edit Area */}
      <div className="flex-1 overflow-auto p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600">
        {isEditing ? (
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="w-full h-full min-h-[400px] font-mono text-sm text-gray-900 dark:text-gray-100 bg-transparent border-none focus:outline-none resize-none"
            placeholder="Bearbeite deinen Prompt hier..."
            aria-label="Prompt bearbeiten"
          />
        ) : (
          <pre className="font-mono text-sm text-gray-900 dark:text-gray-100 whitespace-pre-wrap break-words">
            {editedText}
          </pre>
        )}
      </div>
    </div>
  );
};