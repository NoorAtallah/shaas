'use client'

import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'

const clients = [
  'Ajyal Burtville Real Estate Development LTD',
  'Burtville Elite Properties L.L.C - O.P.C',
  'Burtville For Real Estate Investment - L.L.C - O.P.C',
  'Burtville P R S W Real Estate Development - L.L.C',
  'Burtville Premier Real Estate Development - L.L.C - O.P.C',
  'Burtville Premier Real Estate Development – LTD',
  'Burtville Prestige Properties L.L.C - O.P.C',
  'Burtville Real Estate Development L.L.C.',
  'Burtville Real Estate L.L.C Branch Of Abu Dhabi',
  'Burtville Real Estate L.L.C',
  'Ajyal Burtville Real Estate Development - L.L.C',
  'Burtville Life Properties L.L.C - O.P.C',
  'Apolitical Technology LLC',
  'Advance Tech Platform Investment LLC',
  'VIA55 International Holding LLC',
  'WWTVIA55 Technology LLC.',
  'OMAI Tech Investment LLC',
  'Brodie Holding LLC.',
]

const half = Math.ceil(clients.length / 2)
const rowOne = clients.slice(0, half)
const rowTwo = clients.slice(half)

function ClientCard({ name }: { name: string }) {
  return (
    <div className="group shrink-0 flex items-center gap-3 px-7 py-5 border-r border-black/[0.08] transition-colors duration-300 hover:bg-[#00aaff]/[0.03]">
      <Building2
        size={16}
        strokeWidth={1.3}
        className="shrink-0 text-[#00aaff]/25 transition-colors duration-300 group-hover:text-[#00aaff]"
      />
      <span className="font-['Fraunces',serif] font-extrabold text-[13px] leading-[1.3] text-[#0a0a0a] whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

function Marquee({ items, duration, reverse = false }: { items: string[]; duration: number; reverse?: boolean }) {
  // The list is rendered twice so the loop is seamless: we translate exactly
  // half the track width, at which point copy two sits where copy one began.
  const track = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-b border-black/[0.08]">
      <motion.div
        className="flex w-max"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {track.map((name, i) => (
          <ClientCard key={`${name}-${i}`} name={name} />
        ))}
      </motion.div>

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
    </div>
  )
}

export default function ClientsSection() {
  return (
    <section
      className="bg-white border-t-2 border-[#0a0a0a] overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');`}</style>

      <div className="flex items-end justify-between flex-wrap gap-4 px-12 pt-12 pb-7 border-b border-black/[0.08] max-sm:flex-col max-sm:items-start max-sm:px-6 max-sm:pt-8">
        <div>
          <div className="flex items-center gap-2 text-[9px] tracking-[0.4em] uppercase text-[#00aaff] mb-3">
            <div className="w-5 h-0.5 bg-[#00aaff] shrink-0" />
            Our Clients
          </div>
          <h2 className="font-['Fraunces',serif] font-extrabold leading-[0.95] tracking-[-0.02em] text-[#0a0a0a] text-[52px] max-sm:text-[34px] m-0">
            Trusted By
            <br />
            <em className="font-light italic text-[#777]">Businesses Across the UAE</em>
          </h2>
        </div>
        <div className="text-right text-[9px] tracking-[0.35em] uppercase text-[#aaa] leading-[1.7] max-sm:text-left">
          <strong className="text-[#00aaff] block font-['Bebas_Neue',sans-serif] text-[13px] tracking-[0.15em] font-normal">
            {clients.length} Organisations
          </strong>
          Real Estate, Technology
          <br />
          And Investment
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Marquee items={rowOne} duration={45} />
        <Marquee items={rowTwo} duration={52} reverse />
      </motion.div>
    </section>
  )
}
