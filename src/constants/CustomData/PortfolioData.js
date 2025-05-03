
const githubUsername = import.meta.env.VITE_GITHUB_USER_NAME



export const headlineData = `
Hey there, I'm Mahendra Kumawat 👋
I build modern, interactive websites with React, Next.js, and a love for great UI.
`


export const aboutSectionData = `
I'm a passionate and detail-oriented Frontend Developer with a strong foundation in crafting modern, responsive web interfaces. I specialize in building intuitive user experiences using technologies like React, Next.js, and Tailwind CSS. While I'm early in my professional journey, I've already developed and deployed several web projects that reflect my commitment to clean design, performance, and accessibility.
I enjoy turning ideas into real, user-friendly products—and I'm constantly learning to stay ahead in this ever-evolving field.
`




export const skills = [
  {
    title: "Frontend Development",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "Professional Developer tools",
    tools: [
      "Git", "GitHub", "Cursor.ai", "Postman", "VS Code", "Chrome DevTools", "Google Idx"
    ]
  }
]





export const projects = [
  {
    title: "AI Trip Planner - Your Smart Travel Companion",
    description: "Plan unforgettable journeys with ease! This intelligent trip planner helps you discover destinations, create personalized itineraries, and manage bookings—all in one place. With interactive maps, real-time suggestions, and secure user authentication, planning your next adventure becomes fun and stress-free.",

    imageUrl: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageHint: "online shopping website",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "Shadcn UI", "Clerk"],
    githubUrl: `https://github.com/${githubUsername}`, // Example URL
    liveUrl: "#", // Replace with actual live URL if available
  },
  {
    title: "My Interactive Portfolio - Showcasing Skills & Projects",
    description: "A sleek and responsive personal portfolio built to highlight my frontend development skills. Explore real-world projects, view detailed case studies, and connect with me seamlessly. Designed for a smooth, engaging experience across all devices.",

    imageUrl: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageHint: "dashboard task management",
    tags: ["React", "Tailwind CSS", "Shadcn UI", "JavaScript"],
    githubUrl: `https://github.com/${githubUsername}`, // Example URL
    liveUrl: "#",
  },
  {
    title: "Archived Website Clone - Tailwind CSS Practice",
    description: "An earlier version of my portfolio site, created as a learning project to practice Tailwind CSS and layout techniques. Preserved for reference and skill progression.",

    imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageHint: "developer portfolio website",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    githubUrl: `https://github.com/${githubUsername}`, // Example URL
    liveUrl: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard displaying complex datasets using various chart types.",
    imageUrl: "https://picsum.photos/600/400?random=4",
    imageHint: "charts graphs dashboard",
    tags: ["React", "D3.js", "Express", "MongoDB"],
    githubUrl: `https://github.com/${githubUsername}`, // Example URL
    liveUrl: "#",
  },
];
