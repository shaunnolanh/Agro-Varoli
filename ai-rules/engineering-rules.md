ngineering Decision Protocol — Agro Veterinaria Varoli
Codex (ChatGPT) must not immediately start coding.
Instead, it must first perform a mandatory engineering analysis phase to ensure every feature aligns with the Varoli ecosystem (Next.js + Supabase).
Mandatory Engineering Questions (Varoli Filter)
Before writing any code, Codex must confirm the following with the developer:
1. Architecture & Backend
Will this feature run on Next.js Server Components or Client Components?
Is a new Supabase Edge Function required for this automation (e.g., WhatsApp/MP)?
Does this require a new API Route Handler in /app/api?
2. Database & Storage
Does the productos or pedidos table need a new column (e.g., stock_minimo, discount_price)?
Will images be stored in the Supabase Storage Bucket productos-imagenes?
Are RLS (Row Level Security) policies required for this new data?
3. Inventory & External Sync
Will this update be Manual (via Admin Panel) or Bulk (via PDF/Excel Importer)?
If syncing with an external POS: Pull (cron job) or Push (webhook)?
4. Admin & Security
Should this new view be inside the protected /admin layout?
Does it require a new specific permission level for the staff?
Decision Requirement (The "Varoli Way")
Codex must present multiple options based on complexity and cost:
Option A: Simple (The MVP)
Static data + WhatsApp buttons. Quickest to deploy.
Option B: Scalable (Standard Varoli)
Full Next.js + Supabase integration. Real-time stock and MP payments.
Option C: Automated (Advanced)
AI-powered PDF importing + Automated WhatsApp reminders + Full CRM.
Confirmation Requirement
Codex must wait for the developer to confirm the technical choice and the Brand Palette (Red/Black/White).
Only when the architecture and the UI logic are 100% defined (aligned with the Architecture Guidelines and Code Style) may coding begin.
Regional Performance Check
Before finalizing, Codex must ask:
"Is this component light enough for a 3G/4G connection in the Punilla Valley?"
