import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Landing from '../app/Landing/Landing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
    </main>
  )
}
