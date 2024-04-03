import React from "react";
import { View, Modal, Text } from "react-native";
import CustomTouchable from "./ButtonComponent";
import Styles from "../style/StyleSheet";

const ResultadoModal = ({ visible, alcool, gasolina, resultado, onClose }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={Styles.modalContainer}>
      <View style={Styles.modalContent}>
        <Text style={Styles.modalText}>
          Valor do Álcool: R$ {alcool}
        </Text>
        <Text style={Styles.modalText}>
          Valor da Gasolina: R$ {gasolina}
        </Text>
        <Text style={Styles.modalText}>
          Recomendação: {resultado}
        </Text>
        <CustomTouchable onPress={onClose} text="Calcular Novamente" />
      </View>
    </View>
  </Modal>
);

export default ResultadoModal;
