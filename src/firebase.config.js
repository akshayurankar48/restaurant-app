
import {getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCRx97HlzwEcvPGMTidysmuYrkTVYubDRc",
  authDomain: "restaurantapp-a82f0.firebaseapp.com",
  databaseURL: "https://restaurantapp-a82f0-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-a82f0",
  storageBucket: "restaurantapp-a82f0.appspot.com",
  messagingSenderId: "272107159812",
  appId: "1:272107159812:web:2e8d72bb65d22ebf745051"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)


export { app, firestore, storage};
