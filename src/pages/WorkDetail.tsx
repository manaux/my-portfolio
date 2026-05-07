import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Carousel from '../components/Carousel'
import Nav from '../components/Nav'
import styles from './WorkDetail.module.css'

function WorkDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

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

  const carouselItems = [
    { color: project.color, label: 'Screenshot 1' },
    { color: project.color + 'cc', label: 'Screenshot 2' },
    { color: project.color + '99', label: 'Screenshot 3' },
    { color: project.color + '66', label: 'Screenshot 4' },
  ]

  return (
    <>
      <Nav />
      <div className={styles.page}>
        <div className={styles.backWrapper}>
          <Link to="/" className={styles.backLink}>
            ← Back to Works
          </Link>
        </div>

        <div
          className={styles.hero}
          style={{ backgroundColor: project.color }}
        >
          <span>{project.name}</span>
        </div>

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

        <section className={styles.carouselSection}>
          <h2 className={styles.carouselHeading}>Screenshots</h2>
          <Carousel items={carouselItems} />
        </section>
      </div>
    </>
  )
}

export default WorkDetail
