import React, { useState } from 'react';
import styles from '../styles/dropdown.module.css';
import classnames from 'classnames';

export default function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0].label);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const panelOptions = () => {
    return options.map((option) => (
      <li
        key={option.label}
        className={styles.li}
        onClick={() => {
          setSelectedOption(option.label);
          toggleDropdown();
        }}
      >
        {option.label}
      </li>
    ));
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdown_toggle} onClick={toggleDropdown}>
        <i className={classnames('pi pi-map-marker', styles.icon)} />
        {selectedOption}
        <i className={classnames('pi pi-angle-down', styles.icon)} />
      </button>
      {isOpen && <ul className={styles.dropdown_panel}>{panelOptions()}</ul>}
    </div>
  );
}
