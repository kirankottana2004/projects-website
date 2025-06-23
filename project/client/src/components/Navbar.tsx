import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  onRegisterClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div
            className="navbar-brand"
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/");
              } else {
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
              }
              closeMenu();
            }}
          >
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="brand-logo"
              style={{ cursor: 'pointer' }}
            />
          </div>

          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <button className="navbar-link" onClick={() => scrollToSection("home")}>Home</button>
            <button className="navbar-link" onClick={() => scrollToSection("services")}>Services</button>
            <button className="navbar-link" onClick={() => scrollToSection("about")}>About</button>
            <button className="navbar-link" onClick={() => scrollToSection("contact")}>Contact</button>
            <button className="btn btn-primary register-btn" onClick={() => { onRegisterClick(); closeMenu(); }}>
              Register
            </button>
          </div>

          <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
