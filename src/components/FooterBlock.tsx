import React from 'react';
import styles from './FooterBlock.module.css';
import { useTranslation } from '../context/LanguageContext';

export default function FooterBlock() {
  const { t } = useTranslation();

  // Плавный скролл для всех якорных ссылок футера
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
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.left}>
          <div className={styles.contactLabel}>{t('footer.contactUs')}</div>
          <a href="mailto:info@gmail.com" className={styles.email}>
            info@gmail.com <span className={styles.arrow}>↗</span>
          </a>
        </div>
        <nav className={styles.nav}>
          <a href="#how" className={styles.navLink} onClick={handleAnchorClick}>{t('main.how')}</a>
          <a href="#portfolio" className={styles.navLink} onClick={handleAnchorClick}>{t('main.works')}</a>
          <a href="#team" className={styles.navLink} onClick={handleAnchorClick}>{t('main.team')}</a>
          <a href="#contacts" className={styles.navLink} onClick={handleAnchorClick}>{t('main.contacts')}</a>
        </nav>
      </div>
      <div className={styles.centerRow}>
        <div className={styles.line} />
        <div className={styles.logo}>S.I.K</div>
        <div className={styles.line} />
      </div>
      <div className={styles.slogan}>{t('footer.slogan')}</div>
      <div className={styles.bottomRow}>
        <div className={styles.copyright}>
          2025 SIK. {t('footer.rights')}
        </div>
        <div className={styles.socials}>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
      </div>
      <div className={styles.stickyBtns}>
        <a href="tel:+380000000000" className={styles.stickyBtn} title={t('footer.call')}>☎</a>
        <a
          href="#top"
          className={styles.stickyBtn}
          title={t('footer.up')}
          onClick={e => {
            e.preventDefault();
            const el = document.getElementById('top');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          ↑
        </a>
      </div>
    </footer>
  );
}
