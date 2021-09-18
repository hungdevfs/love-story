import React, { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as Notifications from "expo-notifications"

import { getUser } from "../services/api"
import { registerForPushNotificationsAsync } from "../services/notificationService"
import { USERNAME } from "../utils/constants"

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
})

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState("")
  const [username, setUsername] = useState("")
  const [partnerName, setPartnerName] = useState(null)
  const [partnerToken, setPartnerToken] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [isCheckingAuthentication, setIsCheckingAuthentication] = useState(true)
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    try {
      await getToken()
      await checkAuth()
    } catch (err) {
      alert(err.message)
    }
  }

  const getToken = async () => {
    const newToken = await registerForPushNotificationsAsync()
    setToken(newToken)
  }

  const checkAuth = async () => {
    const user = await AsyncStorage.getItem(USERNAME)
    if (user) {
      setUsername(user)
      setIsLogged(true)
      const data = await getUser(user)
      if (data?.partnerName) {
        setPartnerName(data.partnerName)
        setStartDate(data.startDate)

        const partner = await getUser(data.partnerName)
        setPartnerToken(partner.token)
      }
    }
    setIsCheckingAuthentication(false)
  }

  return (
    <AppContext.Provider
      value={{
        token,
        username,
        partnerName,
        partnerToken,
        startDate,
        isCheckingAuthentication,
        isLogged,
        setToken,
        setUsername,
        setPartnerName,
        setPartnerToken,
        setStartDate,
        setIsCheckingAuthentication,
        setIsLogged,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
