import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/sora';
import '@fontsource-variable/inter';
import './styles/variables.css';
import './styles/global.css';
import App from './App';

// Ativa as animações de reveal apenas quando o JS está disponível
document.documentElement.classList.add('js');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
