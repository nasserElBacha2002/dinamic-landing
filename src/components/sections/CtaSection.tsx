import { Box, Container, Stack, Text, rem } from '@mantine/core';
import { motion } from 'framer-motion';
import { BrandButton } from '@/components/ui/BrandButton';
import { contentMaxWidth } from '@/theme/theme';

export function CtaSection() {
  return (
    <Box component="section" pt={{ base: '4rem', md: '6rem' }} bg="#020617">
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth} pb={{ base: '4rem', md: '5rem' }}>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
          <Stack align="center" ta="center" gap="xl">
            <Text
              component="h2"
              fz={{ base: rem(36), md: rem(52) }}
              fw={800}
              c="white"
              lh={1.08}
              maw={rem(980)}
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              Optimizá el control de inventarios de tu operación
            </Text>
            <Text fz={{ base: 'md', md: 'xl' }} c="gray.4" maw={rem(900)} fw={500} lh={1.75}>
              Coordinemos una reunión para analizar tus procesos actuales, necesidades operativas y oportunidades de mejora.
            </Text>
            <BrandButton component="a" href="#contacto" size="xl" h={rem(64)} px={rem(40)} tt="uppercase" fz="sm" style={{ letterSpacing: '0.18em' }}>
              Agendar reunión
            </BrandButton>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
