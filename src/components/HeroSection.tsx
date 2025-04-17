import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={styles.hero}
      
    >
      <div className={styles.left}>
        <Typography variant="h1" className={styles.title} gutterBottom>
          {t['main.heroTitle'].split('\\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </Typography>
        <Typography variant="subtitle1" className={styles.subtitle} gutterBottom>
          {t['main.heroSubtitle']}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          className={styles.cta}
          sx={{
            borderRadius: '7px',
            fontWeight: 600,
            fontSize: '1.1rem',
            px: 4,
            py: 1.5,
            textTransform: 'none',
            background: '#bcbcbc',
            color: '#222',
            '&:hover': {
              background: '#b89f5a',
              color: '#fff',
            }
          }}
        >
          {t['main.heroButton']}
        </Button>
      </div>
      <div className={styles.right}>
      <Paper elevation={3} className={styles.imagePlaceholder} sx={{ borderRadius: '20px' }}>
          <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="160" height="120" rx="20" fill="#E5E5E5"/>
            <path d="M40 80L70 50L100 80L120 60L140 80" stroke="#C1C1C1" strokeWidth="5" strokeLinecap="round"/>
            <circle cx="60" cy="60" r="8" fill="#C1C1C1"/>
          </svg>
        </Paper>
      </div>
    </section>
  );
}
