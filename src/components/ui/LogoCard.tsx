import { Box, Image, Paper, Text } from '@mantine/core';
import { useState } from 'react';
import type { Client } from '@/types/content';

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
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.22s ease',
      }}
      styles={{
        root: {
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 28px rgba(2, 6, 23, 0.1)',
          },
        },
      }}
    >
      {!broken ? (
        <Image
          src={client.logo}
          alt={`Logo ${client.name}`}
          fit="contain"
          mah={48}
          maw="90%"
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
