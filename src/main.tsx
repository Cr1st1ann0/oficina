import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/barlow/300.css';
import '@fontsource/barlow/400.css';
import '@fontsource/barlow/500.css';
import '@fontsource/michroma/400.css';
import './styles/variables.css';
import './styles/site.css';
import './styles/global.css';
import App from './App';

// Ativa as animações de reveal apenas quando o JS está disponível
document.documentElement.classList.add('js');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
