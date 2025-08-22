import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { FONT_FAMILIES } from "../constants/typography";

export default function RootLayout() {
  const [loaded] = useFonts({
    [FONT_FAMILIES.regular]: require("../../assets/fonts/Raleway-Regular.ttf"),
    [FONT_FAMILIES.medium]: require("../../assets/fonts/Raleway-Medium.ttf"),
    [FONT_FAMILIES.semibold]: require("../../assets/fonts/Raleway-SemiBold.ttf"),
    [FONT_FAMILIES.bold]: require("../../assets/fonts/Raleway-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
