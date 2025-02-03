import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAJZM5OpDkyEepNqBRsq3-SsYOA0_YwqHU",
    authDomain: "sotsusei-47bc3.firebaseapp.com",
    databaseURL: "https://sotsusei-47bc3-default-rtdb.firebaseio.com",
    projectId: "sotsusei-47bc3",
    storageBucket: "sotsusei-47bc3.firebasestorage.app",
    messagingSenderId: "211736015692",
    appId: "1:211736015692:web:e6b37dc265dcc5159055e9",
    measurementId: "G-6LD29LYHPD"
};

// Firebase アプリの初期化
const app = initializeApp(firebaseConfig);

// Realtime Database インスタンスの取得
export const database = getDatabase(app);