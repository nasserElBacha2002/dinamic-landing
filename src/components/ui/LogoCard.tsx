import { Box, Image, Paper, Text } from '@mantine/core';
import { useState } from 'react';
import type { Client } from '@/types/content';
import classes from '@/components/ui/LogoCard.module.css';

interface LogoCardProps {
  client: Client;
}

export function LogoCard({ client }: LogoCardProps) {
  const [broken, setBroken] = useState(false);

  return (
    <Paper
      radius="xl"
      p="md"
      withBorder
      h={128}
      className={classes.card}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {!broken ? (
        <Image
          src={client.logo}
          alt={`Logo ${client.name}`}
          fit="contain"
          mah={48}
          maw="90%"
          loading="lazy"
          decoding="async"
          onError={() => setBroken(true)}
        />
      ) : (
        <Box ta="center" px="xs">
          <Text fz="xs" c="dimmed" fw={800} tt="uppercase" style={{ letterSpacing: '-0.02em' }}>
            {client.name}
          </Text>
          <Text fz={10} c="dimmed" mt={4}>
            TODO: agregar {client.logoFile} en src/assets/logos/
          </Text>
        </Box>
      )}
    </Paper>
  );
}
