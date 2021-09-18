import React, { useContext, useState } from "react"
import { View, StyleSheet } from "react-native"

import { AppContext } from "../contexts/AppContext"
import HomeSingle from "../components/HomeSingle"
import HomePartner from "../components/HomePartner"

import { isNullOrWhiteSpace } from "../utils/helpers"
import { COLORS } from "../utils/constants"
import { addPartner } from "../services/api"
import { sendNotification } from "../services/notificationService"

const Home = () => {
  const context = useContext(AppContext)
  const {
    username,
    partnerName,
    partnerToken,
    startDate,
    setPartnerName,
    setPartnerToken,
    setStartDate,
    setIsLogged,
    setIsLoading,
  } = context

  const [newPartnerName, setNewPartnerName] = useState("")
  const [newStartDate, setNewStartDate] = useState(null)

  const [message, setMessage] = useState("")

  const isSingle = !partnerName

  const onAddPartner = async () => {
    setIsLoading(true)
    try {
      const res = await addPartner(
        username,
        new Date(newStartDate).getTime(),
        newPartnerName
      )
      setPartnerName(res.partnerName)
      setPartnerToken(res.partnerToken)
      setStartDate(res.startDate)
      setIsLogged(true)
    } catch (err) {
      alert(err.message)
    }
    setIsLoading(false)
  }

  const notify = async (title, body) => {
    try {
      await sendNotification({
        to: partnerToken,
        title,
        body,
      })
    } catch (err) {
      alert(err.message)
    }
  }

  const buttons = [
    {
      text: "I love you!",
      backgroundColor: COLORS.RED,
      textColor: COLORS.WHITE,
      icon: "love",
      onPress: () => notify(`${username} wants to say to you`, "I love you!"),
    },
    {
      text: "Come hereeee!",
      backgroundColor: COLORS.GREEN,
      textColor: COLORS.WHITE,
      icon: "travel",
      onPress: () => notify(`${username} wants to say to you`, "Come hereeee!"),
    },
    {
      text: "Get away from me!",
      backgroundColor: COLORS.YELLOW,
      textColor: COLORS.BLACK,
      icon: "angry",
      onPress: () =>
        notify(`${username} wants to say to you`, "Get away from me!"),
    },
    {
      text: "I hate you!!!",
      backgroundColor: COLORS.GRAY,
      textColor: COLORS.BLACK,
      icon: "hate",
      onPress: () =>
        notify(`${username} hates you so much. What did you do???`, null),
    },
  ]

  return (
    <View style={styles.container}>
      {isSingle ? (
        <HomeSingle
          partnerName={newPartnerName}
          setPartnerName={setNewPartnerName}
          startDate={newStartDate}
          setStartDate={setNewStartDate}
          onPress={onAddPartner}
        />
      ) : (
        <HomePartner
          buttons={buttons}
          startDate={startDate}
          message={message}
          setMessage={setMessage}
          sendMessage={async () => {
            if (isNullOrWhiteSpace(message)) return
            await notify(`You got a message from ${username}`, message)
            setMessage("")
          }}
          username={username}
          partnerName={partnerName}
        />
      )}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: COLORS.BLUE,
  },
})
