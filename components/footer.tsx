import React from 'react';
import styles from '../styles/footer.module.css';
import Link from 'next/link';
import classnames from 'classnames';

export default function Footer({ sections, copyright, icons }) {
  const checkSection = (section) => {
    if (section.hasLinks) {
      return (
        <div className={styles.items}>
          {section.items.map((i) => (
            <Link href={i.link} key={i.text} className={styles.item_text}>
              {i.text}
            </Link>
          ))}
        </div>
      );
    } else if (section.hasSocialNet) {
      return (
        <div className={styles.items}>
          {section.items.map((i, index) => {
            return (
              <p className={styles.item_text} key={index}>
                {i.text}
              </p>
            );
          })}
          <div className={styles.social_networks}>
            {createSocialNets(section)}
          </div>
        </div>
      );
    } else {
      return (
        <p className={classnames(styles.item_text, 'w-[270px]')}>
          {section.text}
        </p>
      );
    }
  };

  const createSocialNets = (section) => {
    return section.socialNetworks.map((s) => (
      <a
        href={s.link}
        key={s.name}
        target="_blank"
        className={classnames(`pi pi-${s.name}`, styles.social_network)}
      />
    ));
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.sections}>
        {sections.map((s, index) => (
          <section className={styles.section} key={index}>
            <h1 className={styles.title}>{s.title}</h1>
            {checkSection(s)}
          </section>
        ))}
        <img src={icons.left} className={styles.icon_left} />
        <img src={icons.right} className={styles.icon_right} />
      </div>
      <div className={styles.copyright}>
        <p className={styles.copyright_text}>{copyright.text}</p>
        <img src={copyright.icon} />
      </div>
    </footer>
  );
}
