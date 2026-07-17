export const DEFAULT_QUEST_FORM_VERSION_ID =
  "46658ce7-45f1-473a-ae4b-34f705f56f84";

const QUEST_WHATSAPP_URL_BY_TEMPERATURE = {
  f: "",
  org: "",
  m: "",
  q: "",
  t: "",
} as const;

type QuestTesteTemperatureKey = keyof typeof QUEST_WHATSAPP_URL_BY_TEMPERATURE;

export function resolveQuestTesteWhatsappUrl(temperature: string): string {
  const normalizedTemperature = temperature.toLowerCase().trim();
  const validKeys = Object.keys(
    QUEST_WHATSAPP_URL_BY_TEMPERATURE
  ) as QuestTesteTemperatureKey[];

  const resolvedKey = validKeys.includes(normalizedTemperature as QuestTesteTemperatureKey)
    ? (normalizedTemperature as QuestTesteTemperatureKey)
    : "f";

  return QUEST_WHATSAPP_URL_BY_TEMPERATURE[resolvedKey];
}
