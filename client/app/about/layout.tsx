import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About SHAAS | Business Consulting Firm UAE | Strategic Advisory Partner',
  description:
    'Learn about SHAAS, a UAE-based consulting firm providing Legal Advisory, Business & Financial Advisory, Management Consulting, and Human Capital Advisory solutions to support business growth and transformation.',
  keywords: ['Consulting firm UAE', 'Business advisory UAE', 'Management consulting Dubai', 'Strategic advisory firm UAE', 'Business consultants UAE'],
  alternates: { canonical: '/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}