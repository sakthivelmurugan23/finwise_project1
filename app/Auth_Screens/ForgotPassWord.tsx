// ForgotPassword.tsx
import { BackLayout } from "@/components/BackLayout";
import InputField from "@/components/InputField";
import PrimaryButton from "@/components/PrimaryButton";
import { Colors } from "@/constants/Colors";
import { FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ForgotPassword() {
  const FirstComponent = () => (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Forgot Password</Text>
    </View>
  );

  const SecondComponent = () => (
    <View style={styles.form}>
      {/* Reset Info (LEFT ALIGNED) */}
      <View style={styles.resetContainer}>
        <Text style={styles.heading}>Reset Password?</Text>
        <Text style={styles.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      {/* Email Input Section */}
      <View style={styles.inputSection}>
        <InputField
          label="Enter Email Address"
          placeholder="example@example.com"
        />
      </View>

      {/* Next Step Button */}
      <PrimaryButton  onPress={()=>(router.push("/Auth_Screens/SecurityPin"))} label="Next Step" />

      {/* Sign Up */}
      <PrimaryButton label="Sign Up" variant="secondary" />

      {/* OR */}
      <Text style={styles.orText}>or sign up with</Text>

      {/* Social icons */}
      <View style={styles.socialContainer}>
        <FontAwesome5 name="facebook" size={28} color="black" />
        <SimpleLineIcons name="social-google" size={28} color="black" />
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        Don’t have an account? <Text style={styles.link}>Sign Up</Text>
      </Text>
    </View>
  );

  return (
    <BackLayout
      firstComponents={<FirstComponent />}
      secondComponent={<SecondComponent />}
    />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: Colors.primaryText,
    textAlign: "center",
  },
  form: {
    width: "100%",
    paddingHorizontal: 25,
    paddingVertical: 20,
    gap: 10,
    alignItems: "center", // keeps most items centered
  },
  resetContainer: {
    width: "100%",
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.Greentextcolor,
    marginBottom: 6,
    textAlign: "left",
  },
  subText: {
    fontSize: 13,
    textAlign: "left",
    color: Colors.Greentextcolor,
    lineHeight: 18,
  },
  inputSection: {
    width: "100%",
    marginBottom: 15,
  },
  orText: {
    fontSize: 12,
    color: Colors.Greentextcolor,
    textAlign: "center",
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
  footer: {
    fontSize: 13,
    marginTop: 20,
    textAlign: "center",
    color: Colors.Greentextcolor,
  },
  link: {
    color: Colors.linkBlue,
    fontWeight: "600",
  },
});
