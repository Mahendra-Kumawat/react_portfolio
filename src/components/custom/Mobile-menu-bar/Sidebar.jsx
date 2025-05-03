import React, { memo } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter
} from "@/components/ui/sheet";
import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

const Sidebar = ({ navItems }) => {


  const [openSidebar, setOpenSidebar] = React.useState(false);


  const closeSidebarHandler = () => {
    setOpenSidebar(false);
  }


  console.log("inside the sidebar")


  console.log(navItems)

  return (
    <aside>
      <Sheet open={openSidebar} onOpenChange={setOpenSidebar} >
        <SheetTrigger asChild>
          <Button variant="outline" className="cursor-pointer">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Welcome Developer</SheetTitle>
            <SheetDescription>
            Welcome to my portfolio! I'm a frontend developer passionate about crafting responsive, user-friendly web applications. Here you'll find a collection of my projects, and skills - built with clean code and creative design in mind.
            </SheetDescription>
          </SheetHeader>
          {navItems.map(({route , label}) => (
            <Button
            onClick={closeSidebarHandler}
            variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground" key={route} asChild>
              <Link to={route} smooth={true} duration={500} className='cursor-pointer'>
                {label} 
              </Link>
            </Button>
          ))}

          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Close Sidebar</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </aside>
  )
}

export default memo(Sidebar)