import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD8mCuqv8wWhw_laUVR4FfK4b4v9dy3p6U",
  authDomain: "crwn-clothing-db-e5a5a.firebaseapp.com",
  projectId: "crwn-clothing-db-e5a5a",
  storageBucket: "crwn-clothing-db-e5a5a.appspot.com",
  messagingSenderId: "529713818573",
  appId: "1:529713818573:web:2de753750e59f41b8a7284",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth)=>{
 const userDocRef = doc(db,'users',userAuth.uid)
 console.log('userDocRef',userDocRef)
 const userSnapShot = await getDoc(userDocRef);

 console.log('userSnapShot..',userSnapShot)
 console.log('userSnapShot exists..',userSnapShot.exists());

 //if user data exists

 if(!userSnapShot.exists()){
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try{
   await setDoc(userDocRef,{
    displayName,
    email,
    createdAt
   })
    }catch (e){
    console.log('error..',e)
    }
 }

 return userDocRef
 //if user data not exists

}