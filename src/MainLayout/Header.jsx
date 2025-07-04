import React, { useMemo } from "react";
import { Code, User, Mail, FolderGit2, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/custom/Container/Wrapper";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/custom/Mobile-menu-bar/Sidebar";
import { Link } from "react-scroll";
import { NavLink } from "react-router";
import { ThemeToggle } from "@/components/ThemeComponents/ThemeToggler";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = useMemo(
    () => [
      { route: "home", label: "Home" },
      { route: "about", label: "About" },
      { route: "experience", label: "Experience" },
      { route: "skills", label: "Skills" },
      { route: "projects", label: "Projects" },
      { route: "contact", label: "Contact" },
    ],
    []
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/20  border-border/40  backdrop-blur transition-shadow duration-300",
        isScrolled ? "shadow-md" : ""
      )}
    >
      <Wrapper>
        <div className="flex h-16  items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center gap-2 mr-6"
            aria-label="Portfolio Pro Home"
          >
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Mahendra</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems?.map(({ route, label }) => (
              <Button
              
                variant="ghost"
                className="text-sm font-medium text-foreground hover:text-muted-foreground"
                key={route}
                asChild
              >
                <Link
                  smooth={true}
                  duration={500}
                  to={route}
                  className="cursor-pointer"
                >
                  {label}
                </Link>
              </Button>
            ))}
          </nav>

          <div className="flex gap-3">
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sidebar navItems={navItems} />
            </div>

            <div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
