import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import logger from './utils/logger'
import ErrorBoundary from './components/ErrorBoundary'
import { setupGlobalErrorHandlers } from './utils/errorHandler'

// Налаштування глобальних слухачів 
setupGlobalErrorHandlers();

const bootstrapLogger = logger('Main');
bootstrapLogger.info('Ініціалізація та запуск React-додатка...');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
