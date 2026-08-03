import { Box, Grid, Group, Paper, Text, ThemeIcon, rem } from '@mantine/core';
import { IconShieldLock, IconView360 } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { motionDuration, motionEaseOut } from '@/components/animations/variants';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';
import droneClasses from '@/components/sections/DroneInventorySection.module.css';
import droneWarehouseUrl from '@/assets/images/drone-warehouse.png';

export function DroneInventorySection() {
  const reduced = usePrefersReducedMotion();

  return (
    <Box component="section" className="ds-bg-drone" c="white" style={{ overflow: 'hidden' }}>
      <Grid gutter={0}>
        <Grid.Col
          span={{ base: 12, lg: 6 }}
          pos="relative"
          mih={{ base: rem(360), lg: rem(620) }}
          p={{ base: 'md', md: 'lg', lg: 'xl' }}
          pr={{ lg: 'md' }}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Box className={droneClasses.visualShell} style={{ flex: 1, minHeight: rem(280) }}>
            <motion.div
              className={droneClasses.visualInner}
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: motionDuration.section, ease: motionEaseOut }}
              aria-hidden
            >
              <Box
                component="img"
                src={droneWarehouseUrl}
                alt=""
                className={droneClasses.visualImg}
              />
              <Box className={droneClasses.mediaTint} />
            </motion.div>
            <Box pos="absolute" inset={0} className={droneClasses.radarWrap} aria-hidden>
            <svg
              className={droneClasses.radarSvg}
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="droneAerialScanStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,218,243,0.06)" />
                  <stop offset="45%" stopColor="rgba(0,218,243,0.9)" />
                  <stop offset="100%" stopColor="rgba(0,218,243,0.12)" />
                </linearGradient>
              </defs>
              <circle
                cx="200"
                cy="200"
                r="188"
                stroke="rgba(0,218,243,0.14)"
                strokeWidth="1"
                strokeDasharray="6 14"
                className={reduced ? undefined : droneClasses.radarPulse}
              />
              <g className={`${droneClasses.radarArc} ${reduced ? '' : droneClasses.radarArcOuter}`}>
                <circle
                  cx="200"
                  cy="200"
                  r="168"
                  stroke="url(#droneAerialScanStroke)"
                  strokeWidth="1.25"
                  strokeDasharray="88 320"
                  strokeLinecap="round"
                />
              </g>
              <g className={`${droneClasses.radarArc} ${reduced ? '' : droneClasses.radarArcMid}`}>
                <circle
                  cx="200"
                  cy="200"
                  r="132"
                  stroke="rgba(0,218,243,0.55)"
                  strokeWidth="1.5"
                  strokeDasharray="52 280"
                  strokeLinecap="round"
                />
              </g>
              <g className={`${droneClasses.radarArc} ${reduced ? '' : droneClasses.radarArcInner}`}>
                <circle
                  cx="200"
                  cy="200"
                  r="96"
                  stroke="rgba(0,218,243,0.7)"
                  strokeWidth="2"
                  strokeDasharray="36 220"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </Box>
          </Box>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 6 }} p={{ base: 'xl', md: '4rem' }}>
          <MotionFadeIn direction="right" duration={motionDuration.section}>
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
              Inventarios con drones para posiciones en altura
            </Text>
            <Text fz={{ base: 'md', md: 'xl' }} c="gray.4" fw={500} lh={1.75} maw={rem(560)} mb="xl">
              Según la estructura del depósito, la altura de las posiciones, la visibilidad de las etiquetas y las
              condiciones de seguridad, puede evaluarse el uso de drones para apoyar el relevamiento de posiciones en
              altura. Es una modalidad complementaria: no aplica a todos los depósitos ni reemplaza el trabajo humano.
            </Text>

            <Grid gutter="lg">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <motion.div
                  initial={reduced ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: motionDuration.base, delay: reduced ? 0 : 0.06, ease: motionEaseOut }}
                >
                  <Paper
                    p="xl"
                    radius="2rem"
                    bg="rgba(255,255,255,0.05)"
                    style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                    className={`${droneClasses.card} ${droneClasses.cardCyan}`}
                  >
                    <ThemeIcon variant="transparent" color="cyan" size={52} radius="md">
                      <IconView360 stroke={1.25} />
                    </ThemeIcon>
                    <Text fw={800} fz="lg" mt="md" mb="xs">
                      Escaneo de posiciones
                    </Text>
                    <Text fz="sm" c="gray.5" fw={500} lh={1.65}>
                      Apoyo para asociar ubicación y producto con lectura de etiquetas visibles, sujeto a evaluación previa.
                    </Text>
                  </Paper>
                </motion.div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <motion.div
                  initial={reduced ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: motionDuration.base, delay: reduced ? 0 : 0.14, ease: motionEaseOut }}
                >
                  <Paper
                    p="xl"
                    radius="2rem"
                    bg="rgba(255,255,255,0.05)"
                    style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                    className={`${droneClasses.card} ${droneClasses.cardBrand}`}
                  >
                    <ThemeIcon variant="transparent" color="brand" size={52} radius="md">
                      <IconShieldLock stroke={1.25} />
                    </ThemeIcon>
                    <Text fw={800} fz="lg" mt="md" mb="xs">
                      Menor exposición en altura
                    </Text>
                    <Text fz="sm" c="gray.5" fw={500} lh={1.65}>
                      Puede reducir la exposición del personal en tareas de altura cuando el entorno lo permite.
                    </Text>
                  </Paper>
                </motion.div>
              </Grid.Col>
            </Grid>
          </MotionFadeIn>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
