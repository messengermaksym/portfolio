import { TrendingUp, ShieldCheck, Cpu, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="w-8 h-8 text-accent" />,
    title: "Нові клієнти та ліди",
    description: "Ваш бізнес стає видимим у Google. Правильна первинна SEO-оптимізація дозволяє залучати клієнтів, які вже шукають ваші послуги чи товари в інтернеті."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: "Довіра та авторитет",
    description: "Сучасний дизайн та бездоганна мобільна версія формують імідж стабільної та серйозної компанії. Сайт працює як ваше цифрове обличчя 24/7."
  },
  {
    icon: <Cpu className="w-8 h-8 text-accent" />,
    title: "Автоматизація процесів",
    description: "Сайт бере на себе рутину: детально розповідає про послуги, відповідає на часті запитання, збирає контакти через форму брифу та надсилає їх вам на email."
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Швидкість та автономність",
    description: "Наші сайти розробляються на чистому коді без громіздких конструкторів. Вони завантажуються миттєво та працюють стабільно за будь-якого навантаження."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 px-6 max-w-6xl mx-auto border-b utilitarian-border">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <div className="max-w-xl">
          <span className="font-display text-accent text-sm tracking-wider uppercase">Результат для бізнесу</span>
          <h2 className="text-3xl md:text-4xl mt-2">Що Ви отримуєте з новим якісним сайтом</h2>
        </div>
        <p className="max-w-md text-text-muted mt-4 md:mt-6">
          Сайт — це не просто картинка в інтернеті. Це інструмент, який має вирішувати конкретні бізнес-задачі та приносити реальний прибуток.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="utilitarian-card flex gap-5 items-start">
            <div className="p-3 border utilitarian-border bg-background shrink-0">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-xl mb-2">{benefit.title}</h3>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
