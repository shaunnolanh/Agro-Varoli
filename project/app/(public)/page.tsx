import Link from "next/link";

export default function HomePage() {
  return (
    <main className="font-['Plus_Jakarta_Sans',Inter,sans-serif] bg-[#FFFFFF] text-[#000000]">
      <header className="sticky top-0 z-50 border-b border-[#000000]/10 bg-[#FFFFFF]/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
          <span className="text-base font-bold text-[#000000] sm:text-lg">Agro Veterinaria Varoli</span>

          <nav className="hidden items-center gap-2 md:flex">
            <Link href="/turnos" className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-[#8B1D1E]/10">
              Turnos
            </Link>
            <Link href="/tienda" className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-[#8B1D1E]/10">
              Tienda
            </Link>
            <Link href="#contacto" className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-[#8B1D1E]/10">
              Contacto
            </Link>
            <Link href="#" className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-[#8B1D1E]/10">
              Sobre nosotros
            </Link>
            <Link
              href="/turnos"
              className="ml-2 rounded-full bg-[#8B1D1E] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#751718]"
            >
              Sacar turno
            </Link>
          </nav>

          <details className="relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center rounded-xl border border-[#000000]/15 p-2 text-[#000000]">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="sr-only">Abrir menú</span>
            </summary>
            <div className="absolute right-0 mt-2 flex w-56 flex-col gap-1 rounded-3xl border border-[#000000]/10 bg-white p-3 shadow-lg">
              <Link href="/turnos" className="rounded-xl px-3 py-2 text-sm hover:bg-[#8B1D1E]/10">
                Turnos
              </Link>
              <Link href="/tienda" className="rounded-xl px-3 py-2 text-sm hover:bg-[#8B1D1E]/10">
                Tienda
              </Link>
              <Link href="#contacto" className="rounded-xl px-3 py-2 text-sm hover:bg-[#8B1D1E]/10">
                Contacto
              </Link>
              <Link href="#" className="rounded-xl px-3 py-2 text-sm hover:bg-[#8B1D1E]/10">
                Sobre nosotros
              </Link>
              <Link href="/turnos" className="mt-2 rounded-full bg-[#8B1D1E] px-4 py-2 text-center text-sm font-semibold text-white">
                Sacar turno
              </Link>
            </div>
          </details>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden">
        <img
          src="https://placehold.co/1600x1000"
          alt="Veterinaria atendiendo a un animal"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a0506]/55" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-16 pt-24 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="mt-auto lg:max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              El bienestar de tu animal, nuestra prioridad
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/90 sm:text-lg">
              Atención veterinaria y asesoramiento cercano para mascotas domésticas y animales rurales en La Falda.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/turnos"
                className="rounded-full bg-[#8B1D1E] px-7 py-3 text-base font-semibold text-white shadow-lg shadow-[#8B1D1E]/40 transition hover:bg-[#751718]"
              >
                Sacar turno
              </Link>
              <a
                href="https://wa.me/5493548415114"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/80 px-6 py-3 text-base font-medium text-white transition hover:bg-white/15"
              >
                Escribinos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B1D1E]">About</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#000000] sm:text-4xl">
              Cuidado profesional para cada animal
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#000000]/75 sm:text-lg">
              En Agro Veterinaria Varoli te ofrecemos atención veterinaria general, medicación, alimentos y accesorios
              para mascotas domésticas y rurales. Fernando Varoli y su equipo están para acompañarte en cada etapa de
              la vida de tu animal.
            </p>
          </div>
          <img
            src="https://placehold.co/900x1100"
            alt="Mascota en consulta veterinaria"
            className="h-[420px] w-full rounded-3xl object-cover sm:h-[520px]"
          />
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B1D1E]">Beneficios</p>
          <h2 className="mt-4 text-3xl font-bold text-[#000000] sm:text-4xl">Atención integral para tu animal</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                label: "Atención Profesional",
                image: "https://placehold.co/900x700",
                alt: "Profesional veterinario atendiendo",
              },
              {
                label: "Productos de Calidad",
                image: "https://placehold.co/900x700",
                alt: "Productos veterinarios",
              },
              {
                label: "Animales Rurales y Domésticos",
                image: "https://placehold.co/900x700",
                alt: "Animal rural y mascota doméstica",
              },
            ].map((item) => (
              <article key={item.label} className="relative overflow-hidden rounded-3xl border border-[#000000]/10">
                <img src={item.image} alt={item.alt} className="h-72 w-full object-cover sm:h-80" />
                <div className="absolute inset-x-4 bottom-4 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#000000] shadow md:text-base">
                  {item.label}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#FFFFFF] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 rounded-3xl bg-[#1a0506] p-6 text-white sm:p-10 lg:grid-cols-2 lg:items-center lg:p-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Contacto</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Estamos disponibles de lunes a sábado
            </h2>
            <ul className="mt-6 space-y-3 text-base text-white/90 sm:text-lg">
              <li>📍 Av. España 273, La Falda, Córdoba</li>
              <li>🕒 8:30 a 13:00 y 17:00 a 21:00 — Domingos cerrado</li>
              <li>☎️ 03548415114</li>
              <li>💬 wa.me/5493548415114</li>
            </ul>
            <a
              href="https://wa.me/5493548415114"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#8B1D1E] px-7 py-3 text-base font-semibold text-white transition hover:bg-[#751718]"
            >
              Hablar por WhatsApp
            </a>
          </div>
          <img
            src="https://placehold.co/900x700"
            alt="Equipo de Agro Veterinaria Varoli"
            className="h-[300px] w-full rounded-3xl object-cover sm:h-[360px]"
          />
        </div>
      </section>

      <footer className="bg-slate-50 px-5 pb-8 pt-14 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-7xl rounded-3xl border border-[#000000]/10 bg-white p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold text-[#000000]">Agro Veterinaria Varoli</h3>
              <div className="mt-4 flex flex-col gap-2 text-sm text-[#000000]/80">
                <Link href="/turnos" className="hover:text-[#8B1D1E]">Turnos</Link>
                <Link href="/tienda" className="hover:text-[#8B1D1E]">Tienda</Link>
                <Link href="#contacto" className="hover:text-[#8B1D1E]">Contacto</Link>
                <Link href="#" className="hover:text-[#8B1D1E]">Sobre nosotros</Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#000000]">Contacto</h4>
              <ul className="mt-4 space-y-2 text-sm text-[#000000]/80">
                <li>Av. España 273, La Falda, Córdoba</li>
                <li>03548415114</li>
                <li>
                  <a href="https://wa.me/5493548415114" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#8B1D1E] hover:underline">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M20.52 3.48A11.83 11.83 0 0012.04 0C5.55 0 .24 5.3.24 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.42-1.68a11.78 11.78 0 005.62 1.43h.01c6.49 0 11.8-5.3 11.8-11.84 0-3.16-1.23-6.13-3.33-8.43ZM12.05 21.7h-.01a9.8 9.8 0 01-4.99-1.37l-.36-.21-3.8.99 1.01-3.7-.24-.38a9.84 9.84 0 01-1.53-5.2c0-5.44 4.44-9.87 9.91-9.87a9.8 9.8 0 019.9 9.87c0 5.44-4.45 9.87-9.89 9.87Zm5.42-7.39c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.76.98-.93 1.18-.17.2-.34.22-.63.07-.3-.15-1.24-.46-2.35-1.48a8.8 8.8 0 01-1.62-2.01c-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.57-.49-.5-.67-.5h-.58c-.2 0-.52.08-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.45 1.07 2.86 1.22 3.06.15.2 2.1 3.24 5.1 4.54.71.3 1.27.49 1.7.62.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.44.25-.71.25-1.33.17-1.46-.08-.12-.28-.2-.58-.35Z" />
                    </svg>
                    wa.me/5493548415114
                  </a>
                </li>
                <li>Lun-Sáb 8:30-13:00 y 17:00-21:00</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#000000]">Seguinos</h4>
              <div className="mt-4 flex items-center gap-3">
                <a href="#" className="rounded-full border border-[#8B1D1E]/20 p-2 text-[#8B1D1E] transition hover:bg-[#8B1D1E]/10" aria-label="Facebook">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.17 8.44 9.94v-7.03H7.9v-2.9h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.25.2 2.25.2v2.47H15.2c-1.25 0-1.64.78-1.64 1.58v1.9h2.8l-.45 2.9h-2.35V22c4.78-.77 8.44-4.92 8.44-9.94Z" />
                  </svg>
                </a>
                <a href="#" className="rounded-full border border-[#8B1D1E]/20 p-2 text-[#8B1D1E] transition hover:bg-[#8B1D1E]/10" aria-label="Instagram">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2Zm-.2 1.9A3.65 3.65 0 003.9 7.55v8.9a3.65 3.65 0 003.65 3.65h8.9a3.65 3.65 0 003.65-3.65v-8.9a3.65 3.65 0 00-3.65-3.65h-8.9Zm9.65 1.5a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4ZM12 7a5 5 0 110 10 5 5 0 010-10Zm0 1.9a3.1 3.1 0 100 6.2 3.1 3.1 0 000-6.2Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-[#000000]/10 pt-6 text-sm text-[#000000]/60">
            © Agro Veterinaria Varoli • Todos los derechos reservados
          </div>
        </div>
      </footer>
    </main>
  );
}
