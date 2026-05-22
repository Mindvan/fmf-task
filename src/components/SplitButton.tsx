import type { ReactNode } from 'react'

type SplitButtonProps = {
  children: ReactNode
  className?: string
  href?: string
  mobileChildren?: ReactNode
}

export function SplitButton({ children, className = '', href = '#contact', mobileChildren }: SplitButtonProps) {
  return (
    // Общий CTA-компонент: левая часть с текстом и отдельный круг со стрелкой.
    <a className={`split-button ${className}`.trim()} href={href}>
      <span className="split-button__text">
        {mobileChildren ? (
          <>
            {/* Для отдельных кнопок текст на desktop/mobile отличается, стили переключают нужную версию. */}
            <span className="split-button__label split-button__label--desktop">{children}</span>
            <span className="split-button__label split-button__label--mobile">{mobileChildren}</span>
          </>
        ) : (
          children
        )}
      </span>
      <span className="split-button__icon" aria-hidden="true">
        <svg className="split-button__arrow" width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path d="M1.54545 16.9545L17 1.5M17 18.5V1.5H0" stroke="currentColor" strokeWidth="3" />
        </svg>
      </span>
    </a>
  )
}
