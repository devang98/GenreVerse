import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutTaxonomy } from './pages/AboutTaxonomy';
import { GenreDetail } from './pages/GenreDetail';
import { Home } from './pages/Home';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres/:id" element={<GenreDetail />} />
        <Route path="/about-taxonomy" element={<AboutTaxonomy />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Layout>
  );
}

function NotFound() {
  return (
    <section className="mx-auto flex min-h-[58vh] max-w-3xl flex-col justify-center px-5 py-20 text-center">
      <p className="eyebrow mx-auto">Missing page</p>
      <h1 className="mt-4 text-4xl font-black text-slate-950 md:text-6xl">
        This route has not unlocked yet.
      </h1>
      <p className="mt-5 text-lg text-slate-600">
        The genre library has nine playable entries in this MVP. Head back to the library and pick a genre card.
      </p>
    </section>
  );
}
