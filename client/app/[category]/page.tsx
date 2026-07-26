import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CategoryPage from '../components/service/CategoryPage'
import { categories, getCategory, getServices } from '../content/services'
import mains from '../content/mains.json'

export const dynamicParams = false

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

type Params = Promise<{ category: string }>
type MainEntry = { subtitle: string; intro: string[] }

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category } = await params
  const cat = getCategory(category)
  if (!cat) return {}
  const m = (mains as Record<string, MainEntry>)[category]
  return {
    title: `${cat.name} Services UAE | SHAAS`,
    description: m?.subtitle ?? cat.tagline,
    alternates: { canonical: `/${category}` },
  }
}

export default async function Page({ params }: { params: Params }) {
  const { category } = await params
  const cat = getCategory(category)
  if (!cat) notFound()
  const m = (mains as Record<string, MainEntry>)[category]
  const catIndex = categories.findIndex((c) => c.slug === category)
  return (
    <CategoryPage
      category={cat}
      subtitle={m?.subtitle ?? cat.tagline}
      intro={m?.intro ?? []}
      services={getServices(category)}
      catIndex={catIndex}
    />
  )
}