import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Чи буде сайт після розробки відображатися в Google?',
    answer: 'Так, звичайно. При розробці ми закладаємо базову технічну SEO-оптимізацію: підключаємо Google Search Console, генеруємо карту сайту (sitemap.xml) та файл robots.txt, а також додаємо правильну ієрархію мета-тегів (title, description, H1-H6). Окрім цього, ми оптимізуємо швидкість завантаження сайту, що є одним із ключових факторів для алгоритмів Google.'
  },
  {
    question: 'Чи буде сайт коректно відображатися на мобільних телефонах?',
    answer: 'Абсолютно. Сьогодні більше 70% користувачів заходять на сайти з мобільних пристроїв. Ми розробляємо інтерфейси за принципом Mobile-First — сайт автоматично підлаштовується під будь-які екрани (смартфони, планшети, ноутбуки) та зберігає повну зручність інтерфейсу та швидкість роботи.'
  },
  {
    question: 'З чого розпочати розробку сайту?',
    answer: 'Усе починається з обговорення вашої ідеї. Спочатку ми проводимо безкоштовну консультацію (онлайн чи у Львові), де обговорюємо завдання вашого бізнесу. Потім ви заповнюєте бриф (його можна знайти нижче на цій сторінці), після чого ми формуємо комерційну пропозицію, затверджуємо структуру сайту та підписуємо договір.'
  },
  {
    question: 'Скільки часу займає створення сайту?',
    answer: 'Терміни напряму залежать від обсягу роботи та типу сайту. Односторінковий сайт (Landing Page) ми створюємо за 5-7 робочих днів. Розробка корпоративного сайту чи інтернет-магазину займає від 14 до 25 робочих днів. Ми фіксуємо терміни перед початком і суворо їх дотримуємося.'
  },
  {
    question: 'Етапи створення сайту',
    answer: 'Наш процес прозорий та складається з 5 кроків: 1) Аналітика, дослідження ринку та написання ТЗ; 2) Створення дизайну та затвердження стилістики; 3) Якісна адаптивна верстка та програмування; 4) Тестування швидкості, адаптивності та наповнення контентом; 5) Запуск сайту на вашому домені та передача всіх доступів.'
  },
  {
    question: 'Умови оплати',
    answer: 'Стандартні умови співпраці — передоплата 50% перед початком розробки дизайну та структури, і решта 50% після фінального тестування сайту та здачі проєкту перед перенесенням його на ваш домен. Для масштабних проєктів можливий розподіл оплати на 3-4 етапи відповідно до виконаних кроків.'
  },
  {
    question: 'Чи є підтримка сайту?',
    answer: 'Так, ми не залишаємо клієнтів сам на сам із новим сайтом. Після запуску проєкту ми надаємо 30 днів безкоштовної технічної підтримки для виправлення можливих нюансів чи консультацій з вашого боку. Надалі ви можете замовити регулярну підтримку (оновлення контенту, моніторинг безпеки) або звертатися до нас разово.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 max-w-4xl mx-auto border-b utilitarian-border">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 border utilitarian-border bg-white rounded-full text-xs font-display text-accent mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>F.A.Q.</span>
        </div>
        <h2 className="text-3xl md:text-4xl mb-4">Часті питання</h2>
        <p className="text-text-muted max-w-xl mx-auto">
          Відповіді на запитання, які найчастіше виникають у наших клієнтів перед початком розробки сайту.
        </p>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border utilitarian-border bg-white transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left font-display font-medium text-sm md:text-base text-primary hover:bg-background/50 transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-[500px] border-t utilitarian-border' : 'max-h-0'
                }`}
              >
                <div className="p-5 text-sm md:text-base text-text-muted leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
