import { Inter } from 'next/font/google'
import Main from './Main/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <Main />
    </main>
  )
}
