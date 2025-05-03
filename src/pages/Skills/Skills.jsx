
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import { Code, Database, Server, Cloud, PencilRuler } from 'lucide-react'; // Example icons
// import { useIsVisible } from '@/hooks/use-is-visible';
// import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { skills } from '@/constants/CustomData/PortfolioData';




export function SkillsSection() {
  // const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = true

  return (
    <section id="skills" className="pt-24">

      <h2 className={cn(
        "text-4xl md:text-5xl font-bold text-center mb-12 text-foreground",
        isVisible && "animate-slide-up"
      )}>
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
        {
          skills.map((category , index) => {
            const [, skillArray] = Object.entries(category)[1];
            return (
              <Card 
              key={index}
              className={
                cn(
                  "bg-background shadow-md hover:shadow-lg transition-shadow duration-300",
                  //  isVisible && `animate-slide-up animation-delay-${200 * (index + 1)}`
                )}>
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  {/* <category.icon className="h-8 w-8 text-primary" /> */}
                  <CardTitle className="text-xl text-center block font-semibold">{
                    category.title
                  }</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {
                      skillArray?.map((skillName) => {
                        return (
                          <Badge key={skillName} variant="secondary" className="text-xs w-full bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 py-2" >
                            {skillName}
                          </Badge>
                        )
                      }
                      )
                    }
                  </div>
                </CardContent>
              </Card>
            )

          }
          )
        }



      </div>

    </section >
  );
}
