import React from 'react';
import styles from '../styles/product-car.module.css';
import { Rating } from 'primereact/rating';

export default function ProductCard({ value }) {
  return (
    <div className={styles.product_card}>
      <img src={value.src} />
      <h1 className={styles.product_name}>{value.name}</h1>
      <Rating
        cancel={false}
        readOnly
        value={value.rating}
        onIcon={<img src="/gray-dog-paw.svg" width="12.58px" height="12px" />}
        offIcon={<img src="/white-dog-paw.svg" width="12.58px" height="12px" />}
      />
      <p className={styles.product_price}>{value.price}</p>
      <button className={styles.button}>
        <img src="./shopping-car.svg" />
        <p className={styles.button_text}>Agregar</p>
      </button>
    </div>
  );
}
