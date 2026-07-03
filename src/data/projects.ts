import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 1,
    title: "Gym Master – Full-Stack Fitness Management App",
    href: "/projects/gym-master",
    tags: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "TypeScript",
      "React Query",
    ],
    image: {
      LIGHT: "/images/projects/gymMasterLight.webp",
      DARK: "/images/projects/gymMasterDark.webp",
    },
  },
  {
    index: 2,
    title: "Secure Video Streaming & Sensitivity Analysis Platform",
    href: "/projects/video-streaming-platform",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Socket.io",
      "JWT",
      "RBAC",
      "HTTP Range Streaming",
    ],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 3,
    title: "Apply-mate – Job Application Tracking System",
    href: "/projects/apply-mate",
    tags: [
      "MERN Stack",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Pagination & Filtering",
      "REST API",
    ],
    image: {
      LIGHT: "/images/projects/applyMateLight.webp",
      DARK: "/images/projects/applyMateDark.webp",
    },
  },
  {
    index: 4,
    title: "CodeEasy – Online HTML/CSS/JS Playground",
    href: "/projects/codeeasy",
    tags: [
      "React",
      "JavaScript",
      "Live Preview",
      "Frontend Development",
      "DOM Manipulation",
      "Code Playground",
    ],
    image: {
      LIGHT: "/images/projects/codeEasyLight.webp",
      DARK: "/images/projects/codeEasyDark.webp",
    },
  },
  {
    index: 5,
    title: "Flash Brief News App",
    href: "/projects/flash-brief-news-app",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "NewsAPI",
      "REST API Integration",
      "Responsive UI",
    ],
    image: {
      LIGHT: "/images/projects/flashNewsLight.webp",
      DARK: "/images/projects/flashNewsDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Gym Master – Full-Stack Fitness Management App",
    favicon: "/images/projects/logos/gymMaster.ico",
    imageUrl: [
      "/images/projects/gymMasterLight.webp",
      "/images/projects/gymMasterDark.webp",
    ],
    description:
      "A production-ready gym management platform built with React Native (Expo), Node.js, Express, and MongoDB. Features secure JWT authentication, role-based access control, attendance tracking, workout logging, subscription management, payment tracking, and a scalable REST API for administrators and gym members.",
    sourceCodeHref: "https://github.com/Aakashkethavath/gym-master",
    liveWebsiteHref: "",
  },
  {
    name: "Secure Video Streaming Platform",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/jsontreeLight.webp",
      "/images/projects/jsontreeDark.webp",
    ],
    description:
      "A full-stack video streaming platform featuring JWT authentication, role-based access control, HTTP Range-based video streaming, AI-powered content sensitivity analysis, and real-time processing updates using Socket.io for secure and scalable media delivery.",
    sourceCodeHref:
      "https://github.com/Aakashkethavath/video-streaming-platform",
    liveWebsiteHref: "https://video-streaming-nu-three.vercel.app/",
  },
  {
    name: "Apply-mate – Job Application Tracker",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/AM.webp",
      "/images/projects/AMDark.webp",
    ],
    description:
      "A MERN-based job application tracking system with JWT authentication, cookie-based session management, advanced filtering, search, sorting, pagination, and an intuitive dashboard for organizing and monitoring job applications efficiently.",
    sourceCodeHref: "https://github.com/Aakashkethavath/Apply_mate",
    liveWebsiteHref: "https://apply-mate-six.vercel.app/",
  },
  {
    name: "CodeEasy – Online Code Playground",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/codeEasyDark.webp",
      "/images/projects/codeEasyLight.webp",
    ],
    description:
      "A browser-based HTML, CSS, and JavaScript playground with real-time preview, enabling developers to write, edit, and instantly visualize frontend code without leaving the browser.",
    sourceCodeHref: "https://github.com/Aakashkethavath/code_edit",
    liveWebsiteHref: "https://akash-kethavath.github.io/code_edit/",
  },
  {
    name: "Flash Brief News App",
    favicon: "/images/projects/logos/fb.ico",
    imageUrl: ["/images/projects/ib.webp"],
    description:
      "A responsive news application built with React and NewsAPI that delivers the latest headlines with category-based browsing, search, pagination, country filters, and dark/light mode support.",
    sourceCodeHref: "https://github.com/Aakashkethavath/Info_Burst",
    liveWebsiteHref: "https://flash-brief.vercel.app/",
  },
];
