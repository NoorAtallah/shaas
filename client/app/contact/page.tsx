'use client'

import { useState, useEffect, useRef } from 'react'

const BLUE = '#00aaff'
const INK  = '#0a0a0a'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, inView }
}

const inquiryTypes = [
  'Marketing Consultancy', 'Project Development', 'Administrative Studies',
  'Human Resources', 'Logistics Consultancy', 'AI & Innovation',
  'Oil & Gas Services', 'Legal Sciences', 'General Inquiry',
]

const faqs = [
  { q: 'How quickly do you respond to inquiries?',     a: 'We respond to all inquiries within 24 business hours. For urgent matters, please call our Abu Dhabi office directly.' },
  { q: 'Do you work with international clients?',       a: 'Yes. While we are based in Abu Dhabi, we serve clients across the GCC, MENA, and internationally — with on-ground teams for regional engagements.' },
  { q: 'What is the typical engagement timeline?',      a: 'Engagements vary by scope. Discovery and diagnostic phases typically run 2–4 weeks. Full strategy and delivery programmes range from 3 to 12 months.' },
  { q: 'Do you offer retainer arrangements?',           a: 'Yes. Many of our clients engage us on an ongoing advisory retainer basis. We can discuss flexible arrangements during your initial consultation.' },
]

export default function ContactPage() {
  const heroRef = useInView(0.1)
  const formRef = useInView(0.1)
  const faqRef  = useInView(0.1)

  const [form, setForm]                     = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null)
  const [submitted, setSubmitted]           = useState(false)
  const [openFaq, setOpenFaq]               = useState<number | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ background: '#fff', color: INK, fontFamily: "'DM Sans', sans-serif", overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .ct-fade { opacity:0; transform:translateY(28px); transition:opacity .65s ease,transform .65s ease; }
        .ct-fade.in { opacity:1; transform:translateY(0); }

        /* HERO */
        .ct-hero {
          display: grid;
          grid-template-columns: 1fr 380px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .ct-hero-left { padding: 72px 48px; border-right: 1px solid rgba(0,0,0,0.08); }
        .ct-hero-img  { position: relative; overflow: hidden; }

        /* CONTACT LINK ROWS */
        .ct-contact-link {
          display: flex; align-items: center; gap: 14px;
          text-decoration: none; padding: 12px 0;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          transition: padding-left 0.2s;
        }
        .ct-contact-link:hover { padding-left: 6px; }

        /* MAIN FORM AREA */
        .ct-form-area {
          display: grid;
          grid-template-columns: 1fr 320px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .ct-form-col  { padding: 60px 48px; border-right: 1px solid rgba(0,0,0,0.08); }
        .ct-side-col  { padding: 60px 32px; display: flex; flex-direction: column; gap: 28px; }

        /* INPUTS */
        .ct-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .ct-field { display: flex; flex-direction: column; gap: 6px; }
        .ct-label { font-size: 8px; letter-spacing: 0.35em; text-transform: uppercase; color: #bbb; }
        .ct-input {
          height: 46px; border: none; border-bottom: 1px solid rgba(0,0,0,0.12);
          padding: 0; font-size: 13px; font-family: 'DM Sans', sans-serif;
          font-weight: 300; color: ${INK}; background: transparent;
          outline: none; transition: border-color 0.2s; border-radius: 0;
        }
        .ct-input:focus { border-bottom-color: ${BLUE}; }
        .ct-input::placeholder { color: #ccc; }
        .ct-textarea {
          border: none; border-bottom: 1px solid rgba(0,0,0,0.12);
          padding: 10px 0; font-size: 13px; font-family: 'DM Sans', sans-serif;
          font-weight: 300; color: ${INK}; background: transparent;
          outline: none; resize: none; transition: border-color 0.2s;
          min-height: 90px; border-radius: 0;
        }
        .ct-textarea:focus { border-bottom-color: ${BLUE}; }
        .ct-textarea::placeholder { color: #ccc; }

        /* PILLS */
        .ct-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .ct-pill {
          padding: 7px 14px; border: 1px solid rgba(0,0,0,0.1);
          font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif; color: #888;
          background: transparent; cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .ct-pill:hover { border-color: ${BLUE}; color: ${INK}; }
        .ct-pill.sel   { border-color: ${BLUE}; background: ${BLUE}; color: #fff; }

        /* SUBMIT */
        .ct-submit {
          height: 50px; padding: 0 32px; background: ${INK}; color: #fff; border: none;
          font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif; font-weight: 500;
          cursor: pointer; transition: background 0.25s; align-self: flex-start;
        }
        .ct-submit:hover { background: ${BLUE}; }

        /* SIDE — office card */
        .ct-office-img { position: relative; overflow: hidden; }
        .ct-office-img img { width: 100%; height: 180px; object-fit: cover; display: block; filter: grayscale(20%); transition: transform 0.6s ease; }
        .ct-office-img:hover img { transform: scale(1.03); }

        /* HOURS */
        .ct-hours-row {
          display: flex; justify-content: space-between;
          padding: 7px 0; border-bottom: 1px solid rgba(0,0,0,0.06);
          font-size: 11px;
        }

        /* SOCIAL */
        .ct-social-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 0; border-bottom: 1px solid rgba(0,0,0,0.06);
          cursor: pointer; transition: padding-left 0.2s;
        }
        .ct-social-row:hover { padding-left: 5px; }
        .ct-social-row:hover .ct-social-name { color: ${BLUE}; }
        .ct-social-name { font-family: 'Fraunces', serif; font-weight: 800; font-size: 14px; color: ${INK}; transition: color 0.2s; }

        /* FAQ */
        .ct-faq-area {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 60px 48px;
          gap: 56px;
          align-items: start;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .ct-faq-row { border-bottom: 1px solid rgba(0,0,0,0.07); overflow: hidden; cursor: pointer; }
        .ct-faq-row:first-child { border-top: 1px solid rgba(0,0,0,0.07); }
        .ct-faq-head { display: flex; align-items: center; justify-content: space-between; padding: 18px 0; }
        .ct-faq-q { font-family: 'Fraunces', serif; font-weight: 800; font-size: 14px; color: ${INK}; transition: color 0.2s; }
        .ct-faq-row:hover .ct-faq-q { color: ${BLUE}; }
        .ct-faq-icon { font-size: 20px; color: #ccc; transition: transform 0.3s, color 0.2s; flex-shrink: 0; line-height: 1; }
        .ct-faq-row.open .ct-faq-icon { transform: rotate(45deg); color: ${BLUE}; }
        .ct-faq-body { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.3s ease; font-size: 12px; color: #888; font-weight: 300; line-height: 1.75; }
        .ct-faq-row.open .ct-faq-body { max-height: 200px; padding-bottom: 18px; }

        .ct-img-tag { position: absolute; top: 12px; left: 12px; background: ${BLUE}; color: #fff; font-size: 8px; letter-spacing: 0.3em; text-transform: uppercase; padding: 4px 10px; font-family: 'DM Sans', sans-serif; font-weight: 500; }
        .ct-loc-dot { width: 6px; height: 6px; border-radius: 50%; background: ${BLUE}; flex-shrink: 0; animation: ctpulse 2s infinite; }
        @keyframes ctpulse { 0%,100%{box-shadow:0 0 0 0 rgba(0,170,255,0.5);}50%{box-shadow:0 0 0 5px rgba(0,170,255,0);} }
        .ct-col-label { font-size: 9px; letter-spacing: 0.4em; text-transform: uppercase; color: #aaa; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
        .ct-col-label-line { width: 12px; height: 1px; background: ${BLUE}; flex-shrink: 0; }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .ct-hero         { grid-template-columns: 1fr; }
          .ct-hero-img     { display: none; }
          .ct-hero-left    { border-right: none; padding: 52px 24px 44px; }
          .ct-form-area    { grid-template-columns: 1fr; }
          .ct-form-col     { border-right: none; padding: 44px 24px; }
          .ct-side-col     { padding: 0 24px 44px; border-top: 1px solid rgba(0,0,0,0.08); }
          .ct-faq-area     { grid-template-columns: 1fr; gap: 32px; padding: 44px 24px; }
          .ct-row-2        { grid-template-columns: 1fr; gap: 20px; }
        }

        @media (max-width: 600px) {
          .ct-hero-left    { padding: 40px 20px 36px; }
          .ct-form-col     { padding: 36px 20px; }
          .ct-side-col     { padding: 0 20px 36px; }
          .ct-faq-area     { padding: 36px 20px; }
          .ct-pills        { gap: 6px; }
          .ct-pill         { font-size: 8px; padding: 6px 10px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div ref={heroRef.ref} className="ct-hero">
        <div className="ct-hero-left">
          <div className={`ct-fade${heroRef.inView?' in':''}`} style={{ transitionDelay:'0ms', display:'flex', alignItems:'center', gap:8, marginBottom:24 }}>
            <div style={{ width:20, height:2, background:BLUE }} />
            <span style={{ fontSize:9, letterSpacing:'0.45em', textTransform:'uppercase', color:BLUE, fontWeight:500 }}>Contact Us</span>
          </div>
          <div className={`ct-fade${heroRef.inView?' in':''}`} style={{ transitionDelay:'80ms' }}>
            <div style={{ fontFamily:"'Fraunces',serif", fontWeight:800, fontSize:'clamp(40px,5vw,72px)', lineHeight:0.9, letterSpacing:'-0.025em', color:INK }}>Let's start</div>
          </div>
          <div className={`ct-fade${heroRef.inView?' in':''}`} style={{ transitionDelay:'150ms', marginBottom:32 }}>
            <div style={{ fontFamily:"'Fraunces',serif", fontWeight:300, fontStyle:'italic', fontSize:'clamp(40px,5vw,72px)', lineHeight:0.9, letterSpacing:'-0.025em', color:BLUE }}>a conversation.</div>
          </div>
          <div className={`ct-fade${heroRef.inView?' in':''}`} style={{ transitionDelay:'220ms', marginBottom:36 }}>
            <p style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:14, color:'#888', lineHeight:1.7, maxWidth:420, margin:0, fontWeight:300 }}>
              Whether you have a defined brief or just an early idea — our Abu Dhabi team is ready to listen, explore, and help you find the right path forward.
            </p>
          </div>
          <div className={`ct-fade${heroRef.inView?' in':''}`} style={{ transitionDelay:'290ms' }}>
            {[
              { label:'Email us at',  val:'info@shaas.com',                              href:'mailto:info@shaas.com' },
              { label:'Call us on',   val:'+971 XX XXX XXXX',                            href:'tel:+97100000000' },
              { label:'Visit us at',  val:'ADGM Square, Al Maryah Island, Abu Dhabi',    href:'#' },
            ].map(item => (
              <a key={item.label} href={item.href} className="ct-contact-link">
                <div style={{ width:3, height:32, background:BLUE, flexShrink:0 }} />
                <div>
                  <div style={{ fontSize:8, letterSpacing:'0.3em', textTransform:'uppercase', color:'#bbb', marginBottom:2 }}>{item.label}</div>
                  <div style={{ fontSize:13, color:INK, fontWeight:400 }}>{item.val}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="ct-hero-img">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85" alt="SHAAS office"
            style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', filter:'grayscale(15%)',
              opacity:heroRef.inView?1:0, transform:heroRef.inView?'scale(1)':'scale(1.04)',
              transition:'opacity 0.9s ease 0.2s,transform 1.2s ease 0.2s' }}
          />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right,rgba(255,255,255,0.25) 0%,transparent 40%)' }} />
          <div className="ct-img-tag">Abu Dhabi HQ</div>
          <div style={{ position:'absolute', bottom:24, left:20, display:'flex', alignItems:'center', gap:8 }}>
            <div className="ct-loc-dot" />
            <span style={{ fontSize:9, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(255,255,255,0.8)' }}>Al Maryah Island</span>
          </div>
        </div>
      </div>

      {/* ── FORM + SIDEBAR ── */}
      <div ref={formRef.ref} className="ct-form-area">

        {/* FORM */}
        <div className="ct-form-col">
          <div className={`ct-fade${formRef.inView?' in':''}`} style={{ transitionDelay:'0ms', display:'flex', alignItems:'center', gap:8, marginBottom:28 }}>
            <div style={{ width:20, height:2, background:BLUE }} />
            <span style={{ fontSize:9, letterSpacing:'0.45em', textTransform:'uppercase', color:BLUE, fontWeight:500 }}>Send a Message</span>
          </div>

          {submitted ? (
            <div>
              <div style={{ fontFamily:"'Fraunces',serif", fontWeight:800, fontSize:36, color:INK, lineHeight:1, marginBottom:10 }}>Message sent.</div>
              <div style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:16, color:BLUE, marginBottom:16 }}>We'll be in touch within 24 hours.</div>
              <p style={{ fontSize:13, color:'#888', fontWeight:300, lineHeight:1.7, marginBottom:24 }}>
                Thank you for reaching out to SHAAS. A member of our Abu Dhabi team will review your inquiry and respond shortly.
              </p>
              <button className="ct-submit" onClick={() => { setSubmitted(false); setForm({ name:'',company:'',email:'',phone:'',message:'' }); setSelectedInquiry(null) }}>
                Send Another ↺
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:24 }}>
              <div className={`ct-fade${formRef.inView?' in':''}`} style={{ transitionDelay:'80ms' }}>
                <div className="ct-row-2">
                  <div className="ct-field">
                    <label className="ct-label">Full Name *</label>
                    <input className="ct-input" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label">Company</label>
                    <input className="ct-input" name="company" value={form.company} onChange={handleChange} placeholder="Organisation name" />
                  </div>
                </div>
              </div>

              <div className={`ct-fade${formRef.inView?' in':''}`} style={{ transitionDelay:'130ms' }}>
                <div className="ct-row-2">
                  <div className="ct-field">
                    <label className="ct-label">Email Address *</label>
                    <input className="ct-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label">Phone Number</label>
                    <input className="ct-input" name="phone" value={form.phone} onChange={handleChange} placeholder="+971 XX XXX XXXX" />
                  </div>
                </div>
              </div>

              <div className={`ct-fade${formRef.inView?' in':''}`} style={{ transitionDelay:'180ms' }}>
                <div className="ct-label" style={{ marginBottom:10 }}>Area of Interest</div>
                <div className="ct-pills">
                  {inquiryTypes.map(t => (
                    <button key={t} type="button" className={`ct-pill${selectedInquiry===t?' sel':''}`} onClick={() => setSelectedInquiry(t)}>{t}</button>
                  ))}
                </div>
              </div>

              <div className={`ct-fade${formRef.inView?' in':''}`} style={{ transitionDelay:'230ms' }}>
                <div className="ct-field">
                  <label className="ct-label">Message *</label>
                  <textarea className="ct-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project or challenge..." required rows={4} />
                </div>
              </div>

              <div className={`ct-fade${formRef.inView?' in':''}`} style={{ transitionDelay:'280ms', display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
                <button type="submit" className="ct-submit">Send Message ↗</button>
                <span style={{ fontSize:10, color:'#bbb', letterSpacing:'0.1em' }}>We respond within 24 hours</span>
              </div>
            </form>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="ct-side-col">

          {/* Office card */}
          <div>
            <div className="ct-office-img">
              <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=85" alt="Abu Dhabi" />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.5) 100%)' }} />
              <div className="ct-img-tag">Headquarters</div>
            </div>
            <div style={{ paddingTop:14, borderBottom:'1px solid rgba(0,0,0,0.08)', paddingBottom:16 }}>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:16, letterSpacing:'0.1em', color:INK, marginBottom:6 }}>Abu Dhabi</div>
              <div style={{ fontSize:11, color:'#888', fontWeight:300, lineHeight:1.6 }}>ADGM Square, Al Maryah Island<br />Abu Dhabi, UAE</div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="ct-col-label"><div className="ct-col-label-line" />Business Hours</div>
            {[['Sunday – Thursday','8:00 AM – 5:00 PM'],['Friday – Saturday','Closed']].map(([day,hrs]) => (
              <div key={day} className="ct-hours-row">
                <span style={{ color:'#888', fontWeight:300 }}>{day}</span>
                <span style={{ color:INK, fontWeight:400 }}>{hrs}</span>
              </div>
            ))}
            <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:12 }}>
              <div className="ct-loc-dot" style={{ width:5, height:5 }} />
              <span style={{ fontSize:10, color:BLUE, letterSpacing:'0.1em' }}>Currently open</span>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="ct-col-label"><div className="ct-col-label-line" />Follow SHAAS</div>
            {['LinkedIn','X (Twitter)','Instagram'].map(s => (
              <div key={s} className="ct-social-row">
                <span className="ct-social-name">{s}</span>
                <span style={{ fontSize:12, color:'#ccc' }}>↗</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div ref={faqRef.ref} className="ct-faq-area">
        <div>
          <div className={`ct-fade${faqRef.inView?' in':''}`} style={{ transitionDelay:'0ms', display:'flex', alignItems:'center', gap:8, marginBottom:18 }}>
            <div style={{ width:20, height:2, background:BLUE }} />
            <span style={{ fontSize:9, letterSpacing:'0.45em', textTransform:'uppercase', color:BLUE, fontWeight:500 }}>Common Questions</span>
          </div>
          <div className={`ct-fade${faqRef.inView?' in':''}`} style={{ transitionDelay:'80ms', marginBottom:14 }}>
            <div style={{ fontFamily:"'Fraunces',serif", fontWeight:800, fontSize:'clamp(28px,3.5vw,44px)', lineHeight:0.92, letterSpacing:'-0.02em', color:INK }}>Frequently</div>
            <div style={{ fontFamily:"'Fraunces',serif", fontWeight:300, fontStyle:'italic', fontSize:'clamp(28px,3.5vw,44px)', lineHeight:0.92, letterSpacing:'-0.02em', color:'#777' }}>Asked</div>
          </div>
          <div className={`ct-fade${faqRef.inView?' in':''}`} style={{ transitionDelay:'160ms' }}>
            <p style={{ fontSize:13, color:'#aaa', fontWeight:300, lineHeight:1.75, fontFamily:"'Fraunces',serif", fontStyle:'italic', maxWidth:300 }}>
              Can't find the answer you're looking for? Reach out to our team directly.
            </p>
          </div>
        </div>

        <div className={`ct-fade${faqRef.inView?' in':''}`} style={{ transitionDelay:'100ms' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={`ct-faq-row${openFaq===idx?' open':''}`} onClick={() => setOpenFaq(openFaq===idx?null:idx)}>
              <div className="ct-faq-head">
                <div className="ct-faq-q">{faq.q}</div>
                <div className="ct-faq-icon">+</div>
              </div>
              <div className="ct-faq-body">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}