export const FONT_FAMILIES = {
  regular: "raleway-regular",
  medium: "raleway-medium",
  semibold: "raleway-semibold",
  bold: "raleway-bold",
} as const;

export const FONT_WEIGHT_TO_FAMILY: Record<
  "400" | "500" | "600" | "700" | "normal" | "bold",
  string
> = {
  "400": FONT_FAMILIES.regular,
  normal: FONT_FAMILIES.regular,
  "500": FONT_FAMILIES.medium,
  "600": FONT_FAMILIES.semibold,
  bold: FONT_FAMILIES.bold,
  "700": FONT_FAMILIES.bold,
};

export const TYPOGRAPHY = {
  h1: 32,
  h2: 28,
  h3: 24,
  h4: 20,
  body: 16,
  caption: 14,
  small: 12,
};

export type TypographyVariant = keyof typeof TYPOGRAPHY;
