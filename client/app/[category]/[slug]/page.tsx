import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import InnerServicePage from '../../components/service/InnerServicePage'
import { getCategory, getService, getServices, allServiceParams } from '../../content/services'

export const dynamicParams = false

export function generateStaticParams() {
  return allServiceParams()
}

type Params = Promise<{ category: string; slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category, slug } = await params
  const page = getService(category, slug)
  if (!page) return {}
  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription,
    keywords: [...page.primaryKeywords, ...page.secondaryKeywords],
    alternates: { canonical: page.url },
    openGraph: { title: page.metaTitle || page.title, description: page.metaDescription, url: page.url, type: 'website' },
  }
}

export default async function Page({ params }: { params: Params }) {
  const { category, slug } = await params
  const cat = getCategory(category)
  const list = getServices(category)
  const index = list.findIndex((s) => s.slug === slug)
  const page = list[index]
  if (!cat || !page) notFound()

  const related = list.filter((s) => s.slug !== slug).slice(0, 6).map((s) => ({ slug: s.slug, title: s.title, url: s.url }))

  return <InnerServicePage page={page} category={cat} related={related} index={index} />
}