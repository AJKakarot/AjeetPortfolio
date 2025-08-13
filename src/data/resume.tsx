import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ajeet Gupta",
  initials: "AG",
  url: "https://ajeetgupta.com",
  location: "Deoria, Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/deoria",
  description:
    "Full Stack Developer passionate about building modern web applications, solving real-world problems, and continuously learning new technologies.",
  summary:
    "Full Stack MERN Developer with experience in Java, Spring Boot, cloud-based solutions, and SaaS platforms. Built StudyNotion and contributed to multiple hackathons and real-world projects.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Java",
    "Spring Boot",
    "Docker",
    "Kubernetes",
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
      X: { name: "X", url: "https://x.com/ajeetgupta", icon: Icons.x, navbar: true },
      Youtube: { name: "Youtube", url: "https://youtube.com/@ajeetgupta", icon: Icons.youtube, navbar: true },
      email: { name: "Send Email", url: "mailto:hello@example.com", icon: Icons.email, navbar: false },
    },
  },

  work: [
    {
      company: "Modulus",
      href: "https://modulus.com",
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/modulus.png",
      start: "Jan 2024",
      end: "Jun 2024",
      description:
        "Built scalable SaaS solutions using MERN stack with authentication, real-time WebSocket features, and optimized MongoDB queries.",
    },
    {
      company: "CloudSpire",
      href: "https://cloudspire.com",
      location: "Remote",
      title: "Backend Developer Intern",
      logoUrl: "Cloud.png",
      start: "Jul 2024",
      end: "Present",
      description:
        "Developing REST APIs with Node.js and Spring Boot, integrating third-party services, and ensuring high availability with Docker & Kubernetes deployments.",
    },
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented Bitcoin DLC protocol specifications as open source Typescript SDK. Dockerized microservices, set up production Kubernetes, and built a mobile app in React Native.",
    },
    {
      company: "Shopify",
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "Jan 2021",
      end: "Apr 2021",
      description:
        "Automated MySQL/ProxySQL deployments using custom Kubernetes controller in Go. Maintained failover scripts and Zookeeper consistency.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "Jan 2020",
      end: "Apr 2020",
      description:
        "Architected MVP of GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "Jan 2019",
      end: "Apr 2019",
      description:
        "Developed prototype iOS app in Swift and Django/C++ backend, serialized data via protobufs over gRPC, increasing throughput by 500%.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "Jan 2018",
      end: "Apr 2018",
      description:
        "Built internal Ruby API for scooters, automated firmware updates for 100k+ scooters using React, Rails, PostgreSQL, AWS EC2.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "Aug 2017",
      description:
        "Designed password encryption system and leveraged Yahoo finance API for dividend.com equity screener.",
    },
  ],

  education: [
    { school: "Buildspace", href: "https://buildspace.so", degree: "s3, s4, sf1, s5", logoUrl: "/buildspace.jpg", start: "2023", end: "2024" },
    { school: "University of Waterloo", href: "https://uwaterloo.ca", degree: "BCS Computer Science", logoUrl: "/waterloo.png", start: "2016", end: "2021" },
    { school: "Wilfrid Laurier University", href: "https://wlu.ca", degree: "BBA Business Administration", logoUrl: "/laurier.png", start: "2016", end: "2021" },
    { school: "International Baccalaureate", href: "https://ibo.org", degree: "IB Diploma", logoUrl: "/ib.png", start: "2012", end: "2016" },
    { school: "Dr. A.P.J. Abdul Kalam Technical University", href: "https://aktu.ac.in", degree: "B.Tech Computer Science", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg", start: "2021", end: "2025" },
  ],

  projects: [
    {
      title: "StudyNotion",
      href: "https://studynotion.com",
      dates: "Mar 2024 - May 2024",
      active: true,
      description:
        "EdTech platform built with MERN stack enabling users to browse, purchase, and learn courses. Features authentication, video streaming, payment gateway, and admin dashboard.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "JWT Auth", "Stripe", "TailwindCSS"],
      links: [{ type: "Source", href: "https://github.com/ajeetgupta/studynotion", icon: <Icons.github className="size-3" /> }],
      image: "/study.png",
      video: "",
    },
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "SaaS to collect email addresses from GPT users for audience building and monetization.",
      technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"],
      links: [{ type: "Website", href: "https://chatcollect.com", icon: <Icons.globe className="size-3" /> }],
      image: "",
      video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description: "Designed, developed and sold animated UI components for developers.",
      technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"],
      links: [
        { type: "Website", href: "https://magicui.design", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/magicuidesign/magicui", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description: "Open-source logging and analytics platform for OpenAI API requests.",
      technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn UI", "Magic UI", "Stripe", "Cloudflare Workers"],
      links: [
        { type: "Website", href: "https://llm.report", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/dillionverma/llm.report", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description: "AI Customer Support Chatbot that automatically responds to support tickets using GPT models.",
      technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn UI", "Magic UI", "Stripe", "Cloudflare Workers"],
      links: [{ type: "Website", href: "https://automatic.chat", icon: <Icons.globe className="size-3" /> }],
      image: "",
      video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],

  hackathons: [
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a Python library for emotion-based game difficulty adjustment using OpenCV and custom ML model. Won 1st place.",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        { title: "Source", icon: <Icons.github className="h-4 w-4" />, href: "https://github.com/ajeetgupta/ai-hackathon" },
      ],
    },
    {
      title: "Hack the North 2022",
      dates: "Sept 23rd - 25th, 2022",
      location: "Waterloo, Ontario",
      description: "Built StudyNotion MVP in 48 hours, integrating course management and payment processing.",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        { title: "Source", icon: <Icons.github className="h-4 w-4" />, href: "https://github.com/ajeetgupta/studynotion-hackathon" },
      ],
    },
    {
      title: "MLH Code Day",
      dates: "Dec 2022",
      location: "Remote",
      description: "Built Magic UI components and logged OpenAI API calls for analytics.",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        { title: "Source", icon: <Icons.github className="h-4 w-4" />, href: "https://github.com/magicuidesign/magicui" },
      ],
    },
  ],
} as const;
