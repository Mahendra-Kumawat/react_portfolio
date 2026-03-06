import { aboutSectionData } from "@/constants/CustomData/PortfolioData";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <ScrollReveal className="relative w-full order-2" delay={0.1}>
          <img
            src="/images/me.svg"
            alt="About Me Image"
            className="rounded-lg  object-cover h-full w-full"
            data-ai-hint="person coding working desk"
            loading="lazy"
          />
        </ScrollReveal>
        <ScrollReveal className="space-y-6 text-center md:order-3" delay={0.25}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
          <p className="text-lg text-primary">{aboutSectionData}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
