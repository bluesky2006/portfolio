import type { Screenshot } from "@/components/ScreenshotScroller";

type Project = {
  title: string;
  date: string;
  summary: string;
  description: string;
  stack?: string[];
  link?: { label: string; url: string }[];
  screenshots?: Screenshot[];
  logo?: string;
};

export const projects: Project[] = [
  {
    title: "Tech Treatments",
    date: "January 2026 - Ongoing",
    summary:
      "Local computer repair, upgrades and builds for non-technical people – with retro support and e-waste collection in Somerset",
    description:
      "Tech Treatments is my local, friendly computer services idea for non-technical people in and around Chantry, Somerset. It focuses on practical help with diagnosing issues, speeding up slow machines, upgrades, new PC builds and general setup and support.\n\nAlongside standard repairs, it also leans into retro computer services and responsible e-waste collection – aiming to keep useful tech in circulation and make it easier for people to get rid of old kit properly.\n\nThe website is planned as the home base for the business: a clear list of services, straightforward next steps for booking help, and a foundation for future content (including a possible YouTube channel) to build trust and show how the work is done.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    link: [
      {
        label: "GitHub",
        url: "https://github.com/bluesky2006/tech-treatments",
      },
      {
        label: "Live site",
        url: "https://techtreatments.co.uk/",
      },
    ],
    screenshots: [
      { src: "/screens/techtreatments_1.png", orientation: "landscape" },
      { src: "/screens/techtreatments_2.png", orientation: "landscape" },
      { src: "/screens/techtreatments_3.png", orientation: "landscape" },
      { src: "/screens/techtreatments_4.png", orientation: "landscape" },
    ],
    logo: "/logos/tt_logo.png",
  },
  {
    title: "tiger knee",
    date: "October 2025",
    summary:
      "Freelance web design site promoting creative, modern websites for small businesses and creatives",
    description:
      "This site serves as the home of my freelance web design practice – a clean, fun, confident showcase of the services I offer to small businesses and creatives in Somerset and beyond.\n\nIt highlights my focus on clarity, accessibility and thoughtful design, inviting potential clients to explore my process and get in touch.\n\nBuilt with Next.js and Tailwind CSS, the site features a virbant design system, responsive layouts and sublte yet engaging motion effects powered by Framer Motion.",

    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    link: [
      {
        label: "GitHub",
        url: "https://github.com/bluesky2006/tiger-knee",
      },
      {
        label: "Live site",
        url: "https://tigerknee.co.uk/",
      },
    ],
    screenshots: [
      { src: "/screens/tigerknee_1.png", orientation: "landscape" },
      { src: "/screens/tigerknee_2.png", orientation: "landscape" },
      { src: "/screens/tigerknee_3.png", orientation: "landscape" },
      { src: "/screens/tigerknee_4.png", orientation: "landscape" },
    ],
    logo: "/logos/tigerknee.png",
  },
  {
    title: "cur8or",
    date: "October 2025",
    summary: "Virtual exhibition curator for browsing and saving artworks from museum collections",
    description:
      "cur8or is a web app that lets users browse public art collections and curate their own virtual exhibitions. It aggregates data from APIs at the Cleveland Museum of Art and the Art Institute of Chicago, normalising the results into a unified interface. Users can search by keyword, and save and sort pieces into a personal exhibition view with realistic CSS picture frames.\n\nBuilt with Next.js, Tailwind and TypeScript, the project focuses on client-side state management, API data normalisation and responsive UI design. It also includes a custom ExhibitionContext for handling user selections and dynamic rendering of saved artworks.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    link: [
      {
        label: "GitHub",
        url: "https://github.com/bluesky2006/cur8or",
      },
      {
        label: "Live site",
        url: "https://cur8or.vercel.app/",
      },
    ],
    screenshots: [
      { src: "/screens/cur8or_1.png", orientation: "landscape" },
      { src: "/screens/cur8or_2.png", orientation: "landscape" },
      { src: "/screens/cur8or_3.png", orientation: "landscape" },
      { src: "/screens/cur8or_4.png", orientation: "landscape" },
      { src: "/screens/cur8or_5.png", orientation: "landscape" },
    ],
    logo: "/logos/cur8or.png",
  },

  {
    title: "kr8",
    date: "July 2025 - Ongoing",
    summary:
      "Dual-platform 'virtual record box' for DJs, combining a desktop helper app and mobile companion",
    description:
      "kr8 is a music management platform designed for DJs to bridge the gap between desktop and mobile. The Electron desktop helper parses playlists and extracts metadata from DJ software such as Rekordbox and Traktor, storing it in a Supabase/PostgreSQL database. A React Native mobile companion app then presents this library as vinyl-style record sleeves, complete with playlist browsing, track metadata and filtering. The platform focuses on portability and a tactile, visually rich way to interact with digital record collections.\n\nI am co-developing the platform with Joel Kram, currently focusing my efforts on the front-end while he focuses on the back-end.",
    stack: ["Electron", "React Native", "Nativewind", "PostgreSQL", "Node.js", "TypeScript"],
    link: [
      {
        label: "GitHub (desktop)",
        url: "https://github.com/bluesky2006/kr8-desktop",
      },
      {
        label: "GitHub (mobile)",
        url: "https://github.com/bluesky2006/kr8-mobile",
      },
      {
        label: "GitHub (server)",
        url: "https://github.com/bluesky2006/kr8-server",
      },
      {
        label: "Joel Kram GitHub",
        url: "https://github.com/pooch1e",
      },
    ],
    screenshots: [],
    logo: "/logos/kr8.png",
  },
  {
    title: "glitterball",
    date: "May 2025",
    summary: "A small, stylised website promoting glitterball – a club night I co-run in Somerset",
    description:
      "glitterball is a website for a revived club night I co-run in Somerset, inspired by 80s/90s rave flyers and featurig bold type and grainy '90s stock photography.\n\nIt began as a ‘vibe-coding’ experiment using ChatGPT before I formally trained as a developer, and was part of what sparked my shift toward software development.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: [{ label: "Live site", url: "https://glitterball.info" }],
    screenshots: [
      { src: "/screens/glitterball_1.png", orientation: "landscape" },
      { src: "/screens/glitterball_2.png", orientation: "landscape" },
      { src: "/screens/glitterball_3.png", orientation: "landscape" },
    ],
  },
  {
    title: "Essentience",
    date: "July 2025 - Ongoing",
    summary: "Digital deck-of-cards app for daily wellness and soft skills practice",
    description:
      "Essentience is a React Native app that digitises a physical deck of wellness and soft skills printed cards I designed in InDesign. The app imports structured content from InDesign-exported XML and presents interactive card experiences across four categories – Body, Heart, Mind and Soul. Features thus far  include browsing by pillar, search and keyword filtering, saving favourites and video. The project has been a key learning ground for Expo Router, dynamic navigation and structuring reusable card components.\n\nEssentience is a new company that is crowdfunding in November, so the codebase is currently private.",
    stack: ["React Native", "Expo", "Nativewind"],
    link: [
      {
        label: "GitHub (private)",
        url: "https://github.com/bluesky2006/essentience-app",
      },
    ],
    screenshots: [
      { src: "/screens/essentience_1.png", orientation: "portrait" },
      { src: "/screens/essentience_2.png", orientation: "portrait" },
      { src: "/screens/essentience_3.png", orientation: "portrait" },
      { src: "/screens/essentience_4.png", orientation: "portrait" },
      { src: "/screens/essentience_5.png", orientation: "portrait" },
    ],
    logo: "/logos/essentience.png",
  },
  {
    title: "reci-p.ai",
    date: "July 2025",
    summary: "AI-powered app that reverse engineers recipes from food labels",
    description:
      "reci-p.ai is a mobile app that helps users recreate their favourite shop-bought food by uploading a photo of the label. It returns easy-to-make recipes using fresh ingredients, which can be saved, favourited, and accessed across devices. With a clean UI and minimal steps, the app integrates Google Sign-in for quick access and uses the Gemini API for accurate, AI-powered responses.",
    stack: ["React Native", "Expo", "Gemini API", "MongoDB"],
    link: [
      { label: "GitHub", url: "https://github.com/bluesky2006/reci-p.ai" },
      {
        label: "Pitch video",
        url: "https://www.northcoders.com/blog/reci-p-ai/",
      },
    ],
    screenshots: [],
    logo: "",
  },
  {
    title: "northcoders news",
    date: "June 2025",
    summary:
      "A full-stack news aggregator site mimicking Hacker News with voting, commenting and sorting",
    description:
      "Northcoder News is a Reddit-style news site built during the Northcoders bootcamp. Users can view, filter, and sort articles, post comments, and vote on content. The app is powered by a RESTful API built with Node.js, Express, and PostgreSQL, featuring database design, routing, validation, and error handling. It also includes integration testing with Jest and Supertest, and is deployed via Render.",
    stack: [
      "React",
      "Vite",
      "Express.js",
      "PostgreSQL",
      "Node.js",
      "Jest",
      "Supertest",
      "Supabase",
    ],
    link: [
      { label: "Live frontend", url: "https://nc-news-sgtb.netlify.app/" },
      { label: "Live backend", url: "https://nc-news-3jz4.onrender.com/" },
      {
        label: "Frontend GitHub",
        url: "https://github.com/bluesky2006/nc-news",
      },
      {
        label: "Backend GitHub",
        url: "https://github.com/bluesky2006/nc-news-be",
      },
    ],
    screenshots: [
      { src: "/screens/northcoders_news_1.png", orientation: "landscape" },
      { src: "/screens/northcoders_news_2.png", orientation: "landscape" },
      { src: "/screens/northcoders_news_3.png", orientation: "landscape" },
      { src: "/screens/northcoders_news_4.png", orientation: "landscape" },
      { src: "/screens/northcoders_news_5.png", orientation: "landscape" },
    ],
    logo: "",
  },
  {
    title: "Tome of Threats",
    date: "May 2025",
    summary: "React + Vite project that browses Dungeons & Dragons 5e API resources",
    description:
      "Tome of Threats is a simple React + Vite project that pulls selected information from the open Dungeons & Dragons 5e API and presents it in a clean, browsable interface. Built as part of the Northcoders Full-Stack Bootcamp, the project was pair-programmed to strengthen skills in React, API integration and project structure.\n\nFeatures include browsing D&D 5e resources via the API, modern React with functional components, client-side routing powered by React Router, and hot-reload/build via Vite. The app is structured with organised components, modular styling and helper functions for fetching data.",
    stack: ["React", "Vite", "JavaScript"],
    link: [
      {
        label: "GitHub",
        url: "https://github.com/bluesky2006/dnd-api-explorer",
      },
    ],
    screenshots: [
      { src: "/screens/tomeofthreats_1.png", orientation: "landscape" },
      { src: "/screens/tomeofthreats_2.png", orientation: "landscape" },
      { src: "/screens/tomeofthreats_3.png", orientation: "landscape" },
    ],
    logo: "",
  },
];
