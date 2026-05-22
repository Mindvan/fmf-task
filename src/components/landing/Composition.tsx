import { SplitButton } from '../SplitButton'
import { components } from './data'
import { spoon } from './assets'

export function Composition() {
  return (
    <section className="composition" id="состав">
      <div className="composition__card">
        {/* Маска изображения фиксирует видимый кроп, а сам img можно двигать/масштабировать CSS-переменными. */}
        <div className="composition__image-mask">
          <img className="composition__image" src={spoon} alt="Мерная ложка с порошком" />
        </div>
        <div className="composition__content">
        <h2 className="composition__title">«Complex SW СУСТАВЫ» — комплекс <span>из 9 активных компонентов</span></h2>
          <div className="composition__list">
            {/* Список компонентов выводится из данных, кнопка остается последним элементом этого потока. */}
            {components.map(([title, text]) => (
              <article className="composition__item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
            {/* На мобильном кнопка подписана "Заказать", на desktop остается текст макета "Купить в 1 клик". */}
            <SplitButton className="composition__button" mobileChildren="Заказать">Купить в 1 клик</SplitButton>
          </div>
        </div>
      </div>
    </section>
  )
}
