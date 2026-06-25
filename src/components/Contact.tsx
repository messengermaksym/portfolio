import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "ddcb458f-5f08-46e5-af54-cb21b6767ead";
    formData.append("access_key", accessKey);

    try {
      if (accessKey === "YOUR_ACCESS_KEY_HERE") {
        // Fallback for simulation if key is not configured
        setTimeout(() => {
          setStatus('success');
        }, 1000);
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto border-b utilitarian-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl mb-6">Готові почати?</h2>
          <p className="text-xl text-text-muted mb-8">
            Заповніть форму, і ми зв'яжемося з вами протягом робочого дня, щоб обговорити ваш проєкт.
          </p>
          
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Email</span>
              <a href="mailto:hello@vibeflow.studio" className="text-xl font-semibold hover:text-accent transition-colors">hello@vibeflow.studio</a>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Локація</span>
              <span className="text-xl font-semibold">Львів, Україна</span>
            </div>
          </div>
        </div>

        <div className="utilitarian-card bg-background">
          {status === 'success' ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-10">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl mb-2">Дякуємо!</h3>
              <p className="text-text-muted">Ваша заявка успішно відправлена. Ми скоро зв'яжемося з вами.</p>
              <button 
                onClick={() => setStatus('')}
                className="mt-6 border border-primary text-primary px-6 py-2 uppercase text-sm font-bold hover:bg-primary/5 transition-colors"
              >
                Відправити ще
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Honeypot Spam Protection */}
              <input 
                type="checkbox" 
                name="botcheck" 
                className="hidden" 
                style={{ display: 'none' }} 
              />

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-primary">Ваше ім'я / Компанія</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="border utilitarian-border bg-white p-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Введіть ваше ім'я"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-primary">Email або Telegram</label>
                <input 
                  type="text" 
                  id="email" 
                  name="email" 
                  required
                  className="border utilitarian-border bg-white p-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Як з вами зв'язатися?"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-primary">Коротко про проєкт</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  required
                  className="border utilitarian-border bg-white p-3 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Опишіть вашу задачу..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="bg-accent text-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-orange-600 transition-colors disabled:opacity-70 mt-2"
              >
                {status === 'sending' ? 'Відправка...' : 'Відправити заявку'}
              </button>
              
              {status === 'error' && (
                <p className="text-red-500 text-sm mt-2">Виникла помилка. Спробуйте пізніше або напишіть нам на email.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
