import styles from './ChoiceSection.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const cards = [
  {
    icon: null,
    titleKey: 'choice.card1.title',
    descKey: 'choice.card1.desc',
  },
  {
    icon: null,
    titleKey: 'choice.card2.title',
    descKey: 'choice.card2.desc',
  },
  {
    icon: null,
    titleKey: 'choice.card3.title',
    descKey: 'choice.card3.desc',
  },
  {
    icon: null,
    titleKey: 'choice.card4.title',
    descKey: 'choice.card4.desc',
  },
];

export default function ChoiceSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.choiceSection}>
      <p className={styles.title}>{t['choice.title']}</p>
      <div className={styles.cards}>
        {cards.map((card, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.cardIcon}>
              <svg width="38" height="38" viewBox="0 0 38 38"><rect width="38" height="38" rx="8" fill="#E5E5E5"/><path d="M10 25L18 17L28 25" stroke="#bbb" strokeWidth="2"/><circle cx="15" cy="15" r="3" fill="#bbb"/></svg>
            </div>
            <div className={styles.cardText}>
              <div className={styles.cardTitle}>{t[card.titleKey]}</div>
              <div className={styles.cardDesc}>{t[card.descKey]}</div>
            </div>
            <div className={styles.cardNum}>{String(i+1).padStart(2,'0')}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
