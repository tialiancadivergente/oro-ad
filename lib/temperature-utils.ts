export const TEMPERATURE_TAG_MAP: Record<string, number> = {
  'q': 121117,
  'm': 121117,
  'f': 121117,
  't': 121117,
  'o': 120921,
  'org': 120921
};

export const NORMALIZED_TEMPERATURE_VALUES = ["q", "f", "m", "t", "org", "ind"] as const;

export type NormalizedTemperature =
  (typeof NORMALIZED_TEMPERATURE_VALUES)[number];

export const TEMPERATURE_TAG_MAP_ORO: Record<string, string> = {
  'q': '[OPP] [VEMAi]',
  'm': '[OPP] [VEMAi]',
  'f': '[OPP] [VEMAi]',
  't': '[OPP] [VEMAi]',
  'o': '',
  'org': ''
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
