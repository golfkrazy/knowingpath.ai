// ============================================================
// Layout — Web Component
// Fixed nav, page wrapper, footer
// SSV brand header applied per brand_aware_ui_generator rules
// ============================================================

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NAV_ITEMS } from '../../shared/utils/sharedLogic';

const ACCENT = '#5BA3D9';

// ── KnowingPath.ai Logo SVG ───────────────────────────────────
// Ascending Bridge mark: a stylized bridge/path arc
const KPLogo = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="22" cy="22" r="21" fill="rgba(91,163,217,0.12)" stroke="rgba(91,163,217,0.40)" strokeWidth="1"/>
    {/* Bridge path arc */}
    <path d="M8 30 Q22 10 36 30" stroke="#5BA3D9" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    {/* Ascending steps */}
    <path d="M12 30 L12 26" stroke="#D4A843" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 30 L18 22" stroke="#D4A843" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 30 L24 19" stroke="#D4A843" strokeWidth="2" strokeLinecap="round"/>
    <path d="M30 30 L30 22" stroke="#D4A843" strokeWidth="2" strokeLinecap="round"/>
    <path d="M36 30 L36 26" stroke="#D4A843" strokeWidth="2" strokeLinecap="round"/>
    {/* Glow dot at peak */}
    <circle cx="22" cy="11" r="2.5" fill="#5BA3D9" opacity="0.8"/>
  </svg>
);

// ── Top Navigation ────────────────────────────────────────────
export const TopNav: React.FC = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const router = useRouter();
  const isHome = router.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith('#') && isHome) {
      // Smooth-scroll anchor on the home page
      const id = href.replace('#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (href.startsWith('#')) {
      // Navigate to home then scroll
      router.push({ pathname: '/', hash: href.replace('#', '') });
    } else {
      router.push(href);
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  return (
    <nav style={{
      position:   'fixed',
      top:        0,
      left:       0,
      right:      0,
      zIndex:     1000,
      padding:    scrolled ? '0.75rem 2rem' : '1.25rem 2rem',
      background: scrolled
        ? 'rgba(10, 15, 30, 0.92)'
        : 'rgba(10, 15, 30, 0.65)',
      backdropFilter:       'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: scrolled
        ? '1px solid rgba(91,163,217,0.15)'
        : '1px solid transparent',
      transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      display:    'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      {/* Brand mark */}
      <button
        onClick={() => handleNavClick('/')}
        style={{
          display:    'flex',
          alignItems: 'center',
          gap:        '0.875rem',
          background: 'none',
          border:     'none',
          cursor:     'pointer',
          padding:    0,
        }}
      >
        <KPLogo />
        <div style={{ textAlign: 'left' }}>
          <div style={{
            fontFamily:  "'Inter', sans-serif",
            fontWeight:  800,
            fontSize:    '1rem',
            color:       '#E2E8F0',
            lineHeight:  1.2,
            letterSpacing: '-0.01em',
          }}>
            KnowingPath.ai
          </div>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontStyle:  'italic',
            fontSize:   '0.7rem',
            color:      '#5BA3D9',
            lineHeight: 1.2,
          }}>
            Clarity. Compassion. Elevation.
          </div>
        </div>
      </button>

      {/* Desktop nav — top-level routes: Home, Learn, About, Contact + Begin CTA */}
      <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }} className="kp-nav-desktop">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href)}
              style={{
                background:    active ? 'rgba(91,163,217,0.10)' : 'none',
                border:        active ? '1px solid rgba(91,163,217,0.20)' : '1px solid transparent',
                cursor:        'pointer',
                fontFamily:    "'Inter', sans-serif",
                fontSize:      '0.8125rem',
                fontWeight:    active ? 600 : 500,
                color:         active ? '#82C0EE' : '#94A3B8',
                padding:       '0.5rem 0.875rem',
                borderRadius:  '8px',
                transition:    'all 0.2s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => {
                if (!active) {
                  (e.currentTarget as HTMLElement).style.color = '#E2E8F0';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(91,163,217,0.06)';
                }
              }}
              onMouseLeave={e => {
                if (!active) {
                  (e.currentTarget as HTMLElement).style.color = '#94A3B8';
                  (e.currentTarget as HTMLElement).style.background = 'none';
                }
              }}
            >
              {item.label}
            </button>
          );
        })}

        {/* Begin CTA */}
        <button
          onClick={() => handleNavClick(isHome ? '#cta' : '/#cta')}
          style={{
            background:  'linear-gradient(135deg, #5BA3D9 0%, #3A7FAD 100%)',
            border:      'none',
            cursor:      'pointer',
            fontFamily:  "'Inter', sans-serif",
            fontSize:    '0.8125rem',
            fontWeight:  700,
            color:       '#0A0F1E',
            padding:     '0.5rem 1.25rem',
            borderRadius:'10px',
            marginLeft:  '0.5rem',
            transition:  'all 0.2s',
            letterSpacing: '0.01em',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #82C0EE 0%, #5BA3D9 100%)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(91,163,217,0.45)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #5BA3D9 0%, #3A7FAD 100%)';
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}
        >
          Begin
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display:    'none',
          background: 'none',
          border:     'none',
          cursor:     'pointer',
          padding:    '0.5rem',
          color:      '#E2E8F0',
          fontSize:   '1.5rem',
        }}
        className="kp-nav-mobile-toggle"
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position:      'absolute',
          top:           '100%',
          left:          0,
          right:         0,
          background:    'rgba(10, 15, 30, 0.97)',
          backdropFilter:'blur(20px)',
          borderBottom:  '1px solid rgba(91,163,217,0.15)',
          padding:       '1rem',
          display:       'flex',
          flexDirection: 'column',
          gap:           '0.25rem',
        }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href)}
              style={{
                background:   isActive(item.href) ? 'rgba(91,163,217,0.08)' : 'none',
                border:       'none',
                cursor:       'pointer',
                fontFamily:   "'Inter', sans-serif",
                fontSize:     '0.9375rem',
                fontWeight:   isActive(item.href) ? 600 : 500,
                color:        isActive(item.href) ? '#82C0EE' : '#94A3B8',
                padding:      '0.875rem 1rem',
                borderRadius: '8px',
                textAlign:    'left',
                width:        '100%',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick(isHome ? '#cta' : '/#cta')}
            style={{
              background:  'linear-gradient(135deg, #5BA3D9 0%, #3A7FAD 100%)',
              border:      'none',
              cursor:      'pointer',
              fontFamily:  "'Inter', sans-serif",
              fontSize:    '0.9375rem',
              fontWeight:  700,
              color:       '#0A0F1E',
              padding:     '0.875rem 1rem',
              borderRadius:'10px',
              marginTop:   '0.5rem',
            }}
          >
            Begin Your Path →
          </button>
        </div>
      )}
    </nav>
  );
};

// ── Page Footer ───────────────────────────────────────────────
export const PageFooter: React.FC = () => (
  <footer style={{
    padding:      '3rem 2rem',
    textAlign:    'center',
    borderTop:    '1px solid rgba(91,163,217,0.12)',
    background:   'rgba(5, 9, 18, 0.80)',
  }}>
    {/* KnowingPath brand */}
    <div style={{
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      gap:            '0.5rem',
      marginBottom:   '1.5rem',
    }}>
      <KPLogo />
      <p style={{
        fontFamily:  "'Inter', sans-serif",
        fontWeight:  700,
        fontSize:    '1rem',
        color:       '#E2E8F0',
        margin:      0,
        letterSpacing: '-0.01em',
      }}>
        KnowingPath.ai
      </p>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontStyle:  'italic',
        fontSize:   '0.8125rem',
        color:      '#5BA3D9',
        margin:     0,
      }}>
        Clarity. Compassion. Elevation.
      </p>
    </div>

    <p style={{
      fontFamily: "'Inter', sans-serif",
      fontSize:   '0.75rem',
      color:      '#475569',
      margin:     0,
    }}>
      © 2026 KnowingPath.ai — All Rights Reserved.
    </p>
  </footer>
);

// ── Page Layout Wrapper ───────────────────────────────────────
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <TopNav />
    <main style={{ paddingTop: '80px' }}>
      {children}
    </main>
    <PageFooter />
  </>
);

export default Layout;
