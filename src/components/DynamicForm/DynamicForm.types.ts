/**
 * Type definitions for DynamicForm component
 */

import type { SnippetPlaceholder, FieldGuideItem } from '@/types/snippet.types';

export interface DynamicFormProps {
  placeholders: SnippetPlaceholder[];
  values: Record<string, string | string[]>;
  onChange: (id: string, value: string | string[]) => void;
  fieldGuides?: FieldGuideItem[]; // Optional field guides for tooltips
}