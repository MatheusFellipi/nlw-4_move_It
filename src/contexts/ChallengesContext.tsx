import { createContext, useState, ReactNode } from 'react'

import challenges from '../../challenges.json'

interface challenge {
  type: 'body' | 'eye',
  description: string,
  amount: number

}
interface ChallengesContextData {
  level: number,
  currenteExperience: number,
  challengsCompleted: number,
  experienceToNextLevel: number,
  activeChallenges: challenge,
  levelUp: () => void,
  startNewChallengs: () => void,
  resetChallenge: () => void,
}
interface ChallengsProviderProps {
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengesContextData)

export function ChallengsProvider({ children }: ChallengsProviderProps) {

  const [level, setLevel] = useState(1);
  const [currenteExperience, setCurrenteExperience] = useState(0);
  const [challengsCompleted, setChallengsCompleted] = useState(0);
  const [activeChallenges, setActiveChallenges] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function startNewChallengs() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex]
    setActiveChallenges(challenge)
  }
  function resetChallenge() {
    setActiveChallenges(null)
  }

  function levelUp() {
    setLevel(level + 1)
  }

  return (
    <ChallengeContext.Provider value={{
      level,
      levelUp,
      currenteExperience,
      experienceToNextLevel,
      challengsCompleted,
      startNewChallengs,
      activeChallenges,
      resetChallenge,
    }}>
      {children}
    </ChallengeContext.Provider>
  )
}