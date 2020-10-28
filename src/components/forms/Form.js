import React from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import './Form.scss'


const Form = () => {
    
    return (
        <div className="sign-in-and-sign-up">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Form
