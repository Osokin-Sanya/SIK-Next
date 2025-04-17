import React from "react";
import styles from "./RealReviewsBlock.module.css";
import freelancehuntLogo from "../assets/freelancehunt-logo.svg";
import Image from "next/image";
import { useTranslation } from "../context/LanguageContext";

export default function RealReviewsBlock() {
  const { t } = useTranslation();
  return (
    <section className={styles.realReviewsSection} id="real-reviews">
      <div className={styles.topRow}>
        <div className={styles.textCol}>
          <p className={styles.title}>{t("real.title")}</p>
          <div className={styles.desc}>
            <span className={styles.bold}>{t("real.desc.bold1")}</span>{" "}
            <span className={styles.gray}>{t("real.desc.gray")}</span>{" "}
            <span className={styles.bold}>{t("real.desc.bold2")}</span>
          </div>
        </div>
        <div className={styles.logoCol}>
          <a
            href="https://freelancehunt.com/profile/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={freelancehuntLogo}
              alt={t("real.freelancehunt")}
              className={styles.logo}
            />
          </a>
        </div>
      </div>
      <div className={styles.screenshotRow}>
        <div className={styles.screenshotPlaceholder}>
          <svg width="80" height="80" fill="#ccc" viewBox="0 0 24 24">
            <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2ZM5 5h14v10.17l-3.88-3.88a2 2 0 0 0-2.83 0L5 19V5Zm0 14v-1.17l6.59-6.58a1 1 0 0 1 1.42 0L19 19H5Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
