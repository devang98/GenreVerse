# GenreVerse

GenreVerse is an interactive React and Vite website for exploring video game genres through short explanations, visual cards, source-backed taxonomy notes, and lightweight playable mechanic demos.

The project treats genres as gameplay-centered categories. Themes and presentation labels such as horror, fantasy, sandbox, open world, sci-fi, and competitive are stored as searchable tags instead of primary genre entries.

## Features

- Searchable and filterable genre library
- Responsive image-backed hero, genre cards, and detail pages
- 32 curated genre entries, from foundational categories like Platformer and RPG through specialist forms like MOBA, Deck-builder, Shmup, and Auto-battler
- Mini playable demos for core mechanics such as jumping, target clicking, tile swapping, dialogue choices, unit selection, lane changes, timing shots, fighting range control, simulation sliders, soulslike stamina/recovery, deck tuning, resource loops, and formation planning
- Genre detail pages with overview, player fantasy, core mechanics, famous games, subgenres, related tags, and references
- Taxonomy notes page explaining the gameplay-first classification model
- AI genre guide chatbot for genre questions, comparisons, and recommendations
- Accessible keyboard focus states and responsive layouts for mobile, tablet, and desktop

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Lucide React icons
- OpenAI Responses API
- Vercel serverless functions

## Getting Started

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Create a production build:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Chatbot Setup

The floating GenreVerse chatbot uses a Vercel serverless function at `/api/chat` so the OpenAI API key is never exposed in the browser bundle. GitHub Pages can still host the static app, but it cannot securely run the chatbot by itself because it has no private server environment.

For Vercel deployment, set this environment variable:

```sh
OPENAI_API_KEY="your_api_key_here"
```

Optional:

```sh
OPENAI_MODEL="gpt-5-mini"
```

The default model is `gpt-5-mini`. The chat history is stored in browser session storage only.

## Available Scripts

- `npm run dev` starts Vite for local development.
- `npm run build` type-checks the project and builds the production bundle.
- `npm run preview` serves the built app locally.
- `npm run lint` runs ESLint when a compatible ESLint config is present.

## Project Structure

```text
api/
  chat.ts
  genre-context.ts
src/
  components/
    ChatBot.tsx
    GenreCard.tsx
    Layout.tsx
    MiniDemo.tsx
  types/
    chat.ts
  data/
    genres.ts
  pages/
    AboutTaxonomy.tsx
    GenreDetail.tsx
    Home.tsx
  App.tsx
  main.tsx
  styles.css
```

## Data Model

Genre content lives in `src/data/genres.ts`. Each genre includes:

- `id`
- `name`
- `shortDescription`
- `fullDescription`
- `playerFantasy`
- `coreMechanics`
- `famousGames`
- `subgenres`
- `relatedTags`
- `demoType`
- `sourceNotes`
- `accent`
- `imageUrl`

The shared TypeScript shape is defined in `src/types.ts`.

## Routes

- `/` opens the searchable genre library.
- `/genres/:id` opens an individual genre detail page.
- `/about-taxonomy` explains the classification approach.
- Unknown routes redirect to `/404`.

## Sources

The current MVP content was cross-checked against:

- Local `game-genre.pdf`
- Wikipedia: List of video game genres
- MobyGames: Basic Genres taxonomy
- IGDB: Genre directory
- IGDB API docs for possible future enrichment

## Future Improvements

- Add subgenre pages
- Replace static image URLs with a local optimized asset pipeline
- Add richer animation or canvas-based demos
- Add automated visual regression checks for responsive layouts
- Integrate optional IGDB enrichment for game metadata
