import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCOByj8BmFd6KbtpBnqf2IDIdySWz5iRik",
  authDomain: "elibrarybonch.firebaseapp.com",
  projectId: "elibrarybonch",
  storageBucket: "elibrarybonch.appspot.com",
  messagingSenderId: "789369466567",
  appId: "1:789369466567:web:bd272a59778aa45f0218e2",
  measurementId: "G-Z4KXC4W42X"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
