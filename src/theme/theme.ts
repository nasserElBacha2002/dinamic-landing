import {
  Button,
  Card,
  createTheme,
  defaultVariantColorsResolver,
  MantineColorsTuple,
  Paper,
  rem,
  Select,
  Textarea,
  TextInput,
} from '@mantine/core';
import formControlClasses from '@/theme/formControls.module.css';

/** Institutional red scale — index 6 is the brand primary */
const dinamicRed: MantineColorsTuple = [
  '#ffe8ec',
  '#ffd0d8',
  '#ffb0bd',
  '#ff879f',
  '#f25f7d',
  '#d41f45',
  '#b7102a',
  '#9a0e24',
  '#7c0b1d',
  '#5a0714',
];

const dinamicCyan: MantineColorsTuple = [
  '#e6fcff',
  '#ccf8ff',
  '#99f1ff',
  '#66eaff',
  '#33e3ff',
  '#00daf3',
  '#00c2d9',
  '#0099ad',
  '#007080',
  '#004752',
];

export const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: dinamicRed,
    cyan: dinamicCyan,
    navy: [
      '#e8e9ec',
      '#d1d3d8',
      '#a3a7b0',
      '#757b88',
      '#474f60',
      '#1a2238',
      '#020617',
      '#01040f',
      '#01030a',
      '#000205',
    ],
  },
  fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
  headings: {
    fontFamily: 'Plus Jakarta Sans, Inter, system-ui, sans-serif',
    fontWeight: '800',
    sizes: {
      h1: { fontSize: rem(44), lineHeight: '1.1' },
      h2: { fontSize: rem(36), lineHeight: '1.15' },
      h3: { fontSize: rem(26), lineHeight: '1.2' },
      h4: { fontSize: rem(20), lineHeight: '1.25' },
    },
  },
  defaultRadius: 'xl',
  spacing: {
    section: rem(100),
    sectionMd: rem(64),
    sectionSm: rem(48),
    gutter: rem(32),
    gutterMobile: rem(20),
  },
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  shadows: {
    card: '0 4px 24px rgba(2, 6, 23, 0.06)',
    lift: '0 12px 40px rgba(2, 6, 23, 0.08)',
  },
  other: {
    brandBg: '#f8f9fa',
    brandSurface: '#ffffff',
    brandNavy: '#020617',
    brandText: '#1a1c1e',
    brandMuted: '#44474e',
    brandOutline: '#c4c6cf',
  },
  components: {
    Button: Button.extend({
      defaultProps: { radius: 'xl', fw: 700, size: 'md' },
      styles: {
        root: {
          transition: 'transform 160ms ease, box-shadow 160ms ease, background 160ms ease',
        },
      },
    }),
    Card: Card.extend({
      defaultProps: { padding: 'xl', radius: '2xl', shadow: 'sm' },
      styles: {
        root: {
          border: `${rem(1)} solid color-mix(in srgb, var(--mantine-color-gray-3) 70%, transparent)`,
          backgroundColor: 'var(--mantine-color-white)',
        },
      },
    }),
    Paper: Paper.extend({
      defaultProps: { radius: '2xl' },
    }),
    TextInput: TextInput.extend({
      defaultProps: { radius: 'xl', size: 'md' },
      classNames: { input: formControlClasses.input },
    }),
    Textarea: Textarea.extend({
      defaultProps: { radius: 'xl', size: 'md', minRows: 5 },
      classNames: { input: formControlClasses.textarea },
    }),
    Select: Select.extend({
      defaultProps: { radius: 'xl', size: 'md' },
      classNames: { input: formControlClasses.input },
    }),
  },
  variantColorResolver: (input) => {
    const base = defaultVariantColorsResolver(input);
    if (input.variant === 'outline' && input.color === 'cyan') {
      return {
        background: 'transparent',
        hover: 'color-mix(in srgb, var(--mantine-color-cyan-5) 8%, transparent)',
        border: `2px solid var(--mantine-color-cyan-5)`,
        color: 'var(--mantine-color-cyan-6)',
      };
    }
    return base;
  },
});

/** Fixed header height (px). Sync with `HeroSection` padding-top and `section[id]` scroll-margin in globals. */
export const appHeaderHeightPx = 96;

export const sectionPaddingX = { base: rem(20), md: rem(80) };
export const contentMaxWidth = rem(1280);
export const wideMaxWidth = rem(1440);
