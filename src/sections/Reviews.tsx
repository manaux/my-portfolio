import styles from './Reviews.module.css'

const reviews = [
  {
    name: 'Former Colleague',
    role: 'Senior Developer',
    initials: 'FC',
    quote:
      'A dedicated and skilled developer who consistently delivers high-quality work. Great at collaborating across teams and finding elegant solutions to complex problems.',
  },
  {
    name: 'Team Lead',
    role: 'Engineering Manager',
    initials: 'TL',
    quote:
      "One of the most reliable engineers I've worked with. Strong technical skills combined with excellent communication make them a valuable team member on any project.",
  },
  {
    name: 'Project Partner',
    role: 'Product Designer',
    initials: 'PP',
    quote:
      'Exceptional attention to detail in UI implementation. Always goes the extra mile to ensure the final product matches the design vision perfectly.',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Reviews</h2>
        <div className={styles.grid}>
          {reviews.map((review) => (
            <div key={review.name} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>{review.initials}</div>
                <div>
                  <div className={styles.name}>{review.name}</div>
                  <div className={styles.role}>{review.role}</div>
                </div>
              </div>
              <p className={styles.quote}>{review.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
