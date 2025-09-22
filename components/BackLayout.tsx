import { Colors } from "@/constants/Colors";
import React from "react";
import { Dimensions, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

// Get device width
const { width } = Dimensions.get("window");

type BackLayoutProps = {
  firstComponents: any; // keep as any (your request)
  secondComponent: any;
  style?: StyleProp<ViewStyle>;
};

export const BackLayout: React.FC<BackLayoutProps> = ({
  firstComponents,
  secondComponent,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {/* Top Green Section */}
      <View style={styles.topSection}>{firstComponents}</View>

      {/* Bottom White Section */}
      <View style={styles.bottomSection}>{secondComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Greencolor,
    maxWidth: "100%",
  },
  topSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "20%", // ✅ shrink to 20%
  },
  bottomSection: {
    backgroundColor: Colors.whiteBg,
    flex: 1, // ✅ takes remaining space
    width: "100%",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    alignItems: "center",
    justifyContent: "flex-start", // form starts from top
    flexDirection: "column",
    gap: 10,
    paddingTop: 20,
  },
});
