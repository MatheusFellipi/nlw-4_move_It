import { useState, useEffect, useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

  const { startNewChallengs } = useContext(ChallengeContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutos = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutosLeft, minutosRight] = String(minutos).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }
  function resertCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
  }
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)

    } else
      if (isActive && time === 0) {
        setHasFinished(true);
        setIsActive(false)
        startNewChallengs();
      }
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutosLeft}</span>
          <span>{minutosRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado
        </button>
      ) : (
          <>
            {isActive ? (
              <button type='button'
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resertCountdown}>
                Abandonar ciclo
              </button>
            ) : (
                <button type='button'
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >
                  Inicia um ciclo
                </button>
              )}

          </>
        )}



    </div>
  )
}

