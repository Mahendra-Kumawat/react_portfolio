
// import { Award, Briefcase, Users } from 'lucide-react';
// import { useIsVisible } from '@/hooks/use-is-visible';
// import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { aboutSectionData } from '@/constants/CustomData/PortfolioData';

export function AboutSection() {
  // const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = true;
  // Replace with your actual years of experience and number of projects


  // const stats = [
  //   { icon: Award, value: yearsExperience, label: "Years Experience" },
  //   { icon: Briefcase, value: projectsCompleted, label: "Projects Completed" },
  //   { icon: Users, value: happyClients, label: "Happy Clients" },
  // ];

  return (
    <section id="about" className="pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className={cn(
          "relative w-full order-2",
          isVisible && "animate-slide-up animation-delay-200"
        )}>
          <img
            src="/images/Abouts.svg"
            alt="About Me Image"

            className="rounded-lg  object-cover h-full w-full"
            data-ai-hint="person coding working desk"
            loading='lazy'
          />
        </div>
        <div className={cn(
          "space-y-6 text-center md:order-3",
          isVisible && "animate-slide-up animation-delay-400"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
          <p className="text-lg text-primary">
            {
              aboutSectionData
            }
          </p>
          {/* <p className="text-lg text-muted-foreground">
              I thrive on solving complex problems and continuously learning new technologies to build efficient, scalable, and user-friendly solutions. My goal is to leverage my skills to contribute to innovative projects and create impactful digital experiences.
            </p> */}

          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
               {stats.map((stat, index) => (
                 <Card key={index} className="text-center bg-secondary/50 border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-2">
                        <stat.icon className="h-8 w-8 text-primary mx-auto" />
                    </CardHeader>
                   <CardContent>
                     <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                     <p className="text-sm text-muted-foreground">{stat.label}</p>
                   </CardContent>
                 </Card>
               ))}
            </div> */}
        </div>
      </div>

    </section>
  );
}
