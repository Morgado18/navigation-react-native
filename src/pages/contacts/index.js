
import { View, Text } from "react-native";

import React from "react";

export default function Contacts ({navigation}){
  return (
    <View style={{ marginTop:60 }}>
        <Text>Morgado</Text>
        <Text onPress={()=>navigation.navigate("Information")}>Contacts...</Text>
    </View>
  )
}