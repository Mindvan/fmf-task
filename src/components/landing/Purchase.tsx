import { SplitButton } from '../SplitButton'
import { jar5, jar6, jar6Mobile } from './assets'
import type { LandingPageData } from './data'

type PurchaseProps = {
  data: LandingPageData['purchase']
}

export function Purchase({ data }: PurchaseProps) {
  return (
    <section className="purchase">
      {/* Левая карточка покупки: контент разделен на визуальную часть и CTA, чтобы mobile мог собрать колонку. */}
      <article className="purchase__price">
        <div className="purchase__price-content">
          <div className="purchase__price-main">
        <h2>{data.title.split('\n').map((line) => (
          <span key={line}>{line}<br /></span>
        ))}</h2>
        <img src={data.productImage || jar5} alt={data.productImageAlt} />
          </div>
          <div className="purchase__price-cta">
            <div className="purchase__price-meta">
        <strong>{data.price}</strong>
        <p>{data.meta}</p>
            </div>
        <SplitButton>{data.button}</SplitButton>
          </div>
        </div>
      </article>
      {/* Правая карточка инструкции использует picture для отдельного мобильного кадра. */}
      <article className="purchase__manual">
        <div className="purchase__manual-content">
        <h2>{data.manualTitle}</h2>
        <picture className="purchase__manual-image">
          <source media="(max-width: 900px)" srcSet={data.manualMobileImage || jar6Mobile} />
          <img src={data.manualImage || jar6} alt={data.manualImageAlt} />
        </picture>
        <p>
          {data.manualSteps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </p>
              </div>
      </article>
    </section>
  )
}
