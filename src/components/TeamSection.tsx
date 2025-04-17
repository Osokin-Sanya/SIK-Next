import styles from "./TeamSection.module.css";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";

const team = [
  {
    nameKey: "team.member1.name",
    roleKey: "team.member1.role",
    linkedin: "#",
    isLead: true,
  },
  {
    nameKey: "team.member2.name",
    roleKey: "team.member2.role",
    linkedin: "#",
    isLead: false,
  },
  {
    nameKey: "team.member3.name",
    roleKey: "team.member3.role",
    linkedin: "#",
    isLead: false,
  },
  {
    nameKey: "team.member4.name",
    roleKey: "team.member4.role",
    linkedin: "#",
    isLead: false,
  },
];

export default function TeamSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.teamSection} id="team">
      <p className={styles.title}>{t["team.title"]}</p>
      <div className={styles.cards}>
        {team.map((member, i) => (
          <a
            className={styles.card}
            key={i}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.cardImgBlock}>
              <div className={styles.cardImg}>
                <svg width="88" height="68" viewBox="0 0 88 68">
                  <rect width="88" height="68" rx="8" fill="#E5E5E5" />
                  <path d="M18 50L38 30L60 50" stroke="#bbb" strokeWidth="2" />
                  <circle cx="32" cy="32" r="7" fill="#bbb" />
                </svg>
              </div>
              <span className={styles.linkedin} aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <rect width="22" height="22" rx="3" fill="#111" />
                  <path
                    d="M7 9V15"
                    stroke="#fff"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <circle cx="7" cy="7" r="1" fill="#fff" />
                  <path
                    d="M11 11V15M11 11C11 10.4477 11.4477 10 12 10H13C13.5523 10 14 10.4477 14 11V15"
                    stroke="#fff"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <button className={styles.arrowBtn} aria-label="Подробнее">
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <circle cx="11" cy="11" r="11" fill="#fff" />
                  <path
                    d="M9 7l4 4-4 4"
                    stroke="#222"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className={styles.cardName}>{t[member.nameKey]}</div>
            <div className={styles.cardRole}>{t[member.roleKey]}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
