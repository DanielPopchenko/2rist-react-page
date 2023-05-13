import React from 'react';
import Container from '../Container';
import Section from '../Section';
import styles from './Sections.module.css';

import image_1 from './images/popular-1.jpg';
import image_2 from './images/popular-2.jpg';
import image_3 from './images/popular-3.jpg';
import image_4 from './images/popular-4.jpg';
import image_5 from './images/popular-5.jpg';
import image_6 from './images/popular-6.jpg';

export default function PopularDestinations() {
  return (
    <Section>
      <Container>
        <h2 className={styles.sectionTitle}>Popular Destinations</h2>

        <ul className={styles.destinationsList}>
          <li className={styles.destinationsList_item}>
            <img src={image_1} alt="Big Sur" />
            <p>
              Big Sur <br />
              <span>California, USA</span>
            </p>
          </li>
          <li className={styles.destinationsList_item}>
            <img src={image_2} alt="Prescott" />
            <p>
              Prescott <br />
              <span>Arizona, USA </span>
            </p>
          </li>
          <li className={styles.destinationsList_item}>
            <img src={image_3} alt="Fort Mayers" />
            <p>
              Fort Mayers <br />
              <span>Florida, USA </span>
            </p>
          </li>
          <li className={styles.destinationsList_item}>
            <img src={image_4} alt="Tucson" />
            <p>
              Tucson <br />
              <span>Arizona, USA </span>
            </p>
          </li>
          <li className={styles.destinationsList_item}>
            <img src={image_5} alt="St. Joseph" />
            <p>
              St. Joseph <br />
              <span>Michigan, USA </span>
            </p>
          </li>
          <li className={styles.destinationsList_item}>
            <img src={image_6} alt="Madrid" />
            <p>
              Madrid <br />
              <span>Spain </span>
            </p>
          </li>
        </ul>
      </Container>
    </Section>
  );
}
