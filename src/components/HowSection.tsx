import styles from "./HowSection.module.css";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";

export default function HowSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.howSection} id="how">
      <div className={styles.left}>
        <p className={styles.mission}>{t["how.Mission"]}</p>
        <div className={styles.missionSub}>
          <b>{t["how.MissionSub"]}</b>
        </div>
        <div className={styles.missionSub2}>{t["how.MissionSub2"]}</div>

        <div className={styles.statsRow}>
          <div className={styles.statBlock}>
            <div className={styles.statValue}>{t["how.Stat1"]}</div>
            <div className={styles.statDesc}>{t["how.Stat1desc"]}</div>
          </div>
          <div className={styles.statBlock}>
            <div className={styles.statValue}>{t["how.Stat2"]}</div>
            <div className={styles.statDesc}>{t["how.Stat2desc"]}</div>
          </div>
          <div className={styles.statBlock}>
            <div className={styles.statValue}>{t["how.Stat3"]}</div>
            <div className={styles.statDesc}>{t["how.Stat3desc"]}</div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.diagramBlock}>
          <div className={styles.diagramPlaceholder} />
        </div>
      </div>
    </section>
  );
}
