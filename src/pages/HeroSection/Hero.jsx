
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { ArrowDown, } from 'lucide-react';
// import { useIsVisible } from '@/hooks/use-is-visible';
// import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { headlineData } from '@/constants/CustomData/PortfolioData';

import LinAndGit from '@/components/custom/LinAndGitComponents/LinAndGit';


export function HeroSection() {
  const isVisible = true;
  const myName = import.meta.env.VITE_MY_NAME;

  console.log("inside the hero components...")

  return (
    <section id="home" className="relative z-40 pt-14 pb-10 md:pt-10 lg:pt-0 overflow-hidden">

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6  items-center">
        <div className={cn(
          "text-center md:text-left space-y-6 opacity-100",
          isVisible && "animate-fade-in animation-delay-200"
        )}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Hi, I&apos;m {myName}
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0">
            {
              headlineData
            }
          </p>
          <div className="flex justify-center flex-col [@media(min-width:480px)]:flex-row md:justify-start gap-4">
            <Button asChild size="lg">
              <Link to="projects" smooth={true} duration={500} className='cursor-pointer'>View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="contact" smooth={true} duration={500} className='cursor-pointer' >Get In Touch</Link>
            </Button>
          </div>


          {/* this components is used for show the linkedIn and GitHub icons */}
          <LinAndGit />



        </div>
        <div className={cn(
          "relative flex justify-center bg-transparent items-center opacity-100",
          isVisible && "animate-fade-in animation-delay-400"
        )}>
          {/* Placeholder for a professional photo or illustration */}
          <div className="overflow-hidden">
            <img
              src="/images/Heros.png" // Replace with your image path
              alt="Your Name - Professional Photo"
              // width={400}
              // height={400}
              loading='lazy'
              className="object-cover w-full h-full"
              // fetchPriority='high'
              data-ai-hint="professional headshot"
            />
          </div>
        </div>
      </div>
      {/* Subtle animated arrow pointing down */}
      <div className="absolute bottom-0  left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <Link to="about" smooth={true} duration={500} aria-label="Scroll to About section">
          <ArrowDown className="h-6 w-6 hover:cursor-pointer font-bold text-muted-foreground hover:text-primary" />
        </Link>
      </div>
    </section>
  );
}
