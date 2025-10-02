/**
 * Snippets Module - Barrel Export
 *
 * Central export point for all snippet modules.
 * Combines all snippet categories into a single SNIPPETS array.
 */

import { Snippet } from '@/types/snippet.types';

// Import all snippet modules
export { START_SNIPPETS } from './start.snippets';
export { DEVELOPMENT_SNIPPETS } from './development.snippets';
export { TECHNICAL_SNIPPETS } from './technical.snippets';
export { WORKFLOW_SNIPPETS } from './workflow.snippets';
export { DESIGN_SNIPPETS } from './design.snippets';
export { ADVANCED_SNIPPETS } from './advanced.snippets';

import { START_SNIPPETS } from './start.snippets';
import { DEVELOPMENT_SNIPPETS } from './development.snippets';
import { TECHNICAL_SNIPPETS } from './technical.snippets';
import { WORKFLOW_SNIPPETS } from './workflow.snippets';
import { DESIGN_SNIPPETS } from './design.snippets';
import { ADVANCED_SNIPPETS } from './advanced.snippets';

/**
 * Combined array of all snippets from all modules
 * Use this for accessing all snippets at once
 */
export const SNIPPETS: Snippet[] = [
  ...START_SNIPPETS,
  ...DEVELOPMENT_SNIPPETS,
  ...TECHNICAL_SNIPPETS,
  ...WORKFLOW_SNIPPETS,
  ...DESIGN_SNIPPETS,
  ...ADVANCED_SNIPPETS,
];
