'use client'

import { motion } from 'framer-motion'
import { Layers3, Target, UserCheck, Settings2, Handshake } from 'lucide-react'

const reasons = [
  { num: '01', Icon: Layers3,   title: 'Integrated Expertise',           desc: 'Unlike traditional advisory firms focused on a single discipline, SHAAS combines legal, financial, strategic, operational, and human capital expertise under one platform.' },
  { num: '02', Icon: Target,    title: 'Commercially Focused Solutions', desc: 'We understand that businesses need practical solutions that create measurable outcomes, not theoretical recommendations.' },
  { num: '03', Icon: UserCheck, title: 'Senior-Level Advisory Support',  desc: 'We work closely with leadership teams on critical decisions that impact business growth and performance.' },
  { num: '04', Icon: Settings2, title: 'Tailored Advisory Approach',     desc: 'Every business has unique challenges. Our solutions are customised based on your objectives, industry, and growth stage.' },
  { num: '05', Icon: Handshake, title: 'Long-Term Partnership',          desc: 'We aim to become a trusted advisory partner supporting businesses throughout their growth journey.' },
]

export default function WhyShaasSection() {
  return (
    <section className="bg-white border-t-2 border-[#0a0a0a] overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');`}</style>

      <div className="grid grid-cols-[380px_1fr] max-[960px]:grid-cols-1">
        {/* Left rail */}
        <div className="px-12 pt-14 pb-12 border-r border-black/[0.08] max-[960px]:border-r-0 max-[960px]:border-b max-sm:px-6 max-sm:pt-10">
          <div className="flex items-center gap-2 text-[9px] tracking-[0.4em] uppercase text-[#00aaff] mb-3">
            <div className="w-5 h-0.5 bg-[#00aaff] shrink-0" />
            Why SHAAS?
          </div>
          <h2 className="font-['Fraunces',serif] font-extrabold leading-[0.95] tracking-[-0.02em] text-[#0a0a0a] text-[46px] max-sm:text-[34px] m-0 mb-5">
            A Different
            <br />
            <em className="font-light italic text-[#777]">Approach to Consulting</em>
          </h2>
          <p className="text-[12px] leading-[1.85] text-[#888] font-light m-0">
            Five commitments that shape how we work with every client, on every engagement.
          </p>
        </div>

        {/* Right list */}
        <div className="flex flex-col">
          {reasons.map(({ num, Icon, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              className="group relative grid grid-cols-[56px_28px_1fr] items-start gap-5 px-10 py-7 border-b border-black/[0.07] last:border-b-0 transition-colors duration-300 hover:bg-[#00aaff]/[0.02] max-sm:grid-cols-[36px_1fr] max-sm:px-6 max-sm:gap-3"
            >
              <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00aaff] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
              <span className="font-['Bebas_Neue',sans-serif] text-[24px] leading-none text-[#e2e2e2] transition-colors duration-300 group-hover:text-[#00aaff]">{num}</span>
              <Icon size={18} strokeWidth={1.4} className="mt-1 text-[#00aaff]/25 transition-colors duration-300 group-hover:text-[#00aaff] max-sm:hidden" />
              <div>
                <h3 className="font-['Fraunces',serif] font-extrabold text-[17px] leading-[1.25] text-[#0a0a0a] m-0 mb-2">{title}</h3>
                <p className="text-[11.5px] leading-[1.8] text-[#888] font-light m-0 max-w-[560px]">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
