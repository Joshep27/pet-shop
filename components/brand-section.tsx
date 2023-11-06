import React from 'react';
import styles from '../styles/brand-section.module.css';

export default function BrandSection(props) {
  return (
    <section className={styles.section}>
      <p className={styles.subtitle}>{props.subtitle} </p>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.brands}>
        <p className={styles.description}>{props.description} </p>
        {props.brands.map((b, index) => (
          <div key={index}>
            <img src={b.src} className={styles.brand_img} />
          </div>
        ))}
      </div>
    </section>
  );
}
