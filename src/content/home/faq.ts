import type { FaqItem } from '@/content/types';

/**
 * Home FAQ — visible HTML answers. FAQPage JSON-LD must mirror this list exactly.
 * Do not add promotional or unverified claims.
 */
export const homeFaqItems: FaqItem[] = [
  {
    question: '¿Dinamic Systems realiza inventarios en depósitos?',
    answer:
      'Sí. Planificamos y ejecutamos inventarios físicos en depósitos y centros de distribución, con conteo y control por ubicación.',
  },
  {
    question: '¿Trabajan en Argentina?',
    answer:
      'Dinamic Systems es una empresa argentina y evalúa cada operativo según su ubicación, alcance, volumen, fechas y disponibilidad.',
  },
  {
    question: '¿Es necesario detener el depósito?',
    answer:
      'No siempre. Según la operación, puede evaluarse el trabajo por sectores, turnos o ventanas horarias, siempre que los movimientos puedan controlarse de forma confiable.',
  },
  {
    question: '¿Realizan reconteos?',
    answer:
      'Sí. Cuando aparecen diferencias, pueden realizarse reconteos acotados para validar la información antes del cierre.',
  },
  {
    question: '¿Pueden contar racks y pallets?',
    answer:
      'Sí. La metodología se adapta a racks, pallets, estanterías, posiciones de piso y otras formas de almacenamiento, según las condiciones del depósito.',
  },
  {
    question: '¿Hacen inventarios totales y parciales?',
    answer:
      'Evaluamos inventarios totales o parciales según los productos, las ubicaciones y los objetivos de cada operación.',
  },
  {
    question: '¿Utilizan drones?',
    answer:
      'Los drones son una modalidad complementaria. Su uso se evalúa cuando la altura, la visibilidad de las etiquetas, los pasillos y las condiciones de seguridad lo permiten.',
  },
  {
    question: '¿Qué sucede con los productos sin etiqueta?',
    answer:
      'Pueden requerir identificación manual, validación del cliente o un tratamiento diferenciado durante el conteo.',
  },
  {
    question: '¿Qué información necesito para solicitar una evaluación?',
    answer:
      'La localidad, el tipo de operación, el volumen aproximado, la cantidad estimada de referencias o ubicaciones, el tipo de almacenamiento y la fecha objetivo ayudan a definir el alcance.',
  },
];
