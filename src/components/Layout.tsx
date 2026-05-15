import { Gamepad2, Library, ScrollText } from 'lucide-react';
import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#09090b] text-slate-200">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <NavLink className="flex items-center gap-3 font-display font-black uppercase tracking-widest text-white" to="/">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-white text-[#09090b]">
              <Gamepad2 size={22} aria-hidden="true" />
            </span>
            <span>GenreVerse</span>
          </NavLink>

          <div className="flex items-center gap-1">
            <NavLink
              className={({ isActive }) => `nav-button ${isActive ? 'nav-button-active' : ''}`}
              to="/"
            >
              <Library size={18} aria-hidden="true" />
              <span>Library</span>
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-button ${isActive ? 'nav-button-active' : ''}`}
              to="/about-taxonomy"
            >
              <ScrollText size={18} aria-hidden="true" />
              <span>Taxonomy</span>
            </NavLink>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Curated library: 32 gameplay-centered genres with playable mechanic samples.</p>
          <p>References: local PDF, Wikipedia, MobyGames, and IGDB.</p>
        </div>
      </footer>
    </div>
  );
}
