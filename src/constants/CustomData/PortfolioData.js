
const githubUsername = import.meta.env.VITE_GITHUB_USER_NAME



export const headlineData = `
 

Hi, 👋 I'm Mahendra Kumawat — a Frontend Developer specializing in building modern, interactive web applications using React, and a focus on great user experience.
`


export const aboutSectionData = `
I'm a passionate and detail-oriented Frontend Developer with a strong foundation in crafting modern, responsive web interfaces. I specialize in building intuitive user experiences using technologies like React, Next.js, and Tailwind CSS. While I'm early in my professional journey, I've already developed and deployed several web projects that reflect my commitment to clean design, performance, and accessibility.
I enjoy turning ideas into real, user-friendly products—and I'm constantly learning to stay ahead in this ever-evolving field.
`




export const skills = [
  {
    title: "Frontend Development",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "Shadcn UI" , "zustand" , "react-Query" , "redux-toolkit" , "zod"],
  },
  {
    title: "Professional Developer tools",
    tools: [
      "Git", "GitHub", "Cursor.ai", "Postman", "VS Code", "Chrome DevTools", "Google Idx" , "Windsurf AI code editor"
    ]
  }
]





export const projects = [
  {
    title: "AI Trip Planner - Your Smart Travel Companion",
    description: "Plan unforgettable journeys with ease! This intelligent trip planner helps you discover destinations, create personalized itineraries, and manage bookings—all in one place. With interactive maps, real-time suggestions, and secure user authentication, planning your next adventure becomes fun and stress-free.",

    imageUrl: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageHint: "online shopping website",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "Shadcn UI", "Clerk" ,"Zod" , "React Hook Form" , "Zustand"],
    githubUrl: `https://github.com/${githubUsername}`, // Example URL
    liveUrl: "#", // Replace with actual live URL if available
  },
  {
    title: "My Interactive Portfolio - Showcasing Skills & Projects",
    description: "A sleek and responsive personal portfolio built to highlight my frontend development skills. Explore real-world projects, view detailed case studies, and connect with me seamlessly. Designed for a smooth, engaging experience across all devices.",

    imageUrl: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageHint: "dashboard task management",
    tags: ["React", "Tailwind CSS", "Shadcn UI", "JavaScript" , "React Hook Form" , "Zod" , "Zustand"],
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
  // {
  //   title: "Data Visualization Dashboard",
  //   description: "An interactive dashboard displaying complex datasets using various chart types.",
  //   imageUrl: "https://picsum.photos/600/400?random=4",
  //   imageHint: "charts graphs dashboard",
  //   tags: ["React", "D3.js", "Express", "MongoDB"],
  //   githubUrl: `https://github.com/${githubUsername}`, // Example URL
  //   liveUrl: "#",
  // },
];




// mobile Menu sidebar data 
export const data = {
  title : "Welcome Developer",
  description : " Welcome to my portfolio! I'm a frontend developer passionate about crafting responsive, user-friendly web applications. Here you'll find a collection of my projects, and skills - built with clean code and creative design in mind.",
  btnTitle : "Close Sidebar"
}





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
      "Participated in sprint planning, daily stand-ups, and peer code reviews in an Agile development environment."
    ]
  }
];

