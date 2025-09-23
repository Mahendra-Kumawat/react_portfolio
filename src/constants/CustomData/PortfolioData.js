const githubUsername = import.meta.env.VITE_GITHUB_USER_NAME;

export const headlineData = `
Hi, 👋 I'm Mahendra Kumawat — a Frontend Developer specializing in building modern, interactive web applications using React, and a focus on great user experience.
`;

export const aboutSectionData = `
I am a passionate and detail-oriented Full Stack Developer with expertise in the MERN stack (MongoDB, Express, React, Node.js). I specialize in building scalable, responsive, and high-performance web applications with a strong focus on intuitive user experiences. With hands-on experience in developing and deploying multiple projects, I ensure clean code, robust architecture, and best practices in performance, security, and accessibility. I enjoy transforming ideas into real, user-friendly products and continuously expanding my skills to stay ahead in the ever-evolving web development landscape.
`;

export const skills = [
  {
    title: "Frontend Development",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "zustand",
      "react-Query",
      "redux-toolkit",
      "zod",
    ],
  },
  {
    title: "Backend Development",
    technologies: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
  },

  {
    title: "Professional Developer tools",
    tools: [
      "Git",
      "GitHub",
      "Cursor.ai",
      "Postman",
      "VS Code",
      "Chrome DevTools",
      "Google Idx",
      "Windsurf AI code editor",
    ],
  },
];

export const projects = [
  {
    title: "AI Trip Planner - Your Smart Travel Companion",
    description:
      "Plan unforgettable journeys with ease! This intelligent trip planner helps you discover destinations, create personalized itineraries, and manage bookings—all in one place. With interactive maps, real-time suggestions, and secure user authentication, planning your next adventure becomes fun and stress-free.",

    imageUrl:
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageHint: "online shopping website",
    tags: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Clerk",
      "Zod",
      "React Hook Form",
      "Zustand",
    ],
    githubUrl: `https://github.com/${githubUsername}`, // Example URL
    liveUrl: "#", // Replace with actual live URL if available
  },
  {
    title: "My Interactive Portfolio - Showcasing Skills & Projects",
    description:
      "A sleek and responsive personal portfolio built to highlight my frontend development skills. Explore real-world projects, view detailed case studies, and connect with me seamlessly. Designed for a smooth, engaging experience across all devices.",

    imageUrl:
      "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageHint: "dashboard task management",
    tags: [
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "JavaScript",
      "React Hook Form",
      "Zod",
      "Zustand",
    ],
    githubUrl: `https://github.com/${githubUsername}`, // Example URL
    liveUrl: "https://react-portfolio-khaki-kappa.vercel.app",
  },
  {
    title: "Archived Website Clone - Tailwind CSS Practice",
    description:
      "An earlier version of my portfolio site, created as a learning project to practice Tailwind CSS and layout techniques. Preserved for reference and skill progression.",

    imageUrl:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageHint: "developer portfolio website",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    githubUrl: `https://github.com/${githubUsername}`, // Example URL
    liveUrl: "https://tailwindpractic.netlify.app/",
  },
  {
    title: "TodoMate",
    description:
      "TodoMate is an advanced task management application that empowers users to efficiently organize, track, and visualize their tasks. It offers features such as creating, editing, deleting, and categorizing todos, viewing tasks on an interactive map, monitoring completed tasks, and enhancing task details with AI-generated suggestions for improved productivity.",
    imageUrl: "/images/TodoMate.png", // Replace with your project image
    imageHint: "todo tasks map productivity",
    tags: [
      "React",
      "Express",
      "MongoDB",
      "Zustand",
      "React Query",
      "Gemini API",
      "Tailwind CSS",
      "Shadcn UI",
      "Zod",
      "React Hook Form",
    ],
    githubUrl: `https://github.com/${githubUsername}`, // Replace with your GitHub repo
    liveUrl: "https://ai-todo-app-vzj5.vercel.app/", // Add your deployed app link here
  },
];

// mobile Menu sidebar data
export const data = {
  title: "Welcome Developer",
  description:
    " Welcome to my portfolio! I'm a frontend developer passionate about crafting responsive, user-friendly web applications. Here you'll find a collection of my projects, and skills - built with clean code and creative design in mind.",
  btnTitle: "Close Sidebar",
};

// src/data/experienceData.js
export const experienceData = [
  {
    company: "Mahiti Infotech Pvt. Ltd.",
    role: "Frontend Developer",
    location: "Delhi, India",
    description: [
      "Designed and developed scalable, responsive UI components using React.js and Tailwind CSS for multiple web applications.",
      "Implemented advanced CRUD operations and integrated dynamic form handling to improve data management and user interaction.",
      "Built complex filtering and search functionalities to enhance usability and content discoverability across large datasets.",
      "Utilized Redux Toolkit for efficient global state management, improving app performance and reducing unnecessary re-renders.",
      "Optimized component reusability and reduced code duplication by applying design pattern principles and atomic design methodology.",
      "Collaborated closely with backend developers to ensure seamless API integration and feature delivery.",
      "Participated in sprint planning, daily stand-ups, and peer code reviews in an Agile development environment.",
    ],
  },
];
