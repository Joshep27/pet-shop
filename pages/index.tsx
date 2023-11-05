import React from 'react';
import styles from '../styles/home.module.css';
import { Carousel, Navbar } from '../components';
import { carouselImages, carouselResponsive } from '../data';

function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Carousel images={carouselImages} responsive={carouselResponsive} />
    </div>
  );
}

export default HomePage;
