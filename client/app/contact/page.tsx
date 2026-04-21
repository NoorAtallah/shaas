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
  'Marketing Consultancy',
  'Project Development',
  'Administrative Studies',
  'Human Resources',
  'Logistics Consultancy',
  'AI & Innovation',
  'Oil & Gas Services',
  'Legal Sciences',
  'General Inquiry',
]

const offices = [
  {
    city: 'Abu Dhabi',
    tag: 'Headquarters',
    address: 'ADGM Square, Al Maryah Island',
    country: 'Abu Dhabi, UAE',
    phone: '+971 XX XXX XXXX',
    email: 'info@shaas.com',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=85',
  },
]

const faqs = [
  {
    q: 'How quickly do you respond to inquiries?',
    a: 'We respond to all inquiries within 24 business hours. For urgent matters, please call our Abu Dhabi office directly.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. While we are based in Abu Dhabi, we serve clients across the GCC, MENA, and internationally — with on-ground teams for regional engagements.',
  },
  {
    q: 'What is the typical engagement timeline?',
    a: 'Engagements vary by scope. Discovery and diagnostic phases typically run 2–4 weeks. Full strategy and delivery programmes range from 3 to 12 months.',
  },
  {
    q: 'Do you offer retainer arrangements?',
    a: 'Yes. Many of our clients engage us on an ongoing advisory retainer basis. We can discuss flexible arrangements during your initial consultation.',
  },
]

export default function ContactPage() {
  const heroRef  = useInView(0.1)
  const formRef  = useInView(0.1)
  const faqRef   = useInView(0.1)

  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', inquiry: '', message: '',
  })
  const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ background: '#fff', color: INK, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,800;1,9..144,300;1,9..144,700&family=DM+Sans:wght@300;400;500&family=Bebas+Neue&display=swap');

        .ct-fade { opacity:0; transform:translateY(28px); transition:opacity .65s ease,transform .65s ease; }
        .ct-fade.in { opacity:1; transform:translateY(0); }

        /* FORM */
        .ct-field {
          display:flex; flex-direction:column; gap:6px;
        }
        .ct-label {
          font-size:8px; letter-spacing:0.35em; text-transform:uppercase; color:#bbb;
        }
        .ct-input {
          height:48px; border:none; border-bottom:1px solid rgba(0,0,0,0.12);
          padding:0 0 0 0; font-size:13px; font-family:'DM Sans',sans-serif;
          font-weight:300; color:${INK}; background:transparent; outline:none;
          transition:border-color 0.2s;
          border-radius:0;
        }
        .ct-input:focus { border-bottom-color:${BLUE}; }
        .ct-input::placeholder { color:#ccc; }
        .ct-textarea {
          border:none; border-bottom:1px solid rgba(0,0,0,0.12);
          padding:12px 0; font-size:13px; font-family:'DM Sans',sans-serif;
          font-weight:300; color:${INK}; background:transparent; outline:none;
          resize:none; transition:border-color 0.2s; min-height:100px;
          border-radius:0;
        }
        .ct-textarea:focus { border-bottom-color:${BLUE}; }
        .ct-textarea::placeholder { color:#ccc; }

        /* Inquiry pills */
        .ct-pill {
          padding:8px 16px; border:1px solid rgba(0,0,0,0.1);
          font-size:10px; letter-spacing:0.15em; text-transform:uppercase;
          font-family:'DM Sans',sans-serif; font-weight:400;
          color:#888; background:transparent; cursor:pointer;
          transition:border-color 0.2s, color 0.2s, background 0.2s;
        }
        .ct-pill:hover { border-color:${BLUE}; color:${INK}; }
        .ct-pill.selected { border-color:${BLUE}; background:${BLUE}; color:#fff; }

        /* Submit */
        .ct-submit {
          height:52px; padding:0 36px;
          background:${INK}; color:#fff; border:none;
          font-size:10px; letter-spacing:0.3em; text-transform:uppercase;
          font-family:'DM Sans',sans-serif; font-weight:500;
          cursor:pointer; transition:background 0.25s; align-self:flex-start;
        }
        .ct-submit:hover { background:${BLUE}; }

        /* Office card */
        .ct-office-card img {
          width:100%; height:200px; object-fit:cover; display:block;
          filter:grayscale(20%); transition:transform 0.7s ease;
        }
        .ct-office-card:hover img { transform:scale(1.03); }

        /* FAQ */
        .ct-faq-row {
          border-bottom:1px solid rgba(0,0,0,0.07);
          overflow:hidden; cursor:pointer;
        }
        .ct-faq-row:first-child { border-top:1px solid rgba(0,0,0,0.07); }
        .ct-faq-head {
          display:flex; align-items:center; justify-content:space-between;
          padding:20px 0; transition:color 0.2s;
        }
        .ct-faq-row:hover .ct-faq-q { color:${BLUE}; }
        .ct-faq-q {
          font-family:'Fraunces',serif; font-weight:800;
          font-size:15px; color:${INK}; transition:color 0.2s;
        }
        .ct-faq-icon {
          font-size:20px; color:#ccc; transition:transform 0.3s, color 0.2s;
          flex-shrink:0; font-weight:300; line-height:1;
        }
        .ct-faq-row.open .ct-faq-icon { transform:rotate(45deg); color:${BLUE}; }
        .ct-faq-body {
          max-height:0; overflow:hidden;
          transition:max-height 0.4s ease, padding 0.3s ease;
          font-size:12px; color:#888; font-weight:300; line-height:1.75;
        }
        .ct-faq-row.open .ct-faq-body { max-height:200px; padding-bottom:20px; }

        .ct-loc-dot {
          width:6px; height:6px; border-radius:50%; background:${BLUE};
          animation:ctpulse 2s infinite; flex-shrink:0;
        }
        @keyframes ctpulse {
          0%,100%{box-shadow:0 0 0 0 rgba(0,170,255,0.5);}
          50%{box-shadow:0 0 0 5px rgba(0,170,255,0);}
        }

        @media(max-width:960px){
          .ct-main-grid { grid-template-columns:1fr !important; }
          .ct-bottom-grid { grid-template-columns:1fr !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div ref={heroRef.ref} style={{ display:'grid', gridTemplateColumns:'1fr 400px', borderBottom:`1px solid rgba(0,0,0,0.08)` }}>

        {/* Left */}
        <div style={{ padding:'80px 48px 72px', borderRight:'1px solid rgba(0,0,0,0.08)' }}>
          <div className={`ct-fade${heroRef.inView?' in':''}`} style={{ transitionDelay:'0ms', display:'flex', alignItems:'center', gap:8, marginBottom:28 }}>
            <div style={{ width:20, height:2, background:BLUE }} />
            <span style={{ fontSize:9, letterSpacing:'0.45em', textTransform:'uppercase', color:BLUE, fontWeight:500 }}>Contact Us</span>
          </div>
          <div className={`ct-fade${heroRef.inView?' in':''}`} style={{ transitionDelay:'80ms' }}>
            <div style={{ fontFamily:"'Fraunces',serif", fontWeight:800, fontSize:'clamp(44px,5.5vw,76px)', lineHeight:0.9, letterSpacing:'-0.025em', color:INK }}>
              Let's start
            </div>
          </div>
          <div className={`ct-fade${heroRef.inView?' in':''}`} style={{ transitionDelay:'150ms', marginBottom:36 }}>
            <div style={{ fontFamily:"'Fraunces',serif", fontWeight:300, fontStyle:'italic', fontSize:'clamp(44px,5.5vw,76px)', lineHeight:0.9, letterSpacing:'-0.025em', color:BLUE }}>
              a conversation.
            </div>
          </div>
          <div className={`ct-fade${heroRef.inView?' in':''}`} style={{ transitionDelay:'220ms', marginBottom:40 }}>
            <p style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:15, color:'#888', lineHeight:1.7, maxWidth:440, margin:0, fontWeight:300 }}>
              Whether you have a defined brief or just an early idea — our Abu Dhabi team is ready to listen, explore, and help you find the right path forward.
            </p>
          </div>

          {/* Contact quick links */}
          <div className={`ct-fade${heroRef.inView?' in':''}`} style={{ transitionDelay:'290ms', display:'flex', flexDirection:'column', gap:16 }}>
            {[
              { label:'Email us at', val:'info@shaas.com', href:'mailto:info@shaas.com' },
              { label:'Call us on', val:'+971 XX XXX XXXX', href:'tel:+97100000000' },
              { label:'Visit us at', val:'ADGM Square, Al Maryah Island, Abu Dhabi', href:'#' },
            ].map(item => (
              <a key={item.label} href={item.href} style={{ display:'flex', alignItems:'center', gap:14, textDecoration:'none', padding:'12px 0', borderBottom:'1px solid rgba(0,0,0,0.07)', transition:'padding-left 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.paddingLeft = '6px')}
                onMouseLeave={e => (e.currentTarget.style.paddingLeft = '0')}
              >
                <div style={{ width:3, height:32, background:BLUE, flexShrink:0 }} />
                <div>
                  <div style={{ fontSize:8, letterSpacing:'0.3em', textTransform:'uppercase', color:'#bbb', marginBottom:2 }}>{item.label}</div>
                  <div style={{ fontSize:13, color:INK, fontWeight:400 }}>{item.val}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div style={{ position:'relative', overflow:'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85"
            alt="SHAAS office"
            style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', filter:'grayscale(15%)',
              opacity:heroRef.inView?1:0, transform:heroRef.inView?'scale(1)':'scale(1.04)',
              transition:'opacity 0.9s ease 0.2s, transform 1.2s ease 0.2s' }}
          />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right,rgba(255,255,255,0.25) 0%,transparent 40%)' }} />
          <div style={{ position:'absolute', top:20, left:20, background:BLUE, color:'#fff', fontSize:8, letterSpacing:'0.3em', textTransform:'uppercase', padding:'4px 10px', fontFamily:"'DM Sans',sans-serif", fontWeight:500 }}>
            Abu Dhabi HQ
          </div>
          {/* Pulsing location indicator */}
          <div style={{ position:'absolute', bottom:28, left:24, display:'flex', alignItems:'center', gap:8 }}>
            <div className="ct-loc-dot" />
            <span style={{ fontSize:9, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(255,255,255,0.8)' }}>Al Maryah Island</span>
          </div>
        </div>
      </div>

      {/* ── CONTACT FORM + SIDEBAR ── */}
      <div ref={formRef.ref}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 360px', minHeight:600, borderBottom:`1px solid rgba(0,0,0,0.08)` }} className="ct-main-grid">

          {/* FORM */}
          <div style={{ padding:'64px 48px', borderRight:'1px solid rgba(0,0,0,0.08)' }}>
            <div className={`ct-fade${formRef.inView?' in':''}`} style={{ transitionDelay:'0ms', display:'flex', alignItems:'center', gap:8, marginBottom:28 }}>
              <div style={{ width:20, height:2, background:BLUE }} />
              <span style={{ fontSize:9, letterSpacing:'0.45em', textTransform:'uppercase', color:BLUE, fontWeight:500 }}>Send a Message</span>
            </div>

            {submitted ? (
              <div className={`ct-fade${formRef.inView?' in':''}`} style={{ transitionDelay:'80ms' }}>
                <div style={{ fontFamily:"'Fraunces',serif", fontWeight:800, fontSize:36, color:INK, lineHeight:1, marginBottom:12 }}>
                  Message sent.
                </div>
                <div style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:16, color:BLUE, marginBottom:20 }}>
                  We'll be in touch within 24 hours.
                </div>
                <p style={{ fontSize:13, color:'#888', fontWeight:300, lineHeight:1.7 }}>
                  Thank you for reaching out to SHAAS. A member of our Abu Dhabi team will review your inquiry and respond shortly.
                </p>
                <button
                  className="ct-submit"
                  style={{ marginTop:28 }}
                  onClick={() => { setSubmitted(false); setForm({ name:'',company:'',email:'',phone:'',inquiry:'',message:'' }); setSelectedInquiry(null) }}
                >
                  Send Another ↺
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:28 }}>
                {/* Name + Company */}
                <div className={`ct-fade${formRef.inView?' in':''}`} style={{ transitionDelay:'80ms', display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
                  <div className="ct-field">
                    <label className="ct-label">Full Name *</label>
                    <input className="ct-input" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label">Company</label>
                    <input className="ct-input" name="company" value={form.company} onChange={handleChange} placeholder="Organisation name" />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className={`ct-fade${formRef.inView?' in':''}`} style={{ transitionDelay:'140ms', display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
                  <div className="ct-field">
                    <label className="ct-label">Email Address *</label>
                    <input className="ct-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label">Phone Number</label>
                    <input className="ct-input" name="phone" value={form.phone} onChange={handleChange} placeholder="+971 XX XXX XXXX" />
                  </div>
                </div>

                {/* Inquiry type */}
                <div className={`ct-fade${formRef.inView?' in':''}`} style={{ transitionDelay:'200ms' }}>
                  <div className="ct-label" style={{ marginBottom:12 }}>Area of Interest</div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                    {inquiryTypes.map(t => (
                      <button
                        key={t} type="button"
                        className={`ct-pill${selectedInquiry===t?' selected':''}`}
                        onClick={() => setSelectedInquiry(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className={`ct-fade${formRef.inView?' in':''}`} style={{ transitionDelay:'260ms' }}>
                  <div className="ct-field">
                    <label className="ct-label">Message *</label>
                    <textarea className="ct-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project or challenge..." required rows={4} />
                  </div>
                </div>

                <div className={`ct-fade${formRef.inView?' in':''}`} style={{ transitionDelay:'310ms', display:'flex', alignItems:'center', gap:20 }}>
                  <button type="submit" className="ct-submit">Send Message ↗</button>
                  <span style={{ fontSize:10, color:'#bbb', letterSpacing:'0.1em' }}>We respond within 24 hours</span>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div style={{ padding:'64px 36px', display:'flex', flexDirection:'column', gap:32 }}>

            {/* Office card */}
            {offices.map(office => (
              <div key={office.city} className="ct-office-card" style={{ overflow:'hidden' }}>
                <div style={{ position:'relative', overflow:'hidden' }}>
                  <img src={office.img} alt={office.city} />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,transparent 40%,rgba(255,255,255,0.5) 100%)' }} />
                  <div style={{ position:'absolute', top:12, left:12, background:BLUE, color:'#fff', fontSize:8, letterSpacing:'0.3em', textTransform:'uppercase', padding:'3px 8px', fontFamily:"'DM Sans',sans-serif", fontWeight:500 }}>
                    {office.tag}
                  </div>
                </div>
                <div style={{ paddingTop:16, borderBottom:'1px solid rgba(0,0,0,0.08)', paddingBottom:20 }}>
                  <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:18, letterSpacing:'0.1em', color:INK, marginBottom:10 }}>{office.city}</div>
                  <div style={{ fontSize:11, color:'#888', fontWeight:300, lineHeight:1.7 }}>
                    {office.address}<br />
                    {office.country}
                  </div>
                </div>
              </div>
            ))}

            {/* Business hours */}
            <div>
              <div style={{ fontSize:9, letterSpacing:'0.4em', textTransform:'uppercase', color:'#aaa', marginBottom:14, display:'flex', alignItems:'center', gap:8 }}>
                <div style={{ width:12, height:1, background:BLUE }} />
                Business Hours
              </div>
              {[
                ['Sunday – Thursday', '8:00 AM – 5:00 PM'],
                ['Friday – Saturday', 'Closed'],
              ].map(([day, hours]) => (
                <div key={day} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontSize:11, color:'#888', fontWeight:300 }}>{day}</span>
                  <span style={{ fontSize:11, color:INK, fontWeight:400 }}>{hours}</span>
                </div>
              ))}
              <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:14 }}>
                <div className="ct-loc-dot" style={{ width:5, height:5 }} />
                <span style={{ fontSize:10, color:BLUE, letterSpacing:'0.1em' }}>Currently open</span>
              </div>
            </div>

            {/* Social */}
            <div>
              <div style={{ fontSize:9, letterSpacing:'0.4em', textTransform:'uppercase', color:'#aaa', marginBottom:14, display:'flex', alignItems:'center', gap:8 }}>
                <div style={{ width:12, height:1, background:BLUE }} />
                Follow SHAAS
              </div>
              {['LinkedIn', 'X (Twitter)', 'Instagram'].map((s, i) => (
                <div key={s} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 0', borderBottom:'1px solid rgba(0,0,0,0.06)', cursor:'pointer', transition:'padding-left 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.paddingLeft='5px'; (e.currentTarget.querySelector('.ct-soc-name') as HTMLElement).style.color=BLUE }}
                  onMouseLeave={e => { e.currentTarget.style.paddingLeft='0'; (e.currentTarget.querySelector('.ct-soc-name') as HTMLElement).style.color=INK }}
                >
                  <span className="ct-soc-name" style={{ fontFamily:"'Fraunces',serif", fontWeight:800, fontSize:14, color:INK, transition:'color 0.2s' }}>{s}</span>
                  <span style={{ fontSize:12, color:'#ccc' }}>↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div ref={faqRef.ref} style={{ borderBottom:`1px solid rgba(0,0,0,0.08)` }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', padding:'64px 48px', gap:64, alignItems:'start' }} className="ct-bottom-grid">

          {/* Left heading */}
          <div>
            <div className={`ct-fade${faqRef.inView?' in':''}`} style={{ transitionDelay:'0ms', display:'flex', alignItems:'center', gap:8, marginBottom:20 }}>
              <div style={{ width:20, height:2, background:BLUE }} />
              <span style={{ fontSize:9, letterSpacing:'0.45em', textTransform:'uppercase', color:BLUE, fontWeight:500 }}>Common Questions</span>
            </div>
            <div className={`ct-fade${faqRef.inView?' in':''}`} style={{ transitionDelay:'80ms', marginBottom:16 }}>
              <div style={{ fontFamily:"'Fraunces',serif", fontWeight:800, fontSize:'clamp(32px,3.5vw,48px)', lineHeight:0.92, letterSpacing:'-0.02em', color:INK }}>
                Frequently
              </div>
              <div style={{ fontFamily:"'Fraunces',serif", fontWeight:300, fontStyle:'italic', fontSize:'clamp(32px,3.5vw,48px)', lineHeight:0.92, letterSpacing:'-0.02em', color:'#777' }}>
                Asked
              </div>
            </div>
            <div className={`ct-fade${faqRef.inView?' in':''}`} style={{ transitionDelay:'160ms' }}>
              <p style={{ fontSize:13, color:'#aaa', fontWeight:300, lineHeight:1.75, fontFamily:"'Fraunces',serif", fontStyle:'italic', maxWidth:320 }}>
                Can't find the answer you're looking for? Reach out to our team directly.
              </p>
            </div>
          </div>

          {/* Right FAQs */}
          <div className={`ct-fade${faqRef.inView?' in':''}`} style={{ transitionDelay:'100ms' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`ct-faq-row${openFaq===idx?' open':''}`}
                onClick={() => setOpenFaq(openFaq===idx ? null : idx)}
              >
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
    </div>
  )
}