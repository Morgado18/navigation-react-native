

import React from "react";

import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack";

import Contacts from "./src/pages/contacts/index";
import Information from "./src/pages/information/index";

const Stack = createStackNavigator();

export default function App (){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Information" component={Information} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}