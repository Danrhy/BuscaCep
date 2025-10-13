import React from "react";
import { View, StyleSheet } from "react-native";



export default function Container({children}){
return(

    <View style={style_Conatiner.cont}>{children}</View>

)

}

const style_Conatiner = StyleSheet.create({

cont:{
    flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#808080",




}


})