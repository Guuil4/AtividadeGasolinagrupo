import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [visible, setVisible] = useState(false);
  const CombustivelCalculator = () => { 
    const [alcool, setAlcool] = useState(''); 
    const [gasolina, setGasolina] = useState(''); 
    const [modalVisible, setModalVisible] = useState(false); 
    const [resultado, setResultado] = useState(''); 
    const calcularCombustivel = () => { 
      const resultadoCalculo = parseFloat(alcool) / parseFloat(gasolina); 
      const recomendacao = resultadoCalculo < 0.7 ? 'Álcool' : 'Gasolina'; setResultado(recomendacao); setModalVisible(true); }; 
      const calcularNovamente = () => { setAlcool(''); setGasolina(''); setResultado(''); setModalVisible(false); };

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Qual melhor opção? </Text>
      <Text>Álcool (preço por litro): </Text>
      <TextInput>
        
      </TextInput>

      <Text>Gasolina (preço por litro): </Text>


      <Button title="Open modal" onPress={() => visModal(true)} />
      <Modal transparent={true} animationType="fade" visible={visible}></Modal>

      <StatusBar style="auto" />
    </View>
  );
}

//texts pra colocar dentro do modal!!
{/* <Text>Compensa usar (resultado do calculo) </Text>
<Text>Com os preços:</Text>
<Text>Álcool: R$(preço)</Text>
<Text>:Gasolina R$(preço)</Text>
 */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
