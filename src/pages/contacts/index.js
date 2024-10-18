
import { View, Text } from "react-native";

import React from "react";

export default function Contacts ({navigation}){
  return (
    <View>
        <Text>Morgado</Text>
            <Text onPress={()=>navigation.navigate("Information")}>Contacts...</Text>
        </View>
  )
}