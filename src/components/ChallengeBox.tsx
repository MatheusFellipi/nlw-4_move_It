import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenges, resetChallenge } = useContext(ChallengeContext);
  return (

    <div className={styles.challengeBoxContainer} >
      {activeChallenges ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenges.amount}xp</header>
          <main>
            <img src={`icons/${activeChallenges.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenges.description}</p>
          </main>
          <footer>
            <button
              type='button'
              onClick={resetChallenge}
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button type='button' className={styles.challengeSuccededButton} >Completei</button>

          </footer>

        </div>
      ) :
        (<div className={styles.challengeBoxNotActive}>
          <strong>
            Inicie um ciclo
            para receber desafios
        </strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
          Avance de level completando os desafios.
        </p>
        </div>
        )}

    </div>);
}

