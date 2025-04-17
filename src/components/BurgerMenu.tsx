import React, { useState } from 'react';
import styles from './BurgerMenu.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className={styles.burgerWrapper}>
      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Open menu">
        <span className={open ? styles.lineOpen : styles.line}></span>
        <span className={open ? styles.lineOpen : styles.line}></span>
        <span className={open ? styles.lineOpen : styles.line}></span>
      </button>
      <nav className={`${styles.menu} ${open ? styles.open : ''}`}>
        <a href="#how" onClick={() => setOpen(false)}>{t['main.how']}</a>
        <a href="#works" onClick={() => setOpen(false)}>{t['main.works']}</a>
        <a href="#team" onClick={() => setOpen(false)}>{t['main.team']}</a>
        <a href="#contacts" onClick={() => setOpen(false)}>{t['main.contacts']}</a>
        <div className={styles.langSwitcher}>
          <button className={language === 'ua' ? styles.langActive : styles.lang} onClick={() => setLanguage('ua')}>UA</button>
          <button className={language === 'en' ? styles.langActive : styles.lang} onClick={() => setLanguage('en')}>EN</button>
        </div>
      </nav>
      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
    </div>
  );
}
