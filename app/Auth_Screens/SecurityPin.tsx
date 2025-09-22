import { BackLayout } from "@/components/BackLayout";
import PrimaryButton from "@/components/PrimaryButton";
import { Colors } from "@/constants/Colors";
import { FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";


export default function SecurityPin() {
  // First Header Component
  const FirstComponent = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Security Pin</Text>
    </View>
  );

  // Second Main Content Component
  const SecondComponent = () => (
    <View style={styles.content}>
      <Text style={styles.label}>Enter Security Pin</Text>
      <OtpInput numberOfDigits={6} 
      autoFocus={false}
        theme={{
          pinCodeContainerStyle: styles.circleInput,
          pinCodeTextStyle: styles.inputText,
          
      }} />
      {/* Buttons */}
      <View style={styles.buttons}>
        <PrimaryButton label="Accept" onPress={()=>{router.push("/Auth_Screens/NewPassword")}} />
        <PrimaryButton
          label="Send Again"
          variant="secondary"
         
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>or sign up with</Text>
        <View style={styles.socialWrapper}>
           <FontAwesome5 name="facebook" size={30} color="black" />
        <SimpleLineIcons name="social-google" size={30} color="black" />
        </View>
        <Text style={styles.signup}>
          Don’t have an account? <Text style={styles.link}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );

  return (<BackLayout firstComponents={<FirstComponent />} secondComponent={<SecondComponent />} />)
}

const styles = StyleSheet.create({
    header: {
      alignItems: "center",
      marginBottom: 20,
      paddingTop:40
    },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: Colors.primaryText,
  },
  content: {
    margin:10,
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "flex-start",
    gap:30
  },
  label: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    color: Colors.primaryText,
    marginTop:20
  },
  input: {
    marginBottom: 35,
  },
  buttons: {
    gap: 12,
    marginBottom: 30,
    alignItems:"center"
    ,justifyContent:"center",
    marginTop:10
  },
  footer: {
    marginTop:"auto",
    alignItems: "center",
    marginBottom: 30,
  },
  footerText: {
    fontSize: 14,
    color: Colors.mutedText,
    marginBottom: 10,
  },
  socialWrapper: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 15,
  },
  social: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.primaryText,
    borderWidth: 1,
    borderColor: Colors.primaryText,
    borderRadius: 30,
    width: 40,
    height: 40,
    textAlign: "center",
    lineHeight: 40,
  },
  signup: {
    fontSize: 14,
    color: Colors.mutedText,
  },
  link: {
    color: Colors.linkBlue,
    fontWeight: "600",
  },circleInput: {
    width: 40,
    height: 40,
    borderRadius: 25,   
    borderWidth: 2,
    borderColor: Colors.Greencolor,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 7,
  },
  inputText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
});
