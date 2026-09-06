/**
 * Adds the Soft Skills Training and Organisational & Individual Coaching pages
 * to app/content/inner.json and app/content/menu.json.
 *
 *   node scripts/merge-hca.mjs           # dry run
 *   node scripts/merge-hca.mjs --write   # apply (writes .bak files first)
 *
 * Idempotent: re-running replaces the same slugs instead of duplicating.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const content = path.resolve(__dirname, '..', 'app', 'content')
const WRITE = process.argv.includes('--write')
const CAT = 'human-capital-advisory'

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, 'hca-new-pages.json'), 'utf8'))
const innerPath = path.join(content, 'inner.json')
const menuPath = path.join(content, 'menu.json')
const inner = JSON.parse(fs.readFileSync(innerPath, 'utf8'))
const menu = JSON.parse(fs.readFileSync(menuPath, 'utf8'))

const list = (inner[CAT] ??= [])
for (const p of pages) {
  const i = list.findIndex((x) => x.slug === p.slug)
  if (i >= 0) { list[i] = p; console.log(`inner.json  replace  ${p.slug}`) }
  else { list.push(p); console.log(`inner.json  add      ${p.slug}`) }

  const cat = menu.find((c) => c.slug === CAT)
  if (cat) {
    const title = p.title
      .toLowerCase()
      .replace(/\b\w/g, (m) => m.toUpperCase())
      .replace(/\bHr\b/g, 'HR')
    const entry = { title, url: p.url }
    const j = cat.items.findIndex((it) => it.url === p.url)
    if (j >= 0) { cat.items[j] = entry; console.log(`menu.json   replace  ${title}`) }
    else { cat.items.push(entry); console.log(`menu.json   add      ${title}`) }
  }
}

if (!WRITE) { console.log('\nDry run — re-run with --write to apply.'); process.exit(0) }
for (const [p, data] of [[innerPath, inner], [menuPath, menu]]) {
  fs.copyFileSync(p, p + '.bak')
  fs.writeFileSync(p, JSON.stringify(data, null, 1) + '\n')
  console.log(`wrote ${path.basename(p)} (backup at ${path.basename(p)}.bak)`)
}
console.log(`\n${CAT} now has ${list.length} pages.`)
