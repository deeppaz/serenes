import { initializeApp } from "firebase/app";
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

initializeApp(firebaseConfig);

export default firebaseConfig;