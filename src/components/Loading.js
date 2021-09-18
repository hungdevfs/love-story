import React, { useContext } from "react"
import { View, StyleSheet } from "react-native"
import { MaterialIndicator } from "react-native-indicators"

import { AppContext } from "../contexts/AppContext"
import { COLORS } from "../utils/constants"

const Loading = () => {
  const context = useContext(AppContext)
  const { isLoading } = context

  if (!isLoading) return null

  return (
    <View style={styles.container}>
      <MaterialIndicator color={COLORS.RED} count={3} />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.OVERLAY,
    alignItems: "center",
    justifyContent: "center",
  },
})
