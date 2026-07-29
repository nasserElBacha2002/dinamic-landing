import { Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ScrollToHash } from '@/components/navigation/ScrollToHash';

/**
 * Shared chrome for all public pages. Header/Footer live only here.
 */
export function SiteLayout() {
  return (
    <Box component="div" className="ds-bg-page" style={{ overflowX: 'hidden' }}>
      <ScrollToHash />
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
