import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-slate-50">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="font-['Plus_Jakarta_Sans',Inter,sans-serif] text-lg font-bold text-black">
              Agro Veterinaria Varoli
            </p>
            <nav className="mt-5 flex flex-col gap-2">
              <Link href="/turnos" className="text-sm text-zinc-700 transition hover:text-[#8B1D1E]">
                Turnos
              </Link>
              <Link href="/tienda" className="text-sm text-zinc-700 transition hover:text-[#8B1D1E]">
                Tienda
              </Link>
              <Link href="/#contacto" className="text-sm text-zinc-700 transition hover:text-[#8B1D1E]">
                Contacto
              </Link>
              <Link href="/#equipo" className="text-sm text-zinc-700 transition hover:text-[#8B1D1E]">
                Sobre nosotros
              </Link>
            </nav>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="font-['Plus_Jakarta_Sans',Inter,sans-serif] text-base font-bold text-black">Contacto</p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-zinc-700">
              <p>Av. España 273, La Falda, Córdoba</p>
              <a href="tel:+543548415114" className="transition hover:text-[#8B1D1E]">
                03548415114
              </a>
              <a
                href="https://wa.me/5493548415114"
                className="inline-flex items-center gap-2 transition hover:text-[#8B1D1E]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#8B1D1E]" aria-hidden="true">
                  <path d="M20.52 3.48A11.79 11.79 0 0 0 12.05 0C5.44 0 .05 5.36.02 11.98A11.9 11.9 0 0 0 1.6 17.8L0 24l6.36-1.58a12.01 12.01 0 0 0 5.69 1.45h.01c6.61 0 11.99-5.37 12.02-11.98a11.84 11.84 0 0 0-3.56-8.41ZM12.06 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.77.94 1.01-3.67-.24-.38a9.82 9.82 0 0 1-1.53-5.2c.03-5.44 4.46-9.86 9.9-9.86 2.64 0 5.12 1.03 6.99 2.9a9.8 9.8 0 0 1 2.88 6.97c-.02 5.45-4.45 9.88-9.88 9.88Zm5.42-7.41c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.23-.65.08-.3-.15-1.24-.45-2.36-1.43-.88-.78-1.47-1.73-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.12-.27-.2-.57-.35Z" />
                </svg>
                WhatsApp
              </a>
              <p>Lun-Sáb 8:30-13:00 y 17:00-21:00</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="font-['Plus_Jakarta_Sans',Inter,sans-serif] text-base font-bold text-black">Seguinos</p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#8B1D1E]/30 p-2 text-[#8B1D1E] transition hover:bg-[#8B1D1E] hover:text-white"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.88 3.78-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/peonpets.lafalda"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#8B1D1E]/30 p-2 text-[#8B1D1E] transition hover:bg-[#8B1D1E] hover:text-white"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.95.49 1.37.9.41.42.68.81.9 1.37.16.42.36 1.06.41 2.22.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.05 1.17-.25 1.8-.41 2.22a3.67 3.67 0 0 1-.9 1.37 3.67 3.67 0 0 1-1.37.9c-.42.16-1.06.36-2.22.41-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-1.17-.05-1.8-.25-2.22-.41a3.67 3.67 0 0 1-1.37-.9 3.67 3.67 0 0 1-.9-1.37c-.16-.42-.36-1.06-.41-2.22C2.17 15.58 2.16 15.2 2.16 12c0-3.2.01-3.58.07-4.85.05-1.17.25-1.8.41-2.22.22-.56.49-.95.9-1.37.42-.41.81-.68 1.37-.9.42-.16 1.06-.36 2.22-.41C8.42 2.17 8.8 2.16 12 2.16Zm0-2.16C8.74 0 8.33.01 7.05.07 5.76.13 4.88.34 4.12.64a5.83 5.83 0 0 0-2.1 1.37A5.83 5.83 0 0 0 .65 4.12c-.3.76-.51 1.64-.57 2.93C.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.06 1.29.27 2.17.57 2.93a5.83 5.83 0 0 0 1.37 2.1 5.83 5.83 0 0 0 2.1 1.37c.76.3 1.64.51 2.93.57 1.28.06 1.69.07 4.95.07 3.26 0 3.67-.01 4.95-.07 1.29-.06 2.17-.27 2.93-.57a6 6 0 0 0 3.47-3.47c.3-.76.51-1.64.57-2.93.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.06-1.29-.27-2.17-.57-2.93a5.83 5.83 0 0 0-1.37-2.1A5.83 5.83 0 0 0 19.88.65c-.76-.3-1.64-.51-2.93-.57C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm7.84-10.41a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-5 text-center">
          <p className="text-xs text-zinc-600">© Agro Veterinaria Varoli • Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
