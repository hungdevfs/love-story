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

export const getUser = async (username) => {
  const snapshot = await db.collection(COLLECTIONS.USERS).doc(username).get()
  return snapshot.data()
}

export const addPartner = async (username, startDate, partnerName) => {
  if (isNullOrWhiteSpace(startDate))
    throw new Error(
      "You have pick the day you have started falling in love with each other"
    )
  if (isNullOrWhiteSpace(partnerName))
    throw new Error("Invalid partner username")

  const snapshot = await db.collection(COLLECTIONS.USERS).doc(partnerName).get()
  const partner = snapshot.data()
  if (!partner) throw new Error("Username doesn't exist")

  await db
    .collection(COLLECTIONS.USERS)
    .doc(username)
    .update({ partnerName, startDate })
  return { partnerName, partnerToken: partner.token, startDate }
}
