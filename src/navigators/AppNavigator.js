import React, { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import { navigatorRef, isReadyRef } from "./rootNavigator"
import { SCREENS } from "../utils/constants"

import SignUp from "../screens/SignUp"
import Home from "../screens/Home"

const Stack = createStackNavigator()

const AppNavigator = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <NavigationContainer
      ref={navigatorRef}
      onReady={() => {
        isReadyRef.current = true
      }}
    >
      {!isLogin ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={SCREENS.SIGN_UP} component={SignUp} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name={SCREENS.HOME} component={Home} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}

export default AppNavigator
