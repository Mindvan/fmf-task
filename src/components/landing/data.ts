import { health1, health2, health3, health4, health5 } from './assets'

export type FeatureCard = {
  title: string
  text: string
  icon?: string
}

export type TextPair = {
  title: string
  text: string
}

export type FaqItem = {
  question: string
  answer: string
  open?: boolean
}

export type LandingPageData = {
  navItems: string[]
  hero: {
    title: string
    lead: string
    meta: string[]
    button: string
    capsuleTitle: string
    capsuleText: string
    image?: string
    imageAlt: string
  }
  productIntro: {
    title: string
    subtitle: string
    textDesktop: string
    textMobile: string
    button: string
    image?: string
    imageAlt: string
  }
  benefits: {
    title: string
    textDesktop: string
    textMobile: string
    image?: string
    imageAlt: string
    cards: FeatureCard[]
  }
  solution: {
    title: string
    text: string
    button: string
    image?: string
    imageAlt: string
  }
  composition: {
    title: string
    titleAccent: string
    image?: string
    imageAlt: string
    button: string
    mobileButton: string
    items: TextPair[]
  }
  audience: {
    title: string
    image?: string
    imageAlt: string
    cards: TextPair[]
  }
  compare: {
    title: string
    paragraphs: string[]
    image?: string
    mobileImage?: string
    imageAlt: string
    leftFact: TextPair
    rightFact: TextPair
    button: string
  }
  purchase: {
    title: string
    price: string
    meta: string
    button: string
    productImage?: string
    productImageAlt: string
    manualTitle: string
    manualImage?: string
    manualMobileImage?: string
    manualImageAlt: string
    manualSteps: string[]
  }
  faq: FaqItem[]
  contact: {
    title: string
    emailLabel: string
    email: string
    messengersLabel: string
    formLabels: {
      name: string
      phone: string
      email: string
    }
    formPlaceholders: {
      name: string
      phone: string
      email: string
    }
    agreement: string
    button: string
    copyright: string
    rights: string
    disclaimer: string
    offer: string
    privacy: string
    socials: {
      telegram?: string
      max?: string
      whatsapp?: string
      vk?: string
    }
  }
}

// Навигация хранится отдельно, чтобы header оставался только разметкой и состоянием меню.
export const navItems = ['О продукте', 'Состав', 'Для кого', 'Цена', 'Вопросы']

// Карточки benefits: одинаковая структура, разные тексты и иконки.
export const featureCards = [
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

// Компоненты состава выводятся сеткой, поэтому контент держим компактным массивом пар title/text.
export const components = [
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

// Карточки блока audience поверх фотографии.
export const ages = [
  ['18+ лет', 'Поддержка суставов при травмах'],
  ['35+ лет', 'Профилактика возрастных изменений'],
  ['45+', 'Сохранение здоровья у женщин'],
]

// Второе значение задает, какой пункт раскрыт по умолчанию.
export const faq: Array<[string, boolean]> = [
  ['Можно ли «Complex SW СУСТАВЫ» принимать с другими препаратами', false],
  ['Какие противопоказания?', true],
  ['Почему в форме порошка, а не капсул?', false],
  ['Какие показания для приема комплекса', false],
]

export const defaultLandingPageData: LandingPageData = {
  navItems,
  hero: {
    title: 'Свобода движения',
    lead: '«Complex SW СУСТАВЫ» порошок для опорно-двигательного аппарата',
    meta: ['420г. / 30 порций', 'Месячный курс'],
    button: 'Купить в 1 клик',
    capsuleTitle: '1 порция = 17 обычных капсул',
    capsuleText: 'Комплекс, который питает суставы изнутри и способствует обновлению хрящевой ткани',
    imageAlt: 'Complex SW СУСТАВЫ',
  },
  productIntro: {
    title: 'Комплекс для тех, кто хочет свободно двигаться и заботиться о своих суставах каждый день',
    subtitle:
      'Комплекс для ежедневной нутритивной поддержки суставов и естественного обновления хрящевой ткани, помогающий сохранять подвижность и комфорт при активном образе жизни',
    textDesktop:
      'Это сбалансированный комплекс витаминов и микроэлементов, разработанный для ежедневного приема. Он обеспечивает питание суставов и стимулирует восстановление хряща, что дарит вам свободу движений без дискомфорта даже при высоких физических нагрузках.',
    textMobile:
      'Комплекс для ежедневной нутритивной поддержки суставов и естественного обновления хрящевой ткани, помогающий сохранять подвижность и комфорт при активном образе жизни',
    button: 'Оставить заявку',
    imageAlt: 'Визуализация сустава',
  },
  benefits: {
    title:
      'Представьте, что вы каждый день даете своим суставам «витамин бодрости», который помогает им оставаться гибкими и здоровыми.',
    textDesktop:
      'Благодаря поддержке естественных процессов обновления тканей, вы забываете о скованности и с легкостью наслаждаетесь любимым спортом или прогулками.',
    textMobile:
      'Комплекс для ежедневной нутритивной поддержки суставов и естественного обновления хрящевой ткани, помогающий сохранять подвижность и комфорт при активном образе жизни',
    imageAlt: 'Complex SW СУСТАВЫ',
    cards: featureCards,
  },
  solution: {
    title: 'Питаем. Восстанавливаем. Сохраняем подвижность.',
    text: 'БАД «Complex SW СУСТАВЫ» от Оптисалт решает три главные задачи здоровья суставов',
    button: 'Оставить заявку',
    imageAlt: 'Две банки Complex SW СУСТАВЫ',
  },
  composition: {
    title: '«Complex SW СУСТАВЫ» — комплекс',
    titleAccent: 'из 9 активных компонентов',
    imageAlt: 'Мерная ложка с порошком',
    button: 'Купить в 1 клик',
    mobileButton: 'Заказать',
    items: components.map(([title, text]) => ({ title, text })),
  },
  audience: {
    title: 'Подходит для всех, кто заботиться о своем здоровье и думает о своем будущем заранее.',
    imageAlt: 'Женщина идет по улице',
    cards: ages.map(([title, text]) => ({ title, text })),
  },
  compare: {
    title: 'Сравнение с другими продуктами',
    paragraphs: [
      '«Complex SW СУСТАВЫ» — это комплексная добавка, сочетающая высокие дозировки глюкозамина и хондроитина с противовоспалительной босвеллией и полным набором витаминов для защиты соединительной ткани.',
      'В отличие от многих стандартных средств на рынке, он предлагает законченную систему «все в одной порции».',
      'Ключевым преимуществом является наличие клинически значимых дозировок (например, 1250 мг глюкозамина), тогда как многие на рынке используют уменьшенные дозировки ради экономии.',
    ],
    imageAlt: 'Complex SW СУСТАВЫ',
    leftFact: {
      title: '1 порция = 17 обычных капсул',
      text: 'Доза в 3 раза выше конкурентов. Достаточно одной порции в день',
    },
    rightFact: {
      title: 'Курс на 1 месяц',
      text: '30 порций = 130₽ в день',
    },
    button: 'Купить в 1 клик',
  },
  purchase: {
    title: '«Complex SW СУСТАВЫ»\nдля опорно-двигательного аппарата',
    price: '3 900 ₽',
    meta: '420г. / 30 порций',
    button: 'Купить в 1 клик',
    productImageAlt: 'Complex SW СУСТАВЫ',
    manualTitle: 'Инструкция и рекомендации по применению',
    manualImageAlt: 'Банка, стакан и ложка',
    manualSteps: ['1 ложка в день', 'Растворить в 200 мл воды', 'Принимать утром'],
  },
  faq: faq.map(([question, open]) => ({
    question,
    answer: 'Противопоказанием является индивидуальная непереносимость компонентов препарата.',
    open,
  })),
  contact: {
    title: 'Остались вопросы? Напишите нам',
    emailLabel: 'Эл. почта',
    email: 'info@test.ru',
    messengersLabel: 'Мессенджеры',
    formLabels: {
      name: 'Имя',
      phone: 'Телефон',
      email: 'Эл. почта',
    },
    formPlaceholders: {
      name: 'Как к вам обращаться',
      phone: '+7 (___) __-__-__',
      email: 'Ваша эл.почта',
    },
    agreement: 'Я даю свое согласие на обработку персональных данных',
    button: 'Оставить заявку',
    copyright: '© 2026, Оптисалт',
    rights: 'Все права защищены',
    disclaimer: 'БАД. Не является лекарственным средством. Требуется консультация специалиста',
    offer: 'Оферта',
    privacy: 'Политика конфиденциальности',
    socials: {},
  },
}
