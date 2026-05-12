import { Box, Grid, Group, Paper, Text, ThemeIcon, rem } from '@mantine/core';
import { IconShieldLock, IconView360 } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import droneWarehouseUrl from '@/assets/images/drone-warehouse.svg?url';

export function DroneInventorySection() {
  return (
    <Box component="section" bg="#020617" c="white" style={{ overflow: 'hidden' }}>
      <Grid gutter={0}>
        <Grid.Col span={{ base: 12, lg: 6 }} pos="relative" mih={{ base: rem(360), lg: rem(620) }}>
          <Box pos="absolute" inset={0} aria-hidden>
            <Box
              component="img"
              src={droneWarehouseUrl}
              alt=""
              w="100%"
              h="100%"
              style={{ objectFit: 'cover', opacity: 0.55 }}
            />
            {/* TODO: replace drone-warehouse.svg with a licensed drone-in-warehouse photo in src/assets/images/ */}
            <Box
              pos="absolute"
              inset={0}
              style={{
                background: 'linear-gradient(90deg, #020617 0%, rgba(2,6,23,0.2) 55%, rgba(2,6,23,0) 100%)',
              }}
            />
          </Box>
          <Box pos="absolute" inset={0} style={{ display: 'grid', placeItems: 'center' }} aria-hidden>
            <Box
              w={rem(320)}
              h={rem(320)}
              style={{
                borderRadius: 999,
                border: '1px solid rgba(0,218,243,0.22)',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Box
                w={rem(260)}
                h={rem(260)}
                style={{
                  borderRadius: 999,
                  border: '2px solid rgba(0,218,243,0.35)',
                  borderTopColor: 'transparent',
                  animation: 'ds-spin 12s linear infinite',
                }}
              />
            </Box>
          </Box>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 6 }} p={{ base: 'xl', md: '4rem' }}>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
            <Group gap="md" mb="xl">
              <Box w={48} h={2} bg="cyan.5" />
              <Text tt="uppercase" size="xs" fw={800} c="cyan.4" style={{ letterSpacing: '0.28em' }}>
                Servicio tecnológico complementario
              </Text>
            </Group>
            <Text
              component="h2"
              fz={{ base: rem(40), md: rem(52) }}
              fw={800}
              lh={1.05}
              mb="xl"
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              Inventario aéreo{' '}
              <Text component="span" inherit c="cyan.4" style={{ fontStyle: 'italic' }}>
                autónomo
              </Text>
            </Text>
            <Text fz={{ base: 'md', md: 'xl' }} c="gray.4" fw={500} lh={1.75} maw={rem(560)} mb="xl">
              Solución complementaria para depósitos, racks y posiciones en altura. Incorporamos drones autónomos para
              relevar ubicaciones logísticas, capturar etiquetas y reducir la exposición operativa en zonas elevadas.
            </Text>

            <Grid gutter="lg">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Paper p="xl" radius="2rem" bg="rgba(255,255,255,0.05)" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  <ThemeIcon variant="transparent" color="cyan" size={52} radius="md">
                    <IconView360 stroke={1.25} />
                  </ThemeIcon>
                  <Text fw={800} fz="lg" mt="md" mb="xs">
                    Escaneo de posiciones
                  </Text>
                  <Text fz="sm" c="gray.5" fw={500} lh={1.65}>
                    Asociación ubicación-producto y lectura de etiquetas con alta precisión.
                  </Text>
                </Paper>
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Paper p="xl" radius="2rem" bg="rgba(255,255,255,0.05)" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  <ThemeIcon variant="transparent" color="brand" size={52} radius="md">
                    <IconShieldLock stroke={1.25} />
                  </ThemeIcon>
                  <Text fw={800} fz="lg" mt="md" mb="xs">
                    Reducción de exposición
                  </Text>
                  <Text fz="sm" c="gray.5" fw={500} lh={1.65}>
                    Minimiza el riesgo humano en tareas de altura mediante relevamiento aéreo.
                  </Text>
                </Paper>
              </Grid.Col>
            </Grid>
          </motion.div>
        </Grid.Col>
      </Grid>
      <style>{`@keyframes ds-spin { to { transform: rotate(360deg); } }`}</style>
    </Box>
  );
}
