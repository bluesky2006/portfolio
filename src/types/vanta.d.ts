// src/types/vanta.d.ts
// Minimal safe typing for all Vanta effects (no `any`)

declare module "vanta/dist/*" {
  // Accept an options object with unknown values instead of `any`
  type VantaOptions = Record<string, unknown>;

  // The module exports a factory function that returns an object with an optional destroy method
  const vantaFactory: (options?: VantaOptions) => { destroy?: () => void } | undefined;

  export default vantaFactory;
}

// Extend Window type safely for Vanta global assignment
interface Window {
  VANTA?: {
    destroy?: () => void;
    [key: string]: unknown;
  };
  THREE?: unknown;
}
