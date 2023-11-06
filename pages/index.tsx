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
  adSplitterProps,
  navbarProps,
  carouselProps,
  productSectionsProps,
  serviceSectionProps,
  brandSectionProps,
  categorySectionProps,
  footerProps,
} from '../data';

function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar {...navbarProps} />
      <Carousel {...carouselProps} />
      <CategorySection {...categorySectionProps} />
      <ProductSection {...productSectionsProps[0]} />
      <AdSplitter {...adSplitterProps[0]} />
      <ProductSection {...productSectionsProps[1]} />
      <AdSplitter {...adSplitterProps[1]} />
      <ProductSection {...productSectionsProps[2]} />
      <ServiceSection {...serviceSectionProps} />
      <BrandSection {...brandSectionProps} />
      <Footer {...footerProps} />
    </div>
  );
}

export default HomePage;
