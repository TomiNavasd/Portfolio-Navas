# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Tomás Manuel Navas, built with React 19 and Vite. Single-page application with smooth scrolling navigation, animations via Framer Motion, and responsive design.

## Commands

```bash
npm run dev      # Start development server with HMR
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Architecture

### Core Structure

- **`src/App.jsx`** - Main component containing all sections (Inicio, Perfil, Experiencia, Proyectos, Contacto) with navigation and animations
- **`src/data.jsx`** - Centralized data store for profile info, skills, experience, and projects (exports `profileData`)
- **`src/App.css`** - All styles including CSS variables, glassmorphism effects, responsive breakpoints

### Key Libraries

- **framer-motion** - Animation variants (`fadeInUp`, `staggerContainer`) and `AnimatePresence` for menu transitions
- **react-scroll** - Smooth scrolling `<Link>` components for navigation
- **lucide-react** - Icon components

### CSS Architecture

Global CSS variables in `:root`:
- `--primary`: #00f2ff (cyan accent)
- `--secondary`: #7000ff (purple accent)
- `--glass` / `--glass-border`: Glassmorphism effects

Responsive breakpoints:
- 768px: Tablet/mobile - switches to hamburger menu
- 480px: Small phones - further size reductions

### Navigation

Desktop: Fixed navbar at top center using CSS `position: fixed`
Mobile: Full-screen overlay menu with AnimatePresence transitions, toggled via hamburger button
