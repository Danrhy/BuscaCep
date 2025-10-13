import React from "react";
import { TextInput, StyleSheet } from "react-native";



export default function Input({placeholder, onChangeText, value}){
return(

    <TextInput style={style_Input.input} placeholder={placeholder} value={value} onChangeText={onChangeText} placeholderTextColor={"#fff"}/>

)

}

const style_Input = StyleSheet.create({

input:{
width:"70%",
height:40,
borderColor:"#fff",
borderRadius:10,
borderWidth:1,
color: "#fff"





}


})