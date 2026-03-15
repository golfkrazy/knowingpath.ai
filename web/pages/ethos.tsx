// ============================================================
// KnowingPath.ai — Ethos Page (/ethos)
// ============================================================

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { CONTENT } from '../../shared/utils/sharedLogic';

export default function EthosPage() {
  const router = useRouter();
  const icons = ['◈', '◎', '◉', '◇', '◆'];

  return (
    <>
      <Head>
        <title>The Ascending Bridge Ethos — KnowingPath.ai</title>
        <meta name="description" content="The five pillars of the Ascending Bridge: Clarity With Compassion, Guided Elevation, and more." />
      </Head>
      <style>{`
        .pillar-card{transition:all 0.3s cubic-bezier(0.22,1,0.36,1);}
        .pillar-card:hover{transform:translateY(-4px);border-color:rgba(91,163,217,0.30)!important;}
      `}</style>
      <Layout>
        <section style={{
          minHeight:'calc(100vh - 80px)',
          padding:'clamp(5rem,10vw,8rem) clamp(1.5rem,6vw,4rem)',
          maxWidth:'1100px',margin:'0 auto',
        }}>
          <p style={{
            fontFamily:'Inter',fontSize:'0.6875rem',fontWeight:600,
            letterSpacing:'0.18em',textTransform:'uppercase',
            color:'#5BA3D9',marginBottom:'1rem',
          }}>
            Our Ethos
          </p>
          <h1 style={{
            fontFamily:'Inter',fontSize:'clamp(2rem,4vw,3.25rem)',
            fontWeight:800,lineHeight:1.15,letterSpacing:'-0.025em',
            background:'linear-gradient(135deg,#E2E8F0 0%,#B3D9F5 60%,#D4A843 100%)',
            WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
            backgroundClip:'text',marginBottom:'3.5rem',maxWidth:'600px',
          }}>
            {CONTENT.ethos.title}
          </h1>

          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',
            gap:'1.25rem',
          }}>
            {CONTENT.ethos.pillars.map((pillar, i) => (
              <div key={i} className="pillar-card" style={{
                background:'rgba(30,41,59,0.70)',
                backdropFilter:'blur(12px)',
                border:`1px solid ${i%2===0?'rgba(91,163,217,0.18)':'rgba(212,168,67,0.15)'}`,
                borderRadius:'16px',padding:'2rem',
                boxShadow:'0 8px 32px rgba(0,0,0,0.40)',
                position:'relative',overflow:'hidden',
              }}>
                <div style={{
                  position:'absolute',top:0,left:'10%',right:'10%',height:'1px',
                  background:i%2===0
                    ?'linear-gradient(90deg,transparent,rgba(91,163,217,0.40),transparent)'
                    :'linear-gradient(90deg,transparent,rgba(212,168,67,0.35),transparent)',
                }}/>
                <div style={{
                  width:'44px',height:'44px',borderRadius:'12px',
                  background:i%2===0?'rgba(91,163,217,0.15)':'rgba(212,168,67,0.15)',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  fontSize:'1.25rem',marginBottom:'1.25rem',
                  color:i%2===0?'#5BA3D9':'#D4A843',
                }}>
                  {icons[i]}
                </div>
                <h3 style={{
                  fontFamily:'Inter',fontSize:'1.0625rem',fontWeight:700,
                  color:i%2===0?'#82C0EE':'#D4A843',marginBottom:'0.625rem',
                }}>
                  {pillar.title}
                </h3>
                <p style={{fontFamily:'Inter',fontSize:'0.9375rem',lineHeight:1.7,color:'#94A3B8'}}>
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => router.push('/#motto')}
              style={{
                background:'linear-gradient(135deg,#5BA3D9 0%,#3A7FAD 100%)',
                border:'none',cursor:'pointer',fontFamily:'Inter',fontSize:'0.9375rem',
                fontWeight:700,color:'#0A0F1E',padding:'0.875rem 2rem',
                borderRadius:'10px',boxShadow:'0 4px 20px rgba(91,163,217,0.35)',
              }}
            >
              Your Motto →
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
