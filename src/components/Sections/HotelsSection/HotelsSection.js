import { useState } from 'react';
import Container from '../../Container';
import Section from '../../Section';
import SectionNavigation from '../SectionNavigation';
import styles from './HotelsSection.module.css';
import StarsRating from '../SatrsRating';

// images

import hotel_1 from '../images/hotel-1.jpg';
import hotel_2 from '../images/hotel-2.jpg';
import hotel_3 from '../images/hotel-3.jpg';
import hotel_4 from '../images/hotel-4.jpg';

export default function HotelsSection() {
  const [monasteroRating, setMonasteroRating] = useState(5);
  const [grandRating, setGrandRating] = useState(3);
  const [oberoiRating, setOberoiRating] = useState(4);
  const [beverlyRating, setBeverlyRating] = useState(3);

  return (
    <Section>
      <Container>
        <SectionNavigation title="Hotels and Restaurants" />

        <ul className={styles.hotelsList}>
          <li className={styles.hotelsList_item}>
            <img src={hotel_1} alt="Monastero Santa" />
            <p>Monastero Santa Rosa Hotel & Spa</p>
            <div className={styles.hotelInfo}>
              <span className={styles.hotelLocation}>Salerno, Italy</span>
              <StarsRating rating={monasteroRating} setRating={setMonasteroRating} />
            </div>
          </li>

          <li className={styles.hotelsList_item}>
            <img src={hotel_2} alt="Monastero Santa" />
            <p>Grand Hotel Tremezzo</p>

            <div className={styles.hotelInfo}>
              <span className={styles.hotelLocation}>Lake Como, Italy</span>

              <StarsRating rating={grandRating} setRating={setGrandRating} />
            </div>
          </li>

          <li className={styles.hotelsList_item}>
            <img src={hotel_3} alt="Monastero Santa" />
            <p>The Oberoi Udaivilas, Udaipur</p>

            <div className={styles.hotelInfo}>
              <span className={styles.hotelLocation}>Udaipur, India</span>

              <StarsRating rating={oberoiRating} setRating={setOberoiRating} />
            </div>
          </li>

          <li className={styles.hotelsList_item}>
            <img src={hotel_4} alt="Monastero Santa" />
            <p>AKA Beverly Hills</p>

            <div className={styles.hotelInfo}>
              <span className={styles.hotelLocation}>Los Angeles, United States</span>

              <StarsRating rating={beverlyRating} setRating={setBeverlyRating} />
            </div>
          </li>
        </ul>
      </Container>
    </Section>
  );
}
