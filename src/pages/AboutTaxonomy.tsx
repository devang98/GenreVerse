import { ExternalLink } from 'lucide-react';
import { sourceLinks } from '../data/genres';

export function AboutTaxonomy() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <p className="eyebrow">Taxonomy notes</p>
      <h1 className="mt-4 text-4xl font-black text-slate-950 md:text-6xl">
        Genres here are gameplay-first.
      </h1>
      <div className="mt-8 grid gap-6 text-lg leading-8 text-slate-700">
        <p>
          This MVP follows the common design distinction that video game genres are primarily
          classified by how they play. That is why Platformer, Shooter, Puzzle, RPG, Strategy,
          Racing, Sports, and Simulation are treated as first-class library entries.
        </p>
        <p>
          Labels such as horror, fantasy, sandbox, open world, sci-fi, and competitive are useful,
          but they usually describe theme, structure, presentation, or mode. The app stores them as
          related tags so a later version can support richer browsing without flattening everything
          into one confusing list.
        </p>
      </div>

      <div className="mt-10 grid gap-4">
        {sourceLinks.map((source) => (
          <article className="source-row" key={source.label}>
            <div>
              <p className="text-sm font-black text-slate-950">{source.label}</p>
              <p className="mt-1 text-sm text-slate-600">
                Used to cross-check genre naming, classification, and future data-enrichment options.
              </p>
            </div>
            {source.url && (
              <a className="icon-link" href={source.url} rel="noreferrer" target="_blank">
                <ExternalLink size={18} aria-hidden="true" />
                <span className="sr-only">Open source</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
