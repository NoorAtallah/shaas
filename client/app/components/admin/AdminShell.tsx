'use client'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { LayoutDashboard, PenSquare, Globe, LogOut } from 'lucide-react'

const BLUE = '#00aaff', INK = '#0a0a0a'
const nav = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'New Insight', href: '/admin/new', icon: PenSquare },
  { label: 'View Site', href: '/', icon: Globe, external: true },
]

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f6f6f7', fontFamily: "'DM Sans',sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');
        .adm-link{ display:flex; align-items:center; gap:11px; padding:11px 16px; font-size:13px; color:#bbb; text-decoration:none; border-radius:8px; transition:background .2s,color .2s; }
        .adm-link:hover{ background:rgba(255,255,255,0.06); color:#fff; }
        .adm-link.active{ background:${BLUE}; color:#fff; }
      `}</style>

      {/* SIDEBAR */}
      <aside style={{ width: 240, background: INK, color: '#fff', display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh', flexShrink: 0 }}>
        <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", letterSpacing: '0.18em', fontSize: 24 }}>SHAAS <span style={{ color: BLUE }}>ADMIN</span></div>
          <div style={{ fontSize: 8, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#777', marginTop: 2 }}>Insights Manager</div>
        </div>
        <nav style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
          {nav.map((n) => {
            const active = n.href === '/admin' ? pathname === '/admin' : pathname?.startsWith(n.href)
            return (
              <a key={n.href} href={n.href} className={`adm-link${active && !n.external ? ' active' : ''}`}>
                <n.icon size={16} /> {n.label}
              </a>
            )
          })}
        </nav>
        <div style={{ padding: 14, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <button onClick={() => signOut({ callbackUrl: '/admin/login' })} className="adm-link" style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer' }}>
            <LogOut size={16} /> Sign out
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, minWidth: 0 }}>{children}</main>
    </div>
  )
}
