import styles from './Header.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import BurgerMenu from './BurgerMenu';
import Image from 'next/image';
import logo from '../assets/logo.svg';
export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  // Плавный скролл для всех якорных ссылок в хедере
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={styles.header} id="top">
      <div className={styles.logo}>
        <Image src={logo} alt="Logo" width={100} height={100} />
    
      </div>
      <nav className={styles.nav}>
        <a href="#how" className={styles.link} onClick={handleAnchorClick}>{t['main.how']}</a>
        <a href="#portfolio" className={styles.link} onClick={handleAnchorClick}>{t['main.works']}</a>
        <a href="#team" className={styles.link} onClick={handleAnchorClick}>{t['main.team']}</a>
        <a href="#contacts" className={styles.link} onClick={handleAnchorClick}>{t['main.contacts']}</a>
      </nav>
      <div className={styles.right}>
        <div className={styles.langSwitcher}>
          <button
            className={language === 'ua' ? styles.langActive : styles.lang}
            onClick={() => setLanguage('ua')}
          >UA</button>
          <button
            className={language === 'en' ? styles.langActive : styles.lang}
            onClick={() => setLanguage('en')}
          >EN</button>
        </div>
        <button className={styles.cta}>{t['main.contactUs']}</button>
      </div>
      <BurgerMenu />
    </header>
  );
}
