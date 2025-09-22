import { BackLayout } from "@/components/BackLayout";
import { StyleSheet, Text, View } from "react-native";

export default function Analysis(){
      const FirstComponent = () => {
        return (
          <View >
            <Text >Daison</Text>
          </View>
        );
      };
     const SecondComponent = () => {
        return (
          <View >
            <Text >contant</Text>
          </View>
        );
      };
    
    return(
        <BackLayout firstComponents={<FirstComponent/>} secondComponent={<SecondComponent/>}/>
    )
}

const styles=StyleSheet.create({

})