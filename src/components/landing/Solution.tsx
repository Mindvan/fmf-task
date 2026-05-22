import { SplitButton } from '../SplitButton'
import { jar3 } from './assets'

export function Solution() {
  return (
    <section className="solution">
      {/* Блок-мост между преимуществами и составом: изображение и CTA остаются независимыми слоями. */}
      <img className="solution__jars" src={jar3} alt="Две банки Complex SW СУСТАВЫ" />
      <div className="solution__text">
      <h2>Питаем. Восстанавливаем. Сохраняем подвижность.</h2>
      <p>БАД «Complex SW СУСТАВЫ» от Оптисалт решает три главные задачи здоровья суставов</p>
      <SplitButton>Оставить заявку</SplitButton>
      </div>
    </section>
  )
}
