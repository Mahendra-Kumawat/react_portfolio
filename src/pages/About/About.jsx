import { useIsVisible } from '@/hooks/ScrollObserver/InVisiableObserver';
import { cn } from '@/lib/utils';
import { aboutSectionData } from '@/constants/CustomData/PortfolioData';
import { useRef } from 'react';

export function AboutSection() {
  const aboutRef = useRef(null);
  const isVisible = useIsVisible(aboutRef);

  console.log(isVisible)
  

  return (
    <section ref={aboutRef} id="about" className="pt-20">
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
        </div>
      </div>

    </section>
  );
}
