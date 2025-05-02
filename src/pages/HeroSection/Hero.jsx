
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { ArrowDown, } from 'lucide-react';
// import { useIsVisible } from '@/hooks/use-is-visible';
// import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export function HeroSection() {
  const isVisible = true;
  const myName = import.meta.env.VITE_MY_NAME;
  const githubUsername = import.meta.env.VITE_GITHUB_USER_NAME;
  const linkedinUsername = import.meta.env.VITE_MY_LINKEDIN;



  return (
    <section id="home" className="relative pt-14 md:pt-0 overflow-hidden">

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6  items-center">
        <div className={cn(
          "text-center md:text-left space-y-6 opacity-100",
          isVisible && "animate-fade-in animation-delay-200"
        )}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Hi, I&apos;m {myName}
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0">
            A passionate Full-Stack Developer crafting modern, interactive web experiences.
          </p>
          <div className="flex justify-center flex-col [@media(min-width:480px)]:flex-row md:justify-start gap-4">
            <Button asChild size="lg">
              <Link to="projects" smooth={true} duration={500} className='cursor-pointer'>View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="contact" smooth={true} duration={500} className='cursor-pointer' >Get In Touch</Link>
            </Button>
          </div>
          <div className="flex justify-center md:justify-start gap-2 pt-4">
              <span className='p-2 rounded-md hover:bg-accent '>
              <Link to={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <FaGithubSquare className="h-7  w-7 text-muted-foreground hover:text-foreground" />
              </Link>
              </span>
           
           <span className='p-2 rounded-md hover:bg-accent'>
              <Link to={`https://linkedin.com/in/${linkedinUsername}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <FaLinkedin className="h-7 w-7 text-muted-foreground hover:text-foreground" />
              </Link>
           </span>
           
          </div>
        </div>
        <div className={cn(
          "relative flex justify-center items-center opacity-100",
          isVisible && "animate-fade-in animation-delay-400"
        )}>
          {/* Placeholder for a professional photo or illustration */}
          <div className="overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border-background">
            <img
              src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?t=st=1746182024~exp=1746185624~hmac=87bd88f7843114e32752c6f832b8b7f9499987926022afabdb2cb2d505a8d280&w=740"
              alt="Your Name - Professional Photo"
              // width={400}
              // height={400}
              className="object-cover w-full h-full aspect-[4/5]"
              // fetchPriority='high'
              data-ai-hint="professional headshot"
            />
          </div>
        </div>
      </div>

      {/* Subtle animated arrow pointing down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <Link to="about" aria-label="Scroll to About section">
          <ArrowDown className="h-6 w-6 font-semibold text-muted-foreground hover:text-primary" />
        </Link>
      </div>
    </section>
  );
}
