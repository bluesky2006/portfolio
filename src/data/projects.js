export const projects = [
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
  },
  {
    title: "northcoders news",
    date: "June 2025",
    summary:
      "A full-stack news aggregator site mimicking Hacker News with voting, commenting and sorting",
    description:
      "Northcoder News is a Reddit-style news site built during the Northcoders bootcamp. Users can view, filter, and sort articles, post comments, and vote on content. The app is powered by a RESTful API built with Node.js, Express, and PostgreSQL, featuring database design, routing, validation, and error handling. It also includes integration testing with Jest and Supertest, and is deployed via Render.",
    stack: ["React", "Vite", "Express.js", "PostgreSQL", "Node.js", "Jest", "Supertest"],
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
  },
  {
    title: "portfolio",
    date: "July 2025",
    summary: "This website",
    description:
      "A simple website I built to show-off my portfolio work and experience, and learn a few new skills (in this case, Tailwind and Next.js).",
    stack: ["Next.js", "Tailwind"],
    link: [{ label: "Live site", url: "https://simonbusby.netlify.app/" }],
  },
  {
    title: "glitterball",
    date: "May 2025",
    summary: "A small, stylised website promoting glitterball – a club night I co-run in Somerset",
    description:
      "glitterball is a website for a revived club night I co-run in Somerset, inspired by 80s/90s rave flyers and vintage photography. It began as a ‘vibe-coding’ experiment using ChatGPT before I formally trained as a developer, and was part of what sparked my shift toward software development.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: [{ label: "Live site", url: "https://glitterball.info" }],
  },
];
