"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const enlaces = [
    { href: "/turnos", label: "Turnos" },
    { href: "/tienda", label: "Tienda" },
    { href: "/#contacto", label: "Contacto" },
    { href: "/#equipo", label: "Sobre nosotros" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-[100] px-4 pt-4 sm:px-8">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between rounded-full border border-white/70 bg-white/95 px-4 py-2 shadow-lg backdrop-blur">
        <Link href="/" className="flex items-center gap-3 rounded-3xl px-2 py-1">
          <img src="/logo.png" alt="Agro Veterinaria Varoli" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <p className="font-['Plus_Jakarta_Sans',Inter,sans-serif] text-sm font-bold text-black sm:text-base">
              Agro Veterinaria Varoli
            </p>
            <p className="font-['Plus_Jakarta_Sans',Inter,sans-serif] text-xs text-zinc-600">La Falda, Córdoba</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {enlaces.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="font-['Plus_Jakarta_Sans',Inter,sans-serif] text-sm font-medium text-black transition-colors hover:text-[#8B1D1E]"
            >
              {e.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/turnos"
            className="hidden rounded-full bg-[#8B1D1E] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#741718] sm:inline-flex"
          >
            Sacar turno
          </Link>

          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden rounded-2xl border border-zinc-300 p-2 text-black transition hover:bg-zinc-100"
            aria-label="Abrir menú"
          >
            {menuAbierto ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuAbierto && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-4 pb-4 pt-3 sm:px-6">
          <nav className="flex flex-col gap-2 rounded-3xl border border-zinc-200 bg-white p-3 shadow-sm">
            {enlaces.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                onClick={() => setMenuAbierto(false)}
                className="rounded-2xl px-3 py-2 font-['Plus_Jakarta_Sans',Inter,sans-serif] text-sm font-medium text-black transition hover:bg-zinc-100 hover:text-[#8B1D1E]"
              >
                {e.label}
              </Link>
            ))}
            <Link
              href="/turnos"
              onClick={() => setMenuAbierto(false)}
              className="mt-1 inline-flex justify-center rounded-full bg-[#8B1D1E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#741718]"
            >
              Sacar turno
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
