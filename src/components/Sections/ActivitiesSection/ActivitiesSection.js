import React from 'react';
import classNames from 'classnames';

// components

import Container from '../../Container';
import Section from '../../Section';
import styles from './ActivitiesSection.module.css';
import SectionNavigation from '../SectionNavigation';

import activity1 from '../images/activity-1.jpg';
import activity2 from '../images/activity-2.jpg';
import activity3 from '../images/activity-3.jpg';
import activity4 from '../images/activity-4.jpg';

{
  /* <div className={classNames(styles.formItem, styles.location)}> */
}

export default function ActivitiesSection() {
  return (
    <Section>
      <Container>
        <SectionNavigation title="Activities" />
        <ul className={classNames('list', styles.activitiesList)}>
          <li className={styles.activitiesList_item}>
            <img src={activity1} alt="Sailing" /> <br />
            <p>Sailing</p>
          </li>
          <li className={styles.activitiesList_item}>
            <img src={activity2} alt="Climbing" /> <br />
            <p>Climbing</p>
          </li>
          <li className={styles.activitiesList_item}>
            <img src={activity3} alt="Skiing" /> <br />
            <p>Skiing</p>
          </li>
          <li className={styles.activitiesList_item}>
            <img src={activity4} alt="Hiking" /> <br />
            <p>Hiking</p>
          </li>
        </ul>
      </Container>
    </Section>
  );
}
