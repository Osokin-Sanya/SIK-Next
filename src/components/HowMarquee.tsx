import styles from "./HowMarquee.module.css";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";

function icon() {
  return (
    <svg
      className={styles.iconPlaceholder}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
    >
      <path
        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M16.8 15.5L18 8.5L13.8 10.6L12 8.5L10.2 10.6L6 8.5L7.2 15.5H16.8Z"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
}

export default function HowMarquee() {
  const { language } = useLanguage();
  const t = translations[language];
  // Содержимое бегущей строки
  const marqueeContent = [
    t["smart"],
    <div className={styles.topIcon}>{icon()}</div>,
    t["ideas"],
    <div className={styles.topIcon}> {icon()}</div>,
    t["kingdom"],
    <div className={styles.topIcon}>{icon()}</div>,
  ];

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeTrack}>
        {[...Array(4)].map((_, i) => (
          <span className={styles.marqueeItem} key={i}>
            {marqueeContent.map((el, j) => (
              <span key={j} className={styles.marqueeElement}>
                {el}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
