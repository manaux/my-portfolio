import { useState } from 'react'
import styles from './Experience.module.css'

interface ExperienceEntry {
  company: string
  role: string
  dates: string
  description: string
  techStack: string[]
}

const experiences: ExperienceEntry[] = [
  {
    company: '4shared',
    role: 'Frontend Developer',
    dates: '04/2024 — Present',
    description:
      'Leading frontend development for a major file-sharing platform serving millions of users. Building modern, responsive interfaces and optimizing web application performance for large-scale traffic.',
    techStack: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'REST API'],
  },
  {
    company: 'Track Me Fast',
    role: 'Mobile Developer',
    dates: '08/2021 — 04/2024',
    description:
      'Developed cross-platform mobile applications for GPS tracking and fleet management solutions. Implemented real-time location tracking, push notifications, and offline-capable data synchronization.',
    techStack: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Google Maps API', 'REST API'],
  },
  {
    company: 'AdPlayer.Pro',
    role: 'Frontend Developer',
    dates: '08/2017 — 08/2021',
    description:
      'Built and maintained a video advertising platform with complex ad-serving logic and analytics dashboards. Developed embeddable video player widgets and real-time reporting interfaces.',
    techStack: ['JavaScript', 'Vue.js', 'HTML5', 'CSS3', 'Video.js', 'Webpack', 'REST API'],
  },
  {
    company: '4Sync',
    role: 'Mobile & Frontend Developer',
    dates: '04/2012 — 08/2017',
    description:
      'Developed mobile and web clients for a cloud storage and synchronization service. Built native Android applications and responsive web interfaces for file management and sharing.',
    techStack: ['Android', 'Java', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'REST API'],
  },
]

export default function Experience() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  function toggleItem(index: number) {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Experience</h2>
        <div className={styles.accordion}>
          {experiences.map((entry, index) => {
            const isOpen = openItems.has(index)
            return (
              <div key={index} className={styles.accordionItem}>
                <button
                  className={styles.accordionHeader}
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`experience-body-${index}`}
                >
                  <span className={styles.company}>{entry.company}</span>
                  <span className={styles.role}>{entry.role}</span>
                  <span className={styles.dates}>{entry.dates}</span>
                  <span
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`experience-body-${index}`}
                    className={styles.accordionBody}
                  >
                    <p className={styles.description}>{entry.description}</p>
                    <div className={styles.techStack}>
                      {entry.techStack.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
