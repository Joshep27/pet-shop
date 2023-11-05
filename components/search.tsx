import React, { useState } from 'react';
import styles from '../styles/search.module.css';
import classNames from 'classnames';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.search_input}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscador"
        className={styles.input}
      />
      <i className={classNames('pi pi-search', styles.icon)} />
    </div>
  );
}
