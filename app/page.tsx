import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Landing from '../app/Landing/Landing'
import Expertise from './Expertise/Expertise'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
      <Expertise />
    </main>
  )
}
