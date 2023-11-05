import React from 'react';
import styles from '../styles/navbar.module.css';
import { Dropdown, Search, IconBar, LabelBar } from '../components';
import { options, socialNetworks, labels, icons } from '../data';
import classnames from 'classnames';

export default function Navbar() {
  const createSocialNetworks = () => {
    return socialNetworks.map((s) => (
      <a
        href={s.link}
        key={s.name}
        target="_blank"
        className={classnames(`pi pi-${s.name}`, styles.social_network)}
      />
    ));
  };

  return (
    <nav className={styles.nav}>
      <section className={styles.top_bar}>
        <Dropdown options={options} />
        <div className={styles.social_networks}>{createSocialNetworks()}</div>
      </section>
      <section className={styles.main_bar}>
        <img src="/maxipet-logo.png" className={styles.image} />
        <Search />
        <IconBar icons={icons} />
      </section>
      <section className={styles.sub_bar}>
        <LabelBar labels={labels} />
      </section>
    </nav>
  );
}
