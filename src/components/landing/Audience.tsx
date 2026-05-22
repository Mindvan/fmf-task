import { ages } from './data'
import { leftIcon, rightIcon, walking } from './assets'

export function Audience() {
  return (
    <section className="audience" id="для-кого">
      <h2>Подходит для всех, кто заботиться о своем здоровье и думает о своем будущем заранее.</h2>
      <div className="audience__photo">
        {/* Маска фото нужна для точного кропа на промежуточных ширинах и mobile. */}
        <div className="audience__image-mask">
          <img className="audience__image" src={walking} alt="Женщина идет по улице" />
        </div>
        <div className="audience__overlay">
        {/* Кнопки слайдера декоративные по макету; возрастные карточки сразу видны пользователю. */}
        <div className="audience__slider" aria-hidden="true">
          <button type="button">
            <img src={leftIcon} alt="" />
          </button>
          <button type="button">
            <img src={rightIcon} alt="" />
          </button>
        </div>
        <div className="audience__cards">
          {ages.map(([title, text]) => (
            <article className="audience__card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
