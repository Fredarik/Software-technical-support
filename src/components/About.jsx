export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title reveal">Про <span className="text-gradient">Проєкт</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div className="glass-card reveal delay-1" style={{ padding: '3rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.5rem', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
              🎯
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Мета проєкту</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
              Створення системи для продажу та збору комп'ютерної техніки.
            </p>
          </div>

          <div className="glass-card reveal delay-2" style={{ padding: '3rem' }}>
             <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.5rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              ⚡
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Актуальність</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
              Сучасний ринок потребує ефективних інструментів для зручного підбору комп'ютерних комплектуючих та автоматичної перевірки їх сумісності. Дана система вирішує ці завдання, об'єднуючи каталог товарів, інтерактивний конфігуратор ПК та зручну панель адміністратора. Розробка має важливе практичне значення і буде використовуватися мною в майбутньому як основа для реального комерційного проєкту.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
