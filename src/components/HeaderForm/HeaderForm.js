import { useState } from 'react';
import styles from './HeaderForm.module.css';

import DateCalendar from './DateCalendar';
import dayjs, { Dayjs } from 'dayjs';

import { useId } from 'react';
import classNames from 'classnames';
import Swal from 'sweetalert2';

export default function HeaderForm() {
  const locationSelectId = useId();
  const currentTime = dayjs();

  const [location, setLocation] = useState('');
  const [activity, setActivity] = useState('');
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState(currentTime);

  const handleSelectChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name);
    console.log(value);
    if (name === 'locations') {
      setLocation(value);
    } else if (name === 'activities') {
      setActivity(value);
    } else if (name === 'guests') {
      setGuests(value);
    } else if (name === 'date') {
      setDate(value);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (location === '' || guests === '' || activity === '') {
      Swal.fire('Error', 'Please choose all the options', 'error');
    } else {
      Swal.fire(
        'We have recieved your request',
        `Location: ${location}; Prefered activity: ${activity}; Date: ${date.format(
          'ddd, MMM D, YYYY',
        )}; Guests: ${guests}`,
        'success',
      );

      setLocation('');
      setGuests('');
      setActivity('');
      setDate(currentTime);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form action="" onSubmit={onFormSubmit} className={styles.form}>
        <div className={classNames(styles.formItem, styles.location)}>
          <div className={styles.selectGroup}>
            <label className={styles.formLabel} htmlFor={locationSelectId}>
              Location
            </label>
            <br />
            <select
              name="locations"
              value={location}
              onChange={handleSelectChange}
              // id={locationSelectId}
              className={classNames(styles.formSelect)}
            >
              <option value="all">Explore nearby destinations</option>
              <option value="Big Sur">Big Sur</option>
              <option value="Prescott">Prescott</option>
              <option value="Fort Mayers">Fort Mayers</option>
              <option value="Tucson">Tucson</option>
              <option value="St. Joseph">St. Joseph</option>
              <option value="Madrid">Madrid</option>
            </select>
          </div>
        </div>

        <div className={classNames(styles.formItem, styles.activity)}>
          <div className={styles.selectGroup}>
            <label className={styles.formLabel}>
              Activity <br />
              <select
                name="activities"
                value={activity}
                onChange={handleSelectChange}
                className={classNames(styles.formSelect)}
              >
                <option value="All">All Activities</option>
                <option value="Swimming">Swimming</option>
                <option value="Fitness">Fitness</option>
                <option value="Football">Football</option>
                <option value="Bysicle">Bysicle</option>
              </select>
            </label>
            <br />
          </div>
        </div>

        <div className={classNames(styles.formItem, styles.date)}>
          <div className={styles.selectGroup}>
            <DateCalendar date={date} setDate={setDate} />
          </div>
        </div>

        <div className={classNames(styles.formItem, styles.guest)}>
          <div className={styles.selectGroup}>
            <label className={styles.formLabel}>
              Guests <br />
              <select
                name="guests"
                value={guests}
                onChange={handleSelectChange}
                className={classNames(styles.formSelect)}
              >
                <option value="1">1 guest</option>
                <option value="2-3">2-3 guests</option>
                <option value="4-5">4-5 guests</option>
                <option value="6>">6 and more guests</option>
              </select>
            </label>
            <br />
          </div>
        </div>

        <button type="submit" class={styles.formBtn}></button>
      </form>
    </div>
  );
}
