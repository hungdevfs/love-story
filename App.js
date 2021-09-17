import React from "react"
import { StyleSheet, View, StatusBar } from "react-native"

import { AppProvider } from "./src/contexts/AppContext"
import AppNavigator from "./src/navigators/AppNavigator"

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <StatusBar />
        <AppNavigator />
      </View>
    </AppProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
})
