import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

// export default function OnBourding_B() {
//     return (
//         <View style={{
//             flex: 1,
//             backgroundColor: "#00D09E",
//             maxWidth: "100%",
//             minHeight: "30%"
//         }}>

//             <View style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexDirection: "column",
//                 minHeight: '30%'
//             }}>
//                 <Text style={{
//                     fontFamily: 'PoppinsRegular',
//                     fontSize: 30, fontWeight: "600",
//                     color: "#0E3E3E",
//                     textAlign: "center",
//                     maxWidth: "80%",
//                 }}>¿Are you ready to take control of your finaces?</Text>


//             </View>
//             < View style={{
//                 backgroundColor: "#F1FFF3",
//                 flex: 1,
//                 width: '100%',
//                 borderTopLeftRadius: 60,
//                 alignItems: 'center',
//                 borderTopRightRadius: 60,
//                 display: 'flex', flexDirection: "column",
//                 justifyContent: 'center', gap: 10
//             }}>

//                 <Image style={{ width: 287, height: 287 }}
//                     source={require("../../assets/images/bank-card-mobile-phone-online-payment-removebg-preview 1.png")} />
//                 <Pressable onPress={() => router.push("/Auth_Screens/Login")}>
//                     <Text style={{
//                         fontFamily: 'PoppinsRegular',
//                         fontSize: 20, fontWeight: "700",
//                         color: "#0E3E3E",
//                     }}>Next</Text>
//                     <Image style={{ width: 42, height: 13 }} source={require("../../assets/images/next.png")} />
//                 </Pressable>
//             </View>


//         </View>
//     )
// }





import React from "react";
import { Dimensions, FlatList, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

// --- Your custom components ---
const ComponentOne = () => (
  <View style={{
            flex: 1,
            backgroundColor: "#00D09E",
            maxWidth: "100%",
            minHeight: "30%"
        }}>

            <View style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                minHeight: '30%'
            }}>
                <Text style={{
                    fontFamily: 'PoppinsRegular',
                    fontSize: 30, fontWeight: "600",
                    color: "#0E3E3E",
                    textAlign: "center",
                    maxWidth: "80%",
                }}>Welcome To Expense Manager</Text>


            </View>
            < View style={{
                backgroundColor: "#F1FFF3",
                flex: 1,
                width: '100%',
                borderTopLeftRadius: 60,
                alignItems: 'center',
                borderTopRightRadius: 60,
                display: 'flex', flexDirection: "column",
                justifyContent: 'center', gap: 10
            }}>
                <Image style={{ width: 287, height: 287 }} source={require("../../assets/images/ilustracion-3d-mano-dinero-blanco-removebg-preview 1.png")} />
                <Pressable >
                    <Text style={{
                        fontFamily: 'PoppinsRegular',
                        fontSize: 20, fontWeight: "700",
                        color: "#0E3E3E",
                    }}>Next</Text>
                    <Image style={{ width: 42, height: 13 }} source={require("../../assets/images/next.png")} />
                </Pressable>
            </View>
        </View>
);

const ComponentTwo = () => (
  <View style={{
            flex: 1,
            backgroundColor: "#00D09E",
            maxWidth: "100%",
            minHeight: "30%"
        }}>

            <View style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                minHeight: '30%'
            }}>
                <Text style={{
                    fontFamily: 'PoppinsRegular',
                    fontSize: 30, fontWeight: "600",
                    color: "#0E3E3E",
                    textAlign: "center",
                    maxWidth: "80%",
                }}>¿Are you ready to take control of your finaces?</Text>


            </View>
            < View style={{
                backgroundColor: "#F1FFF3",
                flex: 1,
                width: '100%',
                borderTopLeftRadius: 60,
                alignItems: 'center',
                borderTopRightRadius: 60,
                display: 'flex', flexDirection: "column",
                justifyContent: 'center', gap: 10
            }}>
                <Image style={{ width: 287, height: 287 }} source={require("../../assets/images/bank-card-mobile-phone-online-payment-removebg-preview 1.png")} />
                <Pressable onPress={()=>router.push("/Auth_Screens/Login")}>
                    <Text style={{
                        fontFamily: 'PoppinsRegular',
                        fontSize: 20, fontWeight: "700",
                        color: "#0E3E3E",
                    }}>Next</Text>
                    <Image style={{ width: 42, height: 13 }} source={require("../../assets/images/next.png")} />
                </Pressable>
            </View>
        </View>
);
// --- Slider ---
export default function ComponentSlider() {

  const data = [<ComponentOne />, <ComponentTwo />];


  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <View style={{ width }}>{item}</View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  page: { width, height: 250, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },

});
