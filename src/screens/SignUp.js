import React, { useContext, useState } from "react"
import { Text, TextInput, KeyboardAvoidingView, StyleSheet } from "react-native"

import Button from "../components/Button"
import { COLORS } from "../utils/constants"
import { createUser } from "../services/api"
import { AppContext } from "../contexts/AppContext"

const SignUp = () => {
  const context = useContext(AppContext)
  const [newUsername, setNewUsername] = useState("")
  const { token, setUsername, setIsLogged } = context

  const create = async () => {
    try {
      await createUser(newUsername, token)
      setUsername(newUsername)
      setIsLogged(true)
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <Text style={styles.label}>Your username</Text>
      <TextInput
        style={styles.input}
        placeholder="Your username"
        value={newUsername}
        onChangeText={(value) => setNewUsername(value)}
      />
      <Button
        text="Start using love story"
        backgroundColor={COLORS.RED}
        onPress={create}
      />
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
