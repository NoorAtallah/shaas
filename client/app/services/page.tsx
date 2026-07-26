import type { Metadata } from 'next'
import ServicesIndex from '../components/service/ServicesIndex'

export const metadata: Metadata = {
  title: 'Business Consulting Services UAE | Legal, Financial & Management Advisory | SHAAS',
  description:
    'Explore SHAAS consulting services in the UAE, including Legal Advisory, Business & Financial Advisory, Management Consulting, and Human Capital Advisory solutions designed to help businesses grow, transform, and achieve sustainable success.',
  alternates: { canonical: '/services' },
}

export default function Page() {
  return <ServicesIndex />
}