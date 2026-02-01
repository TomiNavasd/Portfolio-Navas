import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ChevronDown, Menu, X, ExternalLink } from 'lucide-react';
import './App.css';
import { profileData } from './data';

// Animaciones
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

// Componente Flecha (Usa la clase .arrow-container para adaptarse)
const ScrollDownArrow = ({ toTarget }) => (
  <motion.div 
    className="arrow-container"
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    viewport={{ once: true }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    <Link to={toTarget} smooth={true} duration={800} offset={-50}>
      <div className="scroll-arrow">
        <ChevronDown size={50} color="var(--primary)" />
      </div>
    </Link>
  </motion.div>
);

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navItems = ['Inicio', 'Perfil', 'Experiencia', 'Proyectos', 'Contacto'];

  return (
    <div className="app-container">
      <div className="epic-bg"></div>

      {/* 1. NAVBAR DESKTOP */}
      <motion.nav 
        initial={{ y: -100, x: "-50%" }} animate={{ y: 0, x: "-50%" }} transition={{ duration: 0.8 }}
        className="navbar-desktop"
      >
        {navItems.map((item) => (
          <Link key={item} to={item.toLowerCase()} smooth={true} duration={800} offset={-50} className="nav-link">
            {item}
          </Link>
        ))}
      </motion.nav>

      <div className="mobile-menu-btn" onClick={toggleMenu}>
        {isMobileMenuOpen ? <X size={30} color="#fff" /> : <Menu size={30} color="#fff" />}
      </div>

      {/* MENÚ MÓVIL PANTALLA COMPLETA */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {navItems.map((item) => (
              <Link 
                key={item} 
                to={item.toLowerCase()} 
                smooth={true} duration={800} offset={-50} 
                className="mobile-nav-link"
                onClick={closeMenu} 
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SECCIONES --- */}
      
      {/* INICIO */}
      <section id="inicio" className="section">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.span variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 'bold', letterSpacing: '5px', marginBottom: '20px' }}>
            PORTFOLIO 2026
          </motion.span>
          <motion.h1 variants={fadeInUp} className="hero-title">{profileData.header.name}</motion.h1>
          <motion.h2 variants={fadeInUp} className="hero-role">{profileData.header.role}</motion.h2>
          <motion.p variants={fadeInUp} className="hero-desc">{profileData.header.tagline}</motion.p>
          <motion.div variants={fadeInUp} style={{ display:'flex', gap:'25px', marginTop:'20px' }}>
            <a href={profileData.header.social.github} target="_blank" rel="noreferrer" className="icon-btn"><Github size={32}/></a>
            <a href={profileData.header.social.linkedin} target="_blank" rel="noreferrer" className="icon-btn"><Linkedin size={32}/></a>
            <a href={profileData.header.social.email} className="icon-btn"><Mail size={32}/></a>
          </motion.div>
        </motion.div>
        <ScrollDownArrow toTarget="perfil" />
      </section>

      {/* PERFIL */}
      <section id="perfil" className="section">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.h3 variants={fadeInUp} className="section-title">Perfil Técnico</motion.h3>
          <motion.p variants={fadeInUp} className="hero-desc" style={{ fontSize: '1.4rem' }}>{profileData.about.description}</motion.p>
          <motion.div variants={fadeInUp} style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'20px', maxWidth:'1200px', marginTop:'50px' }}>
            {profileData.skills.map((skill, index) => (
              <div key={index} className="skill-chip">
                <span style={{ color: 'var(--primary)' }}>{skill.icon}</span>{skill.name}
              </div>
            ))}
          </motion.div>
        </motion.div>
        <ScrollDownArrow toTarget="experiencia" />
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="section">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.h3 variants={fadeInUp} className="section-title">Trayectoria</motion.h3>
          <motion.div className="grid-container" variants={staggerContainer}>
            {profileData.experience.map((job) => (
              <motion.div key={job.id} variants={fadeInUp} className="glass-card">
                <h4 className="card-title">{job.role}</h4>
                <span style={{ color: 'var(--secondary)', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>{job.company}</span>
                <span style={{ fontFamily: 'monospace', fontSize: '1rem', color: '#64748b', marginBottom: '25px' }}>{job.period}</span>
                <p className="card-text">{job.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <ScrollDownArrow toTarget="proyectos" />
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="section">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.h3 variants={fadeInUp} className="section-title">Proyecto Destacado</motion.h3>
          <motion.div className="grid-container">
            {profileData.projects.map((proj) => (
              <motion.div key={proj.id} variants={fadeInUp} className="glass-card">
                <h4 className="card-title">{proj.title}</h4>
                <p className="card-text">{proj.desc}</p>
                
                {/* 1. Tecnologías */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
                  {proj.tech.map((t, k) => (
                    <span key={k} style={{ fontSize: '0.85rem', color: 'var(--primary)', border: '1px solid rgba(0, 242, 255, 0.3)', padding: '5px 12px', borderRadius: '50px' }}>{t}</span>
                  ))}
                </div>

                {/* 2. Botones  */}
                <div className="project-links">
                  <a href={proj.links.repo} target="_blank" rel="noreferrer" className="project-btn github-btn">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={proj.links.demo} target="_blank" rel="noreferrer" className="project-btn demo-btn">
                    <ExternalLink size={16} /> Live Demo 
                  </a>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <ScrollDownArrow toTarget="contacto" />
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.h2 variants={fadeInUp} style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '30px', textAlign: 'center' }}>¿Hablamos?</motion.h2>
          <motion.p variants={fadeInUp} className="hero-desc" style={{ fontSize: '1.5rem' }}>Estoy listo para aportar valor a tu equipo desde el primer día.</motion.p>
          <motion.div variants={fadeInUp} style={{ marginTop: '50px' }}>
            <a href={profileData.header.social.email} className="btn-primary">Iniciar Conversación</a>
          </motion.div>
          <footer style={{ marginTop: '100px', color: '#475569', fontSize: '1rem', textAlign: 'center' }}>
            © 2026 Tomás Manuel Navas.
          </footer>
        </motion.div>
      </section>
    </div>
  );
}

export default App;