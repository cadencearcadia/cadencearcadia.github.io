import { useState } from "react";
import { Menu, Home, User, Code, FolderGit2, Mail, Activity } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Home", href: "home", icon: Home },
  { label: "About", href: "about", icon: User },
  { label: "Skills", href: "skills", icon: Code },
  { label: "Projects", href: "projects", icon: FolderGit2 },
  { label: "Contact", href: "contact", icon: Mail },
  { label: "Performance", href: "performance", icon: Activity, isPage: true },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (href: string, isPage?: boolean) => {
    setIsOpen(false);
    
    if (isPage) {
      navigate(`/${href}`);
      return;
    }
    
    if (href === "home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const element = document.querySelector(`#${href}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <span 
          className="text-lg font-bold cursor-pointer"
          onClick={() => handleNavigation("home")}
        >
          Jacob Buck
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="text-sm font-medium"
              onClick={() => handleNavigation(item.href, item.isPage)}
            >
              {item.label}
            </Button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-6">
                <span
                  className="text-xl font-bold cursor-pointer border-b pb-4"
                  onClick={() => handleNavigation("home")}
                >
                  Jacob Buck
                </span>
                <div className="flex flex-col gap-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Button
                        key={item.href}
                        variant="ghost"
                        className="justify-start gap-3 w-full text-base"
                        onClick={() => handleNavigation(item.href, item.isPage)}
                      >
                        <Icon className="h-5 w-5" />
                        {item.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};