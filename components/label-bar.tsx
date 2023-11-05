import React from 'react';
import styles from '../styles/label-bar.module.css';
import Link from 'next/link';

export default function LabelBar({ labels }) {
  return labels.map((l) => (
    <Link href={l.route} key={l.route} className={styles.route}>
      {l.name}
    </Link>
  ));
}
