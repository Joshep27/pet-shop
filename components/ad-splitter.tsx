import React from 'react';
import styles from '../styles/ad-splitter.module.css';

export default function AdSplitter({ ads }) {
  const CreateAds = () => {
    const width = `${100 / ads.length}%`;
    return ads.map((a) => (
      <img
        key={a.src}
        className={styles.ad}
        src={a.src}
        style={{ width: width }}
      />
    ));
  };

  return <aside className={styles.ad_splitter}>{CreateAds()}</aside>;
}
