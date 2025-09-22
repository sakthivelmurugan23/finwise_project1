import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  label: string;
  onPress?: () => void;
  variant?: "primary" | "secondary";
};

export default function PrimaryButton({ label, onPress, variant = "primary" }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "secondary" && styles.secondaryButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          variant === "secondary" && styles.secondaryText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Greencolor,
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 15,
    width: "60%",
    alignItems: "center",
  },
  secondaryButton: {
    backgroundColor: Colors.GreenLight,
  },
  text: {
    color: Colors.primaryText,
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryText: {
    color: Colors.primaryText,
  },
});
