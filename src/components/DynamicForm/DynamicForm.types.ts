/**
 * Type definitions for DynamicForm component
 */

import type { SnippetPlaceholder } from '@/types/snippet.types';

export interface DynamicFormProps {
  placeholders: SnippetPlaceholder[];
  values: Record<string, string | string[]>;
  onChange: (id: string, value: string | string[]) => void;
}