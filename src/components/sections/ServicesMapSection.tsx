import { Box, Container, Group, SimpleGrid, Text, rem } from '@mantine/core';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { contentMaxWidth } from '@/theme/theme';

export function ServicesMapSection() {
  return (
    <Box component="section" id="soluciones" py={{ base: '4rem', md: '6rem' }} bg="white">
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <Group justify="space-between" align="flex-end" gap="md" mb={{ base: 'xl', md: '3rem' }} wrap="wrap">
          <Box maw={rem(900)}>
            <Text tt="uppercase" size="xs" fw={800} c="brand.6" mb="sm" style={{ letterSpacing: '0.22em' }}>
              Alcance de servicios
            </Text>
            <Text component="h2" fz={{ base: rem(32), sm: rem(40) }} fw={800} c="gray.9" lh={1.1} style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>
              Mapa Operativo de Servicios
            </Text>
            <Text mt="md" fz="lg" c="dimmed" fw={500} maw={rem(720)} display={{ base: 'block', md: 'none' }}>
              Adaptamos nuestra metodología de inventario al tipo de operación, volumen, ubicación y necesidad de control
              de cada cliente.
            </Text>
          </Box>
          <Group gap="xs" visibleFrom="md">
            <Box w={10} h={10} bg="brand.6" style={{ borderRadius: 999 }} />
            <Box w={10} h={10} bg="brand.2" style={{ borderRadius: 999 }} />
            <Box w={10} h={10} bg="brand.2" style={{ borderRadius: 999 }} />
          </Group>
        </Group>
        <Text mb={{ base: 'xl', md: '3rem' }} fz="lg" c="dimmed" fw={500} maw={rem(720)} visibleFrom="md">
          Adaptamos nuestra metodología de inventario al tipo de operación, volumen, ubicación y necesidad de control de
          cada cliente.
        </Text>

        <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="lg">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.06 * i }}
              style={{ height: '100%' }}
            >
              <ServiceCard service={s} />
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
