import { BackLayout } from "@/components/BackLayout";
import InputField from "@/components/InputField";
import PrimaryButton from "@/components/PrimaryButton";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NewPassword() {
  // Header
  const FirstComponent = () => (
    <View style={styles.header}>
      <Text style={styles.title}>New Password</Text>
    </View>
  );

  // Content
  const SecondComponent = () => (
    <View style={styles.content}>
      {/* Input Fields */}
      <View style={styles.inputSection}>
        <InputField
          label="New Password"
          placeholder="••••••••"
          secureTextEntry
          rightIcon="eye" // add prop inside InputField for toggle
        />
        <InputField
          label="Confirm New Password"
          placeholder="••••••••"
          secureTextEntry
          rightIcon="eye"
        />
      </View>

      {/* Button */}
      <PrimaryButton onPress={()=>{router.push("/Auth_Screens/Login")}} label="Change Password" variant="primary" />
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
  header: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: Colors.primaryText,
  },
  content: {
    flex: 1,
    width: "100%",
    gap: 30,
    alignItems: "center",
    marginTop:20,
    padding:10
  },
  inputSection: {
    width: "90%",
    gap: 20,
  },
});
