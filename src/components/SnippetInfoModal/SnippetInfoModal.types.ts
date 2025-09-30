/**
 * Type definitions for SnippetInfoModal component
 * Displays detailed documentation for a snippet
 */

import type { Snippet } from '@/types/snippet.types';

export interface SnippetInfoModalProps {
  snippet: Snippet | null;
  isOpen: boolean;
  onClose: () => void;
}