import { useState, useEffect, useMemo } from 'react';
import { SNIPPETS } from '@/constants/snippets';
import { SnippetSelector } from '@/components/SnippetSelector';
import { DynamicForm } from '@/components/DynamicForm';
import { PromptPreview } from '@/components/PromptPreview';
import { InstallPrompt } from '@/components/InstallPrompt';

function App() {
  // Dark Mode State (from localStorage)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  // Snippet Selection State
  const [selectedSnippetId, setSelectedSnippetId] = useState<string | null>(
    null
  );

  // Form Values State
  const [formValues, setFormValues] = useState<
    Record<string, string | string[]>
  >({});

  // Copy State
  const [isCopied, setIsCopied] = useState(false);

  // Get selected snippet
  const selectedSnippet = useMemo(
    () => SNIPPETS.find((s) => s.id === selectedSnippetId) || null,
    [selectedSnippetId]
  );

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  // Handle snippet selection (reset form values)
  const handleSnippetSelect = (snippetId: string) => {
    setSelectedSnippetId(snippetId);
    setFormValues({});
    setIsCopied(false);

    // Initialize form values with default values
    const snippet = SNIPPETS.find((s) => s.id === snippetId);
    if (snippet) {
      const initialValues: Record<string, string | string[]> = {};
      snippet.placeholders.forEach((placeholder) => {
        if (placeholder.type === 'multiline') {
          initialValues[placeholder.id] = [''];
        } else {
          initialValues[placeholder.id] = placeholder.defaultValue || '';
        }
      });
      setFormValues(initialValues);
    }
  };

  // Handle form value changes
  const handleFormChange = (id: string, value: string | string[]) => {
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle copy to clipboard
  const handleCopy = async () => {
    if (!selectedSnippet) return;

    try {
      await navigator.clipboard.writeText(
        selectedSnippet.template.replace(
          /\{\{(\w+)\}\}/g,
          (_, key) => {
            const value = formValues[key];
            if (Array.isArray(value)) {
              return value
                .filter((item) => item.trim() !== '')
                .map((item) => `- ${item}`)
                .join('\n');
            }
            return value || '';
          }
        )
      );

      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  // Handle reset
  const handleReset = () => {
    setSelectedSnippetId(null);
    setFormValues({});
    setIsCopied(false);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <span>🤖</span>
            <span>Claude Prompt Builder</span>
          </h1>

          <div className="flex items-center gap-4">
            {selectedSnippetId && (
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                aria-label="Zurücksetzen"
              >
                ↺ Reset
              </button>
            )}

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              aria-label="Dark Mode umschalten"
            >
              <span className="text-2xl">{isDarkMode ? '☀️' : '🌙'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Snippet Selector */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Snippet auswählen</h2>
          <SnippetSelector
            snippets={SNIPPETS}
            selectedSnippetId={selectedSnippetId}
            onSnippetSelect={handleSnippetSelect}
          />
        </section>

        {/* Two Column Layout (Form + Preview) */}
        {selectedSnippet && (
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Dynamic Form */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Eingaben</h2>
              <DynamicForm
                placeholders={selectedSnippet.placeholders}
                values={formValues}
                onChange={handleFormChange}
              />
            </div>

            {/* Right Column: Prompt Preview */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Vorschau</h2>
              <PromptPreview
                template={selectedSnippet.template}
                values={formValues}
                onCopy={handleCopy}
                isCopied={isCopied}
              />
            </div>
          </section>
        )}
      </main>

      {/* PWA Install Prompt */}
      <InstallPrompt />
    </div>
  );
}

export default App;