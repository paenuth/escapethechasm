import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/para-logo.svg';
import { CSSProperties } from 'react';

const navbarStyles: Record<string, CSSProperties> = {
  scrolled: {
    backgroundColor: 'rgba(15, 15, 15, 0.95)',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)',
  },
  scrolledLight: {
    backgroundColor: 'rgba(245, 245, 245, 0.95)',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
  },
  hamburger: {
    width: '30px',
    height: '20px',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  bar: {
    height: '3px',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '3px',
    transition: 'all 0.3s ease'
  },
  barLight: {
    backgroundColor: '#213547'
  }
};

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prefersDarkMode, setPrefersDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleColorSchemeChange = (e: MediaQueryListEvent) => {
      setPrefersDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleColorSchemeChange);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      darkModeMediaQuery.removeEventListener('change', handleColorSchemeChange);
    };
  }, []);

  return (
    <nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      style={scrolled ? (prefersDarkMode ? navbarStyles.scrolled : navbarStyles.scrolledLight) : {}}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={Logo} alt="Para Logo" className="logo" />
          Arcade Portal
        </Link>
        
        <div className="menu-icon" onClick={handleClick}>
          <div 
            style={{
              ...navbarStyles.hamburger as CSSProperties,
              flexDirection: 'column'
            }}
          >
            <div 
              style={{
                ...navbarStyles.bar as CSSProperties,
                transform: click ? 'rotate(45deg) translate(6px, 6px)' : 'none',
                ...(prefersDarkMode ? {} : navbarStyles.barLight)
              }}
            ></div>
            <div 
              style={{
                ...navbarStyles.bar as CSSProperties,
                opacity: click ? 0 : 1,
                ...(prefersDarkMode ? {} : navbarStyles.barLight)
              }}
            ></div>
            <div 
              style={{
                ...navbarStyles.bar as CSSProperties,
                transform: click ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
                ...(prefersDarkMode ? {} : navbarStyles.barLight)
              }}
            ></div>
          </div>
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/how-to-play" className="nav-links" onClick={closeMobileMenu}>
              How To Play
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;