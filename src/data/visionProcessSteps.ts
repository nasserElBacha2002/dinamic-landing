import type { TablerIcon } from '@tabler/icons-react';
import { IconCamera, IconCircleCheck, IconEye, IconPackage } from '@tabler/icons-react';

export type VisionProcessTone = 'brand' | 'cyan';

export interface VisionProcessStep {
  label: string;
  icon: TablerIcon;
  tone: VisionProcessTone;
  filled?: boolean;
}

export const visionProcessSteps: VisionProcessStep[] = [
  { label: 'Pallet', icon: IconPackage, tone: 'brand' },
  { label: 'Captura', icon: IconCamera, tone: 'cyan' },
  { label: 'Detección', icon: IconEye, tone: 'brand' },
  { label: 'Evidencia', icon: IconCircleCheck, tone: 'cyan', filled: true },
];
