import { useState } from 'react'
import styles from './Experience.module.css'

interface ExperienceEntry {
  company: string
  role: string
  dates: string
  location: string
  bullets: string[]
  techStack: string[]
}

const experiences: ExperienceEntry[] = [
  {
    company: '4shared – File Sharing and Storage',
    role: 'Frontend Developer',
    dates: '04/2024 — Present',
    location: 'Tampa, FL, USA',
    bullets: [
      'Led ground-up redesign of the platform, which serves 30+ million active monthly users, enhancing overall usability and significantly improving page load times',
      'Consolidated desktop and mobile versions into a single responsive web application for a unified user experience',
      'Led migration of user\'s file manager from jQuery to React SPA',
      'Developed and integrated new scalable services that optimized SEO performance, driving a 15% increase in organic user acquisition',
    ],
    techStack: ['React', 'TypeScript', 'jQuery', 'REST API', 'Webpack', 'HTML', 'CSS'],
  },
  {
    company: 'Track Me Fast – Parcels Tracking App',
    role: 'Flutter Developer',
    dates: '08/2021 — 04/2024',
    location: 'Kyiv, Ukraine',
    bullets: [
      'Built and launched a cross-platform parcel tracking application (Android, iOS, and Web) from scratch, scaling to 5 thousand monthly active users',
      'Implemented key user engagement features (onboarding, deep links, push notifications) that contributed to a 25% increase in weekly active users',
      'Optimized CI/CD pipelines and deployment processes, reducing build time and ensuring successful releases to both major app stores',
      'Developed a comprehensive cross-platform subscription purchase flow, integrated with RevenueCat, to manage billing and analytics',
    ],
    techStack: ['Flutter', 'Dart', 'Firebase', 'RevenueCat', 'CI/CD', 'Android', 'iOS'],
  },
  {
    company: 'AdPlayer.Pro – Web Advertising Platform',
    role: 'Frontend Developer',
    dates: '08/2017 — 08/2021',
    location: 'Kyiv, Ukraine',
    bullets: [
      'Led the full-cycle development of a complex web advertising platform, supporting 4 distinct user cabinets. Implemented a white-labeling feature adopted by 3 key clients, resulting in a 30% increase in client adoption',
      'Developed an advanced outstream video player supporting over 40 adTech features and VAST/VPAID integrations, handling over 100 million ad impressions monthly',
      'Contributed to the development of a high-performance web application for an internal multi-platform messaging service (Angular/gRPC) used by 30+ internal team members',
      'Implemented a full suite of modern messaging features, including core functionalities like group chats, media previews, forwarding',
    ],
    techStack: ['Angular', 'JavaScript', 'TypeScript', 'gRPC', 'VAST/VPAID', 'Webpack', 'REST API'],
  },
  {
    company: '4Sync – Cloud File Hosting',
    role: 'Frontend Developer',
    dates: '04/2012 — 08/2017',
    location: 'Kyiv, Ukraine',
    bullets: [
      'Developed the core user account and file management section, implementing a full suite of file logic (upload/download, sharing, rich media preview) utilized by the platform\'s 2 million users',
      'Successfully optimized graphics, CSS, and script loading to achieve a 50% improvement in page load speed',
      'Integrated Bootstrap framework to make service responsive and modular, created internal UI components library, implemented i18n including full RTL languages support',
      'Gained foundational experience working within a large IT company, collaborating directly with 4 cross-functional teams (Design, Backend, QA, Mobile)',
    ],
    techStack: ['JavaScript', 'jQuery', 'Bootstrap', 'HTML', 'CSS', 'REST API', 'i18n'],
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
        <h2 className={styles.heading}>Professional Experience</h2>
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
                    <ul className={styles.bullets}>
                      {entry.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
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
