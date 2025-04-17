import React, { useState } from "react";
import styles from "./ReviewsSlider.module.css";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";

const reviews = [
  {
    name: "Василь Коваленко",
    role: "Власник магазину",
    city: "Київ, Україна",
    text: "Дуже задоволені сайтом! Все зробили вчасно і навіть раніше. Зручно, просто та красиво!",
    stars: 5,
  },
  {
    name: "Олена Петрова",
    role: "Підприємець",
    city: "Львів, Україна",
    text: "Сайт вийшов чудовий, команда працювала швидко та якісно. Рекомендую!",
    stars: 5,
  },
  {
    name: "Олена2 Петрова",
    role: "Підприємець",
    city: "Львів, Україна",
    text: "Сайт вийшов чудовий, команда працювала швидко та якісно. Рекомендую!",
    stars: 5,
  },
  {
    name: "Олена3 Караван",
    role: "Підприємець",
    city: "Львів, Україна",
    text: "Сайт вийшов чудовий, команда працювала швидко та якісно. Рекомендую!",
    stars: 5,
  },
];

interface ReviewsSliderProps {
  slidesToShow?: number;
}

export default function ReviewsSlider({
  slidesToShow = 2,
}: ReviewsSliderProps) {
  // Количество отображаемых слайдов (можно менять динамически)
  const [visibleSlides, setVisibleSlides] = useState(slidesToShow);

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState<"in" | "outLeft" | "outRight" | null>(null);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language];
  // Корректно прокручивать слайдер с любым количеством карточек
  const clampIndex = (i: number) => {
    const len = reviews.length;
    return ((i % len) + len) % len;
  };

  const prev = () => {
    setFade("outLeft");
    setPendingIndex(clampIndex(index - visibleSlides));
    setTimeout(() => {
      setIndex((prev) => clampIndex(prev - visibleSlides));
      setFade("in");
      setTimeout(() => {
        setFade(null);
        setPendingIndex(null);
      }, 450);
    }, 450);
  };
  const next = () => {
    setFade("outRight");
    setPendingIndex(clampIndex(index + visibleSlides));
    setTimeout(() => {
      setIndex((prev) => clampIndex(prev + visibleSlides));
      setFade("in");
      setTimeout(() => {
        setFade(null);
        setPendingIndex(null);
      }, 450);
    }, 450);
  };

  // Получить visibleSlides подряд идущих отзывов
  const getVisible = (customIndex = index) => {
    const arr = [];
    for (let i = 0; i < visibleSlides; ++i) {
      arr.push(reviews[clampIndex(customIndex + i)]);
    }
    return arr;
  };

  const visibleReviews =
    pendingIndex !== null && (fade === "outLeft" || fade === "outRight")
      ? getVisible(index)
      : getVisible(pendingIndex !== null ? pendingIndex : index);

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.headerRow}>
        <div className={styles.arrows}>
          <button className={styles.arrowBtn} onClick={prev} aria-label="Prev">
            ←
          </button>
          <button className={styles.arrowBtn} onClick={next} aria-label="Next">
            →
          </button>
        </div>
        <p className={styles.title}>{t["reviews.title"]}</p>
      </div>
      <div className={styles.sliderRow}>
        {visibleReviews.map((review, i) => (
          <div
            className={
              styles.reviewCard +
              (fade === "outLeft"
                ? " " + styles.fadeOutLeft
                : fade === "outRight"
                ? " " + styles.fadeOutRight
                : fade === "in"
                ? " " + styles.fadeIn
                : "")
            }
            key={i}
          >
            <div className={styles.cardHeader}>
              <span className={styles.name}>{review.name}</span>
              <span className={styles.role}>{review.role}</span>
              <span className={styles.stars}>
                {"★".repeat(review.stars)}
                {"☆".repeat(5 - review.stars)}
              </span>
            </div>
            <div className={styles.city}>
              <span role="img" aria-label="geo">
                📍
              </span>{" "}
              {review.city}
            </div>
            <div className={styles.text}>{review.text}</div>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {Array.from({ length: Math.ceil(reviews.length / visibleSlides) }).map(
          (_, dotIdx) => {
            const isActive = dotIdx === Math.floor(index / visibleSlides);
            return (
              <span
                key={dotIdx}
                className={isActive ? styles.dotActive : styles.dot}
                onClick={() => {
                  if (isActive) return;
                  const target = dotIdx * visibleSlides;
                  if (target > index) {
                    setFade("outRight");
                  } else {
                    setFade("outLeft");
                  }
                  setPendingIndex(target);
                  setTimeout(() => {
                    setIndex(target);
                    setFade("in");
                    setTimeout(() => {
                      setFade(null);
                      setPendingIndex(null);
                    }, 450);
                  }, 450);
                }}
                style={{ cursor: isActive ? "default" : "pointer" }}
              ></span>
            );
          }
        )}
      </div>
    </section>
  );
}
