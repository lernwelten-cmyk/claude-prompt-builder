/**
 * SnippetInfoModal Component
 *
 * Displays detailed documentation for a selected snippet including:
 * - Long description
 * - When to use guidelines
 * - Example use case
 * - Field guide with examples and tips
 */

import { useEffect, useRef } from 'react';
import type { SnippetInfoModalProps } from './SnippetInfoModal.types';

export const SnippetInfoModal: React.FC<SnippetInfoModalProps> = ({
  snippet,
  isOpen,
  onClose,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Focus trap - focus close button when modal opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !snippet) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Content */}
      <div
        className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-lg shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{snippet.icon}</span>
            <h2
              id="modal-title"
              className="text-2xl font-bold text-gray-900 dark:text-gray-100"
            >
              {snippet.name}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Modal schließen"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Section 1: Description */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              📖 Beschreibung
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {snippet.longDescription}
            </p>
          </section>

          {/* Section 2: When to Use */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              🎯 Wann verwenden?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {snippet.whenToUse}
            </p>
          </section>

          {/* Section 3: Use Case */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              💡 Beispiel-Szenario
            </h3>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                {snippet.useCase}
              </p>
            </div>
          </section>

          {/* Section 4: Field Guide (only if fields exist) */}
          {snippet.fieldGuide.length > 0 && (
            <section>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                📋 Feld-Anleitung
              </h3>
              <div className="space-y-5">
                {snippet.fieldGuide.map((field) => (
                  <div
                    key={field.fieldId}
                    className="pb-5 border-b border-gray-200 dark:border-gray-700 last:border-b-0 last:pb-0"
                  >
                    {/* Field Label */}
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {field.fieldId}
                    </h4>

                    {/* Explanation */}
                    <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                      {field.explanation}
                    </p>

                    {/* Example */}
                    <div className="mb-3">
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 block">
                        Beispiel:
                      </span>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-3 font-mono text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                        {field.example}
                      </div>
                    </div>

                    {/* Tips (optional) */}
                    {field.tips && (
                      <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded-r-md p-3">
                        <div className="flex items-start gap-2">
                          <span className="text-lg flex-shrink-0">💡</span>
                          <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                            {field.tips}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};