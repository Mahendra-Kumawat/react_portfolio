
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Server, Cloud, PencilRuler } from 'lucide-react'; // Example icons
// import { useIsVisible } from '@/hooks/use-is-visible';
// import { useRef } from 'react';
import { cn } from '@/lib/utils';

const skills = ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "Shadcn UI"]

export function SkillsSection() {
  // const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = true

  return (
    <section id="skills" className="py-24">
    
        <h2 className={cn(
            "text-4xl md:text-5xl font-bold text-center mb-12 text-foreground",
            isVisible && "animate-slide-up"
          )}>
            My Skills
          </h2>
        <div className="grid grid-cols-1 ">
          
            <Card className={cn(
                "bg-background shadow-md hover:shadow-lg transition-shadow duration-300",
                //  isVisible && `animate-slide-up animation-delay-${200 * (index + 1)}`
              )}>
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                {/* <category.icon className="h-8 w-8 text-primary" /> */}
                <CardTitle className="text-xl text-center block font-semibold">Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm w-full bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 py-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          
        </div>
    
    </section>
  );
}
