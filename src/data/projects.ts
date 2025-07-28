export const projects = [
  {
    title: "reci-p.ai",
    summary: "AI-powered app that reverse engineers recipes from food labels.",
    description: "reci-p.ai is an app for Android and iOS that provides users with the ability to quickly and easily recreate recipes of their favourite shop-bought food items at the tap of a button. Users can take or upload photos of their food and receive great tasting recipes that can be made at home from fresh. Recipes can be saved and favourited, and viewed across devices. We wanted users to get their recipes in as few steps as possible, with a clean and easy to understand UI. As such, the app also integrates Google Sign-in so users can get started as quickly as possible, and leverages Google Gemini to provide an accurate and quick response.",
    stack: ["React Native", "Expo", "Gemini API", ],
    link: [
      { label: "GitHub", url: "https://github.com/bluesky2006/reci-p.ai" },
      { label: "Pitch video", url: "https://www.northcoders.com/blog/reci-p-ai/" }
    ],
  },
  {
      title: "northcoders news",
      summary: "A full-stack news aggregator site mimicking Hacker News with voting, commenting and sorting.",
      description: "The Northcoder News app offers users a streamlined experience of interacting with a simple, Reddit-style news website. Built as part of the Northcoders bootcamp, it allows users to browse a list of articles, filter them by topic, and sort them by values such as date, title, user, or votes. Users can view individual articles, post comments, and delete their own.\n\n The app is powered by the NC News API, a RESTful backend developed using Node.js, Express, and PostgreSQL. It showcases key backend skills including database schema design, SQL querying, Express routing, error handling and data validation. The project also includes integration testing with Jest and Supertest, and is deployed to a live environment via Render.",
      stack: ["React", "Vite", "Express.js", "PostgreSQL", "Node.js", "Jest", "Supertest"],
      link: [
          { label: "Live frontend", url: "https://nc-news-sgtb.netlify.app/" },
          { label: "Live backend", url: "https://nc-news-3jz4.onrender.com/" },
          { label: "Frontend GitHub", url: "https://github.com/bluesky2006/nc-news" },
          { label: "Backend GitHub", url: "https://github.com/bluesky2006/nc-news-be" },
        ],
    },
    {
      title: "glitterball",
      summary: "A small, stylised website promoting Glitterball – a club night I co-run in Somerset.",
      description: "glitterball is the resurrection of a club night I co-ran in London that ended in 2015. As part of our revival, I gave the brand a fresh look inspired by 80s/90s rave flyers and vintage stock photography, drawing assets from archives like the Internet Archive.\n\n The site began life as a “vibe-coding” experiment using ChatGPT before I formally trained as a developer. Early tinkering with HTML/CSS and JS planted the seed that eventually led me to pursue software development full-time.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: [
        { label: "Live site", url: "https://glitterball.info" },
      ],
    },
];