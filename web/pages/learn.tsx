// ============================================================
// KnowingPath.ai — /learn
// Site map: Courses | Guides | Tools
// ============================================================

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { CONTENT } from '../../shared/utils/sharedLogic';

const lp = CONTENT.learnPage;

// ── Fade-in hook ─────────────────────────────────────────────
function useFadeIn(threshold = 0.10) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } },
      { threshold }
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

// ── Shared section wrapper ────────────────────────────────────
const SectionWrap: React.FC<{ id: string; children: React.ReactNode }> = ({ id, children }) => (
  <section
    id={id}
    style={{
      padding:   'clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,2rem)',
      maxWidth:  '1100px',
      margin:    '0 auto',
    }}
  >
    {children}
  </section>
);

const Eyebrow: React.FC<{ text: string; gold?: boolean }> = ({ text, gold }) => (
  <p style={{
    fontFamily:    "'Inter', sans-serif",
    fontSize:      '0.6875rem',
    fontWeight:    600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color:         gold ? '#D4A843' : '#5BA3D9',
    marginBottom:  '0.875rem',
    margin:        '0 0 0.875rem 0',
  }}>
    {text}
  </p>
);

const SectionTitle: React.FC<{ children: React.ReactNode; gold?: boolean }> = ({ children, gold }) => (
  <h2 style={{
    fontFamily:   "'Inter', sans-serif",
    fontSize:     'clamp(1.75rem, 3vw, 2.5rem)',
    fontWeight:   800,
    lineHeight:   1.2,
    letterSpacing:'-0.025em',
    background:   gold
      ? 'linear-gradient(135deg, #E8C56A 0%, #D4A843 100%)'
      : 'linear-gradient(135deg, #E2E8F0 0%, #B3D9F5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor:  'transparent',
    backgroundClip: 'text',
    marginBottom: '2.5rem',
    margin:       '0 0 2.5rem 0',
  }}>
    {children}
  </h2>
);

const GlowDivider: React.FC<{ gold?: boolean }> = ({ gold }) => (
  <div style={{
    height:     '1px',
    background: gold
      ? 'linear-gradient(90deg, transparent, rgba(212,168,67,0.40), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(91,163,217,0.35), transparent)',
  }} />
);

// ────────────────────────────────────────────────────────────────
// COURSES SECTION
// ────────────────────────────────────────────────────────────────
const CoursesSection: React.FC = () => (
  <SectionWrap id="courses">
    <FadeIn>
      <Eyebrow text={lp.courses.eyebrow} />
      <SectionTitle>{lp.courses.title}</SectionTitle>
    </FadeIn>
    <div style={{
      display:             'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap:                 '1.25rem',
    }}>
      {lp.courses.items.map((course, i) => (
        <FadeIn key={course.id} delay={i * 100}>
          <div
            style={{
              background:     'rgba(30,41,59,0.72)',
              backdropFilter: 'blur(12px)',
              border:         '1px solid rgba(91,163,217,0.16)',
              borderRadius:   '16px',
              padding:        '1.75rem',
              boxShadow:      '0 4px 15px rgba(0,0,0,0.20), 0 0 12px rgba(91,163,217,0.18)',
              position:       'relative',
              overflow:       'hidden',
              transition:     'box-shadow 0.2s cubic-bezier(0.4,0,0.2,1), border-color 0.2s cubic-bezier(0.4,0,0.2,1), transform 0.2s cubic-bezier(0.4,0,0.2,1)',
              cursor:         'pointer',
              display:        'flex',
              flexDirection:  'column',
              gap:            '0.875rem',
              height:         '100%',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(91,163,217,0.35)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 15px 45px rgba(0,0,0,0.55), 0 0 30px rgba(91,163,217,0.50), 0 0 60px rgba(91,163,217,0.20)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(91,163,217,0.16)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 15px rgba(0,0,0,0.20), 0 0 12px rgba(91,163,217,0.18)';
            }}
          >
            {/* Top edge */}
            <div style={{
              position:   'absolute', top: 0, left: '10%', right: '10%', height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(91,163,217,0.35), transparent)',
            }} />

            {/* Icon */}
            <div style={{
              width:          '44px', height: '44px', borderRadius: '12px',
              background:     'rgba(91,163,217,0.12)',
              border:         '1px solid rgba(91,163,217,0.22)',
              display:        'flex', alignItems: 'center', justifyContent: 'center',
              fontSize:       '1.25rem', color: '#5BA3D9',
            }}>
              {course.icon}
            </div>

            <div>
              <h3 style={{
                fontFamily: "'Inter', sans-serif", fontSize: '1.0625rem',
                fontWeight: 700, color: '#E2E8F0', lineHeight: 1.3, marginBottom: '0.5rem',
              }}>
                {course.title}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: '0.9rem',
                lineHeight: 1.65, color: '#94A3B8',
              }}>
                {course.desc}
              </p>
            </div>

            {/* Footer meta */}
            <div style={{
              display: 'flex', gap: '0.75rem', marginTop: 'auto', paddingTop: '0.5rem',
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              <span style={{
                fontFamily:    "'Inter', sans-serif", fontSize: '0.75rem',
                color:         '#5BA3D9', fontWeight: 600,
                background:    'rgba(91,163,217,0.10)',
                border:        '1px solid rgba(91,163,217,0.20)',
                borderRadius:  '100px', padding: '0.25rem 0.75rem',
              }}>
                {course.level}
              </span>
              <span style={{
                fontFamily:    "'Inter', sans-serif", fontSize: '0.75rem',
                color:         '#64748B', display: 'flex', alignItems: 'center', gap: '0.25rem',
              }}>
                {course.lessons} lessons
              </span>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </SectionWrap>
);

// ────────────────────────────────────────────────────────────────
// GUIDES SECTION
// ────────────────────────────────────────────────────────────────
const GuidesSection: React.FC = () => (
  <div style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(91,163,217,0.04) 0%, transparent 70%)' }}>
    <GlowDivider />
    <SectionWrap id="guides">
      <FadeIn>
        <Eyebrow text={lp.guides.eyebrow} />
        <SectionTitle>{lp.guides.title}</SectionTitle>
      </FadeIn>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
        {lp.guides.items.map((guide, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div
              style={{
                background:     'rgba(30,41,59,0.65)',
                backdropFilter: 'blur(8px)',
                border:         '1px solid rgba(255,255,255,0.07)',
                borderRadius:   '14px',
                padding:        '1.375rem 1.5rem',
                display:        'grid',
                gridTemplateColumns: '1fr auto',
                gap:            '1rem',
                alignItems:     'center',
                transition:     'all 0.2s cubic-bezier(0.4,0,0.2,1)',
                cursor:         'pointer',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(91,163,217,0.35)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(30,41,59,0.80)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 15px 45px rgba(0,0,0,0.55), 0 0 30px rgba(91,163,217,0.50), 0 0 60px rgba(91,163,217,0.20)';
                (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(30,41,59,0.65)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
              }}
            >
              <div>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif", fontSize: '1rem',
                  fontWeight: 600, color: '#CBD5E1', marginBottom: '0.375rem',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}>
                  <span style={{ color: '#5BA3D9', fontSize: '0.875rem' }}>{guide.icon}</span>
                  {guide.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: '0.875rem',
                  lineHeight: 1.6, color: '#64748B',
                }}>
                  {guide.desc}
                </p>
              </div>
              <span style={{
                fontFamily:   "'Inter', sans-serif",
                fontSize:     '0.75rem',
                color:        '#475569',
                whiteSpace:   'nowrap',
                fontStyle:    'italic',
                flexShrink:   0,
              }}>
                {guide.time}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrap>
    <GlowDivider />
  </div>
);

// ────────────────────────────────────────────────────────────────
// TOOLS SECTION
// ────────────────────────────────────────────────────────────────
const ToolsSection: React.FC = () => (
  <SectionWrap id="tools">
    <FadeIn>
      <Eyebrow text={lp.tools.eyebrow} gold />
      <SectionTitle gold>{lp.tools.title}</SectionTitle>
    </FadeIn>
    <div style={{
      display:             'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap:                 '1rem',
    }}>
      {lp.tools.items.map((tool, i) => (
        <FadeIn key={i} delay={i * 80}>
          <div style={{
            background:     'rgba(30,41,59,0.70)',
            backdropFilter: 'blur(10px)',
            border:         '1px solid rgba(212,168,67,0.16)',
            borderRadius:   '14px',
            padding:        '1.5rem',
            position:       'relative',
            overflow:       'hidden',
            transition:     'box-shadow 0.2s cubic-bezier(0.4,0,0.2,1), border-color 0.2s cubic-bezier(0.4,0,0.2,1), transform 0.2s cubic-bezier(0.4,0,0.2,1)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,168,67,0.35)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 15px 45px rgba(0,0,0,0.55), 0 0 30px rgba(212,168,67,0.35), 0 0 60px rgba(212,168,67,0.15)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,168,67,0.16)';
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
          >
            <div style={{
              position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.35), transparent)',
            }} />
            <h3 style={{
              fontFamily: "'Inter', sans-serif", fontSize: '1rem',
              fontWeight: 700, color: '#D4A843', marginBottom: '0.5rem',
            }}>
              {tool.name}
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: '0.875rem',
              lineHeight: 1.65, color: '#94A3B8', marginBottom: '0.875rem',
            }}>
              {tool.desc}
            </p>
            <span style={{
              fontFamily:   "'Inter', sans-serif", fontSize: '0.7rem',
              fontWeight:   600, color: '#A87E28',
              background:   'rgba(212,168,67,0.10)',
              border:       '1px solid rgba(212,168,67,0.22)',
              borderRadius: '100px', padding: '0.25rem 0.75rem',
              letterSpacing:'0.03em',
            }}>
              {tool.tag}
            </span>
          </div>
        </FadeIn>
      ))}
    </div>
  </SectionWrap>
);

// ────────────────────────────────────────────────────────────────
// PAGE EXPORT
// ────────────────────────────────────────────────────────────────
export default function LearnPage() {
  return (
    <>
      <Head>
        <title>Learn — KnowingPath.ai</title>
        <meta name="description" content="Courses, guides, and tools for AI literacy, cybersecurity basics, and digital self-protection." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        {/* Page hero */}
        <section style={{
          padding:   'clamp(7rem,12vw,9rem) clamp(1.5rem,5vw,2rem) clamp(3rem,5vw,4rem)',
          maxWidth:  '1100px',
          margin:    '0 auto',
        }}>
          <p style={{
            fontFamily:'Inter',fontSize:'0.6875rem',fontWeight:600,
            letterSpacing:'0.18em',textTransform:'uppercase',
            color:'#5BA3D9',marginBottom:'1rem',
          }}>
            Knowledge is the path
          </p>
          <h1 style={{
            fontFamily:'Inter',fontSize:'clamp(2.25rem,5vw,3.5rem)',
            fontWeight:800,lineHeight:1.1,letterSpacing:'-0.03em',
            background:'linear-gradient(135deg,#E2E8F0 0%,#B3D9F5 55%,#D4A843 100%)',
            WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
            backgroundClip:'text',marginBottom:'1.25rem',
          }}>
            {lp.title}
          </h1>
          <p style={{
            fontFamily:'Inter',fontSize:'1.0625rem',lineHeight:1.75,
            color:'#94A3B8',maxWidth:'560px',
          }}>
            {lp.subtitle}
          </p>

          {/* In-page anchor nav */}
          <div style={{ display:'flex', gap:'0.75rem', marginTop:'2rem', flexWrap:'wrap' }}>
            {(['courses','guides','tools'] as const).map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });
                }}
                style={{
                  fontFamily:   "'Inter', sans-serif",
                  fontSize:     '0.8125rem',
                  fontWeight:   600,
                  color:        '#82C0EE',
                  background:   'rgba(91,163,217,0.08)',
                  border:       '1px solid rgba(91,163,217,0.20)',
                  borderRadius: '8px',
                  padding:      '0.5rem 1rem',
                  textDecoration:'none',
                  textTransform:'capitalize',
                  transition:   'all 0.2s ease',
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
                {id}
              </a>
            ))}
          </div>
        </section>

        <CoursesSection />
        <GuidesSection />
        <ToolsSection />
      </Layout>
    </>
  );
}
