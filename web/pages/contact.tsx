// ============================================================
// KnowingPath.ai — /contact
// Site map: Email | Social | Support
// ============================================================

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { CONTENT } from '../../shared/utils/sharedLogic';

const cp = CONTENT.contactPage;

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } },
      { threshold: 0.10 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible: v };
}

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const { ref, visible } = useFadeIn();
  return (
    <div ref={ref} style={{
      opacity:    visible ? 1 : 0,
      transform:  visible ? 'translateY(0)' : 'translateY(22px)',
      transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
};

const SectionWrap: React.FC<{ id: string; children: React.ReactNode }> = ({ id, children }) => (
  <section id={id} style={{ padding:'clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,2rem)', maxWidth:'1000px', margin:'0 auto' }}>
    {children}
  </section>
);

const GlowDivider: React.FC = () => (
  <div style={{
    height:'1px',
    background:'linear-gradient(90deg,transparent,rgba(91,163,217,0.35),transparent)',
  }}/>
);

// ── Email ─────────────────────────────────────────────────────
const EmailSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const inputStyle: React.CSSProperties = {
    width:'100%',padding:'0.875rem 1.125rem',
    background:'rgba(15,23,41,0.70)',
    border:'1px solid rgba(91,163,217,0.15)',borderRadius:'10px',
    fontFamily:"'Inter',sans-serif",fontSize:'0.9375rem',
    color:'#E2E8F0',outline:'none',transition:'border-color 0.2s ease',
    boxSizing:'border-box',
  };

  return (
    <SectionWrap id="email">
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'start' }}>
        <FadeIn>
          <p style={{
            fontFamily:'Inter',fontSize:'0.6875rem',fontWeight:600,
            letterSpacing:'0.18em',textTransform:'uppercase',
            color:'#5BA3D9',marginBottom:'0.875rem',
          }}>
            {cp.email.eyebrow}
          </p>
          <h2 style={{
            fontFamily:'Inter',fontSize:'clamp(1.75rem,3vw,2.25rem)',
            fontWeight:800,lineHeight:1.2,letterSpacing:'-0.025em',
            background:'linear-gradient(135deg,#E2E8F0 0%,#B3D9F5 100%)',
            WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
            backgroundClip:'text',marginBottom:'1rem',
          }}>
            {cp.email.title}
          </h2>
          <p style={{ fontFamily:'Inter',fontSize:'1rem',lineHeight:1.75,color:'#94A3B8',marginBottom:'1.5rem' }}>
            {cp.email.desc}
          </p>
          <div style={{
            display:'flex',alignItems:'center',gap:'0.75rem',
            background:'rgba(91,163,217,0.08)',border:'1px solid rgba(91,163,217,0.20)',
            borderRadius:'10px',padding:'0.875rem 1.125rem',
          }}>
            <span style={{ color:'#5BA3D9', fontSize:'1rem' }}>✉</span>
            <a
              href={`mailto:${cp.email.address}`}
              style={{
                fontFamily:'Inter',fontSize:'0.9375rem',fontWeight:600,
                color:'#82C0EE',textDecoration:'none',
              }}
            >
              {cp.email.address}
            </a>
          </div>
        </FadeIn>

        {/* Contact form */}
        <FadeIn delay={150}>
          {sent ? (
            <div style={{
              background:'rgba(30,41,59,0.70)',backdropFilter:'blur(12px)',
              border:'1px solid rgba(91,163,217,0.22)',borderRadius:'16px',
              padding:'3rem',textAlign:'center',
            }}>
              <div style={{ fontSize:'2rem',marginBottom:'1rem' }}>✓</div>
              <h3 style={{ fontFamily:'Inter',fontWeight:700,fontSize:'1.125rem',color:'#82C0EE',marginBottom:'0.5rem' }}>
                Message received.
              </h3>
              <p style={{ fontFamily:'Inter',fontSize:'0.9375rem',color:'#94A3B8' }}>
                We'll respond with care — usually within 1–2 business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              style={{
                background:'rgba(30,41,59,0.70)',backdropFilter:'blur(12px)',
                border:'1px solid rgba(91,163,217,0.16)',borderRadius:'16px',
                padding:'2rem',display:'flex',flexDirection:'column',gap:'1rem',
                boxShadow:'0 4px 15px rgba(0,0,0,0.20), 0 0 12px rgba(91,163,217,0.18)',
              }}
            >
              <div style={{ position:'absolute',top:0,left:'15%',right:'15%',height:'1px',
                background:'linear-gradient(90deg,transparent,rgba(91,163,217,0.30),transparent)',
              }}/>

              <div style={{ display:'flex',flexDirection:'column',gap:'0.375rem' }}>
                <label style={{ fontFamily:'Inter',fontSize:'0.75rem',fontWeight:600,color:'#64748B',letterSpacing:'0.05em' }}>
                  NAME
                </label>
                <input
                  type="text" value={name} onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={e => (e.target as HTMLElement).style.borderColor='rgba(91,163,217,0.40)'}
                  onBlur={e => (e.target as HTMLElement).style.borderColor='rgba(91,163,217,0.15)'}
                  required
                />
              </div>
              <div style={{ display:'flex',flexDirection:'column',gap:'0.375rem' }}>
                <label style={{ fontFamily:'Inter',fontSize:'0.75rem',fontWeight:600,color:'#64748B',letterSpacing:'0.05em' }}>
                  EMAIL
                </label>
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={e => (e.target as HTMLElement).style.borderColor='rgba(91,163,217,0.40)'}
                  onBlur={e => (e.target as HTMLElement).style.borderColor='rgba(91,163,217,0.15)'}
                  required
                />
              </div>
              <div style={{ display:'flex',flexDirection:'column',gap:'0.375rem' }}>
                <label style={{ fontFamily:'Inter',fontSize:'0.75rem',fontWeight:600,color:'#64748B',letterSpacing:'0.05em' }}>
                  MESSAGE
                </label>
                <textarea
                  value={message} onChange={e => setMessage(e.target.value)}
                  placeholder="What's on your mind?"
                  rows={5}
                  style={{ ...inputStyle, resize:'vertical', lineHeight:1.65 }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor='rgba(91,163,217,0.40)'}
                  onBlur={e => (e.target as HTMLElement).style.borderColor='rgba(91,163,217,0.15)'}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  background:'linear-gradient(135deg,#5BA3D9 0%,#3A7FAD 100%)',
                  border:'none',cursor:'pointer',
                  fontFamily:'Inter',fontSize:'0.9375rem',fontWeight:700,
                  color:'#0A0F1E',padding:'0.9375rem',borderRadius:'10px',
                  boxShadow:'0 4px 15px rgba(91,163,217,0.38)',
                  transition:'all 0.2s cubic-bezier(0.4,0,0.2,1)',
                  letterSpacing:'0.01em',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform='translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow='0 6px 22px rgba(91,163,217,0.60), 0 0 14px rgba(91,163,217,0.28)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform='translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow='0 4px 15px rgba(91,163,217,0.38)';
                }}
              >
                Send Message →
              </button>
              <p style={{ fontFamily:'Inter',fontSize:'0.75rem',color:'#475569',textAlign:'center',fontStyle:'italic' }}>
                We never share your information.
              </p>
            </form>
          )}
        </FadeIn>
      </div>
    </SectionWrap>
  );
};

// ── Social ────────────────────────────────────────────────────
const SocialSection: React.FC = () => (
  <div style={{ background:'radial-gradient(ellipse at 50% 50%,rgba(91,163,217,0.04) 0%,transparent 70%)' }}>
    <GlowDivider />
    <SectionWrap id="social">
      <FadeIn>
        <p style={{
          fontFamily:'Inter',fontSize:'0.6875rem',fontWeight:600,
          letterSpacing:'0.18em',textTransform:'uppercase',
          color:'#5BA3D9',marginBottom:'0.875rem',
        }}>
          {cp.social.eyebrow}
        </p>
        <h2 style={{
          fontFamily:'Inter',fontSize:'clamp(1.75rem,3vw,2.25rem)',
          fontWeight:800,lineHeight:1.2,letterSpacing:'-0.025em',
          background:'linear-gradient(135deg,#E2E8F0 0%,#B3D9F5 100%)',
          WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
          backgroundClip:'text',marginBottom:'2.5rem',
        }}>
          {cp.social.title}
        </h2>
      </FadeIn>

      <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
        {cp.social.platforms.map((p, i) => (
          <FadeIn key={i} delay={i * 90}>
            <div style={{
              background:'rgba(30,41,59,0.70)',backdropFilter:'blur(10px)',
              border:'1px solid rgba(91,163,217,0.16)',borderRadius:'14px',
              padding:'1.5rem 2rem',display:'flex',alignItems:'center',gap:'1rem',
              minWidth:'240px',transition:'box-shadow 0.2s cubic-bezier(0.4,0,0.2,1), border-color 0.2s cubic-bezier(0.4,0,0.2,1), transform 0.2s cubic-bezier(0.4,0,0.2,1)',cursor:'pointer',
              boxShadow:'0 4px 15px rgba(0,0,0,0.20), 0 0 12px rgba(91,163,217,0.18)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor='rgba(91,163,217,0.35)';
              (e.currentTarget as HTMLElement).style.transform='translateY(-3px)';
              (e.currentTarget as HTMLElement).style.boxShadow='0 15px 45px rgba(0,0,0,0.55), 0 0 30px rgba(91,163,217,0.50), 0 0 60px rgba(91,163,217,0.20)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor='rgba(91,163,217,0.16)';
              (e.currentTarget as HTMLElement).style.transform='translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow='0 4px 15px rgba(0,0,0,0.20), 0 0 12px rgba(91,163,217,0.18)';
            }}
            >
              <div style={{
                width:'44px',height:'44px',borderRadius:'12px',flexShrink:0,
                background:'rgba(91,163,217,0.12)',border:'1px solid rgba(91,163,217,0.22)',
                display:'flex',alignItems:'center',justifyContent:'center',
                fontSize:'1.25rem',color:'#5BA3D9',
              }}>
                {p.icon}
              </div>
              <div>
                <p style={{ fontFamily:'Inter',fontSize:'0.8125rem',color:'#64748B',marginBottom:'0.2rem' }}>
                  {p.name}
                </p>
                <p style={{ fontFamily:'Inter',fontSize:'0.9375rem',fontWeight:600,color:'#82C0EE' }}>
                  {p.handle}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrap>
    <GlowDivider />
  </div>
);

// ── Support ───────────────────────────────────────────────────
const SupportSection: React.FC = () => (
  <SectionWrap id="support">
    <FadeIn>
      <p style={{
        fontFamily:'Inter',fontSize:'0.6875rem',fontWeight:600,
        letterSpacing:'0.18em',textTransform:'uppercase',
        color:'#5BA3D9',marginBottom:'0.875rem',
      }}>
        {cp.support.eyebrow}
      </p>
      <h2 style={{
        fontFamily:'Inter',fontSize:'clamp(1.75rem,3vw,2.25rem)',
        fontWeight:800,lineHeight:1.2,letterSpacing:'-0.025em',
        background:'linear-gradient(135deg,#E2E8F0 0%,#B3D9F5 60%,#D4A843 100%)',
        WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
        backgroundClip:'text',marginBottom:'2.5rem',
      }}>
        {cp.support.title}
      </h2>
    </FadeIn>

    <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'1.25rem' }}>
      {cp.support.options.map((opt, i) => (
        <FadeIn key={i} delay={i * 100}>
          <div style={{
            background:'rgba(30,41,59,0.70)',backdropFilter:'blur(10px)',
            border:'1px solid rgba(91,163,217,0.14)',borderRadius:'16px',
            padding:'2rem',display:'flex',flexDirection:'column',gap:'0.875rem',
            boxShadow:'0 4px 15px rgba(0,0,0,0.20), 0 0 12px rgba(91,163,217,0.18)',
            transition:'box-shadow 0.2s cubic-bezier(0.4,0,0.2,1), border-color 0.2s cubic-bezier(0.4,0,0.2,1), transform 0.2s cubic-bezier(0.4,0,0.2,1)',height:'100%',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform='translateY(-4px)';
            (e.currentTarget as HTMLElement).style.borderColor='rgba(91,163,217,0.35)';
            (e.currentTarget as HTMLElement).style.boxShadow='0 15px 45px rgba(0,0,0,0.55), 0 0 30px rgba(91,163,217,0.50), 0 0 60px rgba(91,163,217,0.20)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform='translateY(0)';
            (e.currentTarget as HTMLElement).style.borderColor='rgba(91,163,217,0.14)';
            (e.currentTarget as HTMLElement).style.boxShadow='0 4px 15px rgba(0,0,0,0.20), 0 0 12px rgba(91,163,217,0.18)';
          }}
          >
            <h3 style={{ fontFamily:'Inter',fontSize:'1.0625rem',fontWeight:700,color:'#82C0EE' }}>
              {opt.title}
            </h3>
            <p style={{ fontFamily:'Inter',fontSize:'0.9rem',lineHeight:1.7,color:'#94A3B8',flex:1 }}>
              {opt.desc}
            </p>
            <button
              style={{
                background:'rgba(91,163,217,0.10)',border:'1px solid rgba(91,163,217,0.25)',
                borderRadius:'10px',padding:'0.6875rem 1.25rem',
                fontFamily:'Inter',fontSize:'0.875rem',fontWeight:600,
                color:'#82C0EE',cursor:'pointer',transition:'all 0.2s cubic-bezier(0.4,0,0.2,1)',
                alignSelf:'flex-start',
                boxShadow:'0 0 0 1px rgba(91,163,217,0.20), 0 4px 12px rgba(91,163,217,0.14)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background='rgba(91,163,217,0.20)';
                (e.currentTarget as HTMLElement).style.borderColor='rgba(91,163,217,0.35)';
                (e.currentTarget as HTMLElement).style.boxShadow='0 0 15px rgba(91,163,217,0.50), inset 0 0 10px rgba(91,163,217,0.12)';
                (e.currentTarget as HTMLElement).style.transform='translateY(-1px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background='rgba(91,163,217,0.10)';
                (e.currentTarget as HTMLElement).style.borderColor='rgba(91,163,217,0.25)';
                (e.currentTarget as HTMLElement).style.boxShadow='0 0 0 1px rgba(91,163,217,0.20), 0 4px 12px rgba(91,163,217,0.14)';
                (e.currentTarget as HTMLElement).style.transform='translateY(0)';
              }}
            >
              {opt.cta} →
            </button>
          </div>
        </FadeIn>
      ))}
    </div>
  </SectionWrap>
);

// ────────────────────────────────────────────────────────────────
// PAGE
// ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact — KnowingPath.ai</title>
        <meta name="description" content="Reach out by email, find us on social, or get support — we're here with you." />
      </Head>
      <Layout>
        {/* Hero */}
        <section style={{
          padding:'clamp(7rem,12vw,9rem) clamp(1.5rem,5vw,2rem) clamp(3rem,5vw,4rem)',
          maxWidth:'1000px',margin:'0 auto',
        }}>
          <p style={{
            fontFamily:'Inter',fontSize:'0.6875rem',fontWeight:600,
            letterSpacing:'0.18em',textTransform:'uppercase',
            color:'#5BA3D9',marginBottom:'1rem',
          }}>
            We're here with you
          </p>
          <h1 style={{
            fontFamily:'Inter',fontSize:'clamp(2.25rem,5vw,3.5rem)',
            fontWeight:800,lineHeight:1.1,letterSpacing:'-0.03em',
            background:'linear-gradient(135deg,#E2E8F0 0%,#B3D9F5 55%,#D4A843 100%)',
            WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
            backgroundClip:'text',marginBottom:'1.25rem',
          }}>
            {cp.title}
          </h1>
          <p style={{
            fontFamily:'Inter',fontSize:'1.0625rem',lineHeight:1.75,
            color:'#94A3B8',maxWidth:'500px',marginBottom:'2rem',
          }}>
            {cp.subtitle}
          </p>
          {/* Anchor nav */}
          <div style={{ display:'flex',gap:'0.75rem',flexWrap:'wrap' }}>
            {(['email','social','support'] as const).map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });
                }}
                style={{
                  fontFamily:'Inter',fontSize:'0.8125rem',fontWeight:600,
                  color:'#82C0EE',background:'rgba(91,163,217,0.08)',
                  border:'1px solid rgba(91,163,217,0.20)',borderRadius:'8px',
                  padding:'0.5rem 1rem',textDecoration:'none',textTransform:'capitalize',
                  transition:'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background='rgba(91,163,217,0.15)';
                  (e.currentTarget as HTMLElement).style.borderColor='rgba(91,163,217,0.35)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background='rgba(91,163,217,0.08)';
                  (e.currentTarget as HTMLElement).style.borderColor='rgba(91,163,217,0.20)';
                }}
              >
                {id}
              </a>
            ))}
          </div>
        </section>

        <EmailSection />
        <SocialSection />
        <SupportSection />
      </Layout>
    </>
  );
}
