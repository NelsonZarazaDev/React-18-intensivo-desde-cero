import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Api firebase
};

const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export {db}