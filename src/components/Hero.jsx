export default function Hero() {
  return (
    <section className="section" id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="mesh-bg"></div>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }} className="reveal">
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '50px', background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', marginBottom: '2rem', fontSize: '0.875rem', color: 'var(--color-accent-1)' }}>
            Бакалаврська робота
          </div>
          <h1 className="text-gradient-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Інформаційна веборієнтована система <br/>
            управління продажем комп’ютерної техніки.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginBottom: '3rem', maxWidth: '750px', margin: '0 auto 3rem auto' }} className="reveal delay-1">
            Інноваційна інтерактивна платформа для гнучкого підбору, конфігурування та продажу комп'ютерної техніки і комплектуючих.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }} className="reveal delay-2">
            <a href="#about" className="btn btn-primary" aria-label="Читати більше про мету проекту">Дізнатися більше</a>
            <a href="#team" className="btn btn-secondary" aria-label="Контакти та інформація про команду">Зв'язатись</a>
          </div>
        </div>
      </div>
    </section>
  )
}
