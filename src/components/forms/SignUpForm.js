import React, { useReducer } from 'react'
import { auth, createUserProfileDocument } from '../../Firebase/firebase.utils'
import CustomButton from './form-custom-button/customButton'
import FormInput from './FormInput'
import './SignUpForm.scss'

const SignUpForm = () => {
    const signUpReducer = (state, action) => {
        switch(action.type) {
            case 'CHANGE':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                };
            case 'SUBMIT':
                return {
                    ...state,
                    displayName: '',
                    email: '',
                    password: '',
                    comfirmPassword: '',
                }
            default:
                return state;
        }
    }
    const [signUpState, dispatch] = useReducer(signUpReducer, {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const {displayName, email, password, confirmPassword} = signUpState
    const handleChange = (e) => {
        dispatch({
            type: 'CHANGE',
            payload: e.currentTarget,
        })
    }

    const handSubmit = async event => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert(`passwords don't martch`);
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            dispatch({
                type: 'SUBMIT'
            });

        } catch(error) {
            console.error(error);
        }
    };

    
    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handSubmit}>
                <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'> SIGN UP </CustomButton>
            </form>
        </div>
    )
}

export default SignUpForm
