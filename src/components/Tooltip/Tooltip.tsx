/**
 * Tooltip Component
 *
 * Displays a tooltip on hover (desktop) or click (mobile)
 * with customizable position and content.
 */

import { useState } from 'react';
import type { TooltipProps } from './Tooltip.types';

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  maxWidth = 'xs',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Position classes for tooltip
  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  // Arrow position classes
  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-gray-900 dark:border-t-gray-700',
    bottom:
      'bottom-full left-1/2 -translate-x-1/2 border-b-gray-900 dark:border-b-gray-700',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-gray-900 dark:border-l-gray-700',
    right:
      'right-full top-1/2 -translate-y-1/2 border-r-gray-900 dark:border-r-gray-700',
  };

  // Max width classes for tooltip
  const maxWidthClasses = {
    xs: 'max-w-xs',   // 320px
    sm: 'max-w-sm',   // 384px
    md: 'max-w-md',   // 448px
    lg: 'max-w-lg',   // 512px
    xl: 'max-w-xl',   // 576px
    '2xl': 'max-w-2xl', // 672px
  };

  return (
    <div className="relative inline-block">
      {/* Trigger */}
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible((prev) => !prev)}
        className="inline-block"
      >
        {children}
      </div>

      {/* Tooltip */}
      {isVisible && (
        <div
          className={`absolute z-50 ${positionClasses[position]} pointer-events-none`}
        >
          <div className={`relative bg-gray-900 dark:bg-gray-700 text-white px-3 py-2 rounded-lg shadow-lg ${maxWidthClasses[maxWidth]} animate-in fade-in zoom-in-95 duration-200`}>
            {content}

            {/* Arrow */}
            <div
              className={`absolute w-0 h-0 border-4 border-transparent ${arrowClasses[position]}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};