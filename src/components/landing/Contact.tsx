import { SplitButton } from '../SplitButton'
import { fmfLogoDark, maxLogo, telegramLogo, vkLogo, whatsappLogo } from './assets'

export function Contact() {
  return (
    <footer className="contact" id="contact">
      {/* Верхняя панель футера: заголовок, контакты и форма находятся в одном визуальном блоке. */}
      <div className="contact__panel">
        <h2 className="contact__title">Остались вопросы? Напишите нам</h2>
        <div className="contact__content">
          <div className="contact__aside">
          <h2>Остались вопросы? Напишите нам</h2>
          <div className="contact__channel">
            <span>Эл. почта</span>
            <a href="mailto:info@test.ru">info@test.ru</a>
          </div>
          <div className="contact__channel">
            <span>Мессенджеры</span>
            <div className="contact__socials">
              {/* Один шаблон ссылки для всех мессенджеров, различается только иконка. */}
              {[telegramLogo, maxLogo, whatsappLogo, vkLogo].map((icon) => (
                <a href="#contact" key={icon} aria-label="Мессенджер">
                  <img src={icon} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <form className="contact__form">
          <div className="contact__form-main">
            <div className="contact__fields">
          {/* id/name на полях нужны для доступности, автозаполнения и отсутствия warning в инспекторе. */}
          <label htmlFor="contact-name">
            Имя
            <input id="contact-name" name="name" placeholder="Как к вам обращаться" />
          </label>
          <label htmlFor="contact-phone">
            Телефон
            <input id="contact-phone" name="phone" placeholder="+7 (___) __-__-__" />
          </label>
          <label htmlFor="contact-email">
            Эл. почта
            <input id="contact-email" name="email" placeholder="Ваша эл.почта" />
          </label>
            </div>
          {/* Чекбокс оставлен настоящим input, визуальная галочка рисуется CSS. */}
          <label className="contact__agree">
            <input id="contact-agree" name="agreement" type="checkbox" />
            <span>Я даю свое согласие на обработку персональных данных</span>
          </label>
          </div>
          <SplitButton>Оставить заявку</SplitButton>
        </form>
      </div>
      </div>
      {/* Нижний футер отдельно от формы: на mobile порядок блоков меняется через CSS. */}
      <div className="contact__bottom">
        <div>
          <p>© 2026, Оптисалт</p>
          <p>Все права защищены</p>
        </div>
        <div className="contact__brand">
          <img src={fmfLogoDark} alt="FMF" />
          <p>БАД. Не является лекарственным средством. Требуется консультация специалиста</p>
        </div>
        <div>
          <a href="#contact">Оферта</a>
          <a href="#contact">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  )
}
