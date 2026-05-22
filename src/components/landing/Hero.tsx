import { SplitButton } from '../SplitButton'
import { Header } from './Header'
import { jarMain } from './assets'

export function Hero() {
  return (
    <section className="hero" id="hero">
      <Header />
      <div className="hero__content">
        {/* Левый контент собран группами, чтобы gap-ами держать desktop и mobile структуру без лишних margin. */}
        <div className="hero__left">
          <div className="hero__main">
          <h1 className="hero__title">Свобода движения</h1>
          <div className="hero__line"></div>
            <div className="hero__lead-action">
          <p className="hero__lead">«Complex SW СУСТАВЫ» порошок для опорно-двигательного аппарата</p>
        <p className="hero__meta">
          <span>420г. / 30 порций</span>
          <span>Месячный курс</span>
        </p>
          <SplitButton className="hero__button">Купить в 1 клик</SplitButton>
            </div>
          </div>
          <div className="hero__capsules">
            <strong>1 порция = 17 обычных капсул</strong>
            <span>Комплекс, который питает суставы изнутри и способствует обновлению хрящевой ткани</span>
          </div>
        </div>
        {/* Центральная банка остается отдельным слоем, чтобы CSS мог независимо позиционировать ее на разных ширинах. */}
        <img className="hero__jar" src={jarMain} alt="Complex SW СУСТАВЫ" />
      </div>
    </section>
  )
}
