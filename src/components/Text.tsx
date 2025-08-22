import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { FONT_FAMILIES, FONT_WEIGHT_TO_FAMILY } from "../constants/typography";

export interface CustomTextProps extends RNTextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}

export default function Text({ children, style, ...props }: CustomTextProps) {
  const getFontFamily = (styleObj: TextStyle): string => {
    const fontWeight = styleObj?.fontWeight || "regular";

    if (fontWeight && fontWeight in FONT_WEIGHT_TO_FAMILY) {
      return FONT_WEIGHT_TO_FAMILY[
        fontWeight as keyof typeof FONT_WEIGHT_TO_FAMILY
      ];
    }

    return FONT_FAMILIES.regular;
  };

  const processStyle = (
    styleObj: TextStyle | TextStyle[]
  ): TextStyle | TextStyle[] => {
    if (Array.isArray(styleObj)) {
      return styleObj.map((style) => ({
        ...style,
        fontFamily: getFontFamily(style),
      }));
    }

    return {
      ...styleObj,
      fontFamily: getFontFamily(styleObj),
    };
  };

  const computedStyle = [styles.base, style && processStyle(style)].filter(
    Boolean
  );

  return (
    <RNText {...props} style={computedStyle}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create((theme) => ({
  base: {
    color: theme.colors.text,
    fontFamily: FONT_FAMILIES.regular,
    fontSize: theme.typography.body,
  },
}));
