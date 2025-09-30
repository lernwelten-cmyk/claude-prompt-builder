/**
 * InstallPrompt Component
 *
 * Shows a banner prompting users to install the PWA.
 * Uses the beforeinstallprompt event for install functionality.
 */

import { useState, useEffect } from 'react';
import type { InstallPromptProps } from './InstallPrompt.types';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const InstallPrompt: React.FC<InstallPromptProps> = ({ onClose }) => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if already dismissed
    const dismissed = localStorage.getItem('installPromptDismissed');
    if (dismissed === 'true') {
      return;
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    await deferredPrompt.prompt();

    // Wait for user choice
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }

    // Clear the prompt
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('installPromptDismissed', 'true');
    setShowPrompt(false);
    onClose?.();
  };

  if (!showPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-slide-up">
      <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-lg shadow-xl p-4 flex items-start gap-4">
        {/* Icon */}
        <div className="text-3xl flex-shrink-0">📱</div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-bold mb-1">App installieren</h3>
          <p className="text-sm text-blue-100 mb-3">
            Installiere Claude Prompt Builder für schnellen Zugriff und
            Offline-Nutzung!
          </p>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleInstallClick}
              className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="App installieren"
            >
              Installieren
            </button>
            <button
              onClick={handleDismiss}
              className="px-4 py-2 bg-blue-700 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Banner schließen"
            >
              Nicht jetzt
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="text-white hover:text-blue-100 transition-colors focus:outline-none"
          aria-label="Schließen"
        >
          ✕
        </button>
      </div>
    </div>
  );
};