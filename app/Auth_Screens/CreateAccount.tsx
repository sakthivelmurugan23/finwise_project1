import { BackLayout } from "@/components/BackLayout";
import InputField from "@/components/InputField";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CreateAccount() {
  const FirstComponent = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Create Account</Text>
      </View>
    );
  };

  const SecondComponent = () => {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"} // iOS lifts UI, Android resizes
        keyboardVerticalOffset={80} // adjust if header overlaps
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled" // dismiss keyboard when tapping outside
        >
          <View style={styles.form}>
            {/* Input Fields */}
            <InputField label="Full Name" placeholder="Alex Daison" />
            <InputField
              label="Email"
              placeholder="example@example.com"
              keyboardType="email-address"
              
            />
            <InputField
              label="Mobile Number"
              placeholder="+123 456 789"
              keyboardType="numeric"
            />
            <InputField label="Date Of Birth" placeholder="DD / MM / YYYY" />
            <InputField label="Password" placeholder="• • • • • • • •" secureTextEntry />
            <InputField
              label="Confirm Password"
              placeholder="• • • • • • • •"
              
              secureTextEntry
            />

            {/* Terms & Policy */}
            <Text style={styles.terms}>
              By continuing, you agree to{" "}
              <Text style={styles.link}>Terms of Use</Text> and{" "}
              <Text style={styles.link}>Privacy Policy</Text>.
            </Text>

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Already account */}
            <Text style={styles.footer}>
              Already have an account? <Text onPress={()=>(router.push("/Auth_Screens/Login"))} style={styles.link}>Log In</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };

  return (
    <BackLayout firstComponents={<FirstComponent />} secondComponent={<SecondComponent />} />
  );
}

const styles = StyleSheet.create({
  // First Component container
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: "20%",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: Colors.primaryText,
    textAlign: "center",
  },

  // ScrollView content (ensures scroll space)
  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingBottom: 30, // extra space for keyboard
  },

  // Second Component (Form Section)
  form: {
    width: "100%",
    alignItems: "center",
    paddingTop: 5,
  },

  terms: {
    fontSize: 12,
    color: Colors.primaryText,
    textAlign: "center",
    marginTop: 10,
    width: "80%",
    lineHeight: 18,
  },
  link: {
    color: Colors.linkBlue,
    fontWeight: "600",
  },

  // Button
  button: {
    backgroundColor: Colors.Greencolor,
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 20,
    width: "60%",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.whiteBg,
    fontSize: 16,
    fontWeight: "600",
  },

  // Footer
  footer: {
    fontSize: 13,
    marginTop: 15,
    color: Colors.primaryText,
  },
});
