'use client'

const services = [
  { code: '01', icon: '◈', href: '/business-advisory/fractional-cfo-services', title: 'Fractional CFO Services', desc: 'Senior financial leadership on a flexible basis — improving performance, cash flow, and decision-making.' },
  { code: '02', icon: '◇', href: '/business-advisory/business-strategy-growth-advisory', title: 'Business Strategy & Growth Advisory', desc: 'Practical strategy and growth planning to help businesses scale with clarity and control.' },
  { code: '03', icon: '⬡', href: '/legal-advisory/corporate-commercial-advisory', title: 'Corporate & Commercial Advisory', desc: 'Stronger corporate foundations — structuring, shareholder arrangements, and governance.' },
  { code: '04', icon: '▣', href: '/legal-advisory/corporate-governance', title: 'Corporate Governance', desc: 'Governance frameworks that protect stakeholders and support professional, scalable organisations.' },
  { code: '05', icon: '○', href: '/human-capital-advisory/hr-strategy-workforce-planning', title: 'HR Strategy & Workforce Planning', desc: 'Aligning your workforce with business strategy to improve capability and performance.' },
  { code: '06', icon: '◻', href: '/human-capital-advisory/talent-management-succession-planning', title: 'Talent Management & Succession Planning', desc: 'Developing, retaining, and preparing the talent your organisation needs for the future.' },
  { code: '07', icon: '△', href: '/management-consulting/operational-excellence-consulting', title: 'Operational Excellence Consulting', desc: 'Improving efficiency, processes, and operating models to unlock measurable performance gains.' },
  { code: '08', icon: '◉', href: '/management-consulting/digital-transformation-advisory', title: 'Digital Transformation Advisory', desc: 'Helping businesses modernise operations and adopt technology that supports sustainable growth.' },
]

export default function ShaasServicesSection() {
  return (
    <section className="bg-white border-t-2 border-[#0a0a0a] overflow-hidden font-['DM_Sans',sans-serif]">
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,700&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');`}</style>

      {/* Header */}
      <div className="flex items-end justify-between flex-wrap gap-4 px-12 pt-12 pb-7 border-b border-black/[0.08] max-sm:flex-col max-sm:items-start max-sm:px-6 max-sm:pt-8 max-sm:pb-5">
        <div>
          <div className="flex items-center gap-2 text-[9px] tracking-[0.4em] uppercase text-[#00aaff] mb-3">
            <div className="w-5 h-0.5 bg-[#00aaff] shrink-0" />
            Our Expertise
          </div>
          <h2
            className="font-['Fraunces',serif] font-extrabold leading-[0.95] tracking-[-0.02em] text-[#0a0a0a] text-[52px] max-sm:text-[38px]"
          >
            What We{' '}
            <em className="font-light not-italic text-[#777]">Do</em>
          </h2>
        </div>

        <div className="text-right text-[9px] tracking-[0.35em] uppercase text-[#aaa] leading-[1.7] max-sm:text-left">
          <strong className="text-[#00aaff] block font-['Bebas_Neue',sans-serif] text-[13px] tracking-[0.15em] font-normal">
            8 Flagship Services
          </strong>
          Across Four
          <br />
          Advisory Practices
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 max-[1024px]:grid-cols-3 max-[720px]:grid-cols-2 max-[480px]:grid-cols-1">
        {services.map((svc, i) => (
          <a
            key={svc.title}
            href={svc.href}
            className="
              group relative overflow-hidden cursor-pointer no-underline
              px-7 pt-8 pb-7
              border-r border-b border-black/[0.07]
              transition-colors duration-[250ms]
              hover:bg-[#00aaff]/[0.02]
              [&:nth-child(4n)]:border-r-0
              max-[1024px]:[&:nth-child(4n)]:border-r max-[1024px]:[&:nth-child(3n)]:border-r-0
              max-[720px]:[&:nth-child(3n)]:border-r max-[720px]:[&:nth-child(2n)]:border-r-0
              max-[480px]:border-r-0
              max-[720px]:px-4 max-[720px]:pt-5
            "
          >
            {/* Bottom accent line */}
            <span
              className="
                absolute bottom-0 left-0 right-0 h-0.5 bg-[#00aaff]
                scale-x-0 origin-left transition-transform duration-[350ms] ease-in-out
                group-hover:scale-x-100
              "
            />

            {/* Top row: code + icon */}
            <div className="flex items-start justify-between mb-5">
              <span className="font-['Bebas_Neue',sans-serif] text-[11px] tracking-[0.2em] text-[#ddd]">
                {svc.code}
              </span>
              <span className="text-[18px] text-[#00aaff]/20 transition-colors duration-[250ms] group-hover:text-[#00aaff]">
                {svc.icon}
              </span>
            </div>

            {/* Title */}
            <p className="font-['Fraunces',serif] font-extrabold text-[15px] leading-[1.25] text-[#0a0a0a] mb-3.5">
              {svc.title}
            </p>

            {/* Description */}
            <p className="text-[11px] leading-[1.7] text-[#888] font-light">
              {svc.desc}
            </p>

            {/* Footer */}
            <div className="flex items-center gap-2 mt-5 text-[9px] tracking-[0.25em] uppercase text-[#ccc] transition-colors duration-[250ms] group-hover:text-[#00aaff]">
              <span className="w-4 h-px bg-current" />
              Learn More
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}