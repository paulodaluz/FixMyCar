import * as firebase from "firebase"
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCiQ385w0l9v6JlfSKDjS3WfVg103G7IAY",
    authDomain: "fixmycar-c4163.firebaseapp.com",
    databaseURL: "https://fixmycar-c4163.firebaseio.com",
    projectId: "fixmycar-c4163",
    storageBucket: "fixmycar-c4163.appspot.com",
    messagingSenderId: "71209466246",
    appId: "1:71209466246:web:165400e9a77b036c85d407"
};

const firebaseApp = firebase.app.length > 0 ?
    firebase.initializeApp(firebaseConfig)
    :
    firebase.app()

const db = firebaseApp.firestore()
export { db, firebase }