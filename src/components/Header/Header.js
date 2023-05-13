import React from 'react';
import styles from './Header.module.css';
import Container from '../Container';
import User from './User';
import HeaderForm from '../HeaderForm/HeaderForm';
import Swal from 'sweetalert2';
// images
import logo from './images/logo.svg';
import planet from './images/planet.jpeg';

export default function Header() {
  const handleBtnClick = (e) => {
    Swal.fire({
      title: 'Hello, tourist!',
      text: 'Discover globe!',
      imageUrl: planet,
      imageWidth: 400,
      imageHeight: 220,
      imageAlt: 'Custom image',
    });
  };

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

          <div className={styles.headerContent_btnContainer}>
            <button type="button" className={styles.headerContent_btn} onClick={handleBtnClick}>
              Discover on 3D Globe
            </button>
          </div>

          <HeaderForm />
        </div>
      </Container>
    </header>
  );
}
