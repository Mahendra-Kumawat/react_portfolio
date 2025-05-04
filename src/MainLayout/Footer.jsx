import { Code } from "lucide-react";
import Wrapper from "@/components/custom/Container/Wrapper";
import LinAndGit from "@/components/custom/LinAndGitComponents/LinAndGit";


export function Footer() {
  const currentYear = new Date().getFullYear();
  const myName = import.meta.env.VITE_MY_NAME;


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



        {/* this componenets is used for shoe the LinkedIn and Github icons */}
          <LinAndGit />




        </div>
      </Wrapper>

    </footer>
  );
}
