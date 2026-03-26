import React, { createContext, useState, useContext } from 'react'

const translations = {
  uk: {
    nav_about: 'Про проєкт',
    nav_features: 'Можливості',
    nav_team: 'Контакти',
    hero_badge: 'Бакалаврська робота',
    hero_badge_en: 'Bachelor Thesis',
    hero_title: 'Інформаційна веборієнтована система управління продажем комп’ютерної техніки',
    hero_desc: 'Інноваційна інтерактивна платформа для гнучкого підбору, конфігурування та продажу комп\'ютерної техніки.',
    btn_more: 'Дізнатися більше',
    btn_contact: 'Зв\'язатись',
    about_title: 'Про Проєкт',
    about_goal: 'Мета проєкту',
    about_goal_desc: 'Створення системи для продажу та збору комп\'ютерної техніки.',
    about_act: 'Актуальність',
    about_act_desc: 'Сучасний ринок потребує ефективних інструментів для зручного підбору.',
    features_title: 'Головні Можливості',
    footer_uni: 'Сумський Державний Університет',
    footer_fac: 'Факультет електроніки та інформаційних технологій (ЕлІТ)',
    footer_rights: 'Всі права захищено.'
  },
  en: {
    nav_about: 'About',
    nav_features: 'Features',
    nav_team: 'Contacts',
    hero_badge: 'Bachelor Thesis',
    hero_title: 'Web-oriented Information System for Computer Hardware Sales Management',
    hero_desc: 'Innovative interactive platform for flexible selection, configuring, and selling computer hardware.',
    btn_more: 'Learn More',
    btn_contact: 'Contact Us',
    about_title: 'About Project',
    about_goal: 'Project Goal',
    about_goal_desc: 'Creating a system for selling and assembling computer hardware.',
    about_act: 'Relevance',
    about_act_desc: 'The modern market requires efficient tools for convenient selection.',
    features_title: 'Main Features',
    footer_uni: 'Sumy State University',
    footer_fac: 'Faculty of Electronics and Information Technologies',
    footer_rights: 'All rights reserved.'
  }
}

const LanguageContext = createContext()

/**
 * Провайдер контексту мови для всього додатку.
 * Забезпечує доступ до перекладів, поточної мови та функції зміни мови.
 * 
 * @component
 * @param {Object} props - Пропси компонента
 * @param {React.ReactNode} props.children - Дочірні елементи
 * @returns {JSX.Element} Провайдер контексту
 */
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('uk')
  
  const t = (key) => translations[lang][key] || key
  const toggleLang = () => setLang(prev => prev === 'uk' ? 'en' : 'uk')

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * Хук для використання контексту мови.
 * Надає доступ до функції перекладу `t`, поточної мови `lang` та функції `toggleLang`.
 * 
 * @returns {Object} Об'єкт контексту { lang, t, toggleLang }
 * @throws {Error} Якщо використовується поза межами LanguageProvider
 */
export const useLanguage = () => useContext(LanguageContext)
