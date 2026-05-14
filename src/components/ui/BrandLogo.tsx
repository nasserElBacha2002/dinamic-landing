import { Image, rem } from '@mantine/core';
import brandLogo from '@/assets/logos/dinamic-systems.png';

type BrandLogoProps = {
  /** Altura del logo (px → rem). Por defecto 56. */
  heightPx?: number;
  /** Ancho máximo (px → rem). */
  maxWidthPx?: number;
};

export function BrandLogo({ heightPx = 56, maxWidthPx = 400 }: BrandLogoProps) {
  return (
    <Image
      src={brandLogo}
      alt="Dinamic Systems"
      h={rem(heightPx)}
      maw={rem(maxWidthPx)}
      w="auto"
      fit="contain"
      style={{ display: 'block' }}
    />
  );
}
