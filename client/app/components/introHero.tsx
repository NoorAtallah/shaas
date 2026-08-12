'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowDown,
  Scale,
  LineChart,
  Target,
  Users,
  MapPin,
} from 'lucide-react'

const BLUE = '#00aaff'
const INK = '#0a0a0a'

const SERIF = "'Fraunces', serif"
const SANS = "'DM Sans', sans-serif"
const DISPLAY = "'Bebas Neue', sans-serif"

const pillars = [
  { icon: Scale, label: 'Legal Advisory', href: '/legal-advisory' },
  { icon: LineChart, label: 'Business & Financial Advisory', href: '/business-financial-advisory' },
  { icon: Target, label: 'Management Consulting', href: '/management-consulting' },
  { icon: Users, label: 'Human Capital Advisory', href: '/human-capital-advisory' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function IntroHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ color: INK, fontFamily: SANS }}
    >
      {/* subtle grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at 50% 40%, black 30%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 30%, transparent 78%)',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex min-h-[92vh] max-w-[1440px] flex-col justify-center px-6 pt-28 pb-14 md:px-12 lg:px-16"
      >
        {/* eyebrow */}
        <motion.div variants={rise} className="mb-8 flex flex-wrap items-center gap-3">
          <span className="h-[2px] w-8" style={{ background: BLUE }} />
          <span
            className="text-[9px] uppercase"
            style={{ letterSpacing: '0.45em', color: BLUE, fontWeight: 500 }}
          >
            Strategic Advisory · UAE
          </span>
          <span className="hidden items-center gap-2 md:inline-flex">
            <MapPin size={11} className="text-neutral-400" />
            <span
              className="text-[9px] uppercase text-neutral-400"
              style={{ letterSpacing: '0.3em' }}
            >
              Abu Dhabi · GCC
            </span>
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* headline */}
          <div>
            <motion.h1
              variants={rise}
              className="text-[clamp(38px,6.2vw,88px)]"
              style={{
                fontFamily: SERIF,
                fontWeight: 800,
                lineHeight: 0.94,
                letterSpacing: '-0.025em',
              }}
            >
              Strategic Advisory
              <br />
              Solutions for
              <br />
              Businesses Ready to{' '}
              <span
                style={{
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: '#555',
                }}
              >
                Grow, Transform,
                <br />
                and Scale
              </span>
            </motion.h1>

            <motion.div
              variants={rise}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 px-7 py-4 text-[10px] uppercase text-white transition-colors duration-300"
                style={{ background: INK, letterSpacing: '0.25em', fontWeight: 500 }}
                onMouseEnter={(e) => (e.currentTarget.style.background = BLUE)}
                onMouseLeave={(e) => (e.currentTarget.style.background = INK)}
              >
                Schedule a Consultation
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="/services"
                className="group inline-flex items-center gap-3 border-b border-transparent py-4 text-[10px] uppercase text-neutral-400 transition-colors duration-300 hover:border-neutral-900 hover:text-neutral-900"
                style={{ letterSpacing: '0.2em' }}
              >
                Explore Our Services
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* copy column */}
          <motion.div variants={rise} className="flex flex-col justify-end">
            <div className="border-l pl-6" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
              <p className="text-[13px] leading-[1.85] font-light text-neutral-600">
                SHAAS is a UAE-based consulting firm providing integrated{' '}
                <span style={{ color: INK, fontWeight: 400 }}>Legal Advisory</span>,{' '}
                <span style={{ color: INK, fontWeight: 400 }}>Business &amp; Financial Advisory</span>,{' '}
                <span style={{ color: INK, fontWeight: 400 }}>Management Consulting</span>, and{' '}
                <span style={{ color: INK, fontWeight: 400 }}>Human Capital Advisory</span> services
                to help organisations overcome challenges, improve performance, manage risks, and
                achieve sustainable growth.
              </p>
              <p
                className="mt-5 text-[13px] leading-[1.7] italic text-neutral-500"
                style={{ fontFamily: SERIF, fontWeight: 300 }}
              >
                We partner with business owners, CEOs, investors, and leadership teams to deliver
                practical, commercially focused solutions that create measurable impact.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <motion.span
                  className="h-[6px] w-[6px] rounded-full"
                  style={{ background: BLUE }}
                  animate={{ opacity: [1, 0.25, 1], scale: [1, 1.35, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span
                  className="text-[9px] uppercase text-neutral-400"
                  style={{ letterSpacing: '0.3em' }}
                >
                  Supporting businesses across the UAE and GCC
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* pillar strip */}
        <motion.div
          variants={rise}
          className="mt-16 grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: INK }}
        >
          {pillars.map(({ icon: Icon, label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ backgroundColor: 'rgba(0,170,255,0.03)' }}
              transition={{ duration: 0.25 }}
              className="group relative flex items-center gap-4 px-5 py-7 lg:px-7"
              style={{
                borderRight: i === pillars.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.08)',
              }}
            >
              <span
                className="text-[11px]"
                style={{ fontFamily: DISPLAY, letterSpacing: '0.2em', color: '#ccc' }}
              >
                0{i + 1}
              </span>
              <Icon
                size={17}
                strokeWidth={1.4}
                className="text-neutral-300 transition-colors duration-300 group-hover:text-[#00aaff]"
              />
              <span
                className="flex-1 text-[13px] leading-tight"
                style={{ fontFamily: SERIF, fontWeight: 800 }}
              >
                {label}
              </span>
              <ArrowRight
                size={13}
                className="text-neutral-200 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#00aaff]"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* scroll cue */}
        <motion.div
          variants={rise}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <span
            className="text-[9px] uppercase text-neutral-300"
            style={{ letterSpacing: '0.35em' }}
          >
            Scroll to explore
          </span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={13} style={{ color: BLUE }} />
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  )
}
