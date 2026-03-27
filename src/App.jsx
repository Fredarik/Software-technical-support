import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Team from './components/Team'
import Footer from './components/Footer'
import logger from './utils/logger'

const appLogger = logger('App');

import { AppError } from './utils/errors'
import { handleError } from './utils/errorHandler'

function App() {
  useEffect(() => {
    appLogger.info('Компонент App змонтовано (Mount)');

    // Симуляція перевірки критичної конфігурації
    const configExists = true;
    if (!configExists) {
      appLogger.critical('ВІДСУТНЯ КРИТИЧНА КОНФІГУРАЦІЯ! Додаток може працювати некоректно.');
    }

    // Симуляція завантаження даних
    const simulationFetch = async () => {
      const startTime = Date.now();
      appLogger.debug('Початок симуляції завантаження критичних даних...');

      // Попередження про повільне з'єднання
      const isSlowConnection = Math.random() > 0.7;
      if (isSlowConnection) {
        appLogger.warn('Виявлено повільне з\'єднання. Завантаження може тривати довше.');
      }

      try {
        const success = Math.random() > 0.3;
        if (success) {
          appLogger.info('Дані успішно отримані та оброблені.');
        } else {
          // Кидаємо деталізовану помилку
          throw new AppError('Помилка завантаження товарів конфігуратора', {
            code: 'ERR_FETCH_DATA',
            context: {
              component: 'App',
              endpoint: '/api/v1/data',
              loadTime: Date.now() - startTime,
              retryAttempt: 1
            }
          });
        }
      } catch (err) {
        // Логуємо через централізований обробник
        handleError(err, 'App/simulationFetch');
      }
    };

    simulationFetch();

    return () => {
      appLogger.info('Компонент App демонтовано (Unmount)');
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Team />
      <Footer />
    </>
  )
}

export default App
