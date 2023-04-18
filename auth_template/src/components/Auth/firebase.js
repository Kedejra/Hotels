import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC9vDPGFSf_T7zcmGK5xl5wDmYBYpydacI",
    authDomain: "nscc-security-class.firebaseapp.com",
    projectId: "nscc-security-class",
    storageBucket: "nscc-security-class.appspot.com",
    messagingSenderId: "245708603266",
    appId: "1:245708603266:web:d52acb116912d64362599b"
  };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth,app}