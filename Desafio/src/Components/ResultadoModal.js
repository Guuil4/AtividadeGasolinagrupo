import React from "react";
import { View, Modal, Text } from "react-native";
import CustomTouchable1 from "./ModalButton";
import Styles from "../style/StyleSheet";
import CustomImagegas from "./ImageModalComponent";

const ResultadoModal = ({ visible, alcool, gasolina, resultado, onClose }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={Styles.modal}>
      <View>
        <CustomImagegas />
        <Text style={Styles.TitleText}>Compensa usar {resultado}</Text>
        <Text style={Styles.middletext}>Com os Preços:</Text>
        <Text style={Styles.modalText}>Valor do Álcool: R$ {alcool}</Text>
        <Text style={Styles.modalText}>Valor da Gasolina: R$ {gasolina}</Text>
        <CustomTouchable1 onPress={onClose} text="Calcular Novamente" />
      </View>
    </View>
  </Modal>
);

export default ResultadoModal;
