import React, { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as Notifications from "expo-notifications"

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
  const [partner, setPartner] = useState(null)
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
    }
    setIsCheckingAuthentication(false)
  }

  return (
    <AppContext.Provider
      value={{
        token,
        username,
        partner,
        isCheckingAuthentication,
        isLogged,
        setToken,
        setUsername,
        setPartner,
        setIsCheckingAuthentication,
        setIsLogged,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
