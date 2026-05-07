import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
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
    </section>
  )
}
