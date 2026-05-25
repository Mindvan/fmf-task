import { SplitButton } from '../SplitButton'
import { fmfLogoDark, maxLogo, telegramLogo, vkLogo, whatsappLogo } from './assets'
import type { LandingPageData } from './data'

type ContactProps = {
  data: LandingPageData['contact']
}

export function Contact({ data }: ContactProps) {
  const socials = [
    { icon: telegramLogo, label: 'Telegram', url: data.socials.telegram },
    { icon: maxLogo, label: 'Max', url: data.socials.max },
    { icon: whatsappLogo, label: 'WhatsApp', url: data.socials.whatsapp },
    { icon: vkLogo, label: 'VK', url: data.socials.vk },
  ]

  return (
    <footer className="contact" id="contact">
      {/* Верхняя панель футера: заголовок, контакты и форма находятся в одном визуальном блоке. */}
      <div className="contact__panel">
        <h2 className="contact__title">{data.title}</h2>
        <div className="contact__content">
          <div className="contact__aside">
          <h2>{data.title}</h2>
          <div className="contact__channel">
            <span>{data.emailLabel}</span>
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </div>
          <div className="contact__channel">
            <span>{data.messengersLabel}</span>
            <div className="contact__socials">
              {/* Один шаблон ссылки для всех мессенджеров, различается только иконка. */}
              {socials.map((social) => (
                <a href={social.url || '#contact'} key={social.label} aria-label={social.label}>
                  <img src={social.icon} alt="" />
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
            {data.formLabels.name}
            <input id="contact-name" name="name" placeholder={data.formPlaceholders.name} />
          </label>
          <label htmlFor="contact-phone">
            {data.formLabels.phone}
            <input id="contact-phone" name="phone" placeholder={data.formPlaceholders.phone} />
          </label>
          <label htmlFor="contact-email">
            {data.formLabels.email}
            <input id="contact-email" name="email" placeholder={data.formPlaceholders.email} />
          </label>
            </div>
          {/* Чекбокс оставлен настоящим input, визуальная галочка рисуется CSS. */}
          <label className="contact__agree">
            <input id="contact-agree" name="agreement" type="checkbox" />
            <span>{data.agreement}</span>
          </label>
          </div>
          <SplitButton>{data.button}</SplitButton>
        </form>
      </div>
      </div>
      {/* Нижний футер отдельно от формы: на mobile порядок блоков меняется через CSS. */}
      <div className="contact__bottom">
        <div>
          <p>{data.copyright}</p>
          <p>{data.rights}</p>
        </div>
        <div className="contact__brand">
          <img src={fmfLogoDark} alt="FMF" />
          <p>{data.disclaimer}</p>
        </div>
        <div>
          <a href="#contact">{data.offer}</a>
          <a href="#contact">{data.privacy}</a>
        </div>
      </div>
    </footer>
  )
}
