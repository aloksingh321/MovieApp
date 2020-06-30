import firebase from 'firebase'

const firebaseConfig = {
  apiKey:'xxxxxxxxxxxxxxxxx',
  authDomain: 'xxxxxxx',
 
  projectId: 'xxxx',
  
  messagingSenderId:'xxxxxxxx',
  appId: 'xxxxxxxxxxx'
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase
