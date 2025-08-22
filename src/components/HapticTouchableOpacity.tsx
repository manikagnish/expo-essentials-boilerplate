import * as Haptics from "expo-haptics";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface HapticTouchableOpacityProps extends TouchableOpacityProps {
  children: React.ReactNode;
  hapticStyle?: Haptics.ImpactFeedbackStyle;
  disableHaptics?: boolean;
}

export default function HapticTouchableOpacity({
  children,
  onPress,
  hapticStyle = Haptics.ImpactFeedbackStyle.Light,
  disableHaptics = false,
  disabled,
  ...props
}: HapticTouchableOpacityProps) {
  const handlePress: TouchableOpacityProps["onPress"] = (event) => {
    if (!disableHaptics && !disabled) {
      Haptics.impactAsync(hapticStyle);
    }

    onPress?.(event);
  };

  return (
    <TouchableOpacity onPress={handlePress} disabled={disabled} {...props}>
      {children}
    </TouchableOpacity>
  );
}
