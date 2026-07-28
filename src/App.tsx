import { Route, Routes } from 'react-router-dom';
import { SiteLayout } from '@/layouts/SiteLayout';
import { HomePage } from '@/pages/HomePage';

/**
 * App routes. Only `/` is published in Phase 1.
 * Future pages mount under SiteLayout without changing chrome/SEO foundations.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
