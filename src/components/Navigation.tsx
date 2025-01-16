import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ThemeToggle } from "./ThemeToggle";

const menuItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-lg font-bold">React Engineer</span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="text-sm font-medium"
              onClick={() => scrollToSection(item.href)}
            >
              {item.label}
            </Button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col gap-4 mt-8">
              {menuItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className="justify-start"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                </Button>
              ))}
              <ThemeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};