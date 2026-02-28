import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";
import { headlineData } from "@/constants/CustomData/PortfolioData";
import { ScrollReveal } from "@/components/custom/ScrollReveal";

export function HeroSection() {
  const githubUsername = import.meta.env.VITE_GITHUB_USER_NAME;
  const linkedinUsername = import.meta.env.VITE_MY_LINKEDIN_USER_NAME;

  return (
    <section
      id="home"
      className="relative z-40  pt-14 pb-10 md:pt-10 lg:pt-0 overflow-hidden"
    >
      <div className="grid grid-cols-1 pt-10 md:grid-cols-2  gap-6  items-center">
        <ScrollReveal
          className="text-center md:text-left space-y-6 flex flex-col justify-center items-center md:items-start"
          delay={0.1}
        >
          <div className="text-sm relative   text-purple-400 font-bold leading-2 tracking-wide border-[2px] border-purple-400 rounded-lg flex justify-start gap-2 w-fit items-center py-3 px-3 ">
            <span className="h-3 w-3 absolute top-[50%] translate-y-[-50%] animate-ping rounded-full bg-purple-400"></span>
            <span className="h-2 w-2 absolute  translate-y-[-50%] left-[14px] top-[50%] rounded-full bg-purple-400"></span>

            <span className="px-4 pl-5">
              Hi, I am actively seeking new job opportunities.
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl flex flex-col gap-3 leading-20 font-bold tracking-tight text-foreground">
            <div className="flex gap-3">
              <span>Hi, I&apos;m</span>
              <strong className="bg-purple-400 rounded-sm px-2 text-white">
                Mahendra
              </strong>
            </div>
            <span className="bg-purple-400 w-fit text-center rounded-sm px-2 text-white">
              Kumawat
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0">
            {headlineData}
          </p>
          <div className="flex justify-center flex-col [@media(min-width:480px)]:flex-row md:justify-start gap-4">
            <Button asChild size="lg">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                View My Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Get In Touch
              </Link>
            </Button>
          </div>
          <div className="flex justify-center md:justify-start gap-2 pt-4">
            <span className="p-2 rounded-md hover:bg-accent hover:cursor-pointer">
              <NavLink
                to={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithubSquare className="h-7  w-7 text-muted-foreground hover:text-foreground" />
              </NavLink>
            </span>

            <span className="p-2 rounded-md hover:bg-accent hover:cursor-pointer">
              <NavLink
                to={`https://linkedin.com/in/${linkedinUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="h-7 w-7 text-muted-foreground hover:text-foreground" />
              </NavLink>
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal
          className="relative flex justify-center bg-transparent items-center"
          delay={0.25}
        >
          {/* Placeholder for a professional photo or illustration */}
          <div className="overflow-hidden w-xl">
            <img
              src="/images/Young man working with good idea.png" // Replace with your image path
              alt="Your Name - Professional Photo"
              // width={400}
              // height={400}
              loading="lazy"
              className="object-cover w-full h-full"
              // fetchPriority='high'
              data-ai-hint="professional headshot"
            />
          </div>
        </ScrollReveal>
      </div>
      {/* Subtle animated arrow pointing down */}
      <div className="absolute bottom-0  left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <Link
          to="about"
          smooth={true}
          duration={500}
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-6 w-6 hover:cursor-pointer font-bold text-muted-foreground hover:text-primary" />
        </Link>
      </div>
    </section>
  );
}
