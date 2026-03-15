// ============================================================
// KnowingPath.ai — Call To Action Page (/cta)
// ============================================================

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { CONTENT } from '../../shared/utils/sharedLogic';

export default function CTAPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Begin Your Path — KnowingPath.ai</title>
        <meta name="description" content="Ready to begin your path? Let's walk it together." />
      </Head>
      <Layout>
        <section style={{
          minHeight:'calc(100vh - 80px)',display:'flex',
          alignItems:'center',justifyContent:'center',
          padding:'clamp(5rem,10vw,8rem) clamp(1.5rem,6vw,4rem)',
        }}>
          <div style={{
            maxWidth:'640px',width:'100%',textAlign:'center',
            background:'rgba(30,41,59,0.72)',backdropFilter:'blur(16px)',
            border:'1px solid rgba(91,163,217,0.20)',borderRadius:'24px',
            padding:'clamp(3rem,6vw,5rem) clamp(2rem,5vw,4rem)',
            boxShadow:'0 16px 64px rgba(0,0,0,0.60),0 0 48px rgba(91,163,217,0.10)',
            position:'relative',overflow:'hidden',
          }}>
            <div style={{
              position:'absolute',top:0,left:'15%',right:'15%',height:'1px',
              background:'linear-gradient(90deg,transparent,rgba(91,163,217,0.50),rgba(212,168,67,0.30),transparent)',
            }}/>
            <div style={{
              position:'absolute',top:'-40%',left:'50%',transform:'translateX(-50%)',
              width:'400px',height:'300px',
              background:'radial-gradient(circle,rgba(91,163,217,0.10) 0%,transparent 70%)',
              pointerEvents:'none',
            }}/>

            <div style={{position:'relative',zIndex:1}}>
              <div style={{
                display:'inline-flex',alignItems:'center',gap:'0.5rem',
                background:'rgba(91,163,217,0.10)',border:'1px solid rgba(91,163,217,0.25)',
                borderRadius:'100px',padding:'0.375rem 1rem',marginBottom:'2rem',
              }}>
                <span style={{color:'#5BA3D9',fontSize:'0.5rem'}}>◆</span>
                <span style={{fontFamily:'Inter',fontSize:'0.6875rem',fontWeight:600,
                  letterSpacing:'0.15em',color:'#82C0EE',textTransform:'uppercase' as const}}>
                  Begin Your Journey
                </span>
              </div>

              <h1 style={{
                fontFamily:'Inter',fontSize:'clamp(1.875rem,4vw,3rem)',
                fontWeight:800,lineHeight:1.15,letterSpacing:'-0.025em',
                background:'linear-gradient(135deg,#E2E8F0 0%,#B3D9F5 55%,#D4A843 100%)',
                WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
                backgroundClip:'text',marginBottom:'1.25rem',
              }}>
                {CONTENT.cta.title}
              </h1>

              <p style={{fontFamily:'Inter',fontSize:'1.125rem',color:'#94A3B8',marginBottom:'2.5rem',lineHeight:1.7}}>
                {CONTENT.cta.subtitle}
              </p>

              <button
                onClick={() => router.push('/')}
                style={{
                  display:'inline-flex',alignItems:'center',gap:'0.625rem',
                  background:'linear-gradient(135deg,#5BA3D9 0%,#3A7FAD 100%)',
                  border:'none',cursor:'pointer',
                  fontFamily:'Inter',fontSize:'1.0625rem',fontWeight:800,
                  color:'#0A0F1E',padding:'1.0625rem 3rem',
                  borderRadius:'14px',letterSpacing:'0.01em',
                  boxShadow:'0 4px 28px rgba(91,163,217,0.45)',
                  transition:'all 0.35s cubic-bezier(0.22,1,0.36,1)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform='translateY(-3px) scale(1.02)';
                  (e.currentTarget as HTMLElement).style.boxShadow='0 8px 40px rgba(91,163,217,0.65)';
                  (e.currentTarget as HTMLElement).style.background='linear-gradient(135deg,#82C0EE 0%,#5BA3D9 100%)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform='translateY(0) scale(1)';
                  (e.currentTarget as HTMLElement).style.boxShadow='0 4px 28px rgba(91,163,217,0.45)';
                  (e.currentTarget as HTMLElement).style.background='linear-gradient(135deg,#5BA3D9 0%,#3A7FAD 100%)';
                }}
              >
                {CONTENT.cta.button} <span style={{fontSize:'1.2em'}}>→</span>
              </button>

              <p style={{fontFamily:'Inter',fontSize:'0.8125rem',color:'#475569',marginTop:'1.5rem',fontStyle:'italic'}}>
                "Clarity begins with a single step."
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
