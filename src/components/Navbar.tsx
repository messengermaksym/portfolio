

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="border-b utilitarian-border py-4 px-6 sticky top-0 bg-background z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="font-display font-bold text-xl text-primary tracking-tight">
          VibeFlow<span className="text-accent">.</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold">
          <a href="#services" className="hover:text-accent transition-colors">Послуги</a>
          <a href="#portfolio" className="hover:text-accent transition-colors">Кейси</a>
          <a href="#contact" className="hover:text-accent transition-colors">Бриф</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-1 text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-[100%] left-0 right-0 border-b utilitarian-border bg-background px-6 py-4 flex flex-col gap-4 text-sm font-semibold shadow-lg">
          <a href="#services" onClick={closeMenu} className="hover:text-accent transition-colors py-2 border-b border-primary/5">Послуги</a>
          <a href="#portfolio" onClick={closeMenu} className="hover:text-accent transition-colors py-2 border-b border-primary/5">Кейси</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-accent transition-colors py-2">Бриф</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
