import styles from "./HowStepper.module.css";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";
import React, { useState } from "react";

const steps = [
  {
    num: 1,
    titleKey: "stepper.step1.title",
    descKey: "stepper.step1.desc",
  },
  {
    num: 2,
    titleKey: "stepper.step2.title",
    descKey: "stepper.step2.desc",
  },
  {
    num: 3,
    titleKey: "stepper.step3.title",
    descKey: "stepper.step3.desc",
  },
  {
    num: 4,
    titleKey: "stepper.step4.title",
    descKey: "stepper.step4.desc",
  },
  {
    num: 5,
    titleKey: "stepper.step5.title",
    descKey: "stepper.step5.desc",
  },
  {
    num: 6,
    titleKey: "stepper.step6.title",
    descKey: "stepper.step6.desc",
  },
];

export default function HowStepper() {
  const { language } = useLanguage();
  const t = translations[language];
  const [openedStep, setOpenedStep] = useState(0);

  const handleMouseEnter = (i: number) => {
    setOpenedStep((prev) => (i > prev ? i : prev));
  };

  return (
    <section className={styles.stepperSection}>
      <div className={styles.stepperHeaderRow}>
        <p className={styles.stepperTitle}>{t["stepper.title"]}</p>
        <button className={styles.meetingBtn}>{t["stepper.meetingBtn"]}</button>
      </div>
      <div className={styles.stepperDescRow}>
        <b>{t["stepper.desc1"]}</b>
        <span className={styles.gray}> {t["stepper.desc2"]}</span>
        <b> {t["stepper.desc3"]}</b>
      </div>
      <div className={styles.stepperWrap}>
        <div className={styles.stepperLine}></div>
        <div className={styles.steps}>
          {steps.map((step, i) => {
            const isOpened = i <= openedStep;
            return (
              <div
                className={
                  styles.step + " " + (isOpened ? styles.opened : styles.closed)
                }
                key={i}
                onMouseEnter={() => handleMouseEnter(i)}
              >
                <div className={styles.stepBlock}>
                  <div className={styles.circle}>{step.num}</div>
                  <div className={styles.stepTitle}>{t[step.titleKey]}</div>
                </div>
                <div
                  className={
                    styles.stepDesc +
                    " " +
                    (isOpened ? styles.opened : styles.closed)
                  }
                >
                  {t[step.descKey]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
