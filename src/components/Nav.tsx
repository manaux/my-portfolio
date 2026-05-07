import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const sections = ['home', 'expertise', 'works', 'experience', 'reviews']
const labels: Record<string, string> = {
  home: 'Home',
  expertise: 'Expertise',
  works: 'Works',
  experience: 'Experience',
  reviews: 'Reviews',
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-64px 0px 0px 0px',
      }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
      }
    })
    observers.push(observer)

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={styles.nav}>
      <div className={styles.navInner}>
        <a
          className={styles.logo}
          href="#"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          SB
        </a>
        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
          {sections.map((id) => (
            <a
              key={id}
              href="#"
              className={activeSection === id ? styles.active : undefined}
              onClick={(e) => handleNavClick(e, id)}
            >
              {labels[id]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Nav
