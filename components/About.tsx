const reviews = [
  {
    name: "Игорь, Московская область",
    text: "Алексей установил газовый котёл и сделал разводку отопления в частном доме. Работает аккуратно, всё объясняет, убрал за собой. Рекомендую.",
  },
  {
    name: "Марина, г. Домодедово",
    text: "Искала сантехника для ремонта ванной. Всё сделано качественно по смете, без доплат. Приятно иметь дело с профессионалом.",
  },
  {
    name: "Сергей",
    text: "Заказывал тепловизионное обследование. Быстро нашёл все точки теплопотерь, дал понятные рекомендации по утеплению. Отличный специалист.",
  },
];

export default function About() {
  return (
    <section id="reviews" className="bg-gray-50 py-16 sm:py-20">
      <div className="container">
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="font-semibold text-brand-600">О специалисте</p>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                Алексей Владимирович
              </h2>
              <p className="mt-4 text-gray-700">
                Монтаж отопления и водоснабжения — моя специализация. Более 15
                лет я выполняю профессиональный монтаж систем «под ключ» в
                частных домах и квартирах Москвы и Московской области.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-brand-600">●</span> Образование:
                  ПТУ №201, специальность «сварщик»
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-brand-600">●</span> Время связи:
                  ежедневно с 9:00 до 22:00
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-brand-600">●</span> Паспорт
                  проверен, работаю по договору и с гарантией
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-brand-600">●</span> Выезды в
                  Домодедово и по области
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex text-xl text-amber-500">
                  {"★★★★★".slice(0, 5)}
                </div>
                <span className="font-bold text-gray-900">4.9</span>
                <span className="text-gray-500">• 63 оценки</span>
              </div>
              <div className="space-y-4">
                {reviews.map((r) => (
                  <div key={r.name} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                    <div className="font-bold text-gray-900">{r.name}</div>
                    <p className="mt-2 text-sm text-gray-700">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
