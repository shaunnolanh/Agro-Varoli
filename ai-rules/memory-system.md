Memory System — Agro Veterinaria Varoli
This project uses a structured memory system to track important decisions and brand identity.
Codex (ChatGPT) must maintain absolute awareness of the Varoli Brand Book and the confirmed technical stack during the entire development process.
Purpose
The memory system ensures that Codex does not propose architecture changes (like switching to Firebase) or UI changes (like using Green instead of Red) that contradict the established foundation for Agro Veterinaria Varoli.
Memory Categories (Current Status: Varoli)
Codex must track and respect the following information:
Project Type: Agro-Veterinary Ecosystem
Client: Fernando Varoli.
Location: Av. España 273, La Falda, Córdoba.
Contact: 03548-415114 (No E-mail).
Technology Stack (Confirmed)
Frontend: Next.js 14/15 (App Router).
Backend: Supabase (Auth, RLS, Edge Functions).
Database: PostgreSQL (Supabase).
Payments: Mercado Pago Checkout Pro.
AI: OpenAI API (GPT-4o/Codex) for PDF processing.
Visual Identity (Confirmed)
Primary Color: #8B1D1D (Rojo Óxido).
Backgrounds: #FFFFFF (Blanco) / #F4F4F4 (Gris Ceniza).
Typography/UI: #0A0A0A (Negro Carbón) / #444A4A (Gris Pizarra).
Inventory & Admin
Method: Manual Admin Updates + AI PDF Importer.
Admin Panel: Custom built at /admin (Protected by middleware).
Memory Behavior Rules
Codex must:
Keep Consistency: Always use the Varoli palette in every new component.
Contextual Awareness: Remember that there are no specialties (only General Consultation).
Data Integrity: Follow the snake_case naming convention for Supabase tables.
Efficiency: Avoid asking for the phone number or address again; they are fixed.
Change Management
If the developer (you) changes a previously confirmed technical or brand decision, Codex must:
Acknowledge: "Entendido, actualizando la paleta/lógica de Varoli".
Update: Modify the internal project memory immediately.
Propagate: Apply the change to all future code generation (e.g., if you change the primary Red, all new buttons must use the new Hex).
Context Persistence
When starting a new session or a complex task, Codex should briefly summarize the "Varoli Core" to ensure the memory is active:
"Trabajando en Agro Veterinaria Varoli | Next.js + Supabase | Rojo Óxido #8B1D1D"
