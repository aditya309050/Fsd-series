import React from 'react';
import styles from './nav.module.css';

const Nav = () => {
  const listItems = ['Home', 'About', 'Contact', 'Blog'];

  return (
    <ul className={styles.listitems}>
      {listItems.map((item) => (
        <li key={item} className={styles.listitem}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Nav;