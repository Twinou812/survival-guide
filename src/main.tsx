import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Capacitor } from '@capacitor/core';
import { App as CapApp } from '@capacitor/app';
import { App } from './App';
import { FamilyProvider } from './calc/family';
import { SettingsProvider } from './settings';
import './styles.css';

if (Capacitor.isNativePlatform()) {
  // Android back button: go back a screen, or close the app from the start.
  CapApp.addListener('backButton', ({ canGoBack }) => {
    if (canGoBack) window.history.back();
    else CapApp.exitApp();
  });
} else if ('serviceWorker' in navigator && import.meta.env.PROD) {
  // Website only: save every file for offline use after the first visit.
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { scope: './' }).catch(() => {
      /* offline caching unavailable in this browser; the site still works online */
    });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsProvider>
      <FamilyProvider>
        <App />
      </FamilyProvider>
    </SettingsProvider>
  </StrictMode>,
);
