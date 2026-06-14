import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDI9HTqoa_xXUW_uK9m-M8-Z6wI885M6-o",
  authDomain: "interviewiq-ba6b6.firebaseapp.com",
  projectId: "interviewiq-ba6b6",
  storageBucket: "interviewiq-ba6b6.firebasestorage.app",
  messagingSenderId: "677022707082",
  appId: "1:677022707082:web:4f6202462e912bc8ca3be4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app;