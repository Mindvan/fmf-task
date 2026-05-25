import { useState } from 'react'

import { SplitButton } from '../SplitButton'
import { fmfLogo, korIcon } from './assets'

type HeaderProps = {
  navItems: string[]
}

export function Header({ navItems }: HeaderProps) {
  // Состояние управляет мобильной шторкой меню и CSS-анимацией бургер-кнопки в крестик.
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`header ${menuOpen ? 'header--open' : ''}`}>
      <a className="header__logo" href="#hero" aria-label="FMF">
        <img src={fmfLogo} alt="" />
      </a>
      <nav className="header__nav" aria-label="Навигация">
        {navItems.map((item) => (
          // При выборе якоря закрываем мобильное меню, чтобы пользователь сразу видел нужную секцию.
          <a className="header__link" href={`#${item.toLowerCase().replace(' ', '-')}`} key={item} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <SplitButton className="header__button">Оставить заявку</SplitButton>
      <button className="header__menu" type="button" aria-label="Открыть меню" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
        {/* Две линии рисуются span-ами: CSS плавно превращает их в крестик при .header--open. */}
        <span className="header__menu-line" aria-hidden="true" />
        <span className="header__menu-line" aria-hidden="true" />
      </button>
      <button className="header__cart" type="button" aria-label="Корзина">
        <img src={korIcon} alt="" />
      </button>
    </header>
  )
}
