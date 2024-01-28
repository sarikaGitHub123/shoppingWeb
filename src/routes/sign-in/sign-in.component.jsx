import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'
import {auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = (() => {
    const logGoogleUser = async () => {
        // const response = await signInWithGooglePopup();
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        // console.log(response);
        // createUserDocumentFromAuth(user)
    }
    const getResult = (async()=>{
        const response = await getRedirectResult(auth);
       console.log('responce...',response)
        if(response){
            const userDocRef = await createUserDocumentFromAuth(response.user)
        }
    })
    
//   useEffect(()=>{
//     getResult()  
// },[])
        
    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button>
            <SignUpForm/>
        </div>
    )
})

export default SignIn