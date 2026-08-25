"use client";

import { useState } from "react";

export default function LeadForm({
  title,
  subtitle,
  buttonText = "Получить консультацию",
  compact = false,
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  compact?: boolean;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState(false);

  const validate = () => {
    const phoneDigits = phone.replace(/\D/g, "");
    return name.trim().length > 0 && phoneDigits.length >= 10;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setServerError(false);
    if (!validate()) {
      setError(true);
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
      });
      if (!res.ok) {
        setServerError(true);
        return;
      }
      setSent(true);
    } catch {
      setServerError(true);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <h3 className="text-xl font-bold text-green-800">
          Спасибо! Заявка отправлена
        </h3>
        <p className="mt-2 text-green-700">
          Алексей свяжется с вами в ближайшее время с 9:00 до 22:00.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={compact ? "flex flex-col gap-3" : "space-y-4"}
    >
      {title && (
        <h3 className="text-2xl font-extrabold text-gray-900">{title}</h3>
      )}
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
      <div className={compact ? "grid gap-3 sm:grid-cols-3" : "space-y-4"}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Ваш телефон"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
        />
        <button
          type="submit"
          disabled={sending}
          className="w-full rounded-lg bg-brand-600 px-6 py-3 font-bold text-white transition hover:bg-brand-700 disabled:opacity-60"
        >
          {sending ? "Отправка…" : buttonText}
        </button>
      </div>
      {error && (
        <p className="text-sm text-red-600">
          Пожалуйста, заполните имя и корректный номер телефона.
        </p>
      )}
      {serverError && (
        <p className="text-sm text-red-600">
          Не удалось отправить заявку. Позвоните напрямую или попробуйте ещё
          раз.
        </p>
      )}
      <p className="text-xs text-gray-400">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
      </p>
    </form>
  );
}
