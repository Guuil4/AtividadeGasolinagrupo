import React from "react";
import { TextInput } from "react-native";
import Styles from "./Styles";

const CustomInput = ({ placeholder, value, onChangeText }) => (
  <TextInput
    style={Styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    keyboardType="numeric"
  />
);

export default CustomInput;
