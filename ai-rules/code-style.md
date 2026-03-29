Code Style Guidelines — Agro Veterinaria Varoli
Code must prioritize maintainability, simplicity, and type safety for the Varoli ecosystem.
Naming Conventions
Use clear descriptive names in English (standard for code) or Spanish if it refers to specific business logic of the Veterinary.
Examples:
getProducts
updateStockVaroli
createOrder
confirmTurno
Rule: Avoid unclear abbreviations. Use productId instead of pId.
File Structure (Next.js App Router)
Projects must follow a modular structure compatible with Codex:
/app (Pages and Layouts)
/components (UI, Forms, Shared)
/lib (Supabase client, Utils)
/api (Route Handlers / Webhooks)
/hooks (Custom React hooks)
/admin (Protected dashboard logic)
Comments
Important logic (especially in Edge Functions or Price Calculations) must include comments explaining:
Purpose: Why this function exists.
Behavior: What it returns or modifies.
Assumptions: E.g., "Assumes price is in ARS".
Readability
Code must prioritize readability over cleverness. Since Codex generates the code, ensure the prompts ask for:
Functional components.
Clear separation of concerns.
Early returns to avoid deep nesting.
Future developers (or Fernando's team) must easily understand the code.
Performance (Varoli Speed)
Agro-Veterinaria users often have unstable mobile connections in rural areas.
No Bloat: Avoid unnecessary dependencies.
Image Optimization: Always use next/image for product photos.
Server First: Prefer Server Components to reduce the JavaScript bundle.
Lightweight: Keep the code lean to ensure fast loading in La Falda and surroundings.
Database & Types
TypeScript: Use Interfaces/Types for all Supabase tables (Producto, Pedido, Turno).
Safety: Always check for null or undefined when fetching from the database.
