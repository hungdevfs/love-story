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
  const [partnerId, setPartnerId] = useState(null)
  const [partnerName, setPartnerName] = useState(null)
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
      setPartnerId(data?.partnerId)
      setPartnerName(data?.partnerName)
      setStartDate(data?.startDate)
    }
    setIsCheckingAuthentication(false)
  }

  return (
    <AppContext.Provider
      value={{
        token,
        username,
        partnerId,
        partnerName,
        startDate,
        isCheckingAuthentication,
        isLogged,
        setToken,
        setUsername,
        setPartnerId,
        setPartnerName,
        setStartDate,
        setIsCheckingAuthentication,
        setIsLogged,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
