import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC85qBd04aedB2d_8ltfKEGV6hQhW8qslw",
  authDomain: "chatdapp-maern.firebaseapp.com",
  databaseURL: "https://chatdapp-maern-default-rtdb.firebaseio.com",
  projectId: "chatdapp-maern",
  storageBucket: "chatdapp-maern.appspot.com",
  messagingSenderId: "322704650394",
  appId: "1:322704650394:web:161bcb1828c1a572faef23"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
