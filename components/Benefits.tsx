const benefits = [
  {
    title: "15 лет опыта",
    text: "Профессиональный монтаж отопления и водоснабжения «под ключ».",
  },
  {
    title: "Работа по договору",
    text: "Заключаю официальный договор, оплата только после приёмки работ.",
  },
  {
    title: "Гарантия на работы",
    text: "Даю гарантию на выполненные работы и устранение недостатков.",
  },
  {
    title: "Рейтинг 4.9 на Яндексе",
    text: "63 положительные оценки от реальных заказчиков на Яндекс.Услугах.",
  },
  {
    title: "Сам на объекте",
    text: "Без посредников и субподряда — личное качество и ответственность.",
  },
  {
    title: "Выполнено 15+ заказов",
    text: "Честные сроки, чистота на объекте и полное сопровождение проекта.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="font-semibold text-brand-600">Почему я</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Надёжно, точно, с гарантией качества
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-black text-brand-700">
                {i + 1}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{b.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
