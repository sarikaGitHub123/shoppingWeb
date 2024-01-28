import { useState } from "react"
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { auth } from "../../utils/firebase/firebase.utils";
import {createUserWithEmailAndPassword} from "firebase/auth"
import FormInput from "../form-input/form-input.component";
import '../sign-up-form/sign-up-form.styles.scss'
import Button from "../button/button.component";

const SignUpForm = () => {

    const defaultFormFeild = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
       
    const [formFields, setFormFields] = useState(defaultFormFeild);
    const { displayName, email, password, confirmPassword } = formFields;

const resetFormFields = ()=>{
    setFormFields(defaultFormFeild);
}

    const handleSubmit = async(event)=>{
        event.preventDefault();

        if(password!==confirmPassword){
            alert('Password Not matching');
            return;
        }
        try{
            console.log('email',email,'password',password)
          const {user} = await createAuthUserWithEmailAndPassword(email,password);
          await createUserDocumentFromAuth(user,{displayName});
           resetFormFields();
          console.log('signUp responce',user)
        }catch(error){
            if(error.code ==='auth/email-already-in use'){
                alert('Caanot create user, email already in use')
            }
           console.log('Error in signUp',error)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    // console.log('form values', formFields)
    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <FormInput label={'Dispaly name'} type="text" required onChange={handleChange} name="displayName" defaultValue={displayName} />

                <FormInput label={'Email'} type="email" required onChange={handleChange} name="email" defaultValue={email}  />

                <FormInput label={'Password'} type="password" required onChange={handleChange} name="password" defaultValue={password} />

                <FormInput label={'Confirm Password'} type="password" required onChange={handleChange} name="confirmPassword" defaultValue={confirmPassword} />

                {/* <button type="submit">Sign in</button> */}
                <Button  type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm