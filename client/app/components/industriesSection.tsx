'use client'

import { motion } from 'framer-motion'
import {
  Briefcase, Landmark, Cpu, HeartPulse, HardHat, Building,
  Factory, ShoppingBag, UtensilsCrossed, Truck, GraduationCap, Home,
} from 'lucide-react'

const industries = [
  { Icon: Briefcase,        label: 'Professional Services' },
  { Icon: Landmark,         label: 'Financial Services' },
  { Icon: Cpu,              label: 'Technology' },
  { Icon: HeartPulse,       label: 'Healthcare' },
  { Icon: HardHat,          label: 'Construction' },
  { Icon: Building,         label: 'Real Estate' },
  { Icon: Factory,          label: 'Manufacturing' },
  { Icon: ShoppingBag,      label: 'Retail' },
  { Icon: UtensilsCrossed,  label: 'Hospitality' },
  { Icon: Truck,            label: 'Logistics' },
  { Icon: GraduationCap,    label: 'Education' },
  { Icon: Home,             label: 'Family Businesses' },
]

export default function IndustriesSection() {
  return (
    <section className="bg-white border-t-2 border-[#0a0a0a] overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');`}</style>

      <div className="flex items-end justify-between flex-wrap gap-4 px-12 pt-12 pb-7 border-b border-black/[0.08] max-sm:flex-col max-sm:items-start max-sm:px-6 max-sm:pt-8">
        <div>
          <div className="flex items-center gap-2 text-[9px] tracking-[0.4em] uppercase text-[#00aaff] mb-3">
            <div className="w-5 h-0.5 bg-[#00aaff] shrink-0" />
            Industries We Support
          </div>
          <h2 className="font-['Fraunces',serif] font-extrabold leading-[0.95] tracking-[-0.02em] text-[#0a0a0a] text-[52px] max-sm:text-[34px] m-0">
            Experience Across
            <br />
            <em className="font-light italic text-[#777]">Diverse Business Sectors</em>
          </h2>
        </div>
        <div className="text-right text-[9px] tracking-[0.35em] uppercase text-[#aaa] leading-[1.7] max-sm:text-left">
          <strong className="text-[#00aaff] block font-['Bebas_Neue',sans-serif] text-[13px] tracking-[0.15em] font-normal">
            12 Industries
          </strong>
          Across the UAE
          <br />
          And Wider GCC
        </div>
      </div>

      <div className="grid grid-cols-6 max-[1100px]:grid-cols-4 max-[720px]:grid-cols-3 max-[480px]:grid-cols-2">
        {industries.map(({ Icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.05, ease: 'easeOut' }}
            className="group relative flex flex-col items-start gap-4 px-7 py-9 border-r border-b border-black/[0.07] transition-colors duration-300 hover:bg-[#00aaff]/[0.02] [&:nth-child(6n)]:border-r-0 max-[1100px]:[&:nth-child(6n)]:border-r max-[1100px]:[&:nth-child(4n)]:border-r-0 max-[720px]:[&:nth-child(4n)]:border-r max-[720px]:[&:nth-child(3n)]:border-r-0 max-[480px]:[&:nth-child(3n)]:border-r max-[480px]:[&:nth-child(2n)]:border-r-0 max-[720px]:px-5"
          >
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00aaff] scale-x-0 origin-left transition-transform duration-[350ms] ease-in-out group-hover:scale-x-100" />
            <Icon size={20} strokeWidth={1.3} className="text-[#00aaff]/25 transition-colors duration-300 group-hover:text-[#00aaff]" />
            <span className="font-['Fraunces',serif] font-extrabold text-[13px] leading-[1.3] text-[#0a0a0a]">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
