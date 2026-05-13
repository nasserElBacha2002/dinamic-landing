import { Box, Container, Flex, Stack, Text, ThemeIcon, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconArrowDown, IconArrowRight } from '@tabler/icons-react';
import { motion, useInView } from 'framer-motion';
import { Fragment, useEffect, useRef, useState } from 'react';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { motionDuration, motionEaseOut } from '@/components/animations/variants';
import { usePrefersReducedMotion } from '@/components/animations/usePrefersReducedMotion';
import { visionProcessSteps } from '@/data/visionProcessSteps';
import { contentMaxWidth } from '@/theme/theme';
import classes from '@/components/sections/VisionProcessFlowSection.module.css';

const PULSE_MS = 1300;

export function VisionProcessFlowSection() {
  const reduced = usePrefersReducedMotion();
  const wMd = useMediaQuery('(min-width: 62em)');
  const wLg = useMediaQuery('(min-width: 75em)');
  const iconSize = wMd ? (wLg ? 92 : 84) : 80;
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.25, margin: '0px 0px -8% 0px' });
  const [pulseIndex, setPulseIndex] = useState(0);

  const pulseOn = Boolean(inView && !reduced);

  useEffect(() => {
    if (!pulseOn) {
      setPulseIndex(0);
      return;
    }
    setPulseIndex(0);
    const id = window.setInterval(() => {
      setPulseIndex((j) => (j + 1) % visionProcessSteps.length);
    }, PULSE_MS);
    return () => window.clearInterval(id);
  }, [pulseOn]);

  return (
    <Box
      ref={sectionRef}
      component="section"
      id="flujo-vision"
      aria-labelledby="vision-flow-heading"
      py={{ base: '2.5rem', md: '3.5rem' }}
      className="ds-bg-vision"
      style={{ overflow: 'hidden' }}
    >
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <MotionFadeIn direction="up" duration={motionDuration.section}>
          <Stack gap="xs" mb={{ base: 'lg', md: 'xl' }} ta={{ base: 'center', md: 'left' }}>
            <Text
              id="vision-flow-heading"
              component="h3"
              fz={{ base: rem(22), sm: rem(26), md: rem(30) }}
              fw={800}
              c="gray.9"
              lh={1.2}
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              Del pallet a la evidencia visual
            </Text>
            <Text fz={{ base: 'sm', md: 'md' }} c="dimmed" fw={500} maw={rem(640)} mx={{ base: 'auto', md: 0 }}>
              Secuencia operativa que conecta la captura en campo con la detección asistida y el registro auditable.
            </Text>
          </Stack>
        </MotionFadeIn>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: motionDuration.section, ease: motionEaseOut }}
        >
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="center"
            gap={{ base: rem(10), md: rem(18), lg: rem(24) }}
            wrap="nowrap"
            py={{ base: 'xs', md: 'sm' }}
          >
            {visionProcessSteps.map((s, idx) => (
              <Fragment key={s.label}>
                <motion.div
                  initial={reduced ? false : { opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 28,
                    delay: reduced ? 0 : 0.08 * idx,
                  }}
                  whileHover={
                    reduced
                      ? undefined
                      : {
                          y: -6,
                          transition: { type: 'spring', stiffness: 420, damping: 22 },
                        }
                  }
                  style={{ flexShrink: 0 }}
                >
                  <Stack align="center" gap="md" maw={{ base: '100%', md: rem(200) }}>
                    <Box
                      className={classes.stepShell}
                      data-active={pulseOn && pulseIndex === idx ? 'true' : undefined}
                      data-accent={s.tone}
                      style={{ borderRadius: rem(20) }}
                    >
                      <ThemeIcon
                        radius="xl"
                        size={iconSize}
                        color={s.tone === 'brand' ? 'brand' : 'cyan'}
                        variant={s.filled ? 'filled' : 'white'}
                        style={{
                          border: s.filled
                            ? undefined
                            : `2px solid color-mix(in srgb, var(--mantine-color-${s.tone === 'brand' ? 'brand' : 'cyan'}-6) 28%, transparent)`,
                          boxShadow: 'var(--mantine-shadow-md)',
                        }}
                      >
                        <s.icon stroke={1.2} style={{ width: rem(iconSize * 0.4), height: rem(iconSize * 0.4) }} />
                      </ThemeIcon>
                    </Box>
                    <Text
                      tt="uppercase"
                      fw={800}
                      fz={{ base: rem(11), sm: rem(12), md: rem(13) }}
                      c={s.tone === 'brand' ? 'brand.7' : 'cyan.7'}
                      style={{ letterSpacing: '0.14em' }}
                      ta="center"
                    >
                      {s.label}
                    </Text>
                  </Stack>
                </motion.div>

                {idx < visionProcessSteps.length - 1 ? (
                  <>
                    <Box component="span" hiddenFrom="md" className={classes.connector} aria-hidden>
                      <motion.div
                        initial={reduced ? false : { opacity: 0, y: -4 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: reduced ? 0 : 0.06 + idx * 0.06, duration: motionDuration.base }}
                      >
                        <IconArrowDown size={26} stroke={1.5} />
                      </motion.div>
                    </Box>
                    <Box component="span" visibleFrom="md" className={classes.connector} aria-hidden>
                      <motion.div
                        initial={reduced ? false : { opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: reduced ? 0 : 0.06 + idx * 0.06, duration: motionDuration.base }}
                      >
                        <IconArrowRight size={28} stroke={1.5} />
                      </motion.div>
                    </Box>
                  </>
                ) : null}
              </Fragment>
            ))}
          </Flex>
        </motion.div>
      </Container>
    </Box>
  );
}
