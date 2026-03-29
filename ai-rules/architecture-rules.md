Architecture Guidelines — Agro Veterinaria Varoli
ChatGPT (Codex) should prioritize clean, modular, and Type-Safe code to ensure long-term maintainability.
Recommended Frontend
Preferred Stack:
Next.js 14/15 (App Router)
React
Tailwind CSS
Lucide React (for icons)
Codex Implementation Focus:
Use Server Components by default for SEO and performance.
Client Components only for interactive forms (Cart, Login) and modals.
Clean UI following the brand palette: #8B1D1D (Red) and #0A0A0A (Black).
Recommended Backend & Auth
Primary Stack:
Supabase (Auth, Database, and Edge Functions).
Next.js API Routes (Route Handlers) for custom integrations (Mercado Pago Webhooks).
Benefits:
Real-time updates for order status.
Secure, row-level security (RLS) for admin data.
Built-in storage for product images.
Database
Preferred Database:
PostgreSQL (via Supabase).
Schema Standards:
Use Snake Case for column names (created_at, imagen_url).
Ensure all tables have UUIDs as Primary Keys.
Maintain a clear relationship between pedidos (Orders) and productos (Products) using a JSONB column or a join table.
API & Inventory Structure (Varoli Sync)
The architecture must support future synchronization with local agro-veterinary POS systems.
Key Endpoints:
/api/products → GET (Public) / POST (Admin).
/api/stock-update → Critical for syncing with local physical inventory.
/api/mp-webhook → Mercado Pago status updates.
AI Integration (Codex/GPT)
Data Processing:
Use GPT-4o / Codex via OpenAI API for the PDF product importer.
Prompt Logic: Ensure strict JSON output to avoid parsing errors during database insertion.
Deployment & Security
Hosting:
Vercel (Preferred for Next.js).
Security:
All /admin routes must be protected by the middleware.ts logic.
Environment variables (.env.local) must never be committed to Git.
Use httpOnly cookies for admin sessions to prevent XSS attacks.
