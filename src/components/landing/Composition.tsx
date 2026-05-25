import { SplitButton } from '../SplitButton'
import { spoon } from './assets'
import type { LandingPageData } from './data'

type CompositionProps = {
  data: LandingPageData['composition']
}

export function Composition({ data }: CompositionProps) {
  return (
    <section className="composition" id="состав">
      <div className="composition__card">
        {/* Маска изображения фиксирует видимый кроп, а сам img можно двигать/масштабировать CSS-переменными. */}
        <div className="composition__image-mask">
          <img className="composition__image" src={data.image || spoon} alt={data.imageAlt} />
        </div>
        <div className="composition__content">
        <h2 className="composition__title">{data.title} <span>{data.titleAccent}</span></h2>
          <div className="composition__list">
            {/* Список компонентов выводится из данных, кнопка остается последним элементом этого потока. */}
            {data.items.map(({ title, text }) => (
              <article className="composition__item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
            {/* На мобильном кнопка подписана "Заказать", на desktop остается текст макета "Купить в 1 клик". */}
            <SplitButton className="composition__button" mobileChildren={data.mobileButton}>{data.button}</SplitButton>
          </div>
        </div>
      </div>
    </section>
  )
}
