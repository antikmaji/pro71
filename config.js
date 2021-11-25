import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyA9Xes5Rhsq1p6dZbUeBRELfjmOBjBzffU",
  authDomain: "pro71-b2a81.firebaseapp.com",
  projectId: "pro71-b2a81",
  storageBucket: "pro71-b2a81.appspot.com",
  messagingSenderId: "809857155015",
  appId: "1:809857155015:web:cf2daa64d567249834a3e2"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


