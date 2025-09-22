import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  const router=useRouter()
  return (
    <View style={{ flex: 1, backgroundColor: "#00D09E" }}>

      <View style={{ flex: 1, display: 'flex', alignItems: "center", justifyContent: "center" }}>
        <Image source={require("../../assets/images/vector.png")} />
        <Text style={{ fontSize: 52, fontWeight: "bold", color: '#FFFFFF', fontFamily: "PoppinsRegular" }}>FinWise</Text>
      </View>

      <View style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginBottom: 40 }}>
        <Pressable onPress={() => router.push("/Auth_Screens/OnBourding")} style={{ display: 'flex', alignItems: "center", justifyContent: "center", width: "80%", height: 50, backgroundColor: "white", borderRadius: 50 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#00D09E" }}>
            Get Started
          </Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

});
