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
import { data } from '@/constants/CustomData/PortfolioData';

const Sidebar = ({ navItems }) => {


  const [openSidebar, setOpenSidebar] = React.useState(false);


  const closeSidebarHandler = () => {
    setOpenSidebar(false);
  }


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
            <SheetTitle>{data.title}</SheetTitle>
            <SheetDescription>
              {
                data.description
              }
            </SheetDescription>
          </SheetHeader>
          {navItems.map(({ route, label }) => (
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
              <Button type="submit">{
                data.btnTitle
              }</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </aside>
  )
}

export default memo(Sidebar)