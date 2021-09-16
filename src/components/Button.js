import React from "react"
import { Text, TouchableOpacity, StyleSheet } from "react-native"

import { COLORS } from "../utils/constants"

const Button = ({ backgroundColor, textColor, text, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

Button.defaultProps = {
  backgroundColor: COLORS.BLUE,
  textColor: COLORS.WHITE,
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
  },
})
