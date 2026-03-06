import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithubSquare } from "react-icons/fa";
import { projects } from "@/constants/CustomData/PortfolioData";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="pt-24">
      <ScrollReveal
        as="h2"
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground"
      >
        My Projects
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects?.map((project, index) => (
          <ScrollReveal key={project.title} delay={0.08 * (index + 1)}>
            <Card className="bg-background overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col pt-0">
              <div className="relative w-full h-52 sm:h-60 md:h-64">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover object-center h-full w-full"
                  loading="lazy"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground pt-1 flex-grow">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-bold pb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row  justify-end gap-2 pt-4">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full  sm:w-fit"
                  >
                    <Link
                      to={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithubSquare className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="w-full sm:w-fit"
                  >
                    <Link
                      to={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
