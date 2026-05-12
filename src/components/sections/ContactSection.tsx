import {
  Anchor,
  Box,
  Button,
  Container,
  Grid,
  Group,
  List,
  Paper,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconListNumbers, IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { operationTypes } from '@/types/content';
import { contentMaxWidth } from '@/theme/theme';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Ingresá tu nombre completo'),
  company: z.string().min(2, 'Ingresá la empresa'),
  email: z.string().email('Ingresá un email profesional válido'),
  phone: z.string().min(6, 'Ingresá un teléfono de contacto'),
  operation: z.enum(operationTypes),
  message: z.string().min(10, 'Contanos un poco más sobre tu necesidad'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const selectData = operationTypes.map((v) => ({ value: v, label: v }));

export function ContactSection() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      company: '',
      email: '',
      phone: '',
      operation: operationTypes[0],
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log('contact_submit', data);
    notifications.show({
      title: 'Consulta recibida',
      message: 'Gracias. Nos pondremos en contacto a la brevedad.',
      color: 'green',
    });
    reset({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      operation: operationTypes[0],
      message: '',
    });
  };

  return (
    <Box
      component="section"
      id="contacto"
      bg="white"
      style={{
        borderTopLeftRadius: rem(64),
        borderTopRightRadius: rem(64),
        marginTop: rem(-12),
        boxShadow: '0 -24px 60px rgba(2, 6, 23, 0.12)',
      }}
      pt={{ base: '3rem', md: '4rem' }}
      pb={{ base: '4rem', md: '5rem' }}
    >
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <Grid gutter={{ base: 'xl', lg: '3rem' }}>
          <Grid.Col span={{ base: 12, lg: 5 }}>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <Text tt="uppercase" size="xs" fw={800} c="brand.6" mb="md" style={{ letterSpacing: '0.28em' }}>
                ¿Hablamos?
              </Text>
              <Text component="h2" fz={{ base: rem(32), sm: rem(40) }} fw={800} c="gray.9" lh={1.1} style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>
                Hablemos de tu operación
              </Text>
              <Text mt="lg" c="dimmed" fw={500} lh={1.75}>
                Contanos sobre tu tienda, depósito o centro de distribución. Nuestro equipo puede ayudarte a definir una
                solución de inventario precisa, trazable y escalable.
              </Text>

              <Stack gap="xl" mt="xl">
                <Group align="flex-start" gap="md" wrap="nowrap">
                  <ThemeIcon size={56} radius="lg" variant="light" color="brand">
                    <IconMail stroke={1.25} />
                  </ThemeIcon>
                  <Box>
                    <Text tt="uppercase" fz={10} fw={800} c="dimmed" style={{ letterSpacing: '0.18em' }}>
                      Email corporativo
                    </Text>
                    <Anchor href="mailto:info@dinamicsystems.com" fw={800} fz="lg" c="gray.9" underline="hover">
                      info@dinamicsystems.com
                    </Anchor>
                  </Box>
                </Group>

                <Group align="flex-start" gap="md" wrap="nowrap">
                  <ThemeIcon size={56} radius="lg" variant="light" color="brand">
                    <IconPhone stroke={1.25} />
                  </ThemeIcon>
                  <Box>
                    <Text tt="uppercase" fz={10} fw={800} c="dimmed" style={{ letterSpacing: '0.18em' }}>
                      Teléfono
                    </Text>
                    <Anchor href="tel:+541144263813" fw={800} fz="lg" c="gray.9" underline="hover">
                      +54 11 4426 3813
                    </Anchor>
                  </Box>
                </Group>

                <Group align="flex-start" gap="md" wrap="nowrap">
                  <ThemeIcon size={56} radius="lg" variant="light" color="brand">
                    <IconMapPin stroke={1.25} />
                  </ThemeIcon>
                  <Box>
                    <Text tt="uppercase" fz={10} fw={800} c="dimmed" style={{ letterSpacing: '0.18em' }}>
                      Oficinas centrales
                    </Text>
                    <Text fw={800} fz="lg" c="gray.9">
                      Av. Rivadavia 4975 – CABA
                    </Text>
                    <Text mt="xs" c="dimmed" fw={600}>
                      Alejandro El Bacha
                    </Text>
                  </Box>
                </Group>
              </Stack>

              <Paper mt="xl" p="lg" radius="xl" withBorder bg="gray.0">
                <Group gap="sm" mb="sm">
                  <ThemeIcon variant="light" color="brand" size="lg" radius="md">
                    <IconListNumbers stroke={1.25} />
                  </ThemeIcon>
                  <Text fw={800} c="gray.9">
                    Qué sucede después
                  </Text>
                </Group>
                <List spacing="xs" c="dimmed" fw={500} size="sm">
                  <List.Item>1. Relevamos tu necesidad</List.Item>
                  <List.Item>2. Analizamos tu operación</List.Item>
                  <List.Item>3. Diseñamos una propuesta</List.Item>
                </List>
              </Paper>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 7 }}>
            <Paper component="form" onSubmit={handleSubmit(onSubmit)} p={{ base: 'lg', md: 'xl' }} radius="4rem" withBorder bg="gray.0" shadow="md">
              <Stack gap="lg">
                <Grid gutter="lg">
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput label="Nombre completo" placeholder="Ej: Juan Pérez" error={errors.fullName?.message} {...register('fullName')} />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput label="Empresa" placeholder="Nombre de su organización" error={errors.company?.message} {...register('company')} />
                  </Grid.Col>
                </Grid>
                <Grid gutter="lg">
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                      label="Email profesional"
                      placeholder="email@empresa.com"
                      type="email"
                      error={errors.email?.message}
                      {...register('email')}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput label="Teléfono" placeholder="+54 …" error={errors.phone?.message} {...register('phone')} />
                  </Grid.Col>
                </Grid>
                <Controller
                  name="operation"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label="Operación"
                      data={selectData}
                      error={errors.operation?.message}
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                    />
                  )}
                />
                <Textarea label="Mensaje" placeholder="Contanos brevemente qué tipo de control necesitás realizar" error={errors.message?.message} {...register('message')} />
                <Button type="submit" fullWidth size="lg" h={rem(72)} loading={isSubmitting} tt="uppercase" fz="sm" style={{ letterSpacing: '0.16em' }}>
                  Enviar consulta técnica
                </Button>
              </Stack>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
