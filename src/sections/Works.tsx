import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import styles from './Works.module.css'

export default function Works() {
  return (
    <section id="works" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Works</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => {
            const isLarge = index < 3
            return (
              <Link
                key={project.slug}
                to={`/works/${project.slug}`}
                className={`${styles.tile} ${isLarge ? styles.tileLarge : styles.tileSmall}`}
              >
                <div
                  className={styles.placeholder}
                  style={{ backgroundColor: project.color }}
                >
                  <span className={styles.placeholderName}>{project.name}</span>
                </div>
                <div className={styles.tileContent}>
                  <h3 className={styles.tileName}>{project.name}</h3>
                  <p className={styles.tileDescription}>{project.shortDescription}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
