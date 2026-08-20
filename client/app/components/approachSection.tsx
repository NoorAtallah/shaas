'use client'

import { motion } from 'framer-motion'
import { Search, BarChart3, PenTool, Play, RefreshCw } from 'lucide-react'

const steps = [
  { num: '1', Icon: Search,    title: 'Understand', desc: 'We start by understanding your business, objectives, challenges, and opportunities.' },
  { num: '2', Icon: BarChart3, title: 'Analyse',    desc: 'We assess your current position, identify improvement areas, and evaluate strategic options.' },
  { num: '3', Icon: PenTool,   title: 'Design',     desc: 'We develop practical solutions aligned with your business goals.' },
  { num: '4', Icon: Play,      title: 'Implement',  desc: 'We support execution to ensure strategies translate into measurable outcomes.' },
  { num: '5', Icon: RefreshCw, title: 'Improve',    desc: 'We continuously refine solutions as your business evolves.' },
]

export default function ApproachSection() {
  return (
    <section className="bg-white border-t-2 border-[#0a0a0a] overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');`}</style>

      <div className="flex items-end justify-between flex-wrap gap-4 px-12 pt-12 pb-7 border-b border-black/[0.08] max-sm:flex-col max-sm:items-start max-sm:px-6 max-sm:pt-8">
        <div>
          <div className="flex items-center gap-2 text-[9px] tracking-[0.4em] uppercase text-[#00aaff] mb-3">
            <div className="w-5 h-0.5 bg-[#00aaff] shrink-0" />
            Our Approach
          </div>
          <h2 className="font-['Fraunces',serif] font-extrabold leading-[0.95] tracking-[-0.02em] text-[#0a0a0a] text-[52px] max-sm:text-[34px] m-0">
            From Understanding Challenges
            <br />
            <em className="font-light italic text-[#777]">To Delivering Results</em>
          </h2>
        </div>
        <div className="text-right text-[9px] tracking-[0.35em] uppercase text-[#aaa] leading-[1.7] max-sm:text-left">
          <strong className="text-[#00aaff] block font-['Bebas_Neue',sans-serif] text-[13px] tracking-[0.15em] font-normal">
            5 Step Method
          </strong>
          Applied Across Every
          <br />
          Advisory Engagement
        </div>
      </div>

      <div className="relative grid grid-cols-5 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
        {/* Connecting rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="absolute left-0 right-0 top-[86px] h-px bg-[#00aaff]/25 origin-left max-[900px]:hidden"
        />

        {steps.map(({ num, Icon, title, desc }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className="group relative px-7 pt-9 pb-11 border-r border-b border-black/[0.07] transition-colors duration-300 hover:bg-[#00aaff]/[0.02] [&:nth-child(6)]:border-r-0 max-[900px]:[&:nth-child(2n)]:border-r-0 max-[520px]:border-r-0 max-[720px]:px-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#00aaff]/30 bg-white font-['Bebas_Neue',sans-serif] text-[15px] text-[#00aaff] transition-colors duration-300 group-hover:bg-[#00aaff] group-hover:text-white">
                {num}
              </span>
              <Icon size={17} strokeWidth={1.4} className="text-[#00aaff]/25 transition-colors duration-300 group-hover:text-[#00aaff]" />
            </div>
            <h3 className="font-['Fraunces',serif] font-extrabold text-[17px] leading-[1.2] text-[#0a0a0a] m-0 mb-3">{title}</h3>
            <p className="text-[11.5px] leading-[1.8] text-[#888] font-light m-0">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
