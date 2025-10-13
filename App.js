import React, { useState } from "react";
import { Alert, View, StyleSheet } from "react-native";
//import axios from "axios";
import Container from "./components/container";
import Txt from "./components/text";
import Input from "./components/input";
import Botao from "./components/button";
import api from "./src/services/api";




export default function App(){

  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');

const BuscarCep = async()=> {

   
    try{

const response = await api.get(`/${cep}/json/`);


setCep(response.data.cep);
setLogradouro(response.data.logradouro);
setBairro(response.data.bairro);
setLocalidade(response.data.localidade);
setUf(response.data.uf);


    }
    
    catch{

console.log('Erro de Conexão' + Error);

    }


  }


return(

<Container>
  <Txt txt={"Cep"} />
  <Input placeholder={"Digite o CEP"} value={cep} onChangeText={setCep}/>
  <Txt txt={"Rua"} />
  <Input  value={logradouro} onChangeText={setLogradouro}/>
  <Txt txt={"Bairro"}/>
  <Input  value={bairro} onChangeText={setBairro} />
  <Txt txt={"Cidade"}  />
  <Input  value={localidade} onChangeText={setLocalidade}/>
  <Txt txt={"Estado"} />
  <Input value={uf} onChangeText={setUf}/>
  
  <Botao txt={"BUSCAR"} onPress={BuscarCep} />
  
</Container>


)

}