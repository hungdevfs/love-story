import AsyncStorage from "@react-native-async-storage/async-storage"

import { db } from "../configs/firebase"
import { USERNAME, COLLECTIONS } from "../utils/constants"
import { isNullOrWhiteSpace } from "../utils/helpers"

export const createUser = async (username, token) => {
  if (isNullOrWhiteSpace(username) || isNullOrWhiteSpace(token))
    throw new Error("Invalid value")

  const snapshot = await db.collection(COLLECTIONS.USERS).doc(username).get()
  const data = snapshot.data()
  if (data) throw new Error("Username existed")

  await db.collection(COLLECTIONS.USERS).doc(username).set({ token })
  await AsyncStorage.setItem(USERNAME, username)
}
