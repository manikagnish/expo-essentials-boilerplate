import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import HapticTouchableOpacity from "./HapticTouchableOpacity";
import Text from "./Text";

export default function Button({
  title,
  onPress,
  style,
  icon,
}: {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  icon?: React.ReactNode;
}) {
  return (
    <HapticTouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {icon}
      <Text style={styles.text}>{title}</Text>
    </HapticTouchableOpacity>
  );
}

const styles = StyleSheet.create((theme) => ({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },

  text: {
    color: theme.colors.neutralWhite,
    fontSize: theme.typography.body,
  },
}));
