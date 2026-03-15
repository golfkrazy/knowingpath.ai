// ============================================================
// KnowingPath.ai — /about
// Site map: Your Story | Your Philosophy | Your Ethos
// ============================================================

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { CONTENT } from '../../shared/utils/sharedLogic';

const ap = CONTENT.aboutPage;

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
      transform:  visible ? 'translateY(0)' : 'translateY(24px)',
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

const Eyebrow: React.FC<{ text: string; gold?: boolean }> = ({ text, gold }) => (
  <p style={{
    fontFamily:'Inter',fontSize:'0.6875rem',fontWeight:600,letterSpacing:'0.18em',
    textTransform:'uppercase',color:gold?'#D4A843':'#5BA3D9',marginBottom:'0.875rem',
  }}>
    {text}
  </p>
);

const GlowDivider: React.FC<{ gold?: boolean }> = ({ gold }) => (
  <div style={{
    height:'1px',
    background:gold
      ?'linear-gradient(90deg,transparent,rgba(212,168,67,0.40),transparent)'
      :'linear-gradient(90deg,transparent,rgba(91,163,217,0.35),transparent)',
  }}/>
);

// ── Story ─────────────────────────────────────────────────────
const StorySection: React.FC = () => (
  <SectionWrap id="story">
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
      <FadeIn>
        <Eyebrow text={ap.story.eyebrow} />
        <h2 style={{
          fontFamily:'Inter',fontSize:'clamp(1.875rem,3.5vw,2.75rem)',
          fontWeight:800,lineHeight:1.2,letterSpacing:'-0.025em',
          background:'linear-gradient(135deg,#E2E8F0 0%,#B3D9F5 100%)',
          WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
          backgroundClip:'text',marginBottom:'2rem',
        }}>
          {ap.story.title}
        </h2>
        {ap.story.body.map((para, i) => (
          <p key={i} style={{
            fontFamily:'Inter',fontSize:'1.0625rem',lineHeight:1.8,
            color: i === 3 ? '#82C0EE' : '#94A3B8',
            fontWeight: i === 3 ? 500 : 400,
            marginBottom: i < ap.story.body.length - 1 ? '1.25rem' : 0,
          }}>
            {para}
          </p>
        ))}
      </FadeIn>

      {/* Visual: ascending path */}
      <FadeIn delay={180}>
        <div style={{
          background:'rgba(30,41,59,0.70)',backdropFilter:'blur(12px)',
          border:'1px solid rgba(91,163,217,0.18)',borderRadius:'20px',
          padding:'2.5rem',boxShadow:'0 4px 15px rgba(0,0,0,0.20), 0 0 12px rgba(91,163,217,0.18)',
        }}>
          {/* Quote blocks */}
          {[
            { q: '"I don\'t know where to start."', label: 'Before', color: '#64748B' },
            { q: '"I\'m beginning to understand."', label: 'During', color: '#5BA3D9' },
            { q: '"I feel confident and safe."',   label: 'After',  color: '#D4A843' },
          ].map((item, i) => (
            <div key={i} style={{ position:'relative', marginBottom: i < 2 ? '1rem' : 0 }}>
              {i < 2 && (
                <div style={{
                  position:'absolute',left:'1.75rem',bottom:'-1rem',
                  width:'2px',height:'1rem',
                  background:'linear-gradient(180deg,rgba(91,163,217,0.50),rgba(91,163,217,0.10))',
                }}/>
              )}
              <div style={{
                display:'flex',alignItems:'center',gap:'1rem',
                background:'rgba(15,23,41,0.60)',border:`1px solid ${item.color}30`,
                borderRadius:'12px',padding:'1rem 1.25rem',
              }}>
                <div style={{
                  width:'36px',height:'36px',borderRadius:'50%',flexShrink:0,
                  background:`${item.color}18`,border:`1px solid ${item.color}35`,
                  display:'flex',alignItems:'center',justifyContent:'center',
                }}>
                  <span style={{ fontSize:'0.625rem',fontWeight:700,color:item.color,fontFamily:'Inter',letterSpacing:'0.05em' }}>
                    {item.label.slice(0,3).toUpperCase()}
                  </span>
                </div>
                <p style={{ fontFamily:'Inter',fontSize:'0.9375rem',color:item.color,fontStyle:'italic',fontWeight:500 }}>
                  {item.q}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </SectionWrap>
);

// ── Philosophy ────────────────────────────────────────────────
const PhilosophySection: React.FC = () => (
  <div style={{ background:'radial-gradient(ellipse at 40% 50%,rgba(91,163,217,0.04) 0%,transparent 70%)' }}>
    <GlowDivider />
    <SectionWrap id="philosophy">
      <FadeIn>
        <Eyebrow text={ap.philosophy.eyebrow} />
        <h2 style={{
          fontFamily:'Inter',fontSize:'clamp(1.875rem,3.5vw,2.75rem)',
          fontWeight:800,lineHeight:1.2,letterSpacing:'-0.025em',
          background:'linear-gradient(135deg,#E2E8F0 0%,#B3D9F5 60%,#D4A843 100%)',
          WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
          backgroundClip:'text',marginBottom:'3rem',
        }}>
          {ap.philosophy.title}
        </h2>
      </FadeIn>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))', gap:'1.25rem' }}>
        {ap.philosophy.pillars.map((pillar, i) => (
          <FadeIn key={i} delay={i * 90}>
            <div style={{
              background:'rgba(30,41,59,0.70)',backdropFilter:'blur(10px)',
              border:`1px solid ${i%2===0?'rgba(91,163,217,0.16)':'rgba(212,168,67,0.14)'}`,
              borderRadius:'14px',padding:'1.625rem',
              boxShadow:'0 4px 15px rgba(0,0,0,0.20), 0 0 12px rgba(91,163,217,0.18)',
              position:'relative',overflow:'hidden',
              transition:'box-shadow 0.2s cubic-bezier(0.4,0,0.2,1), border-color 0.2s cubic-bezier(0.4,0,0.2,1), transform 0.2s cubic-bezier(0.4,0,0.2,1)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform='translateY(-3px)';
              (e.currentTarget as HTMLElement).style.boxShadow='0 15px 45px rgba(0,0,0,0.55), 0 0 30px rgba(91,163,217,0.50), 0 0 60px rgba(91,163,217,0.20)';
              (e.currentTarget as HTMLElement).style.borderColor='rgba(91,163,217,0.35)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform='translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow='0 4px 15px rgba(0,0,0,0.20), 0 0 12px rgba(91,163,217,0.18)';
              (e.currentTarget as HTMLElement).style.borderColor='';
            }}
            >
              <div style={{
                position:'absolute',top:0,left:'10%',right:'10%',height:'1px',
                background:i%2===0
                  ?'linear-gradient(90deg,transparent,rgba(91,163,217,0.35),transparent)'
                  :'linear-gradient(90deg,transparent,rgba(212,168,67,0.30),transparent)',
              }}/>
              <div style={{
                width:'8px',height:'8px',borderRadius:'50%',
                background:i%2===0?'#5BA3D9':'#D4A843',
                marginBottom:'1rem',
                boxShadow:i%2===0?'0 0 10px rgba(91,163,217,0.60)':'0 0 10px rgba(212,168,67,0.60)',
              }}/>
              <h3 style={{
                fontFamily:'Inter',fontSize:'1rem',fontWeight:700,
                color:i%2===0?'#82C0EE':'#D4A843',marginBottom:'0.5rem',
              }}>
                {pillar.title}
              </h3>
              <p style={{ fontFamily:'Inter',fontSize:'0.9rem',lineHeight:1.7,color:'#94A3B8' }}>
                {pillar.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrap>
    <GlowDivider gold />
  </div>
);

// ── Ethos ─────────────────────────────────────────────────────
const EthosSection: React.FC = () => (
  <SectionWrap id="ethos">
    <FadeIn>
      <div style={{
        background:'rgba(30,41,59,0.70)',backdropFilter:'blur(12px)',
        border:'1px solid rgba(212,168,67,0.20)',borderRadius:'20px',
        padding:'clamp(2.5rem,5vw,4rem)',
        boxShadow:'0 4px 15px rgba(0,0,0,0.20), 0 0 24px rgba(212,168,67,0.18)',
        position:'relative',overflow:'hidden',textAlign:'center',
      }}>
        <div style={{
          position:'absolute',top:0,left:'15%',right:'15%',height:'1px',
          background:'linear-gradient(90deg,transparent,rgba(212,168,67,0.45),rgba(91,163,217,0.25),transparent)',
        }}/>
        <div style={{
          position:'absolute',top:'-30%',left:'50%',transform:'translateX(-50%)',
          width:'400px',height:'250px',
          background:'radial-gradient(circle,rgba(212,168,67,0.08) 0%,transparent 70%)',
          pointerEvents:'none',
        }}/>

        <div style={{ position:'relative', zIndex:1 }}>
          <div style={{
            display:'inline-block',
            background:'rgba(212,168,67,0.10)',border:'1px solid rgba(212,168,67,0.25)',
            borderRadius:'100px',padding:'0.375rem 1rem',marginBottom:'1.75rem',
          }}>
            <span style={{
              fontFamily:'Inter',fontSize:'0.6875rem',fontWeight:600,
              letterSpacing:'0.15em',color:'#D4A843',textTransform:'uppercase',
            }}>
              {ap.ethos.eyebrow}
            </span>
          </div>

          <h2 style={{
            fontFamily:'Inter',fontSize:'clamp(1.75rem,3.5vw,2.75rem)',
            fontWeight:800,lineHeight:1.2,letterSpacing:'-0.025em',
            background:'linear-gradient(135deg,#E8C56A 0%,#D4A843 55%,#A87E28 100%)',
            WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
            backgroundClip:'text',marginBottom:'1.5rem',
          }}>
            {ap.ethos.title}
          </h2>

          <p style={{
            fontFamily:'Inter',fontSize:'1.0625rem',lineHeight:1.8,
            color:'#94A3B8',maxWidth:'580px',margin:'0 auto 2rem',
          }}>
            {ap.ethos.body}
          </p>

          <div style={{
            display:'inline-block',
            background:'rgba(212,168,67,0.08)',border:'1px solid rgba(212,168,67,0.20)',
            borderRadius:'14px',padding:'1.25rem 2rem',
          }}>
            <p style={{
              fontFamily:'Inter',fontSize:'1.0625rem',
              color:'#D4A843',fontStyle:'italic',fontWeight:500,
            }}>
              {ap.ethos.quote}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  </SectionWrap>
);

// ────────────────────────────────────────────────────────────────
// PAGE
// ────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — KnowingPath.ai</title>
        <meta name="description" content="The story, philosophy, and ethos behind KnowingPath.ai — built for everyone who deserves to understand the digital world." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <style>{`
        @media(max-width:768px){
          section>div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}
        }
      `}</style>
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
            Who we are
          </p>
          <h1 style={{
            fontFamily:'Inter',fontSize:'clamp(2.25rem,5vw,3.5rem)',
            fontWeight:800,lineHeight:1.1,letterSpacing:'-0.03em',
            background:'linear-gradient(135deg,#E2E8F0 0%,#B3D9F5 55%,#D4A843 100%)',
            WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
            backgroundClip:'text',marginBottom:'1.25rem',
          }}>
            {ap.title}
          </h1>
          <p style={{
            fontFamily:'Inter',fontSize:'1.0625rem',lineHeight:1.75,
            color:'#94A3B8',maxWidth:'520px',marginBottom:'2rem',
          }}>
            {ap.subtitle}
          </p>
          {/* Section anchors */}
          <div style={{ display:'flex',gap:'0.75rem',flexWrap:'wrap' }}>
            {(['story','philosophy','ethos'] as const).map((id) => (
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
                  padding:'0.5rem 1rem',textDecoration:'none',
                  textTransform:'capitalize',transition:'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(91,163,217,0.15)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(91,163,217,0.35)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(91,163,217,0.08)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(91,163,217,0.20)';
                }}
              >
                {id === 'story' ? 'Your Story' : id === 'philosophy' ? 'Philosophy' : 'Ethos'}
              </a>
            ))}
          </div>
        </section>

        <StorySection />
        <PhilosophySection />
        <EthosSection />
      </Layout>
    </>
  );
}
