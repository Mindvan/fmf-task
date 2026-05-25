import { SplitButton } from '../SplitButton'
import { sus1 } from './assets'
import type { LandingPageData } from './data'

type ProductIntroProps = {
  data: LandingPageData['productIntro']
}

export function ProductIntro({ data }: ProductIntroProps) {
  return (
    <section className="intro" id="о-продукте">
      <h2 className="intro__title">{data.title}</h2>
      <div className="intro__grid">
        {/* Иллюстрация и текстовая колонка разделены, чтобы на адаптиве менять только сетку/gap. */}
        <img className="intro__image" src={data.image || sus1} alt={data.imageAlt} />
        <div className="intro__text">
          <div className="intro__copy">
          <h3>{data.subtitle}</h3>
          <p>
            {/* Тексты desktop/mobile отличаются по макету, переключение сделано CSS-классами. */}
            <span className="responsive-copy responsive-copy--desktop">{data.textDesktop}</span>
            <span className="responsive-copy responsive-copy--mobile">{data.textMobile}</span>
          </p>
          </div>
          <SplitButton>{data.button}</SplitButton>
        </div>
      </div>
    </section>
  )
}
