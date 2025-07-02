# prode-pad

A sample Next.js application with Tailwind CSS and Supabase.

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/prode-pad.git
cd prode-pad
npm install
```

Copy `.env.local.example` to `.env.local` and replace the placeholder values
with your Supabase project credentials:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and fill in the real `NEXT_PUBLIC_SUPABASE_URL` and
`NEXT_PUBLIC_SUPABASE_ANON_KEY` values.

Run the development server:

```bash
npm run dev
```

The app should now be available at [http://localhost:3000](http://localhost:3000).

## Deployment

This project can be deployed directly to [Vercel](https://vercel.com/):

1. Push your repository to GitHub or another Git provider.
2. Sign in to Vercel and import the repository.
3. In the Vercel dashboard, add the `NEXT_PUBLIC_SUPABASE_URL` and
   `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment variables.
4. Trigger a new deployment and Vercel will build and host the application.
