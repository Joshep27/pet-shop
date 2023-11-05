import React from 'react';
import Navbar from '../components/navbar';
import styles from '../styles/home.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
}

export default HomePage;
