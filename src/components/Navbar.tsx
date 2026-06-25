

const Navbar = () => {
  return (
    <header className="border-b utilitarian-border py-4 px-6 sticky top-0 bg-background z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="font-display font-bold text-xl text-primary tracking-tight">
          VibeFlow<span className="text-accent">.</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-semibold">
          <a href="#services" className="hover:text-accent transition-colors">Послуги</a>
          <a href="#portfolio" className="hover:text-accent transition-colors">Кейси</a>
          <a href="#contact" className="hover:text-accent transition-colors">Бриф</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
