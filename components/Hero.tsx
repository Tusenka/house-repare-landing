const trustBadges = [
  { title: "15+ лет", text: "опыта работы" },
  { title: "4.9 / 63", text: "оценки на Яндекс.Услугах" },
  { title: "Гарантия", text: "по договору" },
  { title: "Договор", text: "и чек" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gray-900 text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #334155 100%)",
        }}
      />
      <div className="container relative py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-1.5 text-sm font-semibold text-brand-300">
            Работаю по Москве и Московской области
          </p>
          <h1 className="text-3xl font-black leading-tight sm:text-5xl">
            Монтаж отопления и водоснабжения{" "}
            <span className="text-brand-400">под ключ</span> с гарантией по
            договору
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Алексей Владимирович — специалист с 15-летним опытом. Сантехника,
            монтаж отопления, тепловизионное обследование, ремонт и технический
            надзор. Решаю задачи с первого замера до запуска системы.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#order"
              className="rounded-xl bg-brand-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700"
            >
              Рассчитать стоимость
            </a>
            <a
              href="#works"
              className="rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition hover:border-white"
            >
              Смотреть работы
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {trustBadges.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="text-2xl font-extrabold text-brand-400">
                  {b.title}
                </div>
                <div className="mt-1 text-sm text-gray-400">{b.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
