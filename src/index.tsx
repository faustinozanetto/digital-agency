import React from 'react';
import App from 'modules/app/components/app';
import { createRoot, hydrateRoot } from 'react-dom/client';
import 'tailwindcss/tailwind.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

if (rootElement?.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
