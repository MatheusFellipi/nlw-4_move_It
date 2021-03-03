import '../styles/global.css'
import { ChallengeContext, ChallengsProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {

  return (
    <ChallengsProvider >
      <Component {...pageProps} />
    </ChallengsProvider>

  )
}

export default MyApp
