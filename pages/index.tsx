import React from 'react';
import styles from '../styles/home.module.css';
import {
  AdSplitter,
  Carousel,
  Navbar,
  ProductSection,
  ServiceSection,
  BrandSection,
  CategorySection,
  Footer,
} from '../components';
import {
  ads,
  carouselImages,
  carouselResponsive,
  productSections,
  serviceSection,
  brandSection,
  categorySection,
  footerProps,
} from '../data';

function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Carousel images={carouselImages} responsive={carouselResponsive} />
      <CategorySection {...categorySection} />
      <ProductSection {...productSections[0]} />
      <AdSplitter ads={ads.slice(1, 3)} />
      <ProductSection {...productSections[1]} />
      <AdSplitter ads={ads.slice(0, 1)} />
      <ProductSection {...productSections[2]} />
      <ServiceSection {...serviceSection} />
      <BrandSection {...brandSection} />
      <Footer {...footerProps} />
    </div>
  );
}

export default HomePage;
