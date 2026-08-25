const works = [
  {
    title: "Монтаж газового котла",
    price: "15 000 ₽",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Тепловизионная проверка дома",
    price: "7 000 ₽",
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Поиск протечки тёплого пола",
    price: "7 500 ₽",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Ремонт санузла с заменой коммуникаций",
    price: "20 000 ₽",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Капитальный ремонт квартиры",
    price: "200 000 ₽",
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Обшивка дома сайдингом",
    price: "280 000 ₽",
    color: "from-amber-500 to-yellow-600",
  },
];

export default function Works() {
  return (
    <section id="works" className="bg-white py-16 sm:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="font-semibold text-brand-600">Примеры работ</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Выполненные проекты
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Часть заказов, выполненных для частных домов и квартир в Москве и
            Московской области.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <div
              key={w.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-lg"
            >
              <div
                className={`flex h-40 items-center justify-center bg-gradient-to-br ${w.color} p-4`}
              >
                <svg
                  className="h-14 w-14 text-white/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between gap-2 p-5">
                <h3 className="text-sm font-bold text-gray-900">{w.title}</h3>
                <span className="shrink-0 text-lg font-extrabold text-brand-600">
                  {w.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
