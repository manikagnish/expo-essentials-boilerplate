import React from "react";
import { Platform, StyleProp, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, useUnistyles } from "react-native-unistyles";

export default function Container({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const { theme } = useUnistyles();

  return (
    <View style={[styles.container, style]}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: theme.spacing.md,
          paddingTop: Platform.OS === "ios" ? 0 : 10,
        }}
      >
        {children}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));
