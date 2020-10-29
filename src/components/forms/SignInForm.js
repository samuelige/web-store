import React, { useState } from 'react'
import { auth, signInWithGoogle } from '../../Firebase/firebase.utils';
import CustomButton from './form-custom-button/customButton';
import FormInput from './FormInput';
import './SignInForm.scss'

const SignInForm = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
    })


    const handleChange = (e) => {
        const {value, name } = e.target;

        setState({[name]: value});
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setState({email: '', password: ''}); //Set the input field back to an empty string
        } catch (error) {
            console.log(error);
        }

        
    }
    console.log(state)
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="email" type='email' value={state.email} handleChange={handleChange} label="Email" required/>
                    
                <FormInput name="password" type='password' value={state.password} handleChange={handleChange} label="Password" required/>
                <div className="btn">
                <CustomButton type="submit">SIGN IN</CustomButton>
                <CustomButton className="google" onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                </div>
                
                

                
            </form>
        </div>
    )
}

export default SignInForm
