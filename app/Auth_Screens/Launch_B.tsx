import { Image, Pressable, Text, View } from "react-native";


export default function TabTwoScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F1FFF3",alignItems:"center", justifyContent:"center",gap:30 }}>

      <View style={{  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <Image style={{ width: 109, height: 114 }} source={require("../../assets/images/Logo-vector-green.png")} />
        <Text style={{ fontSize: 52, fontWeight: "bold", color: '#00D09E', fontFamily: "PoppinsRegular" }}>FinWise</Text>
        <Text style={{ fontSize: 12, fontWeight: "400", textAlign: "center", alignSelf: "center", maxWidth: "70%" }}>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod.</Text>
      </View>

      <View style={{ display:"flex" ,flexDirection:"column", width: "100%", alignItems:'center',justifyContent:"center",gap:10}}>
        <Pressable  style={{
          display: 'flex',
          alignItems: "center",
          justifyContent: "center",
          width: "55%",
          height: 45,
          backgroundColor: "#00D09E",
          borderRadius: 50,
        }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#093030", fontFamily: "PoppinsRegular" }}>Log In </Text>
        </Pressable>
        <Pressable style={{
          display: 'flex',
          alignItems: "center",
          justifyContent: "center",
          width: "55%",
          height: 45,
          backgroundColor: "#DFF7E2",
          borderRadius: 50
        }}
        onPress={()=>console.log("round triggredd")}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#093030", fontFamily: "PoppinsRegular" }}>Sign Up </Text>
        </Pressable>
        <Text style={{  fontSize:14,fontWeight:"600"}}>
          Forgot Password ?
        </Text>
      </View>

    </View>
  );
}





