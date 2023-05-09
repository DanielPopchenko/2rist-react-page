import React from 'react';
import styles from './HeaderForm.module.css';

import classNames from 'classnames';

export default function HeaderForm() {
  return (
    <div className={styles.formContainer}>
      <form action="" className={styles.form}>
        <div className={classNames(styles.formItem, styles.location)}>
          <div className={styles.selectGroup}>
            <label className={styles.formLabel}>Location</label> <br />
            <select name="locations" className={classNames(styles.formSelect)}>
              <option value="all">Explore nearby destinations</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </select>
          </div>
        </div>

        <div className={classNames(styles.formItem, styles.activity)}>
          <div className={styles.selectGroup}>
            <label className={styles.formLabel}>Activity</label> <br />
            <select name="locations" className={classNames(styles.formSelect)}>
              <option value="all">All Activities</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </select>
          </div>
        </div>

        <div className={classNames(styles.formItem, styles.date)}>
          <div className={styles.selectGroup}>
            <label className={styles.formLabel}>When</label> <br />
            <input type="date" class={styles.calendar} id="date" name="date" />
          </div>
        </div>

        <div className={classNames(styles.formItem, styles.guest)}>
          <div className={styles.selectGroup}>
            <label className={styles.formLabel}>Guests</label> <br />
            <select name="locations" className={classNames(styles.formSelect)}>
              <option value="all">1 Guest</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </select>
          </div>
        </div>

        <button type="button" class={styles.formBtn}></button>
      </form>
    </div>
  );
}
