import LeadForm from "./LeadForm";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-gray-900 py-16 text-white">
      <div className="container grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold">Контакты</h2>
          <div className="mt-6 space-y-4">
            <div>
              <div className="text-sm text-gray-400">Телефон</div>
              <a
                href="tel:+74950000000"
                className="text-xl font-extrabold hover:text-brand-400"
              >
                +7 (495) 000-00-00
              </a>
            </div>
            <div>
              <div className="text-sm text-gray-400">Время работы</div>
              <p className="font-semibold">Пн–Сб с 9:00 до 21:00</p>
            </div>
            <div>
              <div className="text-sm text-gray-400">Регион</div>
              <p className="font-semibold">
                Москва и Московская область, г. Домодедово
              </p>
            </div>
            <div>
              <div className="text-sm text-gray-400">Яндекс.Услуги</div>
              <p className="font-semibold">
                Профиль: Алексей Владимирович О., рейтинг 4.9 (63 оценки)
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h3 className="text-xl font-bold">
            Оставьте заявку на обратный звонок
          </h3>
          <p className="mt-2 text-sm text-gray-300">
            Выезд специалиста и консультация — бесплатно.
          </p>
          <div className="mt-6">
            <LeadForm
              buttonText="Перезвоните мне"
              compact
            />
          </div>
        </div>
      </div>

      <div className="container mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-gray-400 sm:flex-row">
        <span>© 2026 Алексей Владимирович. Монтаж отопления и водоснабжения.</span>
        <a href="#top" className="hover:text-brand-400">
          Наверх ↑
        </a>
      </div>
    </footer>
  );
}
