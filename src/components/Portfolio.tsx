
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    client: 'AutoFix Lviv',
    type: 'Landing Page',
    description: 'Редизайн сторінки для локального СТО. Збільшення конверсії заявок на 45% завдяки чіткій структурі та зрозумілим цінам.',
    color: 'bg-primary/5'
  },
  {
    id: 2,
    client: 'Sweet Bakery',
    type: 'Інтернет-магазин',
    description: 'Каталог крафтової випічки з можливістю онлайн-замовлення та інтеграцією з локальною доставкою.',
    color: 'bg-accent/5'
  },
  {
    id: 3,
    client: 'Nails Studio',
    type: 'Сайт-візитка',
    description: 'Елегантний сайт для студії манікюру з інтеграцією онлайн-запису через зовнішню систему бронювання.',
    color: 'bg-text-muted/5'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6 max-w-6xl mx-auto border-b utilitarian-border">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <h2 className="text-4xl">Останні роботи</h2>
        <p className="max-w-md text-text-muted mt-4 md:mt-0">
          Ми пишаємось кожним проєктом. Тут лише деякі з наших нещодавніх робіт для локального бізнесу.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className={`utilitarian-card flex flex-col h-full group ${project.color}`}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted border border-text-muted/30 px-2 py-1">
                {project.type}
              </span>
              <ArrowUpRight className="w-5 h-5 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-2xl mb-3">{project.client}</h3>
            <p className="text-text-muted flex-grow">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
