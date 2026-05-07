import styles from './Hero.module.css'
import SwirlBackground from '../components/SwirlBackground'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <SwirlBackground />
      <div className={styles.container}>
        <h1 className={styles.name}>Sergii Bilodedenko</h1>
        <p className={styles.subtitle}>Software Engineer, Front End &amp; App Developer</p>
        <div className={styles.links}>
          <a href="mailto:s.bilodedenko@gmail.com" className={styles.link}>
            s.bilodedenko@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/bilodedenko"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </div>
      </div>
      <button
        className={styles.scrollDown}
        onClick={() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to next section"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  )
}
