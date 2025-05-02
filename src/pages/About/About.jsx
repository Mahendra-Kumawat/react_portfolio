
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Briefcase, Users } from 'lucide-react';
// import { useIsVisible } from '@/hooks/use-is-visible';
// import { useRef } from 'react';
import { cn } from '@/lib/utils';

export function AboutSection() {
  // const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = true;
  // Replace with your actual years of experience and number of projects
  const yearsExperience = "3+";
  const projectsCompleted = "10+";
  const happyClients = "5+"; // Example stat

  const stats = [
    { icon: Award, value: yearsExperience, label: "Years Experience" },
    { icon: Briefcase, value: projectsCompleted, label: "Projects Completed" },
    { icon: Users, value: happyClients, label: "Happy Clients" },
  ];

  return (
    <section  id="about" className="py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "relative w-full",
            isVisible && "animate-slide-up animation-delay-200"
          )}>
             <img
               src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?t=st=1746182024~exp=1746185624~hmac=87bd88f7843114e32752c6f832b8b7f9499987926022afabdb2cb2d505a8d280&w=740"
               alt="About Me Image"
              
               className="rounded-lg smd:hadow-md object-cover aspect-[4/5]"
               data-ai-hint="person coding working desk"
             />
          </div>
          <div className={cn(
            "space-y-6",
             isVisible && "animate-slide-up animation-delay-400"
          )}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
            <p className="text-lg text-primary">
            I am a dedicated and results-oriented Full-Stack Developer with {yearsExperience} years of experience in designing, developing, and deploying high-quality web applications. My expertise spans across front-end technologies like React and Next.js, back-end development with Node.js, and database management.
            </p>
            {/* <p className="text-lg text-muted-foreground">
              I thrive on solving complex problems and continuously learning new technologies to build efficient, scalable, and user-friendly solutions. My goal is to leverage my skills to contribute to innovative projects and create impactful digital experiences.
            </p> */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
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
            </div>
          </div>
        </div>
     
    </section>
  );
}
