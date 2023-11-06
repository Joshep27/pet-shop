import React from 'react';
import styles from '../styles/service-section.module.css';

export default function ServiceSection(props) {
  return (
    <section className={styles.section}>
      <p className={styles.subtitle}>{props.subtitle} </p>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>{props.description} </p>
      <div className={styles.service_cards}>
        {props.services.map((s, index) => (
          <div className={styles.service_card} key={index}>
            <img src={s.src} className={styles.service_img} />
            <h1 className={styles.service_name}>{s.name}</h1>
            <p className={styles.service_description}>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
