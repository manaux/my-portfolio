import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const sections = ['home', 'expertise', 'works', 'experience', 'reviews']
const labels: Record<string, string> = {
  home: '// Home',
  expertise: '// Expertise',
  works: '// Work',
  experience: '// Experience',
  reviews: '// Reviews',
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.navInner}>
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
