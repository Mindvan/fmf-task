import { SplitButton } from '../SplitButton'
import { Header } from './Header'
import { jarMain } from './assets'
import type { LandingPageData } from './data'

type HeroProps = {
  data: LandingPageData['hero']
  navItems: string[]
}

export function Hero({ data, navItems }: HeroProps) {
  return (
    <section className="hero" id="hero">
      <Header navItems={navItems} />
      <div className="hero__content">
        {/* Левый контент собран группами, чтобы gap-ами держать desktop и mobile структуру без лишних margin. */}
        <div className="hero__left">
          <div className="hero__main">
          <h1 className="hero__title">{data.title}</h1>
          <div className="hero__line"></div>
            <div className="hero__lead-action">
          <p className="hero__lead">{data.lead}</p>
        <p className="hero__meta">
          {data.meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
          <SplitButton className="hero__button">{data.button}</SplitButton>
            </div>
          </div>
          <div className="hero__capsules">
            <strong>{data.capsuleTitle}</strong>
            <span>{data.capsuleText}</span>
          </div>
        </div>
        {/* Центральная банка остается отдельным слоем, чтобы CSS мог независимо позиционировать ее на разных ширинах. */}
        <img className="hero__jar" src={data.image || jarMain} alt={data.imageAlt} />
      </div>
    </section>
  )
}
