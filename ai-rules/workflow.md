Codex Workflow — Agro Veterinaria Varoli
Codex must follow a strict development workflow to ensure all new features or sub-sites integrate perfectly with the Next.js + Supabase stack.
Step 1 — Request Analysis (Varoli Context)
Codex analyzes the request and identifies:
Scope: Is it a new feature for the main Vet or a new landing for a branch?
Business Category: Agro, Pet Shop, or Rural Tools?
Core Needs: Appointment booking, stock update, or payment integration?
Step 2 — Engineering Questions (The Filter)
Codex asks specific technical questions based on our Engineering Decision Protocol:
"¿Requiere una nueva columna en la tabla productos de Supabase?"
"¿Se usará una Edge Function para el envío de WhatsApp?"
"¿Cómo impacta esto en la velocidad de carga en zonas rurales?"
Step 3 — Architecture Proposal (Varoli Standard)
Codex proposes a system architecture aligned with the Architecture Guidelines:
Frontend: Next.js App Router (Server Components).
Backend: Supabase Auth + RLS.
Database: PostgreSQL (Snake Case).
Design: Paleta Rojo Óxido #8B1D1D y Negro Carbón #0A0A0A.
Step 4 — Confirmation (The Pause)
Codex must wait for your confirmation before generating any code. This prevents "code hallucination" or using non-compatible libraries.
Step 5 — Implementation (Codex Mode)
Only after your "OK", Codex begins generating the code following the Code Style Guidelines:
Clean, modular components.
Type-safe (TypeScript).
Performance-focused (No unnecessary packages).
Step 6 — Testing and Review (Varoli Quality)
Codex verifies the output against our Product Design Principles:
Clarity: Are the buttons big and red?
Simplicity: Is the /admin flow under 3 clicks?
Performance: Is the image optimization correctly applied for 3G/4G?
Consistency: Does it use Fernando Varoli's contact info correctly?
