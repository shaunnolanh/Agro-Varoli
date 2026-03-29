Marketplace — Agro Veterinaria Varoli
Objetivo
Agregar una sección de tienda online a la web de Agro Veterinaria Varoli (Next.js + Supabase) para que los clientes reserven productos o compren online y retiren en el local de Av. España.
Flujo del cliente
Cliente entra a /tienda.
Filtra por categorías (Alimentos, Campo, Mascotas, etc.).
Agrega al carrito y hace click en "Confirmar pedido".
Elige: Pago Online (Mercado Pago) o Efectivo al retirar.
Se genera el pedido en Supabase.
Notificación automática por WhatsApp con el detalle del pedido.
Fernando o el personal preparan el pedido y marcan como "Listo" en el panel.
Categorías de productos (Adaptadas)
🌾 Alimentos (Bolsas grandes y fraccionado)
💊 Farmacia Veterinaria
🚜 Herramientas y Campo
🦴 Accesorios y Juguetes
🦟 Antiparasitarios (Pipetas, collares, comprimidos)
🧼 Higiene y Estética
Diseño y Estética (Identidad Varoli)
Cards de productos: Fondo Blanco Puro (#FFFFFF) con bordes suaves en Gris Ceniza (#F4F4F4).
Botones de compra: Rojo Óxido (#8B1D1D) con texto en blanco.
Precios y Títulos: Negro Carbón (#0A0A0A).
Carrito: Icono flotante Rojo Óxido con contador en blanco.
Integración con Mercado Pago
Credenciales (.env.local)
MP_ACCESS_TOKEN=tu_access_token
MP_PUBLIC_KEY=tu_public_key
Configuración de Preferencia
typescript
const preference = {
  // ... items del carrito
  statement_descriptor: "AGRO VAROLI",
  back_urls: {
    success: `${process.env.NEXT_PUBLIC_URL}/tienda/gracias`,
    failure: `${process.env.NEXT_PUBLIC_URL}/tienda/error`
  },
  external_reference: pedidoId
}
Usa el código con precaución.

Importación Inteligente (PDF a Base de Datos)
Para facilitar la carga masiva de la lista de precios de proveedores:
El admin sube el PDF en /admin/tienda.
La API de Claude extrae los datos.
Categorización automática: Claude asignará "Alimentos", "Farmacia", etc., según el nombre del artículo.
Notificaciones WhatsApp (Varoli)
1. Confirmación de Pedido
🛒 ¡Hola {nombre}! Recibimos tu pedido en Agro Veterinaria Varoli.

📦 Detalle:
{lista de items}

💰 Total: ${total}
💳 Pago: {método}
📍 Retiro: Av. España 273, La Falda.

Te avisaremos por aquí cuando tu pedido esté listo para retirar. 🌿
2. Pedido Listo
✅ ¡{nombre}, tu pedido ya está preparado!

Podés pasar a buscarlo por nuestro local:
📍 Av. España 273, La Falda.
🕐 Horarios: Lun a Sáb.

¡Gracias por confiar en nosotros! 🐾
Panel Admin — Gestión de Tienda (/admin/tienda)
Control de Stock: Alerta visual cuando un producto tiene menos de 3 unidades.
Gestión de Pedidos:
Botón "Listo para retirar" (dispara WhatsApp automático).
Botón "Entregado" (finaliza el flujo).
Carga de Imágenes: Drag & drop directo a Supabase Storage.
Checklist de Adaptación
Tabla productos con categorías de agro-veterinaria.
Checkout de Mercado Pago con el nombre "AGRO VAROLI".
Webhook configurado para actualizar estado de pago.
Edge Function de WhatsApp con la dirección de Av. España 273.
Importador de PDF configurado con el prompt de Claude.
Interfaz pública con la paleta Rojo/Negro/Blanco.
