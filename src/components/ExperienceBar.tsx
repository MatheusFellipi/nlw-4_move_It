import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'


export function ExperienceBar() {
  const { currenteExperience, experienceToNextLevel } = useContext(ChallengeContext);
  const percentToNextLevel = Math.round((currenteExperience * 100) / experienceToNextLevel)
  return (
    <header className={styles.experienceBar}>
      <span> 0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}` }}>
          {currenteExperience} px
        </span>

      </div>
      <span>{experienceToNextLevel} xp</span>


    </header>
  )
}
