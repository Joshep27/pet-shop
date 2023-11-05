import React from 'react';
import styles from '../styles/icon-bar.module.css';
import Link from 'next/link';

export default function IconBar({ icons }) {
  return (
    <div className={styles.menuBar}>
      {icons.map((i) => (
        <Link href={i.route} key={i.route}>
          <img src={i.src} className={styles.icon} />
        </Link>
      ))}
    </div>
  );
}
