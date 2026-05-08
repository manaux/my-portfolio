import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Carousel from '../components/Carousel'
import Nav from '../components/Nav'
import styles from './WorkDetail.module.css'

function WorkDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.body.classList.add('work-page')
    return () => document.body.classList.remove('work-page')
  }, [slug])

  if (!project) {
    return (
      <>
        <Nav />
        <div className={styles.notFound}>
          <p>Project not found.</p>
          <Link to="/">← Back to Home</Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Nav />
      <div className={styles.page}>
        <div className={styles.backWrapper}>
          <button
            className={styles.backLink}
            onClick={() => {
              navigate('/')
              setTimeout(() => {
                document.getElementById('works')?.scrollIntoView({ behavior: 'instant' })
              }, 100)
            }}
          >
            ← Back to Works
          </button>
        </div>

        {project.heroScreenshot && (
          <div className={styles.hero}>
            <img src={project.heroScreenshot} alt={`${project.name} screenshot`} className={styles.heroImage} />
          </div>
        )}

        <div className={styles.content}>
          <h1 className={styles.title}>{project.name}</h1>
          <p className={styles.description}>{project.fullDescription}</p>

          <section>
            <h2 className={styles.techHeading}>Tech Stack</h2>
            <div className={styles.tags}>
              {project.techStack.map((tech) => (
                <span key={tech} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        {project.screenshots.length > 0 && (
          <section className={styles.carouselSection}>
            <h2 className={styles.carouselHeading}>Screenshots</h2>
            <Carousel items={project.screenshots} />
          </section>
        )}
      </div>
    </>
  )
}

export default WorkDetail
