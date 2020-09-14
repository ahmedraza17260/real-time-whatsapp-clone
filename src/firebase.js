// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuTXPCLt5j8i3kpJjcPgghFyUhtmZMV-g",
  authDomain: "whatsapp-clone-react-app.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-react-app.firebaseio.com",
  projectId: "whatsapp-clone-react-app",
  storageBucket: "whatsapp-clone-react-app.appspot.com",
  messagingSenderId: "248176622876",
  appId: "1:248176622876:web:dfd83c884866845b028ed9",
  measurementId: "G-HFZEYJSF2B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const providerFb = new firebase.auth.FacebookAuthProvider();

export { provider, auth, providerFb };
export default db;
