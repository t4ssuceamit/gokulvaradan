import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAsaTZEfiglU46CQXTTBSs0SjP7M3snlRM",
    authDomain: "gokulvaradan-6921c.firebaseapp.com",
    databaseURL: "https://gokulvaradan-6921c.firebaseio.com",
    projectId: "gokulvaradan-6921c",
    storageBucket: "gokulvaradan-6921c.appspot.com",
    messagingSenderId: "594334966809",
    appId: "1:594334966809:web:589455234a8735f0c8b688",
    measurementId: "G-11L0XEWTX2"
}

firebase.initializeApp(firebaseConfig)
export default firebase