import React, { useState } from "react";
import styles from "./PortfolioSection.module.css";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";

const projects = [
  {
    img: null,
    titleKey: "portfolio.card1.title",
    descKey: "portfolio.card1.desc",
  },
  {
    img: null,
    titleKey: "portfolio.card2.title",
    descKey: "portfolio.card2.desc",
  },
  {
    img: null,
    titleKey: "portfolio.card3.title",
    descKey: "portfolio.card3.desc",
  },
  {
    img: null,
    titleKey: "portfolio.card4.title",
    descKey: "portfolio.card4.desc",
  },
];

export default function PortfolioSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [active, setActive] = useState<number>(0); // Сохраняет выбранную карточку
  const [hovered, setHovered] = useState<number | null>(null);

  // Берём только первые 3 проекта
  const shownProjects = projects.slice(0, 3);

  // Какая карточка сейчас "большая"
  const largeIdx = hovered !== null ? hovered : active;

  return (
    <section className={styles.portfolioSection} id="portfolio">
      <p className={styles.title}>{t["portfolio.title"]}</p>
      <div className={styles.cardsRow}>
        {shownProjects.map((project, idx) => {
          let cardClass = styles.card;
          cardClass +=
            " " + (largeIdx === idx ? styles.cardLarge : styles.cardSmall);
          return (
            <div
              key={idx}
              className={cardClass}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => {
                setHovered(null);
                setActive(largeIdx);
              }}
              onClick={() => setActive(idx)}
            >
              <div className={styles.cardImg}>
                <svg width="60" height="44" viewBox="0 0 60 44">
                  <rect width="60" height="44" rx="8" fill="#E5E5E5" />
                  <path d="M12 32L26 18L40 32" stroke="#bbb" strokeWidth="2" />
                  <circle cx="20" cy="20" r="4" fill="#bbb" />
                </svg>
              </div>
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>{t[project.titleKey]}</div>
                <div className={styles.cardDesc}>{t[project.descKey]}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
