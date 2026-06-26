import { Users, Code2, Target } from 'lucide-react';

// const stats = [
//   { value: "5+", label: "Років у розробці" },
//   { value: "50K+", label: "Рядків коду" },
//   { value: "100%", label: "Унікальність" }
// ];

const values = [
  {
    icon: <Users className="w-5 h-5 text-accent" />,
    title: "Чесний підхід",
    text: "Не обіцяємо неможливого, не продаємо непотрібного. Пропонуємо рішення, які реально підходять вашому масштабу бізнесу."
  },
  {
    icon: <Code2 className="w-5 h-5 text-accent" />,
    title: "Чистий код та швидкість",
    text: "Ніяких важких шаблонів чи конструкторів. Пишемо оптимізований код, що забезпечує швидке завантаження сайту."
  },
  {
    icon: <Target className="w-5 h-5 text-accent" />,
    title: "Фокус на результаті",
    text: "Сайт створюється для продажів або іміджу. Кожна кнопка, форма та блок розташовані для досягнення конверсії."
  }
];

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-6 max-w-6xl mx-auto border-b utilitarian-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Heading and Stats */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="font-display text-accent text-sm tracking-wider uppercase">Хто ми є</span>
            <h2 className="text-3xl md:text-4xl mt-2 mb-6">Команда VibeFlow Studio</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Ми — невелика, але згуртована команда розробників та дизайнерів. Ми допомагаємо локальним українським бізнесам переходити в онлайн та отримувати з цього прибуток.
            </p>
            <p className="text-text-muted leading-relaxed">
              Не використовуємо готові громіздкі конструктори типу WordPress чи Tilda, якщо проєкт потребує гнучкості та унікальності. Натомість ми створюємо швидкі, адаптивні рішення на сучасних веб-технологіях, які служать роками і не потребують дорогої підтримки.
            </p>
          </div>

          {/* <div className="grid grid-cols-3 gap-4 mt-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="font-display text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Right Column: Values / Philosophy */}
        <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
          <h3 className="font-display text-lg text-primary mb-2 uppercase tracking-wide">Наші принципи в роботі:</h3>
          <div className="space-y-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 border utilitarian-border bg-white hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 border utilitarian-border bg-background rounded-sm">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-display text-primary">{value.title}</h4>
                </div>
                <p className="text-text-muted text-sm md:text-base leading-relaxed pl-1">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
