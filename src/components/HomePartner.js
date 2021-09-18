import React from "react"
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native"

import ButtonSquare from "./ButtonSquare"
import Button from "./Button"
import Avatar from "./Avatar"
import { calculateDays } from "../utils/helpers"
import { COLORS, FONTSIZES } from "../utils/constants"

const windowWidth = Dimensions.get("window").width

const HomePartner = ({
  username,
  partnerName,
  startDate,
  buttons,
  message,
  setMessage,
  sendMessage,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.avatars}>
          <Avatar username={username} />
          <Avatar username={partnerName} />
        </View>
        <Text style={styles.date}>
          Love days: {calculateDays(startDate, new Date().getTime())}
        </Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          {buttons.slice(0, 2).map((btn, index) => (
            <ButtonSquare
              key={index}
              backgroundColor={btn.backgroundColor}
              textColor={btn.textColor}
              text={btn.text}
              onPress={btn.onPress}
            />
          ))}
        </View>
        <View style={styles.row}>
          {buttons.slice(2, 4).map((btn, index) => (
            <ButtonSquare
              key={index}
              backgroundColor={btn.backgroundColor}
              textColor={btn.textColor}
              text={btn.text}
              onPress={btn.onPress}
            />
          ))}
        </View>
      </View>
      <View style={styles.messageContainer}>
        <TextInput
          style={styles.input}
          multiline
          textAlignVertical="top"
          numberOfLines={4}
          placeholder="Custom message"
          value={message}
          onChangeText={(value) => setMessage(value)}
        />
        <Button
          backgroundColor={COLORS.LIGHT}
          textColor={COLORS.BLACK}
          text="Send message"
          onPress={sendMessage}
        />
      </View>
    </View>
  )
}

export default HomePartner

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    marginBottom: 8,
  },
  avatars: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
  date: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: FONTSIZES.BIG,
    color: COLORS.WHITE,
  },
  buttons: {
    height: windowWidth,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  messageContainer: {
    marginTop: 8,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: COLORS.LIGHT,
    marginBottom: 8,
  },
})
