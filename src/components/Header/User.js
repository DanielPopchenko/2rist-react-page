import React from 'react';
import styles from './User.module.css';

import userAvatar from './images/user.jpg';

export default function User() {
  return (
    <div className={styles.user}>
      <div className={styles.userContent}>
        <span className={styles.userContent_greeting}>Holla,</span>
        <br />
        <span className={styles.userContent_name}>Alise Grindevald</span>
      </div>
      <div className={styles.userAvatar}>
        <img class={styles.userAvatar_img} src={userAvatar} alt="user avatar" />
      </div>
    </div>
  );
}
