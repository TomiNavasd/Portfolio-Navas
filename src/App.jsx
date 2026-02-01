import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ChevronDown, Menu, X, ExternalLink, Calendar, Briefcase, Sparkles } from 'lucide-react';
import './App.css';
import { profileData } from './data';

// Animaciones mejoradas
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

// Componente de partículas flotantes
const FloatingParticles = () => (
  <div className="particles-container">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="particle"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          y: [-20, -100],
          x: Math.random() * 40 - 20
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "easeOut"
        }}
        style={{
          left: `${Math.random() * 100}%`,
          bottom: `${Math.random() * 30}%`
        }}
      />
    ))}
  </div>
);

// Componente Flecha mejorado
const ScrollDownArrow = ({ toTarget }) => (
  <motion.div
    className="arrow-container"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.8, duration: 0.8 }}
  >
    <Link to={toTarget} smooth={true} duration={800} offset={-50}>
      <motion.div
        className="scroll-arrow"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown size={40} />
      </motion.div>
    </Link>
  </motion.div>
);

// Componente de Skill mejorado
const SkillChip = ({ skill, index }) => (
  <motion.div
    className="skill-chip"
    variants={scaleIn}
    whileHover={{
      scale: 1.05,
      y: -5,
      transition: { duration: 0.2 }
    }}
    custom={index}
  >
    <span className="skill-icon">{skill.icon}</span>
    <span className="skill-name">{skill.name}</span>
  </motion.div>
);

// Componente de Timeline para Experiencia
const TimelineItem = ({ job, index, isLast }) => (
  <motion.div
    className="timeline-item"
    variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
  >
    <div className="timeline-content">
      <div className="timeline-marker">
        <Briefcase size={20} />
      </div>
      <div className="timeline-card">
        <div className="timeline-header">
          <h4 className="timeline-role">{job.role}</h4>
          <span className="timeline-company">{job.company}</span>
        </div>
        <div className="timeline-meta">
          <span className="timeline-period">
            <Calendar size={14} />
            {job.period}
          </span>
        </div>
        <p className="timeline-desc">{job.desc}</p>
      </div>
    </div>
    {!isLast && <div className="timeline-connector" />}
  </motion.div>
);

// Componente de Proyecto mejorado
const ProjectCard = ({ proj }) => (
  <motion.div
    className="project-card"
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
  >
    <div className="project-glow" />
    <div className="project-content">
      <div className="project-header">
        <Sparkles size={24} className="project-icon" />
        <h4 className="project-title">{proj.title}</h4>
      </div>
      <p className="project-desc">{proj.desc}</p>

      <div className="project-tech">
        {proj.tech.map((t, k) => (
          <span key={k} className="tech-tag">{t}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={proj.links.repo} target="_blank" rel="noreferrer" className="project-btn github-btn">
          <Github size={18} />
          <span>Código</span>
        </a>
        <a href={proj.links.demo} target="_blank" rel="noreferrer" className="project-btn demo-btn">
          <ExternalLink size={18} />
          <span>Demo</span>
        </a>
      </div>
    </div>
  </motion.div>
);

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navItems = ['Inicio', 'Perfil', 'Experiencia', 'Proyectos', 'Contacto'];

  return (
    <div className="app-container">
      {/* Progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Fondo animado */}
      <div className="epic-bg">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
        <div className="grid-overlay" />
      </div>

      {/* NAVBAR DESKTOP */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`navbar-desktop ${scrolled ? 'navbar-scrolled' : ''}`}
      >
        <div className="nav-logo">TN</div>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={800}
              offset={-50}
              className="nav-link"
              spy={true}
              activeClass="nav-active"
            >
              {item}
            </Link>
          ))}
        </div>
        <a href={profileData.header.social.github} target="_blank" rel="noreferrer" className="nav-cta">
          <Github size={18} />
        </a>
      </motion.nav>

      {/* Botón menú móvil */}
      <motion.div
        className="mobile-menu-btn"
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} color="#fff" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} color="#fff" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mobile-nav">
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={800}
                    offset={-50}
                    className="mobile-nav-link"
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mobile-menu-footer">
              <div className="mobile-social">
                <a href={profileData.header.social.github} target="_blank" rel="noreferrer"><Github size={24} /></a>
                <a href={profileData.header.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={24} /></a>
                <a href={profileData.header.social.email}><Mail size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECCIONES */}

      {/* INICIO / HERO */}
      <section id="inicio" className="section hero-section">
        <FloatingParticles />
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="hero-badge">
            <span className="badge-dot" />
            Disponible para nuevos proyectos
          </motion.div>

          <motion.h1 variants={fadeInUp} className="hero-title">
            {profileData.header.name}
          </motion.h1>

          <motion.div variants={fadeInUp} className="hero-role-container">
            <span className="hero-role">{profileData.header.role}</span>
          </motion.div>

          <motion.p variants={fadeInUp} className="hero-desc">
            {profileData.header.tagline}
          </motion.p>

          <motion.div variants={fadeInUp} className="hero-actions">
            <Link to="contacto" smooth={true} duration={800} className="btn-primary">
              Contactar
              <Mail size={18} />
            </Link>
            <Link to="proyectos" smooth={true} duration={800} className="btn-secondary">
              Ver proyectos
              <ExternalLink size={18} />
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="hero-social">
            <a href={profileData.header.social.github} target="_blank" rel="noreferrer" className="social-link">
              <Github size={22} />
            </a>
            <a href={profileData.header.social.linkedin} target="_blank" rel="noreferrer" className="social-link">
              <Linkedin size={22} />
            </a>
            <a href={profileData.header.social.email} className="social-link">
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>
        <ScrollDownArrow toTarget="perfil" />
      </section>

      {/* PERFIL */}
      <section id="perfil" className="section">
        <motion.div
          className="section-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-header">
            <span className="section-label">Sobre mí</span>
            <h2 className="section-title">Perfil Técnico</h2>
          </motion.div>

          <motion.p variants={fadeInUp} className="about-text">
            {profileData.about.description}
          </motion.p>

          <motion.div variants={staggerContainer} className="skills-grid">
            {profileData.skills.map((skill, index) => (
              <SkillChip key={index} skill={skill} index={index} />
            ))}
          </motion.div>
        </motion.div>
        <ScrollDownArrow toTarget="experiencia" />
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="section">
        <motion.div
          className="section-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-header">
            <span className="section-label">Experiencia</span>
            <h2 className="section-title">Trayectoria Profesional</h2>
          </motion.div>

          <div className="timeline">
            {profileData.experience.map((job, index) => (
              <TimelineItem
                key={job.id}
                job={job}
                index={index}
                isLast={index === profileData.experience.length - 1}
              />
            ))}
          </div>
        </motion.div>
        <ScrollDownArrow toTarget="proyectos" />
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="section">
        <motion.div
          className="section-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-header">
            <span className="section-label">Portafolio</span>
            <h2 className="section-title">Proyecto Destacado</h2>
          </motion.div>

          <div className="projects-grid">
            {profileData.projects.map((proj) => (
              <ProjectCard key={proj.id} proj={proj} />
            ))}
          </div>
        </motion.div>
        <ScrollDownArrow toTarget="contacto" />
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section contact-section">
        <motion.div
          className="section-container contact-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="contact-content">
            <span className="section-label">Contacto</span>
            <h2 className="contact-title">¿Trabajamos juntos?</h2>
            <p className="contact-desc">
              Estoy listo para aportar valor a tu equipo desde el primer día.
            </p>
            <motion.a
              href={profileData.header.social.email}
              className="btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Iniciar Conversación
              <Mail size={20} />
            </motion.a>
          </motion.div>

          <motion.div variants={fadeInUp} className="contact-links">
            <a href={profileData.header.social.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a href={profileData.header.social.github} target="_blank" rel="noreferrer" className="contact-link">
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a href={profileData.header.social.email} className="contact-link">
              <Mail size={24} />
              <span>Email</span>
            </a>
          </motion.div>
        </motion.div>

        <footer className="footer">
          <div className="footer-content">
            <span className="footer-logo">TN</span>
            <span className="footer-text">© 2026 Tomás Manuel Navas. Todos los derechos reservados.</span>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
