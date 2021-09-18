import React from "react"
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native"

import { COLORS } from "../utils/constants"
import Images from "../utils/Images"

const ButtonSquare = ({ backgroundColor, textColor, text, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      {icon && <Image style={styles.icon} source={Images[icon]} />}
    </TouchableOpacity>
  )
}

export default ButtonSquare

ButtonSquare.defaultProps = {
  backgroundColor: COLORS.BLUE,
  textColor: COLORS.WHITE,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  icon: {
    width: 30,
    height: 30,
  },
})
