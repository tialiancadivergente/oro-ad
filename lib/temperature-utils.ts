export const TEMPERATURE_TAG_MAP: Record<string, number> = {
  'q': 120920,
  'm': 120920,
  'f': 120920,
  't': 120920,
  'o': 120921,
  'org': 120921
};

export const NORMALIZED_TEMPERATURE_VALUES = ["q", "f", "m", "t", "org", "ind"] as const;

export type NormalizedTemperature =
  (typeof NORMALIZED_TEMPERATURE_VALUES)[number];

export const TEMPERATURE_TAG_MAP_ORO: Record<string, string> = {
  'q': '[ORO][JUL26][TRAFEGO]',
  'm': '[ORO][JUL26][TRAFEGO]',
  'f': '[ORO][JUL26][TRAFEGO]',
  't': '[ORO][JUL26][TRAFEGO]',
  'o': '[ORO][JUL26][ORGANICO]',
  'org': '[ORO][JUL26][ORGANICO]'
};

export const getTagIdByTemperature = (temperature: string): number | null => {
  return TEMPERATURE_TAG_MAP[temperature] || null;
};

export const getTagByTemperatureOro = (temperature: string): string | null => {
  return TEMPERATURE_TAG_MAP_ORO[temperature] || null;
};

export const isValidTemperature = (temperature: string): boolean => {
  return temperature in TEMPERATURE_TAG_MAP;
};

export const getValidTemperatures = (): string[] => {
  return Object.keys(TEMPERATURE_TAG_MAP);
};

export const normalizeTemperature = (
  value: string | string[] | undefined
): NormalizedTemperature | undefined => {
  const rawValue = Array.isArray(value) ? value[0] : value;
  if (!rawValue) return undefined;

  if (rawValue === "o") {
    return "t";
  }

  if (
    rawValue === "q" ||
    rawValue === "f" ||
    rawValue === "m" ||
    rawValue === "t" ||
    rawValue === "ind" ||
    rawValue === "org"
  ) {
    return 't';
  }

  return 't';
};
