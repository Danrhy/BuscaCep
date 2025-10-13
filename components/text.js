import React from "react";
import { Text, StyleSheet } from "react-native";



export default function Txt({txt}){
return(

    <Text style={style_Txt.txt}>{txt}</Text>

)

}

const style_Txt= StyleSheet.create({

txt:{
alignSelf:"stretch",
fontSize:15,
color:"#fff",
padding:'10',
marginLeft:50,
marginTop:20,




}


})