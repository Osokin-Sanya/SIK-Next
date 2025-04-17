import React, { useState } from 'react';
import styles from './ContactFormBlock.module.css';
import { useTranslation } from '../context/LanguageContext';

 

export default function ContactFormBlock() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    details: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // handle form submit
  }

  return (
    <section className={styles.contactSection} id="contacts">
      <p className={styles.title}>{t('contact.title')}</p>
      <div className={styles.subtitle}>
        {t('contact.subtitle1')} <b>{t('contact.subtitle2')}</b> {t('contact.subtitle3')}
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <input
            className={styles.input}
            name="name"
            placeholder={t('contact.name')}
            value={form.name}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <input
            className={styles.input}
            name="phone"
            placeholder={t('contact.phone')}
            value={form.phone}
            onChange={handleChange}
            autoComplete="off"  required
          />
          <input
            className={styles.input}
            name="email"
            placeholder={t('contact.email')}
            value={form.email}
            onChange={handleChange}
            autoComplete="off"  required
          />
          <select
            className={styles.input}
            name="service"
            value={form.service}
            onChange={handleChange}
          >
           
            <option value="landing">{t('contact.service.landing')}</option>
            <option value="corporate">{t('contact.service.corporate')}</option>
            <option value="shop">{t('contact.service.shop')}</option>
            <option value="other">{t('contact.service.other')}</option>
          </select>
        </div>
        <textarea
          className={styles.textarea}
          name="details"
          placeholder={t('contact.details')}
          value={form.details}
          onChange={handleChange}
        />
        <div className={styles.btnRow}>
          <button className={styles.submitBtn} type="submit">
            {t('contact.submit')}
          </button>
        </div>
      </form>
    </section>
  );
}
