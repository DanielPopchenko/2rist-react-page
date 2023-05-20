import React from 'react';
import Section from '../../Section';
import Container from '../../Container';
import SectionNavigation from '../SectionNavigation';

import styles from './TripsSection.module.css';

import travelTip1 from '../images/travelTip-1.jpg';
import travelTip2 from '../images/travelTip-2.jpg';

export default function TripsSection() {
  return (
    <Section>
      <Container>
        <SectionNavigation title="Travel Tips and Advice" />

        <ul className="list ">
          <li className={styles.tripList_item}>
            <img src={travelTip1} alt="" />

            <div className={styles.tripList_itemContent}>
              <h3>East Village Ice Cream Crawl</h3>
              <p>
                We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice
                cream store we'll explore the story behind the business and see what makes the ice cream unique as you
                savor every…
              </p>
            </div>
          </li>

          <li className={styles.tripList_item}>
            <img src={travelTip2} alt="" />
            <div className={styles.tripList_itemContent}>
              <h3>Brooklyn Bridge cinematic photo walk</h3>
              <p>
                This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to
                capture clients at different locations upon request for an additional charge.{' '}
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </Section>
  );
}
