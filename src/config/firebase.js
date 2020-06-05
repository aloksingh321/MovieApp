import firebase from 'firebase'

const firebaseConfig = {
  apiKey:'AIzaSyCaqGLmItH3LOQgJ58Ia-rIX7g7FnPcViA',
  authDomain: 'react-native-ce4d2.web.app',
 
  projectId: 'react-native-ce4d2',
  
  messagingSenderId:'424048184536',
  appId: '1:424048184536:android:25abeb8161cb8ac368dbad'
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase