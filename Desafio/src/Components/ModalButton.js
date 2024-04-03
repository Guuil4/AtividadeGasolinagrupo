import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Styles from "../style/StyleSheet";

const CustomTouchable1 = ({ onPress, text }) => (
  <TouchableOpacity style={Styles.button1} onPress={onPress}>
    <Text style={Styles.buttonText1}>{text}</Text>
  </TouchableOpacity>
);

export default CustomTouchable1;
