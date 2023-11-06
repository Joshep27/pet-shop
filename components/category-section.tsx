import React from 'react';
import styles from '../styles/category-section.module.css';

export default function CategorySection(props) {
  return (
    <section className={styles.shop_by_pets}>
      <p className={styles.subtitle}>{props.subtitle} </p>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.categories}>
        {props.categories.map((c) => (
          <div className={styles.category} key={c.name}>
            <img className={styles.category_image} src={c.src} />
            <p className={styles.category_title}>{c.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
