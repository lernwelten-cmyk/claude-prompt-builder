/**
 * Type definitions for PromptPreview component
 */

export interface PromptPreviewProps {
  template: string;
  values: Record<string, string | string[]>;
  onCopy: () => void;
  isCopied: boolean;
}