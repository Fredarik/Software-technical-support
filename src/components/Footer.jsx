export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--color-border)', padding: '3rem 0', background: 'var(--color-bg)', textAlign: 'center' }}>
      <div className="container">
        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-heading)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
          Сумський Державний Університет
        </h3>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          Факультет електроніки та інформаційних технологій (ЕлІТ)
        </p>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', fontSize: '0.9rem' }}>
          Email: <a href="mailto:student@sumdu.edu.ua" style={{ color: 'var(--color-accent-1)' }}>fedorov.vladyslav@student.sumdu.edu.ua</a><br />
          <a href="#" style={{ color: 'var(--color-accent-2)' }}>Переглянути повний текст бакалаврської роботи</a>
        </p>
        <div style={{ width: '50px', height: '2px', background: 'var(--color-border)', margin: '0 auto 2rem auto' }}></div>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Федоров Владислав Сергійович.
        </p>
      </div>
    </footer>
  );
}
