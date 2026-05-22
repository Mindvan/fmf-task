import { SplitButton } from '../SplitButton'
import { jar5, jar6, jar6Mobile } from './assets'

export function Purchase() {
  return (
    <section className="purchase">
      {/* Левая карточка покупки: контент разделен на визуальную часть и CTA, чтобы mobile мог собрать колонку. */}
      <article className="purchase__price">
        <div className="purchase__price-content">
          <div className="purchase__price-main">
        <h2>«Complex SW СУСТАВЫ»<br />для опорно-двигательного аппарата</h2>
        <img src={jar5} alt="Complex SW СУСТАВЫ" />
          </div>
          <div className="purchase__price-cta">
            <div className="purchase__price-meta">
        <strong>3 900 ₽</strong>
        <p>420г. / 30 порций</p>
            </div>
        <SplitButton>Купить в 1 клик</SplitButton>
          </div>
        </div>
      </article>
      {/* Правая карточка инструкции использует picture для отдельного мобильного кадра. */}
      <article className="purchase__manual">
        <div className="purchase__manual-content">
        <h2>Инструкция и рекомендации по применению</h2>
        <picture className="purchase__manual-image">
          <source media="(max-width: 900px)" srcSet={jar6Mobile} />
          <img src={jar6} alt="Банка, стакан и ложка" />
        </picture>
        <p>
          <span>1 ложка в день</span>
          <span>Растворить в 200 мл воды</span>
          <span>Принимать утром</span>
        </p>
              </div>
      </article>
    </section>
  )
}
