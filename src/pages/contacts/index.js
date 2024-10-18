
import { View, Text } from "react-native";

import React from "react";

export default function Contacts ({navigation}){
  return (
    <View style={{ marginTop:60 }}>
        <View>
            <Text>Nome: Morgado Andrade de Melo</Text>
            <Text>Telefone: 930 811 316</Text>
            <Text onPress={()=>navigation.navigate("Information", 
                {
                    nome: "Morgado Andrade de Melo",
                    telefone: "930 811 316",
                    "profissao": "ROGRAMADOR",
                    "email": "morgadoandrade01@gmail.com",
                    "n": "212717128",
                    "endereco": "Viana, Bar",
                }
                )}>More Information...</Text>
        </View>
        <View style={{ marginTop:20 }}>
            <Text>Nome: Luzia Margarida de Andrade</Text>
            <Text>Telefone: 943 577 297</Text>
            <Text onPress={()=>navigation.navigate("Information",                 
                {
                    nome: "Luzia Andrade de Melo",
                    telefone: "943 577 297",
                    "profissao": "EMPREENDEDORA INFORMAL",
                    "email": "luziaandrade@gmail.com",
                    "n": "675873",
                    "endereco": "Viana, Bela Vista",
                }
            )}>More Information...</Text>
        </View>
    </View>
  )
}