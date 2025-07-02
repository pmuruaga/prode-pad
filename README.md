# prode-pad

A sample Next.js application with Tailwind CSS and Supabase.

## Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Copy `.env.local.example` to `.env.local` and replace the placeholder values
with your Supabase project credentials:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and fill in the real `NEXT_PUBLIC_SUPABASE_URL` and
`NEXT_PUBLIC_SUPABASE_ANON_KEY` values.
