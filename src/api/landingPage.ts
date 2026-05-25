import { sanityClient } from './sanityClient'
import { defaultLandingPageData } from '../components/landing/data'
import type { FeatureCard, LandingPageData, TextPair } from '../components/landing/data'

type SanityFeatureCard = Omit<FeatureCard, 'icon'> & {
  iconUrl?: string
}

type SanityLandingPageData = Omit<LandingPageData, 'benefits'> & {
  benefits?: Omit<LandingPageData['benefits'], 'cards'> & {
    cards?: SanityFeatureCard[]
  }
}

const landingPageQuery = `*[_type == "landingPage"][0]{
  navItems,
  hero{
    title,
    lead,
    meta,
    button,
    capsuleTitle,
    capsuleText,
    "image": image.asset->url,
    imageAlt
  },
  productIntro{
    title,
    subtitle,
    textDesktop,
    textMobile,
    button,
    "image": image.asset->url,
    imageAlt
  },
  benefits{
    title,
    textDesktop,
    textMobile,
    "image": image.asset->url,
    imageAlt,
    cards[]{
      title,
      text,
      "iconUrl": icon.asset->url
    }
  },
  solution{
    title,
    text,
    button,
    "image": image.asset->url,
    imageAlt
  },
  composition{
    title,
    titleAccent,
    "image": image.asset->url,
    imageAlt,
    button,
    mobileButton,
    items[]{title, text}
  },
  audience{
    title,
    "image": image.asset->url,
    imageAlt,
    cards[]{title, text}
  },
  compare{
    title,
    paragraphs,
    "image": image.asset->url,
    "mobileImage": mobileImage.asset->url,
    imageAlt,
    leftFact{title, text},
    rightFact{title, text},
    button
  },
  purchase{
    title,
    price,
    meta,
    button,
    "productImage": productImage.asset->url,
    productImageAlt,
    manualTitle,
    "manualImage": manualImage.asset->url,
    "manualMobileImage": manualMobileImage.asset->url,
    manualImageAlt,
    manualSteps
  },
  faq[]{question, answer, open},
  contact{
    title,
    emailLabel,
    email,
    messengersLabel,
    formLabels,
    formPlaceholders,
    agreement,
    button,
    copyright,
    rights,
    disclaimer,
    offer,
    privacy,
    socials
  }
}`

const keepArray = <T>(value: T[] | undefined, fallback: T[]) => (value?.length ? value : fallback)

const mergeFilled = <T extends Record<string, unknown>>(fallback: T, value?: Partial<T>): T => {
  const merged: Record<string, unknown> = { ...fallback }

  Object.entries(value ?? {}).forEach(([key, item]) => {
    if (typeof item === 'string') {
      if (item.trim()) merged[key] = item
      return
    }

    if (item !== undefined && item !== null) {
      merged[key] = item
    }
  })

  return merged as T
}

const mergePair = (value: Partial<TextPair> | undefined, fallback: TextPair): TextPair => ({
  title: value?.title || fallback.title,
  text: value?.text || fallback.text,
})

export async function getLandingPageData(): Promise<LandingPageData> {
  const data = await sanityClient.fetch<SanityLandingPageData | null>(landingPageQuery)

  if (!data) return defaultLandingPageData

  return {
    navItems: keepArray(data.navItems, defaultLandingPageData.navItems),
    hero: {
      ...mergeFilled(defaultLandingPageData.hero, data.hero),
      meta: keepArray(data.hero?.meta, defaultLandingPageData.hero.meta),
    },
    productIntro: mergeFilled(defaultLandingPageData.productIntro, data.productIntro),
    benefits: {
      ...mergeFilled(defaultLandingPageData.benefits, data.benefits),
      cards: keepArray(data.benefits?.cards, defaultLandingPageData.benefits.cards).map((card, index) => ({
        title: card.title || defaultLandingPageData.benefits.cards[index]?.title || '',
        text: card.text || defaultLandingPageData.benefits.cards[index]?.text || '',
        icon: card.iconUrl || defaultLandingPageData.benefits.cards[index]?.icon,
      })),
    },
    solution: mergeFilled(defaultLandingPageData.solution, data.solution),
    composition: {
      ...mergeFilled(defaultLandingPageData.composition, data.composition),
      items: keepArray(data.composition?.items, defaultLandingPageData.composition.items),
    },
    audience: {
      ...mergeFilled(defaultLandingPageData.audience, data.audience),
      cards: keepArray(data.audience?.cards, defaultLandingPageData.audience.cards),
    },
    compare: {
      ...mergeFilled(defaultLandingPageData.compare, data.compare),
      paragraphs: keepArray(data.compare?.paragraphs, defaultLandingPageData.compare.paragraphs),
      leftFact: mergePair(data.compare?.leftFact, defaultLandingPageData.compare.leftFact),
      rightFact: mergePair(data.compare?.rightFact, defaultLandingPageData.compare.rightFact),
    },
    purchase: {
      ...mergeFilled(defaultLandingPageData.purchase, data.purchase),
      manualSteps: keepArray(data.purchase?.manualSteps, defaultLandingPageData.purchase.manualSteps),
    },
    faq: keepArray(data.faq, defaultLandingPageData.faq),
    contact: {
      ...mergeFilled(defaultLandingPageData.contact, data.contact),
      formLabels: mergeFilled(defaultLandingPageData.contact.formLabels, data.contact?.formLabels),
      formPlaceholders: mergeFilled(defaultLandingPageData.contact.formPlaceholders, data.contact?.formPlaceholders),
      socials: mergeFilled(defaultLandingPageData.contact.socials, data.contact?.socials),
    },
  }
}
