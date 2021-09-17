import React, { useContext } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import { navigatorRef, isReadyRef } from "./rootNavigator"
import { SCREENS } from "../utils/constants"

import Splash from "../components/Splash"
import SignUp from "../screens/SignUp"
import Home from "../screens/Home"

import { AppContext } from "../contexts/AppContext"

const Stack = createStackNavigator()

const AppNavigator = () => {
  const context = useContext(AppContext)
  const { isLogged, isCheckingAuthentication } = context

  if (isCheckingAuthentication) return <Splash />

  return (
    <NavigationContainer
      ref={navigatorRef}
      onReady={() => {
        isReadyRef.current = true
      }}
    >
      {!isLogged ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={SCREENS.SIGN_UP} component={SignUp} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={SCREENS.HOME} component={Home} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}

export default AppNavigator
