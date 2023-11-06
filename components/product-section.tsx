import React from 'react';
import styles from '../styles/product-section.module.css';
import { ProductCard } from '.';
import classnames from 'classnames';

export default function ProductSection(props) {
  const secHeight = props.imgEnabled ? 'h-[110vh]' : '';

  const horizontalOrder = (order) => {
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

  const withoutImage = () => {
    return (
      <div className={styles.product_cards}>
        {props.products.map((p, index) => (
          <ProductCard value={p} key={index} />
        ))}
      </div>
    );
  };

  return (
    <section className={classnames(styles.section, secHeight)}>
      <p className={styles.subtitle}>{props.subtitle} </p>
      <h1 className={styles.title}>{props.title}</h1>
      {props.imgEnabled ? horizontalOrder(props.order) : withoutImage()}
    </section>
  );
}
