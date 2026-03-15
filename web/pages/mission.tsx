// ============================================================
// KnowingPath.ai — Mission Page (/mission)
// Standalone route + full landing redirect to #mission anchor
// ============================================================

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { CONTENT } from '../../shared/utils/sharedLogic';

export default function MissionPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Our Mission — KnowingPath.ai</title>
        <meta name="description" content={CONTENT.mission.body[0]} />
      </Head>
      <Layout>
        <section style={{
          minHeight:   'calc(100vh - 80px)',
          padding:     'clamp(5rem,10vw,8rem) clamp(1.5rem,6vw,4rem)',
          maxWidth:    '800px',
          margin:      '0 auto',
        }}>
          <p style={{
            fontFamily:'Inter',fontSize:'0.6875rem',fontWeight:600,
            letterSpacing:'0.18em',textTransform:'uppercase',
            color:'#5BA3D9',marginBottom:'1rem',
          }}>
            Our Mission
          </p>

          <h1 style={{
            fontFamily:'Inter',fontSize:'clamp(2rem,4vw,3.25rem)',
            fontWeight:800,lineHeight:1.15,letterSpacing:'-0.025em',
            background:'linear-gradient(135deg,#E2E8F0 0%,#B3D9F5 100%)',
            WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
            backgroundClip:'text',marginBottom:'3rem',
          }}>
            {CONTENT.mission.title}
          </h1>

          <div style={{
            background:'rgba(30,41,59,0.70)',
            backdropFilter:'blur(12px)',
            border:'1px solid rgba(91,163,217,0.18)',
            borderRadius:'20px',
            padding:'2.5rem 3rem',
            boxShadow:'0 8px 32px rgba(0,0,0,0.50),0 0 20px rgba(91,163,217,0.10)',
          }}>
            {CONTENT.mission.body.map((para, i) => (
              <p key={i} style={{
                fontFamily:'Inter',fontSize:'1.125rem',lineHeight:1.85,
                color: i === 1 ? '#82C0EE' : '#94A3B8',
                fontWeight: i === 1 ? 600 : 400,
                marginBottom: i < CONTENT.mission.body.length - 1 ? '1.5rem' : 0,
              }}>
                {para}
              </p>
            ))}
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => router.push('/#ethos')}
              style={{
                background:'linear-gradient(135deg,#5BA3D9 0%,#3A7FAD 100%)',
                border:'none',cursor:'pointer',
                fontFamily:'Inter',fontSize:'0.9375rem',fontWeight:700,
                color:'#0A0F1E',padding:'0.875rem 2rem',
                borderRadius:'10px',
                boxShadow:'0 4px 20px rgba(91,163,217,0.35)',
                transition:'all 0.3s ease',
              }}
            >
              Our Ethos →
            </button>
            <button
              onClick={() => router.push('/')}
              style={{
                background:'rgba(91,163,217,0.08)',
                border:'1px solid rgba(91,163,217,0.25)',
                cursor:'pointer',fontFamily:'Inter',fontSize:'0.9375rem',
                fontWeight:600,color:'#82C0EE',padding:'0.875rem 2rem',
                borderRadius:'10px',transition:'all 0.3s ease',
              }}
            >
              ← Back to Home
            </button>
          </div>
        </section>
      </Layout>
    </>
  );
}
