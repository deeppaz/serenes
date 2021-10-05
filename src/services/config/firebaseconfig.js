import firebase from "firebase";
import API_CONFIG from './Api';

const firebaseConfig = {
  apiKey: API_CONFIG.API_KEY,
  authDomain: API_CONFIG.AUTH_DOMAIN,
  projectId: API_CONFIG.PROJECT_ID,
  storageBucket: API_CONFIG.STORAGE_BUCKET,
  messagingSenderId: API_CONFIG.MESSAGING_SENDER_ID,
  appId: API_CONFIG.APP_ID,
  measurementId: API_CONFIG.MEASUREMENT_ID,
};


const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();


const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
