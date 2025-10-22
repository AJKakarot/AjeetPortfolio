import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ajeet Gupta",
  initials: "AG",
  url: "https://ajeetgupta.com",
  location: "Deoria, Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/deoria",
  description:
    "Full Stack Developer with expertise in React, Node.js, C++, and Data Structures & Algorithms — focused on PERFORMANCE, SCALABILITY, and CLEAN CODE.",
  summary: "**Full Stack MERN Developer** specializing in building SCALABLE, Production-Grade SaaS and web applications. Experienced in C++, **NodeJS**, Express, and **cloud-native DevOps solutions**. Strong foundation in **problem-solving** and **software architecture**. Built and deployed **10+ production projects** and actively contributed to high-impact engineering challenges. **DSA solved: 500+ questions**, **LeetCode top 10%**. Passionate about **continuous learning** and **cutting-edge technologies**. Currently exploring **cloud computing**, **Kubernetes**, and **microservices architecture** to enhance application scalability and reliability. Dedicated to writing clean, maintainable code and following best practices in software development.",
  avatarUrl: "/me.png",
 skills: [
  // Frontend
 ,"Next.js",
  "React.js",
  "Redux",
  "TailwindCSS",
  "shadcn/ui",
  "TypeScript",
  "JavaScript",

  // Backend
  "Node.js",
  "Express.js",
  "Prisma ORM",

  // Databases
  "MongoDB",
  "PostgreSQL",
  "MySQL",

  // DevOps & Cloud
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Vercel",
  "Cloudflare",
  "GitHub Actions",

  // AI & API Integrations
  "LangChain",
  "Google Gemini API",
  "NextAuth",
  "Razorpay",
  "Neon DB",
  "Postman",

  // Other Programming Languages
  "Python",
  "C++",
],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+919876543210",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/ajeetgupta", icon: Icons.github, navbar: true },
      LinkedIn: { name: "LinkedIn", url: "https://linkedin.com/in/ajeetgupta", icon: Icons.linkedin, navbar: true },
      X: { name: "X", url: "https://x.com/butter69168", icon: Icons.x, navbar: true },
      
    },
  },

  work: [
    {
      company: "Modulus",
      href: "https://www.trymodulus.com",
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/modulus.jpeg",
      start: "Aug 2025",
      end: "Nov 2025",
      description:
        "Built SCALABLE SaaS solutions using MERN stack with AUTHENTICATION, REAL-TIME WebSocket features, and optimized MongoDB queries for high performance.",
    },
    {
      company: "CloudSpire",
      href: "https://cloudspire.com",
      location: "Remote",
      title: "Backend Developer Intern",
      logoUrl: "Cloud.png",
      start: "Jan 2025",
      end: "Apr 2025",
      description:
        "Developing ROBUST REST APIs with Node.js and Spring Boot, integrating THIRD-PARTY services, and ensuring HIGH AVAILABILITY with Docker & Kubernetes deployments.",
    },
    {
  company: "E-Cell, Dr. AITD",
  href: "https://ecelldraitd.in", 
  location: "Remote",
  title: "Technical Coordinator & Web Developer",
  logoUrl: "/aitd.jpeg",
  start: "Sep 2024",
  end: "present",
  description:
    "Led the end-to-end development of a full-stack MERN web application, implementing secure authentication and responsive UI designs. Managed the technical workflow, mentored peers, and ensured adherence to clean architecture and scalable best practices. Contributed to organizing E-Cell technical initiatives to strengthen the institute’s innovation ecosystem.",
}

  ],

education: [
  {
    school: "Dr. A.P.J. Abdul Kalam Technical University",
    href: "https://aitd.ac.in",
    degree: "B.Tech CSE (AI & ML) - 3rd Year Student",
    logoUrl: "/aitd.jpeg",
    start: "2023",
    end: "2027", // because you're still studying
  },
  {
    school: "Udemy",
    href: "https://drive.google.com/file/d/1XecnLr0HoFsCGU0x7_B75kccauLRUvwf/view?usp=drivesdk",
    degree: "MERN Stack Full Course (22 hours)",
    logoUrl: "/udemy.png",
    start: "2025",
    end: "2025",
  },
],

 projects: [
  {
    title: "CashTrackr",
    href: "https://cash-trackr-3mhg-fcaa3gew1-ajeets-projects-0160f38e.vercel.app",
    dates: "Aug 2025",
    active: true,
    description: "Developed an intelligent finance dashboard that provides **real-time budget tracking** and AI-powered insights. Built using **Next.js 15**, **React**, and **TailwindCSS** with backend APIs in **Node.js**, **Express.js**, and **Prisma** connected to **MongoDB**. Deployed on **Vercel** for optimal performance, scalability, and SEO.",
    technologies: [
      "Next.js 15",
      "React",
      "TailwindCSS",
      "shadcn/ui",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "Prisma",
      "MongoDB",
      "Vercel"
    ],
    links: [
      { type: "GitHub", url: "https://github.com/AJKakarot/CashTrackr" },
      { type: "Live Demo", url: "https://cash-trackr-3mhg-fcaa3gew1-ajeets-projects-0160f38e.vercel.app" }
    ],
    image: "",
    video: "/cashtrack.mov",
  },
  {
    title: "BytesBlog",
    href: "https://bytesblog.onrender.com",
    dates: "May 2025",
    active: true,
    description:
      "Built a full-stack blog platform with CRUD operations, post publishing, and secure **JWT authentication**. Integrated **Cloudinary** for image handling and enhanced the frontend with **React** and **TailwindCSS** for responsive, clean UI. Built scalable backend APIs using **Node.js**, **Express.js**, and **MongoDB**  .",
    technologies: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "JWT Auth",
    ],
    links: [],
    image: "",
    video: "/blog.mov",
  },
  {
    title: "Gym-Guidance",
    href: "https://gym-guidance-jftk.vercel.app",
    dates: "Apr 2025",
    active: true,
    description:
      "Created a responsive fitness platform using **Next.js 14** and **React 18** to deliver guided workout plans and progress tracking. Implemented dynamic UI with **TailwindCSS**, **TypeScript**, and **Framer Motion**. Integrated APIs using **React Hook Form** and **Axios**. Deployed on **Vercel** with CI/CD for speed and scalability.",
    technologies: [
      "Next.js 14",
      "React 18",
      "TailwindCSS",
      "TypeScript",
      "Framer Motion",
      "Axios",
      "React Hook Form",
      "Vercel",
    ],
    links: [],
    image: "",
    video: "/gym.mov",
  },
],

  hackathons: [
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a PYTHON LIBRARY for EMOTION-BASED game difficulty adjustment using OpenCV and custom ML model. Won 1st place.",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        { title: "Source", icon: <Icons.github className="h-4 w-4" />, href: "https://github.com/ajeetgupta/ai-hackathon" },
      ],
    },
  ],
} as const;
