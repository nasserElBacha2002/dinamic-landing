import { Box, Container, SimpleGrid } from '@mantine/core';
import { motion } from 'framer-motion';
import { clients } from '@/data/clients';
import { LogoCard } from '@/components/ui/LogoCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { contentMaxWidth } from '@/theme/theme';

export function ClientsSection() {
  return (
    <Box component="section" id="clientes" py={{ base: '4rem', md: '6rem' }} bg="white">
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <SectionHeader
          align="center"
          title="Empresas que confían en nosotros"
          subtitle="Empresas de retail, logística, distribución, indumentaria, farmacias y consumo masivo confían en Dinamic Systems para optimizar sus procesos de inventario."
        />

        <SimpleGrid cols={{ base: 2, sm: 3, lg: 5 }} spacing={{ base: 'md', md: 'lg' }} mt={{ base: 'xl', md: '3rem' }}>
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.03 * i }}
            >
              <LogoCard client={c} />
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
