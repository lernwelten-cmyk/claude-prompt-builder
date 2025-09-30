/**
 * Type definitions for SnippetSelector component
 */

import type { Snippet } from '@/types/snippet.types';

export interface SnippetSelectorProps {
  snippets: Snippet[];
  selectedSnippetId: string | null;
  onSnippetSelect: (snippetId: string) => void;
  onInfoClick: (snippet: Snippet) => void;
}