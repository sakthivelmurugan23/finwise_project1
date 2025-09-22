import { BackLayout } from "@/components/BackLayout";
import { StyleSheet, Text, View } from "react-native";

export default function Transaction(){
      const FirstComponent = () => {
        return (
          <View >
            <Text >top</Text>
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