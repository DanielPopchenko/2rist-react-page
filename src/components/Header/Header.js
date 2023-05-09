import React from 'react';
import styles from './Header.module.css';
import Container from '../Container';
import User from './User';
import HeaderForm from '../HeaderForm/HeaderForm';

// images
import logo from './images/logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <a href="#!" className={styles.logo}>
            <img src={logo} alt="logo" />
          </a>
          <ul className={styles.navList}>
            <li className={styles.navList__item}>
              <a href="#!" className={styles.navList__item_link}>
                Home
              </a>
            </li>
            <li className={styles.navList__item}>
              <a href="#hotels" className={styles.navList__item_link}>
                Hotels
              </a>
            </li>
            <li className={styles.navList__item}>
              <a href="#hotels" className={styles.navList__item_link}>
                Restaurants
              </a>
            </li>
            <li className={styles.navList__item}>
              <a href="#!" className={styles.navList__item_link}>
                Tours
              </a>
            </li>
            <li className={styles.navList__item}>
              <a href="#destinations" className={styles.navList__item_link}>
                Destinations
              </a>
            </li>
            <li className={styles.navList__item}>
              <a href="#!" className={styles.navList__item_link}>
                Activities
              </a>
            </li>

            <li className={styles.navList__item}>
              <a href="#!" className={styles.navList__item_link}>
                Contact
              </a>
            </li>
          </ul>
          <User />
        </nav>

        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Discover the most engaging places</h1>

          <div className={styles.headerContent_linkContainer}>
            <a href="#!" className={styles.headerContent_link}>
              Discover on 3D Globe
            </a>
          </div>

          <HeaderForm />
        </div>
      </Container>
    </header>
  );
}
