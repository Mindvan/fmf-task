import {
  Audience,
  BenefitsWave,
  Compare,
  Composition,
  Contact,
  Faq,
  Hero,
  ProductIntro,
  Purchase,
  Solution,
} from './landing'

export function LandingPage() {
  return (
    <main className="page">
      {/* Порядок секций повторяет лендинг сверху вниз: hero -> контент -> форма. */}
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
