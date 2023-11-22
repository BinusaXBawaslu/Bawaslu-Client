import 'firebase/app'
import { initializeApp } from 'firebase/app'

import 'firebase/storage'
import { getStorage } from 'firebase/storage'

 const firebaseConfig = initializeApp({
   apiKey: "AIzaSyChHgtcLDYQQn2gmMkdnWcEY2ZSrPT9Pq8",
   authDomain: "foto-firebase-71227.firebaseapp.com",
   projectId: "foto-firebase-71227",
   storageBucket: "foto-firebase-71227.appspot.com",
   messagingSenderId: "674048805740",
   appId: "1:674048805740:web:3178246f15f53d2f458149"
 })

 const storage = getStorage(firebaseConfig);

 export default storage;