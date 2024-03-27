import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Styles from "./Styles";

const CustomTouchable = ({ onPress, text }) => (
  <TouchableOpacity style={Styles.button} onPress={onPress}>
    <Text style={Styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

export default CustomTouchable;
