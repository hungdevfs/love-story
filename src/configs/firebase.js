import firebase from "firebase/app"
import "firebase/firestore"

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBiMlPtUtSHqL4wZ599d4pB4LBsfBZsMRI",
  authDomain: "love-story-804be.firebaseapp.com",
  projectId: "love-story-804be",
  storageBucket: "love-story-804be.appspot.com",
  messagingSenderId: "428747433035",
  appId: "1:428747433035:web:0e78ebad29b85b46e799ce",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp

export const db = firebase.firestore()
