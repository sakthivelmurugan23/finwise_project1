import InputField from "@/components/InputField";
import PrimaryButton from "@/components/PrimaryButton";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>

        {/* Username */}
        <InputField
          label="Username Or Email"
          placeholder="example@example.com"
          rightIcon
        />

       <InputField
  label="Password"
  placeholder="• • • • • • • •"
  secureTextEntry={!showPassword}
  rightIcon={
    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
      <Ionicons
        name={showPassword ? "eye-off-outline" : "eye-outline"}
        size={20}
        color={Colors.primaryText}
      />
    </TouchableOpacity>
  }
/>

        {/* Log In Button */}
        <PrimaryButton label="Log In" onPress={() => {router.push('/OnBoarding/Home')}} />

        {/* Forgot Password */}
        <TouchableOpacity onPress={() => router.push("/Auth_Screens/ForgotPassWord")}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <PrimaryButton 
          label="Sign Up" 
          variant="secondary"
          onPress={() => router.push("/Auth_Screens/CreateAccount")} 
        />

        {/* Fingerprint */}
        <Text style={styles.fingerprintText}>
          Use <Text style={{ color: Colors.linkBlue }}>Fingerprint</Text> To Access
        </Text>

        {/* Divider */}
        <Text style={styles.orText}>or sign up with</Text>

        {/* Social Icons */}
        <View style={styles.socialContainer}>
          <FontAwesome5 name="facebook" size={30} color="black" />
          <SimpleLineIcons name="social-google" size={30} color="black" />
        </View>

        {/* Bottom Signup Link */}
        <Text style={styles.bottomText}>
          Don’t have an account?{" "}
          <Text 
            onPress={() => router.push("/Auth_Screens/CreateAccount")} 
            style={styles.signUpLink}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.backgroundGreen },
  header: { minHeight: "20%", alignItems: "center", justifyContent: "center" },
  welcomeText: {
    fontFamily: "PoppinsRegular",
    fontSize: 30,
    fontWeight: "700",
    color: Colors.primaryText,
    textAlign: "center",
  },
  formContainer: {
    flex: 1,
    backgroundColor: Colors.whiteBg,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 10,
  },
  forgotPassword: {
    color: Colors.primaryText,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 5,
  },
  fingerprintText: {
    fontSize: 14,
    marginTop: 10,
    color: Colors.primaryText,
    fontWeight: "600",
  },
  orText: { marginTop: 10, color: Colors.mutedText, fontSize: 11 },
  socialContainer: { flexDirection: "row", gap: 30, marginTop: 10 },
  bottomText: { marginTop: 15, fontSize: 14, color: Colors.primaryText },
  signUpLink: { color: Colors.linkBlue, fontSize: 13 },
});
