# Second Brain — Personal Assistant

A 100% free-stack personal life assistant: **tasks, meetings, bazar (shopping) list, monthly dashboard and an AI content studio** for drafting social posts.

## Tech stack (all free tiers)

| Layer | Choice |
| --- | --- |
| Framework | Next.js (App Router) + React 19 + TypeScript |
| Styling / UI | Tailwind CSS v4 + shadcn/ui + Lucide icons |
| Backend / DB / Auth | Supabase (PostgreSQL + Auth) |
| Hosting & Cron | Vercel (Cron triggers `/api/cron/reminders`) |
| Email reminders | Resend (free tier) — wired in Step 5 |
| AI | Groq (Llama 3) or Google Gemini 1.5 Flash — wired in Step 4 |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Supabase env vars (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) will be added in Step 2, when we create the database schema and wire auth.

## Build plan

- [x] **Step 1** — Next.js scaffold, Tailwind v4, shadcn/ui components, sidebar app shell, dashboard skeleton
- [ ] **Step 2** — Supabase SQL schema (`tasks`, `content_drafts`), RLS policies & auth wiring
- [ ] **Step 3** — Task manager, Meetings manager, Bazar list (full CRUD)
- [ ] **Step 4** — AI Content Studio: topic → LinkedIn draft (Groq/Gemini) + one-click copy
- [ ] **Step 5** — `/api/cron/reminders` route + Resend email notifications on Vercel Cron

## Project structure

```
src/
├── app/
│   ├── (dashboard)/          # Authenticated app shell group
│   │   ├── page.tsx          # Dashboard (monthly summary)
│   │   ├── tasks/            # Task manager
│   │   ├── meetings/         # Meeting manager
│   │   ├── shopping/         # Bazar list
│   │   └── content/          # AI content studio
│   ├── api/                  # Route handlers (cron, AI) — added in Steps 4–5
│   ├── globals.css           # Tailwind v4 + shadcn design tokens
│   └── layout.tsx            # Root layout (fonts, Toaster)
├── components/
│   ├── ui/                   # shadcn/ui primitives
│   ├── app-shell.tsx         # Sidebar + mobile drawer shell
│   └── ...                   # Shared components
└── lib/
    ├── nav.ts                # Sidebar navigation config
    ├── supabase/             # Supabase clients — added in Step 2
    └── utils.ts              # cn() helper
```
