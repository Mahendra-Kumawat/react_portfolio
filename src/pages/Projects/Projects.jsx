
import {Link} from "react-router";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
// import { useIsVisible } from '@/hooks/use-is-visible';
// import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { FaGithubSquare } from "react-icons/fa";



const githubUsername = import.meta.env.VITE_GITHUB_USER_NAME;

console.log(githubUsername)

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, user authentication, and a secure checkout process.",
    imageUrl: "https://picsum.photos/600/400?random=1",
    imageHint: "online shopping website",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    githubUrl: `https://github.com/${githubUsername}`, // Example URL
    liveUrl: "#", // Replace with actual live URL if available
  },
  {
    title: "Task Management App",
    description: "A collaborative tool for teams to manage tasks, track progress, and communicate effectively.",
    imageUrl: "https://picsum.photos/600/400?random=2",
    imageHint: "dashboard task management",
    tags: ["React", "Firebase", "Node.js", "Material UI"],
    githubUrl: `https://github.com/${githubUsername}`, // Example URL
    // liveUrl: "#",
  },
  {
    title: "Portfolio Website V1",
    description: "My previous portfolio website, built to showcase earlier projects and skills.",
    imageUrl: "https://picsum.photos/600/400?random=3",
    imageHint: "developer portfolio website",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
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

export function ProjectsSection() {
  // const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = true;

  return (
    <section  id="projects" className="py-24">
    
         <h2 className={cn(
           "text-4xl md:text-5xl font-bold text-center mb-12 text-foreground opacity-100",
           isVisible && "animate-slide-up"
         )}>
           My Projects
         </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className={cn(
                "bg-background overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col opacity-100",
                 isVisible && `animate-slide-up animation-delay-${200 * (index + 1)}`
              )}>
              <div className="relative w-full h-48 md:h-56">
                 <img
                   src={project.imageUrl}
                   alt={project.title}
                   className="object-cover h-full w-full"
                   

                  //  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   data-ai-hint={project.imageHint}
                 />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground pt-1 flex-grow">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 pt-4">
                {project.githubUrl && (
                  
                  <Button variant="outline" size="sm" asChild>
                    <Link to={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithubSquare className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="default" size="sm" asChild>
                    <Link to={project.liveUrl} target="_blank" rel="noopener noreferrer">
                       <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      
    </section>
  );
}
