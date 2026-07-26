import innerData from './inner.json'
import categoriesData from './categories.json'

export type Block = { type: 'p'; text: string } | { type: 'list'; items: string[] }
export type Section = { heading: string | null; blocks: Block[] }
export type ServicePage = {
  title: string; subtitle: string; slug: string; category: string; url: string
  metaTitle: string; metaDescription: string
  primaryKeywords: string[]; secondaryKeywords: string[]; internalLinks: string[]
  sections: Section[]
}
export type Category = { slug: string; name: string; tagline: string; accent: string; order: number }

const inner = innerData as unknown as Record<string, ServicePage[]>
const cats = categoriesData as Record<string, Omit<Category, 'slug'>>

export const categories: Category[] = Object.entries(cats)
  .map(([slug, c]) => ({ slug, ...c }))
  .sort((a, b) => a.order - b.order)

export function getCategory(slug: string) { return categories.find((c) => c.slug === slug) }
export function getServices(categorySlug: string): ServicePage[] { return inner[categorySlug] ?? [] }
export function getService(categorySlug: string, serviceSlug: string) {
  return getServices(categorySlug).find((s) => s.slug === serviceSlug)
}
export function allServiceParams() {
  return categories.flatMap((c) => getServices(c.slug).map((s) => ({ category: c.slug, slug: s.slug })))
}
export function niceTitle(t: string): string {
  return t.toLowerCase()
    .replace(/\b([a-z])/g, (m) => m.toUpperCase())
    .replace(/\b(And|Or|The|Of|For|To|A|An|In|On)\b/g, (m) => m.toLowerCase())
    .replace(/^./, (m) => m.toUpperCase())
    .replace(/\bHr\b/g, 'HR').replace(/\bKpi\b/g, 'KPI')
    .replace(/Fp&a/gi, 'FP&A').replace(/\bCfo\b/g, 'CFO')
    .replace(/\bPmo\b/g, 'PMO').replace(/\bEsg\b/g, 'ESG').replace(/\bFpa\b/g, 'FP&A')
}