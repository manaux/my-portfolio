import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import styles from './Works.module.css'

export default function Works() {
  return (
    <section id="works" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Work</h2>
        <div className={styles.titleImage}>
          I'm a software engineer with 14 years of experience specializing in React, Flutter, and Angular
          development for high-load web and mobile SaaS applications. Expert in leading full-scale UI redesigns and technical migrations while ensuring
          seamless backend integration and superior product quality.
        </div>
        <div className={styles.grid}>
          {projects.map((project, index) => {
            const isLarge = index < 3
            return (
              <Link
                key={project.slug}
                to={`/works/${project.slug}`}
                className={`${styles.tile} ${isLarge ? styles.tileLarge : styles.tileSmall} ${project.slug}`}
              >
                <div
                  className={styles.placeholder}
                  style={{ backgroundImage: `url(${project.logo})` }}
                />
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
