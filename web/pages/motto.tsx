// ============================================================
// KnowingPath.ai — Motto Page (/motto)
// ============================================================

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { CONTENT } from '../../shared/utils/sharedLogic';

export default function MottoPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Your Motto — KnowingPath.ai</title>
        <meta name="description" content="You Are Not Dumb — You Just Don't Know. Everyone starts somewhere." />
      </Head>
      <Layout>
        <section style={{
          minHeight:'calc(100vh - 80px)',display:'flex',
          flexDirection:'column',justifyContent:'center',
          padding:'clamp(5rem,10vw,8rem) clamp(1.5rem,6vw,4rem)',
          maxWidth:'700px',margin:'0 auto',
        }}>
          <div style={{
            display:'inline-flex',alignItems:'center',gap:'0.5rem',
            background:'rgba(212,168,67,0.10)',border:'1px solid rgba(212,168,67,0.25)',
            borderRadius:'100px',padding:'0.375rem 1rem',marginBottom:'2rem',
          }}>
            <span style={{fontFamily:'Inter',fontSize:'0.6875rem',fontWeight:600,
              letterSpacing:'0.15em',color:'#D4A843',textTransform:'uppercase' as const}}>
              Your Motto
            </span>
          </div>

          <h1 style={{
            fontFamily:'Inter',fontSize:'clamp(1.75rem,4vw,3rem)',
            fontWeight:800,lineHeight:1.2,letterSpacing:'-0.02em',
            background:'linear-gradient(135deg,#E8C56A 0%,#D4A843 50%,#A87E28 100%)',
            WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
            backgroundClip:'text',marginBottom:'2rem',
          }}>
            {CONTENT.motto.title}
          </h1>

          {CONTENT.motto.body.map((para, i) => (
            <p key={i} style={{
              fontFamily:'Inter',fontSize:'1.125rem',lineHeight:1.8,
              color:'#94A3B8',marginBottom:'1rem',
            }}>
              {para}
            </p>
          ))}

          <div style={{
            marginTop:'2.5rem',
            background:'rgba(212,168,67,0.08)',
            border:'1px solid rgba(212,168,67,0.20)',
            borderRadius:'14px',padding:'1.75rem 2rem',
          }}>
            <p style={{
              fontFamily:'Inter',fontSize:'1rem',lineHeight:1.7,
              color:'#D4A843',fontStyle:'italic',fontWeight:500,
            }}>
              "You're not behind. You're not lost. You're simply on the path."
            </p>
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => router.push('/#learn')}
              style={{
                background:'linear-gradient(135deg,#5BA3D9 0%,#3A7FAD 100%)',
                border:'none',cursor:'pointer',fontFamily:'Inter',fontSize:'0.9375rem',
                fontWeight:700,color:'#0A0F1E',padding:'0.875rem 2rem',
                borderRadius:'10px',boxShadow:'0 4px 20px rgba(91,163,217,0.35)',
              }}
            >
              What You'll Learn →
            </button>
            <button
              onClick={() => router.push('/')}
              style={{
                background:'rgba(91,163,217,0.08)',border:'1px solid rgba(91,163,217,0.25)',
                cursor:'pointer',fontFamily:'Inter',fontSize:'0.9375rem',
                fontWeight:600,color:'#82C0EE',padding:'0.875rem 2rem',borderRadius:'10px',
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
