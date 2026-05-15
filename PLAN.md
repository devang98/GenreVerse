# GenreVerse Website Plan

## Summary
Build a React + Vite + TypeScript website based on `agent.md`, using `game-genre.pdf` as the local taxonomy reference and web references from Wikipedia, MobyGames, and IGDB. The current release ships 32 genres with clear explanations, famous game examples, and lightweight interactive mockups that teach the core mechanic.

Sources to reference: `game-genre.pdf` from Wikipedia’s “List of video game genres,” [Wikipedia genre list](https://en.wikipedia.org/wiki/List_of_video_game_genres), [MobyGames genres](https://www.mobygames.com/genre/), [IGDB genres](https://www.igdb.com/genres), and [IGDB API docs](https://api-docs.igdb.com/).

## Key Changes
- Scaffold a Vite React app with TypeScript, TailwindCSS, React Router, and a static data layer.
- Expand the library to 32 gameplay-centered genres, including foundational categories and specialist forms such as MOBA, Deck-builder, Shmup, Trading Card Game, and Auto-battler.
- Each genre page includes: definition, core mechanics, player fantasy, famous games, subgenres/tags, and an interactive mockup.
- Use hybrid data: curated static content for launch, with optional IGDB enrichment designed for a later phase.
- Treat “genre” as gameplay-centered, while marking “sandbox/open world,” “horror,” and similar labels as tags/features rather than primary MVP genres.

## Interfaces And Data
- Add a `genres` data module with fields: `id`, `name`, `shortDescription`, `fullDescription`, `coreMechanics`, `famousGames`, `subgenres`, `relatedTags`, `demoType`, `sourceNotes`.
- Add route structure: `/` for searchable library, `/genres/:id` for detail pages, and optional `/about-taxonomy`.
- Add demo components mapped by `demoType`, using interactive UI/canvas-lite behavior rather than full game engines.
- Demo examples: Platformer jump timing, Shooter target clicking, Puzzle drag/swap, RPG dialogue choice, Strategy unit selection, Racing reaction lane, Sports aim/timing shot, Simulation parameter tuning, Souls Like stamina/recovery, deck tuning, resource loops, and formation planning.

## Test Plan
- Verify all 32 genre cards render with title, description, famous games, and working links.
- Verify every `/genres/:id` route loads directly, handles unknown IDs, and works on mobile.
- Test each interactive mockup with mouse, touch, and keyboard where relevant.
- Check content accuracy against the PDF and cited web references.
- Run build, lint, and responsive visual checks for desktop and mobile.

## Assumptions
- The file named `agent.mb` means the existing `agent.md`.
- Current release prioritizes a polished 32-genre library while leaving room for deeper subgenre pages later.
- “Interactive mockups” still count as playable samples if users can perform the genre’s core action.
- No live IGDB integration is required for MVP; the data shape will leave room for it later.
