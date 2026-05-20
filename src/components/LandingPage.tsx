import { useRef, useState } from 'react'

import burgerIcon from '../../burder_icon.svg'
import fmfLogo from '../../fmf_logo.svg'
import fmfLogoDark from '../../fmf_logo_dark.svg'
import health1 from '../../health_1.svg'
import health2 from '../../health_2.svg'
import health3 from '../../health_3.svg'
import health4 from '../../health_4.svg'
import health5 from '../../health_5.svg'
import jar2 from '../../jar_2.png'
import jar3 from '../../jar_3.png'
import jar4 from '../../jar_4.png'
import jar5 from '../../jar_5.png'
import jar6 from '../../jar_6.png'
import jar6Mobile from '../../jar_6_mobile.png'
import jarMain from '../../jar_main.png'
import korIcon from '../../kor_icon.svg'
import leftIcon from '../../left.svg'
import line1 from '../../line_1.svg'
import line2 from '../../line_2.svg'
import maxLogo from '../../logos_max.svg'
import minusIcon from '../../minus.svg'
import plusIcon from '../../plus.svg'
import rightIcon from '../../right.svg'
import telegramLogo from '../../logos_telegram.svg'
import vkLogo from '../../logos_vk.svg'
import whatsappLogo from '../../logos_whatsapp.svg'
import scienceIcon from '../../science.svg'
import spoon from '../../spoon.jpg'
import sus1 from '../../sus_1.jpg'
import walking from '../../walking.jpg'
import { SplitButton } from './SplitButton'

const navItems = ['О продукте', 'Состав', 'Для кого', 'Цена', 'Вопросы']

const featureCards = [
  {
    title: 'Питание суставов',
    text: 'Полноценный рацион для ваших суставов. Ежедневно снабжаем хрящевую ткань важными витаминами и микроэлементами, необходимыми для поддержания ее структуры и функций.',
    icon: health1,
  },
  {
    title: 'Регенерация',
    text: 'Запуск собственных механизмов организма по восстановлению хряща, а не просто временное маскирование проблемы. Стимулируем внутренние ресурсы организма для восстановления хрящевой ткани, способствуя ее здоровью изнутри.',
    icon: health2,
  },
  {
    title: 'Результат',
    text: 'Сохраняем комфорт в любом движении. Благодаря комплексной поддержке вы дольше остаетесь активными, забываете о скованности и с легкостью занимаетесь любимыми делами.',
    icon: health3,
  },
  {
    title: 'Особенный состав',
    text: 'Витамины и микроэлементы, традиционно используемые для поддержки хрящевой ткани и суставов. Являются их элементами и участвуют в их метаболизме. Представлено в эффективной дозировке.',
    icon: health4,
  },
  {
    title: 'Комплексный эффект',
    text: 'Мы объединили нутритивную защиту и стимуляцию регенерации хряща. Это комплексный подход к здоровью суставов: питание + обновление = ваша уверенная подвижность и комфорт при любом уровне активности.',
    icon: health5,
  },
]

const components = [
  ['Глюкозамин', 'Хондропротектор, который восстанавливает хрящевую ткань, уменьшает боль и воспаление в суставах, а также улучшает их подвижность'],
  ['Хондроитин', 'Является структурным компонентом хряща, который защищает его от разрушения, улучшает минеральный обмен и стимулирует выработку суставной жидкости.'],
  ['МСМ', 'Метилсульфонилметан укрепляет суставы, снимает воспаление и боль, улучшает кожу, волосы, ногти и нормализует иммунитет'],
  ['Коллаген', 'Является основным фибриллярным белком соединительной ткани, обеспечивающим прочность и эластичность сухожилий, костей и хрящей'],
  ['Босвелия', 'Подавляет воспаление в суставах, блокируя синтез лейкотриенов, что уменьшает боль и защищает хрящ от разрушения без вреда для ЖКТ'],
  ['Витамин C', 'Участвует в синтезе коллагена, метаболизме гормонов и тирозина, окислительно-восстановительных процессах и улучшает усвоение железа в кишечнике'],
  ['Витамин E', 'Защищает суставы, замедляя разрушение хряща и уменьшая боль и скованность'],
  ['Марганец', 'Необходим для работы центральной нервной системы, крепости костей и жирового обмена'],
  ['Селен', 'Замедляет старение как антиоксидант и сохраняет эластичность тканей'],
]

const ages = [
  ['18+ лет', 'Поддержка суставов при травмах'],
  ['35+ лет', 'Профилактика возрастных изменений'],
  ['45+', 'Сохранение здоровья у женщин'],
]

const faq: Array<[string, boolean]> = [
  ['Можно ли «Complex SW СУСТАВЫ» принимать с другими препаратами', false],
  ['Какие противопоказания?', true],
  ['Почему в форме порошка, а не капсул?', false],
  ['Какие показания для приема комплекса', false],
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`header ${menuOpen ? 'header--open' : ''}`}>
      <a className="header__logo" href="#hero" aria-label="FMF">
        <img src={fmfLogo} alt="" />
      </a>
      <nav className="header__nav" aria-label="Навигация">
        {navItems.map((item) => (
          <a className="header__link" href={`#${item.toLowerCase().replace(' ', '-')}`} key={item} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <SplitButton className="header__button">Оставить заявку</SplitButton>
      <button className="header__menu" type="button" aria-label="Открыть меню" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
        <img src={burgerIcon} alt="" />
      </button>
      <button className="header__cart" type="button" aria-label="Корзина">
        <img src={korIcon} alt="" />
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <Header />
      <div className="hero__content">
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
        <img className="hero__jar" src={jarMain} alt="Complex SW СУСТАВЫ" />
      </div>
    </section>
  )
}

function ProductIntro() {
  return (
    <section className="intro" id="о-продукте">
      <h2 className="intro__title">Комплекс для тех, кто хочет свободно двигаться и заботиться о своих суставах каждый день</h2>
      <div className="intro__grid">
        <img className="intro__image" src={sus1} alt="Визуализация сустава" />
        <div className="intro__text">
          <div className="intro__copy">
          <h3>Комплекс для ежедневной нутритивной поддержки суставов и естественного обновления хрящевой ткани, помогающий сохранять подвижность и комфорт при активном образе жизни</h3>
          <p>
            <span className="responsive-copy responsive-copy--desktop">Это сбалансированный комплекс витаминов и микроэлементов, разработанный для ежедневного приема. Он обеспечивает питание суставов и стимулирует восстановление хряща, что дарит вам свободу движений без дискомфорта даже при высоких физических нагрузках.</span>
            <span className="responsive-copy responsive-copy--mobile">Комплекс для ежедневной нутритивной поддержки суставов и естественного обновления хрящевой ткани, помогающий сохранять подвижность и комфорт при активном образе жизни</span>
          </p>
          </div>
          <SplitButton>Оставить заявку</SplitButton>
        </div>
      </div>
    </section>
  )
}

function BenefitsWave() {
  const cardsRef = useRef<HTMLDivElement>(null)

  const scrollCards = (direction: 1 | -1) => {
    const scroller = cardsRef.current

    if (!scroller) return

    const cards = Array.from(scroller.querySelectorAll<HTMLElement>('.benefits__card'))
    const currentIndex = cards.findIndex((card) => card.offsetLeft >= scroller.scrollLeft + 1)
    const fallbackIndex = direction > 0 ? 0 : cards.length - 1
    const activeIndex = currentIndex === -1 ? fallbackIndex : currentIndex
    const nextIndex = Math.min(Math.max(activeIndex + direction, 0), cards.length - 1)

    scroller.scrollTo({ left: cards[nextIndex].offsetLeft - scroller.offsetLeft, behavior: 'smooth' })
  }

  return (
    <section className="benefits">
      <img className="benefits__line benefits__line--top" src={line1} alt="" aria-hidden="true" />
      <img className="benefits__line benefits__line--bottom" src={line2} alt="" aria-hidden="true" />
      <div className="benefits__copy">
        <h3>Представьте, что вы каждый день даете своим суставам «витамин бодрости», который помогает им оставаться гибкими и здоровыми.</h3>
        <p>
          <span className="responsive-copy responsive-copy--desktop">Благодаря поддержке естественных процессов обновления тканей, вы забываете о скованности и с легкостью наслаждаетесь любимым спортом или прогулками.</span>
          <span className="responsive-copy responsive-copy--mobile">Комплекс для ежедневной нутритивной поддержки суставов и естественного обновления хрящевой ткани, помогающий сохранять подвижность и комфорт при активном образе жизни</span>
        </p>
      </div>
      <img className="benefits__jar" src={jar2} alt="Complex SW СУСТАВЫ" />
      <div className="benefits__cards" ref={cardsRef}>
        {featureCards.map((card, index) => (
          <article className={`benefits__card benefits__card--${index + 1}`} key={card.title}>
            <span className="benefits__icon">
              <img src={card.icon} alt="" />
            </span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
      <button className="benefits__next" type="button" aria-label="Следующая карточка" onClick={() => scrollCards(1)}>
        <img src={rightIcon} alt="" />
      </button>
      <button className="benefits__prev" type="button" aria-label="Предыдущая карточка" onClick={() => scrollCards(-1)}>
        <img src={leftIcon} alt="" />
      </button>
    </section>
  )
}

function Solution() {
  return (
    <section className="solution">
      <img className="solution__jars" src={jar3} alt="Две банки Complex SW СУСТАВЫ" />
      <div className="solution__text">
      <h2>Питаем. Восстанавливаем. Сохраняем подвижность.</h2>
      <p>БАД «Complex SW СУСТАВЫ» от Оптисалт решает три главные задачи здоровья суставов</p>
      <SplitButton>Оставить заявку</SplitButton>
      </div>
    </section>
  )
}

function Composition() {
  return (
    <section className="composition" id="состав">
      <div className="composition__card">
        <div className="composition__image-mask">
          <img className="composition__image" src={spoon} alt="Мерная ложка с порошком" />
        </div>
        <div className="composition__content">
        <h2 className="composition__title">«Complex SW СУСТАВЫ» — комплекс <span>из 9 активных компонентов</span></h2>
          <div className="composition__list">
            {components.map(([title, text]) => (
              <article className="composition__item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <SplitButton className="composition__button" mobileChildren="Заказать">Купить в 1 клик</SplitButton>
        </div>
      </div>
    </section>
  )
}

function Audience() {
  return (
    <section className="audience" id="для-кого">
      <h2>Подходит для всех, кто заботиться о своем здоровье и думает о своем будущем заранее.</h2>
      <div className="audience__photo">
        <div className="audience__image-mask">
          <img className="audience__image" src={walking} alt="Женщина идет по улице" />
        </div>
        <div className="audience__overlay">
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

function Compare() {
  return (
    <section className="compare" id="цена">
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

function Purchase() {
  return (
    <section className="purchase">
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

function Faq() {
  const [openIndex, setOpenIndex] = useState(() => faq.findIndex(([, open]) => open))
  const answer = 'Противопоказанием является индивидуальная непереносимость компонентов препарата.'

  return (
    <section className="faq" id="вопросы">
      {faq.map(([question], index) => {
        const open = index === openIndex

        return (
        <article className="faq__item" key={question}>
          <button
            className="faq__question"
            type="button"
            aria-expanded={open}
            onClick={() => setOpenIndex(open ? -1 : index)}
          >
            <h3>{question}</h3>
            <img className="faq__icon" src={open ? minusIcon : plusIcon} alt="" />
          </button>
            {open && <p>{answer}</p>}
        </article>
        )
      })}
    </section>
  )
}

function Contact() {
  return (
    <footer className="contact" id="contact">
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
          <label className="contact__agree">
            <input id="contact-agree" name="agreement" type="checkbox" />
            <span>Я даю свое согласие на обработку персональных данных</span>
          </label>
          </div>
          <SplitButton>Оставить заявку</SplitButton>
        </form>
      </div>
      </div>
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

export function LandingPage() {
  return (
    <main className="page">
      <Hero />
      <ProductIntro />
      <BenefitsWave />
      <Solution />
      <Composition />
      <Audience />
      <Compare />
      <Purchase />
      <Faq />
      <Contact />
    </main>
  )
}
