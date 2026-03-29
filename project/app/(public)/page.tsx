import Link from "next/link";

export default function HomePage() {
  return (
    <main className="font-['Plus_Jakarta_Sans',Inter,sans-serif] bg-[#FFFFFF] text-[#000000]">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="https://placehold.co/1600x1000"
          alt="Veterinaria atendiendo a un animal"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a0506]/55" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-12">
          <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-center gap-2 rounded-full border border-white/70 bg-white/95 p-2 text-sm font-medium text-[#000000] shadow-lg backdrop-blur sm:justify-between sm:gap-4 sm:px-4">
            <span className="px-3 py-2 font-bold text-[#8B1D1E]">Agro Veterinaria Varoli</span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
              <Link href="/turnos" className="rounded-full px-4 py-2 transition hover:bg-[#8B1D1E]/10">
                Turnos
              </Link>
              <Link href="/tienda" className="rounded-full px-4 py-2 transition hover:bg-[#8B1D1E]/10">
                Tienda
              </Link>
              <Link href="#contacto" className="rounded-full px-4 py-2 transition hover:bg-[#8B1D1E]/10">
                Contacto
              </Link>
            </div>
          </div>

          <div className="mt-auto pb-16 pt-16 sm:pb-20 lg:max-w-2xl lg:pb-24">
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

      <footer className="bg-[#FFFFFF] px-5 pb-10 pt-14 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 rounded-3xl border border-[#000000]/10 bg-[#FFFFFF] p-6 sm:p-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold text-[#000000]">Agro Veterinaria Varoli</h3>
              <p className="mt-3 text-sm text-[#000000]/70">Fernando Varoli</p>
            </div>

            <div>
              <h4 className="text-base font-semibold text-[#000000]">Secciones</h4>
              <div className="mt-4 flex flex-col gap-2 text-sm text-[#000000]/80">
                <Link href="/turnos" className="hover:text-[#8B1D1E]">
                  Turnos
                </Link>
                <Link href="/tienda" className="hover:text-[#8B1D1E]">
                  Tienda
                </Link>
                <Link href="#contacto" className="hover:text-[#8B1D1E]">
                  Contacto
                </Link>
                <Link href="#" className="hover:text-[#8B1D1E]">
                  Sobre nosotros
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-base font-semibold text-[#000000]">Seguinos</h4>
              <p className="mt-3 text-sm text-[#000000]/80">También podés escribirnos por WhatsApp para consultas rápidas.</p>
              <a
                href="https://wa.me/5493548415114"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full border border-[#8B1D1E] px-5 py-2 text-sm font-semibold text-[#8B1D1E] transition hover:bg-[#8B1D1E] hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="border-t border-[#000000]/10 pt-6 text-sm text-[#000000]/60">© Agro Veterinaria Varoli</div>
        </div>
      </footer>
    </main>
  );
}
