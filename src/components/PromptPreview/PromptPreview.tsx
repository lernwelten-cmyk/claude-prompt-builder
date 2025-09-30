/**
 * PromptPreview Component
 *
 * Displays the generated prompt with placeholder replacements
 * and provides copy functionality.
 */

import { useEffect } from 'react';
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
  // Handle keyboard shortcut (Ctrl+Enter to copy)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'Enter') {
        event.preventDefault();
        onCopy();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onCopy]);

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

  const generatedPrompt = generatePrompt(template, values);

  return (
    <div className="h-full flex flex-col space-y-4">
      {/* Preview Area */}
      <div className="flex-1 overflow-auto p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600">
        <pre className="font-mono text-sm text-gray-900 dark:text-gray-100 whitespace-pre-wrap break-words">
          {generatedPrompt}
        </pre>
      </div>

      {/* Copy Button and Keyboard Hint */}
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

        <button
          onClick={onCopy}
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
  );
};