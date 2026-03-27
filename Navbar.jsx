import { useEffect, useState } from 'react'

/**
 * Компонент навігаційної панелі.
 * Реалізує зміну стилів при скролі сторінки.
 * 
 * @component
 * @returns {JSX.Element} Рендерить навігаційну панель з логотипом та посиланнями.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '1rem 0', transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      boxShadow: scrolled ? '0 1px 3px 0 rgb(0 0 0 / 0.05)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-heading)', textDecoration: 'none', fontFamily: 'var(--font-display)' }} aria-label="Головна сторінка сайту">
          <img src="/sumdu-logo.png" alt="СумДУ Логотип" style={{ height: '40px', width: 'auto' }} />
          СумДУ
        </a>
        <div style={{ display: 'flex', gap: '2rem' }} className="nav-links">
          <a href="#about" style={{ color: 'var(--color-text-primary)', textDecoration: 'none', fontSize: '0.95rem' }}>Про проєкт</a>
          <a href="#features" style={{ color: 'var(--color-text-primary)', textDecoration: 'none', fontSize: '0.95rem' }}>Можливості</a>
          <a href="#team" style={{ color: 'var(--color-text-primary)', textDecoration: 'none', fontSize: '0.95rem' }}>Команда</a>
        </div>
      </div>
    </nav>
  )
}
