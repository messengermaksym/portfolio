

const Footer = () => {
  return (
    <footer className="py-8 px-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
        <div className="mb-4 md:mb-0">
          <span className="font-display font-bold text-primary mr-1">VibeFlow.</span> 
          © {new Date().getFullYear()} Всі права захищені.
        </div>
        <div className="flex gap-4">
          <span>Локально у Львові.</span>
          <span className="hidden md:inline text-primary/30">|</span>
          <span>Працюємо по всій Україні.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
