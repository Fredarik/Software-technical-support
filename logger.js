/**
 * Проста та гнучка система логування для фронтенд-проекту.
 * Рівні логування: DEBUG, INFO, WARNING, ERROR, CRITICAL
 */

const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARNING: 2,
  ERROR: 3,
  CRITICAL: 4,
};

// Задаємо поточний рівень логування
const CURRENT_LOG_LEVEL = import.meta.env.MODE === 'production' ? LOG_LEVELS.WARNING : LOG_LEVELS.DEBUG;

class Logger {
  constructor(moduleName) {
    this.moduleName = moduleName;
  }

  formatMessage(level, message) {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level}] [${this.moduleName}]: ${message}`;
  }

  log(level, message, data = null) {
    if (LOG_LEVELS[level] >= CURRENT_LOG_LEVEL) {
      const formatted = this.formatMessage(level, message);

      switch (level) {
        case 'DEBUG':
          console.debug(formatted, data || '');
          break;
        case 'INFO':
          console.info('%c' + formatted, 'color: #2b82d9', data || '');
          break;
        case 'WARNING':
          console.warn(formatted, data || '');
          break;
        case 'ERROR':
          console.error(formatted, data || '');
          break;
        case 'CRITICAL':
          console.error('%c' + formatted, 'background: #ff0000; color: #fff; font-weight: bold', data || '');
          break;
        default:
          console.log(formatted, data || '');
      }
    }
  }

  debug(message, data) { this.log('DEBUG', message, data); }
  info(message, data) { this.log('INFO', message, data); }
  warn(message, data) { this.log('WARNING', message, data); }
  error(message, data) { this.log('ERROR', message, data); }
  critical(message, data) { this.log('CRITICAL', message, data); }
}

export default (moduleName) => new Logger(moduleName);
