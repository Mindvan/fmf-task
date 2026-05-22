import { useState } from 'react'

import { faq } from './data'
import { minusIcon, plusIcon } from './assets'

export function Faq() {
  // Храним индекс открытого вопроса: одновременно раскрыт только один пункт FAQ.
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
            // Повторный клик закрывает текущий пункт, клик по другому открывает его.
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
