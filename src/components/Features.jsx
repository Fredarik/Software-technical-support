export default function Features() {
  const features = [
    {
      icon: '⚙️',
      title: 'Інтерактивний Конфігуратор',
      desc: 'Візуальний інструмент розрахунку та збірки ПК за параметрами сумісності процесорів, материнських плат та інших компонентів.'
    },
    {
      icon: '🔍',
      title: 'Розумний Каталог',
      desc: 'Зручні фільтри, швидкий пошук та детальне відображення характеристик комп\'ютерної техніки з актуальними цінами.'
    },
    {
      icon: '📊',
      title: 'CRM для Адміністратора',
      desc: 'Зручна панель управління замовленнями, клієнтською базою та запасами товарів на складі в режимі реального часу.'
    }
  ];

  return (
    <section className="section" id="features" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
         <h2 className="section-title reveal">Головні <span className="text-gradient">Можливості</span></h2>
         
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
           {features.map((feat, idx) => (
             <div key={idx} className={`glass-card reveal delay-${idx + 1}`} style={{ padding: '2.5rem', textAlign: 'center' }}>
               <div style={{ fontSize: '3rem', margin: '0 auto 1.5rem auto' }}>{feat.icon}</div>
               <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-heading)' }}>{feat.title}</h3>
               <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>{feat.desc}</p>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
}
