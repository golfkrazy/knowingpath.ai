// ============================================================
// KnowingPath.ai — Landing Page (index.tsx)
// All sections with anchor navigation
// Ascending Bridge ethos | SSV Glassmorphism design system
// ============================================================

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { CONTENT } from '../../shared/utils/sharedLogic';

// ── Fade-in observer hook ─────────────────────────────────────
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

// ── Fade wrapper ──────────────────────────────────────────────
const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0,
}) => {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Page-specific styles (non-global, safe for SSR)
const PageStyles = () => (
  <style>{`
    .ethos-card:hover .ethos-icon { transform: scale(1.1) rotate(-3deg); }
    .learn-item:hover {
      border-color: rgba(91,163,217,0.35) !important;
      background: rgba(91,163,217,0.08) !important;
    }
  `}</style>
);

// ── Section wrapper ───────────────────────────────────────────
const Section: React.FC<{
  id:         string;
  children:   React.ReactNode;
  alternate?: boolean;
  centered?:  boolean;
}> = ({ id, children, alternate = false, centered = false }) => (
  <section
    id={id}
    style={{
      padding:   'clamp(5rem, 10vw, 7rem) clamp(1.5rem, 5vw, 2rem)',
      maxWidth:  '1200px',
      margin:    '0 auto',
      position:  'relative',
      textAlign: centered ? 'center' : 'left',
    }}
  >
    {alternate && (
      <div style={{
        position:   'absolute',
        inset:      '-2px',
        background: 'radial-gradient(ellipse at 60% 50%, rgba(91,163,217,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex:     0,
      }} />
    )}
    <div style={{ position: 'relative', zIndex: 1 }}>
      {children}
    </div>
  </section>
);

// ── Eyebrow tag ───────────────────────────────────────────────
const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p style={{
    fontFamily:    "'Inter', sans-serif",
    fontSize:      '0.6875rem',
    fontWeight:    600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color:         '#5BA3D9',
    marginBottom:  '1rem',
  }}>
    {children}
  </p>
);

// ── Gradient divider ──────────────────────────────────────────
const GlowDivider: React.FC<{ gold?: boolean }> = ({ gold }) => (
  <div style={{
    width:      '100%',
    height:     '1px',
    background: gold
      ? 'linear-gradient(90deg, transparent, rgba(212,168,67,0.45), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(91,163,217,0.40), transparent)',
    margin:     '0',
  }} />
);

// ────────────────────────────────────────────────────────────────
// SECTIONS
// ────────────────────────────────────────────────────────────────

// ── HERO ─────────────────────────────────────────────────────
const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section
      id="home"
      style={{
        minHeight:      '100vh',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        padding:        'clamp(7rem, 12vw, 10rem) clamp(1.5rem, 6vw, 4rem) clamp(5rem, 8vw, 7rem)',
        maxWidth:       '1200px',
        margin:         '0 auto',
        position:       'relative',
      }}
    >
      {/* Background ambient glow */}
      <div style={{
        position:   'absolute',
        top:        '20%',
        left:       '-10%',
        width:      '600px',
        height:     '600px',
        background: 'radial-gradient(circle, rgba(91,163,217,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex:     0,
      }} />
      <div style={{
        position:   'absolute',
        bottom:     '15%',
        right:      '-5%',
        width:      '400px',
        height:     '400px',
        background: 'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex:     0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px' }}>
        {/* Eyebrow */}
        <div style={{
          opacity:    loaded ? 1 : 0,
          transform:  loaded ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1) 200ms',
        }}>
          <div style={{
            display:     'inline-flex',
            alignItems:  'center',
            gap:         '0.5rem',
            background:  'rgba(91,163,217,0.10)',
            border:      '1px solid rgba(91,163,217,0.25)',
            borderRadius:'100px',
            padding:     '0.375rem 1rem',
            marginBottom:'2rem',
          }}>
            <span style={{ color: '#5BA3D9', fontSize: '0.5rem' }}>◆</span>
            <span style={{
              fontFamily:    "'Inter', sans-serif",
              fontSize:      '0.6875rem',
              fontWeight:    600,
              letterSpacing: '0.15em',
              color:         '#82C0EE',
              textTransform: 'uppercase',
            }}>
              The Ascending Bridge
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div style={{
          opacity:    loaded ? 1 : 0,
          transform:  loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.9s cubic-bezier(0.22,1,0.36,1) 350ms',
        }}>
          <h1 style={{
            fontFamily:   "'Inter', sans-serif",
            fontSize:     'clamp(2.25rem, 5.5vw, 4rem)',
            fontWeight:   800,
            lineHeight:   1.1,
            letterSpacing:'-0.03em',
            marginBottom: '1.75rem',
            background:   'linear-gradient(140deg, #E2E8F0 0%, #B3D9F5 55%, #D4A843 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor:  'transparent',
            backgroundClip: 'text',
          }}>
            {CONTENT.hero.headline}
          </h1>
        </div>

        {/* Sub-headline */}
        <div style={{
          opacity:    loaded ? 1 : 0,
          transform:  loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.9s cubic-bezier(0.22,1,0.36,1) 500ms',
        }}>
          <div style={{ marginBottom: '2.5rem' }}>
            {CONTENT.hero.subheadline.map((line, i) => (
              <p key={i} style={{
                fontFamily:  "'Inter', sans-serif",
                fontSize:    'clamp(1rem, 2vw, 1.2rem)',
                lineHeight:  1.7,
                color:       i === 2 ? '#E2E8F0' : '#94A3B8',
                fontWeight:  i === 2 ? 600 : 400,
                margin:      i === 2 ? '0.75rem 0 0' : '0',
              }}>
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div style={{
          display:    'flex',
          gap:        '1rem',
          flexWrap:   'wrap',
          opacity:    loaded ? 1 : 0,
          transform:  loaded ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.9s cubic-bezier(0.22,1,0.36,1) 650ms',
        }}>
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              display:     'inline-flex',
              alignItems:  'center',
              gap:         '0.5rem',
              background:  'linear-gradient(135deg, #5BA3D9 0%, #3A7FAD 100%)',
              color:       '#0A0F1E',
              fontFamily:  "'Inter', sans-serif",
              fontSize:    '1rem',
              fontWeight:  700,
              padding:     '0.9375rem 2.5rem',
              borderRadius:'12px',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              boxShadow:   '0 4px 15px rgba(91,163,217,0.38)',
              transition:  'all 0.2s cubic-bezier(0.4,0,0.2,1)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 22px rgba(91,163,217,0.60), 0 0 14px rgba(91,163,217,0.28)';
              (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #82C0EE 0%, #5BA3D9 100%)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 15px rgba(91,163,217,0.38)';
              (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #5BA3D9 0%, #3A7FAD 100%)';
            }}
          >
            {CONTENT.hero.cta} <span>→</span>
          </a>
          <a
            href="#mission"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              display:     'inline-flex',
              alignItems:  'center',
              background:  'rgba(91,163,217,0.08)',
              border:      '1px solid rgba(91,163,217,0.25)',
              color:       '#82C0EE',
              fontFamily:  "'Inter', sans-serif",
              fontSize:    '1rem',
              fontWeight:  600,
              padding:     '0.9375rem 2rem',
              borderRadius:'12px',
              textDecoration: 'none',
              transition:  'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(91,163,217,0.15)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(91,163,217,0.45)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(91,163,217,0.08)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(91,163,217,0.25)';
            }}
          >
            Learn more
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{
          marginTop:  '4rem',
          opacity:    loaded ? 0.45 : 0,
          transition: 'opacity 0.9s ease 1200ms',
          display:    'flex',
          alignItems: 'center',
          gap:        '0.5rem',
        }}>
          <div style={{
            width:      '1px',
            height:     '40px',
            background: 'linear-gradient(180deg, rgba(91,163,217,0.60) 0%, transparent 100%)',
            animation:  'scrollHint 2s ease-in-out infinite',
          }} />
          <span style={{ fontFamily:"'Inter'", fontSize:'0.6875rem', color:'#475569', letterSpacing:'0.10em', textTransform:'uppercase' }}>
            Scroll to explore
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scrollHint {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 0.9; transform: scaleY(1.15); }
        }
      `}</style>
    </section>
  );
};

// ── MISSION ───────────────────────────────────────────────────
const MissionSection: React.FC = () => (
  <div style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(91,163,217,0.04) 0%, transparent 70%)' }}>
    <GlowDivider />
    <Section id="mission">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <FadeIn>
          <Eyebrow>Our Mission</Eyebrow>
          <h2 style={{
            fontFamily:   "'Inter', sans-serif",
            fontSize:     'clamp(1.875rem, 3.5vw, 2.75rem)',
            fontWeight:   800,
            lineHeight:   1.2,
            letterSpacing:'-0.02em',
            background:   'linear-gradient(135deg, #E2E8F0 0%, #B3D9F5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor:  'transparent',
            backgroundClip: 'text',
            marginBottom:  '1.75rem',
          }}>
            {CONTENT.mission.title}
          </h2>
          {CONTENT.mission.body.map((para, i) => (
            <p key={i} style={{
              fontFamily:  "'Inter', sans-serif",
              fontSize:    '1.0625rem',
              lineHeight:  1.8,
              color:       i === 1 ? '#82C0EE' : '#94A3B8',
              fontWeight:  i === 1 ? 600 : 400,
              marginBottom:'1rem',
            }}>
              {para}
            </p>
          ))}
        </FadeIn>

        {/* Visual: bridge illustration */}
        <FadeIn delay={200}>
          <div style={{
            background:     'rgba(30,41,59,0.70)',
            backdropFilter: 'blur(12px)',
            border:         '1px solid rgba(91,163,217,0.20)',
            borderRadius:   '20px',
            padding:        '3rem 2.5rem',
            boxShadow:      '0 4px 15px rgba(0,0,0,0.20), 0 0 12px rgba(91,163,217,0.18)',
            textAlign:      'center',
            position:       'relative',
            overflow:       'hidden',
          }}>
            {/* Bridge SVG illustration */}
            <svg viewBox="0 0 300 180" style={{ width:'100%', maxWidth:'280px' }} aria-hidden="true">
              {/* Sky gradient */}
              <defs>
                <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#050912"/>
                  <stop offset="100%" stopColor="#0A0F1E"/>
                </linearGradient>
                <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#5BA3D9" stopOpacity="0"/>
                  <stop offset="50%" stopColor="#5BA3D9"/>
                  <stop offset="100%" stopColor="#D4A843" stopOpacity="0"/>
                </linearGradient>
                <radialGradient id="glowOrb" cx="50%" cy="30%" r="30%">
                  <stop offset="0%" stopColor="#5BA3D9" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#5BA3D9" stopOpacity="0"/>
                </radialGradient>
              </defs>

              {/* Background glow */}
              <ellipse cx="150" cy="60" rx="120" ry="60" fill="url(#glowOrb)"/>

              {/* Stars */}
              {[
                [30,20],[80,12],[140,8],[200,15],[260,22],[50,45],[230,38],[170,30],
              ].map(([x,y],i) => (
                <circle key={i} cx={x} cy={y} r="1" fill="#E2E8F0" opacity="0.4"/>
              ))}

              {/* Path/bridge arc */}
              <path d="M20 140 Q150 40 280 140" stroke="url(#pathGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

              {/* Ascending steps */}
              {[
                [40, 140, 140, 128],
                [80, 128, 128, 106],
                [120, 106, 180, 84],
                [180, 84, 220, 98],
                [220, 98, 260, 118],
              ].map(([x1,y1,x2,y2], i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
              ))}

              {/* Peak glow orb */}
              <circle cx="150" cy="60" r="10" fill="rgba(91,163,217,0.15)" stroke="#5BA3D9" strokeWidth="1.5"/>
              <circle cx="150" cy="60" r="4" fill="#5BA3D9"/>
              <circle cx="150" cy="60" r="6" fill="none" stroke="#5BA3D9" strokeWidth="0.5" opacity="0.5">
                <animate attributeName="r" values="6;14;6" dur="3s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite"/>
              </circle>

              {/* Ground line */}
              <line x1="0" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>

              {/* Walking figure (simplified) */}
              <g opacity="0.6">
                <circle cx="50" cy="136" r="4" fill="#94A3B8"/>
                <line x1="50" y1="140" x2="50" y2="152" stroke="#94A3B8" strokeWidth="1.5"/>
                <line x1="50" y1="144" x2="45" y2="150" stroke="#94A3B8" strokeWidth="1.5"/>
                <line x1="50" y1="144" x2="55" y2="150" stroke="#94A3B8" strokeWidth="1.5"/>
              </g>

              {/* Arrow at peak */}
              <text x="148" y="55" fill="#D4A843" fontSize="10" textAnchor="middle">↑</text>
            </svg>

            <p style={{
              fontFamily:  "'Inter', sans-serif",
              fontSize:    '0.8125rem',
              color:       '#64748B',
              marginTop:   '1rem',
              fontStyle:   'italic',
            }}>
              Every path begins with a single step.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
    <GlowDivider />
  </div>
);

// ── ETHOS ─────────────────────────────────────────────────────
const EthosSection: React.FC = () => (
  <Section id="ethos" alternate>
    <FadeIn>
      <div style={{ marginBottom: '3.5rem' }}>
        <Eyebrow>Our Ethos</Eyebrow>
        <h2 style={{
          fontFamily:   "'Inter', sans-serif",
          fontSize:     'clamp(1.875rem, 3.5vw, 2.75rem)',
          fontWeight:   800,
          lineHeight:   1.2,
          letterSpacing:'-0.02em',
          background:   'linear-gradient(135deg, #E2E8F0 0%, #B3D9F5 60%, #D4A843 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor:  'transparent',
          backgroundClip: 'text',
          maxWidth:      '600px',
        }}>
          {CONTENT.ethos.title}
        </h2>
      </div>
    </FadeIn>

    <div style={{
      display:             'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap:                 '1.25rem',
    }}>
      {CONTENT.ethos.pillars.map((pillar, i) => {
        const icons = ['◈', '◎', '◉', '◇', '◆'];
        const accents = [
          'rgba(91,163,217,0.20)', 'rgba(212,168,67,0.18)',
          'rgba(91,163,217,0.20)', 'rgba(212,168,67,0.18)', 'rgba(91,163,217,0.22)'
        ];
        return (
          <FadeIn key={i} delay={i * 100}>
            <div
              className="ethos-card kp-glow-card--hoverable"
              style={{
                background:     'rgba(30,41,59,0.70)',
                backdropFilter: 'blur(12px)',
                border:         `1px solid ${i % 2 === 0 ? 'rgba(91,163,217,0.18)' : 'rgba(212,168,67,0.15)'}`,
                borderRadius:   '16px',
                padding:        '2rem',
                boxShadow:      '0 4px 15px rgba(0,0,0,0.20), 0 0 12px rgba(91,163,217,0.18)',
                transition:     'box-shadow 0.2s cubic-bezier(0.4,0,0.2,1), border-color 0.2s cubic-bezier(0.4,0,0.2,1), transform 0.2s cubic-bezier(0.4,0,0.2,1)',
                position:       'relative',
                overflow:       'hidden',
              }}
            >
              {/* Top edge light */}
              <div style={{
                position:   'absolute', top:0, left:'10%', right:'10%', height:'1px',
                background: i % 2 === 0
                  ? 'linear-gradient(90deg, transparent, rgba(91,163,217,0.40), transparent)'
                  : 'linear-gradient(90deg, transparent, rgba(212,168,67,0.35), transparent)',
              }} />

              {/* Icon */}
              <div
                className="ethos-icon"
                style={{
                  width:      '48px',
                  height:     '48px',
                  background: accents[i],
                  borderRadius:'12px',
                  display:    'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize:   '1.375rem',
                  marginBottom:'1.25rem',
                  color:      i % 2 === 0 ? '#5BA3D9' : '#D4A843',
                  transition: 'transform 0.3s ease',
                }}
              >
                {icons[i]}
              </div>

              <h3 style={{
                fontFamily:  "'Inter', sans-serif",
                fontSize:    '1.0625rem',
                fontWeight:  700,
                color:       i % 2 === 0 ? '#82C0EE' : '#D4A843',
                marginBottom:'0.625rem',
                lineHeight:  1.3,
              }}>
                {pillar.title}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize:   '0.9375rem',
                lineHeight: 1.7,
                color:      '#94A3B8',
              }}>
                {pillar.body}
              </p>
            </div>
          </FadeIn>
        );
      })}
    </div>
  </Section>
);

// ── MOTTO ─────────────────────────────────────────────────────
const MottoSection: React.FC = () => (
  <div>
    <GlowDivider gold />
    <Section id="motto" centered>
      <FadeIn>
        <div style={{
          maxWidth:   '680px',
          margin:     '0 auto',
          textAlign:  'center',
        }}>
          <div style={{
            display:     'inline-block',
            background:  'rgba(212,168,67,0.10)',
            border:      '1px solid rgba(212,168,67,0.25)',
            borderRadius:'100px',
            padding:     '0.375rem 1rem',
            marginBottom:'2rem',
          }}>
            <span style={{
              fontFamily:    "'Inter', sans-serif",
              fontSize:      '0.6875rem',
              fontWeight:    600,
              letterSpacing: '0.15em',
              color:         '#D4A843',
              textTransform: 'uppercase',
            }}>
              Your Motto
            </span>
          </div>

          <h2 style={{
            fontFamily:   "'Inter', sans-serif",
            fontSize:     'clamp(1.75rem, 4vw, 3rem)',
            fontWeight:   800,
            lineHeight:   1.2,
            letterSpacing:'-0.02em',
            background:   'linear-gradient(135deg, #E8C56A 0%, #D4A843 50%, #A87E28 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor:  'transparent',
            backgroundClip: 'text',
            marginBottom: '2rem',
          }}>
            {CONTENT.motto.title}
          </h2>

          {CONTENT.motto.body.map((para, i) => (
            <p key={i} style={{
              fontFamily:  "'Inter', sans-serif",
              fontSize:    '1.125rem',
              lineHeight:  1.8,
              color:       '#94A3B8',
              marginBottom:'0.75rem',
            }}>
              {para}
            </p>
          ))}
        </div>
      </FadeIn>
    </Section>
    <GlowDivider gold />
  </div>
);

// ── LEARN ─────────────────────────────────────────────────────
const LearnSection: React.FC = () => (
  <Section id="learn">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
      <FadeIn>
        <Eyebrow>What You'll Learn</Eyebrow>
        <h2 style={{
          fontFamily:   "'Inter', sans-serif",
          fontSize:     'clamp(1.875rem, 3vw, 2.5rem)',
          fontWeight:   800,
          lineHeight:   1.2,
          letterSpacing:'-0.02em',
          background:   'linear-gradient(135deg, #E2E8F0 0%, #B3D9F5 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor:  'transparent',
          backgroundClip: 'text',
          marginBottom: '1.5rem',
        }}>
          {CONTENT.learn.title}
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize:   '1.0625rem',
          lineHeight: 1.7,
          color:      '#94A3B8',
          marginBottom:'2rem',
        }}>
          Practical skills for a safer, more confident digital life — taught with patience and clarity.
        </p>
        <p style={{
          fontFamily:  "'Inter', sans-serif",
          fontSize:    '0.875rem',
          fontStyle:   'italic',
          color:       '#5BA3D9',
        }}>
          "You already have the intelligence. I'll help with the structure."
        </p>
      </FadeIn>

      <FadeIn delay={150}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {CONTENT.learn.items.map((item, i) => (
            <div
              key={i}
              className="learn-item"
              style={{
                background:     'rgba(30,41,59,0.60)',
                backdropFilter: 'blur(8px)',
                border:         '1px solid rgba(255,255,255,0.07)',
                borderRadius:   '12px',
                padding:        '1rem 1.25rem',
                display:        'flex',
                alignItems:     'center',
                gap:            '1rem',
                transition:     'all 0.25s ease',
                cursor:         'default',
              }}
            >
              <span style={{
                width:          '28px',
                height:         '28px',
                borderRadius:   '50%',
                background:     'rgba(91,163,217,0.15)',
                border:         '1px solid rgba(91,163,217,0.25)',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                fontSize:       '0.75rem',
                color:          '#5BA3D9',
                flexShrink:     0,
                fontWeight:     700,
                fontFamily:     "'JetBrains Mono', monospace",
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize:   '0.9375rem',
                color:      '#CBD5E1',
                lineHeight: 1.4,
              }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </Section>
);

// ── PATH FORWARD ──────────────────────────────────────────────
const PathSection: React.FC = () => (
  <div style={{ background: 'radial-gradient(ellipse at 40% 60%, rgba(212,168,67,0.04) 0%, transparent 70%)' }}>
    <GlowDivider />
    <Section id="path">
      <FadeIn>
        <Eyebrow>Your Journey</Eyebrow>
        <h2 style={{
          fontFamily:   "'Inter', sans-serif",
          fontSize:     'clamp(1.875rem, 3.5vw, 2.75rem)',
          fontWeight:   800,
          lineHeight:   1.2,
          letterSpacing:'-0.02em',
          background:   'linear-gradient(135deg, #E2E8F0 0%, #B3D9F5 60%, #D4A843 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor:  'transparent',
          backgroundClip: 'text',
          marginBottom: '3.5rem',
          maxWidth:     '500px',
        }}>
          {CONTENT.path.title}
        </h2>
      </FadeIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '700px' }}>
        {CONTENT.path.steps.map((step, i) => (
          <FadeIn key={i} delay={i * 150}>
            <div style={{
              display:        'flex',
              gap:            '2rem',
              alignItems:     'flex-start',
              background:     'rgba(30,41,59,0.60)',
              backdropFilter: 'blur(10px)',
              border:         '1px solid rgba(91,163,217,0.12)',
              borderRadius:   '16px',
              padding:        '1.75rem 2rem',
              position:       'relative',
              transition:     'all 0.3s cubic-bezier(0.22,1,0.36,1)',
            }}>
              {/* Connector line */}
              {i < CONTENT.path.steps.length - 1 && (
                <div style={{
                  position:   'absolute',
                  left:       '2.875rem',
                  bottom:     '-1.5rem',
                  width:      '2px',
                  height:     '1.5rem',
                  background: 'linear-gradient(180deg, rgba(91,163,217,0.50), rgba(91,163,217,0.10))',
                  zIndex:     1,
                }} />
              )}

              {/* Step number */}
              <div style={{
                width:          '52px',
                height:         '52px',
                borderRadius:   '14px',
                background:     'rgba(91,163,217,0.12)',
                border:         '1px solid rgba(91,163,217,0.25)',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                flexShrink:     0,
                boxShadow:      '0 0 20px rgba(91,163,217,0.15)',
              }}>
                <span style={{
                  fontFamily:  "'JetBrains Mono', monospace",
                  fontSize:    '1.25rem',
                  fontWeight:  700,
                  background:  'linear-gradient(135deg, #5BA3D9, #3A7FAD)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor:  'transparent',
                  backgroundClip: 'text',
                }}>
                  {step.number}
                </span>
              </div>

              <div>
                <h3 style={{
                  fontFamily:  "'Inter', sans-serif",
                  fontSize:    '1.125rem',
                  fontWeight:  700,
                  color:       '#82C0EE',
                  marginBottom:'0.5rem',
                  lineHeight:  1.3,
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize:   '0.9375rem',
                  lineHeight: 1.7,
                  color:      '#94A3B8',
                }}>
                  {step.body}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
    <GlowDivider />
  </div>
);

// ── CALL TO ACTION ────────────────────────────────────────────
const CTASectionComp: React.FC = () => (
  <Section id="cta" centered>
    <FadeIn>
      <div style={{
        maxWidth:       '700px',
        margin:         '0 auto',
        textAlign:      'center',
        background:     'rgba(30,41,59,0.70)',
        backdropFilter: 'blur(16px)',
        border:         '1px solid rgba(91,163,217,0.20)',
        borderRadius:   '24px',
        padding:        'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4rem)',
        boxShadow:      '0 4px 15px rgba(0,0,0,0.20), 0 0 12px rgba(91,163,217,0.18)',
        position:       'relative',
        overflow:       'hidden',
      }}>
        {/* Top glow */}
        <div style={{
          position:   'absolute', top:0, left:'15%', right:'15%', height:'1px',
          background: 'linear-gradient(90deg, transparent, rgba(91,163,217,0.50), rgba(212,168,67,0.30), transparent)',
        }} />

        {/* Ambient glow */}
        <div style={{
          position:   'absolute',
          top:        '-40%',
          left:       '50%',
          transform:  'translateX(-50%)',
          width:      '400px',
          height:     '300px',
          background: 'radial-gradient(circle, rgba(91,163,217,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display:     'inline-flex',
            alignItems:  'center',
            gap:         '0.5rem',
            background:  'rgba(91,163,217,0.10)',
            border:      '1px solid rgba(91,163,217,0.25)',
            borderRadius:'100px',
            padding:     '0.375rem 1rem',
            marginBottom:'2rem',
          }}>
            <span style={{ color: '#5BA3D9', fontSize: '0.5rem' }}>◆</span>
            <span style={{
              fontFamily:    "'Inter', sans-serif",
              fontSize:      '0.6875rem',
              fontWeight:    600,
              letterSpacing: '0.15em',
              color:         '#82C0EE',
              textTransform: 'uppercase',
            }}>
              Begin Your Journey
            </span>
          </div>

          <h2 style={{
            fontFamily:   "'Inter', sans-serif",
            fontSize:     'clamp(2rem, 4vw, 3.25rem)',
            fontWeight:   800,
            lineHeight:   1.15,
            letterSpacing:'-0.025em',
            background:   'linear-gradient(135deg, #E2E8F0 0%, #B3D9F5 55%, #D4A843 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor:  'transparent',
            backgroundClip: 'text',
            marginBottom: '1.25rem',
          }}>
            {CONTENT.cta.title}
          </h2>

          <p style={{
            fontFamily:  "'Inter', sans-serif",
            fontSize:    '1.125rem',
            color:       '#94A3B8',
            marginBottom:'2.5rem',
            lineHeight:  1.7,
          }}>
            {CONTENT.cta.subtitle}
          </p>

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              display:     'inline-flex',
              alignItems:  'center',
              gap:         '0.625rem',
              background:  'linear-gradient(135deg, #5BA3D9 0%, #3A7FAD 100%)',
              color:       '#0A0F1E',
              fontFamily:  "'Inter', sans-serif",
              fontSize:    '1.0625rem',
              fontWeight:  800,
              padding:     '1.0625rem 3rem',
              borderRadius:'14px',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              boxShadow:   '0 4px 15px rgba(91,163,217,0.38)',
              transition:  'all 0.2s cubic-bezier(0.4,0,0.2,1)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 22px rgba(91,163,217,0.60), 0 0 14px rgba(91,163,217,0.28)';
              (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #82C0EE 0%, #5BA3D9 100%)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 15px rgba(91,163,217,0.38)';
              (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #5BA3D9 0%, #3A7FAD 100%)';
            }}
          >
            {CONTENT.cta.button} <span style={{ fontSize: '1.2em' }}>→</span>
          </a>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize:   '0.8125rem',
            color:      '#475569',
            marginTop:  '1.5rem',
            fontStyle:  'italic',
          }}>
            "Clarity begins with a single step."
          </p>
        </div>
      </div>
    </FadeIn>
  </Section>
);

// ────────────────────────────────────────────────────────────────
// PAGE EXPORT
// ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Head>
        <title>KnowingPath.ai — From Not Knowing to Knowing, With Compassion</title>
        <meta name="description" content="KnowingPath.ai guides you from uncertainty to clarity with calm, wisdom, and structure. AI literacy, cybersecurity basics, and digital confidence — for everyone." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="KnowingPath.ai — Clarity. Compassion. Elevation." />
        <meta property="og:description" content="You're not behind. You're not lost. You're simply on the path." />
        <meta property="og:type" content="website" />
      </Head>

      <PageStyles />
      <Layout>
        <HeroSection />
        <MissionSection />
        <EthosSection />
        <MottoSection />
        <LearnSection />
        <PathSection />
        <CTASectionComp />
      </Layout>
    </>
  );
}
