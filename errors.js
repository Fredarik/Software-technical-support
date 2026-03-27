/**
 * Кастомний клас помилок для додатка.
 * Додає унікальний ID та контекстуальну інформацію.
 */
export class AppError extends Error {
  constructor(message, options = {}) {
    super(message);
    this.name = 'AppError';

    // Унікальний код помилки 
    this.code = options.code || 'ERR_UNKNOWN';

    // Контекстна інформація
    this.context = options.context || {};

    // Час виникнення
    this.timestamp = new Date().toISOString();

    // Унікальний ID інциденту для пошуку в логах
    this.id = `err_${Math.random().toString(36).substr(2, 9)}`;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}
