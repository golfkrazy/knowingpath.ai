// ============================================================
// KnowingPath.ai — Path Forward Page (/path)
// ============================================================

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { CONTENT } from '../../shared/utils/sharedLogic';

export default function PathPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>The Path Forward — KnowingPath.ai</title>
        <meta name="description" content="Start where you are. Learn with guidance. Rise with confidence." />
      </Head>
      <style>{`
        .step-card{transition:all 0.3s cubic-bezier(0.22,1,0.36,1);}
        .step-card:hover{border-color:rgba(91,163,217,0.28)!important;transform:translateX(6px);}
      `}</style>
      <Layout>
        <section style={{
          minHeight:'calc(100vh - 80px)',
          padding:'clamp(5rem,10vw,8rem) clamp(1.5rem,6vw,4rem)',
          maxWidth:'800px',margin:'0 auto',
        }}>
          <p style={{
            fontFamily:'Inter',fontSize:'0.6875rem',fontWeight:600,
            letterSpacing:'0.18em',textTransform:'uppercase',
            color:'#5BA3D9',marginBottom:'1rem',
          }}>
            Your Journey
          </p>
          <h1 style={{
            fontFamily:'Inter',fontSize:'clamp(2rem,4vw,3.25rem)',
            fontWeight:800,lineHeight:1.15,letterSpacing:'-0.025em',
            background:'linear-gradient(135deg,#E2E8F0 0%,#B3D9F5 60%,#D4A843 100%)',
            WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
            backgroundClip:'text',marginBottom:'3.5rem',
          }}>
            {CONTENT.path.title}
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {CONTENT.path.steps.map((step, i) => (
              <div key={i} style={{ position: 'relative' }}>
                {i < CONTENT.path.steps.length - 1 && (
                  <div style={{
                    position:'absolute',left:'2.6rem',top:'100%',
                    width:'2px',height:'1.5rem',
                    background:'linear-gradient(180deg,rgba(91,163,217,0.50),rgba(91,163,217,0.08))',
                    zIndex:1,
                  }}/>
                )}
                <div className="step-card" style={{
                  display:'flex',gap:'1.75rem',alignItems:'flex-start',
                  background:'rgba(30,41,59,0.70)',backdropFilter:'blur(12px)',
                  border:'1px solid rgba(91,163,217,0.12)',
                  borderRadius:'16px',padding:'1.75rem 2rem',
                }}>
                  <div style={{
                    width:'52px',height:'52px',borderRadius:'14px',flexShrink:0,
                    background:'rgba(91,163,217,0.12)',border:'1px solid rgba(91,163,217,0.25)',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    boxShadow:'0 0 20px rgba(91,163,217,0.15)',
                  }}>
                    <span style={{
                      fontFamily:"'JetBrains Mono',monospace",
                      fontSize:'1.25rem',fontWeight:700,
                      background:'linear-gradient(135deg,#5BA3D9,#3A7FAD)',
                      WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
                      backgroundClip:'text',
                    }}>
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 style={{fontFamily:'Inter',fontSize:'1.125rem',fontWeight:700,color:'#82C0EE',marginBottom:'0.5rem'}}>
                      {step.title}
                    </h3>
                    <p style={{fontFamily:'Inter',fontSize:'0.9375rem',lineHeight:1.7,color:'#94A3B8'}}>
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => router.push('/#cta')}
              style={{
                background:'linear-gradient(135deg,#5BA3D9 0%,#3A7FAD 100%)',
                border:'none',cursor:'pointer',fontFamily:'Inter',fontSize:'0.9375rem',
                fontWeight:700,color:'#0A0F1E',padding:'0.875rem 2rem',
                borderRadius:'10px',boxShadow:'0 4px 20px rgba(91,163,217,0.35)',
              }}
            >
              Begin Your Path →
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
