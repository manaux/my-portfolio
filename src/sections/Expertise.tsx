import styles from './Expertise.module.css'
import expDesktop from '../assets/exp-desktop-1.svg'
import expMobile from '../assets/exp-mobile-1.svg'

export default function Expertise() {
  return (
    <section id="expertise" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Expertise</h2>
        <div className={styles.titleImage}></div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={expDesktop} alt="Web development illustration" className={styles.cardImage} />
            <div>
              <h3 className={styles.cardTitle}>Web Development</h3>
              <p className={styles.cardText}>
                Building responsive, performant web applications with modern JavaScript frameworks.
                From interactive SPAs to complex dashboards — clean architecture, pixel-perfect UI,
                and smooth user experiences across all browsers and devices.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={expMobile} alt="Mobile development illustration" className={styles.cardImage} />
            <div>
              <h3 className={styles.cardTitle}>Mobile Development</h3>
              <p className={styles.cardText}>
                Creating native-quality mobile apps for iOS and Android. Expertise in cross-platform
                frameworks that deliver fast, fluid experiences — from concept and prototyping to
                App Store deployment and iteration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
