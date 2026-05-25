import { SplitButton } from '../SplitButton'
import { jar3 } from './assets'
import type { LandingPageData } from './data'

type SolutionProps = {
  data: LandingPageData['solution']
}

export function Solution({ data }: SolutionProps) {
  return (
    <section className="solution">
      {/* Блок-мост между преимуществами и составом: изображение и CTA остаются независимыми слоями. */}
      <img className="solution__jars" src={data.image || jar3} alt={data.imageAlt} />
      <div className="solution__text">
      <h2>{data.title}</h2>
      <p>{data.text}</p>
      <SplitButton>{data.button}</SplitButton>
      </div>
    </section>
  )
}
