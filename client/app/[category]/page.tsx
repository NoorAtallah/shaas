import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CategoryPage from '../components/service/CategoryPage'
import type { CategoryPageProps } from '../components/service/CategoryPage'
import { categories, getCategory, getServices } from '../content/services'
import mains from '../content/mains.json'

export const dynamicParams = false

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

type Params = Promise<{ category: string }>
type MainEntry = {
  subtitle: string
  intro: string[]
  metaTitle?: string
  metaDescription?: string
} & Partial<
  Pick<
    CategoryPageProps,
    'order' | 'narrative' | 'challenges' | 'solve' | 'servicesHeading' | 'servicesLead' | 'who' | 'industries' | 'approach' | 'why' | 'expect' | 'faqs' | 'closing'
  >
>

const allMains = mains as unknown as Record<string, MainEntry>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category } = await params
  const cat = getCategory(category)
  if (!cat) return {}
  const m = allMains[category]
  return {
    title: m?.metaTitle ?? `${cat.name} Services UAE | SHAAS`,
    description: m?.metaDescription ?? m?.subtitle ?? cat.tagline,
    alternates: { canonical: `/${category}` },
  }
}

export default async function Page({ params }: { params: Params }) {
  const { category } = await params
  const cat = getCategory(category)
  if (!cat) notFound()
  const m = allMains[category]
  const catIndex = categories.findIndex((c) => c.slug === category)
  return (
    <CategoryPage
      category={cat}
      subtitle={m?.subtitle ?? cat.tagline}
      intro={m?.intro ?? []}
      services={getServices(category)}
      catIndex={catIndex}
      order={m?.order}
      narrative={m?.narrative}
      who={m?.who}
      challenges={m?.challenges}
      solve={m?.solve}
      servicesHeading={m?.servicesHeading}
      servicesLead={m?.servicesLead}
      industries={m?.industries}
      approach={m?.approach}
      why={m?.why}
      expect={m?.expect}
      faqs={m?.faqs}
      closing={m?.closing}
    />
  )
}
