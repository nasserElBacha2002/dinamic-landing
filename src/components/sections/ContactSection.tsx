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
import { useId, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MotionFadeIn } from '@/components/animations/MotionFadeIn';
import { motionDuration } from '@/components/animations/variants';
import type { ContactFormValues } from '@/lib/contactFormSchema';
import {
  contactFormSchema,
  operationActiveDuringCountLabels,
  operationActiveDuringCountValues,
} from '@/lib/contactFormSchema';
import { submitContactConsultation } from '@/lib/submitContactConsultation';
import { trackEvent } from '@/lib/analytics/events';
import { operationTypes } from '@/types/content';
import { contentMaxWidth } from '@/theme/theme';

const selectData = operationTypes.map((v) => ({ value: v, label: v }));
const operationActiveData = [
  { value: '', label: 'Sin indicar' },
  ...operationActiveDuringCountValues.map((value) => ({
    value,
    label: operationActiveDuringCountLabels[value],
  })),
];

const emptyFormValues: ContactFormValues = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  operation: operationTypes[0],
  locality: '',
  operationActiveDuringCount: '',
  message: '',
  honeypot: '',
};

export function ContactSection() {
  const formStartedRef = useRef(false);
  const statusId = useId();
  const privacyNoteId = useId();
  const statusRef = useRef<HTMLParagraphElement>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setFocus,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: emptyFormValues,
  });

  const markFormStarted = () => {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackEvent('contact_form_started');
  };

  const announceStatus = (message: string) => {
    if (statusRef.current) {
      statusRef.current.textContent = message;
    }
  };

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await submitContactConsultation(data);
      trackEvent('contact_form_submitted', { operation: data.operation });
      trackEvent('contact_form_success', { operation: data.operation });
      const successMessage = 'Recibimos tu solicitud. Nuestro equipo revisará la información y se pondrá en contacto.';
      announceStatus(successMessage);
      notifications.show({
        title: 'Solicitud enviada',
        message: successMessage,
        color: 'green',
      });
      reset(emptyFormValues);
      statusRef.current?.focus();
    } catch {
      trackEvent('contact_form_error', { operation: data.operation });
      const errorMessage = 'No pudimos enviar la solicitud. Revisá los datos o intentá nuevamente.';
      announceStatus(errorMessage);
      notifications.show({
        title: 'No pudimos enviar la solicitud',
        message: `${errorMessage} También podés escribirnos a info@dinamicsystems.com.`,
        color: 'red',
      });
      const firstError = (['fullName', 'company', 'email', 'phone', 'operation', 'locality', 'message'] as const).find(
        (key) => errors[key],
      );
      if (firstError) setFocus(firstError);
      else setFocus('fullName');
    }
  };

  const onInvalid = () => {
    announceStatus('Revisá los campos marcados antes de enviar la solicitud.');
    const firstError = (['fullName', 'company', 'email', 'phone', 'operation', 'locality', 'message'] as const).find(
      (key) => errors[key],
    );
    if (firstError) setFocus(firstError);
  };

  return (
    <Box
      component="section"
      id="contacto"
      className="ds-bg-contact"
      style={{
        borderTopLeftRadius: rem(64),
        borderTopRightRadius: rem(64),
        marginTop: rem(-12),
        boxShadow: '0 -18px 48px rgba(2, 6, 23, 0.07)',
      }}
      pt={{ base: '3rem', md: '4rem' }}
      pb={{ base: '4rem', md: '5rem' }}
    >
      <Container size="xl" px={{ base: 'md', md: 'xl' }} maw={contentMaxWidth}>
        <Grid gutter={{ base: 'xl', lg: '3rem' }}>
          <Grid.Col span={{ base: 12, lg: 5 }}>
            <MotionFadeIn direction="left" duration={motionDuration.section}>
              <Text tt="uppercase" size="xs" fw={800} c="brand.5" mb="md" style={{ letterSpacing: '0.28em' }}>
                Evaluación de inventario
              </Text>
              <Text component="h2" fz={{ base: rem(32), sm: rem(40) }} fw={800} c="gray.9" lh={1.1} style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>
                Solicitá una evaluación para tu inventario
              </Text>
              <Text mt="lg" c="dimmed" fw={500} lh={1.75}>
                Compartinos la ubicación, el tipo de almacenamiento y el volumen aproximado. Nuestro equipo revisará el
                alcance y la metodología posible.
              </Text>

              <Stack gap="xl" mt="xl">
                <Group align="flex-start" gap="md" wrap="nowrap">
                  <ThemeIcon size={56} radius="lg" variant="light" color="gray">
                    <IconMail stroke={1.25} />
                  </ThemeIcon>
                  <Box>
                    <Text tt="uppercase" fz={10} fw={800} c="dimmed" style={{ letterSpacing: '0.18em' }}>
                      Email corporativo
                    </Text>
                    <Anchor
                      href="mailto:info@dinamicsystems.com"
                      fw={800}
                      fz="lg"
                      c="gray.9"
                      underline="hover"
                      onClick={() => trackEvent('contact_email_clicked')}
                    >
                      info@dinamicsystems.com
                    </Anchor>
                  </Box>
                </Group>

                <Group align="flex-start" gap="md" wrap="nowrap">
                  <ThemeIcon size={56} radius="lg" variant="light" color="gray">
                    <IconPhone stroke={1.25} />
                  </ThemeIcon>
                  <Box>
                    <Text tt="uppercase" fz={10} fw={800} c="dimmed" style={{ letterSpacing: '0.18em' }}>
                      Teléfono
                    </Text>
                    <Anchor
                      href="tel:+541144263813"
                      fw={800}
                      fz="lg"
                      c="gray.9"
                      underline="hover"
                      onClick={() => trackEvent('contact_phone_clicked')}
                    >
                      +54 11 4426 3813
                    </Anchor>
                  </Box>
                </Group>

                <Group align="flex-start" gap="md" wrap="nowrap">
                  <ThemeIcon size={56} radius="lg" variant="light" color="gray">
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

              <Paper
                mt="xl"
                p="lg"
                radius="xl"
                withBorder
                bg="color-mix(in srgb, var(--mantine-color-cyan-0) 24%, var(--mantine-color-gray-0))"
              >
                <Group gap="sm" mb="sm">
                  <ThemeIcon variant="light" color="gray" size="lg" radius="md">
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
            </MotionFadeIn>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 7 }}>
            <MotionFadeIn direction="right" duration={motionDuration.section} delay={0.06}>
              <Paper
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit, onInvalid)}
                onFocusCapture={markFormStarted}
                p={{ base: 'lg', md: 'xl' }}
                radius="4rem"
                withBorder
                bg="color-mix(in srgb, var(--mantine-color-cyan-0) 18%, var(--mantine-color-gray-0))"
                shadow="md"
                aria-describedby={`${privacyNoteId} ${statusId}`}
              >
                <Stack gap="lg">
                  <Text
                    component="p"
                    ref={statusRef}
                    id={statusId}
                    role="status"
                    aria-live="polite"
                    tabIndex={-1}
                    fz="sm"
                    c="dimmed"
                    style={{ outline: 'none', minHeight: rem(20) }}
                  />
                  {/* type="hidden" evita autofill en inputs de texto ocultos (el honeypot en JSON es `botTrap`). */}
                  <input type="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register('honeypot')} />
                  <Grid gutter="lg">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                      <TextInput
                        label="Nombre completo"
                        placeholder="Ej: Juan Pérez"
                        autoComplete="name"
                        error={errors.fullName?.message}
                        {...register('fullName')}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                      <TextInput
                        label="Empresa"
                        placeholder="Nombre de su organización"
                        autoComplete="organization"
                        error={errors.company?.message}
                        {...register('company')}
                      />
                    </Grid.Col>
                  </Grid>
                  <Grid gutter="lg">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                      <TextInput
                        label="Email profesional"
                        placeholder="email@empresa.com"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        error={errors.email?.message}
                        {...register('email')}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                      <TextInput
                        label="Teléfono"
                        placeholder="+54 …"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        error={errors.phone?.message}
                        {...register('phone')}
                      />
                    </Grid.Col>
                  </Grid>
                  <Controller
                    name="operation"
                    control={control}
                    render={({ field }) => (
                      <Select
                        label="Tipo de operación"
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
                  <Grid gutter="lg">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                      <TextInput
                        label="Localidad o provincia"
                        placeholder="Ej.: CABA, Córdoba, Rosario"
                        description="Opcional"
                        autoComplete="address-level1"
                        error={errors.locality?.message}
                        {...register('locality')}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                      <Controller
                        name="operationActiveDuringCount"
                        control={control}
                        render={({ field }) => (
                          <Select
                            label="¿La operación debe continuar durante el conteo?"
                            description="Opcional"
                            data={operationActiveData}
                            clearable
                            value={field.value || null}
                            onChange={(value) => field.onChange(value ?? '')}
                            onBlur={field.onBlur}
                            name={field.name}
                            ref={field.ref}
                            error={errors.operationActiveDuringCount?.message}
                          />
                        )}
                      />
                    </Grid.Col>
                  </Grid>
                  <Textarea
                    label="Mensaje"
                    placeholder="Contanos qué tipo de mercadería almacenan, el volumen aproximado, cómo está organizado el depósito y cuándo necesitan realizar el inventario."
                    error={errors.message?.message}
                    {...register('message')}
                  />
                  <Text id={privacyNoteId} fz="sm" c="dimmed" fw={500}>
                    Usaremos estos datos únicamente para responder tu consulta.
                  </Text>
                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    h={rem(72)}
                    loading={isSubmitting}
                    tt="uppercase"
                    fz="sm"
                    className="ds-focus-ring ds-submit-cta"
                    style={{ letterSpacing: '0.16em' }}
                  >
                    Enviar solicitud de evaluación
                  </Button>
                </Stack>
              </Paper>
            </MotionFadeIn>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
