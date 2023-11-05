import React from 'react';
import styles from '../styles/product-section.module.css';
import { ProductCard } from '../components';
import classnames from 'classnames';

export default function ProductSection(props) {
  const HorizontalOrder = (order) => {
    const padding = order == 'normal' ? 'pl-10' : 'pr-10';
    const img = <img src="/cat.png" className={styles.splitter_image} />;

    const product_cards = (
      <div className={classnames(styles.product_cards, padding)}>
        {props.products.map((p, index) => (
          <ProductCard value={p} key={index} />
        ))}
      </div>
    );

    return order == 'normal' ? (
      <div className={styles.splitter}>
        {img}
        {product_cards}
      </div>
    ) : (
      <div className={styles.splitter}>
        {product_cards}
        {img}
      </div>
    );
  };

  return (
    <section className={styles.featured_products}>
      <p className={styles.subtitle}>{props.subtitle} </p>
      <h1 className={styles.title}>{props.title}</h1>
      {HorizontalOrder(props.order)}
    </section>
  );
}
