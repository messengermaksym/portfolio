import { LayoutTemplate, FileText, Rocket } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Landing Page',
    description: 'Односторінковий сайт для презентації конкретної послуги, продукту чи заходу. Ідеально для швидкого та яскравого старту в мережі.',
    icon: <LayoutTemplate className="w-8 h-8 text-accent" />
  },
  {
    id: '02',
    title: 'Сайт-візитка',
    description: 'Компактний веб-сайт на кілька сторінок із ключовою інформацією про вас, ваші послуги, прайс та контакти для зв\'язку.',
    icon: <FileText className="w-8 h-8 text-accent" />
  },
  {
    id: '03',
    title: 'Корпоративний сайт',
    description: 'Повноцінне представництво вашого бізнесу. Багатосторінкова структура, опис послуг, блоки переваг та розширена форма брифу.',
    icon: <Rocket className="w-8 h-8 text-accent" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20 px-6 max-w-6xl mx-auto border-b utilitarian-border">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <h2 className="text-4xl">Послуги</h2>
        <p className="max-w-md text-text-muted mt-4 md:mt-0">
          Ми робимо фокус на результаті. Обирайте формат, який відповідає вашим бізнес-задачам сьогодні.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="utilitarian-card flex flex-col h-full group">
            <div className="flex justify-between items-start mb-6">
              <span className="font-display font-bold text-3xl text-primary/30 group-hover:text-primary transition-colors">
                {service.id}
              </span>
              {service.icon}
            </div>
            <h3 className="text-xl mb-3">{service.title}</h3>
            <p className="text-text-muted flex-grow">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
