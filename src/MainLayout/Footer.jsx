import { Code } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";


export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const githubUsername = import.meta.env.VITE_GITHUB_USER_NAME;
  const myName  = import.meta.env.VITE_MY_NAME;
  const linkedinUsername = import.meta.env.VITE_MY_LINKEDIN;
  // const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "your-email@example.com";


  return (
    <footer className="border-t border-border/80">
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Code className="h-4 w-4 text-primary" />
          <span>
            &copy; {currentYear} {myName}. All rights reserved.
          </span>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="40" asChild>
            <Link href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <FaGithubSquare className="h-10 w-10 text-muted-foreground hover:text-foreground" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={`https://linkedin.com/in/${linkedinUsername}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <FaLinkedin className="h-8 w-8 text-muted-foreground hover:text-foreground " />
            </Link>
          </Button>
          {/* <Button variant="ghost" size="icon" asChild>
             <Link href={`mailto:${emailAddress}`} aria-label="Email Me">
               <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
             </Link>
           </Button> */}
        </div>
      </div>
    </footer>
  );
}
