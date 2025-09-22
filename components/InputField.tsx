import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type InputFieldProps = {
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
  rightIcon?:React.ReactNode,containerStyle?:any

};

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  rightIcon,containerStyle,...pros
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.mutedText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 6,
  },
  label: {
    fontSize: 14,
    color: Colors.primaryText,
    marginBottom: 6,
    fontWeight: "500",
  },
  input: {
    backgroundColor: Colors.inputBg,
    padding: 14,
    borderRadius: 20,
    fontSize: 15,
    color: Colors.primaryText,
  },
});
