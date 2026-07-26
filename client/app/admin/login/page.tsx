'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const BLUE = '#00aaff', INK = '#0a0a0a'
export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault(); setErr(null); setLoading(true)
    const res = await signIn('credentials', { email, password, redirect: false })
    setLoading(false)
    if (res?.error) setErr('Invalid email or password.')
    else router.push('/admin')
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: INK, fontFamily: "'DM Sans',sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,800&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');`}</style>
      <form onSubmit={submit} style={{ width: 360, background: '#fff', padding: 40 }}>
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", letterSpacing: '0.18em', fontSize: 26 }}>SHAAS <span style={{ color: BLUE }}>ADMIN</span></div>
        <p style={{ fontSize: 13, color: '#888', margin: '8px 0 28px', fontWeight: 300 }}>Sign in to manage insights.</p>
        <label style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#aaa' }}>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required style={inp} />
        <label style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#aaa' }}>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required style={inp} />
        {err && <div style={{ color: '#c0392b', fontSize: 12, marginTop: 8 }}>{err}</div>}
        <button disabled={loading} style={{ width: '100%', marginTop: 24, background: INK, color: '#fff', border: 'none', padding: '13px', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', cursor: 'pointer' }}>{loading ? 'Signing in…' : 'Sign In'}</button>
      </form>
    </div>
  )
}
const inp: React.CSSProperties = { width: '100%', border: 'none', borderBottom: '1px solid #ddd', padding: '10px 0', margin: '6px 0 20px', fontSize: 14, outline: 'none' }
