
import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
// import { useIsVisible } from '@/hooks/use-is-visible';
// import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { FaGithubSquare } from "react-icons/fa";
import { projects } from "@/constants/CustomData/PortfolioData";


export function ProjectsSection() {
  // const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = true;

  return (
    <section id="projects" className="pt-24">

      <h2 className={cn(
        "text-4xl md:text-5xl font-bold text-center mb-12 text-foreground opacity-100",
        isVisible && "animate-slide-up"
      )}>
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects?.map((project, index) => (
          <Card key={project.title} className={cn(
            "bg-background overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col pt-0 opacity-100",
            isVisible && `animate-slide-up animation-delay-${200 * (index + 1)}`
          )}>
            <div className="relative w-full h-52 sm:h-60 md:h-64">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover object-center h-full w-full"
                loading="lazy"

                //  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={project.imageHint}
              />
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground pt-1 flex-grow">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="font-bold pb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row  justify-end gap-2 pt-4">
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild className="w-full  sm:w-fit">
                  <Link to={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              )}
              {project.liveUrl && (
                <Button variant="default" size="sm" asChild className="w-full sm:w-fit">
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
