'use client'

import { motion } from 'framer-motion'
import { Sprout, Building2, Home, Landmark, Layers } from 'lucide-react'

const audiences = [
  { num: '01', Icon: Sprout,   title: 'Startups',                       desc: 'Building strong foundations, improving readiness, and creating scalable business models.' },
  { num: '02', Icon: Building2, title: 'Small & Medium Enterprises',    desc: 'Supporting growth, operational improvement, financial discipline, and professionalisation.' },
  { num: '03', Icon: Home,      title: 'Family Businesses',             desc: 'Supporting governance, succession planning, transformation, and long-term value creation.' },
  { num: '04', Icon: Landmark,  title: 'Investor-Backed Companies',     desc: 'Helping businesses improve performance, prepare for growth, and maximise stakeholder value.' },
  { num: '05', Icon: Layers,    title: 'Established Organisations',     desc: 'Supporting transformation, optimisation, and strategic initiatives.' },
]

export default function WhoWeSupportSection() {
  return (
    <section className="bg-[#0a0a0a] overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');`}</style>

      <div className="flex items-end justify-between flex-wrap gap-4 px-12 pt-14 pb-8 border-b border-white/10 max-sm:flex-col max-sm:items-start max-sm:px-6 max-sm:pt-10">
        <div>
          <div className="flex items-center gap-2 text-[9px] tracking-[0.4em] uppercase text-[#00aaff] mb-3">
            <div className="w-5 h-0.5 bg-[#00aaff] shrink-0" />
            Who We Support
          </div>
          <h2 className="font-['Fraunces',serif] font-extrabold leading-[0.95] tracking-[-0.02em] text-white text-[52px] max-sm:text-[34px] m-0">
            Advisory Solutions for
            <br />
            <em className="font-light italic text-white/45">Businesses at Every Stage</em>
          </h2>
        </div>
        <div className="text-right text-[9px] tracking-[0.35em] uppercase text-white/35 leading-[1.7] max-sm:text-left">
          <strong className="text-[#00aaff] block font-['Bebas_Neue',sans-serif] text-[13px] tracking-[0.15em] font-normal">
            5 Business Stages
          </strong>
          From First Structure
          <br />
          To Full Transformation
        </div>
      </div>

      <div className="grid grid-cols-5 max-[1100px]:grid-cols-3 max-[720px]:grid-cols-2 max-[480px]:grid-cols-1">
        {audiences.map(({ num, Icon, title, desc }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            className="group relative px-7 pt-9 pb-10 border-r border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.03] [&:nth-child(5n)]:border-r-0 max-[1100px]:[&:nth-child(5n)]:border-r max-[480px]:border-r-0 max-[720px]:px-5"
          >
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00aaff] scale-x-0 origin-left transition-transform duration-[350ms] ease-in-out group-hover:scale-x-100" />

            <div className="flex items-start justify-between mb-7">
              <span className="font-['Bebas_Neue',sans-serif] text-[11px] tracking-[0.2em] text-white/20">{num}</span>
              <Icon size={18} strokeWidth={1.4} className="text-[#00aaff]/40 transition-colors duration-300 group-hover:text-[#00aaff]" />
            </div>

            <h3 className="font-['Fraunces',serif] font-extrabold text-[16px] leading-[1.25] text-white mb-3.5 m-0">{title}</h3>
            <p className="text-[11.5px] leading-[1.8] text-white/40 font-light m-0">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
