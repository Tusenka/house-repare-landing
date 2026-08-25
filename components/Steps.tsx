const steps = [
  {
    title: "Заявка и консультация",
    text: "Вы оставляете заявку — я звоню, выясняю задачу и договариваюсь об осмотре.",
  },
  {
    title: "Выезд на объект",
    text: "Провожу замеры, оцениваю коммуникации и консультирую по материалам.",
  },
  {
    title: "Смета и договор",
    text: "Подготавливаю прозрачную смету и заключаем официальный договор.",
  },
  {
    title: "Монтаж и приёмка",
    text: "Выполняю работы в срок, убираю за собой. Оплата после приёмки работ.",
  },
];

export default function Steps() {
  return (
    <section id="steps" className="bg-gray-900 py-16 text-white sm:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="font-semibold text-brand-400">Как я работаю</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Простой и прозрачный процесс
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-xl font-black">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#order"
            className="inline-block rounded-xl bg-brand-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-brand-700"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  );
}
