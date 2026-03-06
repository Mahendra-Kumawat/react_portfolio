import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/constants/CustomData/PortfolioData";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

export function SkillsSection() {
  return (
    <section id="skills" className="pt-24">
      <ScrollReveal
        as="h2"
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground"
      >
        My Skills
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
        {skills.map((category, index) => {
          const [, skillArray] = Object.entries(category)[1];
          return (
            <ScrollReveal key={index} delay={0.08 * (index + 1)}>
              <Card className="bg-background shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <CardTitle className="text-xl text-center block font-semibold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {skillArray?.map((skillName) => {
                      return (
                        <Badge
                          key={skillName}
                          variant="secondary"
                          className="text-xs w-full bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 py-2"
                        >
                          {skillName}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
