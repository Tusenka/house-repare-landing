"use client";

import { useState } from "react";

const navItems = [
  { href: "#services", label: "Услуги" },
  { href: "#prices", label: "Цены" },
  { href: "#works", label: "Работы" },
  { href: "#steps", label: "Как работаю" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-600 text-lg font-black text-white">
            АВ
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold text-gray-900">
              Алексей Владимирович
            </div>
            <div className="text-xs text-gray-500">
              Отопление и водоснабжение
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition hover:text-brand-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+74950000000"
            className="text-sm font-extrabold text-gray-900"
          >
            +7 (495) 000-00-00
          </a>
          <a
            href="#order"
            className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-700"
          >
            Вызвать мастера
          </a>
        </div>

        <button
          className="rounded p-2 text-gray-800 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="container flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-gray-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+74950000000"
              className="mt-2 text-lg font-extrabold text-gray-900"
            >
              +7 (495) 000-00-00
            </a>
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-brand-600 px-5 py-3 text-center font-bold text-white"
            >
              Вызвать мастера
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
