 import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDD36hhjDnM8xfVPczeplbZI6mUq6f2qYE",
    authDomain: "school-attendence-app-c9364.firebaseapp.com",
    databaseURL: "https://school-attendence-app.firebaseio.com",
    projectId: "school-attendence-app-c9364",
    storageBucket: "school-attendence-app-c9364.appspot.com",
    messagingSenderId: "962824220028",
    appId: "1:962824220028:web:22224bdb90086c4b5a88f9"
  };

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

  