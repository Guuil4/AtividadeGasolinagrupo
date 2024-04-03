import React, { useState } from "react";
import { View, Text } from "react-native";
import CustomText from "./src/Components/TextComponent";
import CustomInput from "./src/Components/InputComponent";
import CustomTouchable from "./src/Components/ButtonComponent";
import Styles from "./src/style/StyleSheet";
import CustomImage from "./src/Components/ImageComponent";
import ResultadoModal from "./src/Components/ResultadoModal";

const MyApp = () => {
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [resultado, setResultado] = useState("");

  const calcularCombustivel = () => {
    if (alcool && gasolina) {
      const resultadoCalculo = parseFloat(alcool) / parseFloat(gasolina);
      const recomendacao = resultadoCalculo < 0.7 ? "Álcool" : "Gasolina";
      setResultado(recomendacao);
      setModalVisible(true);
    } else {
      alert("Por favor, insira valores para o preço do Álcool e da Gasolina.");
    }
  };

  const calcularNovamente = () => {
    setAlcool("");
    setGasolina("");
    setResultado("");
    setModalVisible(false);
  };

  return (
    <View style={Styles.container}>
      <CustomImage />
      <CustomText />
      <Text style={Styles.simpleText}>Álcool (preço por litro)</Text>
      <CustomInput
        placeholder="Preço do Álcool"
        value={alcool}
        onChangeText={setAlcool}
      />
      <Text style={Styles.simpleText}>Gasolina (preço por litro)</Text>
      <CustomInput
        placeholder="Preço da Gasolina"
        value={gasolina}
        onChangeText={setGasolina}
      />
      <CustomTouchable onPress={calcularCombustivel} text="Calcular" />
      <ResultadoModal
        visible={modalVisible}
        alcool={alcool}
        gasolina={gasolina}
        resultado={resultado}
        onClose={calcularNovamente}
      />
    </View>
  );
};

export default MyApp;
