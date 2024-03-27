import React from "react";
import { Image } from "react-native";
import Styles from "../style/StyleSheet";

const CustomImage = () => (
  <Image
    source={{
      uri: "https://e7.pngegg.com/pngimages/230/36/png-clipart-gasoline-filling-station-fuel-logo-industry-fuel-station-building-text.png",
    }}
    style={Styles.image}
  />
);

export default CustomImage;
