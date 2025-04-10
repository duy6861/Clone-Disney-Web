import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCuTyN8WUmxsZTsFrgrYkYWlai7Pgk2zic",
  authDomain: "disney-plus-61915.firebaseapp.com",
  projectId: "disney-plus-61915",
  storageBucket: "disney-plus-61915.firebasestorage.app",
  messagingSenderId: "438026899242",
  appId: "1:438026899242:web:d58d5e0a861c4f7c715853",
  measurementId: "G-9SXVN5L5GM"
};

// ⚡ Khởi tạo Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// ✅ Khởi tạo các dịch vụ Firebase
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(); // 👉 Đã sửa lỗi
const storage = getStorage(firebaseApp);


export { auth, provider, storage }
export default db;