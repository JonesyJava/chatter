import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  // API KEYS
  apiKey: 'AIzaSyCZnOxF4hPizT2nVRIH6NaZrkDP0i-nRXc',
  authDomain: 'firechat2014.firebaseapp.com',
  projectId: 'firechat2014',
  storageBucket: 'firechat2014.appspot.com',
  messagingSenderId: '502905025691',
  appId: '1:502905025691:web:2dae7162e2e8dfb6fe823e',
  measurementId: 'G-86L8NS3501'
}

const db = firebase.initializeApp(config)
export default db
