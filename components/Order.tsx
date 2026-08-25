import LeadForm from "./LeadForm";

export default function Order() {
  return (
    <section
      id="order"
      className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 py-16 text-white sm:py-20"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-2xl sm:p-10">
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Бесплатная консультация и расчёт стоимости
            </h2>
            <p className="mt-3 text-gray-600">
              Оставьте заявку — я свяжусь с вами, отвечу на вопросы и подготовлю
              предварительную смету. Это абсолютно бесплатно.
            </p>
          </div>
          <LeadForm
            buttonText="Получить консультацию"
            compact
          />
        </div>
      </div>
    </section>
  );
}
