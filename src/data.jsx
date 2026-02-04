    import { Code2, Server, Globe, Database, Cpu, Terminal, Layers, Wifi } from 'lucide-react';

    export const profileData = {
    header: {
        name: "Tomás Manuel Navas",
        role: "Full Stack Developer & IT Infrastructure",
        tagline: "Fusionando la solidez de la infraestructura física con la escalabilidad del software moderno en la nube.",
        social: {
        linkedin: "https://linkedin.com/in/tomas-navas/",
        github: "https://github.com/TomiNavasd",
        email: "mailto:tomimanuelnavas@gmail.com"
        }
    },
    about: {
        description: "Estudiante avanzado de Ingeniería en Informática con una trayectoria híbrida única. Combino experiencia técnica en hardware y redes corporativas con el desarrollo de arquitecturas de microservicios en .NET y React.",
    },
    skills: [
        { name: "C# / .NET 8", icon: <Code2 size={18} /> },
        { name: "Microservicios", icon: <Server size={18} /> },
        { name: "React & Vite", icon: <Globe size={18} /> },
        { name: "SQL & NoSQL", icon: <Database size={18} /> },
        { name: "Docker / Cloud", icon: <Layers size={18} /> },
        { name: "Infraestructura IT", icon: <Cpu size={18} /> },
        { name: "Networking", icon: <Wifi size={18} /> },
        { name: "Frontend", icon: <Terminal size={18} /> },
    ],
    experience: [
        {
        id: 1,
        role: "Full Stack Developer",
        company: "faufena",
        period: "Enero 2026 - Presente",
        desc: "Desarrollo full stack de plataforma web con TypeScript y Python, integrando herramientas de IA (Claude, Cursor) para optimizar ciclos de entrega. Gestión de arquitectura de base de datos, despliegue con Docker/AWS y metodologías ágiles."
        },
        {
        id: 2,
        role: "Técnico de Soporte IT",
        company: "SInfo",
        period: "2023 - Presente",
        desc: "Gestión integral de infraestructura corporativa on-site. Mantenimiento de servidores Windows, configuración de networking y soporte crítico."
        },
        {
        id: 3,
        role: "Técnico de Hardware",
        company: "Nazalnformatica",
        period: "2021 - 2023",
        desc: "Diagnóstico avanzado, ensamblaje de equipos de alto rendimiento y asesoramiento técnico especializado en hardware."
        }
    ],
    projects: [
        {
        id: 1,
        title: "Soundlist 🎧",
        tech: [".NET Core", "RabbitMQ", "HTML", "CSS", "Java Script", "Docker"],
        desc: "Plataforma de música con arquitectura de microservicios. Integra IA para análisis y consumo masivo de API de Spotify.",
        // Agregamos los links aquí:
        links: {
            repo: "https://github.com/SoundList",
            demo: "https://soundlist-front-end.vercel.app/"
        }
        }
    ]
    };
