export const PAGE_JSON_LD_SCRIPT_ID = 'ds-page-jsonld';

/** Safe JSON-LD payload for embedding inside a <script> tag. */
export function serializeJsonLd(
  data: Record<string, unknown> | Record<string, unknown>[],
): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
