import React from 'react';
import styles from '../styles/home.module.css';
import { Carousel, Navbar, ProductSection } from '../components';
import {
  carouselImages,
  carouselResponsive,
  categories,
  productSections,
} from '../data';

function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Carousel images={carouselImages} responsive={carouselResponsive} />
      <section className={styles.shop_by_pets}>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet. </p>
        <h1 className={styles.title}>Una gran variedad de categorías</h1>
        <div className={styles.categories}>
          {categories.map((c) => (
            <div className={styles.category} key={c.name}>
              <img className={styles.category_image} src={c.src} />
              <p className={styles.category_title}>{c.name}</p>
            </div>
          ))}
        </div>
      </section>
      <ProductSection {...productSections[0]} />
      <ProductSection {...productSections[1]} />
    </div>
  );
}

export default HomePage;
