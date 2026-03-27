import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Team from './components/Team'
import Footer from './components/Footer'
import logger from './utils/logger'

const appLogger = logger('App');

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
      appLogger.debug('Початок симуляції завантаження критичних даних...');

      // Попередження про повільне з'єднання 
      const isSlowConnection = Math.random() > 0.7;
      if (isSlowConnection) {
        appLogger.warn('Виявлено повільне з\'єднання. Завантаження може тривати довше.');
      }

      try {
        const success = Math.random() > 0.2;
        if (success) {
          appLogger.info('Дані успішно отримані та оброблені.');
        } else {
          throw new Error('Помилка мережі при спробі отримати дані.');
        }
      } catch (err) {
        appLogger.error('Критична помилка операції з даними!', { details: err.message });
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
