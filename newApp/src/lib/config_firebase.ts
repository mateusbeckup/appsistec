import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBY0uG3V2a0DstP6nN1PkivBuR5ALoer9U",
  authDomain: "br-com-sistecweb.firebaseapp.com",
  databaseURL: "https://br-com-sistecweb.firebaseio.com",
  projectId: "br-com-sistecweb",
  storageBucket: "br-com-sistecweb.appspot.com",
  messagingSenderId: "121282619573",
  appId: "1:121282619573:web:eb38bd8616e2eea2b0f6fc",
  measurementId: "G-0ZCN3NHTPC"
};

firebase.initializeApp(firebaseConfig);

export default firebase;