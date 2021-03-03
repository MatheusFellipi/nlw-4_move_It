import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/47674343?s=460&u=8703692d0c023951227d596c89217f761a7bcc3f&v=4" alt="" />

      <div>
        <strong>Matheus fellipi</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1</p>
      </div>

    </div>
  );

}