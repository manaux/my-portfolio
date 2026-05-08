import { Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Expertise from './sections/Expertise'
import Works from './sections/Works'
import Experience from './sections/Experience'
import Reviews from './sections/Reviews'
import WorkDetail from './pages/WorkDetail'

function HomePage() {
  return (
    <div className={styles.homePage}>
      <Nav />
      <main>
        <Hero />
        <Expertise />
        <Works />
        <Experience />
        <Reviews />
      </main>
    </div>
  )
}

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works/:slug" element={<WorkDetail />} />
      </Routes>
    </div>
  )
}

export default App
