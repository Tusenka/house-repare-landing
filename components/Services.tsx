const services = [
  {
    title: "Монтаж газового котла",
    price: "от 15 000 ₽",
    desc: "Установка и подключение газового котла с последующей проверкой работы.",
  },
  {
    title: "Монтаж отопления под ключ",
    price: "по проекту",
    desc: "Проектирование и монтаж системы отопления «под ключ» в частных домах.",
  },
  {
    title: "Сантехнические работы",
    price: "от 3 000 ₽",
    desc: "Разводка труб, замена стояков, монтаж сантехники и смесителей.",
  },
  {
    title: "Монтаж тёплого водяного пола",
    price: "от 7 500 ₽",
    desc: "Сухой и мокрый монтаж тёплого пола, устройство греющего контура.",
  },
  {
    title: "Водоснабжение и канализация",
    price: "от 5 000 ₽",
    desc: "Разводка водоснабжения, монтаж канализации, насосного оборудования.",
  },
  {
    title: "Тепловизионное обследование",
    price: "от 3 500 ₽",
    desc: "Выявление скрытых теплопотерь: стены, окна, тёплый пол. Поиск протечек.",
  },
  {
    title: "Ремонт санузла и коммуникаций",
    price: "от 20 000 ₽",
    desc: "Ремонт санузла, замена и прокладка всех коммуникаций в квартире и доме.",
  },
  {
    title: "Технический надзор",
    price: "от 3 000 ₽/визит",
    desc: "Контроль качества строительных и монтажных работ на вашем объекте.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="font-semibold text-brand-600">Услуги</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Что я выполняю
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Профессионально занимаюсь монтажом отопления и водоснабжения, а
            также комплексным ремонтом и техническим надзором «под ключ».
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm text-gray-600">{s.desc}</p>
              <div className="mt-5 flex items-end justify-between">
                <span className="text-xl font-extrabold text-brand-600">
                  {s.price}
                </span>
                <a
                  href="#order"
                  className="text-sm font-semibold text-brand-700 underline-offset-2 hover:underline"
                >
                  Заказать
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
