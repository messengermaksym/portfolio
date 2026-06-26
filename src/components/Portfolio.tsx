
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    client: 'SmartZona',
    type: 'Ремонт / Сервіс',
    description: 'Ремонт та сервіс телефонів, продаж аксесуарів. Зручний каталог послуг та контактна інформація.',
    color: 'bg-primary/5',
    link: 'https://messengermaksym.github.io/SmartZona/'
  },
  {
    id: 2,
    client: 'AutoClinic',
    type: 'СТО / Автосервіс',
    description: 'Сучасний веб-сайт для автосервісу (СТО). Зручний перелік послуг з обслуговування автомобілів.',
    color: 'bg-accent/5',
    link: 'https://messengermaksym.github.io/AutoClinic/'
  },
  {
    id: 3,
    client: 'ProfiService',
    type: 'Сервісний центр',
    description: 'Професійний ремонт смартфонів, ноутбуків, планшетів та електронних книг.',
    color: 'bg-text-muted/5',
    link: 'https://messengermaksym.github.io/ProfiService/'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 md:py-20 px-6 max-w-6xl mx-auto border-b utilitarian-border">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <h2 className="text-4xl">Останні роботи</h2>
        <p className="max-w-md text-text-muted mt-4 md:mt-0">
          Ми пишаємось кожним проєктом. Тут представлені наші реальні роботи, успішно запущені для користувачів.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`utilitarian-card flex flex-col h-full group hover:border-primary transition-all duration-300 ${project.color} block`}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted border border-text-muted/30 px-2 py-1">
                {project.type}
              </span>
              <ArrowUpRight className="w-5 h-5 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-2xl mb-3">{project.client}</h3>
            <p className="text-text-muted flex-grow">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

