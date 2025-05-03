import { Code } from "lucide-react";
import { Link } from "react-router";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Wrapper from "@/components/custom/Container/Wrapper";


export function Footer() {
  const currentYear = new Date().getFullYear();

  const githubUsername = import.meta.env.VITE_GITHUB_USER_NAME;
  const myName = import.meta.env.VITE_MY_NAME;
  const linkedinUsername = import.meta.env.VITE_MY_LINKEDIN;
  // const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "your-email@example.com";


  return (
    <footer className="border-t border-border/80">
      <Wrapper>

      <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center px-3 gap-2 text-sm text-muted-foreground">
          <Code className="h-4 w-4 text-primary" />
          <span>
            &copy; {currentYear} {myName}. All rights reserved.
          </span>
        </div>
        <div className="flex justify-center md:justify-start gap-2 pt-4">
          <span className='p-2 rounded-md hover:bg-accent hover:cursor-pointer'>
            <Link to={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <FaGithubSquare className="h-7  w-7 text-muted-foreground hover:text-foreground" />
            </Link>
          </span>

          <span className='p-2 rounded-md hover:bg-accent hover:cursor-pointer'>
            <Link to={`https://linkedin.com/in/${linkedinUsername}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <FaLinkedin className="h-7 w-7 text-muted-foreground hover:text-foreground" />
            </Link>
          </span>

        </div>
      </div>
      </Wrapper>

    </footer>
  );
}
