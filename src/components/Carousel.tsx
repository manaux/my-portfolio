import { useRef, useState } from 'react'
import styles from './Carousel.module.css'

interface CarouselItem {
  color: string
  label: string
}

interface CarouselProps {
  items: CarouselItem[]
}

function Carousel({ items }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(items.length <= 1)

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft >= maxScroll - 2)
  }

  const scrollLeft = () => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' })
  }

  const scrollRight = () => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: el.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.scrollContainer}
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ backgroundColor: item.color }}
          >
            <span className={styles.itemLabel}>{item.label}</span>
          </div>
        ))}
      </div>

      <button
        className={`${styles.arrow} ${styles.arrowLeft} ${atStart ? styles.arrowHidden : ''}`}
        onClick={scrollLeft}
        aria-label="Previous slide"
      >
        &#8592;
      </button>

      <button
        className={`${styles.arrow} ${styles.arrowRight} ${atEnd ? styles.arrowHidden : ''}`}
        onClick={scrollRight}
        aria-label="Next slide"
      >
        &#8594;
      </button>
    </div>
  )
}

export default Carousel
