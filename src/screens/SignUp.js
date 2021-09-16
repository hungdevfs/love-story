import React, { useState } from "react"
import { Text, TextInput, KeyboardAvoidingView, StyleSheet } from "react-native"

import Button from "../components/Button"
import { COLORS } from "../utils/constants"

const SignUp = () => {
  const [username, setUsername] = useState("")

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <Text style={styles.label}>Your username</Text>
      <TextInput
        style={styles.input}
        placeholder="Your username"
        value={username}
        onChangeText={(value) => setUsername(value)}
      />
      <Button text="Start using love story" backgroundColor={COLORS.RED} />
    </KeyboardAvoidingView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: COLORS.BLUE,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: COLORS.LIGHT,
    marginBottom: 8,
  },
})
