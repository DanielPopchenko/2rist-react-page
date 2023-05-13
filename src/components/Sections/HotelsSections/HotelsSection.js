import React from 'react';
import Container from '../../Container';
import Section from '../../Section';
import SectionNavigation from '../SectionNavigation';
import styles from './HotelsSection.module.css';

// images

import hotel_1 from '../images/hotel-1.jpg';
import hotel_2 from '../images/hotel-2.jpg';
import hotel_3 from '../images/hotel-3.jpg';
import hotel_4 from '../images/hotel-4.jpg';

export default function HotelsSection() {
  return (
    <Section>
      <Container>
        <SectionNavigation />

        <ul className={styles.hotelsList}>
          <li className={styles.hotelsList_item}>
            <img src={hotel_1} alt="Monastero Santa" />
            <p>Monastero Santa Rosa Hotel & Spa</p>
            <div className={styles.hotelInfo}>
              <span className={styles.hotelLocation}>Salerno, Italy</span>

              {/* <div class="hotels-rating">
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
              </div> */}
            </div>
          </li>

          <li className={styles.hotelsList_item}>
            <img src={hotel_2} alt="Monastero Santa" />
            <p>Grand Hotel Tremezzo</p>

            <div className={styles.hotelInfo}>
              <span className={styles.hotelLocation}>Lake Como, Italy</span>

              {/* <div class="hotels-rating">
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
              </div> */}
            </div>
          </li>

          <li className={styles.hotelsList_item}>
            <img src={hotel_3} alt="Monastero Santa" />
            <p>The Oberoi Udaivilas, Udaipur</p>

            <div className={styles.hotelInfo}>
              <span className={styles.hotelLocation}>Udaipur, India</span>

              {/* <div class="hotelRating">
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
              </div> */}
            </div>
          </li>

          <li className={styles.hotelsList_item}>
            <img src={hotel_4} alt="Monastero Santa" />
            <p>AKA Beverly Hills</p>

            <div className={styles.hotelInfo}>
              <span className={styles.hotelLocation}>Los Angeles, United States</span>

              {/* <div class="hotels-rating">
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
                <span class="hotels-rating_star"></span>
              </div> */}
            </div>
          </li>
        </ul>
      </Container>
    </Section>
  );
}
