import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
        getAuth,
        signInWithEmailAndPassword, 
        signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7IicnSIiaf0-OMLKG_goF0ZXYBqUmqQc",
  authDomain: "netflix-clone-a32cf.firebaseapp.com",
  projectId: "netflix-clone-a32cf",
  storageBucket: "netflix-clone-a32cf.firebasestorage.app",
  messagingSenderId: "316322890371",
  appId: "1:316322890371:web:d5ad919d41de1d1c91d1b6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error)
        alert(error)
    }
}

const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db , login, signup , logout}