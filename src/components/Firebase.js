import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAcRwZ9q01wVHCsFMxHL32DLUKuBXIAHCA",
    authDomain: "my-portfolio-f14fd.firebaseapp.com",
    projectId: "my-portfolio-f14fd",
    storageBucket: "my-portfolio-f14fd.appspot.com",
    messagingSenderId: "293759576957",
    appId: "1:293759576957:web:e108dba9429231df6e3a14",
    measurementId: "G-E4KV9T24KH"
  };
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
