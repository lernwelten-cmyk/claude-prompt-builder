/**
 * Type definitions for Tooltip component
 */

export interface TooltipProps {
  content: string | React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}