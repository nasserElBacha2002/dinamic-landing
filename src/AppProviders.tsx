import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { type ReactNode, useEffect, useState } from 'react';
import App from '@/App';
import { theme } from '@/theme/theme';

export type AppProvidersProps = {
  children?: ReactNode;
};

/**
 * Notifications use portals / browser APIs — mount only after hydration.
 */
function ClientOnlyNotifications() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  if (!ready) return null;
  return <Notifications position="top-right" zIndex={1000} />;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light" forceColorScheme="light">
      <ClientOnlyNotifications />
      {children ?? <App />}
    </MantineProvider>
  );
}
