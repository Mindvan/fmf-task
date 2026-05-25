import { useRef } from 'react'

import { jar2, leftIcon, line1, line2, rightIcon } from './assets'
import type { LandingPageData } from './data'

type BenefitsWaveProps = {
  data: LandingPageData['benefits']
}

export function BenefitsWave({ data }: BenefitsWaveProps) {
  // Ref нужен только мобильному слайдеру карточек: desktop использует статичное расположение по волне.
  const cardsRef = useRef<HTMLDivElement>(null)

  const scrollCards = (direction: 1 | -1) => {
    const scroller = cardsRef.current

    if (!scroller) return

    // Вычисляем следующую карточку по ее offsetLeft, чтобы учитывался реальный gap между карточками.
    const cards = Array.from(scroller.querySelectorAll<HTMLElement>('.benefits__card'))
    const currentIndex = cards.findIndex((card) => card.offsetLeft >= scroller.scrollLeft + 1)
    const fallbackIndex = direction > 0 ? 0 : cards.length - 1
    const activeIndex = currentIndex === -1 ? fallbackIndex : currentIndex
    const nextIndex = Math.min(Math.max(activeIndex + direction, 0), cards.length - 1)

    scroller.scrollTo({ left: cards[nextIndex].offsetLeft - scroller.offsetLeft, behavior: 'smooth' })
  }

  return (
    <section className="benefits">
      {/* Декоративные линии вынесены отдельными слоями под контентом секции. */}
      <img className="benefits__line benefits__line--top" src={line1} alt="" aria-hidden="true" />
      <img className="benefits__line benefits__line--bottom" src={line2} alt="" aria-hidden="true" />
      <div className="benefits__copy">
        <h3>{data.title}</h3>
        <p>
          {/* В мобильном макете нужен другой подзаголовок, поэтому держим обе версии в DOM. */}
          <span className="responsive-copy responsive-copy--desktop">{data.textDesktop}</span>
          <span className="responsive-copy responsive-copy--mobile">{data.textMobile}</span>
        </p>
      </div>
      <img className="benefits__jar" src={data.image || jar2} alt={data.imageAlt} />
      <div className="benefits__cards" ref={cardsRef}>
        {/* Карточки приходят из data.ts, чтобы не дублировать одинаковую BEM-разметку. */}
        {data.cards.map((card, index) => (
          <article className={`benefits__card benefits__card--${index + 1}`} key={card.title}>
            <span className="benefits__icon">
              {card.icon && <img src={card.icon} alt="" />}
            </span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
      <button className="benefits__next" type="button" aria-label="Следующая карточка" onClick={() => scrollCards(1)}>
        <img src={rightIcon} alt="" />
      </button>
      <button className="benefits__prev" type="button" aria-label="Предыдущая карточка" onClick={() => scrollCards(-1)}>
        <img src={leftIcon} alt="" />
      </button>
    </section>
  )
}
