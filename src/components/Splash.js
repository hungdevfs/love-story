import React from "react"
import { View, ImageBackground, StyleSheet } from "react-native"

import Images from "../utils/Images"

const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.splash}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
})
