import { Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

/**
 * Shared chrome for all public pages. Header/Footer live only here.
 */
export function SiteLayout() {
  return (
    <Box component="div" className="ds-bg-page" style={{ overflowX: 'hidden' }}>
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
