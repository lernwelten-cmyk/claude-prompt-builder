/**
 * DynamicForm Component
 *
 * Renders form fields dynamically based on snippet placeholders.
 * Supports text, textarea, select, and multiline (array) inputs.
 */

import { Tooltip } from '@/components/Tooltip';
import type { DynamicFormProps } from './DynamicForm.types';

export const DynamicForm: React.FC<DynamicFormProps> = ({
  placeholders,
  values,
  onChange,
  fieldGuides,
}) => {
  // Handle multiline field changes
  const handleMultilineChange = (id: string, index: number, value: string) => {
    const currentValues = (values[id] as string[]) || [''];
    const newValues = [...currentValues];
    newValues[index] = value;
    onChange(id, newValues);
  };

  // Add new line to multiline field
  const handleAddLine = (id: string) => {
    const currentValues = (values[id] as string[]) || [''];
    onChange(id, [...currentValues, '']);
  };

  // Remove line from multiline field
  const handleRemoveLine = (id: string, index: number) => {
    const currentValues = (values[id] as string[]) || [''];
    if (currentValues.length <= 1) return; // Keep at least one line
    const newValues = currentValues.filter((_, i) => i !== index);
    onChange(id, newValues);
  };

  // If no placeholders, show success message
  if (placeholders.length === 0) {
    return (
      <div className="p-6 text-center bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <p className="text-green-800 dark:text-green-200 font-medium">
          Dieses Snippet benötigt keine Eingaben ✅
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {placeholders.map((placeholder) => {
        // Find field guide for this placeholder
        const guide = fieldGuides?.find((g) => g.fieldId === placeholder.id);

        return (
          <div key={placeholder.id} className="space-y-2">
            {/* Label */}
            <label
              htmlFor={placeholder.id}
              className="block text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              {placeholder.label}
              {placeholder.required && (
                <span className="text-red-500 ml-1" aria-label="Pflichtfeld">
                  *
                </span>
              )}
              {/* Tooltip with Field Guide */}
              {guide && (
                <Tooltip
                  content={
                    <div className="text-sm">
                      <p className="mb-2">{guide.explanation}</p>
                      <p className="font-mono text-xs bg-black/20 p-1 rounded">
                        Beispiel: {guide.example}
                      </p>
                      {guide.tips && (
                        <p className="mt-2 text-yellow-200">💡 {guide.tips}</p>
                      )}
                    </div>
                  }
                >
                  <span className="ml-2 cursor-help text-blue-500 hover:text-blue-600 transition-colors">
                    ℹ️
                  </span>
                </Tooltip>
              )}
            </label>

          {/* Field based on type */}
          {placeholder.type === 'text' && (
            <input
              type="text"
              id={placeholder.id}
              value={(values[placeholder.id] as string) || ''}
              onChange={(e) => onChange(placeholder.id, e.target.value)}
              placeholder={placeholder.placeholder}
              required={placeholder.required}
              aria-required={placeholder.required}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          )}

          {placeholder.type === 'textarea' && (
            <textarea
              id={placeholder.id}
              value={(values[placeholder.id] as string) || ''}
              onChange={(e) => onChange(placeholder.id, e.target.value)}
              placeholder={placeholder.placeholder}
              required={placeholder.required}
              aria-required={placeholder.required}
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-y"
            />
          )}

          {placeholder.type === 'select' && (
            <select
              id={placeholder.id}
              value={(values[placeholder.id] as string) || ''}
              onChange={(e) => onChange(placeholder.id, e.target.value)}
              required={placeholder.required}
              aria-required={placeholder.required}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            >
              <option value="">Bitte auswählen...</option>
              {placeholder.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}

          {placeholder.type === 'multiline' && (
            <div className="space-y-2">
              {((values[placeholder.id] as string[]) || ['']).map(
                (line, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={line}
                      onChange={(e) =>
                        handleMultilineChange(
                          placeholder.id,
                          index,
                          e.target.value
                        )
                      }
                      placeholder={placeholder.placeholder}
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      aria-label={`${placeholder.label} Zeile ${index + 1}`}
                    />
                    {((values[placeholder.id] as string[]) || ['']).length >
                      1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveLine(placeholder.id, index)}
                        className="px-3 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                        aria-label={`Zeile ${index + 1} entfernen`}
                      >
                        ❌
                      </button>
                    )}
                  </div>
                )
              )}
              <button
                type="button"
                onClick={() => handleAddLine(placeholder.id)}
                className="mt-2 px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors text-sm font-medium"
                aria-label="Zeile hinzufügen"
              >
                + Zeile hinzufügen
              </button>
            </div>
          )}
          </div>
        );
      })}
    </div>
  );
};