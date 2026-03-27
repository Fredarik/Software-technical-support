import React from 'react';
import { handleError } from '../utils/errorHandler';

/**
 * React Error Boundary компонент.
 * Гарантовано перехоплює помилки рендерингу.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Вказуємо, що сталась помилка 
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Логуємо помилку з контекстом рендерингу
    handleError(error, 'ReactErrorBoundary');
    // Можна також додати додаткове логування стану 
    console.error('React Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Можна повернути будь-який кастомний UI
      return (
        <div style={{ padding: '2rem', textAlign: 'center', background: '#fef2f2', border: '1px solid #ef4444', borderRadius: '8px' }}>
          <h1 style={{ color: '#b91c1c' }}>Упс! Щось пішло не так.</h1>
          <p>Ми вже працюємо над виправленням. Спробуйте оновити сторінку пізніше.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{ padding: '0.5rem 1rem', background: '#b91c1c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Оновити сторінку
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
