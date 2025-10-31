declare module "vanta/dist/*" {
  type VantaOptions = Record<string, unknown>;

  const vantaFactory: (options?: VantaOptions) => { destroy?: () => void } | undefined;

  export default vantaFactory;
}

interface Window {
  VANTA?: {
    destroy?: () => void;
    [key: string]: unknown;
  };
  THREE?: unknown;
}

interface VantaEffect {
  destroy?: () => void;
  setOptions?: (options: Record<string, unknown>) => void;
  resize?: () => void;
}
