import React from 'react';

const navItems = ['Turnos', 'Tienda', 'Contacto'];
const beneficios = [
  {
    titulo: 'Atención Profesional',
    imagen: 'https://placehold.co/600x760?text=Atencion+Profesional',
  },
  {
    titulo: 'Productos de Calidad',
    imagen: 'https://placehold.co/600x760?text=Productos+de+Calidad',
  },
  {
    titulo: 'Animales Rurales y Domésticos',
    imagen: 'https://placehold.co/600x760?text=Rurales+y+Domesticos',
  },
];

export default function HomepageVisual() {
  return (
    <div className="bg-[#FFFFFF] text-[#000000] font-['Plus_Jakarta_Sans',Inter,sans-serif]">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="https://placehold.co/1600x1000?text=Agro+Veterinaria+Varoli"
          alt="Veterinaria Agro Veterinaria Varoli"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          <nav className="mx-auto w-full max-w-3xl rounded-full bg-white/90 px-4 py-3 backdrop-blur sm:px-6">
            <ul className="flex items-center justify-between gap-3 text-sm font-medium text-[#000000] sm:text-base">
              {navItems.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto max-w-2xl space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              El bienestar de tu animal, nuestra prioridad
            </h1>
            <button className="inline-flex rounded-2xl bg-[#8B1D1E] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent">
              Sacar turno
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Cuidado profesional para cada animal</h2>
            <p className="text-lg leading-relaxed text-black/75">
              En Agro Veterinaria Varoli te ofrecemos atención veterinaria general, medicación,
              alimentos y accesorios para mascotas domésticas y rurales. Fernando Varoli y su equipo
              están para acompañarte en cada etapa de la vida de tu animal.
            </p>
          </div>
          <img
            src="https://placehold.co/700x900?text=Cuidado+Veterinario"
            alt="Equipo de Agro Veterinaria Varoli"
            className="h-[420px] w-full rounded-3xl object-cover sm:h-[520px]"
          />
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-10 text-3xl font-bold sm:text-4xl">Beneficios</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {beneficios.map((item) => (
              <article key={item.titulo} className="group relative overflow-hidden rounded-3xl border border-black/10">
                <img src={item.imagen} alt={item.titulo} className="h-[420px] w-full object-cover sm:h-[520px]" />
                <div className="absolute inset-x-4 bottom-4 rounded-[48px] bg-white px-6 py-4 shadow-xl">
                  <p className="text-lg font-bold sm:text-2xl">{item.titulo}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-3xl bg-[#1a0506] p-6 text-white sm:p-10 lg:grid-cols-2 lg:items-center lg:p-14">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Estamos disponibles de lunes a sábado</h2>
            <p className="text-lg text-white/90">8:30 a 13:00 y 17:00 a 21:00 — Domingos cerrado</p>
            <p className="text-lg text-white/90">Teléfono: 03548415114</p>
            <p className="text-lg text-white/90">WhatsApp: wa.me/5493548415114</p>
            <a
              href="https://wa.me/5493548415114"
              className="inline-flex rounded-2xl bg-[#8B1D1E] px-8 py-4 text-base font-semibold text-white transition hover:opacity-90"
            >
              Escribinos por WhatsApp
            </a>
          </div>
          <img
            src="https://placehold.co/700x520?text=Contacto+Varoli"
            alt="Atención en Agro Veterinaria Varoli"
            className="h-[320px] w-full rounded-3xl object-cover sm:h-[420px]"
          />
        </div>
      </section>

      <footer className="bg-[#FFFFFF] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Agro Veterinaria Varoli</h3>
            <ul className="space-y-2 text-base text-black/80">
              <li>Turnos</li>
              <li>Tienda</li>
              <li>Contacto</li>
              <li>Sobre nosotros</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Seguinos</h3>
            <p className="text-base text-black/80">Av. España 273, La Falda, Córdoba</p>
            <p className="mt-2 text-base text-black/80">Fernando Varoli</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Canales de atención</h3>
            <p className="text-base text-black/80">Tel: 03548415114</p>
            <a href="https://wa.me/5493548415114" className="mt-2 inline-block text-base font-medium text-[#8B1D1E]">
              WhatsApp directo
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 w-full max-w-7xl border-t border-black/10 pt-6 text-sm text-black/60">
          © Agro Veterinaria Varoli
        </div>
      </footer>
    </div>
  );
}
