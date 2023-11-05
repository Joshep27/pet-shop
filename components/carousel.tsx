import 'react-multi-carousel/lib/styles.css';
import ReactMultiCarousel from 'react-multi-carousel';
import styles from '../styles/carousel.module.css';
import { useState } from 'react';

export default function Carousel({ images, responsive }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const CustomDot = ({ active, onClick }) => {
    return (
      <span
        className={styles.custom_dot}
        style={{ background: active ? '#e7283c' : '#DAD6D3' }}
        onClick={onClick}
      />
    );
  };

  return (
    <ReactMultiCarousel
      responsive={responsive}
      autoPlay
      autoPlaySpeed={7000}
      infinite
      arrows={false}
      customDot={
        <CustomDot
          active={true}
          onClick={() => setCurrentSlide(currentSlide)}
        />
      }
      showDots
    >
      {images.map((i) => (
        <div className={styles.item} key={i.id}>
          <img className={styles.image} src={i.src} />
        </div>
      ))}
    </ReactMultiCarousel>
  );
}
