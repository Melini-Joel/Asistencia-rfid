import { initializeApp } from
"https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";


const firebaseConfig = {

  apiKey: "AIzaSyA6BnL6Cj9eZ4hJoFOfFn1pWHgTtEPa8zg",
  authDomain: "lista-asistencia-f81e6.firebaseapp.com",
  projectId: "lista-asistencia-f81e6",
  storageBucket: "lista-asistencia-f81e6.firebasestorage.app",
  messagingSenderId: "31864136386",
  appId: "1:31864136386:web:0c03513b61e10422cb915b"

};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export { db };