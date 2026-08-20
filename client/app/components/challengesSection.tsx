'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Gauge, ShieldCheck, Users, Rocket, ArrowUpRight } from 'lucide-react'

const BLUE = '#00aaff'

const challenges = [
  {
    num: '01',
    Icon: TrendingUp,
    title: 'Scaling the Business Without Losing Control',
    desc: 'Growth creates complexity. We help businesses build stronger structures, processes, governance frameworks, and operating models to support sustainable expansion.',
    links: [
      { label: 'Business Strategy & Growth Advisory', href: '/business-advisory/business-strategy-growth-advisory' },
      { label: 'Organisation Design & Workforce Structuring', href: '/human-capital-advisory/organisation-design-workforce-structuring' },
      { label: 'Business Process Optimisation', href: '/business-advisory/business-process-optimisation' },
      { label: 'Fractional CFO Services', href: '/business-advisory/fractional-cfo-services' },
    ],
  },
  {
    num: '02',
    Icon: Gauge,
    title: 'Improving Profitability and Business Performance',
    desc: 'We help organisations identify performance gaps, improve efficiency, strengthen financial management, and unlock growth opportunities.',
    links: [
      { label: 'Fractional CFO Services', href: '/business-advisory/fractional-cfo-services' },
      { label: 'Financial Planning & Analysis (FP&A)', href: '/business-advisory/financial-planning-analysis-fpa' },
      { label: 'Business Performance Improvement', href: '/business-advisory/business-performance-improvement' },
      { label: 'Operational Excellence Consulting', href: '/management-consulting/operational-excellence-consulting' },
    ],
  },
  {
    num: '03',
    Icon: ShieldCheck,
    title: 'Managing Legal and Regulatory Risks',
    desc: 'We support businesses in navigating commercial, regulatory, governance, and employment-related challenges.',
    links: [
      { label: 'Legal Risk Management', href: '/legal-advisory/legal-risk-management' },
      { label: 'Regulatory Compliance', href: '/legal-advisory/regulatory-compliance' },
      { label: 'Corporate Governance', href: '/legal-advisory/corporate-governance' },
      { label: 'HR Compliance & Employment Advisory', href: '/human-capital-advisory/hr-compliance-employment-advisory' },
    ],
  },
  {
    num: '04',
    Icon: Users,
    title: 'Building Stronger Organisations and Teams',
    desc: 'We help companies attract talent, develop leaders, improve performance, and create workforce strategies aligned with business objectives.',
    links: [
      { label: 'Talent Management & Succession Planning', href: '/human-capital-advisory/talent-management-succession-planning' },
      { label: 'Learning & Leadership Development', href: '/human-capital-advisory/learning-leadership-development' },
      { label: 'Performance Management & KPI Frameworks', href: '/human-capital-advisory/performance-management-kpi-frameworks' },
      { label: 'HR Strategy & Workforce Planning', href: '/human-capital-advisory/hr-strategy-workforce-planning' },
    ],
  },
  {
    num: '05',
    Icon: Rocket,
    title: 'Preparing for Investment, Expansion, or Transformation',
    desc: 'We support businesses with strategic planning, financial readiness, operational improvement, and execution support.',
    links: [
      { label: 'Investor Readiness & Capital Raising', href: '/business-advisory/investor-readiness-capital-raising' },
      { label: 'Financial Modelling & Business Valuation', href: '/business-advisory/financial-modelling-business-valuation' },
      { label: 'Growth & Expansion Advisory', href: '/management-consulting/growth-expansion-advisory' },
      { label: 'Digital Transformation Advisory', href: '/management-consulting/digital-transformation-advisory' },
      { label: 'M&A Financial Advisory', href: '/business-advisory/mergers-acquisitions-financial-advisory' },
    ],
  },
]

export default function ChallengesSection() {
  return (
    <section
      className="bg-white border-t-2 border-[#0a0a0a] overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');`}</style>

      {/* Header */}
      <div className="flex items-end justify-between flex-wrap gap-4 px-12 pt-12 pb-7 border-b border-black/[0.08] max-sm:flex-col max-sm:items-start max-sm:px-6 max-sm:pt-8 max-sm:pb-5">
        <div>
          <div className="flex items-center gap-2 text-[9px] tracking-[0.4em] uppercase text-[#00aaff] mb-3">
            <div className="w-5 h-0.5 bg-[#00aaff] shrink-0" />
            Business Challenges We Help Solve
          </div>
          <h2 className="font-['Fraunces',serif] font-extrabold leading-[0.95] tracking-[-0.02em] text-[#0a0a0a] text-[52px] max-sm:text-[34px] m-0">
            Supporting Leaders Through
            <br />
            <em className="font-light italic text-[#777]">Critical Business Decisions</em>
          </h2>
        </div>
        <p className="max-w-[280px] text-[12px] leading-[1.8] text-[#888] font-light m-0">
          Businesses often reach important stages where the right advice can determine future success. SHAAS helps organisations address challenges including:
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
        {challenges.map(({ num, Icon, title, desc, links }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
            className="group relative px-7 pt-8 pb-8 border-r border-b border-black/[0.07] transition-colors duration-300 hover:bg-[#00aaff]/[0.02] [&:nth-child(3n)]:border-r-0 max-[1024px]:[&:nth-child(3n)]:border-r max-[1024px]:[&:nth-child(2n)]:border-r-0 max-[640px]:border-r-0 max-[720px]:px-5"
          >
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00aaff] scale-x-0 origin-left transition-transform duration-[350ms] ease-in-out group-hover:scale-x-100" />

            <div className="flex items-start justify-between mb-6">
              <span className="font-['Bebas_Neue',sans-serif] text-[11px] tracking-[0.2em] text-[#ddd]">{num}</span>
              <Icon size={18} strokeWidth={1.4} className="text-[#00aaff]/25 transition-colors duration-300 group-hover:text-[#00aaff]" />
            </div>

            <h3 className="font-['Fraunces',serif] font-extrabold text-[16px] leading-[1.25] text-[#0a0a0a] mb-3.5 m-0">
              {title}
            </h3>
            <p className="text-[11.5px] leading-[1.75] text-[#888] font-light m-0 mb-6">{desc}</p>

            <div className="flex flex-col gap-1.5 pt-5 border-t border-black/[0.06]">
              <div className="text-[8px] tracking-[0.3em] uppercase text-[#ccc] mb-1">How we help</div>
              {links.map((l) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-1.5 text-[11px] font-light text-[#999] hover:text-[#0a0a0a] no-underline"
                >
                  {l.label}
                  <ArrowUpRight size={11} style={{ color: BLUE }} className="opacity-0 hover:opacity-100 transition-opacity shrink-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Filler cell to complete the grid */}
        <div className="border-b border-black/[0.07] max-[640px]:hidden" />
      </div>
    </section>
  )
}
