

import React from "react";

import { NavigationContainer } from "@react-navigation/native"; 
import { createDrawerNavigator } from "@react-navigation/drawer";

import Contacts from "./src/pages/contacts/index";
import Information from "./src/pages/information/index";

const Drawer = createDrawerNavigator();

export default function App (){
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Contacts" component={Contacts} />
        <Drawer.Screen name="Information" component={Information} ></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}