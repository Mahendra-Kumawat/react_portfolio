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
import { Link } from 'react-router';

const Sidebar = ({ navItems }) => {


  const [openSidebar, setOpenSidebar] = React.useState(false);


  const closeSidebarHandler = () => {
    setOpenSidebar(false);
  }


  console.log("inside the sidebar")

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
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          {navItems.map((item) => (
            <Button
            onClick={closeSidebarHandler}
            variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground" key={item.label} asChild>
              <Link to={item.href}>
                {item.label}
              </Link>
            </Button>
          ))}

          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </aside>
  )
}

export default memo(Sidebar)