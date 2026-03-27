import logger from './logger';

const errorLogger = logger('ErrorHandler');

/**
 * Централізований обробник помилок.
 * Логування помилок з контекстом, ID та кодами.
 */
export const handleError = (error, source = 'UnknownSource') => {
  const isAppError = error.id && error.code;

  const errorDetails = {
    id: isAppError ? error.id : `legacy_err_${Date.now()}`,
    code: isAppError ? error.code : 'ERR_LEGACY',
    message: error.message,
    source: source,
    timestamp: isAppError ? error.timestamp : new Date().toISOString(),
    context: isAppError ? (error.context || {}) : {},
    stack: error.stack
  };

  // Виводимо структурований лог
  if (['ERR_RENDER', 'ERR_SECURITY'].includes(errorDetails.code)) {
    errorLogger.critical(`[${errorDetails.code}] [${errorDetails.id}]: ${errorDetails.message}`, errorDetails);
  } else {
    errorLogger.error(`[${errorDetails.code}] [${errorDetails.id}]: ${errorDetails.message}`, errorDetails);
  }

  // Тут можна додати відправку на сервер 
  return errorDetails;
};

// Глобальне перехоплення непередбачених помилок
export const setupGlobalErrorHandlers = () => {
  window.addEventListener('error', (event) => {
    handleError(event.error || new Error(event.message), 'WindowGlobalError');
  });

  window.addEventListener('unhandledrejection', (event) => {
    handleError(event.reason instanceof Error ? event.reason : new Error(String(event.reason)), 'UnhandledRejection');
  });
};
