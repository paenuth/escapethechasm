import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthLayout, ParaModal, OAuthMethod } from "@getpara/react-sdk";
import "@getpara/react-sdk/styles.css";
import { useState, useEffect } from "react";
import { CSSProperties } from 'react';

import { para } from "./client/para";
import Logo from "./assets/para-logo.svg";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import HowToPlay from "./pages/HowToPlay";

// TypeScript types of CSS
const styles: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 90px)',
    position: 'relative',
    overflow: 'hidden',
  },
  heroSection: {
    textAlign: 'center',
    padding: '3rem',
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(26, 26, 26, 0.5)',
    borderRadius: '20px',
    boxShadow: '0 8px 32px rgba(100, 108, 255, 0.15)',
    border: '1px solid rgba(100, 108, 255, 0.2)',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1.5rem',
    background: 'linear-gradient(45deg, #646cff, #9089fc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    color: '#646cff', // Fallback color
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: 400,
  },
  heroDescription: {
    marginBottom: '2.5rem',
    lineHeight: 1.8,
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  glowEffect: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(100, 108, 255, 0.5)',
    filter: 'blur(20px)',
    borderRadius: '50%',
    opacity: 0.7,
    zIndex: -1,
  },
  decorCircle1: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(100, 108, 255, 0.2) 0%, rgba(100, 108, 255, 0) 70%)',
    top: '-100px',
    right: '-100px',
    zIndex: 0,
  },
  decorCircle2: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(83, 91, 242, 0.15) 0%, rgba(83, 91, 242, 0) 70%)',
    bottom: '-200px',
    left: '-150px',
    zIndex: 0,
  },
  animatedBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(125deg, rgba(100, 108, 255, 0.05), rgba(83, 91, 242, 0.05), rgba(100, 108, 255, 0.05))',
    backgroundSize: '400% 400%',
    animation: 'gradient 15s ease infinite',
    zIndex: -1,
  },
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Add entrance animation after component mounts
    setTimeout(() => {
      setIsAnimated(true);
    }, 100);
  }, []);

  return (
    <div className={`home-container ${isAnimated ? 'fade-in' : ''}`} style={styles.container}>
      <div style={styles.animatedBg}></div>
      <div style={styles.decorCircle1}></div>
      <div style={styles.decorCircle2}></div>
      
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Escape the Chasm</h1>
        <p style={styles.heroSubtitle}>Welcome to Arcade Portal!</p>
        <p style={styles.heroDescription}>
          Click the button below to Connect to Para Wallet and Starting Playing!
        </p>
        <div style={styles.buttonWrapper}>
          <div style={styles.glowEffect}></div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="connect-wallet-btn"
          >
            Open Para Modal
          </button>
        </div>
      </div>
      
      <ParaModal
        appName="ParaModal"
        authLayout={[AuthLayout.AUTH_FULL]}
        para={para}
        disableEmailLogin={false}
        disablePhoneLogin={false}
        isOpen={isModalOpen}
        logo={Logo}
        oAuthMethods={Object.values(OAuthMethod)}
        onClose={() => setIsModalOpen(false)}
        onRampTestMode={true}
        twoFactorAuthEnabled={false}
      />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
      </Routes>
    </Router>
  );
}