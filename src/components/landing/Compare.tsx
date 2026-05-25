import { SplitButton } from '../SplitButton'
import { jar4, jar5, scienceIcon } from './assets'
import type { LandingPageData } from './data'

type CompareProps = {
  data: LandingPageData['compare']
}

export function Compare({ data }: CompareProps) {
  return (
    <section className="compare" id="цена">
      {/* Текстовое сравнение отделено от фактов, чтобы на mobile менять порядок без дублирования контента. */}
      <div className="compare__copy">
        <h2>{data.title}</h2>
        <div className="compare__copy-text">
        {data.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        </div>
      </div>
      <div className="compare__fact compare__fact--left">
        <img src={scienceIcon} alt="" />
        <span className="compare__fact-line" aria-hidden="true"></span>
        <div className="compare__fact-copy">
        <h3>{data.leftFact.title}</h3>
        <p>{data.leftFact.text}</p>
        </div>
      </div>
      {/* Разные банки для desktop/mobile подключены через picture, CSS отвечает только за позицию. */}
      <picture className="compare__jar">
        <source media="(max-width: 900px)" srcSet={data.mobileImage || jar5} />
        <img src={data.image || jar4} alt={data.imageAlt} />
      </picture>
      <div className="compare__fact compare__fact--right">
        <img src={scienceIcon} alt="" />
        <span className="compare__fact-line" aria-hidden="true"></span>
        <div className="compare__fact-body">
          <div className="compare__fact-copy">
        <h3>{data.rightFact.title}</h3>
        <p>{data.rightFact.text}</p>
          </div>
        <SplitButton>{data.button}</SplitButton>
        </div>
      </div>
    </section>
  )
}
