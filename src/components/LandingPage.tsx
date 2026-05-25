import { useEffect, useState } from 'react'

import { getLandingPageData } from '../api/landingPage'
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
import { defaultLandingPageData } from './landing/data'
import type { LandingPageData } from './landing/data'

export function LandingPage() {
  const [data, setData] = useState<LandingPageData>(defaultLandingPageData)

  useEffect(() => {
    let active = true

    getLandingPageData()
      .then((landingPageData) => {
        if (active) setData(landingPageData)
      })
      .catch((error: unknown) => {
        console.error('Failed to load landing page data from Sanity', error)
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <main className="page">
      {/* Порядок секций повторяет лендинг сверху вниз: hero -> контент -> форма. */}
      <Hero data={data.hero} navItems={data.navItems} />
      <ProductIntro data={data.productIntro} />
      <BenefitsWave data={data.benefits} />
      <Solution data={data.solution} />
      <Composition data={data.composition} />
      <Audience data={data.audience} />
      <Compare data={data.compare} />
      <Purchase data={data.purchase} />
      <Faq items={data.faq} />
      <Contact data={data.contact} />
    </main>
  )
}
