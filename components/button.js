import React from "react";
import { TouchableOpacity, StyleSheet,Text } from "react-native";



export default function Botao({txt, onPress}){
return(

    <TouchableOpacity style={style_Btn.btn} onPress={onPress}>
<Text style={style_Btn.txt}>{txt}</Text>

    </TouchableOpacity>

)

}

const style_Btn = StyleSheet.create({

btn:{
    width:"80%",
    height:40,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#FFFF",
borderColor:"#808080",
borderRadius:10,
marginTop:20,

},
txt:{
color:"#202020",
fontSize:10,
textAlign:"center",

}


})