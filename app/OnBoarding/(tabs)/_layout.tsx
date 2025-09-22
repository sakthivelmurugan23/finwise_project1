import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";
import React from "react";

const TabLayouts=()=>{
   return(
    <Tabs screenOptions={{tabBarStyle:{
      backgroundColor:Colors.Greencolor
    }}}>
      <Tabs.Screen name="Home"  options={{headerShown:false,title:undefined }} />
      <Tabs.Screen name="Analysis"  options={{headerShown:false, }} />
      <Tabs.Screen name="Transaction"  options={{headerShown:false, }} />
    </Tabs>
   )
}
export default TabLayouts