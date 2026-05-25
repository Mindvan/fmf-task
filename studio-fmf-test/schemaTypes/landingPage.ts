import {defineField, defineType} from 'sanity'

const textPairFields = [
  defineField({
    name: 'title',
    title: 'Заголовок',
    type: 'string',
  }),
  defineField({
    name: 'text',
    title: 'Текст',
    type: 'text',
    rows: 3,
  }),
]

const imageFields = [
  defineField({
    name: 'image',
    title: 'Изображение',
    type: 'image',
    options: {hotspot: true},
  }),
  defineField({
    name: 'imageAlt',
    title: 'Alt-текст изображения',
    type: 'string',
  }),
]

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'navItems',
      title: 'Навигация',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Заголовок', type: 'string'}),
        defineField({name: 'lead', title: 'Подзаголовок', type: 'text', rows: 2}),
        defineField({name: 'meta', title: 'Мета-информация', type: 'array', of: [{type: 'string'}]}),
        defineField({name: 'button', title: 'Кнопка', type: 'string'}),
        defineField({name: 'capsuleTitle', title: 'Заголовок плашки', type: 'string'}),
        defineField({name: 'capsuleText', title: 'Текст плашки', type: 'text', rows: 2}),
        ...imageFields,
      ],
    }),
    defineField({
      name: 'productIntro',
      title: 'О продукте',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Заголовок секции', type: 'text', rows: 2}),
        defineField({name: 'subtitle', title: 'Подзаголовок', type: 'text', rows: 3}),
        defineField({name: 'textDesktop', title: 'Текст desktop', type: 'text', rows: 4}),
        defineField({name: 'textMobile', title: 'Текст mobile', type: 'text', rows: 3}),
        defineField({name: 'button', title: 'Кнопка', type: 'string'}),
        ...imageFields,
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Преимущества',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Заголовок', type: 'text', rows: 3}),
        defineField({name: 'textDesktop', title: 'Текст desktop', type: 'text', rows: 3}),
        defineField({name: 'textMobile', title: 'Текст mobile', type: 'text', rows: 3}),
        ...imageFields,
        defineField({
          name: 'cards',
          title: 'Карточки',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Заголовок', type: 'string'}),
                defineField({name: 'text', title: 'Текст', type: 'text', rows: 4}),
                defineField({
                  name: 'icon',
                  title: 'Иконка',
                  type: 'image',
                  options: {hotspot: false},
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'solution',
      title: 'Блок решения',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Заголовок', type: 'string'}),
        defineField({name: 'text', title: 'Текст', type: 'text', rows: 2}),
        defineField({name: 'button', title: 'Кнопка', type: 'string'}),
        ...imageFields,
      ],
    }),
    defineField({
      name: 'composition',
      title: 'Состав',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Заголовок', type: 'string'}),
        defineField({name: 'titleAccent', title: 'Акцент в заголовке', type: 'string'}),
        ...imageFields,
        defineField({name: 'button', title: 'Кнопка desktop', type: 'string'}),
        defineField({name: 'mobileButton', title: 'Кнопка mobile', type: 'string'}),
        defineField({
          name: 'items',
          title: 'Компоненты',
          type: 'array',
          of: [{type: 'object', fields: textPairFields}],
        }),
      ],
    }),
    defineField({
      name: 'audience',
      title: 'Для кого',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Заголовок', type: 'text', rows: 2}),
        ...imageFields,
        defineField({
          name: 'cards',
          title: 'Карточки',
          type: 'array',
          of: [{type: 'object', fields: textPairFields}],
        }),
      ],
    }),
    defineField({
      name: 'compare',
      title: 'Сравнение',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Заголовок', type: 'string'}),
        defineField({name: 'paragraphs', title: 'Абзацы', type: 'array', of: [{type: 'text'}]}),
        ...imageFields,
        defineField({
          name: 'mobileImage',
          title: 'Изображение mobile',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({name: 'leftFact', title: 'Левый факт', type: 'object', fields: textPairFields}),
        defineField({name: 'rightFact', title: 'Правый факт', type: 'object', fields: textPairFields}),
        defineField({name: 'button', title: 'Кнопка', type: 'string'}),
      ],
    }),
    defineField({
      name: 'purchase',
      title: 'Покупка',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Заголовок', type: 'text', rows: 2}),
        defineField({name: 'price', title: 'Цена', type: 'string'}),
        defineField({name: 'meta', title: 'Мета-информация', type: 'string'}),
        defineField({name: 'button', title: 'Кнопка', type: 'string'}),
        defineField({
          name: 'productImage',
          title: 'Изображение продукта',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({name: 'productImageAlt', title: 'Alt продукта', type: 'string'}),
        defineField({name: 'manualTitle', title: 'Заголовок инструкции', type: 'string'}),
        defineField({
          name: 'manualImage',
          title: 'Изображение инструкции',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({
          name: 'manualMobileImage',
          title: 'Изображение инструкции mobile',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({name: 'manualImageAlt', title: 'Alt инструкции', type: 'string'}),
        defineField({name: 'manualSteps', title: 'Шаги инструкции', type: 'array', of: [{type: 'string'}]}),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'question', title: 'Вопрос', type: 'string'}),
            defineField({name: 'answer', title: 'Ответ', type: 'text', rows: 3}),
            defineField({name: 'open', title: 'Открыт по умолчанию', type: 'boolean'}),
          ],
        },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Контакты и футер',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Заголовок', type: 'string'}),
        defineField({name: 'emailLabel', title: 'Подпись email', type: 'string'}),
        defineField({name: 'email', title: 'Email', type: 'string'}),
        defineField({name: 'messengersLabel', title: 'Подпись мессенджеров', type: 'string'}),
        defineField({
          name: 'formLabels',
          title: 'Подписи полей формы',
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Имя', type: 'string'}),
            defineField({name: 'phone', title: 'Телефон', type: 'string'}),
            defineField({name: 'email', title: 'Email', type: 'string'}),
          ],
        }),
        defineField({
          name: 'formPlaceholders',
          title: 'Плейсхолдеры формы',
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Имя', type: 'string'}),
            defineField({name: 'phone', title: 'Телефон', type: 'string'}),
            defineField({name: 'email', title: 'Email', type: 'string'}),
          ],
        }),
        defineField({name: 'agreement', title: 'Согласие', type: 'text', rows: 2}),
        defineField({name: 'button', title: 'Кнопка', type: 'string'}),
        defineField({name: 'copyright', title: 'Copyright', type: 'string'}),
        defineField({name: 'rights', title: 'Права', type: 'string'}),
        defineField({name: 'disclaimer', title: 'Дисклеймер', type: 'text', rows: 2}),
        defineField({name: 'offer', title: 'Оферта', type: 'string'}),
        defineField({name: 'privacy', title: 'Политика конфиденциальности', type: 'string'}),
        defineField({
          name: 'socials',
          title: 'Ссылки на соцсети',
          type: 'object',
          fields: [
            defineField({name: 'telegram', title: 'Telegram', type: 'url'}),
            defineField({name: 'max', title: 'Max', type: 'url'}),
            defineField({name: 'whatsapp', title: 'WhatsApp', type: 'url'}),
            defineField({name: 'vk', title: 'VK', type: 'url'}),
          ],
        }),
      ],
    }),
  ],
  initialValue: {
    navItems: ['О продукте', 'Состав', 'Для кого', 'Цена', 'Вопросы'],
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
    solution: {
      title: 'Питаем. Восстанавливаем. Сохраняем подвижность.',
      text: 'БАД «Complex SW СУСТАВЫ» от Оптисалт решает три главные задачи здоровья суставов',
      button: 'Оставить заявку',
      imageAlt: 'Две банки Complex SW СУСТАВЫ',
    },
  },
  preview: {
    select: {
      title: 'hero.title',
    },
    prepare({title}) {
      return {
        title: title || 'Landing Page',
      }
    },
  },
})
