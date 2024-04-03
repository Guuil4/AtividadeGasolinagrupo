import React from "react";
import { Image } from "react-native";
import Styles from "../style/StyleSheet";

const CustomImage = () => (
  <Image source={require("../assets/images/logo.png")} style={Styles.image} />
);

// const CustomImage = () => (
//   <Image source={require("../assets/images/gas.png")} style={Styles.image} />
// );

export default CustomImage;
