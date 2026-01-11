import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Memanggil data dari .env.local yang barusan kita buat
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Inisialisasi Firebase (biar nggak double-init pas refresh halaman)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Export Database (Firestore) biar bisa dipake buat nyimpen Stok & Saldo
export const db = getFirestore(app);