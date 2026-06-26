

const Hero = () => {
  return (
    <section className="py-12 md:py-20 px-6 max-w-6xl mx-auto border-b utilitarian-border">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
        Створюємо сайти, які <br className="hidden md:inline" /><span className="text-accent italic">працюють</span>.
      </h1>
      <p className="text-xl text-text-muted max-w-2xl mb-8">
        VibeFlow Studio — розробка вебсайтів "під ключ" для українського бізнесу. 
        Ми будуємо цифрові інструменти без зайвої "води". Чітко, швидко, надійно.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#contact" className="text-center bg-accent text-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-orange-600 transition-colors">
          Почати проєкт
        </a>
        <a href="#portfolio" className="text-center border border-primary text-primary px-8 py-4 font-semibold uppercase tracking-wider hover:bg-primary/5 transition-colors">
          Наші роботи
        </a>
      </div>
    </section>
  );
};

export default Hero;
