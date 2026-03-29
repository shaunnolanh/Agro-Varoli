Panel de Administración — Agro Veterinaria Varoli
Objetivo
Crear una sección /admin dentro de la web existente (Next.js + Supabase) que permita a Fernando Varoli y al personal de la veterinaria gestionar los turnos. Esta sección debe ser invisible para los clientes y accesible solo con contraseña.
Acceso y seguridad
Credenciales
Configuradas en .env.local:
ADMIN_USER=admin
ADMIN_PASSWORD=agroveterinaria2026
ADMIN_SESSION_SECRET=una_clave_random_larga_de_32_caracteres
Cómo funciona el login
URL: /admin/login
Genera cookie admin_session firmada con jose o jsonwebtoken.
Duración: 8 horas, httpOnly.
Protección de rutas
Middleware en middleware.ts para interceptar /admin:
typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
  const isLoginPage = request.nextUrl.pathname === '/admin/login'
  const session = request.cookies.get('admin_session')

  if (isAdminRoute && !isLoginPage && !session) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }
}

export const config = {
  matcher: ['/admin/:path*']
}
Usa el código con precaución.

Seguridad adicional
No indexar: export const metadata = { robots: 'noindex, nofollow' } en el layout.
Rate limiting: Máximo 5 intentos por IP cada 10 minutos.
Estructura de páginas
/admin/login    → Pantalla de acceso
/admin          → Dashboard (Turnos del día)
/admin/historial → Turnos pasados y cancelados
Diseño del panel (Paleta Varoli)
Basado en la identidad visual de la marca:
Fondo principal: Blanco Puro (#FFFFFF)
Fondo secundario/Tarjetas: Gris Ceniza (#F4F4F4)
Acentos/Botones CTA: Rojo Óxido (#8B1D1D)
Navbar/Textos: Negro Carbón (#0A0A0A)
Iconos/Subtítulos: Gris Pizarra (#444A4A)
Vista de turnos
Tabla simplificada para consulta general:
Campo	Descripción
Fecha y hora	Del turno
Dueño	Nombre + Apellido
Mascota	Nombre y especie
Motivo	Consulta general u otros
WhatsApp	Botón directo a wa.me/5493548415114
Estado	Badge: pendiente (amarillo), confirmado (verde), cancelado (rojo)
Acciones	Confirmar / Cancelar
Acciones y Automatizaciones
Confirmar turno
Al confirmar, se dispara la notificación de WhatsApp:
"¡Hola {nombre}! Tu turno para {mascota} en Agro Veterinaria Varoli ha sido confirmado. ¡Te esperamos!"
Cancelar turno
Si se cancela, se envía el siguiente mensaje:
❌ Hola {nombre}, lamentablemente tuvimos que cancelar el turno 
de {mascota} del {fecha} a las {hora}.

Por favor comunicate con nosotros para reprogramarlo:
📍 Av. España 273, La Falda
💬 WhatsApp: 03548 415114
Lógica del recordatorio
Más de 2 horas antes: Recordatorio automático vía cron.
Menos de 2 horas (Confirmación tardía): Envío inmediato al confirmar.
Mensaje de recordatorio:
🔔 ¡Hola {nombre}! Te recordamos tu turno de hoy a las {hora} 
en Agro Veterinaria Varoli.

🐾 Mascota: {mascota}
📍 Av. España 273, La Falda.
Checklist de entrega
/admin/login con clave agroveterinaria2026.
Dashboard con colores Rojo Óxido y Negro Carbón.
Tabla de turnos con acceso directo a WhatsApp.
Botones de confirmar/cancelar.
Lógica de recordatorios (2hs o inmediato).
Configuración de SEO noindex en el panel.
Formulario público apuntando a Av. España 273.
