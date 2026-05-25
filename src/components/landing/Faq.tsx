import { useState } from 'react'

import { minusIcon, plusIcon } from './assets'
import type { FaqItem } from './data'

type FaqProps = {
  items: FaqItem[]
}

export function Faq({ items }: FaqProps) {
  // Храним индекс открытого вопроса: одновременно раскрыт только один пункт FAQ.
  const [manualOpenQuestion, setManualOpenQuestion] = useState<string | null>()
  const defaultOpenIndex = items.findIndex((item) => item.open)
  const openIndex =
    manualOpenQuestion === undefined
      ? defaultOpenIndex
      : items.findIndex((item) => item.question === manualOpenQuestion)

  return (
    <section className="faq" id="вопросы">
      {items.map((item, index) => {
        const open = index === openIndex

        return (
        <article className="faq__item" key={item.question}>
          <button
            className="faq__question"
            type="button"
            aria-expanded={open}
            // Повторный клик закрывает текущий пункт, клик по другому открывает его.
            onClick={() => setManualOpenQuestion(open ? null : item.question)}
          >
            <h3>{item.question}</h3>
            <img className="faq__icon" src={open ? minusIcon : plusIcon} alt="" />
          </button>
            {open && <p>{item.answer}</p>}
        </article>
        )
      })}
    </section>
  )
}
