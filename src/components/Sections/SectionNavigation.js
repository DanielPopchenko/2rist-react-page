import React from 'react';
import styles from './Sections.module.css';

export default function SectionNavigation() {
  return (
    <div class={styles.sectionNav}>
      <h2 class={styles.sectionTitle}>Hotels and Restaurants</h2>
      <button type="button" class={styles.sectionBtn}>
        View all
      </button>
    </div>
  );
}
