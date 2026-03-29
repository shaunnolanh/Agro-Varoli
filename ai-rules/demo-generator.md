Demo Website Generator — Agro Veterinaria Varoli
Codex must support the generation of demo websites for commercial presentations within the Varoli business ecosystem.
These demo websites allow Fernando Varoli or the development team to show realistic examples to potential clients (other branches, partners, or local agro-businesses) before deploying a full production service.
Purpose
Demo websites should simulate a real business environment for presentation purposes.
The objective is to use Codex to quickly generate visually complete examples using Next.js + Tailwind that can be fully functional with Supabase later.
Supported Demo Types (Agro-Focus)
Codex should be able to generate demos for:
Agro Veterinaria (Focus on field animals & pharmacy)
Pet Shop & Peluquería (Focus on small animals & grooming)
Ferretería Rural (Tools and fencing)
Corralón de Campo (Bulk materials and tanks)
Tienda de Semillas y Forrajes
Farmacia Veterinaria Especializada
Demo Structure (Varoli Standard)
Each demo website generated must include:
Home Page: Hero section with Red/Black branding.
Product Catalog: Sample grid with 4-6 products.
Service List: Simple cards (Vaccination, Consulting).
Location Map: Placeholder for La Falda / Valle Hermoso.
Contact Form: Next.js client-side form.
WhatsApp Bridge: Functional button to a demo number.
Demo Content Strategy
Codex should generate placeholder content that looks realistic for the Córdoba region.
Example: "Agro-Servicios Punilla"
"Líderes en insumos para el productor de las sierras"
Demo Services:
Venta de fardos y forrajes.
Instrumental para inseminación.
Farmacia mayorista.
Reparto a campo.
Demo Visual Design (Brand Consistency)
Demo websites must:
Use the Brand Palette: #8B1D1D (Red) for primary actions.
Be Mobile Friendly: Farmers often check stock from their phones.
Include Sample Images: Use Unsplash or placeholders for cows, dogs, and tools.
Maintain High Contrast: Clean White background for readability.
Demo Naming Convention
Examples:
demo-varoli-agro-central
demo-varoli-petshop-express
demo-varoli-herramientas-punilla
Customization Phase (Transition to Production)
Once a client or branch approves the demo:
Identity: Swap placeholders for the real logo and owner name.
Data: Connect the products table in Supabase.
Contact: Update the WhatsApp API string with the real 03548 number.
Payment: Switch Mercado Pago from Sandbox to Production mode.
