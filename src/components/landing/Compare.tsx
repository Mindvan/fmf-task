import { SplitButton } from '../SplitButton'
import { jar4, jar5, scienceIcon } from './assets'

export function Compare() {
  return (
    <section className="compare" id="цена">
      {/* Текстовое сравнение отделено от фактов, чтобы на mobile менять порядок без дублирования контента. */}
      <div className="compare__copy">
        <h2>Сравнение с другими продуктами</h2>
        <div className="compare__copy-text">
        <p>«Complex SW СУСТАВЫ» — это комплексная добавка, сочетающая высокие дозировки глюкозамина и хондроитина с противовоспалительной босвеллией и полным набором витаминов для защиты соединительной ткани.</p>
        <p>В отличие от многих стандартных средств на рынке, он предлагает законченную систему «все в одной порции».</p>
        <p>Ключевым преимуществом является наличие клинически значимых дозировок (например, 1250 мг глюкозамина), тогда как многие на рынке используют уменьшенные дозировки ради экономии.
</p>
        </div>
      </div>
      <div className="compare__fact compare__fact--left">
        <img src={scienceIcon} alt="" />
        <span className="compare__fact-line" aria-hidden="true"></span>
        <div className="compare__fact-copy">
        <h3>1 порция = 17 обычных капсул</h3>
        <p>Доза в 3 раза выше конкурентов. Достаточно одной порции в день</p>
        </div>
      </div>
      {/* Разные банки для desktop/mobile подключены через picture, CSS отвечает только за позицию. */}
      <picture className="compare__jar">
        <source media="(max-width: 900px)" srcSet={jar5} />
        <img src={jar4} alt="Complex SW СУСТАВЫ" />
      </picture>
      <div className="compare__fact compare__fact--right">
        <img src={scienceIcon} alt="" />
        <span className="compare__fact-line" aria-hidden="true"></span>
        <div className="compare__fact-body">
          <div className="compare__fact-copy">
        <h3>Курс на 1 месяц</h3>
        <p>30 порций = 130₽ в день</p>
          </div>
        <SplitButton>Купить в 1 клик</SplitButton>
        </div>
      </div>
    </section>
  )
}
