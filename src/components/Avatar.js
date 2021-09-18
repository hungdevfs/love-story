import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { COLORS } from "../utils/constants"

const testImage =
  "https://codefly.vn/wp-content/uploads/code/2020/12/11934/projecthtml/Source%20Code/uploadImage/Profile/blank_avatar.png"

const Avatar = ({ username, avatar }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: testImage,
        }}
      />
      <Text style={styles.username}>{username}</Text>
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 24,
  },
  avatar: {
    borderRadius: 50,
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  username: {
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.WHITE,
  },
})
