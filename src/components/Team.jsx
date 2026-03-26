export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <h2 className="section-title reveal">Виконавці <span className="text-gradient">та Керівництво</span></h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          
          <div className="glass-card reveal delay-1" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem', textAlign: 'center' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--color-surface-2)', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', border: '2px solid rgba(0, 242, 254, 0.3)' }}>
              👨‍💻
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Федоров Владислав Сергійович</h3>
            <p style={{ color: 'var(--color-accent-1)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '500' }}>Студент / Розробник</p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Автор ідеї та повної реалізації системи управління продажами та збіркою ПК.
            </p>
            <a href="mailto:fedorov.vladyslav@student.sumdu.edu.ua" className="btn btn-secondary" style={{ width: '100%' }}>
              Зв'язатися (Email)
            </a>
          </div>

          <div className="glass-card reveal delay-2" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem', textAlign: 'center' }}>
             <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--color-surface-2)', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', border: '2px solid rgba(151, 51, 238, 0.3)' }}>
              👩‍🏫
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Барченко Наталія Леонідівна</h3>
            <p style={{ color: 'var(--color-accent-purple)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '500' }}>Науковий Керівник</p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Керівник бакалаврської роботи та наставник проєкту.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
