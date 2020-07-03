import * as firebase from "firebase"
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyASzSm_JyyMbuTT7xtul6TAYCDvGQiqcK8",
    authDomain: "fixmycar-9038a.firebaseapp.com",
    databaseURL: "https://fixmycar-9038a.firebaseio.com",
    projectId: "fixmycar-9038a",
    storageBucket: "fixmycar-9038a.appspot.com",
    messagingSenderId: "472645358792",
    appId: "1:472645358792:web:8c45f42b2a69e9bb0141fd"
};

const firebaseApp =
    firebase.app.length > 0
        ? firebase.initializeApp(firebaseConfig)
        : firebase.app();

const db = firebaseApp.firestore();
//export default db;
export { db, firebase };
