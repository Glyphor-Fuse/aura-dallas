import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tighter text-white uppercase">
          Aura<span className="text-primary">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Lineup", "VIP", "Gallery", "Events"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white uppercase tracking-widest transition-colors"
            >
              {link}
            </a>
          ))}
          <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-black">
            GUEST LIST
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
           {["Lineup", "VIP", "Gallery", "Events"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-lg font-bold text-white uppercase tracking-widest py-2"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
           <Button className="w-full rounded-none bg-primary text-black">
            JOIN GUEST LIST
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
